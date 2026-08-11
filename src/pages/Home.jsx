import AppShell from "../components/AppShell.jsx";
import Footer from "../components/Footer.jsx";
import Overview from "../sections/Overview.jsx";
import Profile from "../sections/Profile.jsx";
import Work from "../sections/Work.jsx";
import Capability from "../sections/Capability.jsx";
import Log from "../sections/Log.jsx";
import Certification from "../sections/Certification.jsx";
import Contact from "../sections/Contact.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";
import { useScrollSpy } from "../hooks/useScrollSpy.js";
import { useDepthScroll, useCardTilt } from "../hooks/useMotion.js";
import { ROUTE_IDS } from "../data/routes.js";

export default function Home() {
  /* Without this the title was only ever set by the case pages, so returning
     home from a project left the tab showing that project's name — the SPA never
     reloads, so nothing restored the document title. */
  usePageMeta(
    "Farhaan Beeharry",
    "Farhaan Beeharry, Software & Mobile Engineer specialising in Flutter, full-stack web and mobile application development."
  );
  const activeId = useScrollSpy(ROUTE_IDS);
  useDepthScroll();
  useCardTilt();

  return (
    <AppShell activeId={activeId} home>
      <main className="main">
        <Overview />
        <Profile />
        <Work />
        <Capability />
        <Log />
        <Certification />
        <Contact />
        <Footer />
      </main>
    </AppShell>
  );
}
