import React from 'react';
import { CheckCircle2, AlertTriangle, HelpCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export const ClaimInspectorSidebar: React.FC = () => {
  return (
    <aside className="w-80 border-l border-[#cccff3]/60 bg-[#fcfcff] flex flex-col h-[calc(100vh-3.5rem)] p-4 shadow-lg transition-all">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#e5e7eb]">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-[#323dd6]" />
          <h3 className="font-semibold text-sm text-[#010542]">Claim Confidence</h3>
        </div>
        <span className="text-xs text-[#697282] font-mono">9 Analysis Tags</span>
      </div>

      {/* Categories Summary */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#e5e7eb] text-xs">
          <span className="flex items-center space-x-2 text-[#364153]">
            <span className="w-2 h-2 rounded-full bg-[#ee4446]" />
            <span>Misrepresented</span>
          </span>
          <span className="font-mono text-[#697282]">0</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#e5e7eb] text-xs">
          <span className="flex items-center space-x-2 text-[#364153]">
            <span className="w-2 h-2 rounded-full bg-[#ee4446]" />
            <span>Contradicted</span>
          </span>
          <span className="font-mono font-bold text-[#ee4446]">3</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#e5e7eb] text-xs">
          <span className="flex items-center space-x-2 text-[#364153]">
            <span className="w-2 h-2 rounded-full bg-[#faa719]" />
            <span>Unsupported</span>
          </span>
          <span className="font-mono font-bold text-[#faa719]">4</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#e5e7eb] text-xs">
          <span className="flex items-center space-x-2 text-[#364153]">
            <span className="w-2 h-2 rounded-full bg-[#faa719]" />
            <span>Weakly Supported</span>
          </span>
          <span className="font-mono font-bold text-[#faa719]">2</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#e5e7eb] text-xs">
          <span className="flex items-center space-x-2 text-[#364153]">
            <span className="w-2 h-2 rounded-full bg-[#00a600]" />
            <span>Overstated</span>
          </span>
          <span className="font-mono font-bold text-[#00a600]">1</span>
        </div>
      </div>

      {/* Proofread Section */}
      <div className="border-t border-[#e5e7eb] pt-4">
        <h4 className="text-xs font-semibold text-[#010542] uppercase tracking-wider mb-3">
          Academic Proofread
        </h4>

        <div className="space-y-2">
          <div className="p-2.5 rounded-lg bg-white border border-[#e5e7eb] text-xs flex items-center justify-between">
            <span className="text-[#364153] font-medium">Word Choice</span>
            <span className="bg-[#323dd6]/10 text-[#323dd6] text-[10px] px-2 py-0.5 rounded font-semibold">
              6 Pending
            </span>
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-[#e5e7eb] text-xs flex items-center justify-between">
            <span className="text-[#364153] font-medium">Grammar & Tone</span>
            <span className="bg-[#faa719]/10 text-[#faa719] text-[10px] px-2 py-0.5 rounded font-semibold">
              4 Pending
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
