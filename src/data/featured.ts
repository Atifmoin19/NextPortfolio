import type { Project } from "./content";

/**
 * Hand-curated flagship project. Lives in code (not Firestore) so the featured showcase and
 * its case study always render, whatever the CMS content currently holds.
 */
export interface FeaturedProject extends Project {
  tagline: string;
  liveUrl: string;
  repos: { label: string; url: string }[];
  proof: { title: string; body: string }[];
  screens: { src: string; label: string }[];
  /** Case-study gallery: every screen with a one-line caption. */
  gallery: { src: string; label: string; caption: string }[];
}

export const backendCity: FeaturedProject = {
  projectName: "Backend City",
  projectType: "Gamified backend-learning platform · full-stack, live",
  tagline:
    "A game that teaches backend development. Learners write a few lines inside a real FastAPI server and watch live traffic pass, bounce, or crash it.",
  liveUrl: "https://backend-city-frontend-two.vercel.app",
  repos: [
    { label: "Frontend", url: "https://github.com/Atifmoin19/backend-city-frontend" },
    { label: "Backend", url: "https://github.com/Atifmoin19/backend-city-backend" },
  ],
  proof: [
    {
      title: "Real FastAPI in the browser",
      body: "Python, FastAPI and Pydantic compiled to WebAssembly (Pyodide) in a module worker. A practice run takes ~40 ms, with nothing to install.",
    },
    {
      title: "Server-graded, cheat-resistant",
      body: "Checkpoints re-run on the API in a locked-down sandbox: AST policy, audit hook, rlimits, hidden tests and a new seeded variant on every retry.",
    },
    {
      title: "A city you can see",
      body: "A scroll-driven three.js city, a PixiJS traffic simulator, night and daybreak themes, and a synthesized Web Audio sound kit.",
    },
  ],
  screens: [
    { src: "/projects/backend-city/hero-night.webp", label: "Night city" },
    { src: "/projects/backend-city/game-night.webp", label: "The game" },
    { src: "/projects/backend-city/map-night.webp", label: "City map" },
    { src: "/projects/backend-city/hero-day.webp", label: "Daybreak theme" },
  ],
  gallery: [
    {
      src: "/projects/backend-city/hero-night.webp",
      label: "Homepage",
      caption: "Scroll-driven three.js city: every packet is a request that passes, bounces at the gate, or crashes a tower.",
    },
    {
      src: "/projects/backend-city/game-night.webp",
      label: "The game",
      caption: "Mission brief with the exact rules, a locked-region editor, and the requests the city will send.",
    },
    {
      src: "/projects/backend-city/map-night.webp",
      label: "City map",
      caption: "Walkable district map driven by real progress; unbuilt districts are honestly marked under construction.",
    },
    {
      src: "/projects/backend-city/academy-night.webp",
      label: "District tour",
      caption: "Districts light up in their own color as the story reaches them.",
    },
    {
      src: "/projects/backend-city/hero-day.webp",
      label: "Daybreak theme",
      caption: "The same city at golden hour: one token system drives the UI, WebGL, Pixi and canvas scenes.",
    },
  ],
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind 4",
    "three.js",
    "PixiJS",
    "Pyodide / WASM",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Docker",
  ],
  problem:
    "Frontend developers can call fetch() all day, but the server on the other end stays invisible. Tutorials explain validation, status codes and auth in prose; nobody gets to watch their own backend code handle real requests.",
  approach:
    "Built a two-repo platform: a Next.js game client that runs the learner's snippet inside a real FastAPI app in the browser (Pyodide worker, shared harness), and a FastAPI API that grades checkpoints in an isolated Python sandbox with hidden tests. Each topic is briefing → unlimited practice → scored checkpoint, and every retest is a new seeded variant.",
  highlights: [
    "Shared Python harness splices the learner's snippet into a locked template and drives an in-process ASGI app, identical in the browser and on the server.",
    "Grading sandbox: AST allowlist, audit hook, CPU/memory/file rlimits, scrubbed env, and a separate startup budget so a 0.1-CPU host still grades in ~8 s.",
    "Auth with httpOnly cookies, rotating refresh tokens with reuse detection, role checks on the server and rate limits.",
    "Scroll-driven three.js city (instanced towers with a custom shader, reflections, bloom) with a real-milestone preloader.",
    "Night and daybreak themes from one token system, including the WebGL, Pixi and canvas scenes.",
    "Deployed on Vercel + Render (Docker) + Neon Postgres, with an end-to-end Playwright check of signup → practice → graded checkpoint.",
  ],
  link: {
    code: "https://github.com/Atifmoin19/backend-city-frontend",
    project: "https://backend-city-frontend-two.vercel.app",
  },
  image: "/projects/backend-city/hero-night.webp",
};
