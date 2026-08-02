import { useEffect, useState } from "react";

/**
 * Navbar scrolled state — ports portfolio.js/project.js: add `scrolled` once
 * the page is scrolled past 30px. Returned as boolean so the Nav can apply the
 * class in JSX.
 */
export function useNavScroll() {
  const [scrolled, setScrolled] = useState(
    typeof window !== "undefined" && window.scrollY > 30
  );
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}
