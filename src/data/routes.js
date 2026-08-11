import { work, certificates } from "./site.js";
import { positionCount } from "./record.jsx";
import { capabilities } from "./capabilities.js";

/**
 * The application's routes. One definition, consumed by the rail (desktop
 * chrome), the tab bar (mobile chrome), the scroll-spy and the command palette,
 * so a route can never appear in one navigator and not another.
 *
 * `count` is real — it is the length of the thing the route leads to.
 */
export const ROUTES = [
  { id: "overview", label: "Overview", short: "Home", icon: "activity", count: null },
  { id: "profile", label: "Profile", short: "Profile", icon: "user", count: null },
  { id: "work", label: "Work", short: "Work", icon: "grid", count: work.length },
  /* The id IS the anchor the status bar prints, so it matches the label rather
     than abbreviating it — "route /stack" under a rail reading "Capability" is a
     small lie in a world whose whole claim is that it reports what is true. */
  { id: "capability", label: "Capability", short: "Stack", icon: "cpu", count: capabilities.length },
  { id: "service-log", label: "Service log", short: "Log", icon: "log", count: positionCount },
  { id: "certification", label: "Certification", short: "Certs", icon: "award", count: certificates.length },
  { id: "contact", label: "Contact", short: "Contact", icon: "mail", count: null },
];

export const ROUTE_IDS = ROUTES.map((r) => r.id);

/** A tab bar holds five comfortably. Profile and Capability stay reachable by
 *  scrolling and by ⌘K; crowding seven tabs onto a phone would shrink every
 *  target below a usable size. */
const IN_TABBAR = ["overview", "work", "service-log", "certification", "contact"];
export const TABS = IN_TABBAR.map((id) => ROUTES.find((r) => r.id === id));
