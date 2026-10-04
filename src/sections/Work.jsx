import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronLeft, ChevronRight, FolderOpen, GitBranch, Globe, Rocket } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import CountUp from "../components/CountUp";
import Button from "../components/Button";
import { PROJECTS } from "../data/projects";
import { EXPERIENCES } from "../data/experiences";
import { FREELANCE } from "../data/freelance";
import { EASE } from "../lib/motion";

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const TABS = [
  { key: "projects", label: "Projects", icon: FolderOpen, count: PROJECTS.length },
  { key: "freelance", label: "Freelance", icon: Rocket, count: FREELANCE.length },
  { key: "experience", label: "Experience", icon: Briefcase, count: EXPERIENCES.length },
];

// Tabs that render as a folder grid; experience uses the list view instead.
const GRID_ITEMS = { projects: PROJECTS, freelance: FREELANCE };

const pane = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

function Bullets({ items }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((b, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-mist">
          <span className="mt-[0.6em] h-px w-3.5 shrink-0 bg-azure" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Metrics({ items }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((m) => (
        <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 sm:px-4">
          <p className="font-display text-xl font-semibold tracking-tight text-snow sm:text-3xl">
            <CountUp target={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />
          </p>
          <p className="mt-1 text-[11px] leading-snug text-slate sm:text-xs">{m.label}</p>
        </div>
      ))}
    </div>
  );
}

function BackButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-6 inline-flex items-center gap-1 rounded-md px-2 py-1 font-mono text-xs text-slate transition-colors hover:bg-white/[0.05] hover:text-snow"
    >
      <ChevronLeft size={14} /> {label}
    </button>
  );
}

