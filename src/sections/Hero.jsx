import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import NeuralCanvas from "../components/NeuralCanvas";
import Button from "../components/Button";
import Marquee from "../components/Marquee";
import { SplitText } from "../components/Reveal";
import useTypewriter from "../hooks/useTypewriter";
import { EASE, INTRO_DELAY } from "../lib/motion";

const D = INTRO_DELAY;

const MARQUEE_ITEMS = ["Backend Systems", "Serverless on AWS", "Full-Stack Products", "AI Automation", "API Design", "Performance Engineering"];

const HERO_STATS = [
  { value: "3", label: "Internships" },
  { value: "35+", label: "Projects shipped" },
  { value: "10+", label: "Hackathon wins & mentoring" },
];

function RotatingBadge() {
  const text = "AVAILABLE FOR WORK • OPEN TO FREELANCE • ";
  return (
    <div className="relative h-32 w-32 sm:h-36 sm:w-36">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-snow" style={{ fontSize: 15.5, letterSpacing: 3.2, fontFamily: "var(--font-mono)" }}>
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-[26%] flex items-center justify-center rounded-full bg-cobalt text-snow shadow-[0_0_40px_rgba(59,130,246,0.55)]">
        <ArrowUpRight size={26} />
      </div>
    </div>
  );
}

export default function Hero({ onNav }) {
  const ref = useRef(null);
  const [exploded, setExploded] = useState(false);
  const typewriter = useTypewriter();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  useEffect(() => {
    const hero = ref.current;
    if (!hero) return;
    const obs = new IntersectionObserver(([entry]) => setExploded(!entry.isIntersecting), { threshold: 0.6 });
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="Home" ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <NeuralCanvas explode={exploded} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_40%,rgba(29,78,216,0.28),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pt-32 pb-16 sm:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
          <motion.div style={{ y: contentY, opacity: contentOpacity }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: D, duration: 0.8, ease: EASE }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-4 backdrop-blur"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-azure opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-azure" />
              </span>
              <span className="font-mono text-xs tracking-wide text-mist">Available for new projects · 2026</span>
            </motion.div>

            <h1 className="font-display text-[clamp(2.7rem,5.8vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-snow">
              <SplitText text="Hi, I'm Ramtej." animateOnMount delay={D + 0.1} />
              <br />
              <SplitText text="I build" animateOnMount delay={D + 0.3} />{" "}
              <SplitText text="fast, reliable" animateOnMount delay={D + 0.42} wordClassName="serif-accent text-gradient pr-[0.06em]" />{" "}
              <SplitText text="products that scale." animateOnMount delay={D + 0.55} />
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: D + 1, duration: 0.8 }}
              className="mt-8 flex items-center gap-3 font-mono text-sm sm:text-base"
            >
              <span className="text-slate">~/role</span>
              <span className="text-sky">{typewriter}</span>
              <span className="-ml-2 h-5 w-[2px] bg-azure animate-blink" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: D + 1.1, duration: 0.8, ease: EASE }}
              className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
            >
              Full-stack &amp; backend engineer turning ideas into production systems, from serverless
              Lambdas and ACID-safe databases to polished product experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: D + 1.25, duration: 0.8, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button onClick={() => onNav("Projects")}>View my work</Button>
              <Button variant="ghost" onClick={() => onNav("Contact")} icon={<Mail size={15} />}>
                Get in touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: portraitY, scale: portraitScale }}
            initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: D + 0.4, duration: 1.2, ease: EASE }}
            className="relative mx-auto hidden w-full max-w-[400px] lg:block"
          >
            <div className="absolute -inset-10 rounded-full bg-cobalt/30 blur-[90px]" />
            <div className="spotlight relative aspect-[4/5] overflow-hidden rounded-[2rem] glass p-2">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <img src="/hero.webp" alt="Vigna Ramtej" className="h-full w-full object-cover grayscale-[35%] contrast-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-cobalt/20 mix-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-sky">Based in</p>
                  <p className="font-display text-xl font-semibold text-snow">Visakhapatnam, India</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -left-14">
              <RotatingBadge />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -right-8 bottom-28 rounded-2xl px-4 py-3"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate">Latency cut</p>
              <p className="font-display text-2xl font-semibold text-snow">
                -61<span className="text-azure">%</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: D + 1.4, duration: 1 }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8"
      >
        <div className="grid grid-cols-3 gap-4 border-t border-white/10 py-6">
          {HERO_STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl font-semibold text-snow sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs text-slate sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 border-y border-white/5 bg-night/60 py-5 backdrop-blur">
        <Marquee
          items={MARQUEE_ITEMS.map((m) => (
            <span key={m} className="font-display text-2xl font-medium tracking-tight text-snow/80 sm:text-3xl">
              {m}
            </span>
          ))}
        />
      </div>

      <button
        onClick={() => onNav("About")}
        className="absolute bottom-28 right-8 z-10 hidden flex-col items-center gap-3 xl:flex"
        aria-label="Scroll to About"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate [writing-mode:vertical-rl]">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="text-sky">
          <ArrowDown size={16} />
        </motion.span>
      </button>
    </section>
  );
}
