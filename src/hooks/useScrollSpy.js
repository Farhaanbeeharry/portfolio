import { useEffect, useState } from "react";

/**
 * Scroll-spy — ports portfolio.js: observes the section elements referenced by
 * the nav's hash links and reports the id currently in view so the matching
 * nav link gets `.active`. Only used on the homepage (sections exist there).
 */
export function useScrollSpy(ids, enabled = true) {
  const [activeId, setActiveId] = useState(ids[0]);
  useEffect(() => {
    if (!enabled) return;
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, [enabled, ids.join(",")]);
  return activeId;
}
