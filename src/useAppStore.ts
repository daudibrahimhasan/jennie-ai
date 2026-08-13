import { create } from 'zustand';
import { searchAcademicPapers } from './semanticScholar';
import { generateGroundedGhostText } from './aiService';

export type CitationStyle = 'APA' | 'IEEE' | 'BibTeX';

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  year: number;
  journal: string;
  abstract: string;
  doi: string;
  isOpenAccess: boolean;
  citationCount: number;
}

export interface ClaimIssue {
  id: string;
  type: 'Misrepresented' | 'Contradicted' | 'Unsupported' | 'Weakly Supported' | 'Overstated';
  text: string;
  suggestion: string;
}

interface AppState {
  // Document State
  docTitle: string;
  content: string;
  ghostText: string;
  isGeneratingGhost: boolean;
  selectedText: string;
  selectionPosition: { top: number; left: number } | null;
  
  // UI View & Panels
  currentView: 'landing' | 'app';
  activeRightPanel: 'research' | 'claims' | 'proofread' | null;
  isSettingsOpen: boolean;
  setCurrentView: (view: 'landing' | 'app') => void;
  
  // Research & Citations
  searchQuery: string;
  paperResults: Paper[];
  selectedPaper: Paper | null;
  activeCitationStyle: CitationStyle;
  insertedCitations: Paper[];
  isSearching: boolean;
  
  // BYOK Settings
  apiKey: string;
  selectedModel: string;
  
  // Actions
  setDocTitle: (title: string) => void;
  setContent: (content: string) => void;
  setGhostText: (text: string) => void;
  acceptGhostText: () => void;
  rejectGhostText: () => void;
  setSelectedText: (text: string, pos: { top: number; left: number } | null) => void;
  setActiveRightPanel: (panel: 'research' | 'claims' | 'proofread' | null) => void;
  setIsSettingsOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  setPaperResults: (papers: Paper[]) => void;
  setSelectedPaper: (paper: Paper | null) => void;
  setCitationStyle: (style: CitationStyle) => void;
  insertCitation: (paper: Paper) => void;
  setApiKey: (key: string) => void;
  setIsSearching: (searching: boolean) => void;
  executeSearch: (query?: string) => Promise<void>;
  generateLiveGhostText: () => Promise<void>;
}

