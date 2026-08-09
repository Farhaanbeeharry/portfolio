import { useMemo } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";

const SPRING = { stiffness: 170, damping: 18, mass: 0.5 };

/**
 * TiltCard: pointer-driven 3D tilt. The outer element carries CSS `perspective`
 * (via `className`, e.g. .work-cell / .hero-visual which set it), and the inner
 * `as` element rotates toward the cursor on two axes with a spring, so it feels
 * weighted rather than snapping. Children marked with translateZ in CSS lift in
 * that 3D space. Springs decay back to flat on leave.
 *
 * `as` may be a string tag or a component (e.g. react-router Link); it is wired
 * for Motion once via motion.create. Reduced motion renders a static card.
 */
export function TiltCard({
  children,
  className,
  innerClassName,
  as = "div",
  max = 9,
  perspective = 1000,
  style,
  ...rest
}) {
  const reduce = useReducedMotion();

  const px = useMotionValue(0); // -0.5 .. 0.5
  const py = useMotionValue(0);
  const sx = useSpring(px, SPRING);
  const sy = useSpring(py, SPRING);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);

  const Inner = useMemo(
    () => (typeof as === "string" ? motion[as] || motion.div : motion.create(as)),
    [as]
  );

  if (reduce) {
    const Tag = as;
    return (
      <div className={className} style={style}>
        <Tag className={innerClassName} {...rest}>
          {children}
        </Tag>
      </div>
    );
  }

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      className={className}
      style={{ perspective, ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <Inner className={innerClassName} style={{ rotateX, rotateY }} {...rest}>
        {children}
      </Inner>
    </div>
  );
}