function ProjectGrid({ items, onOpen }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((p, i) => {
        const Icon = p.icon;
        return (
          <motion.button
            key={p.slug}
            type="button"
            onClick={() => onOpen(p.slug)}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
            className="group flex flex-col items-center gap-3 rounded-xl p-4 text-center transition-colors hover:bg-white/[0.04] sm:p-5"
          >
            <span
              className={`flex h-14 w-16 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105 ${p.tint}`}
            >
              <Icon size={24} />
            </span>
            <span>
              <span className="serif-accent block text-[15px] leading-tight text-snow/85 group-hover:text-snow">{p.name}</span>
              <span className="mt-1 block text-[11px] leading-snug text-slate">{p.subtitle}</span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

function ProjectDetail({ project, backLabel, onBack }) {
  const Icon = project.icon;
  return (
    <div>
      <BackButton label={backLabel} onClick={onBack} />
      <div className="flex items-start gap-4">
        <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${project.tint}`}>
          <Icon size={24} />
        </span>
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-snow sm:text-3xl">{project.name}</h3>
          <p className="serif-accent mt-1 text-lg text-sky">{project.subtitle}</p>
          {project.client && <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-slate">{project.client}</p>}
        </div>
      </div>
      {project.stats && (
        <div className="mt-7">
          <Metrics items={project.stats} />
        </div>
      )}
      <div className="mt-7">
        <Bullets items={project.bullets} />
      </div>
      <div className="mt-7 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-mist">
            {s}
          </span>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        {project.url && (
          <Button href={project.url} icon={<Globe size={15} />}>
            Visit live site
          </Button>
        )}
        {project.github && (
          <Button href={project.github} variant="ghost" icon={<GitBranch size={15} />}>
            View source
          </Button>
        )}
      </div>
    </div>
  );
}

function ExperienceList({ onOpen }) {
  return (
    <div>
      <div className="hidden grid-cols-[1.6fr_1fr_1fr] gap-4 border-b border-white/10 px-3 pb-2 font-mono text-[10px] uppercase tracking-wider text-slate sm:grid">
        <span>Name</span>
        <span>Period</span>
        <span>Kind</span>
      </div>
      {EXPERIENCES.map((exp, i) => (
        <motion.button
          key={exp.company}
          type="button"
          onClick={() => onOpen(slugify(exp.company))}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.07, duration: 0.45, ease: EASE }}
          className="group grid w-full grid-cols-[1fr_auto] items-center gap-4 rounded-lg px-3 py-4 text-left transition-colors hover:bg-white/[0.04] sm:grid-cols-[1.6fr_1fr_1fr]"
        >
          <span className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-cobalt/40 to-navy font-display text-xs font-bold text-snow">
              {exp.company.split(/[\s.]/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("")}
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-semibold text-snow">{exp.company}</span>
              <span className="block truncate text-xs text-slate">{exp.role}</span>
            </span>
          </span>
          <span className="hidden font-mono text-xs text-mist sm:block">{exp.period}</span>
          <span className="flex items-center justify-end gap-2 sm:justify-between">
            <span className="hidden truncate text-xs text-slate sm:block">{exp.tag}</span>
            <ChevronRight size={15} className="shrink-0 text-slate transition-transform group-hover:translate-x-0.5 group-hover:text-snow" />
          </span>
          <span className="col-span-2 -mt-2 pl-[52px] font-mono text-[11px] text-slate sm:hidden">{exp.period}</span>
        </motion.button>
      ))}
    </div>
  );
}

function ExperienceDetail({ exp, onBack }) {
  return (
    <div>
      <BackButton label="experience" onClick={onBack} />
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">{exp.period}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-snow sm:text-3xl">{exp.company}</h3>
      <p className="mt-1 text-base text-mist">{exp.role}</p>
      <span className="mt-3 inline-block rounded-full border border-white/10 px-3 py-1 text-xs text-slate">{exp.tag}</span>
      <div className="mt-7">
        <Metrics items={exp.metrics} />
      </div>
      <div className="mt-7">
        <Bullets items={exp.bullets} />
      </div>
    </div>
  );
}

export default function Work() {
  const [tab, setTab] = useState("projects");
  const [open, setOpen] = useState(null);

  const gridItems = GRID_ITEMS[tab];
  const project = gridItems?.find((p) => p.slug === open);
  const exp = tab === "experience" && EXPERIENCES.find((e) => slugify(e.company) === open);
  const path = `~/ramtej/workspace/${tab}${open ? `/${open}` : ""}`;
  const itemCount = TABS.find((t) => t.key === tab).count;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const switchTab = (key) => {
    setTab(key);
    setOpen(null);
  };

  return (
    <Section id="Work" className="py-32 sm:py-40">
      <SectionHeading
        index="03"
        eyebrow="Work"
        title="Projects, freelance &"
        accent="experience."
        intro="Less feature lists, more problems, systems and measurable impact. Open a folder to dig in."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="glass mx-auto max-w-5xl overflow-hidden rounded-2xl"
      >
        {/* Title bar */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-white/[0.02] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28ca42]" />
          </div>
          <span className="truncate font-mono text-[11px] text-slate">{path}</span>
          <span className="flex items-center gap-2 font-mono text-[10px] text-mist">
            Live
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#28ca42] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#28ca42]" />
            </span>
          </span>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar (tab strip on mobile) */}
          <aside className="flex shrink-0 gap-1 border-b border-white/10 p-3 md:w-48 md:flex-col md:border-b-0 md:border-r">
            <p className="mb-2 hidden px-2 font-mono text-[9px] uppercase tracking-wider text-slate md:block">Favorites</p>
            {TABS.map(({ key, label, icon: Icon, count }) => {
              const active = tab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => switchTab(key)}
                  className={`relative flex flex-1 items-center gap-2 rounded-md px-2.5 py-2 text-left text-xs transition-colors md:flex-none ${
                    active ? "font-medium text-snow" : "text-mist hover:bg-white/[0.04] hover:text-snow"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="work-tab"
                      className="absolute inset-0 rounded-md bg-azure/20 ring-1 ring-azure/30"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.45 }}
                    />
                  )}
                  <Icon size={14} className="relative text-sky" />
                  <span className="relative flex-1">{label}</span>
                  <span className="relative font-mono text-[10px] text-slate">{count}</span>
                </button>
              );
            })}
          </aside>

          {/* Main pane */}
          <div className="flex min-h-[460px] flex-1 flex-col">
            <div className="flex-1 p-4 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div key={`${tab}/${open ?? ""}`} {...pane}>
                  {project ? (
                    <ProjectDetail project={project} backLabel={tab} onBack={() => setOpen(null)} />
                  ) : exp ? (
                    <ExperienceDetail exp={exp} onBack={() => setOpen(null)} />
                  ) : gridItems ? (
                    <ProjectGrid items={gridItems} onOpen={setOpen} />
                  ) : (
                    <ExperienceList onOpen={setOpen} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 font-mono text-[10px] text-slate">
              <span>{open ? "esc to go back" : `${itemCount} items · click to open`}</span>
              <span className="hidden sm:inline">utf-8 · main</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
