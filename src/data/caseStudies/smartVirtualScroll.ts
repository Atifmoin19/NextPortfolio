import type { CaseStudy } from "./types";

// Sources: the package README on npm and the npm registry + downloads API, fetched on
// 2026-11-01 (registry: latest 0.1.4, 5 published versions, ISC, first published
// 2025-10-19; downloads API window 2025-10-30 to 2026-10-29: 225).
// The "80% faster" line in content.ts has no benchmark behind it, so it is not shown.

export const smartVirtualScroll: CaseStudy = {
  slug: "smart-virtual-scroll",
  title: "smart-virtual-scroll",
  pitch: "A small React component that virtualises long lists, vertical or horizontal, so only the items in view (plus a buffer) are in the DOM.",
  role: "Author and maintainer",
  timeframe: "Oct 2025",
  status: "open-source",
  statusLabel: "Open source on npm",
  color: "pink",
  links: {
    npm: "https://www.npmjs.com/package/smart-virtual-scroll",
    repos: [{ label: "Repo", url: "https://github.com/Atifmoin19/smart-virtual-scroll" }],
  },
  stack: ["React", "TypeScript"],
  problem: [
    "Rendering hundreds or thousands of list items straight into the DOM makes scrolling janky and memory heavy, especially on phones.",
  ],
  approach: [
    "Measure the container and a child, work out how many items fit, and render only those plus a correction buffer before and after.",
    "Spacers stand in for everything off screen so the scrollbar keeps its true size, and the window recalculates on resize or orientation change.",
  ],
  architecture: {
    summary: "One component: children in, a measured window of children out, with spacers keeping the scroll height honest.",
    components: [
      { name: "Measure", detail: "Reads the container size and an item's size, including the gap." },
      { name: "Window", detail: "Visible count plus the correction buffer, from the current scroll offset." },
      { name: "Spacers", detail: "Leading and trailing spacers sized to the hidden items." },
      { name: "Threshold", detail: "A distance from the end (200 px by default) to trigger pre-loading." },
    ],
    nodes: [
      { id: "kids", label: "children[]", sub: "every item", col: 0, row: 0, tone: "paper" },
      { id: "measure", label: "Measure", sub: "container + item", col: 1, row: 0, tone: "pink" },
      { id: "window", label: "Visible window", sub: "+ buffer", col: 2, row: 0, tone: "butter" },
      { id: "dom", label: "DOM", sub: "spacers + few items", col: 2, row: 1, tone: "mint" },
    ],
    edges: [
      { from: "kids", to: "measure" },
      { from: "measure", to: "window", label: "scroll, resize" },
      { from: "window", to: "dom" },
    ],
  },
  decisions: [
    {
      title: "Children in, not a render function",
      choice: "You pass an array of elements, the most natural React API for a first version.",
      tradeoff: "Every element is still created up front, even if most are never mounted. A render-prop API would avoid that for very large lists.",
    },
    {
      title: "Measure instead of configure",
      choice: "Item size is measured, so callers don't have to pass a fixed height.",
      tradeoff: "It assumes items are roughly uniform; very uneven items make the window estimate less accurate.",
    },
    {
      title: "A correction buffer",
      choice: "Extra items before and after the visible range (2 by default) hide blank flashes during fast scrolls.",
      tradeoff: "More buffer means more DOM nodes; it's a dial the caller tunes.",
    },
    {
      title: "Both orientations in one component",
      choice: "An orientation prop switches between vertical lists and horizontal rails.",
      tradeoff: "One code path handles two axes, so every size calculation has to stay orientation-aware.",
    },
  ],
  results: [
    { value: "225", label: "npm downloads in the last year", source: "api.npmjs.org, 2025-10-30 to 2026-10-29, fetched 2026-11-01" },
    { value: "0.1.4", label: "latest version, 5 published in total", source: "registry.npmjs.org, fetched 2026-11-01" },
    { value: "ISC", label: "license", source: "registry.npmjs.org" },
  ],
  resultsNote: "Download counts include CI installs and mirrors, so they are a rough signal, not a user count. No published benchmark yet, so no speed-up figure is claimed.",
  screenshots: [],
  snippet: {
    lang: "tsx",
    caption: "Basic vertical list, from the README",
    code: `import { SmartVirtualScroll } from "smart-virtual-scroll";

export const Example = () => (
  <SmartVirtualScroll
    orientation="vertical"
    gap={10}
    correction={3}
    threshold={250}
  >
    {items}
  </SmartVirtualScroll>
);`,
  },
  next: [
    "Move react and react-dom from dependencies to peer dependencies only: 0.1.4 lists React 19 as a dependency and React 18 as a peer.",
    "Add a benchmark (DOM nodes and frame time for 10,000 items) and publish the numbers.",
    "Support variable item heights and a render-prop API.",
  ],
};
