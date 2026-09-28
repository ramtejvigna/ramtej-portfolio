import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS, SKILL_ICONS, SKILL_ACCENTS } from "../data/skills";

export default function SkillsArsenal() {
  const [activeCat, setActiveCat] = useState(Object.keys(SKILLS)[0]);
  const catKeys = Object.keys(SKILLS);
  const skills = SKILLS[activeCat];
  const accent = SKILL_ACCENTS[activeCat];
  const totalSkills = Object.values(SKILLS).flat().length;

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: "1px solid rgba(0,245,255,0.1)",
        background: "rgba(5,8,16,0.88)",
        backdropFilter: "blur(20px)",
        boxShadow: [
          "inset 0 1px 0 rgba(255,255,255,0.06)",
          "0 0 0 1px rgba(255,255,255,0.03)",
          "0 24px 64px rgba(0,0,0,0.6)",
          "0 0 100px rgba(0,245,255,0.025)",
        ].join(", "),
      }}
    >
      <div
        className="flex items-center gap-3 px-5 py-3.5"
        style={{ background: "rgba(255,255,255,0.025)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex gap-1.5">
          {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
            <span key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "inline-block" }} />
          ))}
        </div>
        <span style={{ marginLeft: 8, fontSize: 11, color: "#2d4a6b", fontFamily: "'JetBrains Mono', monospace" }}>
          vigna@arsenal — module_registry
        </span>
        <span style={{ marginLeft: "auto", fontSize: 10, color: "#1e3a5f", fontFamily: "'JetBrains Mono', monospace" }}>
          {catKeys.length} modules · {totalSkills} pkgs indexed
        </span>
      </div>

      <div className="flex flex-col lg:flex-row" style={{ minHeight: 400 }}>

        <div
          className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible shrink-0 lg:w-52"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="hidden lg:flex items-center px-4 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <span style={{ fontSize: 9, color: "#1e3a5f", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              / modules
            </span>
          </div>

          {catKeys.map((cat, i) => {
            const acc = SKILL_ACCENTS[cat];
            const isActive = cat === activeCat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className="flex items-center gap-2.5 px-4 py-3.5 shrink-0 lg:w-full text-left relative"
                style={{
                  background: isActive ? acc.glow : "transparent",
                  borderLeft: `2.5px solid ${isActive ? acc.color : "transparent"}`,
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  transition: "background 0.18s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.025)"; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
              >
                <span style={{ fontSize: 10, color: isActive ? acc.color : "#1e3a5f", fontFamily: "'JetBrains Mono', monospace", minWidth: 18 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ color: isActive ? acc.color : "#2d4a6b", flexShrink: 0 }}>
                  {SKILL_ICONS[cat]}
                </span>
                <span
                  className="hidden sm:block"
                  style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: isActive ? acc.color : "#64748b", fontWeight: isActive ? 600 : 400, flex: 1, whiteSpace: "nowrap" }}
                >
                  {cat}
                </span>
                <span
                  style={{
                    fontSize: 10, padding: "1px 5px", borderRadius: 4, marginLeft: "auto",
                    background: isActive ? acc.pillBg : "rgba(255,255,255,0.03)",
                    color: isActive ? acc.color : "#1e3a5f",
                    fontFamily: "'JetBrains Mono', monospace",
                    border: `1px solid ${isActive ? acc.pillBorder : "rgba(255,255,255,0.05)"}`,
                    flexShrink: 0,
                  }}
                >
                  {SKILLS[cat].length}
                </span>
              </button>
            );
          })}
        </div>

        <div className="hidden lg:block w-px shrink-0" style={{ background: "rgba(255,255,255,0.06)" }} />

        <div
          className="flex-1 min-w-0 flex flex-col"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.022) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex flex-col flex-1"
            >
              <div
                className="flex items-center gap-4 px-6 py-4"
                style={{
                  borderBottom: `1px solid ${accent.border}`,
                  background: `linear-gradient(90deg, ${accent.glow} 0%, transparent 60%)`,
                }}
              >
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                  style={{ background: accent.glow, border: `1px solid ${accent.border}`, color: accent.color, boxShadow: `0 0 20px ${accent.glow}` }}
                >
                  {SKILL_ICONS[activeCat]}
                </div>
                <div className="flex flex-col">
                  <span style={{ fontSize: 15, fontFamily: "'Space Grotesk', sans-serif", color: accent.color, fontWeight: 700, letterSpacing: "0.03em" }}>
                    {activeCat.toUpperCase().replace(/ /g, "_")}
                  </span>
                  <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "#64748b" }}>
                    {skills.length} pkgs · status: stable
                  </span>
                </div>
                <div className="ml-auto flex items-center gap-2 shrink-0">
                  <motion.span
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ width: 7, height: 7, borderRadius: "50%", background: "#22d3ee", display: "inline-block", boxShadow: "0 0 9px rgba(34,211,238,0.9)" }}
                  />
                  <span style={{ fontSize: 10, color: "#22d3ee", fontFamily: "'JetBrains Mono', monospace" }}>ACTIVE</span>
                </div>
              </div>

              <div className="p-6 grid sm:grid-cols-2 gap-2.5 flex-1">
                {skills.map((skill, pi) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: pi * 0.055, duration: 0.22 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      transition: "background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = accent.pillBg;
                      e.currentTarget.style.borderColor = accent.pillBorder;
                      e.currentTarget.style.boxShadow = accent.pillGlow;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <motion.span
                      animate={{ opacity: [0.55, 1, 0.55] }}
                      transition={{ duration: 2.5 + pi * 0.35, repeat: Infinity }}
                      style={{ width: 5, height: 5, borderRadius: "50%", background: accent.color, flexShrink: 0, boxShadow: `0 0 6px ${accent.color}` }}
                    />
                    <span style={{ fontSize: 13, fontFamily: "'Inter', sans-serif", color: "#cbd5e1", fontWeight: 500, flex: 1 }}>
                      {skill}
                    </span>
                    <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#1e3a5f" }}>
                      ✓ ready
                    </span>
                  </motion.div>
                ))}
              </div>

              <div
                className="flex items-center px-6 py-2.5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(5,8,16,0.5)" }}
              >
                <span style={{ fontSize: 10, color: "#1e3a5f", fontFamily: "'JetBrains Mono', monospace" }}>
                  &gt;_ {activeCat.toLowerCase().replace(/ /g, "_")}.module loaded
                </span>
                <span style={{ marginLeft: "auto", fontSize: 10, color: "#1e3a5f", fontFamily: "'JetBrains Mono', monospace" }}>
                  prod-ready
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
