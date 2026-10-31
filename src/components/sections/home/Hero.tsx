import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { scrollToId } from "../../../lib/smoothScroll";
import { resolveResumeUrl } from "../../../utils/resumeUrl";
import Wordmark from "./Wordmark";
import "./hero.css";

// Copy from the approved prototype, used whenever the CMS has nothing better.
const FALLBACK = {
  name: "Atif Moin",
  side: "Senior engineer at Zopper. React and TypeScript up front, FastAPI and AI agents behind it.",
  role: "Senior SWE",
  company: "Zopper",
  since: "January 2023",
};

// The CMS description is a resume paragraph; only a short one fits the side note.
const SIDE_MAX = 160;

const MONTHS: Record<string, string> = {
  jan: "January", feb: "February", mar: "March", apr: "April", may: "May", jun: "June",
  jul: "July", aug: "August", sep: "September", oct: "October", nov: "November", dec: "December",
};

function earliestStart(durations: string[]) {
  const starts = durations
    .map((d) => d.match(/([A-Za-z]{3})[a-z]*\s+(\d{4})/))
    .filter((m): m is RegExpMatchArray => !!m)
    .map((m) => ({ month: MONTHS[m[1].toLowerCase()], year: +m[2], idx: Object.keys(MONTHS).indexOf(m[1].toLowerCase()) }))
    .filter((s) => s.month)
    .sort((a, b) => a.year - b.year || a.idx - b.idx);
  return starts[0] ?? null;
}

export default function Hero() {
  const data = useSelector((state: RootState) => state.portfolio.data);
  const hero = data?.hero;
  const experience = data?.experience ?? [];

  const name = hero?.name?.trim() || FALLBACK.name;
  const description = hero?.description?.trim();
  const side = description && description.length <= SIDE_MAX ? description : FALLBACK.side;
  const role = hero?.role?.replace(/\s*\(.*?\)\s*/g, "").trim() || FALLBACK.role;
  const company = experience[0]?.company?.split(",")[0]?.trim() || FALLBACK.company;
  const start = earliestStart(experience.map((e) => e.duration));
  const since = start ? `${start.month} ${start.year}` : FALLBACK.since;
  const years = start ? Math.max(1, new Date().getFullYear() - start.year) : 3;
  const resumeUrl = resolveResumeUrl(hero?.resumeUrl);

  const stickers: [string, string, number][] = [
    [`${years}+ years shipping`, "var(--mint)", -3],
    ["React first", "var(--sky)", 2],
    ["Ships AI agents", "var(--lilac)", -2],
    ["Fintech", "var(--butter)", 3],
  ];

  return (
    <section className="ps-hero ps-wrap" id="hero" data-tint="#f1f1ec">
      <div className="ps-hero-top">
        <h1>
          Frontend engineer. I make <span className="hl">complicated products</span> feel simple.
        </h1>
        <div className="ps-hero-side">
          <p>{side}</p>
          <div className="acts">
            <a
              className="ps-btn"
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("work", -80);
              }}
            >
              See the work <span aria-hidden="true">&darr;</span>
            </a>
            {resumeUrl && (
              <a className="ps-btn ghost" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="ps-stickers">
        {stickers.map(([label, bg, r]) => (
          <span
            key={label}
            className="ps-stk"
            style={{ background: bg, ["--r" as string]: `${r}deg` }}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="ps-meta">
        <div>
          <small>Currently</small>
          {role}, {company}
        </div>
        <div>
          <small>Front</small>React, Next.js, TypeScript
        </div>
        <div>
          <small>Back</small>FastAPI, PostgreSQL, Redis
        </div>
        <div>
          <small>Shipping since</small>
          {since}
        </div>
      </div>

      <div className="ps-stamp-sheet">
        <span className="tape a" aria-hidden="true" />
        <span className="tape b" aria-hidden="true" />
        <Wordmark text={name} />
        <div className="ps-hint mono">
          <span>
            <b>Move your cursor across the name</b> (or drag on a phone)
          </span>
          <span>Noida, India</span>
        </div>
      </div>
    </section>
  );
}
