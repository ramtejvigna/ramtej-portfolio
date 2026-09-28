import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";
import CountUp from "./CountUp";
import { PROJECTS, STACK_COLORS } from "../data/projects";

export default function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const proj = PROJECTS[active];

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col lg:grid lg:grid-cols-[1fr_280px]"
      style={{
        border: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(5,8,22,0.72)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.55)",
      }}
    >
      <div
        className="relative overflow-hidden p-8 lg:p-10 border-b lg:border-b-0 lg:border-r"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.34 }}
            className="relative"
          >
            <div
              className="absolute -top-2 right-0 pointer-events-none select-none"
              style={{
                fontSize: 140,
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 900,
                color: proj.color,
                opacity: 0.04,
                lineHeight: 1,
              }}
            >
              {proj.id}
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span
                style={{
                  fontSize: 10,
                  color: proj.color,
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                project_{proj.id}
              </span>
              <span
                style={{
                  flex: 1,
                  height: 1,
                  background: `linear-gradient(90deg, ${proj.color}44, transparent)`,
                }}
              />
            </div>

            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(26px, 4vw, 38px)",
                fontWeight: 800,
                color: "#f0f4ff",
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              {proj.name}
            </h3>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                color: proj.color,
                marginBottom: 24,
                opacity: 0.8,
              }}
            >
              {proj.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mb-7">
              {proj.stack.map((s) => (
                <span
                  key={s}
                  className={`text-xs px-2.5 py-1 rounded-lg border ${STACK_COLORS[s] || "bg-zinc-800 text-zinc-300 border-zinc-600"}`}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 mb-7">
              {proj.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 32,
                      fontWeight: 800,
                      color: proj.color,
                      lineHeight: 1,
                    }}
                  >
                    <CountUp target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </span>
                  <span style={{ fontSize: 11, color: "#475569", fontFamily: "'Inter', sans-serif" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <ul className="flex flex-col gap-3 mb-8">
              {proj.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                  <span style={{ color: proj.color, flexShrink: 0, marginTop: 2 }}>▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div
              className="flex items-center justify-between pt-5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  color: proj.color,
                  fontFamily: "'JetBrains Mono', monospace",
                  padding: "7px 16px",
                  borderRadius: 8,
                  border: `1px solid ${proj.color}33`,
                  background: `${proj.color}0d`,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${proj.color}1f`;
                  e.currentTarget.style.borderColor = `${proj.color}66`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${proj.color}0d`;
                  e.currentTarget.style.borderColor = `${proj.color}33`;
                }}
              >
                <GitBranch size={13} /> GitHub <ExternalLink size={11} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="flex flex-col p-6"
        style={{ background: "rgba(5,8,22,0.45)" }}
      >
        <span
          style={{
            fontSize: 9,
            color: "#64748b",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 12,
            display: "block",
          }}
        >
          / project_index
        </span>

        <div className="flex flex-col gap-2">
          {PROJECTS.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  padding: "14px 12px",
                  borderRadius: 12,
                  background: isActive ? `${p.color}12` : "transparent",
                  border: `1px solid ${isActive ? p.color + "30" : "transparent"}`,
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.22s",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = "transparent";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      fontSize: 10,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: isActive ? p.color : "#64748b",
                      fontWeight: 700,
                      transition: "color 0.22s",
                    }}
                  >
                    {p.id}
                  </span>
                  {isActive && (
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: p.color,
                        display: "inline-block",
                        boxShadow: `0 0 7px ${p.color}`,
                      }}
                    />
                  )}
                </div>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: isActive ? "#f0f4ff" : "#475569",
                    fontFamily: "'Space Grotesk', sans-serif",
                    transition: "color 0.22s",
                  }}
                >
                  {p.name}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: isActive ? p.color : "#64748b",
                    fontFamily: "'JetBrains Mono', monospace",
                    transition: "color 0.22s",
                    opacity: isActive ? 0.75 : 1,
                  }}
                >
                  {p.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="mt-auto pt-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span style={{ fontSize: 10, color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>
            {PROJECTS.length} repos · {[...new Set(PROJECTS.flatMap((p) => p.stack))].length} technologies
          </span>
        </div>
      </div>
    </div>
  );
}
