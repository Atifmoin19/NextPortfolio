import type { CaseStudy } from "./types";
import { backendCity } from "./backendCity";
import { allSquare } from "./allSquare";
import { dayline } from "./dayline";
import { zenova } from "./zenova";
import { emailTemplateFlow } from "./emailTemplateFlow";
import { interestingUi } from "./interestingUi";
import { vitePwaUpdater } from "./vitePwaUpdater";
import { smartVirtualScroll } from "./smartVirtualScroll";

export type * from "./types";

/** Same order as WORK_ORDER in data/work.ts (the Selected work index); drives prev / next. */
export const caseStudies: CaseStudy[] = [
  dayline,
  backendCity,
  interestingUi,
  allSquare,
  emailTemplateFlow,
  zenova,
  vitePwaUpdater,
  smartVirtualScroll,
];

export function getCaseStudy(slug: string | undefined): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getNeighbours(slug: string): { prev: CaseStudy; next: CaseStudy } | undefined {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i < 0) return undefined;
  const n = caseStudies.length;
  return { prev: caseStudies[(i - 1 + n) % n], next: caseStudies[(i + 1) % n] };
}

/** The three FastAPI backends share one free Render service (All Square and Dayline). */
export const sharedHosting = {
  title: "How it's hosted",
  lines: [
    "One free Render web service runs three FastAPI backends (this portfolio, All Square and Dayline) as separate supervised processes.",
    "An in-container Caddy routes them by path under api.fullstackcity.in.",
    "Postgres is on Neon; the frontends are on Vercel.",
  ],
};
