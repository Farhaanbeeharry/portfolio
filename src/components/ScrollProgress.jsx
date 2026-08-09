import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/**
 * ScrollProgress: a 2px amber hairline pinned to the top of the viewport that
 * fills left-to-right with document scroll. Spring-smoothed so it glides rather
 * than tracking every jitter. Under reduced motion it maps scroll directly with
 * no spring. transform (scaleX) only.
 */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });
  return (
    <motion.div
      className="scrollbar"
      style={{ scaleX: reduce ? scrollYProgress : smooth }}
      aria-hidden="true"
    />
  );
}
