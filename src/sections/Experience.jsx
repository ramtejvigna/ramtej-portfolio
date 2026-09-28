import { motion } from "framer-motion";
import Section from "../components/Section";
import CountUp from "../components/CountUp";
import { EXPERIENCES } from "../data/experiences";

export default function Experience() {
  return (
    <Section id="Experience" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div style={{ position: "absolute", top: "10%", right: "4%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,255,0.038) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "4%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto relative">

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span style={{ display: "inline-block", width: 28, height: 1, background: "rgba(0,245,255,0.6)" }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: "#00f5ff", fontFamily: "'JetBrains Mono', monospace" }}>
              Chapter 04 // Field Work
            </p>
            <span style={{ display: "inline-block", flex: 1, height: 1, background: "linear-gradient(90deg, rgba(0,245,255,0.3), transparent)" }} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span style={{ color: "#f0f4ff" }}>Real Products,</span>{" "}
            <span style={{ background: "linear-gradient(90deg, #00f5ff 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Real Constraints
            </span>
          </h2>
          <p className="mt-4 text-base" style={{ color: "#475569", fontFamily: "'Inter', sans-serif", maxWidth: 520, lineHeight: 1.75 }}>
            Two internships. Shipped to production. Numbers that speak.
          </p>
        </div>

        <div className="flex flex-col">
          {EXPERIENCES.map((exp, i) => (
            <div key={exp.company}>
              <motion.div
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.65, delay: i * 0.15 }}
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${exp.color}07 0%, rgba(5,8,16,0.75) 50%, rgba(5,8,16,0.92) 100%)`,
                  border: `1.5px solid ${exp.color}28`,
                  backdropFilter: "blur(16px)",
                  boxShadow: [
                    "inset 0 1px 0 rgba(255,255,255,0.06)",
                    "0 4px 8px rgba(0,0,0,0.55)",
                    "0 16px 32px rgba(0,0,0,0.4)",
                    "0 32px 64px rgba(0,0,0,0.22)",
                  ].join(", "),
                  transition: "box-shadow 0.28s ease, border-color 0.28s ease, transform 0.28s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = exp.color + "55";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = [
                    "inset 0 1px 0 rgba(255,255,255,0.09)",
                    "0 8px 16px rgba(0,0,0,0.65)",
                    "0 28px 56px rgba(0,0,0,0.45)",
                    `0 0 80px ${exp.color}12`,
                  ].join(", ");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = exp.color + "28";
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = [
                    "inset 0 1px 0 rgba(255,255,255,0.06)",
                    "0 4px 8px rgba(0,0,0,0.55)",
                    "0 16px 32px rgba(0,0,0,0.4)",
                    "0 32px 64px rgba(0,0,0,0.22)",
                  ].join(", ");
                }}
              >
                <div style={{ height: 2, background: `linear-gradient(90deg, ${exp.color}, ${exp.color}44 60%, transparent)` }} />

                <div
                  className="absolute top-3 right-6 pointer-events-none select-none"
                  style={{ fontSize: 110, fontFamily: "'JetBrains Mono', monospace", fontWeight: 900, color: exp.color, opacity: 0.04, lineHeight: 1 }}
                >
                  {exp.monogram}
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-[220px_260px_1fr]">

                  <div
                    className="flex flex-col gap-4 p-7 border-b lg:border-b-0 lg:border-r"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: 10, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.14em" }}>MISSION</span>
                      <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: exp.color, fontWeight: 700 }}>#{exp.mission}</span>
                    </div>

                    <div>
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#f0f4ff", fontSize: 22, fontWeight: 800, lineHeight: 1.2, marginBottom: 8 }}>
                        {exp.company}
                      </h3>
                      <span style={{
                        fontSize: 11, padding: "3px 9px", borderRadius: 6,
                        background: `${exp.color}15`, color: exp.color,
                        fontFamily: "'JetBrains Mono', monospace",
                        border: `1px solid ${exp.color}28`,
                        display: "inline-block",
                      }}>
                        {exp.role}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span style={{ fontSize: 12, color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>{exp.period}</span>
                      <span style={{ fontSize: 11, color: exp.color, fontFamily: "'JetBrains Mono', monospace", opacity: 0.65 }}>{exp.tag}</span>
                    </div>
                  </div>

                  <div
                    className="flex flex-col justify-center gap-5 p-7 border-b lg:border-b-0 lg:border-r"
                    style={{
                      borderColor: "rgba(255,255,255,0.06)",
                      background: `linear-gradient(160deg, ${exp.color}05 0%, transparent 100%)`,
                    }}
                  >
                    <span style={{ fontSize: 9, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                      / impact metrics
                    </span>
                    {exp.metrics.map((m) => (
                      <div key={m.label} className="flex items-end gap-3">
                        <span style={{ fontSize: 38, fontFamily: "'Space Grotesk', sans-serif", color: exp.color, fontWeight: 800, lineHeight: 1 }}>
                          <CountUp target={m.value} suffix={m.suffix} />
                        </span>
                        <span style={{ fontSize: 12, color: "#475569", fontFamily: "'Inter', sans-serif", paddingBottom: 5, lineHeight: 1.3 }}>
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-center gap-5 p-7">
                    <span style={{ fontSize: 9, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                      / deployed actions
                    </span>
                    <ul className="flex flex-col gap-3.5">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                          <span style={{ color: exp.color, flexShrink: 0, marginTop: 2 }}>▹</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>

              {i < EXPERIENCES.length - 1 && (
                <div className="flex items-center gap-4 py-4 px-2">
                  <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.2))" }} />
                  <span style={{ fontSize: 10, color: "#475569", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
                    →
                  </span>
                  <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(167,139,250,0.2), transparent)" }} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
