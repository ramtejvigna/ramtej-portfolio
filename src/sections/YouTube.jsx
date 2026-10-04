import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { YOUTUBE } from "../data/media";
import { EASE } from "../lib/motion";

function VideoCard({ video, i }) {
  return (
    <motion.a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
      className="spotlight glass group block overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1.5"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        <span className="absolute left-1/2 top-1/2 flex h-12 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-[#ff0000] text-white opacity-90 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
          <Play size={20} fill="currentColor" />
        </span>
        {video.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-snow backdrop-blur">
            {video.tag}
          </span>
        )}
      </div>
      <div className="flex items-start justify-between gap-3 p-4">
        <p className="font-display text-[15px] font-semibold leading-snug text-snow">{video.title}</p>
        <ArrowUpRight size={17} className="mt-0.5 shrink-0 text-slate transition-all duration-300 group-hover:rotate-45 group-hover:text-snow" />
      </div>
    </motion.a>
  );
}

export default function YouTube() {
  return (
    <Section id="Channel" className="py-32 sm:py-40">
      <SectionHeading
        index="04"
        eyebrow="On the channel"
        title="Teaching what"
        accent="I build."
        intro="Breaking down DSA, system design and AI, explained in Telugu."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="glass relative mb-8 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl p-6 sm:flex-row sm:items-center sm:p-8"
      >
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-red-600/20 blur-[80px]" />
        <div className="relative flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff0000] shadow-[0_10px_40px_-10px_rgba(255,0,0,0.6)]">
            <FaYoutube size={28} className="text-white" />
          </span>
          <div>
            <p className="font-display text-xl font-semibold tracking-tight text-snow">{YOUTUBE.name}</p>
            <p className="mt-0.5 font-mono text-xs text-slate">
              {YOUTUBE.handle} · {YOUTUBE.subscribers} subscribers
            </p>
          </div>
        </div>
        <Button href={YOUTUBE.url}>Subscribe</Button>
      </motion.div>

      {YOUTUBE.videos.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {YOUTUBE.videos.map((v, i) => (
            <VideoCard key={v.id} video={v} i={i} />
          ))}
        </div>
      )}
    </Section>
  );
}
