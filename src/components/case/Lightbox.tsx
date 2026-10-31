import type { KeyboardEvent } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import type { Screenshot } from "../../data/caseStudies";

interface Props {
  shots: Screenshot[];
  title: string;
  open: number | null;
  onClose: () => void;
  onStep: (d: number) => void;
}

export default function Lightbox({ shots, title, open, onClose, onStep }: Props) {
  const current = open === null ? null : shots[open];
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      onStep(1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      onStep(-1);
    }
  };

  return (
    <Modal isOpen={open !== null} onClose={onClose} size="6xl" isCentered motionPreset="scale">
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
              <button type="button" className="cs-btn paper" onClick={() => onStep(-1)}>
                <span aria-hidden="true">&larr;</span> Previous
              </button>
              <span className="mono" aria-live="polite">
                {(open ?? 0) + 1} / {shots.length}
              </span>
              <button type="button" className="cs-btn paper" onClick={() => onStep(1)}>
                Next <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
