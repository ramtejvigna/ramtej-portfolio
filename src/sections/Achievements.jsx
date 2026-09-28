import { motion } from "framer-motion";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { ACHIEVEMENTS } from "../data/achievements";
import { EASE } from "../lib/motion";

export default function Achievements() {
  return (
    <Section id="Achievements" className="py-32 sm:py-40">
      <SectionHeading index="06" eyebrow="Recognition" title="Wins that shaped" accent="my mindset." />

      <div className="grid gap-4 md:grid-cols-2">
        {ACHIEVEMENTS.map((ach, i) => (
          <motion.article
            key={ach.title}
            initial={{ opacity: 0, y: 60, rotateX: 12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, delay: i * 0.12, ease: EASE }}
            style={{ transformPerspective: 1200 }}
            className="spotlight glass group relative flex flex-col overflow-hidden rounded-3xl p-8 sm:p-10"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cobalt/30 blur-[80px] transition-opacity duration-700 group-hover:opacity-100 opacity-50" />

            <div className="relative flex items-start justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-snow text-ink transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                {ach.icon}
              </span>
              <div className="text-right">
                <p className="font-mono text-xs text-sky">{ach.year}</p>
                <p className="mt-1 text-xs text-slate">{ach.scale}</p>
              </div>
            </div>

            <p className="relative mt-12 font-mono text-xs uppercase tracking-[0.25em] text-sky">{ach.rank}</p>
            <h3 className="relative mt-3 font-display text-3xl font-semibold tracking-tight text-snow sm:text-4xl">{ach.event}</h3>
            <p className="relative mt-4 text-[15px] leading-relaxed text-mist">{ach.desc}</p>

            <div className="relative mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {ach.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-semibold tracking-tight text-snow">{s.value}</p>
                  <p className="mt-1 text-xs text-slate">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
