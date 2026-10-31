import { useEffect, useMemo, useRef, useState } from "react";
import type * as MatterNS from "matter-js";
import { useReducedMotion } from "../../../lib/useMotionPreference";
import { usePortfolioContent } from "./usePortfolioContent";
import "./kit.css";
import "./SkillsPit.css";

// One colour per skill category, in the order the categories first appear.
const GROUP_COLORS = [
  "var(--pink)",
  "var(--sky)",
  "var(--lilac)",
  "var(--mint)",
  "var(--butter)",
  "#ffc9a3",
  "#d9ef8b",
  "var(--paper)",
];

interface PitPill {
  name: string;
  group: string;
  color: string;
}

type Matter = typeof MatterNS;

interface Physics {
  shake: () => void;
  sort: () => void;
  destroy: () => void;
}

/** Starts the matter-js ball pit on `pit`. Returns controls, or throws if it cannot run. */
function startPhysics(M: Matter, pit: HTMLDivElement, pills: HTMLElement[], groupOrder: string[]): Physics {
  const { Engine, Bodies, Body, Composite } = M;
  const engine = Engine.create({ gravity: { x: 0, y: 1, scale: 0.001 } });
  let W = 0;
  let H = 0;
  let walls: MatterNS.Body[] = [];
  let bodies: { b: MatterNS.Body; el: HTMLElement; w: number; h: number }[] = [];
  let drag: { i: number; tx: number; ty: number } | null = null;
  let visible = false;
  let started = false;
  let raf = 0;
  let lastT = 0;

  const fitHeight = () => {
    pit.style.height = "";
    const w = pit.clientWidth;
    const area = pills.reduce((s, el) => s + el.offsetWidth * el.offsetHeight, 0);
    const needed = Math.ceil((area * 2) / Math.max(1, w));
    if (needed > pit.clientHeight) pit.style.height = `${Math.min(needed, 760)}px`;
  };

  const buildWalls = () => {
    Composite.remove(engine.world, walls);
    W = pit.clientWidth;
    H = pit.clientHeight;
    const t = 200;
    walls = [
      Bodies.rectangle(W / 2, H + t / 2 - 2, W + t * 2, t, { isStatic: true }),
      Bodies.rectangle(-t / 2 + 2, H / 2, t, H * 4, { isStatic: true }),
      Bodies.rectangle(W + t / 2 - 2, H / 2, t, H * 4, { isStatic: true }),
    ];
    Composite.add(engine.world, walls);
  };

  const buildBodies = () => {
    Composite.remove(engine.world, bodies.map((x) => x.b));
    bodies = pills.map((el, i) => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const b = Bodies.rectangle(30 + Math.random() * Math.max(1, W - 60), -60 - i * 38, w, h, {
        chamfer: { radius: h / 2 - 1 },
        restitution: 0.45,
        friction: 0.25,
        frictionAir: 0.012,
        density: 0.0016,
      });
      Body.setAngle(b, (Math.random() - 0.5) * 0.6);
      return { b, el, w, h };
    });
    Composite.add(engine.world, bodies.map((x) => x.b));
  };

  const sync = () => {
    for (const { b, el, w, h } of bodies) {
      el.style.transform = `translate(${(b.position.x - w / 2).toFixed(1)}px,${(b.position.y - h / 2).toFixed(1)}px) rotate(${b.angle.toFixed(3)}rad)`;
    }
  };

  const frame = (t: number) => {
    raf = 0;
    if (!visible) return;
    const dt = Math.min(1000 / 60, t - lastT || 16.7);
    lastT = t;
    if (drag) {
      const { b } = bodies[drag.i];
      Body.setVelocity(b, { x: (drag.tx - b.position.x) * 0.35, y: (drag.ty - b.position.y) * 0.35 });
      Body.setAngularVelocity(b, b.angularVelocity * 0.8);
    }
    Engine.update(engine, dt);
    sync();
    raf = requestAnimationFrame(frame);
  };

  const run = () => {
    if (!raf && visible) {
      lastT = performance.now();
      raf = requestAnimationFrame(frame);
    }
  };

  const start = () => {
    if (started) return;
    started = true;
    fitHeight();
    buildWalls();
    buildBodies();
  };

  // Physics only runs while the pit is on screen.
  const io = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        start();
        run();
      } else if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    },
    { rootMargin: "80px" },
  );
  io.observe(pit);

  const local = (e: PointerEvent) => {
    const r = pit.getBoundingClientRect();
    return {
      x: Math.min(Math.max(10, e.clientX - r.left), W - 10),
      y: Math.min(Math.max(10, e.clientY - r.top), H - 10),
    };
  };
  const cleanups: (() => void)[] = [];
  pills.forEach((el, i) => {
    const down = (e: PointerEvent) => {
      if (!started) return;
      el.setPointerCapture(e.pointerId);
      const p = local(e);
      drag = { i, tx: p.x, ty: p.y };
      el.style.zIndex = "5";
    };
    const move = (e: PointerEvent) => {
      if (!drag || drag.i !== i) return;
      const p = local(e);
      drag.tx = p.x;
      drag.ty = p.y;
    };
    const end = () => {
      if (!drag || drag.i !== i) return;
      el.style.zIndex = "";
      drag = null;
    };
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", end);
    cleanups.push(() => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", end);
      el.removeEventListener("pointercancel", end);
    });
  });

  let lastWidth = pit.clientWidth;
  const onResize = () => {
    if (!started || Math.abs(pit.clientWidth - lastWidth) < 2) return;
    lastWidth = pit.clientWidth;
    fitHeight();
    buildWalls();
    buildBodies();
  };
  window.addEventListener("resize", onResize);

  return {
    shake() {
      start();
      for (const { b } of bodies) {
        Body.setVelocity(b, { x: (Math.random() - 0.5) * 18, y: -8 - Math.random() * 14 });
        Body.setAngularVelocity(b, (Math.random() - 0.5) * 0.4);
      }
      run();
    },
    sort() {
      start();
      const sorted = bodies
        .slice()
        .sort((a, b) => groupOrder.indexOf(a.el.dataset.g!) - groupOrder.indexOf(b.el.dataset.g!));
      let x = 14;
      const rows: { item: (typeof bodies)[number]; x: number }[][] = [[]];
      for (const item of sorted) {
        if (x + item.w > W - 14 && rows[rows.length - 1].length) {
          rows.push([]);
          x = 14;
        }
        rows[rows.length - 1].push({ item, x });
        x += item.w + 8;
      }
      rows.forEach((row, ri) =>
        row.forEach(({ item: { b, w }, x: rx }) => {
          Body.setAngle(b, 0);
          Body.setAngularVelocity(b, 0);
          Body.setVelocity(b, { x: 0, y: 0 });
          Body.setPosition(b, { x: rx + w / 2, y: -40 - (rows.length - ri) * 60 });
        }),
      );
      run();
    },
    destroy() {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      cleanups.forEach((fn) => fn());
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      pit.style.height = "";
    },
  };
}

