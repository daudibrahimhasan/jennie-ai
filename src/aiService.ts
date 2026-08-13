/**
 * openJennie BYOK AI Completion Adapter
 * Direct client-to-provider dispatch for Gemini, OpenAI, and Anthropic endpoints.
 */

export async function generateGroundedGhostText(
  documentContent: string,
  apiKey: string,
  model: string = 'gemini-3.6-flash'
): Promise<string> {
  if (!apiKey || apiKey.trim().length === 0 || !documentContent || documentContent.trim().length === 0) {
    return '';
  }

  const cleanKey = apiKey.trim();
  const trimmedContent = documentContent.trim().slice(-800); // Send last 800 chars for context

  const promptText = `You are openJennie AI academic writing assistant. Read the existing academic text below and generate EXACTLY ONE short, context-aware continuation sentence (under 25 words). Do not repeat existing words. Do not use quotes or introductory commentary.

Existing Academic Text:
${trimmedContent}`;

  // 1. OpenAI Key (sk-...)
  if (cleanKey.startsWith('sk-proj-') || (cleanKey.startsWith('sk-') && !cleanKey.startsWith('sk-ant-'))) {
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cleanKey}`
        },
        body: JSON.stringify({
          model: model.includes('gpt') ? model : 'gpt-4o',
          messages: [{ role: 'user', content: promptText }],
          temperature: 0.3,
          max_tokens: 60
        })
      });
      const data = await res.json();
      if (data.choices && data.choices[0]?.message?.content) {
        return ' ' + data.choices[0].message.content.trim();
      }
    } catch (e) {
      console.warn('OpenAI completion failed:', e);
    }
  }

  // 2. Anthropic Key (sk-ant-...)
  if (cleanKey.startsWith('sk-ant-')) {
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': cleanKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 60,
          messages: [{ role: 'user', content: promptText }]
        })
      });
      const data = await res.json();
      if (data.content && data.content[0]?.text) {
        return ' ' + data.content[0].text.trim();
      }
    } catch (e) {
      console.warn('Anthropic completion failed:', e);
    }
  }

  // 3. Default: Gemini API (AQ... / Google API Key)
  const targetGeminiModel = model.includes('gemini') ? model : 'gemini-3.6-flash';
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${targetGeminiModel}:generateContent?key=${cleanKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: promptText }]
        }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 60
        }
      })
    });

    const data = await res.json();
    if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
      const text = data.candidates[0].content.parts[0].text.trim();
      return text.startsWith(' ') ? text : ' ' + text;
    } else if (data.error) {
      console.warn('Gemini API returned error:', data.error.message);
    }
  } catch (e) {
    console.warn('Gemini completion failed:', e);
  }

  return '';
}
