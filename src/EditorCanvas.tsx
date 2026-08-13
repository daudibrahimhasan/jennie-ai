import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Search, Check, RefreshCw, FileText, Bookmark, ExternalLink, Loader2 } from 'lucide-react';
import { useAppStore } from './useAppStore';

export const EditorCanvas: React.FC = () => {
  const { 
    content, 
    setContent, 
    ghostText, 
    setGhostText, 
    acceptGhostText, 
    rejectGhostText,
    setSelectedText,
    selectionPosition,
    selectedText,
    setActiveRightPanel,
    setSearchQuery,
    insertedCitations,
    executeSearch,
    generateLiveGhostText,
    isGeneratingGhost
  } = useAppStore();

  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keyboard shortcut handlers for ghost text
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (ghostText) {
      if (e.key === 'Tab') {
        e.preventDefault();
        acceptGhostText();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        rejectGhostText();
      }
    }
  };

  // Autocomplete trigger after 900ms debounce calling BYOK LLM API
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    setGhostText(''); // clear existing ghost text on user typing

    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);

    if (newContent.trim().length > 15) {
      debounceTimerRef.current = setTimeout(() => {
        generateLiveGhostText();
      }, 900);
    }
  };

  // Handle Text Selection for Floating Toolbar
  const handleMouseUp = () => {
    const windowSelection = window.getSelection();
    if (windowSelection && windowSelection.toString().trim().length > 0) {
      const text = windowSelection.toString().trim();
      const range = windowSelection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      setSelectedText(text, {
        top: rect.top - 45,
        left: rect.left + rect.width / 2 - 80
      });
    } else {
      setSelectedText('', null);
    }
  };

  const handleFindSourcesFromSelection = () => {
    if (selectedText) {
      setSearchQuery(selectedText);
      setActiveRightPanel('research');
      executeSearch(selectedText);
      setSelectedText('', null);
    }
  };

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="flex-1 bg-[#fcfcff] flex flex-col items-center overflow-y-auto relative p-8 select-text">
      {/* Floating Selection Toolbar */}
      {selectionPosition && selectedText && (
        <div
          style={{
            top: `${selectionPosition.top}px`,
            left: `${selectionPosition.left}px`,
            transition: 'opacity 120ms ease-out, transform 120ms ease-out'
          }}
          className="fixed z-50 bg-[#010542] text-white px-2 py-1 rounded-lg shadow-xl flex items-center space-x-1 transform -translate-x-1/2 scale-100 border border-white/10 text-xs animate-in fade-in zoom-in-95"
        >
          <button
            onClick={handleFindSourcesFromSelection}
            className="flex items-center space-x-1 px-2 py-1 hover:bg-white/10 rounded font-medium transition-colors text-white"
          >
            <Search className="w-3 h-3 text-[#11d6cc]" />
            <span>Find sources</span>
          </button>
          <div className="w-[1px] h-3 bg-white/20" />
          <button className="flex items-center space-x-1 px-2 py-1 hover:bg-white/10 rounded transition-colors text-gray-300">
            <Sparkles className="w-3 h-3 text-[#fcfcff]" />
            <span>Paraphrase</span>
          </button>
        </div>
      )}

      {/* Editor Document Container */}
      <div className="w-full max-w-3xl bg-white rounded-xl border border-[#cccff3]/60 shadow-sm p-8 md:p-12 flex flex-col min-h-[750px] relative">
        
        {/* Document Header Status */}
        <div className="flex items-center justify-between text-xs text-[#697282] mb-6 pb-4 border-b border-[#f3f4f6]">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00a600]" />
            <span>Grounded Autocomplete Active</span>
          </div>
          <div className="flex items-center space-x-3">
            <span>Style: <strong>APA 7th</strong></span>
            <span>Word Count: <strong>{wordCount} words</strong></span>
          </div>
        </div>

        {/* Text Input Editor with Ghost Text Overlay Simulation */}
        <div className="flex-1 flex flex-col justify-between font-sans text-base text-[#1e2938] leading-relaxed tracking-normal">
          <div className="flex-1 flex flex-col mb-6">
            <textarea
              value={content}
              onChange={handleTextChange}
              onKeyDown={handleKeyDown}
              onMouseUp={handleMouseUp}
              placeholder="Start writing in Markdown..."
              className="w-full min-h-[200px] resize-none outline-none border-none bg-transparent font-normal text-[#1e2938] leading-relaxed mb-4"
            />

            {/* Render Inline Ghost Text Suggestion or Loading State */}
            {isGeneratingGhost && (
              <div className="my-2 p-3 bg-[#e1e2f6]/20 border border-[#323dd6]/20 rounded-xl flex items-center space-x-2 text-xs text-[#323dd6] animate-pulse">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Generating grounded continuation...</span>
              </div>
            )}

            {ghostText && !isGeneratingGhost && (
              <div className="my-2 p-4 bg-[#e1e2f6]/40 border border-[#323dd6]/30 rounded-xl flex items-start justify-between text-sm text-[#4a5565] transition-all shadow-xs animate-in fade-in">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-4 h-4 text-[#323dd6] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-mono text-[#364153] leading-relaxed select-none">{ghostText}</span>
                    <div className="mt-2 flex items-center space-x-3 text-[11px] text-[#697282]">
                      <button onClick={acceptGhostText} className="hover:underline flex items-center space-x-1 cursor-pointer">
                        <span className="bg-[#e5e7eb] px-1.5 py-0.5 rounded text-[#364153] font-mono font-semibold">Tab</span> to accept
                      </button>
                      <span>•</span>
                      <button onClick={rejectGhostText} className="hover:underline flex items-center space-x-1 cursor-pointer">
                        <span className="bg-[#e5e7eb] px-1.5 py-0.5 rounded text-[#364153] font-mono font-semibold">Esc</span> to reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Grounded Citation Badges Preview */}
          <div className="pt-6 border-t border-[#f3f4f6] mt-auto">
            <h4 className="text-xs font-semibold text-[#697282] uppercase tracking-wider mb-3">
              Grounded Sources in Document ({insertedCitations.length})
            </h4>
            <div className="space-y-2">
              {insertedCitations.map((paper, idx) => (
                <div key={paper.id + idx} className="flex items-center space-x-2 bg-[#f9fafb] p-2.5 rounded-lg border border-[#e5e7eb] text-xs">
                  <span className="font-semibold text-[#323dd6] bg-[#e1e2f6] px-1.5 py-0.5 rounded">[{idx + 1}]</span>
                  <span className="font-medium text-[#1e2938]">{paper.authors[0]} ({paper.year})</span>
                  <span className="text-[#697282] truncate flex-1">{paper.journal} — {paper.title}</span>
                  <a 
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#323dd6] hover:underline flex items-center space-x-0.5 shrink-0"
                  >
                    <span>View</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
