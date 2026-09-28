import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GitBranch } from "lucide-react";
import CountUp from "./CountUp";
import Button from "./Button";
import { PROJECTS } from "../data/projects";

function useIsDesktop() {
  const query = "(min-width: 1024px)";
  const [match, setMatch] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatch(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return match;
}

function ProjectCard({ proj, i, total, progress, stacked }) {
  const targetScale = 1 - (total - i) * 0.04;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);

  return (
    <div className="lg:sticky lg:h-[88vh]" style={{ top: stacked ? 96 + i * 26 : undefined }}>
      <motion.article
        style={{ scale: stacked ? scale : 1 }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="spotlight relative origin-top overflow-hidden rounded-[2rem] border border-white/10 bg-night shadow-[0_-20px_80px_-20px_rgba(0,0,0,0.9)]"
      >
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          {/* Copy */}
          <div className="flex flex-col p-8 sm:p-12">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-sky">
                {proj.id} / {String(total).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <h3 className="mt-8 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-snow sm:text-5xl">
              {proj.name}
            </h3>
            <p className="mt-3 serif-accent text-xl text-sky sm:text-2xl">{proj.subtitle}</p>

            <ul className="mt-8 flex flex-col gap-3.5">
              {proj.bullets.map((b, bi) => (
                <li key={bi} className="flex gap-4 text-[15px] leading-relaxed text-mist">
                  <span className="mt-[0.6em] h-px w-4 shrink-0 bg-azure" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {proj.stack.map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-mist">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-10 pt-2 lg:mt-auto">
              <Button href={proj.github} variant="ghost" icon={<GitBranch size={15} />}>
                View source
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative min-h-[320px] overflow-hidden border-t border-white/10 bg-gradient-to-br from-cobalt via-navy to-ink lg:border-l lg:border-t-0">
            <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-dashed border-sky/25"
            />
            <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-azure/40 blur-[90px]" />

            <span className="pointer-events-none absolute right-6 top-4 select-none font-display text-[10rem] font-bold leading-none tracking-tighter text-white/[0.07] sm:text-[13rem]">
              {proj.id}
            </span>

            <div className="relative flex h-full flex-col justify-end gap-3 p-8 sm:p-10">
              {proj.stats.map((stat, si) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + si * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-ink/40 px-5 py-4 backdrop-blur-md"
                >
                  <span className="text-sm text-snow/70">{stat.label}</span>
                  <span className="font-display text-2xl font-semibold tracking-tight text-snow sm:text-3xl">
                    <CountUp target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectShowcase() {
  const ref = useRef(null);
  const stacked = useIsDesktop();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <div ref={ref} className="flex flex-col gap-8 lg:gap-0">
      {PROJECTS.map((proj, i) => (
        <ProjectCard key={proj.id} proj={proj} i={i} total={PROJECTS.length} progress={scrollYProgress} stacked={stacked} />
      ))}
    </div>
  );
}
