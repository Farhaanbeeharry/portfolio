import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * The live ground behind the Overview route: a technical lattice that responds
 * to the pointer and to scroll velocity.
 *
 * Deliberately matte and neutral. It is drawn in slate greys with no bloom, no
 * additive blending and NO accent colour — the vermilion in this system means
 * "primary action" or "live", and spending it on a background would make it
 * decoration, which is the one thing the palette rule forbids. Energy is
 * expressed by density and contrast instead of by glow.
 *
 * Renders with alpha so the CSS ink ground stays the actual background; skipped
 * entirely under prefers-reduced-motion or when WebGL is unavailable, in which
 * case the route is simply a flat ink field.
 */

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;

  uniform float uAspect;
  uniform float uTime;
  uniform vec2  uPointer;   // -1..1, aspect-corrected outside
  uniform float uEnergy;    // 0..1 scroll velocity
  uniform float uScroll;    // page offset, for parallax
  uniform float uScale;     // cells across

  varying vec2 vUv;

  void main() {
    // aspect-corrected field coordinates
    vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);

    // the lattice drifts slowly, and scrolling shifts it — so the ground feels
    // attached to the page rather than painted behind it
    vec2 q = p * uScale + vec2(uTime * 0.045, uScroll * 1.15 + uTime * 0.02);

    vec2 f = fract(q) - 0.5;

    // grid lines through the cell centres
    float g = min(abs(f.x), abs(f.y));
    float line = smoothstep(0.055, 0.0, g);

    // a node at each crossing
    float d = length(f);
    float node = smoothstep(0.10, 0.02, d);

    // attention falls off smoothly from the pointer
    float toM = length(p - uPointer);
    float focus = exp(-toM * 2.3);

    // one slow ripple travelling out from the pointer
    float ripple = 0.5 + 0.5 * sin(uTime * 0.9 - toM * 7.0);
    focus *= 0.65 + 0.35 * ripple;

    // vignette so the lattice never competes with the type in the centre-left
    float vig = smoothstep(1.05, 0.15, length(p * vec2(0.72, 1.0)));

    float a =
      line * (0.055 + 0.110 * focus + 0.060 * uEnergy) +
      node * (0.090 + 0.420 * focus + 0.090 * uEnergy);
    a *= vig;

    // slate, lifting to a cool steel near the pointer. No accent, ever.
    vec3 col = mix(vec3(0.180, 0.235, 0.298), vec3(0.396, 0.510, 0.612), focus);

    gl_FragColor = vec4(col, clamp(a, 0.0, 0.5));
  }
`;

export default function Field() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "low-power" });
    } catch {
      return; // flat ink ground is a complete fallback
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    const uniforms = {
      uAspect: { value: 1 },
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0.18, 0.05) },
      uEnergy: { value: 0 },
      uScroll: { value: 0 },
      uScale: { value: 26 },
    };

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        uniforms,
        transparent: true,
        depthTest: false,
      })
    );
    scene.add(mesh);

    const resize = () => {
      const w = host.clientWidth || 1;
      const h = host.clientHeight || 1;
      renderer.setSize(w, h, false);
      uniforms.uAspect.value = w / h;
      // fewer, larger cells on a phone so the lattice stays legible
      uniforms.uScale.value = w < 760 ? 15 : 26;
    };
    resize();

    // pointer, damped
    const target = new THREE.Vector2(0.18, 0.05);
    const onPointer = (e) => {
      const r = host.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * uniforms.uAspect.value;
      const y = -((e.clientY - r.top) / r.height - 0.5);
      target.set(x, y);
    };

    // scroll velocity -> energy
    let lastY = window.scrollY;
    let energy = 0;
    const onScroll = () => {
      const y = window.scrollY;
      energy = Math.min(1, energy + Math.abs(y - lastY) / 220);
      lastY = y;
      uniforms.uScroll.value = y / 1400;
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);

    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !raf) raf = requestAnimationFrame(tick);
      },
      { threshold: 0 }
    );
    io.observe(host);

    let raf = 0;
    const clock = new THREE.Clock();

    function tick() {
      raf = visible ? requestAnimationFrame(tick) : 0;
      if (!visible) return;

      uniforms.uTime.value = clock.getElapsedTime();
      uniforms.uPointer.value.lerp(target, 0.055);
      energy *= 0.94;
      uniforms.uEnergy.value = energy;

      renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(tick);

    const onLost = (e) => {
      e.preventDefault();
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      visible = false;
    };
    renderer.domElement.addEventListener("webglcontextlost", onLost);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      renderer.domElement.removeEventListener("webglcontextlost", onLost);
      mesh.geometry.dispose();
      mesh.material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="field" ref={hostRef} aria-hidden="true" />;
}
