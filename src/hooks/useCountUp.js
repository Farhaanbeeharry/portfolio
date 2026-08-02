import { useEffect } from "react";

const reduce =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Count-up stats — ports portfolio.js: `[data-count]` elements tick from 0 to
 * their target (optional `data-suffix`) over 1500ms with a cubic ease-out, the
 * first time they enter the viewport (threshold 0.5).
 */
export function useCountUp() {
  useEffect(() => {
    const nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;
    const co = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = parseFloat(el.getAttribute("data-count"));
          const suffix = el.getAttribute("data-suffix") || "";
          const dur = 1500;
          if (reduce) {
            el.textContent = target + suffix;
            obs.unobserve(el);
            return;
          }
          let start = null;
          const step = (ts) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = target * eased;
            el.textContent =
              (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          obs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach((n) => co.observe(n));
    return () => co.disconnect();
  }, []);
}
