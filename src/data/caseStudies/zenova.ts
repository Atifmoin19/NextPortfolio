import type { CaseStudy } from "./types";
import { portfolioData } from "../content";

// Source: src/data/content.ts only. Internal work project: no public links, no
// screenshots, claims kept exactly as stated there.

const seed = portfolioData.projects.find((p) => p.projectName === "Zenova");

export const zenova: CaseStudy = {
  slug: "zenova",
  title: "Zenova",
  pitch: "An AI agent orchestration platform for insurance operations: outbound voice campaigns, email workflows and policy renewals, run across several banking clients from one place.",
  role: "Full-stack: React, FastAPI, AI integrations",
  timeframe: "2025, at work",
  status: "internal",
  statusLabel: "Internal work project",
  color: "lilac",
  links: {},
  stack: seed?.stack ?? ["React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "WebSockets"],
  problem: [
    seed?.problem ??
      "Insurance operators across multiple banking clients needed to run outbound voice campaigns, email workflows, and policy renewals at scale without manually coordinating agents for each client.",
  ],
  approach: [
    seed?.approach ??
      "Built a full-stack multi-tenant platform with per-org PostgreSQL schema isolation, a Redis-backed WebSocket connection manager and a multi-agent mission registry.",
    "Voice calls go through Smallest.ai with live transcripts streamed to the UI; chat, transcript analysis, KPI extraction and intent detection run on Groq (Llama 3.3 70B) with an automatic Gemini 2.5 Flash fallback.",
  ],
  architecture: {
    summary: "A multi-tenant FastAPI backend with a schema per organisation, a Redis pub/sub layer for real-time updates, and LLM and voice providers behind it.",
    components: [
      { name: "React client", detail: "Operator console with live call transcripts and real-time nudges." },
      { name: "FastAPI", detail: "JWT-based role access across configurable agent types and the mission registry." },
      { name: "Redis + WebSockets", detail: "Connection manager with pub/sub for real-time fan-out." },
      { name: "PostgreSQL", detail: "Per-org schema isolation via SQLAlchemy and Alembic." },
      { name: "AI providers", detail: "Groq (Llama 3.3 70B) with Gemini 2.5 Flash fallback and multi-key rotation; Smallest.ai for voice." },
    ],
    nodes: [
      { id: "ui", label: "Operator console", sub: "React", col: 0, row: 0, tone: "lilac" },
      { id: "api", label: "FastAPI", sub: "missions, roles", col: 1, row: 0, tone: "butter" },
      { id: "redis", label: "Redis pub/sub", sub: "WebSocket fan-out", col: 1, row: 1, tone: "paper" },
      { id: "pg", label: "PostgreSQL", sub: "schema per org", col: 2, row: 0, tone: "mint" },
      { id: "ai", label: "LLM + voice", sub: "Groq, Gemini, Smallest.ai", col: 2, row: 1, tone: "pink" },
    ],
    edges: [
      { from: "ui", to: "api", label: "REST" },
      { from: "redis", to: "ui", label: "live", both: true },
      { from: "api", to: "redis" },
      { from: "api", to: "pg" },
      { from: "api", to: "ai" },
    ],
  },
  decisions: [
    {
      title: "A schema per organisation",
      choice: "Each client org gets its own PostgreSQL schema through SQLAlchemy and Alembic, so tenant data is separated at the database level.",
      tradeoff: "Every migration has to run once per schema, and cross-tenant reporting needs deliberate queries.",
    },
    {
      title: "A fallback model, not a single provider",
      choice: "Groq runs Llama 3.3 70B first, with an automatic Gemini 2.5 Flash fallback and multi-key rotation on rate limits.",
      tradeoff: "Two providers' prompts and outputs have to stay compatible, and answers can differ slightly depending on which one served them.",
    },
    {
      title: "Redis between the API and the sockets",
      choice: "A Redis-backed connection manager carries pub/sub, so live transcripts and nudges reach whichever process holds the socket.",
      tradeoff: "One more piece of infrastructure to run and monitor.",
    },
    {
      title: "Agents as data in a registry",
      choice: "Agent types and missions live in a registry with JWT-based role access, so new workflows are configured rather than coded.",
      tradeoff: "A generic registry is harder to reason about than a handful of hard-coded flows.",
    },
  ],
  results: [
    { value: "30+", label: "agents in the mission registry", source: "As stated in the portfolio content" },
    { value: "100+", label: "missions across 5+ insurance workflows", source: "As stated in the portfolio content" },
    { value: "3", label: "client organisations: Axis Bank, Ujjivan Bank, Star Health", source: "As stated in the portfolio content" },
  ],
  resultsNote: "Internal numbers from day-to-day work. There is no public link or screenshot because the product is not public.",
  screenshots: [],
  next: [],
  disclaimer: "Built at work. Details are limited to what can be shared publicly.",
};
