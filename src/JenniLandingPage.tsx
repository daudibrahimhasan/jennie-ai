import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ChevronDown, 
  Search, 
  Play, 
  ExternalLink, 
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  Users,
  History
} from 'lucide-react';
import { useAppStore } from './useAppStore';

export default function JenniLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { setCurrentView } = useAppStore();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleStartWriting = () => {
    setCurrentView('app');
  };

  return (
    <div className="min-h-screen bg-[#fcfcff] text-[#1e2938] font-sans antialiased selection:bg-[#323dd6]/10 selection:text-[#323dd6]">
      
      {/* ==================== 1. NAVIGATION BAR ==================== */}
      <header className="sticky top-0 z-50 bg-[#fcfcff]/90 backdrop-blur-md border-b border-[#e5e7eb]/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div onClick={handleStartWriting} className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-[#323dd6] flex items-center justify-center text-white font-bold text-xl shadow-md shadow-[#323dd6]/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H14L20 14V6C20 4.89543 19.1046 4 18 4H6Z" fill="white"/>
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-[#010542]">Jenni</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#4a5565]">
            <a href="#pricing" className="hover:text-[#323dd6] transition-colors">Pricing</a>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-[#323dd6] transition-colors">
              <span>Teams</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </div>
            <a href="#about" className="hover:text-[#323dd6] transition-colors">About</a>
            <a href="#blog" className="hover:text-[#323dd6] transition-colors">Blog</a>
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
          Write your first paper with Jenni today and never look back
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
            <div className="text-xs text-[#697282] font-medium">Papers written on Jenni</div>
          </div>
        </div>
      </section>

      {/* ==================== 3. SOURCE-GROUNDED WRITING ==================== */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-[#f3f4f6]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#323dd6] mb-3 block">
              Source-Grounded Writing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#010542] leading-tight mb-6">
              AI that writes from your papers, not from the web
            </h2>
            <p className="text-base text-[#4a5565] leading-relaxed mb-6">
              Upload <strong>PDFs</strong> or import collections from <strong>Zotero</strong> and <strong>Mendeley</strong>. Jenni's autocomplete can draw exclusively from your curated library, not generic training data.
            </p>
            <p className="text-base text-[#4a5565] leading-relaxed">
              You control which sources inform each section, so your literature review reflects your judgment.
            </p>
          </div>

          {/* Graphic Card */}
          <div className="bg-[#f5f5fa] border border-[#e5e7eb] rounded-3xl p-12 flex items-center justify-center min-h-[320px]">
            <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-4 border border-[#e5e7eb]">
              <div className="w-12 h-12 rounded-xl bg-[#a61c1c] text-white flex items-center justify-center font-bold text-xs">MENDELEY</div>
              <div className="w-12 h-12 rounded-xl bg-[#323dd6] text-white flex items-center justify-center font-bold text-xs">EN</div>
              <div className="w-12 h-12 rounded-xl bg-[#ee4446]/10 text-[#ee4446] flex items-center justify-center font-bold text-xs">PDF</div>
              <div className="w-12 h-12 rounded-xl bg-[#ee4446] text-white flex items-center justify-center font-bold text-xs">Z</div>
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
                <span className="text-sm text-[#1e2938] font-medium flex-1">CRISPR</span>
                <button 
                  onClick={handleStartWriting}
                  className="bg-[#323dd6] text-white text-xs font-semibold px-4 py-1.5 rounded-lg cursor-pointer"
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

      {/* ==================== 5. COMPARISON TABLE (JENNI VS CHATGPT) ==================== */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-[#f3f4f6] text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#323dd6] mb-3 block">
          Why Jenni
        </span>
        <h2 className="text-4xl font-bold text-[#010542] mb-4">Not another AI chatbot</h2>
        <p className="text-base text-[#697282] mb-12">There are hundreds of AI tools. Here's what makes Jenni different from ChatGPT.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Jenni Card */}
          <div className="bg-[#323dd6] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-2xl font-bold mb-8 flex items-center space-x-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H14L20 14V6C20 4.89543 19.1046 4 18 4H6Z"/>
                </svg>
                <span>Jenni</span>
              </div>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Every claim tied to your documents with clear references</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Builds arguments strictly from your selected sources</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Structured workspace with outlining and editing tools</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Auto-generated citations with 10,000+ supported styles</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ChatGPT Card */}
          <div className="bg-white border border-[#e5e7eb] text-[#1e2938] p-8 rounded-3xl shadow-xs">
            <div className="text-xl font-bold text-[#101828] mb-8 flex items-center space-x-2">
              <span className="text-lg">🤖</span>
              <span>ChatGPT</span>
            </div>
            <ul className="space-y-6 text-sm font-medium text-[#4a5565]">
              <li className="flex items-start space-x-3">
                <X className="w-5 h-5 text-[#697282] shrink-0 mt-0.5" />
                <span>Trained on large datasets without direct source links</span>
              </li>
              <li className="flex items-start space-x-3">
                <X className="w-5 h-5 text-[#697282] shrink-0 mt-0.5" />
                <span>Generate content from general knowledge across topics</span>
              </li>
              <li className="flex items-start space-x-3">
                <X className="w-5 h-5 text-[#697282] shrink-0 mt-0.5" />
                <span>Simple chat UI for quick answers and drafts</span>
              </li>
              <li className="flex items-start space-x-3">
                <X className="w-5 h-5 text-[#697282] shrink-0 mt-0.5" />
                <span>Citations require manual formatting and checking</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==================== 6. CLAIM INSPECTOR & REVIEWS ==================== */}
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

      {/* ==================== 7. PUBLISHED PAPERS GRID ==================== */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-[#f3f4f6]">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#323dd6] mb-2 block">
              PUBLISHED WITH JENNI
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
                From Childhood Woes to Adult Blues: Unmasking the Role of Early Traumas...
              </h3>
              <p className="text-xs text-[#697282]">Kristóf, et al.</p>
              <p className="text-xs text-[#697282] italic">International Journal of Molecular Sciences</p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#e5e7eb] text-xs font-mono text-[#697282]">2025</div>
          </div>

          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-[#faa719] bg-[#faa719]/10 px-2 py-0.5 rounded mb-3 inline-block">
                Open Access
              </span>
              <h3 className="text-sm font-bold text-[#010542] leading-snug mb-2">
                Generative AI in Scientific Publishing – Opportunities and Challenges
              </h3>
              <p className="text-xs text-[#697282]">Aleksandra Bradic-Martinovic</p>
              <p className="text-xs text-[#697282] italic">AI-SMART</p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#e5e7eb] text-xs font-mono text-[#697282]">2025</div>
          </div>

          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-[#faa719] bg-[#faa719]/10 px-2 py-0.5 rounded mb-3 inline-block">
                Open Access
              </span>
              <h3 className="text-sm font-bold text-[#010542] leading-snug mb-2">
                Transverse tibial bone transport to avoid major lower limb amputation...
              </h3>
              <p className="text-xs text-[#697282]">Estes, et al.</p>
              <p className="text-xs text-[#697282] italic">International Journal of Surgery Case Reports</p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#e5e7eb] text-xs font-mono text-[#697282]">2025</div>
          </div>
        </div>
      </section>

      {/* ==================== 8. FAQ ACCORDION ==================== */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-t border-[#f3f4f6]">
        <h2 className="text-3xl font-bold text-[#010542] text-center mb-12">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {[
            'Does Jenni plagiarize?',
            'Is there mobile support?',
            'Is Jenni multilingual?',
            'Are citations up to date?',
            'What are citations?',
            'Which AI models does Jenni use?'
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
                  Jenni creates original text based strictly on your prompts and uploaded academic sources. All citations are automatically cross-referenced to maintain integrity.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 9. DARK FOOTER ==================== */}
      <footer className="bg-[#010542] text-white pt-16 pb-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-white/10 pb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-white text-[#010542] flex items-center justify-center font-bold text-lg">
                J
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Jenni</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Meet your intelligent research assistant
            </p>
            <button 
              onClick={handleStartWriting}
              className="bg-[#323dd6] text-white text-xs font-semibold px-4 py-2 rounded-xl cursor-pointer hover:bg-[#1722be]"
            >
              Start writing
            </button>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Use Cases</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><a href="#" className="hover:text-white">Teams & Institutions</a></li>
              <li><a href="#" className="hover:text-white">For Researchers</a></li>
              <li><a href="#" className="hover:text-white">Literature Review Generator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Mini Tools</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><a href="#" className="hover:text-white">Browser Extension</a></li>
              <li><a href="#" className="hover:text-white">Thesis Statement Generator</a></li>
              <li><a href="#" className="hover:text-white">Paraphrasing Tool</a></li>
              <li><a href="#" className="hover:text-white">AI Essay Outline Generator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Updates</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><a href="#" className="hover:text-white">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-6xl mx-auto pt-8 flex justify-between items-center text-xs text-gray-400">
          <div>© {new Date().getFullYear()} Jenni AI. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Twitter / X</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
