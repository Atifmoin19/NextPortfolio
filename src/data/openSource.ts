// Open-source packages shown in the "Open source" section.
// npm numbers are a snapshot, fetched by hand from the public npm APIs:
//   version:   https://registry.npmjs.org/<name>            (dist-tags.latest)
//   downloads: https://api.npmjs.org/downloads/point/last-year/<name>
// Interesting UI: the repo stays private (owner's call) but the package is published on npm,
// so its card shows the npm install line and npm link, plus the live demo, and no GitHub link.
// Refresh them by re-running those two requests and updating FETCHED_AT.

export const NPM_FETCHED_AT = "2026-11-01";

export interface OpenSourcePackage {
  name: string;
  title: string;
  what: string;
  version: string;
  /** Downloads in the last 365 days, or null when npm has no stats yet. */
  downloadsLastYear: number | null;
  /** Extra fact shown on the card, already measured. */
  fact?: string;
  github?: string;
  /** Live demo URL. */
  demo?: string;
  /** False when the package is not offered on npm: no install snippet, no npm link. */
  onNpm: boolean;
  /** Short note shown instead of source links, e.g. when the repo is private. */
  note?: string;
  tint: string;
  tape: string;
}

export const OPEN_SOURCE: OpenSourcePackage[] = [
  {
    name: "interesting-ui",
    title: "Interesting UI",
    what: "62 animated React components for Chakra UI, so I stop rewriting the same hover and scroll effects in every project.",
    version: "1.0.0",
    downloadsLastYear: null,
    fact: "62 components, about 38 kB gzipped",
    demo: "https://intresting-ui.vercel.app",
    onNpm: true,
    note: "On npm, source private",
    tint: "var(--lilac)",
    tape: "var(--pink)",
  },
  {
    name: "vite-pwa-updater",
    title: "vite-pwa-updater",
    what: "A hook and toast that tell users a new version of a Vite PWA is ready, instead of serving the stale cache.",
    version: "1.1.0",
    downloadsLastYear: 1358,
    onNpm: true,
    github: "https://github.com/Atifmoin19/vite-pwa-updater",
    tint: "var(--butter)",
    tape: "var(--sky)",
  },
  {
    name: "smart-virtual-scroll",
    title: "smart-virtual-scroll",
    what: "A virtualized React list that only renders the rows on screen, so huge lists scroll without jank.",
    version: "0.1.4",
    downloadsLastYear: 225,
    onNpm: true,
    github: "https://github.com/Atifmoin19/smart-virtual-scroll",
    tint: "var(--mint)",
    tape: "var(--butter)",
  },
  {
    name: "use-flying-clone",
    title: "use-flying-clone",
    what: "A hook that clones an element and flies it to a target, like a product dropping into a cart.",
    version: "0.0.50",
    downloadsLastYear: 523,
    onNpm: true,
    github: "https://github.com/Atifmoin19/use-fly-component",
    tint: "var(--sky)",
    tape: "var(--mint)",
  },
];
