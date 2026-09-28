import { useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { NAV_LINKS } from "../data/nav";
import Magnetic from "./Magnetic";

import { EASE_IN_OUT as EASE } from "../lib/motion";

export default function Navbar({ activeSection, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 400 && !menuOpen);
    setScrolled(y > 40);
  });

  const go = (link) => {
    setMenuOpen(false);
    onNav(link);
  };

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[80] px-4 sm:px-8"
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 ${
            scrolled ? "glass" : "border border-transparent"
          }`}
        >
          <button onClick={() => go("Home")} className="group flex items-center gap-2.5 pl-2" aria-label="Home">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-snow font-display text-sm font-bold text-ink transition-transform duration-500 group-hover:rotate-[360deg]">
              VR
            </span>
            <span className="hidden sm:block font-display text-sm font-semibold tracking-tight text-snow">
              Vigna Ramtej<span className="text-azure">.</span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.filter((l) => l !== "Home").map((link) => {
              const active = activeSection === link;
              return (
                <button
                  key={link}
                  onClick={() => go(link)}
                  className={`relative px-4 py-2 font-display text-sm font-medium transition-colors duration-300 ${
                    active ? "text-ink" : "text-mist hover:text-snow"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-snow"
                      transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{link}</span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Magnetic className="hidden sm:inline-block">
              <button
                onClick={() => go("Contact")}
                className="group relative overflow-hidden rounded-full bg-cobalt px-5 py-2.5 font-display text-sm font-semibold text-snow"
              >
                <span className="absolute inset-0 translate-y-full rounded-full bg-snow transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative transition-colors duration-500 group-hover:text-ink">Let&apos;s talk</span>
              </button>
            </Magnetic>

            <button
              className="lg:hidden relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 h-px w-5 bg-snow transition-all duration-300 ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-px w-5 bg-snow transition-all duration-300 ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="fixed inset-0 z-[70] flex flex-col justify-end bg-navy px-6 pb-12 pt-28"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <div key={link} className="overflow-hidden">
                  <motion.button
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ delay: 0.25 + i * 0.05, duration: 0.6, ease: EASE }}
                    onClick={() => go(link)}
                    className={`flex items-baseline gap-4 font-display text-5xl font-semibold tracking-tight ${
                      activeSection === link ? "text-snow" : "text-snow/40"
                    }`}
                  >
                    <span className="font-mono text-xs text-sky">0{i + 1}</span>
                    {link}
                  </motion.button>
                </div>
              ))}
            </nav>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 font-mono text-xs text-mist"
            >
              vignaramtej46@gmail.com
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
