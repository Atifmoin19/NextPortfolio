import { useEffect, useRef, useState } from "react";
import type { ReactElement, ReactNode } from "react";
import { cloneElement, isValidElement } from "react";
import * as THREE from "three";
import { useReducedMotion } from "../../lib/motionPreference";

const STEP = 1.6; // CSS px between sampled particles - lower = denser/heavier
const RADIUS = 100; // CSS px pull radius around the cursor
const MAX_PULL = 28; // CSS px max displacement toward the cursor
const SWIRL = 0.55; // tangential (orbit) component, 0 = pure radial pull
// Canvas is padded beyond the text's own box so particles pulled toward the
// cursor don't get clipped at the edge - the pull can travel MAX_PULL(+swirl)
// px past the glyph outline.
const PADDING = 70;

const SCATTER_MIN = 140; // CSS px - closest a particle starts from its origin
const SCATTER_MAX = 520; // CSS px - furthest a particle starts from its origin
const INTRO_DURATION = 1.15; // seconds for the scatter -> assemble animation

const VERTEX_SHADER = `
  attribute vec2 aOrigin;
  attribute vec2 aScatter;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uRadius;
  uniform float uMaxPull;
  uniform float uSwirl;
  uniform float uTime;
  uniform float uPointSize;
  uniform float uIntro;
  varying float vIntro;

  void main() {
    vec2 toMouse = uMouse - aOrigin;
    float dist = length(toMouse);
    float pull = smoothstep(uRadius, 0.0, dist);
    vec2 dir = dist > 0.0001 ? toMouse / dist : vec2(0.0);
    vec2 swirlDir = vec2(-dir.y, dir.x);
    vec2 jitter = vec2(
      sin(uTime * 1.3 + aOrigin.x * 0.08),
      cos(uTime * 1.1 + aOrigin.y * 0.08)
    ) * 0.35 * (1.0 - pull);

    vec2 settled = aOrigin
      + dir * pull * uMaxPull
      + swirlDir * pull * uMaxPull * uSwirl
      + jitter;

    vec2 scattered = aOrigin + aScatter;
    vec2 displaced = mix(scattered, settled, uIntro);

    vec2 clip = vec2(
      (displaced.x / uResolution.x) * 2.0 - 1.0,
      1.0 - (displaced.y / uResolution.y) * 2.0
    );
    gl_Position = vec4(clip, 0.0, 1.0);
    gl_PointSize = uPointSize * (1.0 + pull * 1.4 * uIntro);
    vIntro = uIntro;
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  uniform vec3 uColor;
  varying float vIntro;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float alpha = smoothstep(0.5, 0.15, d);
    alpha *= smoothstep(0.0, 0.25, vIntro);
    if (alpha <= 0.001) discard;
    gl_FragColor = vec4(uColor, alpha);
  }
`;

function hexToVec3(hex: string): [number, number, number] {
  const c = new THREE.Color(hex);
  return [c.r, c.g, c.b];
}

