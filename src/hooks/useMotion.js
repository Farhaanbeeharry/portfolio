import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const clamp01 = (n) => (n < 0 ? 0 : n > 1 ? 1 : n);
const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The 3D scroll on the Overview route.
 *
 * The route is a real perspective container, and the layers inside it sit at
 * different depths. As the route scrolls away, each `[data-depth]` element gets
 * `--p` (0 at rest → 1 fully departed) and CSS translates it in Z by a different
 * amount, so the identity block, the NOW panel and the lattice separate in
 * space rather than sliding as one flat sheet.
 *
 * One rAF-batched pass per scroll event; reads first, writes second.
 */
export function useDepthScroll() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || reduced()) return;

    let els = [];
    let frame = 0;

    const collect = () => {
      els = Array.from(document.querySelectorAll("[data-depth]"));
    };

    const update = () => {
      frame = 0;
      const measured = [];
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200) {
          measured.push([el, 1]);
          continue;
        }
        if (r.top > window.innerHeight) continue;
        measured.push([el, clamp01(-r.top / (r.height * 0.85))]);
      }
      for (const [el, p] of measured) el.style.setProperty("--p", p.toFixed(4));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    collect();
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [location.pathname]);
}

/**
 * Pointer-tracked 3D tilt on the work cards.
 *
 * One delegated listener per deck rather than one per card — with 21 cards the
 * per-card version costs 21 listeners and 21 rects for no benefit. Only the card
 * under the pointer carries transform state, and it is cleared the moment the
 * pointer moves to another card or leaves the deck, so nothing is left tilted.
 */
export function useCardTilt() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || reduced()) return;
    if (window.matchMedia("(hover: none)").matches) return; // touch: no pointer to track

    const decks = Array.from(document.querySelectorAll("[data-tilt]"));
    if (!decks.length) return;

    const MAX = 7; // degrees; beyond this a card stops reading as a surface
    let current = null;

    const clear = () => {
      if (!current) return;
      current.style.removeProperty("--rx");
      current.style.removeProperty("--ry");
      current = null;
    };

    const onMove = (e) => {
      const card = e.target.closest?.(".card");
      if (!card) return clear();
      if (card !== current) clear();
      current = card;
      const r = card.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty("--ry", `${(nx * MAX * 2).toFixed(2)}deg`);
      card.style.setProperty("--rx", `${(-ny * MAX * 2).toFixed(2)}deg`);
    };

    decks.forEach((d) => {
      d.addEventListener("pointermove", onMove, { passive: true });
      d.addEventListener("pointerleave", clear);
    });

    return () => {
      decks.forEach((d) => {
        d.removeEventListener("pointermove", onMove);
        d.removeEventListener("pointerleave", clear);
      });
      clear();
    };
  }, [location.pathname]);
}
