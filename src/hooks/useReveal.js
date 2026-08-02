import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const reduce =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Reveal-on-scroll. Ports portfolio.js: elements with `.reveal` gain `.in`
 * when they enter the viewport (once). Re-runs on route change so freshly
 * mounted pages animate in. With reduced motion, everything is shown at once.
 */
export function useReveal() {
  const location = useLocation();
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal:not(.in)");
    if (reduce) {
      reveals.forEach((el) => el.classList.add("in"));
      return;
    }
    const ro = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    reveals.forEach((el) => ro.observe(el));
    return () => ro.disconnect();
  }, [location.pathname]);
}
