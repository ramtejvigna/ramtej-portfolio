import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Link2, Copy, Check, Mail } from "lucide-react";
import Section from "../components/Section";
import Button from "../components/Button";
import { Reveal, SplitText } from "../components/Reveal";

const EMAIL = "vignaramtej46@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="Contact" className="py-32 sm:py-44">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-navy to-ink px-6 py-20 text-center sm:px-12 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt/50 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_top,#000,transparent_70%)]" />

        <div className="relative flex flex-col items-center">
          <Reveal y={16} className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-azure animate-pulse-soft" />
            <span className="font-mono text-xs text-mist">Replies within 24 hours</span>
          </Reveal>

          <h2 className="font-display text-[clamp(2.8rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-snow">
            <SplitText text="Let's build" />
            <br />
            <SplitText text="something great." wordClassName="serif-accent text-gradient pr-[0.06em]" delay={0.15} />
          </h2>

          <Reveal delay={0.2} className="mt-8 max-w-lg text-base leading-relaxed text-mist sm:text-lg">
            Open to full-time roles, freelance projects and collaborations. Tell me what you&apos;re building.
          </Reveal>

          <Reveal delay={0.3} className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button href={`mailto:${EMAIL}`} icon={<Mail size={15} />}>
              Start a project
            </Button>
            <div className="relative">
              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 font-mono text-sm text-snow transition-colors duration-300 hover:border-azure hover:bg-azure/10"
              >
                {EMAIL}
                {copied ? <Check size={15} className="text-sky" /> : <Copy size={14} className="text-slate transition-colors group-hover:text-snow" />}
              </button>
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.9 }}
                    className="absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-snow px-3 py-1.5 font-mono text-xs text-ink"
                  >
                    Copied to clipboard
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="mt-14 flex items-center gap-8">
            {[
              { href: "https://github.com/ramtejvigna", icon: <GitBranch size={16} />, label: "GitHub" },
              { href: "https://linkedin.com/in/vignaramtej", icon: <Link2 size={16} />, label: "LinkedIn" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 text-sm font-medium text-mist transition-colors hover:text-snow"
              >
                {icon} {label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-snow transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
