import Section from "../components/Section";
import ProjectShowcase from "../components/ProjectShowcase";

export default function Projects() {
  return (
    <Section id="Projects" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div style={{ position: "absolute", top: "15%", left: "8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,255,0.03) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "15%", right: "8%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto relative">

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span style={{ display: "inline-block", width: 28, height: 1, background: "rgba(0,245,255,0.6)" }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: "#00f5ff", fontFamily: "'JetBrains Mono', monospace" }}>
              Chapter 05 // Signature Builds
            </p>
            <span style={{ display: "inline-block", flex: 1, height: 1, background: "linear-gradient(90deg, rgba(0,245,255,0.3), transparent)" }} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span style={{ color: "#f0f4ff" }}>Projects That</span>{" "}
            <span style={{ background: "linear-gradient(90deg, #00f5ff 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Proved The Process
            </span>
          </h2>
        </div>

        <ProjectShowcase />

      </div>
    </Section>
  );
}
