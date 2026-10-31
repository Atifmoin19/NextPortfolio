import type { CaseStudy } from "./types";

// Sources: IntrestingUI/CASE_STUDY.md and README. The repository is private by choice, so
// no source link. Screenshots captured from the live demo on 2026-11-01.

export const interestingUi: CaseStudy = {
  slug: "interesting-ui",
  title: "Interesting UI",
  pitch:
    "62 animated React components for Chakra UI v2 (cards, carousels, cursors, backgrounds, text effects, form controls), shipped as a typed library with a live gallery and a reproducible frame-rate benchmark.",
  role: "Solo: design, build, benchmark",
  timeframe: "Mar to Oct 2026",
  status: "live-private",
  statusLabel: "Live demo, source private",
  color: "butter",
  links: {
    live: "https://intresting-ui.vercel.app",
  },
  stack: ["React", "TypeScript", "Chakra UI v2", "GSAP", "Framer Motion", "Next.js 15", "Vite library mode"],
  problem: [
    "Chakra UI v2 gives solid, accessible primitives but very little motion. Premium interactions like cursor-reactive buttons, tilting glass and scroll parallax mean hand-wiring GSAP or Framer Motion into every component.",
    "Those effects are easy to get wrong: animation loops that leak, CSS transitions fighting JavaScript tweens, and expensive filters that tank the frame rate.",
  ],
  approach: [
    "Package the interactions as drop-in Chakra components that share one token system and one light and dark theme.",
    "One source tree feeds two builds: next build for the demo gallery, and vite build for the library (ESM, UMD, one rolled-up type file, a stylesheet).",
    "A revive pass made the library real. Its entry file used to export nothing; it now exports 62 components with prop types, and claims like 120 fps or WCAG certified were replaced with measured numbers.",
  ],
  architecture: {
    summary: "Chakra owns layout, theming and accessibility. Motion is split by job, and everything reads the same CSS variables, so one data-theme attribute recolours the lot.",
    components: [
      { name: "Pointer physics", detail: "GSAP tweens on refs for MagneticButton and TiltCard; Chakra props never touch transform on those elements." },
      { name: "Declarative motion", detail: "Framer Motion values (useScroll, useTransform, useSpring) that update outside React renders." },
      { name: "Per-frame drawing", detail: "A raw requestAnimationFrame loop on a canvas for the cursor trail." },
      { name: "Ambient loops", detail: "Plain CSS keyframes for beams and orbs, at no JavaScript cost." },
      { name: "Two builds", detail: "Next.js 15 demo with a /library page, and a Vite library build with peers kept external." },
    ],
    nodes: [
      { id: "src", label: "Component source", sub: "src + libs", col: 0, row: 0, tone: "butter" },
      { id: "tokens", label: "CSS tokens", sub: "data-theme", col: 0, row: 1, tone: "paper" },
      { id: "demo", label: "Next.js demo", sub: "/ and /library", col: 1, row: 0, tone: "sky" },
      { id: "lib", label: "Vite library", sub: "ESM + UMD + d.ts", col: 1, row: 1, tone: "pink" },
      { id: "tests", label: "Tests + bench", sub: "node:test, fps", col: 2, row: 1, tone: "paper" },
    ],
    edges: [
      { from: "src", to: "demo", label: "next build" },
      { from: "src", to: "lib", label: "vite build" },
      { from: "tokens", to: "src" },
      { from: "lib", to: "tests", label: "dist" },
      { from: "demo", to: "tests", label: "bench:fps" },
    ],
  },
  decisions: [
    {
      title: "Peers, not bundled dependencies",
      choice: "React, Chakra, Emotion, Framer Motion and GSAP are peers and external in the build, so consumers get one copy of each.",
      tradeoff: "A longer install line, and the components only work inside ChakraProvider.",
    },
    {
      title: "CSS variables over a Chakra theme extension",
      choice: "Tokens live in a stylesheet and switch on data-theme, so any app can restyle the components and a theme flip is one attribute change CSS can animate.",
      tradeoff: "Consumers must import the stylesheet and keep data-theme in sync with Chakra's colour mode; Chakra's colorScheme props don't reach these components.",
    },
    {
      title: "GSAP for pointers, Framer Motion for the rest",
      choice: "GSAP's tween overwriting handles high-frequency pointer input well; Framer Motion is better for scroll-linked and enter or exit animation in JSX.",
      tradeoff: "Two animation libraries as peers, which is extra weight for an app that uses neither yet.",
    },
    {
      title: "One 'use client' banner",
      choice: "Every component uses hooks or the DOM, so the bundle is marked once and App Router users can import it from server components.",
      tradeoff: "Nothing in the package can render as a React Server Component.",
    },
    {
      title: "Reduced motion as a first-class state",
      choice: "One useSyncExternalStore hook reads prefers-reduced-motion: physics ignore the pointer, loops hold still, cursors render nothing, typewriters show the full text.",
      tradeoff: "The Framer Motion components still rely on the consumer's MotionConfig, and some CSS loops inside cards keep running. Both are on the list.",
    },
  ],
  results: [
    { value: "62", label: "exported components (65 named exports)", source: "Library entry, checked by the smoke test" },
    { value: "38 kB", label: "gzipped ES bundle for all 62 (180 kB raw)", source: "npm run build:lib" },
    { value: "84", label: "tests passing: 66 smoke (SSR render of every export) and 18 jsdom behaviour", source: "npm test" },
    { value: "60 fps", label: "demo home page, p95 frame time 16.8 ms", source: "npm run bench:fps, headless Chrome, Apple M4 Pro GPU, 1440x900 at 2x" },
  ],
  resultsNote:
    "The frame rate is for the demo home page on a desktop GPU, not for every component. Not yet measured: the heavier /library showcases one by one, a mid-range Android phone, Safari and Firefox.",
  screenshots: [
    { src: "/projects/interesting-ui/home.webp", alt: "Interesting UI demo home page", caption: "The live demo's home page. The old unbacked claims on it were swapped for measured numbers." },
    { src: "/projects/interesting-ui/library.webp", alt: "Interesting UI library page", caption: "The /library page: every component with a live preview and its code." },
    { src: "/projects/interesting-ui/library-folderstack.webp", alt: "FolderStack component preview", caption: "FolderStack: a wheel-driven 3D stack of glass cards." },
    { src: "/projects/interesting-ui/mobile-home.webp", alt: "Interesting UI on a phone", caption: "The demo on a 390 px phone. Cursor effects switch off on touch.", mobile: true },
  ],
  next: [
    "Publish to npm, then add install instructions here.",
    "Make the Framer Motion components check reduced motion themselves and stop the CSS loops inside some cards.",
    "Benchmark the heavier /library showcases one by one, plus a real mid-range Android phone.",
    "Cheaper glass by default on weak GPUs, instead of opt-out only.",
  ],
};
