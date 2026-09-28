import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, GraduationCap, Trophy, MapPin, ArrowUpRight } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import ScrollHighlight from "../components/ScrollHighlight";
import CountUp from "../components/CountUp";
import { EASE } from "../lib/motion";

const STORY =
  "I thrive where *performance* engineering meets *product* thinking, migrating monoliths to serverless, designing ACID-safe schemas, and crafting interfaces people actually *enjoy* using.";

const SOCIALS = [
  { href: "https://github.com/ramtejvigna", icon: GitBranch, label: "GitHub", handle: "@ramtejvigna" },
  { href: "https://linkedin.com/in/vignaramtej", icon: Link2, label: "LinkedIn", handle: "in/vignaramtej" },
  { href: "mailto:vignaramtej46@gmail.com", icon: Mail, label: "Email", handle: "vignaramtej46@gmail.com" },
];

const card = (i) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, delay: i * 0.1, ease: EASE },
});

export default function About() {
  return (
    <Section id="About" className="py-32 sm:py-40">
      <SectionHeading index="01" eyebrow="About" title="The engineer behind" accent="the build." />

      <ScrollHighlight
        text={STORY}
        className="mb-24 max-w-5xl font-display text-[clamp(1.6rem,3.6vw,3rem)] font-medium leading-[1.2] tracking-[-0.02em] text-snow"
      />

      <div className="grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-6">
        {/* Profile */}
        <motion.div {...card(0)} className="spotlight glass relative overflow-hidden rounded-3xl p-7 md:col-span-4 md:row-span-2">
          <div className="flex h-full flex-col justify-between gap-10">
            <div className="flex items-center gap-5">
              <div className="relative">
                <img src="/DP.webp" alt="Vigna Ramtej" className="h-20 w-20 rounded-2xl object-cover ring-1 ring-white/15" />
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-night bg-azure" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-snow">Vigna Ramtej Telagarapu</h3>
                <p className="mt-1 font-mono text-sm text-sky">Full Stack &amp; Backend Engineer</p>
              </div>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-mist">
              Pursuing a B.Tech in <span className="text-snow">AI &amp; Data Science</span> at Sagi Ramakrishnam Raju
              Engineering College (2022–2026). Currently shipping AI automation and compliance features as a
              Junior Software Engineer at <span className="text-snow">CoComply AI</span>.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Open to work", "Backend + AI/ML", "Remote friendly", "Freelance"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-mist">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CGPA */}
        <motion.div {...card(1)} className="spotlight relative overflow-hidden rounded-3xl bg-cobalt p-7 md:col-span-2">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky/30 blur-3xl" />
          <GraduationCap className="relative text-snow/80" size={22} />
          <p className="relative mt-6 font-display text-6xl font-semibold tracking-tight text-snow">
            <CountUp target={8.56} decimals={2} />
          </p>
          <p className="relative mt-1 text-sm text-snow/75">CGPA · B.Tech AI &amp; DS</p>
        </motion.div>

        {/* Location */}
        <motion.div {...card(2)} className="spotlight glass relative overflow-hidden rounded-3xl p-7 md:col-span-2">
          <MapPin className="text-sky" size={22} />
          <p className="mt-6 font-display text-2xl font-semibold tracking-tight text-snow">Visakhapatnam</p>
          <p className="mt-1 text-sm text-mist">Andhra Pradesh, India · IST (UTC+5:30)</p>
        </motion.div>

        {/* Hackathons */}
        <motion.div {...card(3)} className="spotlight glass relative overflow-hidden rounded-3xl p-7 md:col-span-3">
          <Trophy className="text-sky" size={22} />
          <p className="mt-6 text-base leading-relaxed text-mist">
            Won <span className="font-semibold text-snow">Hackoverflow 2K24</span> (national level) and led my team to{" "}
            <span className="font-semibold text-snow">Best Junior Team</span> at Smart India Hackathon 2023, out of{" "}
            <span className="text-sky">250+ competing teams</span>.
          </p>
        </motion.div>

        {/* Socials */}
        <motion.div {...card(4)} className="glass relative overflow-hidden rounded-3xl p-3 md:col-span-3">
          <div className="flex h-full flex-col">
            {SOCIALS.map(({ href, icon: Icon, label, handle }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex flex-1 items-center gap-4 rounded-2xl px-4 py-3 transition-colors duration-300 hover:bg-white/[0.04]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-sky transition-all duration-300 group-hover:border-azure group-hover:bg-azure group-hover:text-snow">
                  <Icon size={16} />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-sm font-semibold text-snow">{label}</span>
                  <span className="block truncate text-xs text-slate">{handle}</span>
                </span>
                <ArrowUpRight size={18} className="text-slate transition-all duration-300 group-hover:rotate-45 group-hover:text-snow" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
