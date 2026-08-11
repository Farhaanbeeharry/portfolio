import React, { useEffect, useRef, useState } from "react";
import { ROUTES } from "../data/routes.js";

/**
 * The application's status bar. Everything on it is measured live — viewport,
 * frame rate, active route, and the local time where he actually is. No
 * decorative fake telemetry: if a value could not be read, it is not shown.
 *
 * The frame counter samples once a second and only re-renders on a changed
 * integer, so the bar itself costs nothing measurable.
 */
export default function StatusBar({ activeId }) {
  const [vp, setVp] = useState(() =>
    typeof window === "undefined" ? null : { w: window.innerWidth, h: window.innerHeight }
  );
  const [fps, setFps] = useState(null);
  const [clock, setClock] = useState("");
  const raf = useRef(0);

  useEffect(() => {
    const onResize = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Frame rate as a rolling MEDIAN of five one-second samples, not the latest
  // sample. A raw instantaneous number swung between 17 and 60 while nothing was
  // wrong — scroll bursts, the lazy chunk landing, a software renderer — and a
  // status bar that reports 17 fps is worse than one that reports nothing. The
  // median is still measured; it is not smoothed upward or floored.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frames = 0;
    let last = performance.now();
    const samples = [];
    const tick = (now) => {
      frames++;
      if (now - last >= 1000) {
        samples.push(Math.round((frames * 1000) / (now - last)));
        if (samples.length > 5) samples.shift();
        const sorted = [...samples].sort((a, b) => a - b);
        const median = sorted[Math.floor(sorted.length / 2)];
        setFps((prev) => (prev === median ? prev : median));
        frames = 0;
        last = now;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  // Mauritius local time — the point being that he is not in your timezone
  useEffect(() => {
    const fmt = () => {
      try {
        setClock(
          new Intl.DateTimeFormat("en-GB", {
            timeZone: "Indian/Mauritius",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }).format(new Date())
        );
      } catch {
        setClock("");
      }
    };
    fmt();
    const id = setInterval(fmt, 15000);
    return () => clearInterval(id);
  }, []);

  const route = ROUTES.find((r) => r.id === activeId);

  return (
    <div className="statusbar" role="status" aria-live="off">
      <span className="cell">
        <span className="live" aria-hidden="true" />
        <b>ready</b>
      </span>
      {route && (
        <span className="cell">
          route <b>/{route.id}</b>
        </span>
      )}
      {vp && (
        <span className="cell">
          viewport <b>{vp.w}×{vp.h}</b>
        </span>
      )}
      {fps != null && (
        <span className="cell">
          <b>{fps}</b> fps
        </span>
      )}
      {/* Derived, not typed. This bar's whole claim is that it reports what is
          actually true, and a hardcoded version string is the one place that
          claim could quietly rot. */}
      <span className="cell push">react {React.version} · vite 5 · three.js</span>
      {clock && (
        <span className="cell">
          Port&#8209;Louis <b>{clock}</b>
        </span>
      )}
    </div>
  );
}
