import { useEffect } from "react";

const reduce =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Skill bars — ports portfolio.js: each `.bar > i[data-w]` animates its width
 * to `data-w`% the first time it enters the viewport (threshold 0.3).
 */
export function useSkillBars() {
  useEffect(() => {
    const bars = document.querySelectorAll(".bar > i");
    if (!bars.length) return;
    const bo = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const target = e.target.getAttribute("data-w") || "0";
          if (reduce) {
            e.target.style.width = target + "%";
          } else {
            e.target.style.width = "";
            void e.target.offsetWidth; // force reflow, then animate
            e.target.style.width = target + "%";
          }
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.3 }
    );
    bars.forEach((b) => bo.observe(b));
    return () => bo.disconnect();
  }, []);
}
