import { motion } from "framer-motion";
import { SKILLS, SKILL_ICONS } from "../data/skills";
import { EASE } from "../lib/motion";

// The largest category spans two columns so the grid fills evenly.
const WIDE = new Set(["Cloud & Infra"]);

export default function SkillsArsenal() {
  const categories = Object.keys(SKILLS);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((cat, i) => (
        <motion.div
          key={cat}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease: EASE }}
          className={`spotlight glass group relative flex flex-col overflow-hidden rounded-3xl p-6 ${WIDE.has(cat) ? "sm:col-span-2" : ""}`}
        >
          <div className="mb-8 flex items-start justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sky transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:border-azure group-hover:bg-azure group-hover:text-snow">
              {SKILL_ICONS[cat]}
            </span>
            <span className="font-mono text-xs text-slate">
              {String(i + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
            </span>
          </div>

          <h3 className="font-display text-xl font-semibold tracking-tight text-snow">{cat}</h3>
          <p className="mb-5 mt-1 text-xs text-slate">{SKILLS[cat].length} tools</p>

          <div className="mt-auto flex flex-wrap gap-2">
            {SKILLS[cat].map((skill, si) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + si * 0.04, duration: 0.5, ease: EASE }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] font-medium text-mist transition-colors duration-300 hover:border-azure/60 hover:bg-azure/15 hover:text-snow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
