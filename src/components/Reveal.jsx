import { motion } from "framer-motion";

import { EASE } from "../lib/motion";

// Fades + lifts children into view once.
export function Reveal({ children, delay = 0, y = 40, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

// Word-by-word masked slide-up, for headlines.
export function SplitText({ text, className = "", wordClassName = "", delay = 0, stagger = 0.06, animateOnMount = false }) {
  const words = text.split(" ");
  const trigger = animateOnMount
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, amount: 0.5 } };

  return (
    <motion.span className={className} initial="hidden" {...trigger} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em]" aria-hidden>
          <motion.span
            className={`inline-block ${wordClassName}`}
            variants={{
              hidden: { y: "110%", rotate: 4 },
              show: { y: 0, rotate: 0, transition: { duration: 0.9, ease: EASE, delay: delay + i * stagger } },
            }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
}
