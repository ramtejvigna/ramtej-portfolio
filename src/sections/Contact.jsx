import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Link2, Mail, Copy, Check } from "lucide-react";
import Section from "../components/Section";

const EMAIL = "vignaramtej46@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="Contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8">
        <div>
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#00f5ff", fontFamily: "'JetBrains Mono', monospace" }}>
            Final Chapter // Build Together
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#f0f4ff" }}>
            Your Idea Is The Next Story
          </h2>
        </div>

        <p className="text-base leading-relaxed" style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}>
          Open to full-time roles, freelance projects, and collaboration.
          Drop me a message — I respond within 24 hours.
        </p>

        <div className="relative">
          <button
            onClick={copyEmail}
            className="flex items-center gap-3 px-6 py-3 rounded-xl border font-medium text-sm transition-all duration-200"
            style={{
              borderColor: "rgba(0,245,255,0.3)",
              background: "rgba(0,245,255,0.05)",
              color: "#00f5ff",
              fontFamily: "'JetBrains Mono', monospace",
              boxShadow: "0 0 20px rgba(0,245,255,0.1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 32px rgba(0,245,255,0.25)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 20px rgba(0,245,255,0.1)"; }}
          >
            <Mail size={16} />
            {EMAIL}
            {copied ? <Check size={15} style={{ color: "#4ade80" }} /> : <Copy size={14} />}
          </button>

          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap"
                style={{ background: "#00f5ff", color: "#050810", fontFamily: "'JetBrains Mono', monospace" }}
              >
                Copied!
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/ramtejvigna"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200"
            style={{ borderColor: "rgba(240,244,255,0.15)", color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,245,255,0.4)"; e.currentTarget.style.color = "#00f5ff"; e.currentTarget.style.background = "rgba(0,245,255,0.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(240,244,255,0.15)"; e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.background = ""; }}
          >
            <GitBranch size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/vignaramtej"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200"
            style={{ borderColor: "rgba(124,58,237,0.25)", color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.6)"; e.currentTarget.style.color = "#a78bfa"; e.currentTarget.style.background = "rgba(124,58,237,0.06)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)"; e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.background = ""; }}
          >
            <Link2 size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
