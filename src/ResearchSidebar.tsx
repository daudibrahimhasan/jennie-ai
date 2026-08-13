import React from 'react';
import { Search, Filter, BookOpen, Plus, ExternalLink, Sparkles, Check, ChevronRight, Loader2 } from 'lucide-react';
import { useAppStore, Paper } from './useAppStore';

export const ResearchSidebar: React.FC = () => {
  const { 
    searchQuery, 
    setSearchQuery, 
    paperResults, 
    insertCitation, 
    selectedPaper, 
    setSelectedPaper,
    activeCitationStyle,
    setCitationStyle,
    isSearching,
    executeSearch
  } = useAppStore();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeSearch();
    }
  };

  return (
    <aside className="w-96 border-l border-[#cccff3]/60 bg-white flex flex-col h-[calc(100vh-3.5rem)] shadow-lg transition-all duration-180 ease-out">
      {/* Panel Header */}
      <div className="p-4 border-b border-[#e5e7eb] bg-[#fcfcff]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-[#323dd6]" />
            <h3 className="font-semibold text-sm text-[#010542]">Research Discovery</h3>
          </div>
          <span className="text-[11px] font-mono text-[#697282] bg-[#f3f4f6] px-2 py-0.5 rounded-full">
            200M+ Papers
          </span>
        </div>

        {/* Search Field */}
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search academic literature & press Enter..."
            className="w-full bg-white border border-[#d1d5dc] focus:border-[#323dd6] rounded-lg pl-9 pr-16 py-2 text-xs font-normal text-[#1e2938] outline-none shadow-2xs transition-all"
          />
          <Search className="w-4 h-4 text-[#697282] absolute left-3" />
          <button
            onClick={() => executeSearch()}
            disabled={isSearching}
            className="absolute right-1.5 bg-[#323dd6] hover:bg-[#1722be] text-white text-[10px] font-semibold px-2.5 py-1 rounded-md transition-colors flex items-center space-x-1 cursor-pointer disabled:opacity-50"
          >
            {isSearching ? <Loader2 className="w-3 h-3 animate-spin" /> : <span>Search</span>}
          </button>
        </div>

        {/* Source Providers Badges */}
        <div className="flex items-center space-x-1.5 mt-2 overflow-x-auto text-[10px] text-[#697282]">
          <span onClick={() => executeSearch()} className="bg-[#e1e2f6] text-[#323dd6] px-2 py-0.5 rounded font-medium cursor-pointer">All Sources</span>
          <span onClick={() => executeSearch()} className="bg-[#f3f4f6] hover:bg-[#e5e7eb] px-2 py-0.5 rounded cursor-pointer">Semantic Scholar</span>
          <span onClick={() => executeSearch()} className="bg-[#f3f4f6] hover:bg-[#e5e7eb] px-2 py-0.5 rounded cursor-pointer">PubMed</span>
          <span onClick={() => executeSearch()} className="bg-[#f3f4f6] hover:bg-[#e5e7eb] px-2 py-0.5 rounded cursor-pointer">arXiv</span>
        </div>
      </div>

      {/* Paper Results List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {paperResults.map((paper) => (
          <div
            key={paper.id}
            onClick={() => setSelectedPaper(paper)}
            className={`p-3.5 rounded-xl border transition-all duration-150 cursor-pointer ${
              selectedPaper?.id === paper.id
                ? 'border-[#323dd6] bg-[#f5f5fa] shadow-xs'
                : 'border-[#e5e7eb] hover:border-[#cccff3] bg-white'
            }`}
          >
            <div className="flex items-start justify-between">
              {paper.isOpenAccess && (
                <span className="text-[10px] font-semibold text-[#00a600] bg-[#00a600]/10 px-1.5 py-0.5 rounded mb-1.5 inline-block">
                  Open Access
                </span>
              )}
              <span className="text-[11px] text-[#697282] font-mono">{paper.year}</span>
            </div>

            <h4 className="text-xs font-semibold text-[#1e2938] leading-snug line-clamp-2 mb-1">
              {paper.title}
            </h4>

            <p className="text-[11px] text-[#697282] mb-2">{paper.authors.join(', ')} • {paper.journal}</p>

            <p className="text-[11px] text-[#4a5565] line-clamp-2 leading-relaxed mb-3">
              {paper.abstract}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-[#f3f4f6]">
              <a
                href={`https://doi.org/${paper.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[10px] text-[#323dd6] hover:underline flex items-center space-x-1"
              >
                <span>DOI Link</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  insertCitation(paper);
                }}
                className="bg-[#323dd6] hover:bg-[#1722be] text-white px-2.5 py-1 rounded-md text-[11px] font-medium flex items-center space-x-1 shadow-xs transition-colors cursor-pointer"
              >
                <Plus className="w-3 h-3" />
                <span>Cite</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Paper Detail & Citation Style Generator */}
      {selectedPaper && (
        <div className="p-4 border-t border-[#e5e7eb] bg-[#f9fafb]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-[#010542]">Citation Generator</span>
            <div className="flex items-center space-x-1 bg-[#e5e7eb] p-0.5 rounded text-[10px]">
              {(['APA', 'IEEE', 'BibTeX'] as const).map((style) => (
                <button
                  key={style}
                  onClick={() => setCitationStyle(style)}
                  className={`px-2 py-0.5 rounded cursor-pointer ${
                    activeCitationStyle === style ? 'bg-white font-bold text-[#323dd6]' : 'text-[#697282]'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div className="p-2.5 bg-white border border-[#d1d5dc] rounded-lg font-mono text-[10px] text-[#364153] break-all select-all">
            {activeCitationStyle === 'APA' && `${selectedPaper.authors[0]} (${selectedPaper.year}). ${selectedPaper.title}. ${selectedPaper.journal}. https://doi.org/${selectedPaper.doi}`}
            {activeCitationStyle === 'IEEE' && `[1] ${selectedPaper.authors[0]}, "${selectedPaper.title}," ${selectedPaper.journal}, ${selectedPaper.year}.`}
            {activeCitationStyle === 'BibTeX' && `@article{${selectedPaper.id}, title={${selectedPaper.title}}, author={${selectedPaper.authors[0]}}, year={${selectedPaper.year}}}`}
          </div>
        </div>
      )}
    </aside>
  );
};
