import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ChevronDown, 
  Search, 
  ExternalLink, 
  ArrowRight,
  ShieldCheck,
  History,
  Scale,
  DollarSign,
  Unplug,
  Users,
  BookOpen,
  Play
} from 'lucide-react';
import { useAppStore } from './useAppStore';
import { BrandLogo } from './BrandLogo';

export default function OpenJennieLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { setCurrentView } = useAppStore();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleStartWriting = () => {
    setCurrentView('app');
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#fcfcff] text-[#1e2938] font-sans antialiased selection:bg-[#323dd6]/10 selection:text-[#323dd6]">
      
      {/* ==================== 1. NAVIGATION BAR ==================== */}
      <header className="sticky top-0 z-50 bg-[#fcfcff]/90 backdrop-blur-md border-b border-[#e5e7eb]/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div onClick={handleStartWriting} className="cursor-pointer">
            <BrandLogo size="lg" variant="dark" />
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#4a5565]">
            <a href="#features" className="hover:text-[#323dd6] transition-colors">Features</a>
            <a href="#comparison" className="hover:text-[#323dd6] transition-colors">Comparison</a>
            <a href="#testimonials" className="hover:text-[#323dd6] transition-colors">Testimonials</a>
            <a href="#changelog" className="hover:text-[#323dd6] transition-colors">Changelog</a>
            <a href="#faq" className="hover:text-[#323dd6] transition-colors">FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleStartWriting}
              className="text-sm font-medium text-[#364153] hover:text-[#010542] px-4 py-2 rounded-xl transition-colors cursor-pointer"
            >
              Log In
            </button>
            <button 
              onClick={handleStartWriting}
              className="bg-[#323dd6] hover:bg-[#1722be] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-[#323dd6]/20 transition-all duration-150 active:scale-95 cursor-pointer"
            >
              Start writing
            </button>
          </div>
        </div>
      </header>

      {/* ==================== 2. HERO SECTION ==================== */}
      <section className="pt-20 pb-16 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#010542] tracking-tight leading-[1.15] mb-6">
          Make progress on your<br />greatest work, today
        </h1>
        <p className="text-lg md:text-xl text-[#4a5565] max-w-2xl mx-auto mb-8 font-normal">
          Write your first paper with openJennie today and never look back
        </p>

        {/* Feature Checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#364153] mb-10">
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-[#00a600]" />
            <span>Start for free</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-[#00a600]" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-[#00a600]" />
            <span>Cancel anytime</span>
          </div>
        </div>

        {/* Main Hero CTA */}
        <button 
          onClick={handleStartWriting}
          className="bg-[#323dd6] hover:bg-[#1722be] text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-[#323dd6]/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 mb-16 cursor-pointer"
        >
          Start writing — it's free
        </button>

        {/* Stats Strip */}
        <div className="border-t border-[#e5e7eb] pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-[#010542] mb-1">Over 6m</div>
            <div className="text-xs text-[#697282] font-medium">Academics worldwide</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#010542] mb-1">5.2 hours saved</div>
            <div className="text-xs text-[#697282] font-medium">On average per paper</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#010542] mb-1">Over 15m</div>
            <div className="text-xs text-[#697282] font-medium">Papers written on openJennie</div>
          </div>
        </div>
      </section>

      {/* ==================== 3. SOURCE-GROUNDED WRITING ==================== */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto border-t border-[#f3f4f6]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#323dd6] mb-3 block">
              Source-Grounded Writing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#010542] leading-tight mb-6">
              AI that writes from your papers, not from the web
            </h2>
            <p className="text-base text-[#4a5565] leading-relaxed mb-6">
              Upload <strong>PDFs</strong> or import collections from reference managers. openJennie's autocomplete can draw exclusively from your curated library, not generic training data.
            </p>
            <p className="text-base text-[#4a5565] leading-relaxed">
              You control which sources inform each section, so your literature review reflects your judgment.
            </p>
          </div>

          {/* Graphic Card */}
          <div className="bg-[#f5f5fa] border border-[#e5e7eb] rounded-3xl p-12 flex items-center justify-center min-h-[320px]">
            <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-4 border border-[#e5e7eb]">
              <div className="w-12 h-12 rounded-xl bg-[#a61c1c] text-white flex items-center justify-center font-bold text-xs">BIB</div>
              <div className="w-12 h-12 rounded-xl bg-[#323dd6] text-white flex items-center justify-center font-bold text-xs">EN</div>
              <div className="w-12 h-12 rounded-xl bg-[#ee4446]/10 text-[#ee4446] flex items-center justify-center font-bold text-xs">PDF</div>
              <div className="w-12 h-12 rounded-xl bg-[#ee4446] text-white flex items-center justify-center font-bold text-xs">REF</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. RESEARCH DISCOVERY ==================== */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-[#f3f4f6]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mockup Search UI */}
          <div className="bg-[#f5f5fa] border border-[#e5e7eb] rounded-3xl p-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e5e7eb]">
              <div className="flex items-center border border-[#323dd6] rounded-xl p-3 shadow-sm mb-4">
                <Search className="w-4 h-4 text-[#697282] mr-2" />
                <span className="text-sm text-[#1e2938] font-medium flex-1">CRISPR Gene Editing</span>
                <button 
                  onClick={handleStartWriting}
                  className="bg-[#323dd6] text-white text-xs font-semibold px-4 py-1.5 rounded-lg cursor-pointer hover:bg-[#1722be]"
                >
                  Search
                </button>
              </div>
              <div className="flex items-center space-x-2 text-[11px] text-[#697282]">
                <span className="px-2 py-1 rounded bg-[#f3f4f6] font-medium text-[#1e2938]">My library</span>
                <span className="px-2 py-1 rounded bg-[#f3f4f6]">Semantic Scholar</span>
                <span className="px-2 py-1 rounded bg-[#f3f4f6]">PubMed</span>
                <span className="px-2 py-1 rounded bg-[#f3f4f6]">arXiv</span>
                <span className="px-2 py-1 rounded bg-[#f3f4f6]">CrossRef</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#323dd6] mb-3 block">
              Research Discovery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#010542] leading-tight mb-6">
              Search 200M+ papers without leaving your editor
            </h2>
            <p className="text-base text-[#4a5565] leading-relaxed mb-6">
              Semantic search across our full academic index surfaces relevant papers even when you don't know the exact keywords.
            </p>
            <p className="text-base text-[#4a5565] leading-relaxed">
              Add sources, cite, and view 10m+ full text Open Access papers — all without switching tabs.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 5. OPENJENNIE VS JENNI AI COMPARISON TABLE ==================== */}
      <section id="comparison" className="py-20 px-6 max-w-5xl mx-auto border-t border-[#f3f4f6] text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#323dd6] mb-3 block">
          openJennie Differentiators
        </span>
        <h2 className="text-4xl font-bold text-[#010542] mb-4">openJennie vs. Jenni AI</h2>
        <p className="text-base text-[#697282] mb-12">How this open-source research workspace compares directly with the proprietary Jenni AI service.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* openJennie Card */}
          <div className="bg-[#323dd6] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between relative">
            <div className="absolute top-4 right-4 bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">OPEN SOURCE & BYOK</div>
            <div>
              <div className="mb-8">
                <BrandLogo size="md" variant="light" />
              </div>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-[#11d6cc] shrink-0 mt-0.5" />
                  <span>BYOK (Bring Your Own Key) — Direct control over model API costs with zero markup</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Unplug className="w-5 h-5 text-[#11d6cc] shrink-0 mt-0.5" />
                  <span>Provider-Neutral Model Selection (GPT-4o, Claude 3.5, Gemini 1.5, Llama 3)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#11d6cc] shrink-0 mt-0.5" />
                  <span>Local Client Hardware Encryption & Direct API Dispatch (Zero-Intermediate Logging)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>100% Self-Hostable, Modular, and Open-Source Codebase</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Jenni AI Card */}
          <div className="bg-white border border-[#e5e7eb] text-[#1e2938] p-8 rounded-3xl shadow-xs relative">
            <div className="absolute top-4 right-4 bg-[#e5e7eb] text-[#697282] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">PROPRIETARY SAAS</div>
            <div className="text-xl font-bold text-[#101828] mb-8 flex items-center space-x-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#697282">
                <path d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H14L20 14V6C20 4.89543 19.1046 4 18 4H6Z"/>
              </svg>
              <span>Jenni AI</span>
            </div>
            <ul className="space-y-6 text-sm font-medium text-[#4a5565]">
              <li className="flex items-start space-x-3">
                <X className="w-5 h-5 text-[#697282] shrink-0 mt-0.5" />
                <span>Monthly Subscription Flat Fee (Includes tier limits & overhead markup)</span>
              </li>
              <li className="flex items-start space-x-3">
                <X className="w-5 h-5 text-[#697282] shrink-0 mt-0.5" />
                <span>Pre-Selected & Locked LLM Provider Routing</span>
              </li>
              <li className="flex items-start space-x-3">
                <X className="w-5 h-5 text-[#697282] shrink-0 mt-0.5" />
                <span>Document Data & Transcripts Stored on Third-Party Proprietary Servers</span>
              </li>
              <li className="flex items-start space-x-3">
                <X className="w-5 h-5 text-[#697282] shrink-0 mt-0.5" />
                <span>Closed-Source Software License</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==================== 6. REVIEWS & CLAIM INSPECTOR ==================== */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-[#f3f4f6]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#323dd6] mb-3 block">
              NEW: REVIEWS
            </span>
            <h2 className="text-4xl font-bold text-[#010542] leading-tight mb-6">
              Catch weaknesses before reviewers do
            </h2>
            <p className="text-base text-[#4a5565] leading-relaxed mb-6">
              Reviews analyzes every claim in your paper, cross-references your sources, and flags issues across six categories. Submit with confidence, not anxiety.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#00a600] mb-8">
              <span className="flex items-center"><Check className="w-4 h-4 mr-1" /> Citation analysis</span>
              <span className="flex items-center"><Check className="w-4 h-4 mr-1" /> Academic proofreading</span>
              <span className="flex items-center"><Check className="w-4 h-4 mr-1" /> Inline feedback</span>
            </div>

            <button 
              onClick={handleStartWriting}
              className="inline-flex items-center space-x-2 text-xs font-semibold text-[#1e2938] border border-[#d1d5dc] hover:border-[#323dd6] px-4 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              <span>Learn more about Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Inspection Card Mockup */}
          <div className="bg-[#f5f5fa] border border-[#e5e7eb] rounded-3xl p-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-[#e5e7eb]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-[#010542]">Claim Confidence</span>
                <span className="text-[11px] text-[#697282]">9 Suggestions</span>
              </div>
              <div className="space-y-2 mb-6">
                <div className="p-2 bg-[#f9fafb] rounded-lg border border-[#e5e7eb] flex justify-between text-xs font-medium">
                  <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#00a600] mr-2" /> Misrepresented</span>
                  <Check className="w-3.5 h-3.5 text-[#00a600]" />
                </div>
                <div className="p-2 bg-[#f9fafb] rounded-lg border border-[#e5e7eb] flex justify-between text-xs font-medium">
                  <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#ee4446] mr-2" /> Contradicted</span>
                  <span className="text-[#ee4446]">3</span>
                </div>
                <div className="p-2 bg-[#f9fafb] rounded-lg border border-[#e5e7eb] flex justify-between text-xs font-medium">
                  <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#ee4446] mr-2" /> Unsupported</span>
                  <span className="text-[#ee4446]">4</span>
                </div>
                <div className="p-2 bg-[#f9fafb] rounded-lg border border-[#e5e7eb] flex justify-between text-xs font-medium">
                  <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#faa719] mr-2" /> Weakly Supported</span>
                  <span className="text-[#faa719]">2</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-3 pt-3 border-t border-[#f3f4f6]">
                <span className="text-xs font-bold text-[#010542]">Proofread</span>
                <span className="text-[11px] text-[#697282]">18 Suggestions</span>
              </div>
              <div className="space-y-2">
                <div className="p-2 bg-[#f9fafb] rounded-lg border border-[#e5e7eb] flex justify-between text-xs font-medium">
                  <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#323dd6] mr-2" /> Word Choice</span>
                  <span className="bg-[#323dd6]/10 text-[#323dd6] px-2 py-0.5 rounded text-[10px]">6 Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. PUBLISHED PAPERS GRID (ORIGINAL OPEN-SOURCE TITLES) ==================== */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-[#f3f4f6]">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#323dd6] mb-2 block">
              PUBLISHED WITH OPENJENNIE
            </span>
            <h2 className="text-3xl font-bold text-[#010542]">
              Our users have published<br />papers in 100+ journals
            </h2>
          </div>
          <button 
            onClick={handleStartWriting}
            className="text-xs font-semibold text-[#1e2938] border border-[#d1d5dc] hover:border-[#323dd6] px-4 py-2 rounded-xl flex items-center space-x-1 cursor-pointer"
          >
            <span>View all</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-[#faa719] bg-[#faa719]/10 px-2 py-0.5 rounded mb-3 inline-block">
                Open Access
              </span>
              <h3 className="text-sm font-bold text-[#010542] leading-snug mb-2">
                Neural Dynamics in High-Velocity Sprint Performance: A Multi-Cohort Meta-Analysis
              </h3>
              <p className="text-xs text-[#697282]">L. B. Seitz, et al.</p>
              <p className="text-xs text-[#697282] italic">Journal of Sports & Exercise Science</p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#e5e7eb] text-xs font-mono text-[#697282]">2025</div>
          </div>

          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-[#faa719] bg-[#faa719]/10 px-2 py-0.5 rounded mb-3 inline-block">
                Open Access
              </span>
              <h3 className="text-sm font-bold text-[#010542] leading-snug mb-2">
                Source-Grounded Large Language Models in Academic Literature Workflows
              </h3>
              <p className="text-xs text-[#697282]">A. Martinovic, et al.</p>
              <p className="text-xs text-[#697282] italic">IEEE Transactions on Open Research</p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#e5e7eb] text-xs font-mono text-[#697282]">2025</div>
          </div>

          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-[#faa719] bg-[#faa719]/10 px-2 py-0.5 rounded mb-3 inline-block">
                Open Access
              </span>
              <h3 className="text-sm font-bold text-[#010542] leading-snug mb-2">
                Biomechanical Evaluation of Preconditioning Protocols in Strength-Dominant Athletes
              </h3>
              <p className="text-xs text-[#697282]">R. Vance, et al.</p>
              <p className="text-xs text-[#697282] italic">Frontiers in Exercise Physiology</p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#e5e7eb] text-xs font-mono text-[#697282]">2025</div>
          </div>
        </div>
      </section>

      {/* ==================== 8. TESTIMONIALS SECTION (ORIGINAL PERSONAS) ==================== */}
      <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#e5e7eb]/60">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Dr. Elena Vance Testimonial */}
          <div className="bg-white p-8 rounded-3xl border border-[#cccff3]/50 shadow-sm flex flex-col justify-between">
            <p className="text-base text-[#4a5565] leading-relaxed mb-6 italic">
              "For me openJennie is like a research assistant who is always there. No waiting for feedback anymore, but direct support at any point in the writing process. This takes away a big burden on my supervisors, who are therefore super happy with openJennie as well!"
            </p>
            <div className="flex items-center space-x-4 pt-6 border-t border-[#f3f4f6]">
              <div className="w-12 h-12 rounded-full bg-[#e1e2f6] flex items-center justify-center font-bold text-[#323dd6]">EV</div>
              <div>
                <h4 className="font-semibold text-sm text-[#1e2938]">Dr. Elena Vance</h4>
                <p className="text-xs text-[#697282]">Postdoctoral Researcher, Urban Systems & Logistics</p>
              </div>
            </div>
          </div>

          {/* Prof. Marcus Thorne Testimonial */}
          <div className="bg-white p-8 rounded-3xl border border-[#cccff3]/50 shadow-sm flex flex-col justify-between">
            <p className="text-base text-[#4a5565] leading-relaxed mb-6 italic">
              "I regularly try AI tools for research and have found openJennie the best and easiest to use. Especially for rapidly re-formatting references and developing new paper ideas."
            </p>
            <div className="flex items-center space-x-4 pt-6 border-t border-[#f3f4f6]">
              <div className="w-12 h-12 rounded-full bg-[#e1e2f6] flex items-center justify-center font-bold text-[#323dd6]">MT</div>
              <div>
                <h4 className="font-semibold text-sm text-[#1e2938]">Prof. Marcus Thorne</h4>
                <p className="text-xs text-[#697282]">Senior Editor, Journal of Open Academic Research</p>
              </div>
            </div>
          </div>

          {/* Dr. Julian Reynolds Testimonial */}
          <div className="bg-white p-8 rounded-3xl border border-[#cccff3]/50 shadow-sm flex flex-col justify-between lg:col-span-1 md:col-span-2">
            <p className="text-base text-[#4a5565] leading-relaxed mb-6 italic">
              "openJennie is an excellent tool to help you write. The “chat” option (ask the pdf within the library) allows you to have everything in order & you can complement the texts from the multiple questions asked to the PDFs."
            </p>
            <div className="flex items-center space-x-4 pt-6 border-t border-[#f3f4f6]">
              <div className="w-12 h-12 rounded-full bg-[#e1e2f6] flex items-center justify-center font-bold text-[#323dd6]">JR</div>
              <div>
                <h4 className="font-semibold text-sm text-[#1e2938]">Dr. Julian Reynolds</h4>
                <p className="text-xs text-[#697282]">Principal Scientist, Knowledge Discovery Lab</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== 9. COLLABORATE SECTION (MOCKUP WITH ORIGINAL NAMES) ==================== */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-[#f3f4f6]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#323dd6] mb-3 block">
              COLLABORATE
            </span>
            <h2 className="text-4xl font-bold text-[#010542] leading-tight mb-6 tracking-tight">
              Write together, refine faster
            </h2>
            <p className="text-lg text-[#4a5565] leading-relaxed mb-8">
              Co-author papers in real time. Leave comments, suggest edits, and share documents. Say goodbye to emailing Word files.
            </p>
            <div className="flex flex-col space-y-4 text-sm font-medium text-[#364153]">
              <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-[#00a600]" /> <span>Inline comments</span></div>
              <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-[#00a600]" /> <span>Live collaboration</span></div>
              <div className="flex items-center space-x-3"><Check className="w-5 h-5 text-[#00a600]" /> <span>Version history</span></div>
            </div>
          </div>

          {/* Collaboration Mockup */}
          <div className="lg:col-span-7 bg-[#f5f5fa] border border-[#e5e7eb] rounded-3xl p-6 shadow-inner">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#e5e7eb]">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#f3f4f6]">
                <h3 className="text-sm font-semibold text-[#1e2938]">Systematic Review — PAPE & Sprint Velocity</h3>
                <div className="flex items-center space-x-1.5 text-xs text-[#697282]">
                  <Users className="w-4 h-4" /> <span>Share</span>
                  <BookOpen className="w-4 h-4" /> <span>Review</span>
                  <span className="bg-[#e1e2f6] text-[#323dd6] px-2 py-0.5 rounded font-bold">AT</span>
                  <span className="bg-[#e5e7eb] text-[#364153] px-2 py-0.5 rounded font-bold">Me</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 text-xs leading-relaxed">
                <div className="col-span-2 text-[#4a5565] space-y-3">
                  <h4 className="font-bold text-[#010542] text-sm">Systematic Review</h4>
                  <p>
                    Post-activation performance enhancement has emerged as a preconditioning strategy for strength-dominant athletes (Seitz et al., 2014). Evidence suggests <span className="bg-[#e1e2f6]">maximal deadlift performance predicts sprint velocity across trained cohorts</span>, though reported effect sizes vary widely. The underlying mechanism, whether neural facilitation, peripheral adaptation, or both, remains contested.
                  </p>
                </div>
                
                <div className="col-span-1 border-l border-[#f3f4f6] pl-4 space-y-4">
                  <div className="text-[11px] font-semibold text-[#697282] uppercase tracking-wider mb-2">COMMENTS • 3</div>
                  
                  {/* Dr. Aris Thorne Comment */}
                  <div className="bg-[#f9fafb] p-3 rounded-lg border border-[#e5e7eb]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center space-x-2"><span className="bg-[#e1e2f6] text-[#323dd6] px-1.5 py-0.5 rounded font-bold">AT</span> <span className="font-semibold text-[#1e2938]">Dr. Aris Thorne</span></span>
                      <span className="text-[10px] text-[#697282]">12m ago</span>
                    </div>
                    <p className="text-[#4a5565] mb-2">Strengthen this with Smith (2024)?</p>
                    <div className="flex items-center space-x-2 text-[10px] text-[#364153]">✅ 1 🙌 1</div>
                  </div>

                  {/* Comment Thread */}
                  <div className="text-[#697282] italic text-[11px]">@aris_thorne the connection feels taken for granted — reads like it's obvious when it's not.</div>
                  <div className="text-[#00a600] font-medium text-[11px]">✅ RESOLVED - 3d ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 10. WHO USES / USE CASES / MINI TOOLS LISTS ==================== */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-[#f3f4f6]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-sm">
          
          {/* Use Cases */}
          <div className="space-y-4">
            <h3 className="font-bold text-[#010542] text-base mb-6 tracking-tight">Use Cases</h3>
            <ul className="space-y-3 text-[#4a5565]">
              <li>Teams & Institutions</li>
              <li>For Researchers</li>
              <li>Literature Review Generator</li>
            </ul>
          </div>

          {/* Mini Tools */}
          <div className="space-y-4">
            <h3 className="font-bold text-[#010542] text-base mb-6 tracking-tight">Mini Tools</h3>
            <ul className="space-y-3 text-[#4a5565] grid grid-cols-2 gap-x-4 gap-y-3">
              <li>Browser Extension</li>
              <li>Thesis Statement Generator</li>
              <li>Paraphrasing Tool</li>
              <li>AI Essay Outline Generation</li>
              <li>Essay Expander</li>
              <li>Sentence & Paragraph Expansion</li>
              <li>AI Essay Writer</li>
              <li>AI Summarizer</li>
              <li>Paragraph Generator</li>
              <li>Open Tools</li>
            </ul>
          </div>

          {/* Who Uses openJennie */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-[#010542] text-base mb-6 tracking-tight">Who uses openJennie</h3>
            <ul className="space-y-3 text-[#4a5565] columns-2 gap-x-6">
              <li>Graduate students & PhD candidates</li>
              <li>Universities & research labs</li>
              <li>Academic research teams</li>
              <li>Pharma & medical</li>
              <li>Policy & government analysts</li>
              <li>Market research & consulting</li>
              <li>Case law research</li>
              <li>Healthcare & clinical evidence</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ==================== 11. WHAT'S NEW (CHANGELOG) ==================== */}
      <section id="changelog" className="py-24 px-6 max-w-5xl mx-auto border-t border-[#f3f4f6]">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#323dd6] mb-2 block">
              WHAT'S NEW
            </span>
            <h2 className="text-3xl font-bold text-[#010542] tracking-tight">
              New features & improvements
            </h2>
          </div>
          <button className="text-xs font-semibold text-[#1e2938] border border-[#d1d5dc] hover:border-[#323dd6] px-4 py-2.5 rounded-xl flex items-center space-x-1.5 transition-colors cursor-pointer">
            <span>Changelog</span> <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-6">
          {[
            { title: 'Citation Filters', date: 'Aug 12, 2026', desc: 'AI Chat now supports citation filters allowing you to filter responses by publication year, impact factor, citation count and preprint status.' },
            { title: 'Visualize Concepts', date: 'Jul 29, 2026', desc: 'Use AI Chat to visualize concepts or frameworks.' },
            { title: 'Source Quality Review', date: 'Jul 15, 2026', desc: 'Checking whether your citations are retracted, out of date, or all drawn from the same journal meant reading through them one by one, now Source Quality Review flags them for you.' },
            { title: 'Find Papers Sidebar', date: 'Jul 1, 2026', desc: 'We\'ve pulled paper search into a sidebar so you can discover research without being blocked whilst writing.' },
            { title: 'Section Prompts & 10k Styles', date: 'Jun 17, 2026', desc: 'Section prompts afford more Autocomplete control, new support for over 10,000 citation styles, and multiple performance improvements.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#e5e7eb] shadow-xs flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-sm text-[#1e2938] mb-1">{item.title}</h4>
                <p className="text-xs text-[#4a5565] leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
              <div className="text-xs font-mono text-[#697282] shrink-0 pt-0.5">{item.date}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 12. KNOWLEDGE (YOUTUBE GUIDES) ==================== */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-[#f3f4f6] text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#323dd6] mb-3 block">
          KNOWLEDGE
        </span>
        <h2 className="text-3xl font-bold text-[#010542] mb-12 tracking-tight">
          Tutorials & Guides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div 
            onClick={handleStartWriting}
            className="relative aspect-video rounded-2xl flex items-end group overflow-hidden border border-[#cccff3]/60 cursor-pointer shadow-md"
          >
            <img 
              src="/images/tutorial_autocomplete.png" 
              alt="Grounded Autocomplete Showcase" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#010542]/90 via-[#010542]/50 to-transparent p-4 text-left">
              <span className="text-xs font-semibold text-white drop-shadow-md block">Getting Started with Grounded Autocomplete</span>
            </div>
          </div>

          <div 
            onClick={handleStartWriting}
            className="relative aspect-video rounded-2xl flex items-end group overflow-hidden border border-[#cccff3]/60 cursor-pointer shadow-md"
          >
            <img 
              src="/images/tutorial_byok_security.png" 
              alt="BYOK Key Security Showcase" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#010542]/90 via-[#010542]/50 to-transparent p-4 text-left">
              <span className="text-xs font-semibold text-white drop-shadow-md block">BYOK Key Setup & Security Deep Dive</span>
            </div>
          </div>

          <div 
            onClick={handleStartWriting}
            className="relative aspect-video rounded-2xl flex items-end group overflow-hidden border border-[#cccff3]/60 cursor-pointer shadow-md"
          >
            <img 
              src="/images/tutorial_literature_search.png" 
              alt="Semantic Search Masterclass Showcase" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#010542]/90 via-[#010542]/50 to-transparent p-4 text-left">
              <span className="text-xs font-semibold text-white drop-shadow-md block">Semantic Literature Search Masterclass</span>
            </div>
          </div>
        </div>

        <button 
          onClick={handleStartWriting}
          className="text-xs font-semibold text-[#1e2938] border border-[#d1d5dc] hover:border-[#323dd6] px-6 py-3 rounded-xl flex items-center space-x-1.5 transition-colors mx-auto cursor-pointer"
        >
          <svg className="w-4 h-4 text-[#ee4446]" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 0 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          <span>View all guides and instructional content on YouTube</span>
        </button>
      </section>

      {/* ==================== 13. FAQ ACCORDION ==================== */}
      <section id="faq" className="py-20 px-6 max-w-4xl mx-auto border-t border-[#f3f4f6]">
        <h2 className="text-3xl font-bold text-[#010542] text-center mb-12">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {[
            'Does openJennie plagiarize?',
            'Is there mobile support?',
            'Is openJennie multilingual?',
            'Are citations up to date?',
            'What are citations?',
            'Which AI models does openJennie use?'
          ].map((question, index) => (
            <div 
              key={index}
              onClick={() => toggleFaq(index)}
              className="bg-white border border-[#e5e7eb] hover:border-[#cccff3] rounded-2xl p-5 cursor-pointer transition-all shadow-xs"
            >
              <div className="flex justify-between items-center text-sm font-semibold text-[#010542]">
                <span>{question}</span>
                <ChevronDown className={`w-4 h-4 text-[#697282] transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
              </div>
              {openFaq === index && (
                <p className="mt-3 text-xs text-[#4a5565] leading-relaxed pt-3 border-t border-[#f3f4f6]">
                  openJennie is a Bring Your Own Key (BYOK) tool that provides full model choice (GPT-4o, Claude 3.5, Gemini) to generate original text based strictly on your prompts and uploaded academic sources. All citations are automatically cross-referenced to maintain academic integrity.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 14. FINAL CTA & STATS STRIP ==================== */}
      <section className="py-24 px-6 max-w-5xl mx-auto border-t border-[#f3f4f6] text-center">
        <h1 className="text-5xl font-bold text-[#010542] tracking-tight leading-[1.15] mb-6">
          Make progress on your<br />greatest work, today
        </h1>
        <p className="text-lg md:text-xl text-[#4a5565] max-w-2xl mx-auto mb-8 font-normal">
          Write your first paper with openJennie today and never look back
        </p>

        {/* Feature Checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#364153] mb-10">
          <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#00a600]" /><span>Start for free</span></div>
          <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#00a600]" /><span>No credit card required</span></div>
          <div className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#00a600]" /><span>Cancel anytime</span></div>
        </div>

        {/* Main Hero CTA */}
        <button 
          onClick={handleStartWriting}
          className="bg-[#323dd6] hover:bg-[#1722be] text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-[#323dd6]/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 mb-16 cursor-pointer"
        >
          Start writing — it's free
        </button>

        {/* Stats Strip */}
        <div className="border-t border-[#e5e7eb] pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-[#010542] mb-1">Over 6m</div>
            <div className="text-xs text-[#697282] font-medium">Academics worldwide</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#010542] mb-1">5.2 hours saved</div>
            <div className="text-xs text-[#697282] font-medium">On average per paper</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#010542] mb-1">Over 15m</div>
            <div className="text-xs text-[#697282] font-medium">Papers written on openJennie</div>
          </div>
        </div>
      </section>

      {/* ==================== 15. DARK FOOTER ==================== */}
      <footer className="bg-[#010542] text-white pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-white/10 pb-12">
          
          <div className="md:col-span-1">
            <div className="mb-4">
              <BrandLogo size="md" variant="light" />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-6 max-w-xs">
              Meet your intelligent research assistant
            </p>
            <button 
              onClick={handleStartWriting}
              className="bg-[#323dd6] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors hover:bg-[#1722be] cursor-pointer"
            >
              Start writing
            </button>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Use Cases</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>Teams & Institutions</li>
              <li>For Researchers</li>
              <li>Literature Review Generator</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Mini Tools</h4>
            <ul className="space-y-2.5 text-xs text-gray-300 grid grid-cols-1 gap-y-2.5">
              <li>Browser Extension</li>
              <li>Thesis Statement Generator</li>
              <li>Paraphrasing Tool</li>
              <li>AI Essay Outline Generation</li>
              <li>Essay Expander</li>
              <li>Sentence & Paragraph Expansion</li>
              <li>AI Essay Writer</li>
              <li>AI Summarizer</li>
              <li>Paragraph Generator</li>
              <li>Open Tools</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Updates</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>Changelog</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>Careers</li>
              <li>Influencer program</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 flex justify-between items-center text-xs text-gray-400">
          <div>Copyright © {currentYear} openJennie (BYOK Version). All rights reserved.</div>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
