import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Heart } from "lucide-react";
import NeuralCanvas from "../components/NeuralCanvas";
import useLikes from "../hooks/useLikes";
import { EASE, INTRO_DELAY } from "../lib/motion";

const D = INTRO_DELAY;
const RECLINE_POSE = "/ram-pose.webp";
const MEDITATION_POSE = "/meditation-pose.webp";
const NAME_SIZE = "text-[23vw] lg:text-[clamp(8rem,17.5vw,16rem)]";

const BURST = Array.from({ length: 8 }, (_, i) => (i / 8) * Math.PI * 2);

function HeartPill() {
  const { count, liked, like } = useLikes();
  const [bursts, setBursts] = useState([]);

  const onLike = () => {
    if (liked) return;
    const id = Date.now();
    setBursts((b) => [...b, id]);
    setTimeout(() => setBursts((b) => b.filter((x) => x !== id)), 900);
    like();
  };

  return (
    <motion.button
      type="button"
      onClick={onLike}
      whileTap={liked ? undefined : { scale: 0.92 }}
      aria-label={liked ? "You liked this portfolio" : "Like this portfolio"}
      aria-pressed={liked}
      className={`glass relative inline-flex items-center gap-2.5 rounded-full py-2 pl-2.5 pr-4 transition-colors ${
        liked ? "" : "hover:border-rose-400/40"
      }`}
    >
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06]">
        <motion.span key={liked ? "on" : "off"} initial={liked ? { scale: 0.3 } : false} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500, damping: 12 }} className="flex">
          <Heart size={14} className={liked ? "fill-rose-500 text-rose-500" : "text-mist"} />
        </motion.span>
        <AnimatePresence>
          {bursts.map((id) =>
            BURST.map((angle, i) => (
              <motion.span
                key={`${id}-${i}`}
                className="pointer-events-none absolute text-rose-400"
                initial={{ x: 0, y: 0, scale: 0.4, opacity: 1 }}
                animate={{ x: Math.cos(angle) * 26, y: Math.sin(angle) * 26, scale: 1, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Heart size={8} className="fill-current" />
              </motion.span>
            ))
          )}
        </AnimatePresence>
      </span>
      <span className="font-mono text-xs text-mist">
        <span className="tabular-nums text-snow">{count == null ? "—" : count.toLocaleString()}</span>{" "}
        {liked ? "thanks ♡" : "like this?"}
      </span>
    </motion.button>
  );
}

// One line of the name, sliding up out of a mask on load.
function NameLine({ children, delay, className = "" }) {
  return (
    <span className="block overflow-hidden pb-[0.04em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ delay: D + delay, duration: 1.1, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// Illustrated pose placed around the name, settling in after the name lines land.
function Pose({ delay, className = "", ...props }) {
  return (
    <motion.img
      draggable={false}
      onError={(e) => (e.currentTarget.style.display = "none")}
      initial={{ opacity: 0, y: "-18%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: D + delay, duration: 0.9, ease: EASE }}
      className={`pointer-events-none absolute ${className}`}
      {...props}
    />
  );
}

export default function Hero({ onNav }) {
  const ref = useRef(null);
  const [exploded, setExploded] = useState(false);

  // Scroll: the two name lines drift apart.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const firstX = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const lastX = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Pointer: subtle depth on the name.
  const px = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 80, damping: 20 });
  const nameShiftX = useTransform(sx, (v) => v * -14);

  const onPointerMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
  };

  useEffect(() => {
    const hero = ref.current;
    if (!hero) return;
    const obs = new IntersectionObserver(([entry]) => setExploded(!entry.isIntersecting), { threshold: 0.6 });
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="Home"
      ref={ref}
      onPointerMove={onPointerMove}
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <NeuralCanvas explode={exploded} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_50%_50%,rgba(29,78,216,0.32),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-8 pt-28 sm:px-8">
        {/* Name */}
        <div className="relative flex flex-1 items-center justify-center">
          <h1 className={`relative w-full select-none font-display ${NAME_SIZE} font-bold uppercase leading-[0.8] tracking-[-0.035em]`} aria-label="Vigna Ramtej">
            <motion.span style={{ x: firstX }} className="relative z-0 block">
              <motion.span style={{ x: nameShiftX }} className="block">
                <NameLine delay={0.1} className="text-snow">
                  Vigna
                </NameLine>
              </motion.span>
            </motion.span>{" "}
            <motion.span style={{ x: lastX }} className="relative z-20 block text-right">
              <motion.span style={{ x: nameShiftX }} className="relative block">
                {/* Lies in the gap after the first name, resting on the last name */}
                <Pose
                  src={RECLINE_POSE}
                  alt="Illustration of Vigna Ramtej reclining"
                  width={1100}
                  height={437}
                  fetchPriority="high"
                  delay={0.7}
                  className="bottom-[calc(100%+0.05em)] right-0 w-[0.95em] lg:right-[0.22em] lg:w-[1.34em]"
                />
                {/* Sits to the left of the last name; there is no gap there below lg */}
                <Pose
                  src={MEDITATION_POSE}
                  alt="Illustration of Vigna Ramtej meditating"
                  width={704}
                  height={702}
                  loading="lazy"
                  delay={0.85}
                  className="bottom-[0.07em] right-[3.86em] hidden w-[0.72em] lg:block"
                />
                <NameLine delay={0.25} className="text-veil">
                  Ramtej
                </NameLine>
              </motion.span>
            </motion.span>
          </h1>
        </div>

        <div className="pointer-events-none absolute -bottom-8 left-1/2 z-[15] h-40 w-screen -translate-x-1/2 bg-gradient-to-t from-ink via-ink/70 to-transparent" />

        {/* Footer row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: D + 1.1, duration: 0.8, ease: EASE }}
          className="relative z-30 mt-8 flex flex-col items-center gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="text-center sm:text-left">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-sky">Full-stack &amp; Backend Engineer</p>
            <p className="mt-1.5 text-sm text-mist">Based in Visakhapatnam, India</p>
          </div>

          <button
            type="button"
            onClick={() => onNav("About")}
            className="hidden flex-col items-center gap-2 text-slate transition-colors hover:text-snow md:flex"
            aria-label="Scroll to About"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="text-sky">
              <ArrowDown size={15} />
            </motion.span>
          </button>

          <HeartPill />
        </motion.div>
      </motion.div>
    </section>
  );
}
