import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Magnetic from "../components/Magnetic";
import useVisitorPosition from "../hooks/useVisitorPosition";
import { NAV_LINKS } from "../data/nav";
import { EASE } from "../lib/motion";

function formatVisitorOrdinal(value) {
  const lastTwo = value % 100;
  if (lastTwo >= 11 && lastTwo <= 13) return `${value}th`;
  const lastDigit = value % 10;
  if (lastDigit === 1) return `${value}st`;
  if (lastDigit === 2) return `${value}nd`;
  if (lastDigit === 3) return `${value}rd`;
  return `${value}th`;
}

function useLocalTime() {
  const fmt = () =>
    new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" });
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Footer({ onNav }) {
  const { position, failed } = useVisitorPosition();
  const time = useLocalTime();

  const visitorMessage = position
    ? `You're the ${formatVisitorOrdinal(position)} visitor`
    : failed
      ? "Visitor count unavailable"
      : "Counting visitors…";

  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-5 pt-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="max-w-sm font-display text-2xl font-medium leading-snug tracking-tight text-snow">
              &ldquo;Great products are built when <span className="serif-accent text-sky">curiosity</span> meets consistency.&rdquo;
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs text-mist">
              <span className="h-1.5 w-1.5 rounded-full bg-azure animate-pulse-soft" />
              {visitorMessage}
            </div>
          </div>

          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-slate">Navigate</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <button onClick={() => onNav(link)} className="text-sm text-mist transition-colors hover:text-snow">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-6 md:items-end">
            <div className="md:text-right">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-slate">Local time</p>
              <p className="font-display text-2xl font-semibold text-snow">{time} IST</p>
            </div>
            <Magnetic>
              <button
                onClick={() => onNav("Home")}
                aria-label="Back to top"
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-snow transition-colors duration-300 hover:border-snow hover:bg-snow hover:text-ink"
              >
                <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              </button>
            </Magnetic>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-2 border-t border-white/10 py-6 text-xs text-slate sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Vigna Ramtej Telagarapu</span>
          <span>Designed &amp; engineered with care</span>
        </div>
      </div>

      <motion.p
        initial={{ y: "40%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: EASE }}
        aria-hidden
        className="pointer-events-none -mb-[0.22em] select-none whitespace-nowrap text-center font-display text-[17vw] font-bold leading-none tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-b from-white/15 to-white/0"
      >
        RAMTEJ
      </motion.p>
    </footer>
  );
}
