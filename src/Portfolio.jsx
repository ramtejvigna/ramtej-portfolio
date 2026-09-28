import GlobalStyles from "./components/GlobalStyles";
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

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Portfolio() {
  const activeSection = useActiveSection(NAV_LINKS);

  return (
    <div style={{ background: "#050810", minHeight: "100vh" }}>
      <GlobalStyles />

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <ScrollProgress />
      <Navbar activeSection={activeSection} onNav={scrollToSection} />

      <Hero onNav={scrollToSection} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Coding />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
