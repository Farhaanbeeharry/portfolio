import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Reveal: measured rise into place from an already-near-visible default.
 * Emil curve, transform+opacity only, fires once on enter. `delay` staggers
 * grouped items (30-80ms steps). Reduced motion renders it static.
 */
export function Reveal({ children, delay = 0, y = 18, className, as = "div", ...rest }) {
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
      transition={{ duration: 0.62, ease: [0.23, 1, 0.32, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * TextReveal: the page's signature headline motion. Splits a string into words
 * and rises each into place from just below, staggered left-to-right, so the
 * line reads as type being set rather than a generic fade. transform/opacity
 * only; no clipping mask (descenders stay intact under tight display leading).
 *
 * Pass a plain string. `as` sets the wrapper tag (h1/h2/span). Wrap words in
 * *asterisks* to give them the accent-italic emphasis, e.g. "I build *products*".
 */
export function TextReveal({ text, as = "h1", className, delay = 0, stagger = 0.055, y = 22, ...rest }) {
  const reduce = useReducedMotion();
  const Tag = as;
  const tokens = tokenise(text);

  if (reduce) {
    return (
      <Tag className={className} {...rest}>
        {tokens.map((t, i) => (
          <Fragment key={i}>
            <span className={t.em ? "em" : undefined}>{t.word}</span>{" "}
          </Fragment>
        ))}
      </Tag>
    );
  }

  const MotionTag = motion[as] || motion.h1;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      {...rest}
    >
      {tokens.map((t, i) => (
        <Fragment key={i}>
          <motion.span
            className={t.em ? "em" : undefined}
            style={{ display: "inline-block", willChange: "transform" }}
            variants={{
              hidden: { opacity: 0, y },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.62, ease: [0.23, 1, 0.32, 1], delay: delay + i * stagger },
              },
            }}
          >
            {t.word}
          </motion.span>{" "}
        </Fragment>
      ))}
    </MotionTag>
  );
}

// "I build *digital products*" -> [{word:'I'},{word:'build'},{word:'digital',em:true},{word:'products',em:true}]
function tokenise(text) {
  const out = [];
  const parts = String(text).split(/(\*[^*]+\*)/g).filter(Boolean);
  for (const part of parts) {
    const em = part.startsWith("*") && part.endsWith("*");
    const clean = em ? part.slice(1, -1) : part;
    for (const word of clean.split(/\s+/).filter(Boolean)) {
      out.push({ word, em });
    }
  }
  return out;
}
