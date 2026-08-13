# MASTER PROMPT: openJennie MVP — RESEARCH-GROUNDED MARKDOWN EDITOR

## ROLE & OBJECTIVE

You are a senior full-stack web engineer, product designer, and AI-safety-minded research-tool builder.

Build **openJennie**, an original, open-source, distraction-free Markdown editor inspired by the clarity and research workflow of modern academic writing tools. Use Jenni AI only as a product reference. Do not copy its trademarks, logo, proprietary assets, private prompts, protected copy, or non-public implementation. Do not attempt to bypass authentication, subscriptions, or paywalls.

The MVP has two core capabilities:

1. After the user pauses typing, generate exactly one context-aware continuation sentence as faded ghost text. `Tab` accepts it and `Escape` rejects it.
2. When the user highlights a claim and chooses **Find sources**, search Semantic Scholar first, show real matching papers, require the user to select one, then let the AI write a cited sentence grounded in that selected paper's returned metadata and abstract.

The citation workflow is non-negotiable:

```text
User's highlighted claim
→ Search Semantic Scholar
→ Display real matching papers
→ User selects a source
→ AI writes only from that paper's returned metadata/abstract
→ Insert the sentence and citation with a verification link
```

Never ask a language model to invent, recall, or complete bibliographic metadata. If retrieval returns no usable source, say so and do not generate a citation.

This prompt defines the product and implementation requirements. **Do not begin implementation until the user explicitly asks you to build it.**

---

## 1. TARGET APP INPUT VARIABLES

