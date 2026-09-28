import { motion } from "framer-motion";
import { Code2, TrendingUp } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import CountUp from "../components/CountUp";
import RingChart from "../components/RingChart";
import Button from "../components/Button";
import useLeetCodeStats from "../hooks/useLeetCodeStats";
import { DSA_CONFIG } from "../data/dsa";
import { EASE } from "../lib/motion";

const LEVELS = [
  { label: "Easy", key: "easy", color: "#93b4ff" },
  { label: "Medium", key: "medium", color: "#3b82f6" },
  { label: "Hard", key: "hard", color: "#f5f7ff" },
];

const Skeleton = ({ className }) => <span className={`dsa-skeleton inline-block rounded-md bg-white/10 ${className}`} />;

export default function Coding() {
  const { data, loading } = useLeetCodeStats(DSA_CONFIG.leetcode.username);

  return (
    <Section id="Coding" className="py-32 sm:py-40">
      <SectionHeading index="05" eyebrow="Problem solving" title="Stats that track" accent="the grind." />

      <div className="grid gap-4 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="spotlight glass relative overflow-hidden rounded-3xl p-7 sm:p-10 lg:col-span-2"
        >
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-snow text-ink">
                <Code2 size={20} />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-snow">LeetCode</p>
                <p className="font-mono text-xs text-slate">@{DSA_CONFIG.leetcode.username}</p>
              </div>
            </div>
            <span className="flex items-center gap-2 font-mono text-xs text-sky">
              <span className="h-1.5 w-1.5 rounded-full bg-sky animate-pulse-soft" /> live
            </span>
          </div>

          <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-center">
            {loading ? (
              <div className="dsa-skeleton h-40 w-40 shrink-0 rounded-full border-2 border-dashed border-white/10" />
            ) : (
              <RingChart easy={data.easy} medium={data.medium} hard={data.hard} total={data.solved} />
            )}

            <div className="w-full flex-1">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate">Problems solved</p>
              <p className="mt-2 font-display text-7xl font-semibold leading-none tracking-tight text-snow">
                {loading ? <Skeleton className="h-16 w-36 align-middle" /> : <CountUp target={data.solved} />}
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {LEVELS.map(({ label, key, color }, li) => {
                  const count = data?.[key] ?? 0;
                  const pct = data?.solved > 0 ? (count / data.solved) * 100 : 0;
                  return (
                    <div key={key} className="flex items-center gap-4">
                      <span className="w-16 shrink-0 text-sm text-mist">{label}</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: loading ? "0%" : `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, ease: EASE, delay: 0.3 + li * 0.15 }}
                          className="h-full rounded-full"
                          style={{ background: color, boxShadow: `0 0 12px ${color}` }}
                        />
                      </div>
                      <span className="w-10 shrink-0 text-right font-display text-sm font-semibold text-snow">
                        {loading ? <Skeleton className="h-4 w-6" /> : count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
          className="spotlight relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-cobalt to-navy p-7 sm:p-10"
        >
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky/25 blur-3xl" />
          <TrendingUp className="relative text-snow" size={22} />
          <p className="relative mt-8 font-mono text-xs uppercase tracking-[0.2em] text-snow/70">Contest rating</p>
          <p className="relative mt-2 font-display text-6xl font-semibold tracking-tight text-snow">
            {loading ? <Skeleton className="h-14 w-32" /> : data.contestRating ? <CountUp target={Math.round(data.contestRating)} /> : "—"}
          </p>
          <p className="relative mt-2 text-sm text-snow/75">
            {!loading && data.contestRank ? `Global rank #${data.contestRank.toLocaleString()}` : "Unrated so far"}
          </p>
          <div className="relative mt-10 lg:mt-auto">
            <Button href={DSA_CONFIG.leetcode.profileUrl}>View profile</Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
