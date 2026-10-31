import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../../../lib/useMotionPreference";
import "./kit.css";
import "./Breather.css";

const BUBBLES = 48;

type Pt = { x: number; y: number };

function Sketchpad({ reduce }: { reduce: boolean }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const flipRef = useRef<HTMLDivElement>(null);
  const size = useRef({ w: 0, h: 0 });
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const page = pageRef.current;
    const cv = canvasRef.current;
    const ctx = cv?.getContext("2d");
    if (!page || !cv || !ctx) return;

    const resize = () => {
      const d = Math.min(2, window.devicePixelRatio || 1);
      size.current = { w: page.clientWidth, h: page.clientHeight };
      cv.width = size.current.w * d;
      cv.height = size.current.h * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(page);

    // The pencil fades a little every frame, but only while the pad is on screen.
    let raf = 0;
    const fade = () => {
      const { w, h } = size.current;
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,.006)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(fade);
    };
    const io = new IntersectionObserver(
      ([e]) => {
        cancelAnimationFrame(raf);
        raf = e.isIntersecting ? requestAnimationFrame(fade) : 0;
      },
      { rootMargin: "80px" },
    );
    io.observe(page);

    let last: Pt | null = null;
    const pt = (e: PointerEvent): Pt => {
      const r = cv.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const pencil = (a: Pt, b: Pt) => {
      ctx.globalCompositeOperation = "source-over";
      ctx.lineCap = "round";
      for (let k = 0; k < 3; k++) {
        const j = () => (Math.random() - 0.5) * 1.1;
        ctx.strokeStyle = `rgba(30,30,30,${0.22 + Math.random() * 0.2})`;
        ctx.lineWidth = 0.9 + Math.random() * 0.8;
        ctx.beginPath();
        ctx.moveTo(a.x + j(), a.y + j());
        ctx.lineTo(b.x + j(), b.y + j());
        ctx.stroke();
      }
    };
    const down = (e: PointerEvent) => {
      page.setPointerCapture(e.pointerId);
      last = pt(e);
      setDrawn(true);
    };
    const move = (e: PointerEvent) => {
      if (!last) return;
      const p = pt(e);
      pencil(last, p);
      last = p;
    };
    const up = () => {
      last = null;
    };
    page.addEventListener("pointerdown", down);
    page.addEventListener("pointermove", move);
    page.addEventListener("pointerup", up);
    page.addEventListener("pointercancel", up);

    return () => {
      ro.disconnect();
      io.disconnect();
      cancelAnimationFrame(raf);
      page.removeEventListener("pointerdown", down);
      page.removeEventListener("pointermove", move);
      page.removeEventListener("pointerup", up);
      page.removeEventListener("pointercancel", up);
    };
  }, []);

  const newPage = () => {
    const ctx = canvasRef.current?.getContext("2d");
    const clear = () => ctx?.clearRect(0, 0, size.current.w, size.current.h);
    const f = flipRef.current;
    if (reduce || !f) {
      clear();
      return;
    }
    f.classList.remove("go");
    void f.offsetWidth;
    f.classList.add("go");
    window.setTimeout(clear, 220);
    f.addEventListener("animationend", () => f.classList.remove("go"), { once: true });
  };

  return (
    <div className="panel">
      <h3>Sketchpad</h3>
      <p className="sub">Doodle on the page. The pencil fades on its own.</p>
      <div className="pad">
        <div className="rings" aria-hidden="true">
          {Array.from({ length: 8 }, (_, i) => (
            <i key={i} />
          ))}
        </div>
        <div className="pad-page" ref={pageRef}>
          <canvas ref={canvasRef} role="img" aria-label="Sketchpad drawing area" />
          <span className="lbl" style={{ opacity: drawn ? 0 : 1 }} aria-hidden="true">
            draw anywhere on this page
          </span>
        </div>
        <div className="pad-flip" ref={flipRef} aria-hidden="true" />
      </div>
      <div>
        <button className="ps-btn" type="button" onClick={newPage}>
          New page
        </button>
      </div>
    </div>
  );
}

