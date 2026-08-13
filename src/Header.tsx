import React from 'react';
import { 
  Sparkles, 
  Search, 
  BookOpen, 
  CheckCircle2, 
  Key, 
  Share2, 
  Download, 
  Layers,
  ChevronDown
} from 'lucide-react';
import { useAppStore } from './useAppStore';

import { BrandLogo } from './BrandLogo';

export const Header: React.FC = () => {
  const { 
    docTitle, 
    setDocTitle, 
    activeRightPanel, 
    setActiveRightPanel, 
    setIsSettingsOpen,
    apiKey,
    setCurrentView
  } = useAppStore();

  return (
    <header className="h-14 border-b border-[#cccff3]/60 bg-[#fcfcff] px-4 flex items-center justify-between sticky top-0 z-40">
      {/* Brand & Document Name */}
      <div className="flex items-center space-x-4">
        <div onClick={() => setCurrentView('landing')} className="cursor-pointer" title="Return to Landing Page">
          <BrandLogo size="sm" variant="dark" />
        </div>

        <div className="h-4 w-[1px] bg-[#d1d5dc]" />

        <input
          type="text"
          value={docTitle}
          onChange={(e) => setDocTitle(e.target.value)}
          className="text-sm font-medium text-[#1e2938] bg-transparent hover:bg-[#f5f5fa] focus:bg-white px-2 py-1 rounded-md border border-transparent focus:border-[#323dd6] focus:outline-none transition-all duration-150 w-72 truncate"
          placeholder="Untitled Document..."
        />
      </div>

      {/* Center Actions / Mode Toggle */}
      <div className="flex items-center bg-[#f5f5fa] p-1 rounded-lg border border-[#e5e7eb]">
        <button
          onClick={() => setActiveRightPanel(activeRightPanel === 'research' ? null : 'research')}
          className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
            activeRightPanel === 'research'
              ? 'bg-white text-[#323dd6] shadow-xs font-semibold'
              : 'text-[#697282] hover:text-[#1e2938]'
          }`}
        >
          <Search className="w-3.5 h-3.5" />
          <span>Research Discovery</span>
        </button>

        <button
          onClick={() => setActiveRightPanel(activeRightPanel === 'claims' ? null : 'claims')}
          className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
            activeRightPanel === 'claims'
              ? 'bg-white text-[#323dd6] shadow-xs font-semibold'
              : 'text-[#697282] hover:text-[#1e2938]'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Claim Inspector</span>
        </button>
      </div>

      {/* Right Controls & BYOK Indicator */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => setIsSettingsOpen(true)}
          className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
            apiKey 
              ? 'bg-[#109769]/10 text-[#109769] border-[#109769]/30' 
              : 'bg-[#faa719]/10 text-[#faa719] border-[#faa719]/30'
          }`}
        >
          <Key className="w-3 h-3" />
          <span>{apiKey ? 'BYOK Connected' : 'Configure Key'}</span>
        </button>

        <div className="flex items-center space-x-1.5 border-l border-[#e5e7eb] pl-3">
          <button className="p-1.5 text-[#697282] hover:text-[#1e2938] hover:bg-[#f5f5fa] rounded-md transition-colors" title="Share">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="p-1.5 text-[#697282] hover:text-[#1e2938] hover:bg-[#f5f5fa] rounded-md transition-colors" title="Download">
            <Download className="w-4 h-4" />
          </button>
          <button className="bg-[#323dd6] hover:bg-[#1722be] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-all duration-150 flex items-center space-x-1">
            <span>Export Paper</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>
      </div>
    </header>
  );
};
