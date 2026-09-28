import { GitBranch, Link2, Mail } from "lucide-react";
import Section from "../components/Section";
import CountUp from "../components/CountUp";

const STATS = [
  { label: "Internships Completed", value: 3, suffix: "", decimals: 0, color: "#00f5ff" },
  { label: "Projects Shipped", value: 35, suffix: "+", decimals: 0, color: "#7c3aed" },
  { label: "Hackathon Achievements & Mentored", value: 10, suffix: "+", decimals: 0, color: "#f59e0b" },
];

const SOCIALS = [
  { href: "https://github.com/ramtejvigna", icon: <GitBranch size={14} />, label: "GitHub", border: "rgba(0,245,255,0.22)", hoverBg: "rgba(0,245,255,0.08)", hoverBorder: "rgba(0,245,255,0.55)", color: "#00f5ff" },
  { href: "https://linkedin.com/in/vignaramtej", icon: <Link2 size={14} />, label: "LinkedIn", border: "rgba(124,58,237,0.3)", hoverBg: "rgba(124,58,237,0.08)", hoverBorder: "rgba(124,58,237,0.6)", color: "#a78bfa" },
  { href: "mailto:vignaramtej46@gmail.com", icon: <Mail size={14} />, label: "Email", border: "rgba(240,244,255,0.12)", hoverBg: "rgba(240,244,255,0.05)", hoverBorder: "rgba(240,244,255,0.3)", color: "#94a3b8" },
];

const TERMINAL_LINES = [
  { key: "location", value: "Visakhapatnam, AP, India", color: "#00f5ff" },
  { key: "degree", value: "B.Tech AI & DS", color: "#a78bfa" },
  { key: "year", value: "Final Year · 2022–26", color: "#a78bfa" },
  { key: "focus", value: "Backend + AI/ML", color: "#34d399" },
  { key: "available", value: "true", color: "#34d399" },
];

