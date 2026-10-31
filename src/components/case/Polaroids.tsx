import { useCallback, useState, type KeyboardEvent } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import type { Screenshot } from "../../data/caseStudies";

const TILTS = ["-1.6deg", "1.2deg", "-0.6deg", "1.8deg", "-1.2deg", "0.8deg"];
const TAPES = ["var(--butter)", "var(--pink)", "var(--mint)", "var(--sky)", "var(--lilac)"];

export default function Polaroids({ shots, title }: { shots: Screenshot[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + shots.length) % shots.length)),
    [shots.length],
  );

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
  };

  const current = open === null ? null : shots[open];

  return (
    <>
      <div className="cs-gallery">
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className={`cs-pol${s.mobile ? " mobile" : ""}`}
            style={{ ["--r" as string]: TILTS[i % TILTS.length] }}
            onClick={() => setOpen(i)}
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

      <Modal isOpen={open !== null} onClose={close} size="6xl" isCentered motionPreset="scale">
        <ModalOverlay />
        <ModalContent mx={{ base: 3, md: 6 }} p={{ base: 3, md: 5 }} onKeyDown={onKey} aria-label={`${title} screenshots`}>
          <ModalCloseButton zIndex={2} bg="var(--paper)" border="2px solid var(--ink)" borderRadius="full" />
          <ModalBody p={0} className="cs-lightbox">
            {current && (
              <figure>
                <img
                  src={current.src}
                  alt={current.alt}
                  style={current.mobile ? { maxWidth: 360, margin: "0 auto" } : undefined}
                />
                <figcaption className="cap">{current.caption}</figcaption>
              </figure>
            )}
            {shots.length > 1 && (
              <div className="bar">
                <button type="button" className="cs-btn paper" onClick={() => step(-1)}>
                  <span aria-hidden="true">&larr;</span> Previous
                </button>
                <span className="mono" aria-live="polite">
                  {(open ?? 0) + 1} / {shots.length}
                </span>
                <button type="button" className="cs-btn paper" onClick={() => step(1)}>
                  Next <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
