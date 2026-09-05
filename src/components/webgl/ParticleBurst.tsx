import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "../../lib/motionPreference";

const COLORS = [0xf3a53d, 0xe2901f, 0x16140f, 0xfdfdfc];
const PARTICLES_PER_BURST = 70;
const GRAVITY = 620; // CSS px/s^2
const LIFE = 1.0; // seconds

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  size: number;
  color: THREE.Color;
}

export interface ParticleBurstHandle {
  /** Fire a burst centered at (x, y) in CSS px, local to this component's mount container. */
  burst: (x: number, y: number) => void;
}

const VERTEX_SHADER = `
  attribute vec3 aColor;
  attribute float aSize;
  attribute float aAlpha;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    gl_Position = vec4(position, 1.0);
    gl_PointSize = aSize;
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float mask = smoothstep(0.5, 0.15, d);
    float alpha = mask * vAlpha;
    if (alpha <= 0.001) discard;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

const ParticleBurst = forwardRef<ParticleBurstHandle>(function ParticleBurst(_props, ref) {
  const mountRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const burstFnRef = useRef<(x: number, y: number) => void>(() => {});
  const reduce = useReducedMotion();

  useImperativeHandle(ref, () => ({
    burst: (x: number, y: number) => burstFnRef.current(x, y),
  }));

  useEffect(() => {
    if (reduce || !mountRef.current) return;
    const mount = mountRef.current;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    const MAX_PARTICLES = PARTICLES_PER_BURST * 3; // headroom for rapid re-fires
    const positions = new Float32Array(MAX_PARTICLES * 3);
    const colorAttr = new Float32Array(MAX_PARTICLES * 3);
    const sizeAttr = new Float32Array(MAX_PARTICLES);
    const alphaAttr = new Float32Array(MAX_PARTICLES);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aColor", new THREE.BufferAttribute(colorAttr, 3));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizeAttr, 1));
    geometry.setAttribute("aAlpha", new THREE.BufferAttribute(alphaAttr, 1));
    geometry.setDrawRange(0, 0);

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let width = 0;
    let height = 0;
    function resize() {
      width = mount.clientWidth || 1;
      height = mount.clientHeight || 1;
      renderer.setSize(width, height);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    burstFnRef.current = (originX: number, originY: number) => {
      const list = particlesRef.current;
      for (let i = 0; i < PARTICLES_PER_BURST; i++) {
        if (list.length >= MAX_PARTICLES) list.shift();
        const angle = Math.random() * Math.PI * 2;
        const speed = 140 + Math.random() * 260;
        list.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 80, // slight upward kick
          age: 0,
          size: 5 + Math.random() * 6,
          color: new THREE.Color(COLORS[Math.floor(Math.random() * COLORS.length)]),
        });
      }
    };

    let frame = 0;
    let lastTime = performance.now();

    function tick() {
      frame = requestAnimationFrame(tick);
      const now = performance.now();
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      const list = particlesRef.current;
      if (list.length === 0) {
        geometry.setDrawRange(0, 0);
        return;
      }

      for (let i = list.length - 1; i >= 0; i--) {
        const p = list[i];
        p.age += dt;
        if (p.age >= LIFE) {
          list.splice(i, 1);
          continue;
        }
        p.vy += GRAVITY * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
      }

      const count = Math.min(list.length, MAX_PARTICLES);
      for (let i = 0; i < count; i++) {
        const p = list[i];
        const t = p.age / LIFE;
        positions[i * 3] = (p.x / width) * 2 - 1;
        positions[i * 3 + 1] = 1 - (p.y / height) * 2;
        positions[i * 3 + 2] = 0;
        colorAttr[i * 3] = p.color.r;
        colorAttr[i * 3 + 1] = p.color.g;
        colorAttr[i * 3 + 2] = p.color.b;
        sizeAttr[i] = p.size * (renderer.getPixelRatio());
        alphaAttr[i] = 1 - t;
      }
      geometry.setDrawRange(0, count);
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.aColor.needsUpdate = true;
      geometry.attributes.aSize.needsUpdate = true;
      geometry.attributes.aAlpha.needsUpdate = true;

      renderer.render(scene, camera);
    }
    tick();

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [reduce]);

  return (
    <div
      ref={mountRef}
      aria-hidden
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 5 }}
    />
  );
});

export default ParticleBurst;