function BubbleWrap({ reduce }: { reduce: boolean }) {
  const [sheetId, setSheetId] = useState(0);
  const [popped, setPopped] = useState<boolean[]>(() => Array(BUBBLES).fill(false));
  const [muted, setMuted] = useState(false);
  const mutedRef = useRef(false);
  const audio = useRef<AudioContext | null>(null);
  const dragging = useRef(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  useEffect(() => {
    const stop = () => {
      dragging.current = false;
    };
    window.addEventListener("pointerup", stop);
    return () => {
      window.removeEventListener("pointerup", stop);
      audio.current?.close().catch(() => {});
    };
  }, []);

  // Only ever called from a click, tap or drag, so the AudioContext starts after a gesture.
  const popSound = () => {
    if (mutedRef.current) return;
    try {
      const Ctx =
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ac = (audio.current ??= new Ctx());
      const len = Math.floor(ac.sampleRate * 0.06);
      const buf = ac.createBuffer(1, len, ac.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 4);
      const src = ac.createBufferSource();
      src.buffer = buf;
      const bp = ac.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = 900 + Math.random() * 900;
      bp.Q.value = 2.2;
      const g = ac.createGain();
      g.gain.value = 0.55;
      src.connect(bp).connect(g).connect(ac.destination);
      src.start();
    } catch {
      // No audio available; popping still works.
    }
  };

  const pop = (el: HTMLButtonElement | null) => {
    if (!el || el.dataset.popped === "true") return;
    const i = Number(el.dataset.i);
    el.dataset.popped = "true";
    setPopped((p) => {
      const next = p.slice();
      next[i] = true;
      return next;
    });
    popSound();
    if (!reduce) {
      el.animate([{ transform: "scale(1.2)" }, { transform: "scale(.82)" }], {
        duration: 260,
        easing: "cubic-bezier(.34,1.56,.64,1)",
      });
    }
  };

  const count = popped.filter(Boolean).length;

  return (
    <div className="panel">
      <h3>Bubble wrap</h3>
      <p className="sub">Click or tap to pop. With a mouse, hold and drag across a row.</p>
      <div
        ref={sheetRef}
        key={sheetId}
        className="sheet"
        role="group"
        aria-label="Bubble wrap sheet"
        onPointerDown={(e) => {
          pop((e.target as HTMLElement).closest<HTMLButtonElement>(".bub"));
          if (e.pointerType === "mouse") dragging.current = true;
        }}
        onPointerMove={(e) => {
          if (!dragging.current) return;
          const el = document.elementFromPoint(e.clientX, e.clientY);
          if (el && sheetRef.current?.contains(el)) pop(el.closest<HTMLButtonElement>(".bub"));
        }}
      >
        {popped.map((isPopped, i) => (
          <button
            key={i}
            type="button"
            className={`bub${isPopped ? " popped" : ""}`}
            data-i={i}
            data-popped={isPopped ? "true" : undefined}
            aria-pressed={isPopped}
            aria-label={isPopped ? "Popped bubble" : "Bubble"}
            onClick={(e) => pop(e.currentTarget)}
          />
        ))}
      </div>
      <div className="kit-bar" style={{ margin: 0 }}>
        <span className="pop-count" aria-live="polite">
          {count} popped
        </span>
        <div className="kit-acts">
          <button
            className="ps-btn pink"
            type="button"
            onClick={() => {
              setPopped(Array(BUBBLES).fill(false));
              setSheetId((n) => n + 1);
            }}
          >
            New sheet
          </button>
          <button className="ps-btn ghost" type="button" onClick={() => setMuted((m) => !m)}>
            {muted ? "Sound off" : "Sound on"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Breather() {
  const reduce = useReducedMotion();
  return (
    <section id="breather" className="ps-sec ps-wrap" aria-labelledby="breather-title">
      <h2 id="breather-title" className="ps-h2">Take a breather</h2>
      <p className="ps-lede">Two small things to fidget with while you read. Nothing here is saved.</p>
      <div className="breath">
        <Sketchpad reduce={reduce} />
        <BubbleWrap reduce={reduce} />
      </div>
    </section>
  );
}
