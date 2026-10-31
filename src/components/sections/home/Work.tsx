import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { getWorkItems, type WorkItem } from "../../../data/work";
import { useReducedMotion } from "../../../lib/useMotionPreference";
import "./work.css";

const TAPES = ["var(--pink)", "var(--mint)", "var(--sky)", "var(--butter)", "var(--lilac)"];

function Peek({ item, index, on }: { item: WorkItem | null; index: number; on: boolean }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Follows the pointer with a gentle lerp (a direct jump under reduced motion).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let px = -400;
    let py = -400;
    let tx = px;
    let ty = py;
    let raf = 0;
    // Keep the whole card (plus room for its tilt) inside the viewport.
    const EDGE = 16;
    const place = () => {
      const maxX = window.innerWidth - el.offsetWidth - EDGE;
      const maxY = window.innerHeight - el.offsetHeight - EDGE;
      el.style.left = `${Math.max(EDGE, Math.min(px, maxX))}px`;
      el.style.top = `${Math.max(EDGE, Math.min(py, maxY))}px`;
    };
    const tick = () => {
      px += (tx - px) * 0.15;
      py += (ty - py) * 0.15;
      place();
      raf = Math.abs(tx - px) + Math.abs(ty - py) > 0.5 ? requestAnimationFrame(tick) : 0;
    };
    const onMove = (e: PointerEvent) => {
      // Sits right of the cursor; flips to the left near the right edge.
      const w = el.offsetWidth;
      tx = e.clientX + 28 + w + EDGE > window.innerWidth ? e.clientX - 28 - w : e.clientX + 28;
      ty = e.clientY - 110;
      if (reduce || px < -300) {
        px = tx;
        py = ty;
        place();
      } else if (!raf) {
        raf = requestAnimationFrame(tick);
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <div
      ref={ref}
      className={on ? "ps-peek on" : "ps-peek"}
      style={{ ["--pr" as string]: `${index % 2 ? 2.5 : -3}deg` }}
      aria-hidden="true"
    >
      {item && (
        <>
          <span className="tape" style={{ ["--tc" as string]: TAPES[index % TAPES.length] }} />
          <div className="ph" style={{ background: `var(--${item.color})` }}>
            {item.img ? <img src={item.img} alt="" width={1440} height={900} decoding="async" /> : <b>{item.name}</b>}
          </div>
          <div className="cap">
            {item.name}
            <small>{item.outcome}</small>
          </div>
        </>
      )}
    </div>
  );
}

export default function Work() {
  const cms = useSelector((state: RootState) => state.portfolio.data?.projects);
  const items = useMemo(() => getWorkItems(cms ?? []), [cms]);
  const [hover, setHover] = useState<{ i: number; on: boolean }>({ i: 0, on: false });

  return (
    <section className="ps-sec ps-wrap" id="work" data-tint="#eef0f2">
      <h2 className="ps-h2">Selected work</h2>
      <p className="ps-lede">
        One row per project, with what it shipped. Hover a row to see a screenshot; open it for the full case study.
      </p>
      <div className="ps-idx">
        {items.map((w, i) => (
          <div
            key={w.slug}
            className={w.featured ? "ps-row featured" : "ps-row"}
            style={{ ["--c" as string]: `var(--${w.color})` }}
            onPointerEnter={(e) => e.pointerType === "mouse" && setHover({ i, on: true })}
            onPointerLeave={() => setHover((h) => ({ ...h, on: false }))}
          >
            <span className="y">{w.year}</span>
            <Link className="n" to={`/project/${w.slug}`}>
              {w.name}
              {w.featured && <span className="flag">Flagship</span>}
            </Link>
            <span className="t">{w.type}</span>
            <span className="o">
              {w.outcome}
              {w.live && (
                <a
                  className="live"
                  href={w.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${w.name} live (opens in a new tab)`}
                >
                  Live &#8599;
                </a>
              )}
            </span>
            <span className="ar" aria-hidden="true">
              &#8599;
            </span>
          </div>
        ))}
      </div>
      <Peek item={items[hover.i] ?? null} index={hover.i} on={hover.on} />
    </section>
  );
}
