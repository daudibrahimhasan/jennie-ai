import React from 'react';
import { Key, Shield, Check, X, Server } from 'lucide-react';
import { useAppStore } from './useAppStore';

export const BYOKModal: React.FC = () => {
  const { isSettingsOpen, setIsSettingsOpen, apiKey, setApiKey } = useAppStore();

  if (!isSettingsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#010542]/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#cccff3] animate-in fade-in zoom-in-95">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-[#323dd6]/10 text-[#323dd6] flex items-center justify-center">
              <Key className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-base text-[#010542]">BYOK Credentials</h3>
          </div>
          <button
            onClick={() => setIsSettingsOpen(false)}
            className="text-[#697282] hover:text-[#1e2938] p-1 rounded-md cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-[#4a5565] leading-relaxed mb-4">
          Connect your direct LLM key. Key material is stored locally in client hardware storage and dispatched directly to provider endpoints without logging servers.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#1e2938] mb-1">
              Provider API Key (OpenAI / Anthropic / Gemini)
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-proj-..."
              className="w-full bg-[#f9fafb] border border-[#d1d5dc] focus:border-[#323dd6] rounded-lg px-3 py-2 text-xs font-mono text-[#1e2938] outline-none transition-all"
            />
          </div>

          <div className="p-3 bg-[#f5f5fa] rounded-lg border border-[#e5e7eb] text-[11px] text-[#697282] flex items-start space-x-2">
            <Shield className="w-4 h-4 text-[#109769] shrink-0 mt-0.5" />
            <span>Direct-to-provider latency • Zero intermediary logging • Local encryption</span>
          </div>

          <button
            onClick={() => setIsSettingsOpen(false)}
            className="w-full bg-[#323dd6] hover:bg-[#1722be] text-white font-semibold py-2.5 rounded-xl text-xs transition-all shadow-md shadow-[#323dd6]/20 cursor-pointer"
          >
            Save Key & Continue
          </button>
        </div>
      </div>
    </div>
  );
};
