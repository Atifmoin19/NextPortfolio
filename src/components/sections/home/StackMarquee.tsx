import { useReducedMotion } from "../../../lib/useMotionPreference";
import "./marquee.css";

const C = { f: "var(--pink)", b: "var(--sky)", a: "var(--lilac)", d: "var(--mint)", t: "var(--butter)" };

const STACK: [string, keyof typeof C][] = [
  ["React", "f"], ["TypeScript", "f"], ["Next.js", "f"], ["FastAPI", "b"], ["PostgreSQL", "d"],
  ["Redis", "d"], ["WebSockets", "b"], ["Gemini", "a"], ["Groq", "a"], ["Three.js", "f"],
  ["GSAP", "f"], ["Pyodide", "b"], ["Tailwind", "f"], ["Docker", "t"],
];

export default function StackMarquee() {
  const reduce = useReducedMotion();
  // Two copies make the -50% loop seamless; the second is hidden from screen readers.
  return (
    <div className={reduce ? "ps-mq static" : "ps-mq"} aria-label="Tech stack" role="region">
      <ul className="ps-track">
        {[...STACK, ...STACK].map(([label, k], i) => (
          <li
            key={i}
            aria-hidden={i >= STACK.length ? "true" : undefined}
            style={{ ["--c" as string]: C[k] }}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
