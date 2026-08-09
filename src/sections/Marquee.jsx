import { marqueeItems } from "../data/site.js";

/** Toolchain legend: a slow measured strip of the stack. Decorative, doubled
 *  track for a seamless loop; pauses under prefers-reduced-motion (CSS). */
export default function Marquee() {
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {marqueeItems.map((s, i) => (
          <span key={`a${i}`}>{s}</span>
        ))}
        {marqueeItems.map((s, i) => (
          <span key={`b${i}`}>{s}</span>
        ))}
      </div>
    </div>
  );
}