function easeOutExpo(t: number) {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function ParticleText({
  children,
  active = true,
}: {
  children: ReactNode;
  /** Gate for the scatter->assemble intro - hold false until the moment it
   * should fly in (e.g. until a preloader hand-off completes), or leave at
   * the default true to assemble immediately on mount. */
  active?: boolean;
}) {
  const textRef = useRef<HTMLElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      if (document.fonts?.ready) {
        try {
          await document.fonts.ready;
        } catch {
          // ignore font loading races
        }
      }
      if (cancelled || !textRef.current || !mountRef.current || !wrapRef.current) return;

      const textEl = textRef.current;
      const mount = mountRef.current;
      const wrap = wrapRef.current;

      const rect = textEl.getBoundingClientRect();
      const width = Math.max(1, Math.ceil(rect.width));
      const height = Math.max(1, Math.ceil(rect.height));
      const cs = getComputedStyle(textEl);
      const scale = Math.min(window.devicePixelRatio || 1, 2);

      // Small safety margin: canvas text metrics can still differ slightly
      // from the live CSS box (subpixel rounding, font hinting) even once
      // letter-spacing is corrected below.
      const measurePad = 16;
      const sampleCanvas = document.createElement("canvas");
      sampleCanvas.width = (width + measurePad * 2) * scale;
      sampleCanvas.height = (height + measurePad * 2) * scale;
      const ctx = sampleCanvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(scale, scale);
      ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
      // Canvas text rendering does not inherit CSS letter-spacing - without
      // this, a tight-tracked heading (e.g. letterSpacing: -0.04em) measures
      // and draws noticeably WIDER on canvas than its real DOM box, clipping
      // trailing characters no matter how much padding is added around it.
      if ("letterSpacing" in ctx) {
        (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing =
          cs.letterSpacing;
      }
      ctx.fillStyle = "#000";
      ctx.textBaseline = "top";
      ctx.fillText(textEl.textContent || "", measurePad, measurePad);

      const img = ctx.getImageData(0, 0, sampleCanvas.width, sampleCanvas.height).data;
      const origins: number[] = [];
      const px = Math.max(1, Math.round(STEP * scale));
      for (let y = 0; y < sampleCanvas.height; y += px) {
        for (let x = 0; x < sampleCanvas.width; x += px) {
          const alpha = img[(y * sampleCanvas.width + x) * 4 + 3];
          if (alpha > 80) {
            origins.push(x / scale - measurePad + PADDING, y / scale - measurePad + PADDING);
          }
        }
      }
      if (origins.length === 0) return;

      wrap.style.width = `${width}px`;
      wrap.style.height = `${height}px`;

      const paddedWidth = width + PADDING * 2;
      const paddedHeight = height + PADDING * 2;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(scale);
      renderer.setSize(paddedWidth, paddedHeight);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.Camera();

      const geometry = new THREE.BufferGeometry();
      const originArray = new Float32Array(origins);
      const particleCount = originArray.length / 2;
      const scatterArray = new Float32Array(particleCount * 2);
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = SCATTER_MIN + Math.random() * (SCATTER_MAX - SCATTER_MIN);
        scatterArray[i * 2] = Math.cos(angle) * radius;
        scatterArray[i * 2 + 1] = Math.sin(angle) * radius;
      }
      geometry.setAttribute("aOrigin", new THREE.BufferAttribute(originArray, 2));
      geometry.setAttribute("aScatter", new THREE.BufferAttribute(scatterArray, 2));
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3),
      );

      const uniforms = {
        uResolution: { value: new THREE.Vector2(paddedWidth, paddedHeight) },
        uMouse: { value: new THREE.Vector2(-9999, -9999) },
        uRadius: { value: RADIUS },
        uMaxPull: { value: MAX_PULL },
        uSwirl: { value: SWIRL },
        uTime: { value: 0 },
        uPointSize: { value: STEP * scale * 1.5 },
        uColor: { value: new THREE.Vector3(...hexToVec3(cs.color)) },
        uIntro: { value: reduce ? 1 : 0 },
      };

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        transparent: true,
        depthTest: false,
        depthWrite: false,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      const targetMouse = new THREE.Vector2(-9999, -9999);
      function onPointerMove(e: PointerEvent) {
        const r = wrap.getBoundingClientRect();
        targetMouse.set(e.clientX - r.left + PADDING, e.clientY - r.top + PADDING);
      }
      function onPointerLeave() {
        targetMouse.set(-9999, -9999);
      }

      if (reduce) {
        renderer.render(scene, camera);
        setReady(true);
        cleanup = () => {
          geometry.dispose();
          material.dispose();
          renderer.dispose();
          mount.removeChild(renderer.domElement);
        };
        return;
      }

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerleave", onPointerLeave);

      let running = true;
      let frame = 0;
      const io = new IntersectionObserver(
        ([entry]) => {
          running = entry.isIntersecting;
        },
        { threshold: 0 },
      );
      io.observe(wrap);

      const timer = new THREE.Timer();
      let introStart: number | null = activeRef.current ? 0 : null;
      const tick = () => {
        frame = requestAnimationFrame(tick);
        if (!running) return;
        timer.update();
        const elapsed = timer.getElapsed();

        if (introStart === null && activeRef.current) introStart = elapsed;
        if (introStart !== null) {
          const t = Math.min(1, (elapsed - introStart) / INTRO_DURATION);
          uniforms.uIntro.value = easeOutExpo(t);
        }

        uniforms.uTime.value = elapsed;
        uniforms.uMouse.value.lerp(targetMouse, 0.25);
        renderer.render(scene, camera);
      };
      tick();
      setReady(true);

      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerleave", onPointerLeave);
        io.disconnect();
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        mount.removeChild(renderer.domElement);
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  if (!isValidElement(children)) return <>{children}</>;
  const child = children as ReactElement<{ style?: React.CSSProperties }>;

  return (
    <div ref={wrapRef} style={{ position: "relative", display: "inline-block", cursor: "pointer" }}>
      {cloneElement(child, {
        ref: textRef,
        style: { ...(child.props.style || {}), opacity: ready ? 0 : 1 },
      } as never)}
      <div
        ref={mountRef}
        aria-hidden
        style={{
          position: "absolute",
          inset: `-${PADDING}px`,
          pointerEvents: "none",
          opacity: ready ? 1 : 0,
        }}
      />
    </div>
  );
}
