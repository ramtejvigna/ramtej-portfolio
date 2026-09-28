import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { EASE_IN_OUT as EASE } from "../lib/motion";


export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    const duration = 1600;
    let frame;
    let timeout;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
      else timeout = setTimeout(() => setDone(true), 250);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
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

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-snow"
            >
              Engineering <span className="serif-accent text-sky">experiences</span>
            </motion.p>
          </div>

          <div className="flex items-end justify-between gap-6">
            <div className="h-px flex-1 bg-white/10 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cobalt to-sky" style={{ width: `${count}%` }} />
            </div>
            <span className="font-display text-7xl sm:text-9xl font-bold leading-none tabular-nums text-snow">
              {count}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
