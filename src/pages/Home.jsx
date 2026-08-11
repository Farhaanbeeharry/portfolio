import AppShell from "../components/AppShell.jsx";
import Footer from "../components/Footer.jsx";
import Overview from "../sections/Overview.jsx";
import Profile from "../sections/Profile.jsx";
import Work from "../sections/Work.jsx";
import Capability from "../sections/Capability.jsx";
import Log from "../sections/Log.jsx";
import Certification from "../sections/Certification.jsx";
import Contact from "../sections/Contact.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { useScrollSpy } from "../hooks/useScrollSpy.js";
import { useDepthScroll, useCardTilt } from "../hooks/useMotion.js";
import { ROUTE_IDS } from "../data/routes.js";

export default function Home() {
  const activeId = useScrollSpy(ROUTE_IDS);
  useReveal();
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
