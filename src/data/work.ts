import type { Project } from "./content";
import { portfolioData as seed } from "./content";
import { backendCity } from "./featured";
import { slugify } from "../utils/slugify";

// The "Selected work" index. A curated list lives in code so these rows always render
// whatever the CMS holds; Firestore projects that aren't curated are appended after them.
// Outcomes are short, honest, checkable one-liners (no unverifiable percentages).

export type Pastel = "butter" | "pink" | "sky" | "mint" | "lilac";

export interface WorkItem {
  slug: string;
  year: string;
  name: string;
  type: string;
  outcome: string;
  color: Pastel;
  /** Photo for the floating polaroid; without one the polaroid shows the name. */
  img?: string;
  live?: string;
  repos?: { label: string; url: string }[];
  /** The flagship project: listed first and marked in the index. */
  featured?: boolean;
  /** Full record for the case-study page. */
  project: Project;
}

const PASTELS: Pastel[] = ["butter", "lilac", "sky", "pink", "mint"];

const seedProject = (name: string): Project | undefined =>
  seed.projects.find((p) => p.projectName === name);

const gh = (repo: string) => `https://github.com/Atifmoin19/${repo}`;

interface Curated extends Omit<WorkItem, "project"> {
  project: Omit<Project, "projectName" | "projectType" | "link" | "image"> & { image?: string };
}

const CURATED: Curated[] = [
  {
    year: "2026",
    slug: "dayline",
    featured: true,
    name: "Dayline",
    type: "Live day-timeline for team task scheduling",
    outcome: "Live, everyone's timeline updates over WebSockets",
    color: "sky",
    img: "/projects/dayline/app-timeline.webp",
    live: "https://dayline-alpha-ten.vercel.app",
    repos: [{ label: "Repo", url: gh("dayline") }],
    project: {
      stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "WebSockets"],
      problem: "Teams plan the day in chat threads and lose track of who is doing what, and when.",
      approach: "A shared day timeline for a team's tasks, backed by FastAPI and Postgres, with live WebSocket updates and isolated demo workspaces.",
      highlights: [
        "Live updates over WebSockets, so every open timeline stays in sync.",
        "FastAPI and PostgreSQL backend.",
        "Isolated demo workspaces, so visitors never see each other's data.",
      ],
    },
  },
  {
    year: "2026",
    slug: "backend-city",
    name: backendCity.projectName,
    type: "Game that teaches backend development",
    outcome: "Live, FastAPI running in the browser",
    color: "butter",
    img: "/projects/backend-city/game-night.webp",
    live: backendCity.liveUrl,
    repos: backendCity.repos,
    project: backendCity,
  },
  {
    year: "2026",
    slug: "all-square",
    name: "All Square",
    type: "Group trip expense splitting PWA",
    outcome: "Live, works offline, demo sandbox to try",
    color: "mint",
    img: "/projects/all-square/demo-dashboard.webp",
    live: "https://expense-tracker-fe-xi.vercel.app",
    repos: [
      { label: "Frontend", url: gh("ExpenseTrackerFE") },
      { label: "Backend", url: gh("ExpenseTrackerBE") },
    ],
    project: {
      stack: ["React", "TypeScript", "PWA", "FastAPI", "PostgreSQL"],
      problem: "Splitting a group trip's expenses falls apart when people log spends on patchy mobile data and nobody trusts the final tally.",
      approach: "An offline-first PWA that records expenses locally and syncs to a FastAPI and Postgres backend, with a demo sandbox so anyone can try it without signing up.",
      highlights: [
        "Offline-first: expenses are captured without a connection and synced later.",
        "FastAPI and PostgreSQL backend.",
        "Demo sandbox for trying the app without an account.",
      ],
    },
  },
  {
    year: "2025",
    slug: "zenova",
    name: "Zenova",
    type: "AI agent orchestration for insurance",
    outcome: "30+ agents, 100+ missions",
    color: "lilac",
    project: seedProject("Zenova") ?? { stack: [] },
  },
  {
    year: "2026",
    slug: "email-template-flow",
    name: "EmailTemplateFlow",
    type: "Drag-and-drop email builder",
    outcome: "Table-based export, autosave, 54 tests",
    color: "pink",
    img: "/projects/email-template-flow/builder.webp",
    live: "https://atifmoin19.github.io/Email-Template-Builder/",
    repos: [{ label: "Repo", url: gh("Email-Template-Builder") }],
    project: {
      stack: ["React", "TypeScript"],
      problem: seedProject("EmailTemplateFlow")?.problem,
      approach: "A drag-and-drop builder that exports table-based HTML, the layout email clients actually render consistently.",
      highlights: [
        "Exports table-based HTML for Outlook and Gmail.",
        "Autosave, so a draft survives a closed tab.",
        "Five starter templates.",
        "Covered by 54 tests.",
      ],
    },
  },
  {
    year: "2026",
    slug: "interesting-ui",
    name: "Interesting UI",
    type: "React animation component library",
    outcome: "62 components, about 38 kB gzipped",
    color: "butter",
    img: "/projects/interesting-ui/home.webp",
    live: "https://intresting-ui.vercel.app",
    // Source repo is private by choice: link the live demo only.
    project: {
      stack: ["React", "Chakra UI v2", "GSAP", "Framer Motion"],
      problem: seedProject("Interesting UI")?.problem,
      approach: "A standalone library of animated components built on Chakra UI v2, GSAP and Framer Motion.",
      highlights: [
        "62 animated components.",
        "About 38 kB gzipped.",
        "Covered by 84 tests.",
      ],
    },
  },
  {
    year: "2024",
    slug: "zopper-ui",
    name: "Zopper UI",
    type: "Internal React component library",
    outcome: "Shared across Zopper's fintech products",
    color: "sky",
    project: {
      ...(seedProject("Zopper UI") ?? {}),
      highlights: [
        "Shipped features used in multiple production fintech applications.",
        "A shared design system that keeps the UI consistent across products.",
      ],
    },
  },
  {
    year: "2026",
    slug: "vite-pwa-updater",
    name: "vite-pwa-updater",
    type: "Open-source PWA update manager",
    outcome: "On npm, no more stale PWA caches",
    color: "mint",
    live: "https://www.npmjs.com/package/vite-pwa-updater",
    repos: [{ label: "Repo", url: gh("vite-pwa-updater") }],
    project: seedProject("vite-pwa-updater") ?? { stack: [] },
  },
  {
    year: "2025",
    slug: "smart-virtual-scroll",
    name: "smart-virtual-scroll",
    type: "Open-source list virtualization",
    outcome: "On npm, renders only the visible rows",
    color: "pink",
    live: "https://www.npmjs.com/package/smart-virtual-scroll",
    repos: [{ label: "Repo", url: gh("smart-virtual-scroll") }],
    project: {
      ...(seedProject("smart-virtual-scroll") ?? {}),
      highlights: [
        "Only the rows in view are in the DOM, so long lists stay smooth.",
        "Published as an open-source npm package.",
      ],
    },
  },
];

