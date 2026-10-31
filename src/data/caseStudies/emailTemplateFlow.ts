import type { CaseStudy } from "./types";

// Sources: Email-Template-Builder/CASE_STUDY.md and README, plus the later autosave and
// starter-template work (54 tests). Screenshots captured on 2026-11-01 from a local
// production build of the repo, because the GitHub Pages URL was unreachable from the
// capture network.

export const emailTemplateFlow: CaseStudy = {
  slug: "email-template-flow",
  title: "EmailTemplateFlow",
  pitch:
    "A drag-and-drop editor that turns a visual layout into table-based, inline-styled HTML email meant to hold up in Outlook, Gmail and mobile clients.",
  role: "Solo: design and build",
  timeframe: "Mar to Oct 2026",
  status: "open-source",
  statusLabel: "Live, open source",
  color: "pink",
  links: {
    live: "https://atifmoin19.github.io/Email-Template-Builder/",
    repos: [{ label: "Repo", url: "https://github.com/Atifmoin19/Email-Template-Builder" }],
  },
  stack: ["React 19", "TypeScript", "Chakra UI", "dnd-kit", "Vite", "Vitest", "GitHub Actions"],
  problem: [
    "Email HTML is stuck around 2005. Outlook on Windows renders with Word's engine and ignores max-width, flexbox and most padding. Gmail strips style blocks in some contexts. Mobile clients need a media query only some of them keep.",
    "Hand-writing nested tables with inline styles is slow and error-prone, and most visual builders are paid SaaS.",
  ],
  approach: [
    "A free, fully client-side builder. Marketers drag sections, columns, text, images and buttons onto a canvas and edit them in an inspector. Developers get HTML they can paste into any email service.",
    "The editor keeps one JSON tree as the single source of truth. The canvas and the exporter are two independent renderers of that tree.",
    "Drafts autosave to the browser, and five starter templates (OTP, newsletter, welcome, order receipt, password reset) are one undoable click away.",
  ],
  architecture: {
    summary: "Everything runs in the browser. Input goes through pure functions into one history reducer; two renderers read the same tree.",
    components: [
      { name: "Input", detail: "Palette and canvas drag sources via dnd-kit, the inspector panel and keyboard shortcuts." },
      { name: "applyDrop", detail: "A pure tree transform with layout invariants: sections only at the root, content always in a container, never into its own subtree." },
      { name: "History reducer", detail: "past / present / future snapshots, edit coalescing by key, capped at 100 entries." },
      { name: "Canvas renderer", detail: "React and Chakra, free to use modern CSS because it is never exported." },
      { name: "Exporter and checks", detail: "generateEmailHtml emits tables, inline CSS and an MSO block; a validator lists compatibility warnings in the preview." },
    ],
    nodes: [
      { id: "input", label: "Palette + inspector", sub: "dnd-kit, shortcuts", col: 0, row: 0, tone: "paper" },
      { id: "drop", label: "applyDrop", sub: "pure transform", col: 0, row: 1, tone: "paper" },
      { id: "hist", label: "History reducer", sub: "coalesced undo", col: 1, row: 0, tone: "pink" },
      { id: "canvas", label: "Canvas", sub: "React renderer", col: 2, row: 0, tone: "sky" },
      { id: "html", label: "Exporter", sub: "tables + inline CSS", col: 2, row: 1, tone: "butter" },
      { id: "store", label: "localStorage", sub: "autosave", col: 1, row: 1, tone: "paper" },
    ],
    edges: [
      { from: "input", to: "drop", label: "drop" },
      { from: "drop", to: "hist", label: "next tree" },
      { from: "input", to: "hist", label: "prop patch" },
      { from: "hist", to: "canvas" },
      { from: "hist", to: "html" },
      { from: "hist", to: "store" },
    ],
  },
  decisions: [
    {
      title: "A JSON tree with two renderers",
      choice: "Instead of scraping the canvas DOM, export walks the same tree and emits tables directly, as a pure, testable function.",
      tradeoff: "Two renderers can drift. Tests caught exactly that: a font weight showed on the canvas but was never exported. The exporter now has tests per prop.",
    },
    {
      title: "Tables and inline styles everywhere",
      choice: "Sections become table grids with percentage cells inside a centred container table. Every style is inlined; the only style block holds the mobile query and an Outlook-only rule.",
      tradeoff: "Verbose HTML, and column stacking degrades where style blocks are stripped. Outlook support is honestly basic: no VML buttons or ghost tables yet, so complex designs need a test send.",
    },
    {
      title: "Snapshot undo with coalescing",
      choice: "Undo stores whole project snapshots in a reducer. Each inspector edit carries a coalesce key so a burst of typing is one undo step.",
      tradeoff: "Memory grows with edits, so history is capped at 100 entries. In return it's trivially correct and deterministic to test, unlike a time-window debounce.",
    },
    {
      title: "Drop rules as a pure function",
      choice: "dnd-kit reports what the pointer is over; applyDrop decides what that means and returns a new tree or null. An old bug (headers nested in sections) is now a test.",
      tradeoff: "Placement uses a 20 px edge threshold, which suits typical blocks but can feel fiddly on very small ones.",
    },
    {
      title: "Plain text, escaped on export",
      choice: "Text and labels are edited as plain text and escaped on export, so an ampersand or a quote can't break the HTML.",
      tradeoff: "No inline rich text yet. A half-wired rich-text editor was removed rather than shipped.",
    },
  ],
  results: [
    { value: "54", label: "unit tests passing (exporter, drop logic, history, compatibility checks, autosave, templates)", source: "Vitest, Oct 2026" },
    { value: "98 / 100 / 100 / 100", label: "Lighthouse on the landing page (performance, accessibility, best practices, SEO)", source: "Lighthouse, mobile preset, local production build, Oct 2026" },
    { value: "223 to 172 kB", label: "gzipped entry JS after lazy-loading the builder route", source: "Vite build output, 2026-10-31" },
    { value: "16 to 0", label: "ESLint errors", source: "npm run lint, 2026-10-31" },
  ],
  resultsNote:
    "An older resume line claimed a 60% cut in email creation time. Nothing measured supports it, so it isn't shown here.",
  screenshots: [
    { src: "/projects/email-template-flow/landing.webp", alt: "EmailTemplateFlow landing page", caption: "Landing page. The builder itself loads only when you open it." },
    { src: "/projects/email-template-flow/builder.webp", alt: "Builder with the newsletter template loaded", caption: "The builder with the newsletter starter: palette, canvas, inspector." },
    { src: "/projects/email-template-flow/preview-mobile.webp", alt: "Preview at mobile width with compatibility warnings", caption: "Preview at phone width, with real compatibility checks listed on the left." },
    { src: "/projects/email-template-flow/mobile-landing.webp", alt: "EmailTemplateFlow landing on a phone", caption: "The landing page on a 390 px phone.", mobile: true },
  ],
  next: [
    "Outlook-grade output: VML rounded buttons and MSO ghost tables, then verify with real sends.",
    "A shareable link that encodes the template tree in the URL.",
    "Inline rich text (bold, italic, links) with a sanitiser on export.",
    "Keyboard-only drag and drop in the builder.",
  ],
};
