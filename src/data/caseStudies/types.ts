// Case-study content for /#/project/:slug. One file per project, all typed against
// CaseStudy so the page can render every project the same way.
//
// House rules for this content: every number in `results` must come from a measurement,
// a test run, a registry/API response or the project's own docs, and says where it came
// from. No em-dashes in copy.

export type Pastel = "butter" | "pink" | "sky" | "mint" | "lilac";

export type CaseStatus = "live" | "open-source" | "internal" | "live-private";

export interface CaseLink {
  label: string;
  url: string;
}

export interface Decision {
  /** Short title, written like a note to self. */
  title: string;
  /** What was chosen and why. */
  choice: string;
  /** What it cost. */
  tradeoff: string;
}

export interface CaseResult {
  /** The number, as displayed ("247", "94 / 100"). */
  value: string;
  label: string;
  /** Where the number comes from, with the date when it can drift. */
  source: string;
}

export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
  /** Phone-sized capture (390x844). Rendered narrower. */
  mobile?: boolean;
}

export interface ArchNode {
  id: string;
  label: string;
  sub?: string;
  /** Grid position on wide screens; the diagram transposes on phones. */
  col: number;
  row: number;
  tone?: Pastel | "paper" | "ink";
}

export interface ArchEdge {
  from: string;
  to: string;
  label?: string;
  /** Two-way traffic (e.g. WebSocket). */
  both?: boolean;
}

export interface Architecture {
  summary: string;
  components: { name: string; detail: string }[];
  nodes: ArchNode[];
  edges: ArchEdge[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** One line. */
  pitch: string;
  role: string;
  timeframe: string;
  status: CaseStatus;
  /** Chip text, e.g. "Live" or "Live demo, source private". */
  statusLabel: string;
  color: Pastel;
  /** Shows the red "Flagship" stamp on the hero sheet. */
  flagship?: boolean;
  links: {
    live?: string;
    /** Where the "Try the demo" button goes (usually the landing page with the button). */
    demo?: string;
    repos?: CaseLink[];
    npm?: string;
  };
  stack: string[];
  problem: string[];
  approach: string[];
  architecture: Architecture;
  decisions: Decision[];
  results: CaseResult[];
  /** Optional footnote under the results (method, caveats). */
  resultsNote?: string;
  screenshots: Screenshot[];
  next: string[];
  /** Practical notes for trying it: demo login, wake-up time. */
  tryIt?: string[];
  /** Short code sample (npm packages). */
  snippet?: { lang: string; code: string; caption: string };
  /** Show the shared hosting box. */
  sharedHosting?: boolean;
  /** Extra honesty note shown near the hero (internal projects). */
  disclaimer?: string;
}