function toItem(c: Curated): WorkItem {
  const project: Project = {
    ...c.project,
    projectName: c.name,
    projectType: c.type,
    image: c.project.image ?? c.img ?? "",
    link: { code: c.repos?.[0]?.url ?? "", project: c.live ?? "" },
  };
  // Backend City keeps its own record (gallery, proof points) for the case study.
  return { ...c, project: c.name === backendCity.projectName ? backendCity : project };
}

const CURATED_ITEMS = CURATED.map(toItem);

/** Curated rows first, then any CMS project that isn't already curated. */
export function getWorkItems(cms: Project[] = []): WorkItem[] {
  // Match CMS entries by slug and by slugified name (EmailTemplateFlow's slug is hyphenated).
  const known = new Set(CURATED_ITEMS.flatMap((w) => [w.slug, slugify(w.name)]));
  const extra = cms
    .filter((p) => p.projectName && !known.has(slugify(p.projectName)))
    .map<WorkItem>((p, i) => ({
      slug: slugify(p.projectName),
      year: "",
      name: p.projectName,
      type: p.projectType,
      outcome: p.highlights?.[0] ?? "",
      color: PASTELS[(CURATED_ITEMS.length + i) % PASTELS.length],
      img: p.image || undefined,
      live: p.link?.project || undefined,
      repos: p.link?.code ? [{ label: "Repo", url: p.link.code }] : undefined,
      project: p,
    }));
  return [...CURATED_ITEMS, ...extra];
}

/** Case-study lookup by slug; curated records win over the CMS copy. */
export function findWorkProject(slug: string | undefined, cms: Project[] = []): Project | null {
  if (!slug) return null;
  return getWorkItems(cms).find((w) => w.slug === slug)?.project ?? null;
}
