import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import CountUp from "../components/CountUp";
import { EXPERIENCES } from "../data/experiences";
import { EASE } from "../lib/motion";

export default function Experience() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.7", "end 0.6"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <Section id="Experience" className="py-32 sm:py-40">
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="Real products,"
        accent="real constraints."
        intro="Three roles, shipped to production, with numbers that speak for themselves."
      />

      <div ref={listRef} className="relative">
        {/* Timeline rail */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 md:left-[calc(33.333%-0.5px)]" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-sky via-azure to-cobalt md:left-[calc(33.333%-0.5px)]"
        />

        <div className="flex flex-col gap-20">
          {EXPERIENCES.map((exp, i) => (
            <div key={exp.company} className="relative grid gap-8 pl-10 md:grid-cols-3 md:gap-16 md:pl-0">
              {/* Node */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-azure bg-ink md:left-[calc(33.333%-7.5px)]"
              >
                <span className="h-[5px] w-[5px] rounded-full bg-sky shadow-[0_0_12px_#93b4ff]" />
              </motion.span>

              {/* Meta */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="md:pr-12 md:text-right md:sticky md:top-32 md:self-start"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">{exp.period}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-snow sm:text-4xl">{exp.company}</h3>
                <p className="mt-2 text-base text-mist">{exp.role}</p>
                <p className="mt-4 inline-block rounded-full border border-white/10 px-3 py-1 text-xs text-slate">{exp.tag}</p>
              </motion.div>

              {/* Body */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
                className="spotlight glass relative overflow-hidden rounded-3xl p-7 sm:p-9 md:col-span-2"
              >
                <span className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[9rem] font-bold leading-none text-white/[0.03]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative grid grid-cols-3 gap-4 border-b border-white/10 pb-7">
                  {exp.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-3xl font-semibold tracking-tight text-snow sm:text-5xl">
                        <CountUp target={m.value} suffix={m.suffix} />
                      </p>
                      <p className="mt-1 text-xs text-slate sm:text-sm">{m.label}</p>
                    </div>
                  ))}
                </div>

                <ul className="relative mt-7 flex flex-col gap-4">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-4 text-[15px] leading-relaxed text-mist">
                      <span className="mt-[0.6em] h-px w-4 shrink-0 bg-azure" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
