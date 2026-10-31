import { useLayoutEffect, useRef, useState } from "react";
import type { ArchEdge, ArchNode } from "../../data/caseStudies";

// Boxes are a CSS grid (so their text wraps naturally); the arrows are an SVG overlay
// measured from the boxes after layout. Below 600px wide the grid is transposed, so a
// left-to-right flow becomes top-to-bottom and the labels stay readable on a phone.

const NARROW = 600;

interface Wire {
  key: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label?: string;
  both?: boolean;
}

function edgePoint(r: DOMRect, tx: number, ty: number, pad: number) {
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  const dx = tx - cx;
  const dy = ty - cy;
  const hw = r.width / 2 + pad;
  const hh = r.height / 2 + pad;
  const t = Math.min(dx === 0 ? Infinity : hw / Math.abs(dx), dy === 0 ? Infinity : hh / Math.abs(dy));
  return { x: cx + dx * t, y: cy + dy * t };
}

export default function ArchDiagram({ nodes, edges, label }: { nodes: ArchNode[]; edges: ArchEdge[]; label: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef(new Map<string, HTMLDivElement>());
  const [narrow, setNarrow] = useState(false);
  const [wires, setWires] = useState<Wire[]>([]);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const measure = () => {
      const box = wrap.getBoundingClientRect();
      const isNarrow = box.width < NARROW;
      setNarrow((prev) => (prev === isNarrow ? prev : isNarrow));
      const next: Wire[] = [];
      for (const e of edges) {
        const a = nodeRefs.current.get(e.from)?.getBoundingClientRect();
        const b = nodeRefs.current.get(e.to)?.getBoundingClientRect();
        if (!a || !b) continue;
        const p1 = edgePoint(a, b.left + b.width / 2, b.top + b.height / 2, 4);
        const p2 = edgePoint(b, a.left + a.width / 2, a.top + a.height / 2, 7);
        next.push({
          key: `${e.from}-${e.to}`,
          x1: p1.x - box.left,
          y1: p1.y - box.top,
          x2: p2.x - box.left,
          y2: p2.y - box.top,
          label: e.label,
          both: e.both,
        });
      }
      setWires(next);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    nodeRefs.current.forEach((el) => ro.observe(el));
    document.fonts?.ready.then(measure).catch(() => {});
    return () => ro.disconnect();
  }, [edges, nodes, narrow]);

  if (!nodes.length) return null;

  const cols = Math.max(...nodes.map((n) => (narrow ? n.row : n.col))) + 1;

  return (
    <div className="cs-diagram" role="img" aria-label={label}>
      <div ref={wrapRef} style={{ position: "relative" }}>
        <div className="cs-dgrid" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }} aria-hidden="true">
          {nodes.map((n) => {
            const tone = n.tone ?? "paper";
            return (
              <div
                key={n.id}
                ref={(el) => {
                  if (el) nodeRefs.current.set(n.id, el);
                  else nodeRefs.current.delete(n.id);
                }}
                className={`cs-node${tone === "ink" ? " ink" : ""}`}
                style={{
                  gridColumn: (narrow ? n.row : n.col) + 1,
                  gridRow: (narrow ? n.col : n.row) + 1,
                  ["--nc" as string]: tone === "ink" ? undefined : `var(--${tone})`,
                }}
              >
                <b>{n.label}</b>
                {n.sub && <span>{n.sub}</span>}
              </div>
            );
          })}
        </div>
        <svg className="cs-wires" aria-hidden="true">
          <defs>
            <marker id="cs-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" fill="var(--ink)" />
            </marker>
          </defs>
          {wires.map((w) => (
            <g key={w.key}>
              <line
                x1={w.x1}
                y1={w.y1}
                x2={w.x2}
                y2={w.y2}
                stroke="var(--ink)"
                strokeWidth={2}
                markerEnd="url(#cs-arrow)"
                markerStart={w.both ? "url(#cs-arrow)" : undefined}
              />
              {w.label && Math.hypot(w.x2 - w.x1, w.y2 - w.y1) >= w.label.length * 7 + 16 && (
                <text x={(w.x1 + w.x2) / 2} y={(w.y1 + w.y2) / 2} textAnchor="middle" dominantBaseline="middle">
                  {w.label}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
