import { marqueeItems } from "../data/site.js";

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
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
