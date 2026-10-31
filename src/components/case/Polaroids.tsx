import { lazy, Suspense, useCallback, useState } from "react";
import type { Screenshot } from "../../data/caseStudies";

// The lightbox (Chakra modal + its animation library) loads on the first click.
const Lightbox = lazy(() => import("./Lightbox"));

const TILTS = ["-1.6deg", "1.2deg", "-0.6deg", "1.8deg", "-1.2deg", "0.8deg"];
const TAPES = ["var(--butter)", "var(--pink)", "var(--mint)", "var(--sky)", "var(--lilac)"];

export default function Polaroids({ shots, title }: { shots: Screenshot[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const [used, setUsed] = useState(false);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + shots.length) % shots.length)),
    [shots.length],
  );

  return (
    <>
      <div className="cs-gallery">
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className={`cs-pol${s.mobile ? " mobile" : ""}`}
            style={{ ["--r" as string]: TILTS[i % TILTS.length] }}
            onClick={() => {
              setUsed(true);
              setOpen(i);
            }}
            aria-label={`Enlarge screenshot: ${s.caption}`}
          >
            <span className="tape" aria-hidden="true" style={{ ["--tc" as string]: TAPES[i % TAPES.length] }} />
            <span className="ph">
              <img src={s.src} alt={s.alt} loading="lazy" decoding="async" width={s.mobile ? 390 : 1440} height={s.mobile ? 844 : 900} />
            </span>
            <span className="cap">{s.caption}</span>
          </button>
        ))}
      </div>

      {used && (
        <Suspense fallback={null}>
          <Lightbox shots={shots} title={title} open={open} onClose={close} onStep={step} />
        </Suspense>
      )}
    </>
  );
}
