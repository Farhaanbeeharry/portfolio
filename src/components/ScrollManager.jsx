import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Route-aware scroll management for the SPA:
 *  - hash present (e.g. /#about, or a project link to /#work): scroll that
 *    section into view (smooth), matching the old anchor-jump behaviour.
 *  - new path, no hash (e.g. opening a project page): jump to top.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Wait a tick so the target section is mounted before scrolling.
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo(0, 0);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