export default function SkillsPit() {
  const { skills } = usePortfolioContent();
  const reduce = useReducedMotion();
  const pitRef = useRef<HTMLDivElement>(null);
  const physics = useRef<Physics | null>(null);
  const [mode, setMode] = useState<"loading" | "physics" | "static">(reduce ? "static" : "loading");
  const [sortedStatic, setSortedStatic] = useState(false);

  const { pills, groups } = useMemo(() => {
    const order: string[] = [];
    for (const s of skills) {
      const g = s.category || "Other";
      if (!order.includes(g)) order.push(g);
    }
    const color = (g: string) => GROUP_COLORS[order.indexOf(g) % GROUP_COLORS.length];
    return {
      groups: order.map((g) => ({ name: g, color: color(g) })),
      pills: skills.map<PitPill>((s) => ({ name: s.name, group: s.category || "Other", color: color(s.category || "Other") })),
    };
  }, [skills]);

  const groupOrder = groups.map((g) => g.name);
  const groupKey = groupOrder.join("|");
  const pillKey = pills.map((p) => p.name).join("|");

  useEffect(() => {
    if (reduce) {
      setMode("static");
      return;
    }
    const pit = pitRef.current;
    if (!pit) return;
    let cancelled = false;
    setMode("loading");
    import("matter-js")
      .then((mod) => {
        if (cancelled) return;
        const M = ((mod as unknown as { default?: Matter }).default ?? mod) as Matter;
        const els = Array.from(pit.querySelectorAll<HTMLElement>(".pill"));
        physics.current = startPhysics(M, pit, els, groupKey.split("|"));
        setMode("physics");
      })
      .catch(() => {
        if (!cancelled) setMode("static");
      });
    return () => {
      cancelled = true;
      physics.current?.destroy();
      physics.current = null;
    };
  }, [reduce, groupKey, pillKey]);

  const isStatic = mode === "static";
  const shown = isStatic && sortedStatic
    ? pills.slice().sort((a, b) => groupOrder.indexOf(a.group) - groupOrder.indexOf(b.group))
    : pills;

  return (
    <section id="skills" className="ps-sec ps-wrap" aria-labelledby="skills-title">
      <h2 id="skills-title" className="ps-h2">Skills ball pit</h2>
      <p className="ps-lede">
        {isStatic
          ? "Every pill is a tool I use at work, coloured by group."
          : "Every pill is a tool I use at work. Grab one and throw it, or press Shake."}
      </p>
      <div
        ref={pitRef}
        className={`pit${isStatic ? " static" : ""}`}
        role="list"
        aria-label="Skills"
      >
        {shown.map((p) => (
          <div
            key={p.name}
            role="listitem"
            className="pill"
            data-g={p.group}
            style={{ background: p.color }}
          >
            {p.name}
            <span className="kit-sr">, {p.group}</span>
          </div>
        ))}
      </div>
      <div className="kit-bar">
        <ul className="pit-legend" aria-label="Groups">
          {groups.map((g) => (
            <li key={g.name}>
              <i style={{ background: g.color }} aria-hidden="true" />
              {g.name}
            </li>
          ))}
        </ul>
        <div className="kit-acts">
          {!isStatic && (
            <button className="ps-btn ghost" type="button" onClick={() => physics.current?.shake()}>
              Shake
            </button>
          )}
          <button
            className="ps-btn"
            type="button"
            onClick={() => (isStatic ? setSortedStatic(true) : physics.current?.sort())}
          >
            Sort by group
          </button>
        </div>
      </div>
    </section>
  );
}
