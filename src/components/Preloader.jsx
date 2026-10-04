import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { EASE_IN_OUT as EASE } from "../lib/motion";

// Typed greeting, split into styled runs. `br` forces a line break before the run.
const SEGMENTS = [
  { text: "Hey,", className: "text-snow" },
  { text: "Welcome to my ", className: "text-snow", br: true },
  { text: "world", className: "serif-accent text-gradient pr-[0.06em]" },
  { text: ".....", className: "text-azure" },
];
const OFFSETS = SEGMENTS.map((_, i) => SEGMENTS.slice(0, i).reduce((n, s) => n + s.text.length, 0));
const TOTAL = OFFSETS.at(-1) + SEGMENTS.at(-1).text.length;
const DOTS_FROM = OFFSETS.at(-1);

const START_DELAY = 250;
const CHAR_MS = 50;
const DOT_MS = 110; // the trailing dots type slower, like someone thinking
const HOLD_MS = 450;

export default function Preloader() {
  const [typed, setTyped] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    let timeout;
    const step = (n) => {
      setTyped(n);
      if (n < TOTAL) timeout = setTimeout(() => step(n + 1), n >= DOTS_FROM ? DOT_MS : CHAR_MS);
      else timeout = setTimeout(() => setDone(true), HOLD_MS);
    };
    timeout = setTimeout(() => step(1), START_DELAY);
    return () => {
      clearTimeout(timeout);
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex flex-col justify-between bg-ink px-6 py-8 sm:px-12 sm:py-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="flex items-center justify-between font-mono text-xs tracking-[0.2em] uppercase text-slate">
            <span>Vigna Ramtej</span>
            <span>Portfolio &copy;{new Date().getFullYear()}</span>
          </div>

          <p
            className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-semibold leading-[1.05] tracking-tight"
            aria-label="Hey, Welcome to my world"
          >
            {SEGMENTS.map((seg, i) => {
              const shown = seg.text.slice(0, Math.max(0, typed - OFFSETS[i]));
              return (
                <span key={i}>
                  {seg.br && <br />}
                  <span className={seg.className}>{shown}</span>
                </span>
              );
            })}
            <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-azure animate-blink" aria-hidden />
          </p>

          <div className="flex items-center justify-between gap-6 font-mono text-xs text-slate">
            <div className="h-px flex-1 overflow-hidden bg-white/10">
              <div className="h-full bg-gradient-to-r from-cobalt to-sky transition-[width] duration-100" style={{ width: `${(typed / TOTAL) * 100}%` }} />
            </div>
            <span>loading portfolio…</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
