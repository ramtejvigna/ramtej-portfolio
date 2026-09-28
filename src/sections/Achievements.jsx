import { motion } from "framer-motion";
import Section from "../components/Section";
import { ACHIEVEMENTS } from "../data/achievements";

export default function Achievements() {
  return (
    <Section id="Achievements" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div style={{ position: "absolute", top: "10%", left: "10%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-5xl mx-auto relative">

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span style={{ display: "inline-block", width: 28, height: 1, background: "rgba(0,245,255,0.6)" }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: "#00f5ff", fontFamily: "'JetBrains Mono', monospace" }}>
              Chapter 07 // Battle Record
            </p>
            <span style={{ display: "inline-block", flex: 1, height: 1, background: "linear-gradient(90deg, rgba(0,245,255,0.3), transparent)" }} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span style={{ color: "#f0f4ff" }}>Wins That</span>{" "}
            <span style={{ background: "linear-gradient(90deg, #00f5ff 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Shaped My Mindset
            </span>
          </h2>
        </div>

        <div className="flex flex-col">
          {ACHIEVEMENTS.map((ach, i) => (
            <div key={ach.title}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -44 : 44 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.65, delay: i * 0.12 }}
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${ach.color}09 0%, rgba(5,8,16,0.75) 55%, rgba(5,8,16,0.9) 100%)`,
                  border: `1px solid ${ach.color}25`,
                  backdropFilter: "blur(14px)",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.5), 0 16px 32px rgba(0,0,0,0.35)",
                  transition: "border-color 0.28s, box-shadow 0.28s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = ach.color + "50";
                  e.currentTarget.style.boxShadow = `0 8px 16px rgba(0,0,0,0.6), 0 24px 48px rgba(0,0,0,0.4), 0 0 60px ${ach.color}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = ach.color + "25";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.5), 0 16px 32px rgba(0,0,0,0.35)";
                }}
              >
                <div style={{ height: 2, background: `linear-gradient(90deg, ${ach.color}, ${ach.color}44 60%, transparent)` }} />

                <div
                  className="absolute top-3 right-5 pointer-events-none select-none"
                  style={{ fontSize: 90, fontFamily: "'JetBrains Mono', monospace", fontWeight: 900, color: ach.color, opacity: 0.04, lineHeight: 1 }}
                >
                  {ach.rank.split(" ")[0]}
                </div>

                <div className="flex flex-col sm:flex-row gap-0">

                  <div
                    className="flex flex-col items-center justify-center gap-4 p-7 sm:p-8 border-b sm:border-b-0 sm:border-r"
                    style={{ borderColor: "rgba(255,255,255,0.06)", minWidth: 160, flexShrink: 0 }}
                  >
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: `${ach.color}14`,
                        border: `2px solid ${ach.color}35`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: ach.color,
                        boxShadow: `0 0 24px ${ach.color}22`,
                      }}
                    >
                      {ach.icon}
                    </div>

                    <div className="text-center">
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 900, color: ach.color, letterSpacing: "0.06em", display: "block" }}>
                        {ach.rank}
                      </span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#64748b", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                        {ach.index}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <motion.span
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        style={{ width: 6, height: 6, borderRadius: "50%", background: ach.color, display: "inline-block", boxShadow: `0 0 6px ${ach.color}` }}
                      />
                      <span style={{ fontSize: 9, color: ach.color, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>CONFIRMED</span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center gap-4 p-7 sm:p-8 flex-1">

                    <div className="flex flex-wrap items-start gap-3">
                      <div className="flex-1">
                        <span style={{ fontSize: 10, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.16em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                          / competition
                        </span>
                        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 800, color: "#f0f4ff", lineHeight: 1.2 }}>
                          {ach.event}
                        </h3>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 6, background: `${ach.color}15`, color: ach.color, fontFamily: "'JetBrains Mono', monospace", border: `1px solid ${ach.color}28` }}>
                          {ach.year}
                        </span>
                        <span style={{ fontSize: 11, color: "#475569", fontFamily: "'JetBrains Mono', monospace" }}>{ach.scale}</span>
                      </div>
                    </div>

                    <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.75, fontFamily: "'Inter', sans-serif" }}>
                      {ach.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {ach.stats.map((s) => (
                        <span
                          key={s.label}
                          style={{
                            fontSize: 11,
                            padding: "4px 12px",
                            borderRadius: 20,
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            fontFamily: "'JetBrains Mono', monospace",
                            color: "#64748b",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 5,
                          }}
                        >
                          <span style={{ color: ach.color, fontWeight: 700 }}>{s.value}</span>
                          <span>·</span>
                          <span>{s.label}</span>
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>

              {i < ACHIEVEMENTS.length - 1 && (
                <div className="flex items-center gap-4 py-4 px-2">
                  <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.15))" }} />
                  <span style={{ fontSize: 10, color: "#475569", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
                    → ACH_02 LOGGED
                  </span>
                  <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(34,211,238,0.15), transparent)" }} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
