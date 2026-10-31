import { Fragment, useEffect, useId, useRef, useState } from "react";
import { useReducedMotion } from "../../../lib/useMotionPreference";
import { usePortfolioContent } from "./usePortfolioContent";
import "./kit.css";
import "./CareerNotes.css";

// Short handwritten lines for each sticky note. The full descriptions are long, so a
// role without an entry here falls back to the first sentence of its description.
const BLURBS: Record<string, string> = {
  "Front-End Intern": "TypeScript and responsive UI on production apps.",
  "Associate Software Engineer": "DOM-heavy frontend work across products.",
  "Software Engineer": "Refactors and responsiveness across fintech apps.",
  "Senior Software Engineer (Frontend)": "Owns React apps end to end. Built the shared component system.",
};
const NOTE_COLORS = ["var(--butter)", "var(--pink)", "var(--sky)", "var(--mint)", "var(--lilac)"];
const ROTATIONS = [-2, 1.5, -1, 2, -1.5];
const COUNT_WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];

const startOf = (duration: string) => duration.split(/\s+-\s+|\s+–\s+/)[0].trim();
const sentences = (text: string) =>
  text
    .split(/(?<=\.)\s+(?=[A-Z])/)
    .map((s) => s.trim())
    .filter(Boolean);
const shortRole = (role: string) => role.replace(/\s*\(.*\)\s*$/, "");

/** Wraps every percentage in a <mark> without changing the text. */
function withMarks(text: string) {
  return text.split(/(\d+%)/).map((part, i) =>
    /^\d+%$/.test(part) ? <mark key={i}>{part}</mark> : <Fragment key={i}>{part}</Fragment>,
  );
}

export default function CareerNotes() {
  const { experience } = usePortfolioContent();
  const reduce = useReducedMotion();
  const notesRef = useRef<HTMLOListElement>(null);
  const [seen, setSeen] = useState(false);
  const [open, setOpen] = useState(false);
  const bodyId = useId();

  // Oldest first, so the notes climb left to right.
  const roles = [...experience].reverse();
  const current = experience.find((e) => /present/i.test(e.duration)) ?? experience[0];
  const companies = new Set(experience.map((e) => e.company.split(",")[0].trim()));
  const company = [...companies][0] ?? "Zopper";
  const first = roles[0];

  useEffect(() => {
    const el = notesRef.current;
    if (!el || reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  const heading =
    companies.size === 1
      ? `${COUNT_WORDS[roles.length] ?? roles.length} steps up, one company`
      : "Career, step by step";

  return (
    <section id="experience" className="ps-sec ps-wrap" aria-labelledby="experience-title">
      <h2 id="experience-title" className="ps-h2">{heading}</h2>
      {first && current && (
        <p className="ps-lede">
          From {shortRole(first.role).toLowerCase()} to {shortRole(current.role).toLowerCase()} at {company}, starting{" "}
          {startOf(first.duration)}.
        </p>
      )}

      <ol ref={notesRef} className={`notes${reduce ? "" : " rise"}${seen ? " in" : ""}`}>
        {roles.map((r, i) => {
          const isNow = r === current && /present/i.test(r.duration);
          return (
            <li
              key={r.role + r.duration}
              className="note"
              style={
                {
                  "--nc": NOTE_COLORS[i % NOTE_COLORS.length],
                  "--r": `${ROTATIONS[i % ROTATIONS.length]}deg`,
                  "--i": i,
                } as React.CSSProperties
              }
            >
              <span className="tape" aria-hidden="true" />
              <div style={{ display: "grid", gap: 4 }}>
                <small>{r.duration}</small>
                <h3>{shortRole(r.role)}</h3>
              </div>
              <p>{BLURBS[r.role] ?? sentences(r.description)[0]}</p>
              {isNow && (
                <span className="now">
                  NOW<span className="kit-sr"> (current role)</span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
      {first && (
        <div className="steps-axis mono" aria-hidden="true">
          <span>{startOf(first.duration)}</span>
          <span>Today</span>
        </div>
      )}

      {current && (
        <div className="did">
          <button
            type="button"
            className="did-toggle"
            aria-expanded={open}
            aria-controls={bodyId}
            onClick={() => setOpen((o) => !o)}
          >
            <span>
              <b>What I did as {shortRole(current.role)}</b>
              <small>
                {current.company} · {current.duration}
              </small>
            </span>
            <span className="plus" aria-hidden="true">+</span>
          </button>
          <div id={bodyId} className={`did-body${open ? " open" : ""}`} hidden={!open && reduce}>
            <div inert={!open}>
              <ul className="did-list">
                {sentences(current.description).map((s) => (
                  <li key={s}>
                    <span>{withMarks(s)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
