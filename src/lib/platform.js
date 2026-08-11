import { useEffect, useState } from "react";

/**
 * Host platform detection, in one place.
 *
 * It was previously inlined in AppShell only, so the top bar correctly showed
 * "Ctrl" on Windows while the hero tip and the 404 page hardcoded "⌘" — a
 * Windows visitor saw both conventions on one screen.
 *
 * Detection order matters:
 *  1. `navigator.userAgentData.platform` — the only non-deprecated source, but
 *     Safari and Firefox do not implement it.
 *  2. `navigator.platform` — deprecated and frozen, but still the most reliable
 *     value in the browsers that lack the above.
 *  3. the user-agent string, last, because it is the easiest to spoof.
 *
 * The iPadOS case is deliberate: since iPadOS 13 an iPad reports itself as
 * "MacIntel"/"Macintosh", so it is caught by the Mac branch — which is correct
 * here, because an iPad with a keyboard uses Command too.
 */
const detectApple = () => {
  if (typeof navigator === "undefined") return false;
  const uaData = navigator.userAgentData?.platform;
  if (uaData) return /mac|ios/i.test(uaData);
  if (navigator.platform) return /mac|iphone|ipad|ipod/i.test(navigator.platform);
  return /mac os x|iphone|ipad|ipod/i.test(navigator.userAgent || "");
};

export const isApple = detectApple();

/** What to print on a keycap. */
export const MOD_KEY = isApple ? "⌘" : "Ctrl";

/** What to say in an accessible name, where a glyph would be read aloud badly. */
export const MOD_NAME = isApple ? "Command" : "Control";

/**
 * Whether a physical keyboard is plausible.
 *
 * A phone has no Ctrl or Command key, so telling a touch visitor to "press ⌘K"
 * is instructions for hardware they do not have. Fine pointer + hover is the
 * closest honest proxy, and it stays live because a tablet can gain a keyboard
 * mid-session.
 */
const KEYBOARD_QUERY = "(hover: hover) and (pointer: fine)";

export function useHasKeyboard() {
  const [has, setHas] = useState(
    () => typeof window !== "undefined" && window.matchMedia(KEYBOARD_QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(KEYBOARD_QUERY);
    const sync = () => setHas(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return has;
}
