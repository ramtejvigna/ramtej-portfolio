import Section from "../components/Section";
import SkillsArsenal from "../components/SkillsArsenal";

export default function Skills() {
  return (
    <Section id="Skills" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div style={{ position: "absolute", top: "8%",  left: "4%",  width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,255,0.032) 0%, transparent 68%)" }} />
        <div style={{ position: "absolute", bottom: "8%", right: "4%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 68%)" }} />
        <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 280, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(0,245,255,0.018) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto relative">

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span style={{ display: "inline-block", width: 28, height: 1, background: "rgba(0,245,255,0.6)" }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: "#00f5ff", fontFamily: "'JetBrains Mono', monospace" }}>
              Chapter 03 // Arsenal
            </p>
            <span style={{ display: "inline-block", flex: 1, height: 1, background: "linear-gradient(90deg, rgba(0,245,255,0.3), transparent)" }} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span style={{ color: "#f0f4ff" }}>Tools I Reach For</span>{" "}
            <span style={{ background: "linear-gradient(90deg, #00f5ff 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Under Pressure
            </span>
          </h2>
          <p className="mt-4 text-base" style={{ color: "#475569", fontFamily: "'Inter', sans-serif", maxWidth: 520, lineHeight: 1.75 }}>
            A curated stack refined through real projects, tight deadlines, and production incidents.
          </p>
        </div>

        <SkillsArsenal />

      </div>
    </Section>
  );
}
