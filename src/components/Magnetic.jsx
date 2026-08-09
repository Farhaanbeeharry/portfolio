import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

const SPRING = { stiffness: 200, damping: 15, mass: 0.4 };

/**
 * Magnetic: the wrapped element drifts a fraction of the way toward the cursor
 * while hovered, then springs home on leave. Decorative pointer physics for
 * primary CTAs; reduced motion renders a plain inline wrapper. Keep `strength`
 * subtle (0.2-0.4) so it reads as attraction, not a jump.
 */
export function Magnetic({ children, strength = 0.3, className = "magnetic" }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);

  if (reduce) return <span className={className}>{children}</span>;

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.span>
  );
}
