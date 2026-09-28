import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Section from "../components/Section";
import CountUp from "../components/CountUp";
import RingChart from "../components/RingChart";
import useLeetCodeStats from "../hooks/useLeetCodeStats";
import { DSA_CONFIG } from "../data/dsa";

export default function Coding() {
  const { data: lcData, loading: lcLoading } = useLeetCodeStats(DSA_CONFIG.leetcode.username);

  return (
    <Section id="Coding" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div style={{ position: "absolute", top: "4%",  left: "-8%",  width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,161,22,0.055) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: "4%", right: "-8%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 1000, height: 220, background: "radial-gradient(ellipse, rgba(124,58,237,0.025) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto relative">

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span style={{ display: "inline-block", width: 28, height: 1, background: "rgba(0,245,255,0.6)" }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: "#00f5ff", fontFamily: "'JetBrains Mono', monospace" }}>
              Chapter 06 // Coding Arena
            </p>
            <span style={{ display: "inline-block", flex: 1, height: 1, background: "linear-gradient(90deg, rgba(0,245,255,0.3), transparent)" }} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span style={{ color: "#f0f4ff" }}>Stats That</span>{" "}
            <span style={{ background: "linear-gradient(90deg, #00f5ff 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Track The Grind
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <motion.div
            initial={{ opacity: 0, x: -44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.65 }}
            className="lc-glow rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: "linear-gradient(160deg, rgba(255,161,22,0.1) 0%, rgba(8,10,24,0.96) 42%, rgba(5,8,18,0.99) 100%)",
              border: "1px solid rgba(255,161,22,0.2)",
            }}
          >
            <div className="flex items-center gap-2 px-5 py-3 border-b" style={{ borderColor: "rgba(255,161,22,0.1)", background: "rgba(0,0,0,0.32)" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", display: "inline-block", boxShadow: "0 0 4px #ef4444aa" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", display: "inline-block", boxShadow: "0 0 4px #f59e0baa" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 4px #22c55eaa" }} />
              <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em" }}>
                ~/leetcode_stats.sh
              </span>
              <a
                href={DSA_CONFIG.leetcode.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 transition-all duration-200"
                style={{ fontSize: 11, color: DSA_CONFIG.leetcode.color, fontFamily: "'JetBrains Mono', monospace", opacity: 0.65 }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.65"; }}
              >
                <ExternalLink size={11} /> view
              </a>
            </div>

            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{ background: "rgba(255,161,22,0.13)", border: "1px solid rgba(255,161,22,0.35)", boxShadow: "0 0 18px rgba(255,161,22,0.22)" }}
                >
                  <span style={{ fontSize: 13, fontWeight: 900, color: DSA_CONFIG.leetcode.color, fontFamily: "'Space Grotesk', sans-serif" }}>LC</span>
                </div>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: "#f0f4ff", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.2, margin: 0 }}>LeetCode</p>
                  <p style={{ fontSize: 11, color: "#475569", fontFamily: "'JetBrains Mono', monospace", margin: 0 }}>@{DSA_CONFIG.leetcode.username}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-6 px-6 pt-6 pb-4 flex-1">

              {lcLoading ? (
                <div
                  className="dsa-skeleton"
                  style={{ width: 160, height: 160, borderRadius: "50%", flexShrink: 0, background: "rgba(255,161,22,0.05)", border: "2px dashed rgba(255,161,22,0.1)" }}
                />
              ) : (
                <RingChart easy={lcData.easy} medium={lcData.medium} hard={lcData.hard} total={lcData.solved} />
              )}

              <div className="flex flex-col gap-4 flex-1 w-full min-w-0">

                <div>
                  <p style={{ fontSize: 10, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.12em", margin: "0 0 2px" }}>// total_solved</p>
                  <p style={{ fontSize: 44, fontWeight: 900, color: "#f0f4ff", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1, margin: 0, textShadow: "0 0 48px rgba(255,161,22,0.38)" }}>
                    {lcLoading ? <span className="dsa-skeleton" style={{ display: "inline-block", width: 80, height: 44, borderRadius: 8, background: "rgba(255,255,255,0.06)", verticalAlign: "middle" }} /> : <CountUp target={lcData.solved} />}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    { label: "easy",   color: "#22c55e", key: "easy",   delay: 0.3  },
                    { label: "medium", color: "#f59e0b", key: "medium", delay: 0.45 },
                    { label: "hard",   color: "#ef4444", key: "hard",   delay: 0.6  },
                  ].map(({ label, color, key, delay }) => {
                    const count = lcData?.[key] ?? 0;
                    const pct   = lcData?.solved > 0 ? (count / lcData.solved) * 100 : 0;
                    return (
                      <div key={label} className="flex items-center gap-2.5">
                        <span style={{ fontSize: 10, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>›</span>
                        <span style={{ fontSize: 10, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", width: 46, flexShrink: 0 }}>{label}</span>
                        <div style={{ flex: 1, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: lcLoading ? "0%" : `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.3, ease: "easeOut", delay }}
                            style={{ height: "100%", borderRadius: 3, background: `linear-gradient(90deg, ${color}88, ${color})`, boxShadow: `0 0 10px ${color}99` }}
                          />
                        </div>
                        {lcLoading ? (
                          <span className="dsa-skeleton" style={{ width: 24, height: 14, borderRadius: 3, background: "rgba(255,255,255,0.07)", display: "inline-block", flexShrink: 0 }} />
                        ) : (
                          <span style={{ fontSize: 12, fontWeight: 700, color, fontFamily: "'Space Grotesk', sans-serif", minWidth: 28, textAlign: "right", flexShrink: 0 }}>{count}</span>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

            <div
              className="flex items-center justify-between px-6 py-3.5 border-t mt-auto"
              style={{ borderColor: "rgba(255,161,22,0.1)", background: "rgba(0,0,0,0.24)" }}
            >
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 9, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>CONTEST_RATING</span>
                <span style={{ width: 1, height: 10, background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
                <span style={{ fontSize: 9, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>RANK</span>
              </div>
              <div className="flex items-center gap-3">
                {!lcLoading && lcData.contestRating ? (
                  <span style={{ fontSize: 15, fontWeight: 800, color: DSA_CONFIG.leetcode.color, fontFamily: "'Space Grotesk', sans-serif", textShadow: `0 0 16px ${DSA_CONFIG.leetcode.color}77` }}>
                    {Math.round(lcData.contestRating)}
                  </span>
                ) : (
                  <span style={{ fontSize: 11, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>— unrated</span>
                )}
                {!lcLoading && lcData.contestRank && (
                  <span style={{ fontSize: 11, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>#{lcData.contestRank.toLocaleString()}</span>
                )}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </Section>
  );
}