- **Product name:** openJennie
- **Product type:** Open-source, desktop-first web application
- **Target platform:** Responsive web; optimized first for desktop browsers at 1280–1536 px widths, usable on tablet, and intentionally limited but readable on mobile
- **Preferred stack:** Next.js 15+ App Router, React, TypeScript, Tailwind CSS, CodeMirror 6, Lucide icons, Zod, Vitest, React Testing Library, and Playwright
- **Editor:** CodeMirror 6 with Markdown support, custom ghost-text decoration, selection-aware command menu, keyboard handlers, and document persistence
- **Backend architecture:** Next.js server route handlers with bring-your-own-key environment configuration; provider-neutral AI adapter; Semantic Scholar Graph API adapter; server-side caching and rate limiting
- **Persistence for MVP:** IndexedDB/local-first document storage; SQLite-compatible server cache through Drizzle when a durable cache is configured, with an in-memory fallback for local development
- **Deployment target:** Local development first; Vercel-compatible production deployment
- **Reference application:** [Jenni AI](https://jenni.ai/)
- **Scholarly retrieval source:** [Semantic Scholar Academic Graph API](https://www.semanticscholar.org/product/api)
- **Semantic Scholar licence:** [API Licence Agreement](https://www.semanticscholar.org/product/api/license)
- **Microsoft Student Ambassadors learning resource:** [Introduction to GitHub Copilot](https://learn.microsoft.com/training/modules/introduction-to-github-copilot/?wt.mc_id=studentamb_551730)
- **Attached screenshots:** No
- **Attached recordings:** No
- **Live reference inspected:** Yes; the public Jenni landing page was inspected on August 14, 2026
- **Reference patterns observed:** Three-column research workspace preview, source library/search, central writing canvas, cited autocomplete, verification-oriented references, citation controls, and an AI assistant sidebar

---

## 2. PRODUCT BOUNDARIES

Build only the MVP described here. Do not add authentication, payments, collaboration, PDF ingestion, Zotero/Mendeley import, plagiarism scoring, document review, multi-document chat, or a general-purpose chatbot unless separately requested.

The experience must remain retrieval-first. AI may help phrase a sentence, but it may not choose a source on the user's behalf or manufacture a missing author, year, title, venue, DOI, URL, page number, quotation, result, or conclusion.

Use the name **openJennie** consistently. Create an original wordmark or plain-text logo. Do not reuse Jenni AI's flag mark, product screenshots, marketing text, or brand identity.

---

## 3. VISUAL AND UX DIRECTION

### 3.1 Design character

Create an original interface that feels calm, scholarly, modern, and focused. The editor is the visual priority. Controls should recede until needed. Avoid dashboard clutter, gradients, glassmorphism, oversized marketing elements, gamification, and decorative animation.

Use the inspected reference only for high-level spatial principles: white workspace, dark navy text, restrained blue-violet actions, thin neutral borders, soft gray secondary surfaces, compact toolbars, and generous writing margins.

### 3.2 Design tokens

Use these openJennie tokens rather than copying the reference site's exact production CSS:

```css
--background: #F7F8FB;
--surface: #FFFFFF;
--surface-subtle: #F2F4F7;
--text-primary: #101828;
--text-secondary: #475467;
--text-muted: #98A2B3;
--border: #E4E7EC;
--border-strong: #D0D5DD;
--accent: #4355DB;
--accent-hover: #3545C5;
--accent-soft: #EEF0FF;
--success: #067647;
--warning: #B54708;
--danger: #B42318;
--selection: #DDE3FF;
--ghost-text: #98A2B3;
```

Typography:

- UI font: Inter, with `ui-sans-serif, system-ui, sans-serif` fallback
- Editor font: Source Serif 4, with Georgia and serif fallbacks
- Editor body: 18 px, 1.75 line height, 400 weight
- Document title: 32 px, 1.2 line height, 600 weight, −0.02 em tracking
- UI body: 14 px, 1.45 line height
- Labels/meta: 12–13 px, 500–600 weight
- Code/BibTeX: JetBrains Mono, with `ui-monospace, monospace` fallback

Shape and depth:

- Small controls: 8 px radius
- Cards, panels, and dialogs: 12 px radius
- Pills: 999 px radius
- Borders: 1 px
- Shadows: subtle only; use `0 8px 30px rgba(16, 24, 40, 0.08)` for floating panels

### 3.3 Desktop layout

Use a full-height application shell:

```text
┌──────────────────────────────────────────────────────────────┐
│ openJennie   document title       Saved     Settings / Help │
├──────────────┬───────────────────────────────┬───────────────┤
│ Documents    │ Markdown editor               │ Sources       │
│              │                               │               │
│ New document │ Selection toolbar appears     │ Search/results│
│ Recent docs  │ only when text is selected    │ Paper details │
│              │                               │ Cite controls │
├──────────────┴───────────────────────────────┴───────────────┤
│ AI off/on · provider · verification warning · word count    │
└──────────────────────────────────────────────────────────────┘
```

- Left rail: 240 px expanded, 64 px collapsed
- Right sources panel: 380–420 px; hidden until **Find sources** is invoked, then remains dismissible
- Editor column: centered, maximum readable line width of 760 px
- Top bar: 56 px
- Status bar: 36 px
- At widths below 1024 px, side panels become overlay drawers
- At widths below 720 px, keep editing functional but present sourcing in a full-screen sheet

### 3.4 Core states

Design and implement all of these states:

- Empty document with a restrained prompt: “Start writing in Markdown…”
- Typing with no suggestion
- Waiting for debounced autocomplete
- Ghost-text suggestion visible
- Ghost text accepted with `Tab`
- Ghost text rejected with `Escape`
- Text selection with a compact **Find sources** action
- Scholarly search loading state
- Search results with real paper metadata
- No results
- Rate-limited/error state with retry guidance
- Selected paper details
- Generating a grounded sentence
- Citation preview in APA, IEEE, and BibTeX
- Successful insertion
- Missing abstract/insufficient evidence warning
- AI provider not configured
- Offline/local document mode

### 3.5 Interaction details

- Debounce autocomplete for 900 ms after the last meaningful edit.
- Do not request autocomplete for an empty document, selections, code fences, very short context, or while a previous request is in flight.
- Cancel stale requests when the user resumes typing.
- Render only one suggested sentence, inline after the cursor, in `--ghost-text`.
- `Tab` accepts the suggestion only when ghost text is visible; otherwise preserve normal editor indentation behavior.
- `Escape` rejects the suggestion and must not alter document content.
- Mouse/touch acceptance is optional for MVP; keyboard behavior is required.
- When text is selected, show a small floating toolbar anchored to the selection with **Find sources**.
- Opening a search must copy the selected claim into a read-only query field that the user may edit before submitting.
- Search results must never auto-select. The user explicitly chooses a paper.
- Source links open in a new tab with `noopener noreferrer`.
- Every generated cited sentence includes an adjacent verification affordance.

Motion:

- Panel open/close: 180 ms ease-out
- Floating toolbar: 120 ms fade/scale from 0.98
- Ghost text: 100 ms opacity fade
- Result cards: no staggered entrance animation
- Respect `prefers-reduced-motion`
- No haptics are required for the web MVP

---

## 4. INFORMATION ARCHITECTURE AND COMPONENT MAP

```text
AppShell
├── TopBar
│   ├── OriginalOpenJennieWordmark
│   ├── EditableDocumentTitle
│   ├── SaveStatus
│   └── SettingsButton
├── DocumentSidebar
│   ├── NewDocumentButton
│   └── DocumentList
├── EditorWorkspace
│   ├── MarkdownEditor
│   ├── GhostTextExtension
│   ├── SelectionToolbar
│   └── EditorStatus
├── SourcesPanel
│   ├── ClaimQueryForm
│   ├── SemanticScholarAttribution
│   ├── SearchFilters
│   ├── PaperResultList
│   │   └── PaperResultCard
│   ├── SelectedPaperDetails
│   ├── GroundedSentencePreview
│   └── CitationFormatControls
├── SettingsDialog
│   ├── ProviderSelector
│   ├── ModelConfigurationHelp
│   ├── AutocompleteToggle
│   └── DataAndPolicyNotice
└── VerificationBanner
```

---

## 5. AI BEHAVIOR AND PROMPT CONTRACTS

Do not reconstruct Jenni AI's private prompts. Implement original, minimal prompts with strict structured outputs and server-side validation.

### 5.1 Provider interface

Create an interchangeable server-side provider interface supporting:

- OpenAI-compatible endpoints
- Anthropic-compatible endpoints
- Microsoft Foundry model endpoints, including supported Claude models when configured
- A deterministic mock provider for tests and demos

The provider adapter receives only the minimum required document context. Never send API keys, cached search data, unrelated documents, or browser/local storage contents to the model.

### 5.2 Autocomplete contract

Input:

```ts
type AutocompleteInput = {
  beforeCursor: string;
  afterCursor: string;
  documentTitle?: string;
  language: string;
};
```

Behavior:

- Continue the author's current thought with exactly one sentence.
- Match the document's language, tense, tone, and Markdown formatting.
- Do not add citations, quotations, headings, bullet lists, or facts requiring external verification.
- Do not repeat the preceding sentence.
- Return an empty suggestion when a safe, coherent continuation is not possible.

Output:

```json
{"suggestion":"One sentence only.","finishReason":"completed"}
```

### 5.3 Grounded cited-sentence contract

The server must supply the selected Semantic Scholar paper record to the model. The model must not receive unselected search results.

Input:

```ts
type GroundedSentenceInput = {
  claim: string;
  surroundingContext: string;
  paper: {
    paperId: string;
    title: string;
    authors: Array<{ name: string }>;
    year: number | null;
    venue: string | null;
    abstract: string | null;
    doi: string | null;
    semanticScholarUrl: string;
    openAccessPdfUrl: string | null;
  };
  citationStyle: "apa" | "ieee" | "bibtex";
};
```

Behavior:

- Write one sentence that is directly supported by the supplied title, metadata, and abstract.
- Never claim access to the full paper unless full text was actually retrieved and supplied.
- Never quote text, invent a page number, or infer a result absent from the abstract.
- If the abstract is missing or does not support the claim, return `supported: false` and explain briefly.
- Preserve uncertainty expressed in the abstract.
- Bibliographic strings are generated deterministically in application code from retrieved metadata, not by the model.

Output:

```json
{
  "supported": true,
  "sentence": "Grounded sentence without a fabricated citation.",
  "supportNote": "Brief description of the abstract evidence used."
}
```

---

## 6. SEMANTIC SCHOLAR RETRIEVAL

Use the Semantic Scholar Academic Graph API as the source of paper identity and metadata. Search through a server route; never expose a private API key in client JavaScript.

Request only needed fields, including:

```text
paperId,title,authors,year,venue,abstract,externalIds,url,openAccessPdf,citationCount
```

Requirements:

- Normalize DOI from `externalIds.DOI` when present.
- Keep the Semantic Scholar paper URL even when a DOI exists.
- Show title, authors, year, venue, DOI, citation count, open-access status, and source link.
- Label missing fields honestly; do not synthesize them.
- Attribute Semantic Scholar visibly in the source panel and project documentation.
- Link to the official API and licence.
- Respect published rate limits and `Retry-After` behavior.
- Use exponential backoff with jitter only for retryable responses.
- Cache normalized search queries and field sets. Default TTL: 24 hours.
- Deduplicate results by Semantic Scholar `paperId`, then DOI.
- Limit the initial MVP to 10 results per search.
- Sanitize and length-limit the claim sent as a query.
- Log operational metadata only; never log keys or full private documents.

The application must not imply that Semantic Scholar endorses openJennie. Add this attribution near results:

> Paper metadata and search results provided by Semantic Scholar. Availability and reuse may be subject to separate licences.

---

## 7. CITATION GENERATION

Generate citations in deterministic application code from retrieved metadata.

Supported MVP formats:

- APA 7 inline citation and reference entry
- IEEE numbered inline citation and reference entry
- BibTeX entry

Rules:

- Prefer the DOI verification link as `https://doi.org/{doi}` when present.
- Otherwise use the Semantic Scholar paper URL.
- Never invent volume, issue, pages, publisher, month, journal, DOI, or author initials.
- Omit unavailable fields according to the format's rules.
- For BibTeX keys, create a stable slug from the first author's surname, year, and first significant title word; resolve collisions deterministically.
- Escape BibTeX-sensitive characters.
- Insert the generated sentence at or immediately after the selected claim based on user choice.
- Insert or update a Markdown `## References` section without duplicating an existing source.
- Store the Semantic Scholar `paperId` in internal document metadata so formatting can be regenerated safely.
- Always show a preview before insertion.

---

## 8. KEY MANAGEMENT, PRIVACY, AND CONFIGURATION

This is a bring-your-own-key open-source app.

- Keep provider and Semantic Scholar keys on the server or in local environment variables.
- Include `.env.example`; never commit or generate a real `.env`.
- Do not store raw keys in IndexedDB, localStorage, the document, logs, analytics, or client bundles.
- Validate environment variables at server startup with Zod.
- Support per-provider variables and a provider selector.
- If a hosted multi-user deployment is later added, use encrypted server-side secrets or an established secret manager; do not improvise browser-side key storage.
- Make telemetry opt-in and disabled by default.
- Do not send document content to any AI provider when AI features are disabled.

Suggested `.env.example` keys:

```dotenv
AI_PROVIDER=mock
OPENAI_API_KEY=
OPENAI_BASE_URL=
OPENAI_MODEL=
ANTHROPIC_API_KEY=
ANTHROPIC_MODEL=
AZURE_AI_FOUNDRY_ENDPOINT=
AZURE_AI_FOUNDRY_API_KEY=
AZURE_AI_FOUNDRY_MODEL=
SEMANTIC_SCHOLAR_API_KEY=
CACHE_DATABASE_URL=
```

---

## 9. SAFETY, TRANSPARENCY, AND ACCESSIBILITY

Show this warning persistently in the source panel and before the first citation insertion:

> Verify every source and generated sentence against the original paper. Follow your institution's academic-integrity and AI-use policies.

Additional requirements:

- Do not claim that an abstract proves more than it states.
- Distinguish metadata, abstract-derived statements, and full-text evidence.
- Provide visible links for verification.
- Use semantic HTML, correct labels, logical focus order, and keyboard-complete workflows.
- Meet WCAG 2.2 AA contrast targets.
- Trap focus in dialogs and return focus on close.
- Announce loading, autocomplete availability, errors, and citation insertion through appropriate live regions without excessive screen-reader chatter.
- Do not use color alone to communicate evidence status.

---

## 10. DATA AND STATE MODEL

Use small, explicit stores rather than one global catch-all store.

```ts
type DocumentRecord = {
  id: string;
  title: string;
  markdown: string;
  createdAt: string;
  updatedAt: string;
  citedPaperIds: string[];
};

type PaperRecord = {
  paperId: string;
  title: string;
  authors: Array<{ authorId?: string; name: string }>;
  year: number | null;
  venue: string | null;
  abstract: string | null;
  doi: string | null;
  semanticScholarUrl: string;
  openAccessPdfUrl: string | null;
  citationCount: number | null;
};
```

Separate state into:

- Local document repository
- Editor UI state
- Ghost suggestion state
- Source search/query state
- Selected paper state
- Citation preview state
- Provider/configuration state

Use abortable requests and request IDs to prevent stale autocomplete or search results from overwriting newer state.

---

## 11. API SURFACE

Implement and validate these server routes:

```text
POST /api/ai/autocomplete
POST /api/ai/grounded-sentence
GET  /api/scholar/search?q=...
GET  /api/scholar/paper/:paperId
GET  /api/health
```

Use Zod request/response schemas, consistent typed errors, timeouts, abort signals, payload limits, and no-secret logging.

---

## 12. TESTABLE ACCEPTANCE CRITERIA

The MVP is complete only when all of the following pass:

1. Pausing after meaningful prose triggers at most one debounced autocomplete request.
2. A stale autocomplete request is cancelled or ignored when typing resumes.
3. Ghost text is visually distinct and is not part of the document until accepted.
4. `Tab` accepts visible ghost text and `Escape` rejects it.
5. Selecting a claim exposes **Find sources** without changing the text.
6. Scholarly search returns normalized, cached Semantic Scholar results with attribution.
7. Each result displays real title, authors, year, DOI when available, and a verification link.
8. No paper is selected automatically.
9. Grounded sentence generation is disabled until a paper is explicitly selected.
10. The model receives only the selected paper's retrieved record and relevant writing context.
11. Unsupported claims return a clear refusal instead of a fabricated sentence.
12. APA, IEEE, and BibTeX output is generated from retrieved metadata and snapshot-tested.
13. Missing metadata is omitted, never invented.
14. Citation insertion includes a DOI or Semantic Scholar verification link.
15. Search rate limits and retry responses are handled without request storms.
16. Keys never appear in client bundles, logs, committed files, or browser storage.
17. `.env.example` exists and `.env*` secrets are gitignored while `.env.example` remains tracked.
18. The verification/institutional-policy warning is clearly visible.
19. The primary workflows are fully keyboard accessible.
20. Unit, integration, and end-to-end tests pass in CI.

---

## 13. REQUIRED DELIVERABLES WHEN IMPLEMENTATION IS AUTHORIZED

Produce complete, executable files rather than isolated demo snippets:

- Next.js application shell and routes
- CodeMirror Markdown editor and extensions
- Ghost-text autocomplete controller
- Selection toolbar and source-search panel
- Semantic Scholar client, normalizer, cache, attribution, and rate-limit handling
- AI provider interface with mock, OpenAI-compatible, Anthropic-compatible, and Microsoft Foundry adapters
- Grounded-sentence service with strict schema validation
- Deterministic APA, IEEE, and BibTeX formatter
- IndexedDB document persistence
- Settings and policy UI
- `.env.example`, `.gitignore`, licence, contribution guide, and README
- Tests for retrieval-first invariants, citation formatting, missing metadata, stale requests, keyboard controls, and key leakage
- GitHub Actions workflow for lint, typecheck, tests, and production build

Do not implement paywall removal, brand impersonation, private-prompt reconstruction, or copied proprietary assets.

---

## 14. MICROSOFT STUDENT AMBASSADORS DOCUMENTATION ANGLE

Develop in VS Code and document GitHub Copilot's role honestly. Do not claim Copilot wrote, verified, or tested work it did not perform.

Create a short video series outline alongside the project:

1. Product problem, retrieval-first architecture, and academic-integrity guardrails
2. Building the distraction-free Markdown editor and ghost-text interaction in VS Code
3. Connecting the Semantic Scholar API with caching, attribution, and rate-limit handling
4. Adding interchangeable AI providers, including Microsoft Foundry configuration
5. Generating deterministic citations and testing against fabricated metadata
6. Accessibility, source verification, open-source release, and final demo

Include the tagged Microsoft Learn resource in the README and every relevant video description:

`https://learn.microsoft.com/training/modules/introduction-to-github-copilot/?wt.mc_id=studentamb_551730`

---

## 15. EXECUTION ORDER WHEN AUTHORIZED

1. Inspect the repository and preserve existing user work.
2. Write a short implementation plan tied to the acceptance criteria.
3. Scaffold only the required stack.
4. Build the editor and local persistence first.
5. Add mocked autocomplete and citation workflows.
6. Add Semantic Scholar retrieval, normalization, attribution, caching, and rate-limit handling.
7. Add deterministic citation formatters.
8. Add provider adapters and grounded generation.
9. Add safety, policy, accessibility, error, loading, and empty states.
10. Test the complete retrieval-first workflow end to end.
11. Verify no key or fabricated citation can enter the client or document.
12. Finish the README and Student Ambassadors video documentation.

### BEGIN ONLY AFTER THE USER EXPLICITLY AUTHORIZES IMPLEMENTATION.
