import { contact } from "../data/site.js";

/** The application's foot note. Navigation lives in the rail and the tab bar, so
 *  this carries only provenance. */
export default function Footer() {
  return (
    <footer className="foot-note">
      <span>© 2026 Farhaan Beeharry</span>
      <span>{contact.location}</span>
      <span style={{ marginLeft: "auto" }}>Built with React, Vite and three.js</span>
    </footer>
  );
}
