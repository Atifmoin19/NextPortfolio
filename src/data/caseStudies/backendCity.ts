import type { CaseStudy } from "./types";
import { backendCity as featured } from "../featured";

// Source: src/data/featured.ts (the hand-curated Backend City record) and its gallery.

export const backendCity: CaseStudy = {
  slug: "backend-city",
  title: "Backend City",
  pitch:
    "A game that teaches backend development: learners write a few lines inside a real FastAPI server and watch live traffic pass, bounce or crash it.",
  role: "Solo: design, frontend, backend, deploy",
  timeframe: "2026",
  status: "live",
  statusLabel: "Live",
  color: "butter",
  links: {
    live: featured.liveUrl,
    repos: featured.repos,
  },
  stack: featured.stack ?? [],
  problem: [
    "Frontend developers can call fetch() all day, but the server on the other end stays invisible.",
    "Tutorials explain validation, status codes and auth in prose. Nobody gets to watch their own backend code handle real requests.",
  ],
  approach: [
    "Two repos. A Next.js game client runs the learner's snippet inside a real FastAPI app in the browser, using Pyodide in a module worker and a shared Python harness.",
    "A FastAPI API grades checkpoints in an isolated Python sandbox with hidden tests. Each topic goes briefing, unlimited practice, then a scored checkpoint, and every retest is a new seeded variant.",
  ],
  architecture: {
    summary:
      "The same Python harness runs in two places: in a browser worker for instant practice, and on the server for grading that can't be gamed from the client.",
    components: [
      { name: "Game client", detail: "Next.js 16, React 19, three.js city, PixiJS traffic simulator, Web Audio sound kit." },
      { name: "Pyodide worker", detail: "Python, FastAPI and Pydantic compiled to WebAssembly, driving an in-process ASGI app." },
      { name: "Grading API", detail: "FastAPI with auth (httpOnly cookies, rotating refresh tokens), role checks and rate limits." },
      { name: "Sandbox", detail: "AST allowlist, audit hook, CPU, memory and file rlimits, scrubbed env, hidden tests." },
      { name: "Data and hosting", detail: "PostgreSQL via SQLAlchemy on Neon; client on Vercel, API in Docker on Render." },
    ],
    nodes: [
      { id: "client", label: "Game client", sub: "Next.js + three.js", col: 0, row: 0, tone: "butter" },
      { id: "worker", label: "Pyodide worker", sub: "FastAPI in WASM", col: 0, row: 1, tone: "paper" },
      { id: "api", label: "Grading API", sub: "FastAPI", col: 1, row: 0, tone: "sky" },
      { id: "sandbox", label: "Sandbox", sub: "hidden tests", col: 1, row: 1, tone: "paper" },
      { id: "db", label: "Postgres", sub: "Neon", col: 2, row: 0, tone: "mint" },
    ],
    edges: [
      { from: "client", to: "worker", label: "practice run" },
      { from: "client", to: "api", label: "checkpoint" },
      { from: "api", to: "sandbox", label: "grade" },
      { from: "api", to: "db" },
    ],
  },
  decisions: [
    {
      title: "Real FastAPI in the browser",
      choice: "Practice runs execute the learner's code in an actual FastAPI app compiled to WebAssembly, so the feedback is real Python behaviour, not a mock.",
      tradeoff: "The first visit has to download the Python runtime before the first run. After that a practice run takes about 40 ms with nothing to install.",
    },
    {
      title: "One harness, two runtimes",
      choice: "A shared harness splices the snippet into a locked template and drives an in-process ASGI app, identically in the browser and on the server.",
      tradeoff: "Every harness change has to stay compatible with both Pyodide and server CPython, so it ships in lockstep across two repos.",
    },
    {
      title: "Grade on the server, not the client",
      choice: "Checkpoints re-run on the API in a locked-down sandbox with hidden tests and a new seeded variant on every retry, so answers can't be copied from the client.",
      tradeoff: "Grading needs a server and a security budget: AST policy, audit hook and rlimits all have to be maintained. A separate startup budget keeps a 0.1 CPU host grading in about 8 s.",
    },
    {
      title: "Cookie auth with refresh rotation",
      choice: "httpOnly cookies, rotating refresh tokens with reuse detection, server-side role checks and rate limits.",
      tradeoff: "More moving parts than a bearer token in localStorage, but nothing a script on the page can read.",
    },
    {
      title: "One token system for every renderer",
      choice: "Night and daybreak themes come from one set of tokens that drives the UI, the WebGL city, Pixi and the canvas scenes.",
      tradeoff: "Every new scene has to read tokens instead of hard-coding colours, which slows down quick visual experiments.",
    },
  ],
  results: [
    { value: "~40 ms", label: "for a practice run in the browser", source: "Pyodide worker timing, from the project notes" },
    { value: "~8 s", label: "to grade a checkpoint on a 0.1 CPU host", source: "Server sandbox with a separate startup budget, from the project notes" },
    { value: "E2E", label: "Playwright check of signup, practice and a graded checkpoint", source: "End-to-end test in the frontend repo" },
  ],
  screenshots: featured.gallery.map((g) => ({ src: g.src, alt: `Backend City: ${g.label}`, caption: g.caption })),
  next: [
    "Build out the districts still marked under construction on the city map.",
    "Publish real usage numbers once there is enough traffic to be meaningful.",
  ],
};
