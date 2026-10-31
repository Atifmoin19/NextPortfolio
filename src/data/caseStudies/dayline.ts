import type { CaseStudy } from "./types";

// Sources: taskboard README, docs/plan.md, docs/bugs.md, docs/DEPLOY_RENDER.md, backend
// tests (scheduler.py advisory locks, test_single_process_mode.py, test_demo.py), plus the
// revive pass numbers. Screenshots captured from the live site on 2026-11-01.
// The demo org ("Quillbrook Labs") and everyone in it is fictional.

export const dayline: CaseStudy = {
  slug: "dayline",
  title: "Dayline",
  pitch:
    "Task scheduling for teams that shows each person's day as it actually happened: real work sessions on a live timeline, with capacity and overdue warnings before the deadline bites.",
  role: "Solo: product, frontend, backend, deploy",
  timeframe: "Jul to Oct 2026",
  status: "live",
  statusLabel: "Live",
  color: "sky",
  flagship: true,
  links: {
    live: "https://dayline-alpha-ten.vercel.app",
    demo: "https://dayline-alpha-ten.vercel.app",
    repos: [{ label: "Repo", url: "https://github.com/Atifmoin19/dayline" }],
  },
  stack: ["React 19", "TypeScript", "Chakra UI", "RTK Query", "FastAPI", "SQLAlchemy 2", "Alembic", "PostgreSQL", "WebSockets"],
  problem: [
    "Teams plan the day in chat threads and status meetings, then lose track of who is actually doing what. A planned Gantt chart says what should have happened, not what did.",
    "Managers find out someone is overloaded when a deadline slips, and time tracking is a chore people skip.",
  ],
  approach: [
    "Dayline started as an internal task tool. It was rebuilt as a company-neutral product with a fictional demo organisation and nothing carried over from the original data.",
    "The timeline is built from real work sessions. Four actions (pick, hold, resume, done) open and close sessions, so time tracking takes care of itself. Picking a task auto-holds whatever else that person had in progress.",
    "Capacity per person and an overdue sweep flag trouble early, and org-aware visibility means people see their part of the org chart and nothing else.",
  ],
  architecture: {
    summary:
      "A React client and a FastAPI API in one process, with Postgres doing double duty: data, sessions, and the lock that keeps periodic jobs from running twice.",
    components: [
      { name: "Client", detail: "React 19, Chakra UI, RTK Query over a custom axios base query; one WebSocket keeps every open view fresh." },
      { name: "API", detail: "FastAPI with role and org-scope checks on every query, bcrypt passwords, rate-limited login." },
      { name: "In-process scheduler", detail: "Overdue sweep every 60 s and demo purge every hour, each also run once on startup so a sleeping service catches up." },
      { name: "Demo workspaces", detail: "Each visitor gets an isolated copy of the demo org, scoped by workspace and expired after 24 hours." },
      { name: "Postgres", detail: "Tasks, work sessions, login sessions and advisory locks. Alembic migrations run on every start." },
      { name: "Tests", detail: "247 backend tests (permissions, org scope, sessions, demo isolation, single-process mode) and 158 frontend tests, plus a 17-step browser click-through." },
    ],
    nodes: [
      { id: "ui", label: "React client", sub: "timeline, insights", col: 0, row: 0, tone: "sky" },
      { id: "demo", label: "Try the demo", sub: "new workspace", col: 1, row: 1, tone: "pink" },
      { id: "api", label: "FastAPI", sub: "org + workspace scope", col: 1, row: 0, tone: "butter" },
      { id: "ws", label: "WebSocket hub", sub: "tasks_changed", col: 0, row: 1, tone: "paper" },
      { id: "db", label: "Postgres", sub: "data, sessions, locks", col: 2, row: 0, tone: "mint" },
      { id: "sched", label: "In-process scheduler", sub: "sweep 60 s, purge 1 h", col: 2, row: 1, tone: "paper" },
    ],
    edges: [
      { from: "ui", to: "api", label: "REST" },
      { from: "demo", to: "api", label: "seed copy" },
      { from: "ws", to: "ui", label: "live ping", both: true },
      { from: "api", to: "ws" },
      { from: "api", to: "db" },
      { from: "sched", to: "db", label: "advisory lock" },
    ],
  },
  decisions: [
    {
      title: "Draw what happened, not what was planned",
      choice: "The timeline renders closed and open work sessions as segments. One ribbon per person when collapsed, one lane per task when expanded.",
      tradeoff: "History depends on sessions being recorded correctly, so the server owns session state and the client never fabricates it. A runaway session is capped by the sweep.",
    },
    {
      title: "No Celery, no Redis",
      choice: "Periodic jobs run inside the API process, guarded by Postgres advisory locks, so the whole backend fits in one free web process. Celery and Redis are still supported behind a flag.",
      tradeoff: "Jobs pause while the free service sleeps. Each one runs on startup to catch up, which makes the first request after a nap slower.",
    },
    {
      title: "A private workspace per visitor",
      choice: "Try the demo creates an isolated copy of a fictional organisation, scoped by workspace in every query and covered by tests, so visitors never see each other's edits.",
      tradeoff: "Every visit writes real rows. It needs a TTL, an hourly purge, a per-IP hourly limit and a cap on live workspaces.",
    },
    {
      title: "Ping, then refetch",
      choice: "After any task mutation the server broadcasts a small tasks_changed ping over WebSocket and clients invalidate their task cache.",
      tradeoff: "Simple and always consistent, but every open client refetches on every change, and the fan-out is in memory for a single instance.",
    },
    {
      title: "Org-aware visibility on the server",
      choice: "Individual contributors, leads, managers and admins see their part of the org chart, enforced in the API, with scoped grants for exceptions.",
      tradeoff: "Every endpoint has to apply the scope, so permission checks need their own tests rather than trusting the UI.",
    },
    {
      title: "Test the boundaries, not just the happy path",
      choice: "Backend suites cover org scope, permissions, demo isolation, sessions, timezones and the single-process scheduler mode, including the advisory-lock path.",
      tradeoff: "A big suite is slower to run and has to change with the product, but it is what made the company-neutral rebuild safe.",
    },
  ],
  results: [
    { value: "247", label: "backend tests passing", source: "pytest, Oct 2026" },
    { value: "158", label: "frontend tests passing", source: "Frontend test suite, Oct 2026" },
    { value: "17 steps", label: "browser click-through of the demo", source: "Scripted headless browser run, Oct 2026" },
    { value: "94 / 100 / 100 / 100", label: "Lighthouse on the landing page (performance, accessibility, best practices, SEO)", source: "Lighthouse, mobile preset, Oct 2026" },
  ],
  resultsNote: "No usage numbers are shown because none have been measured yet.",
  screenshots: [
    { src: "/projects/dayline/landing.webp", alt: "Dayline landing page with a sample day timeline", caption: "Landing page: a sample day, one row per person, one bar per stretch of real work." },
    { src: "/projects/dayline/app-timeline.webp", alt: "Team day timeline with work-session bars and a task popover", caption: "The live team timeline. Each bar is a real work session; the popover shows planned versus actual and the Hold and Done actions." },
    { src: "/projects/dayline/app-week.webp", alt: "Week view of the team schedule", caption: "The same sessions as a week, one row per person." },
    { src: "/projects/dayline/app-task-detail.webp", alt: "Task detail with subtasks and activity", caption: "Task detail: subtasks, attachments, comments and activity in one place." },
    { src: "/projects/dayline/app-reports.webp", alt: "Reports and analytics page", caption: "Reports: status distribution, throughput and time logged across the team." },
    { src: "/projects/dayline/app-org-developer.webp", alt: "Organization chart seen by a developer", caption: "The org chart as a developer sees it, with their reporting line highlighted." },
    { src: "/projects/dayline/app-epic.webp", alt: "Epic detail with its stories", caption: "An epic rolls stories from several people into one initiative with progress." },
    { src: "/projects/dayline/app-mobile-my-work.webp", alt: "Dayline home on a phone", caption: "My Work on a 390 px phone.", mobile: true },
    { src: "/projects/dayline/app-mobile-task.webp", alt: "Task detail on a phone", caption: "Task detail on a phone.", mobile: true },
    { src: "/projects/dayline/mobile-landing.webp", alt: "Dayline landing on a phone", caption: "The landing page on a phone.", mobile: true },
  ],
  next: [
    "Close self-registration behind invites or admin approval.",
    "Bring the AI insight panel back: the configured Gemini model was retired, so the demo shows it as unavailable.",
    "Move the WebSocket fan-out to a shared channel before running more than one instance.",
    "Finish the sweep race fix that is still marked partial in the bug log.",
  ],
  tryIt: [
    "Press Try the demo on the landing page for your own workspace in a fictional company, or pick explore as a developer to see an individual contributor's view.",
    "Demo workspaces reset after 24 hours. Emails and notifications are off.",
    "The API runs on a free host. If it was asleep, the first request can take up to a minute.",
  ],
  sharedHosting: true,
};
