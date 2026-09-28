import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import NeuralCanvas from "../components/NeuralCanvas";
import useTypewriter from "../hooks/useTypewriter";

const HERO_NAME = "Vigna Ramtej";

export default function Hero({ onNav }) {
  const [exploded, setExploded] = useState(false);
  const typewriter = useTypewriter();

  const heroMouseX = useMotionValue(0);
  const heroMouseY = useMotionValue(0);
  const springHeroX = useSpring(heroMouseX, { stiffness: 55, damping: 22 });
  const springHeroY = useSpring(heroMouseY, { stiffness: 55, damping: 22 });

  useEffect(() => {
    const hero = document.getElementById("Home");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        setExploded(!entry.isIntersecting);
      },
      { threshold: 0.98 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  const nameLetters = HERO_NAME.split("");

  return (
    <section
      id="Home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        heroMouseX.set(((e.clientX - rect.left - rect.width / 2) / rect.width) * 12);
        heroMouseY.set(((e.clientY - rect.top - rect.height / 2) / rect.height) * -8);
      }}
      onMouseLeave={() => { heroMouseX.set(0); heroMouseY.set(0); }}
    >
      <NeuralCanvas explode={exploded} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1, background: "radial-gradient(ellipse 65% 50% at 50% 55%, rgba(0,245,255,0.07) 0%, transparent 70%)" }}
      />

      {[
        { top: "5%",    left: "2.5%",  borderTop: "1px solid rgba(0,245,255,0.22)",    borderLeft: "1px solid rgba(0,245,255,0.22)",    borderRadius: "4px 0 0 0" },
        { top: "5%",    right: "2.5%", borderTop: "1px solid rgba(0,245,255,0.22)",    borderRight: "1px solid rgba(0,245,255,0.22)",   borderRadius: "0 4px 0 0" },
        { bottom: "9%", left: "2.5%",  borderBottom: "1px solid rgba(0,245,255,0.22)", borderLeft: "1px solid rgba(0,245,255,0.22)",    borderRadius: "0 0 0 4px" },
        { bottom: "9%", right: "2.5%", borderBottom: "1px solid rgba(0,245,255,0.22)", borderRight: "1px solid rgba(0,245,255,0.22)",   borderRadius: "0 0 4px 0" },
      ].map((style, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.12, duration: 0.5, ease: "easeOut" }}
          style={{ position: "absolute", width: 28, height: 28, pointerEvents: "none", zIndex: 4, ...style }}
        />
      ))}

      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden"
        style={{ height: "52%", perspective: "600px", perspectiveOrigin: "50% 0%", zIndex: 2 }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "300%",
            left: "-100%",
            height: "280%",
            transform: "rotateX(75deg)",
            transformOrigin: "bottom center",
            backgroundImage: [
              "linear-gradient(rgba(0,245,255,0.07) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(0,245,255,0.07) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "70px 70px",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)",
            maskImage: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: "linear-gradient(90deg, transparent 5%, rgba(0,245,255,0.22) 35%, rgba(124,58,237,0.22) 65%, transparent 95%)",
            boxShadow: "0 0 28px rgba(0,245,255,0.12), 0 2px 40px rgba(124,58,237,0.08)",
          }}
        />
      </div>

      {[
        { text: "> backend_architect", style: { top: "26%",    left: "6%"  }, delay: 0.8, dy: -10 },
        { text: "> available: true",   style: { top: "22%",    right: "6%" }, delay: 1.2, dy: -8  },
        { text: "> full_stack: true",  style: { bottom: "28%", left: "7%"  }, delay: 1.0, dy: 8   },
        { text: "> shipped: prod",     style: { bottom: "24%", right: "6%" }, delay: 1.4, dy: 10  },
      ].map(({ text, style, delay, dy }) => (
        <motion.div
          key={text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay, duration: 0.9 }}
          className="absolute hidden lg:block pointer-events-none"
          style={{ zIndex: 5, ...style }}
        >
          <motion.span
            animate={{ y: [0, dy, 0] }}
            transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut" }}
            style={{
              display: "block",
              fontSize: 11,
              color: "rgba(0,245,255,0.42)",
              fontFamily: "'JetBrains Mono', monospace",
              background: "rgba(0,245,255,0.04)",
              border: "1px solid rgba(0,245,255,0.1)",
              padding: "5px 12px",
              borderRadius: 8,
              backdropFilter: "blur(6px)",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}
          >
            {text}
          </motion.span>
        </motion.div>
      ))}

      <motion.div
        style={{
          rotateY: springHeroX,
          rotateX: springHeroY,
          transformPerspective: 1200,
        }}
        className="relative z-10 flex flex-col items-center text-center px-4 gap-6 pt-16"
      >
        <div
          className="absolute pointer-events-none"
          style={{
            inset: "-48px -72px",
            borderRadius: 56,
            background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,245,255,0.045) 0%, transparent 70%)",
            zIndex: -1,
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm uppercase tracking-widest"
          style={{ color: "#00f5ff", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.22em" }}
        >
          Chapter 01 // Boot Sequence
        </motion.p>

        <h1
          className="text-5xl sm:text-7xl font-bold leading-tight"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {nameLetters.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.045 }}
              style={{
                color: ch === " " ? "transparent" : "#f0f4ff",
                display: "inline-block",
                textShadow: ch !== " "
                  ? "2px 2px 0 rgba(0,245,255,0.18), 4px 4px 0 rgba(0,245,255,0.1), 6px 6px 0 rgba(0,245,255,0.05), 8px 8px 22px rgba(0,245,255,0.1)"
                  : "none",
              }}
            >
              {ch === " " ? " " : ch}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="h-8 flex items-center gap-0"
        >
          <span
            className="text-xl sm:text-2xl font-medium"
            style={{ color: "#00f5ff", fontFamily: "'JetBrains Mono', monospace" }}
          >
            {typewriter}
          </span>
          <span
            className="text-xl sm:text-2xl font-medium ml-0.5"
            style={{ color: "#7c3aed", animation: "pulse 1s step-end infinite" }}
          >
            |
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="max-w-lg text-base sm:text-lg text-center"
          style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
        >
          Hello, I'm Ramtej. This is the story of how I turn ideas into reliable systems.
          <br />
          From serverless Lambdas to fast, cinematic product experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <button
            onClick={() => onNav("Projects")}
            className="px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #00f5ff22, #00f5ff11)",
              border: "1px solid #00f5ff88",
              color: "#00f5ff",
              fontFamily: "'Inter', sans-serif",
              boxShadow: "0 0 24px rgba(0,245,255,0.2), 0 0 0 1px rgba(0,245,255,0.06) inset",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 40px rgba(0,245,255,0.45), 0 0 0 1px rgba(0,245,255,0.12) inset"; e.currentTarget.style.background = "rgba(0,245,255,0.14)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 24px rgba(0,245,255,0.2), 0 0 0 1px rgba(0,245,255,0.06) inset"; e.currentTarget.style.background = "linear-gradient(135deg, #00f5ff22, #00f5ff11)"; }}
          >
            View My Work
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <span className="text-xs" style={{ color: "#475569", fontFamily: "'JetBrains Mono', monospace" }}>scroll</span>
        <div className="bounce-arrow" style={{ color: "#00f5ff" }}>
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
}
