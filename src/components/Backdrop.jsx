/** Studio backdrop: a single warm ambient glow anchored top-right plus a fine
 *  film grain, both fixed behind all content. Decorative, aria-hidden. Grain is
 *  removed under prefers-reduced-motion (CSS). */
export default function Backdrop() {
  return (
    <>
      <div className="ambient" aria-hidden="true"></div>
      <div className="grain" aria-hidden="true"></div>
    </>
  );
}