export default function About() {
  return (
    <Section id="About" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div style={{ position: "absolute", top: "8%", right: "4%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,255,0.045) 0%, transparent 68%)" }} />
        <div style={{ position: "absolute", bottom: "12%", left: "3%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 68%)" }} />
      </div>

      <div className="max-w-6xl mx-auto relative">

        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span style={{ display: "inline-block", width: 28, height: 1, background: "rgba(0,245,255,0.6)" }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: "#00f5ff", fontFamily: "'JetBrains Mono', monospace" }}>
              Chapter 02 // Origin Story
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span style={{ color: "#f0f4ff" }}>The Engineer Behind</span>{" "}
            <span style={{ background: "linear-gradient(90deg, #00f5ff 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              The Build
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          <div className="lg:col-span-3 flex flex-col gap-7">

            <div className="flex items-center gap-5 p-5 rounded-2xl"
              style={{
                background: "linear-gradient(145deg, rgba(0,245,255,0.07) 0%, rgba(5,8,16,0.5) 100%)",
                border: "1.5px solid rgba(0,245,255,0.4)",
                backdropFilter: "blur(12px)",
                boxShadow: [
                  "inset 0 1px 0 rgba(255,255,255,0.08)",
                  "inset 1px 0 0 rgba(255,255,255,0.04)",
                  "0 2px 4px rgba(0,0,0,0.6)",
                  "0 8px 16px rgba(0,0,0,0.45)",
                  "0 16px 32px rgba(0,0,0,0.3)",
                  "4px 6px 0 rgba(0,245,255,0.16)",
                ].join(", "),
              }}>
              <div className="relative flex-shrink-0">
                <img
                  src="/DP.webp"
                  alt="Vigna Ramtej"
                  style={{
                    width: 70, height: 70, borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid rgba(0,245,255,0.4)",
                    boxShadow: "0 0 28px rgba(0,245,255,0.18)",
                    display: "block",
                  }}
                />
                <span style={{
                  position: "absolute", bottom: 3, right: 3,
                  width: 13, height: 13, borderRadius: "50%",
                  background: "#22d3ee", border: "2px solid #0a0f1e",
                  boxShadow: "0 0 8px rgba(34,211,238,0.9)"
                }} />
              </div>

              <div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#f0f4ff", fontSize: 17, fontWeight: 700, marginBottom: 3 }}>
                  Vigna Ramtej Telagarapu
                </h3>
                <p style={{ color: "#00f5ff", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", marginBottom: 8 }}>
                  Full Stack &amp; Backend Engineer
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {[
                    { label: "Open to Work", cyan: true },
                    { label: "B.Tech AI&DS '26", cyan: false },
                  ].map(({ label, cyan }) => (
                    <span key={label} style={{
                      fontSize: 11, padding: "3px 9px", borderRadius: 6,
                      background: cyan ? "rgba(34,211,238,0.1)" : "rgba(124,58,237,0.1)",
                      color: cyan ? "#22d3ee" : "#a78bfa",
                      border: `1px solid ${cyan ? "rgba(34,211,238,0.3)" : "rgba(124,58,237,0.3)"}`,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}>{label}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p style={{ color: "#94a3b8", lineHeight: 1.9, fontFamily: "'Inter', sans-serif", fontSize: 15 }}>
                Pursuing B.Tech in{" "}
                <span style={{ color: "#f0f4ff", fontWeight: 500 }}>AI &amp; Data Science</span>{" "}
                at Sagi Ramakrishnam Raju Engineering College (2022–2026), maintaining a CGPA of{" "}
                <span style={{ color: "#00f5ff", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>8.56</span>.
              </p>
              <p style={{ color: "#94a3b8", lineHeight: 1.9, fontFamily: "'Inter', sans-serif", fontSize: 15 }}>
                I thrive at the intersection of performance engineering and product thinking - whether migrating
                monoliths to serverless architectures, designing ACID-safe database schemas, or building reusable
                frontend component libraries that boost user engagement.
              </p>

              <div style={{
                padding: "14px 18px", borderRadius: 12,
                background: "rgba(124,58,237,0.06)",
                borderLeft: "3px solid #7c3aed",
              }}>
                <p style={{ color: "#c4b5fd", lineHeight: 1.75, fontFamily: "'Inter', sans-serif", fontSize: 14, margin: 0 }}>
                  Won <strong style={{ color: "#f0f4ff" }}>Hackoverflow 2K24</strong> (national-level) and led team to{" "}
                  <strong style={{ color: "#f0f4ff" }}>Best Junior Team</strong> at Smart India Hackathon 2023 out of{" "}
                  <span style={{ color: "#a78bfa", fontWeight: 600 }}>250+ competing teams</span>.
                </p>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              {SOCIALS.map(({ href, icon, label, border, hoverBg, hoverBorder, color }) => (
                <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 text-sm font-medium"
                  style={{ border: `1px solid ${border}`, color, fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = hoverBg; e.currentTarget.style.borderColor = hoverBorder; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = ""; e.currentTarget.style.borderColor = border; }}
                >
                  {icon}{label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">

            {STATS.map((stat) => (
              <div key={stat.label}
                className="flex items-center gap-4 px-5 py-4 rounded-xl"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(5,8,16,0.5) 100%)",
                  border: "1.5px solid rgba(255,255,255,0.18)",
                  boxShadow: [
                    "inset 0 1px 0 rgba(255,255,255,0.07)",
                    "0 2px 4px rgba(0,0,0,0.55)",
                    "0 6px 12px rgba(0,0,0,0.4)",
                    "0 14px 28px rgba(0,0,0,0.25)",
                    "3px 5px 0 rgba(255,255,255,0.05)",
                  ].join(", "),
                  transition: "box-shadow 0.22s ease, border-color 0.22s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,245,255,0.55)";
                  e.currentTarget.style.boxShadow = [
                    "inset 0 1px 0 rgba(255,255,255,0.1)",
                    "0 4px 8px rgba(0,0,0,0.65)",
                    "0 12px 24px rgba(0,0,0,0.5)",
                    "0 24px 48px rgba(0,0,0,0.3)",
                    "4px 7px 0 rgba(0,245,255,0.2)",
                    "0 0 40px rgba(0,245,255,0.06)",
                  ].join(", ");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                  e.currentTarget.style.boxShadow = [
                    "inset 0 1px 0 rgba(255,255,255,0.07)",
                    "0 2px 4px rgba(0,0,0,0.55)",
                    "0 6px 12px rgba(0,0,0,0.4)",
                    "0 14px 28px rgba(0,0,0,0.25)",
                    "3px 5px 0 rgba(255,255,255,0.05)",
                  ].join(", ");
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", color: stat.color, fontSize: 28, fontWeight: 700, minWidth: 72, lineHeight: 1 }}>
                  <CountUp target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </span>
                <span style={{ color: "#64748b", fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.4 }}>
                  {stat.label}
                </span>
              </div>
            ))}

            <div className="rounded-xl overflow-hidden mt-2" style={{
              border: "1.5px solid rgba(0,245,255,0.4)",
              boxShadow: [
                "inset 0 1px 0 rgba(255,255,255,0.07)",
                "0 2px 4px rgba(0,0,0,0.6)",
                "0 8px 16px rgba(0,0,0,0.45)",
                "0 16px 32px rgba(0,0,0,0.28)",
                "4px 6px 0 rgba(0,245,255,0.16)",
              ].join(", "),
            }}>
              <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "rgba(0,245,255,0.04)", borderBottom: "1px solid rgba(0,245,255,0.08)" }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
                <span style={{ marginLeft: 8, fontSize: 11, color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>
                  vigna@portfolio ~ about.sh
                </span>
              </div>
              <div style={{ background: "rgba(5,8,16,0.85)", padding: "16px 18px", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, lineHeight: 2.1 }}>
                {TERMINAL_LINES.map(({ key, value, color }) => (
                  <div key={key} style={{ display: "flex", gap: 6, alignItems: "baseline" }}>
                    <span style={{ color: "#64748b" }}>$</span>
                    <span style={{ color: "#38bdf8" }}>{key}</span>
                    <span style={{ color: "#64748b" }}>=</span>
                    <span style={{ color }}>&quot;{value}&quot;</span>
                  </div>
                ))}
                <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                  <span style={{ color: "#64748b" }}>$</span>
                  <span style={{ color: "#64748b" }}>_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
