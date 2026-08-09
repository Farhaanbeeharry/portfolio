import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

/**
 * ParallaxCover: the project hero image drifts slower than the page as it
 * scrolls through, giving the cover cinematic depth. The image is over-scaled
 * so the drift never exposes an edge. transform only; reduced motion renders a
 * plain static figure.
 */
export function ParallaxCover({ src, alt }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  if (reduce) {
    return (
      <figure className="pp-cover" ref={ref}>
        <img src={src} alt={alt} />
      </figure>
    );
  }

  return (
    <figure className="pp-cover" ref={ref}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.16, willChange: "transform" }}
      />
    </figure>
  );
}
