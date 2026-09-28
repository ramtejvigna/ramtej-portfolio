import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/nav";

export default function Navbar({ activeSection, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (link) => {
    onNav(link);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">

          <button onClick={() => go("Home")} className="flex items-center gap-2">
            <span
              className="text-xl font-bold px-2 py-0.5 rounded border"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#00f5ff",
                borderColor: "#00f5ff55",
                background: "rgba(0,245,255,0.06)",
                letterSpacing: "0.05em",
              }}
            >
              ~/RT
            </span>
          </button>

          <nav
            className="hidden md:flex items-center gap-0.5 p-1 rounded-full"
            style={{
              background: "rgba(5,8,16,0.78)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0,245,255,0.13)",
              boxShadow: "0 0 0 1px rgba(0,245,255,0.04) inset, 0 4px 24px rgba(0,0,0,0.5)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => go(link)}
                className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-150"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: activeSection === link ? "#050810" : "#64748b",
                  zIndex: 1,
                }}
              >
                {activeSection === link && (
                  <motion.div
                    layoutId="pill-active"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "#00f5ff", zIndex: -1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.38 }}
                  />
                )}
                {link}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            style={{ color: "#00f5ff" }}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "rgba(5,8,16,0.97)", backdropFilter: "blur(24px)" }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5"
              style={{ color: "#00f5ff" }}
            >
              <X size={26} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.055, duration: 0.28 }}
                  onClick={() => go(link)}
                  className="text-4xl font-bold"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: activeSection === link ? "#00f5ff" : "#64748b",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {link}
                </motion.button>
              ))}
            </div>
            <p style={{ position: "absolute", bottom: 32, color: "#1e293b", fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>
              tap link to navigate · × to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