export const useAppStore = create<AppState>((set, get) => ({
  docTitle: 'Systematic Review — PAPE & Sprint Velocity',
  content: `Post-activation performance enhancement has emerged as a preconditioning strategy for strength-dominant athletes [1]. Evidence suggests maximal deadlift performance predicts sprint velocity across trained cohorts, though reported effect sizes vary widely. The underlying mechanism, whether neural facilitation, peripheral adaptation, or both, remains contested.`,
  ghostText: ' Comparative analysis indicates that rest interval length significantly moderates force output dynamics.',
  isGeneratingGhost: false,
  selectedText: '',
  selectionPosition: null,
  
  currentView: 'landing',
  activeRightPanel: 'research',
  isSettingsOpen: false,
  setCurrentView: (currentView) => set({ currentView }),
  
  searchQuery: 'Post-activation performance enhancement sprint velocity',
  paperResults: [
    {
      id: 'p1',
      title: 'From Childhood Woes to Adult Blues: Unmasking the Role of Early Traumas, P2X7 Receptor, and Neuroinflammation in Anxiety and Depression',
      authors: ['Kristóf, et al.'],
      year: 2025,
      journal: 'International Journal of Molecular Sciences',
      abstract: 'Early life stressors trigger prolonged neuroinflammatory cascades mediated by P2X7 receptor pathways, predisposing individuals to depressive phenotypes.',
      doi: '10.3390/ijms26041820',
      isOpenAccess: true,
      citationCount: 42
    },
    {
      id: 'p2',
      title: 'Generative AI in Scientific Publishing – Opportunities and Challenges',
      authors: ['Aleksandra Bradic-Martinovic'],
      year: 2025,
      journal: 'AI-SMART',
      abstract: 'An evaluation of LLM integration into academic workflows, highlighting source-grounding fidelity and peer-review integrity.',
      doi: '10.1016/j.aismart.2025.0135',
      isOpenAccess: true,
      citationCount: 128
    },
    {
      id: 'p3',
      title: 'Transverse tibial bone transport to avoid major lower limb amputation: A case report',
      authors: ['Estes, et al.'],
      year: 2025,
      journal: 'International Journal of Surgery Case Reports',
      abstract: 'Clinical outcomes of tibial bone transport protocols for salvage procedures in advanced ischemic diabetic microangiopathy.',
      doi: '10.1016/j.ijscr.2025.109211',
      isOpenAccess: true,
      citationCount: 15
    }
  ],
  selectedPaper: null,
  activeCitationStyle: 'APA',
  insertedCitations: [
    {
      id: 'p0',
      title: 'Post-activation potentiation in endurance and sprint performance',
      authors: ['Seitz, L. B.', 'Haff, G. G.'],
      year: 2014,
      journal: 'Sports Medicine',
      abstract: 'A meta-analysis examining acute potentiating stimuli on subsequent muscular performance.',
      doi: '10.1007/s40279-014-0178-2',
      isOpenAccess: true,
      citationCount: 310
    }
  ],
  isSearching: false,
  
  apiKey: '',
  selectedModel: 'gemini-3.6-flash',
  
  setDocTitle: (docTitle) => set({ docTitle }),
  setContent: (content) => set({ content }),
  setGhostText: (ghostText) => set({ ghostText }),
  acceptGhostText: () => {
    const { content, ghostText } = get();
    set({ content: content + ghostText, ghostText: '' });
  },
  rejectGhostText: () => set({ ghostText: '' }),
  setSelectedText: (selectedText, selectionPosition) => set({ selectedText, selectionPosition }),
  setActiveRightPanel: (activeRightPanel) => set({ activeRightPanel }),
  setIsSettingsOpen: (isSettingsOpen) => set({ isSettingsOpen }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setPaperResults: (paperResults) => set({ paperResults }),
  setSelectedPaper: (selectedPaper) => set({ selectedPaper }),
  setCitationStyle: (activeCitationStyle) => set({ activeCitationStyle }),
  insertCitation: (paper) => {
    const { content, insertedCitations } = get();
    const newIdx = insertedCitations.length + 1;
    set({
      insertedCitations: [...insertedCitations, paper],
      content: `${content} (${paper.authors[0]} et al., ${paper.year}) [${newIdx}]`
    });
  },
  setApiKey: (apiKey) => set({ apiKey }),
  setIsSearching: (isSearching) => set({ isSearching }),
  executeSearch: async (query?: string) => {
    const targetQuery = query ?? get().searchQuery;
    if (!targetQuery || targetQuery.trim().length === 0) return;
    
    set({ isSearching: true });
    try {
      const results = await searchAcademicPapers(targetQuery);
      if (results.length > 0) {
        set({ paperResults: results, isSearching: false });
      } else {
        set({ isSearching: false });
      }
    } catch (e) {
      set({ isSearching: false });
    }
  },
  generateLiveGhostText: async () => {
    const { content, apiKey, selectedModel, isGeneratingGhost } = get();
    if (!content || content.trim().length < 15 || isGeneratingGhost) return;

    set({ isGeneratingGhost: true });
    try {
      const liveGhost = await generateGroundedGhostText(content, apiKey, selectedModel);
      if (liveGhost && liveGhost.trim().length > 0) {
        set({ ghostText: liveGhost, isGeneratingGhost: false });
      } else {
        // Fallback default contextual ghost sentence if API response empty
        set({ 
          ghostText: ' Furthermore, comparative biological metrics demonstrate high reproducibility under controlled laboratory conditions.', 
          isGeneratingGhost: false 
        });
      }
    } catch (e) {
      set({ isGeneratingGhost: false });
    }
  }
}));
