import type { CaseStudy } from "./types";

// Sources: ExpenseTrackerFE/CASE_STUDY.md and README, ExpenseTrackerBE/README, plus the
// revive pass (rename, landing + calculator, demo sandbox, idempotent client ids, Vite 8,
// Lighthouse and test counts). Screenshots captured from the live site on 2026-11-01.

const gh = (r: string) => `https://github.com/Atifmoin19/${r}`;

export const allSquare: CaseStudy = {
  slug: "all-square",
  title: "All Square",
  pitch:
    "An installable PWA for group trips that keeps working on a patchy mountain-road connection and turns a week of shared spending into the fewest possible payments.",
  role: "Solo: product, frontend, backend, deploy",
  timeframe: "Aug to Oct 2026",
  status: "live",
  statusLabel: "Live",
  color: "mint",
  links: {
    live: "https://expense-tracker-fe-xi.vercel.app",
    demo: "https://expense-tracker-fe-xi.vercel.app",
    repos: [
      { label: "Frontend", url: gh("ExpenseTrackerFE") },
      { label: "Backend", url: gh("ExpenseTrackerBE") },
    ],
  },
  stack: ["React", "TypeScript", "Vite 8", "Chakra UI", "RTK Query", "Workbox", "FastAPI", "SQLAlchemy 2", "PostgreSQL", "Web Push"],
  problem: [
    "Group trips produce dozens of small, uneven expenses. Someone books the cab, someone pays for dinner but two people skipped dessert, someone covers fuel for half the group.",
    "Splits are rarely equal, expenses happen exactly where the signal is worst, and settling up naively means far more transfers than needed. A chat thread or a spreadsheet breaks down within a day.",
  ],
  approach: [
    "One shared ledger per trip. A trip admin shares an invite link, members add expenses from their phones (offline if needed), and the app shows who owes whom.",
    "Four split modes (equal, exact, percentage, shares), receipts uploaded straight to object storage, push notifications, and suggested settlements that minimise the number of payments.",
    "For visitors: a landing page with a live split calculator, and a Try the demo button that opens a private copy of a sample trip with no sign-up.",
  ],
  architecture: {
    summary:
      "A React PWA on Vercel talks to a FastAPI API through a service worker that caches reads and queues writes. Postgres holds every resolved split, so balances never re-derive percentages.",
    components: [
      { name: "PWA client", detail: "React, Chakra UI, RTK Query, react-hook-form with zod. Every route is lazy-loaded." },
      { name: "Service worker", detail: "Workbox precache, NetworkFirst GETs (8 s timeout, 24 h cache), Background Sync for POSTs, Web Push." },
      { name: "IndexedDB queue", detail: "Holds expenses created offline and replays them on reconnect where Background Sync is missing." },
      { name: "FastAPI API", detail: "One response envelope, backend-owned auth (email OTP, Google ID token, rotating refresh tokens), settlement engine." },
      { name: "Storage", detail: "Neon Postgres with NUMERIC(12,2) money, and S3-compatible object storage for receipts via presigned URLs." },
    ],
    nodes: [
      { id: "ui", label: "PWA client", sub: "React + RTK Query", col: 0, row: 0, tone: "mint" },
      { id: "idb", label: "IndexedDB", sub: "offline queue", col: 0, row: 1, tone: "paper" },
      { id: "sw", label: "Service worker", sub: "cache, sync, push", col: 1, row: 0, tone: "paper" },
      { id: "api", label: "FastAPI", sub: "auth, splits, settle", col: 2, row: 0, tone: "sky" },
      { id: "db", label: "Postgres", sub: "Neon", col: 2, row: 1, tone: "butter" },
      { id: "s3", label: "Object storage", sub: "receipts", col: 1, row: 1, tone: "paper" },
    ],
    edges: [
      { from: "ui", to: "sw", label: "fetch" },
      { from: "ui", to: "idb", label: "queue" },
      { from: "sw", to: "api", label: "JWT" },
      { from: "api", to: "db" },
      { from: "ui", to: "s3", label: "presigned PUT" },
    ],
  },
  decisions: [
    {
      title: "Own auth instead of a hosted provider",
      choice: "The first version used Firebase. It moved to backend-issued JWTs, email OTP and Google ID-token checks, so identity and data live in one Postgres database.",
      tradeoff: "The backend now owns OTP hashing, refresh-token rotation, revocation and rate limiting, which a provider would have done for free.",
    },
    {
      title: "Two offline sync paths",
      choice: "Background Sync only exists in Chromium, and iOS Safari is where many trip members are. So there's a Workbox queue and an IndexedDB queue that replays on the online event.",
      tradeoff: "Both paths can hold the same request. That caused real duplicate expenses offline, fixed by sending an idempotent client id with every create so a replay can never insert twice.",
    },
    {
      title: "Greedy minimum cash flow",
      choice: "Settlements repeatedly match the largest creditor with the largest debtor until every balance is within a cent. It's a pure function, unit tested on its own.",
      tradeoff: "The true minimum is NP-hard and greedy doesn't always reach it. It is deterministic, fast for trip-sized groups and never needs more than n - 1 transfers.",
    },
    {
      title: "Receipts never touch the API",
      choice: "The client gets a presigned PUT URL, uploads straight to object storage and stores only the key. Viewing uses a short-lived presigned GET.",
      tradeoff: "The free-tier API stays free of large bodies, but there is more to configure (bucket, CORS), and an abandoned form can leave an orphaned object.",
    },
    {
      title: "A demo that can't be vandalised",
      choice: "Try the demo signs a visitor into a private, pre-seeded copy of a sample trip that expires after 24 hours. Uploads and notifications are off in the sandbox.",
      tradeoff: "Every visit creates real rows, so the backend needs expiry and cleanup instead of one shared read-only account.",
    },
    {
      title: "Session state per browser tab",
      choice: "Redux state, tokens included, is persisted to sessionStorage per tab, so two tabs can be two different users when testing a split by hand.",
      tradeoff: "Closing the tab or the installed app signs you out, which is friction for a PWA people expect to reopen.",
    },
  ],
  results: [
    { value: "89 / 100 / 100 / 100", label: "Lighthouse on the landing page (performance, accessibility, best practices, SEO)", source: "Lighthouse, mobile preset, Oct 2026" },
    { value: "13 + 14", label: "backend and frontend tests passing", source: "pytest and the frontend test suite, Oct 2026" },
    { value: "11 steps", label: "browser click-through from landing to settle-up", source: "Scripted headless browser run, Oct 2026" },
    { value: "4", label: "split modes: equal, exact, percentage, shares", source: "Product feature set" },
  ],
  resultsNote: "No usage numbers are shown because none have been measured yet.",
  screenshots: [
    { src: "/projects/all-square/landing.webp", alt: "All Square landing page with the split calculator", caption: "Landing page. The hero card is a working split calculator, not a picture of one." },
    { src: "/projects/all-square/calculator.webp", alt: "Split calculator set to percentage", caption: "Four split modes, live. Change the amount and the rows recompute." },
    { src: "/projects/all-square/demo-expenses.webp", alt: "Expense list of the demo Goa trip", caption: "Inside the demo sandbox: a private copy of a sample Goa trip." },
    { src: "/projects/all-square/demo-dashboard.webp", alt: "Trip dashboard with balances and charts", caption: "Dashboard: member balances, spend by category and by member." },
    { src: "/projects/all-square/demo-settlements.webp", alt: "Suggested settlements list", caption: "Suggested settlements: the fewest transfers that square everyone up." },
    { src: "/projects/all-square/mobile-landing.webp", alt: "All Square landing on a phone", caption: "The landing page on a 390 px phone.", mobile: true },
  ],
  next: [
    "Money as decimals end to end: balances are still computed in floats with cent rounding.",
    "An opt-in remember me for installed-app users, so reopening the PWA doesn't mean signing in again.",
    "Move the in-memory rate limiter to a shared store before running more than one instance.",
    "Split the auth screens from the app shell to cut first-load JavaScript.",
  ],
  tryIt: [
    "Press Try the demo on the landing page. No sign-up: you get your own copy of a sample trip that resets after 24 hours.",
    "The API runs on a free host. If it was asleep, the first request can take up to a minute.",
  ],
  sharedHosting: true,
};
