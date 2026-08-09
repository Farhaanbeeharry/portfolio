import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import { ScrollProgress } from "../components/ScrollProgress.jsx";
import Hero from "../sections/Hero.jsx";
import Marquee from "../sections/Marquee.jsx";
import About from "../sections/About.jsx";
import Skills from "../sections/Skills.jsx";
import Resume from "../sections/Resume.jsx";
import Certificates from "../sections/Certificates.jsx";
import Work from "../sections/Work.jsx";
import { useScrollSpy } from "../hooks/useScrollSpy.js";

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "resume",
  "certificates",
  "work",
  "contact",
];

export default function Home() {
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <>
      <ScrollProgress />
      <Nav variant="home" activeId={activeId} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Resume />
        <Certificates />
        <Work />
      </main>
      <Footer withContact />
    </>
  );
}
