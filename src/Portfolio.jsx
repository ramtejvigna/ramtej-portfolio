import SmoothScroll from "./components/SmoothScroll";
import { scrollToId } from "./lib/scroll";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Coding from "./sections/Coding";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import useActiveSection from "./hooks/useActiveSection";
import { NAV_LINKS } from "./data/nav";

export default function Portfolio() {
  const activeSection = useActiveSection(NAV_LINKS);

  return (
    <div className="relative min-h-screen bg-ink text-snow">
      <SmoothScroll />
      <Preloader />
      <Cursor />
      <Background />
      <ScrollProgress />
      <Navbar activeSection={activeSection} onNav={scrollToId} />

      <main className="relative z-10">
        <Hero onNav={scrollToId} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Coding />
        <Achievements />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer onNav={scrollToId} />
      </div>
    </div>
  );
}
