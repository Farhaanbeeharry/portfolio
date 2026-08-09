import { motion, useReducedMotion } from "motion/react";

/**
 * Reveal: measured rise into place from an already-near-visible default.
 * Emil curve, transform+opacity only, fires once on enter. `delay` staggers
 * grouped items (30-80ms steps). Reduced motion renders it static.
 */
export function Reveal({ children, delay = 0, y = 16, className, as = "div", ...rest }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className} {...rest}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * DrawRule: a dimension line that draws across from its left origin as it
 * enters view. The page's one authored motion signature.
 */
export function DrawRule({ className = "dim", delay = 0.15, children }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay }}
      style={{ transformOrigin: "left center" }}
    >
      {children}
    </motion.div>
  );
}
