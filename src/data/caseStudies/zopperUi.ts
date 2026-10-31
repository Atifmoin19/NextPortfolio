import type { CaseStudy } from "./types";
import { portfolioData } from "../content";

// Source: src/data/content.ts only. Internal work project: no public links, no screenshots.
// The "40% efficiency" line in content.ts has no public measurement behind it, so it is
// not presented as a result here.

const seed = portfolioData.projects.find((p) => p.projectName === "Zopper UI");

export const zopperUi: CaseStudy = {
  slug: "zopper-ui",
  title: "Zopper UI",
  pitch: "An internal React component library and design system, shared by several fintech product teams so they stop rebuilding the same UI.",
  role: "Frontend engineer: design and build",
  timeframe: "2024, at work",
  status: "internal",
  statusLabel: "Internal work project",
  color: "sky",
  links: {},
  stack: seed?.stack ?? ["React", "TypeScript"],
  problem: [
    seed?.problem ??
      "Multiple fintech product teams were rebuilding the same UI patterns independently, slowing delivery and fragmenting the look and feel across products.",
  ],
  approach: [
    seed?.approach ?? "Designed and built a shared, reusable component library with a consistent design system adopted across production applications.",
  ],
  architecture: {
    summary: "One typed component library, consumed by several product apps, so a fix or a new pattern lands everywhere at once.",
    components: [
      { name: "Design system", detail: "Shared tokens and patterns that keep the UI consistent across products." },
      { name: "Component library", detail: "Reusable React and TypeScript components." },
      { name: "Product apps", detail: "Multiple production fintech applications consuming the library." },
    ],
    nodes: [
      { id: "ds", label: "Design system", sub: "tokens, patterns", col: 0, row: 0, tone: "sky" },
      { id: "lib", label: "Zopper UI", sub: "React + TS", col: 1, row: 0, tone: "butter" },
      { id: "a", label: "Product app", sub: "fintech", col: 2, row: 0, tone: "paper" },
      { id: "b", label: "Product app", sub: "fintech", col: 2, row: 1, tone: "paper" },
    ],
    edges: [
      { from: "ds", to: "lib" },
      { from: "lib", to: "a" },
      { from: "lib", to: "b" },
    ],
  },
  decisions: [
    {
      title: "Share components, not just a style guide",
      choice: "Teams import working components instead of re-implementing a spec, so behaviour and look stay identical across products.",
      tradeoff: "A shared library becomes a dependency every team waits on, so changes need care to avoid breaking several apps at once.",
    },
    {
      title: "Typed APIs",
      choice: "Components are written in TypeScript so their props document themselves in every consuming app.",
      tradeoff: "Prop types become a public contract, and changing them is a coordinated change across teams.",
    },
    {
      title: "Consistency over local freedom",
      choice: "One design system across products, so users moving between apps see the same patterns.",
      tradeoff: "Product teams give up some room for one-off designs, which then need a case for being added to the library.",
    },
  ],
  results: [],
  resultsNote:
    "Used in multiple production fintech applications. The library is internal, so there are no public numbers to show here.",
  screenshots: [],
  next: [],
  disclaimer: "Built at work. Details are limited to what can be shared publicly.",
};
