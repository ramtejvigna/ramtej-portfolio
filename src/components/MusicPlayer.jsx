import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Music2 } from "lucide-react";
import { TRACK } from "../data/media";
import { EASE, INTRO_DELAY } from "../lib/motion";

const BARS = [0.55, 1, 0.7, 0.9, 0.45];

function Equalizer({ playing }) {
  return (
    <span className="flex h-3.5 items-end gap-[2px]" aria-hidden>
      {BARS.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-sky"
          animate={playing ? { height: ["20%", `${h * 100}%`, "35%", `${h * 80}%`, "20%"] } : { height: "20%" }}
          transition={playing ? { duration: 1.1 + i * 0.13, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
        />
      ))}
    </span>
  );
}

// Floating "now playing" widget pinned to the bottom-left corner.
export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    const onTime = () => setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
    const onPause = () => setPlaying(false);
    const onPlay = () => setPlaying(true);
    const onError = () => {
      setFailed(true);
      setPlaying(false);
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("error", onError);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("error", onError);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (failed) return;
    if (audio.paused) {
      audio.volume = 0.45;
      audio.play().catch(() => setFailed(true));
    } else {
      audio.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: INTRO_DELAY + 1.2, duration: 0.8, ease: EASE }}
      className="fixed bottom-4 left-4 z-[65] w-[152px] sm:bottom-6 sm:left-6 sm:w-[210px]"
    >
      <audio ref={audioRef} src={TRACK.src} loop preload="none" />
      <div className="glass relative overflow-hidden rounded-2xl p-2 sm:p-3">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span
            className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cobalt to-azure text-snow sm:h-10 sm:w-10 ${
              playing ? "animate-spin-slow" : ""
            }`}
          >
            <Music2 size={15} />
            <span className="absolute h-1.5 w-1.5 rounded-full bg-ink" />
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-sky sm:text-[9px]">
                {failed ? "No track" : playing ? "Now playing" : "Play"}
              </p>
              <Equalizer playing={playing} />
            </div>
            <p className="mt-0.5 truncate font-display text-[11px] font-semibold text-snow sm:text-xs">{TRACK.title}</p>
            <p className="hidden truncate text-[10px] text-slate sm:block">{TRACK.artist}</p>
          </div>

          <button
            type="button"
            onClick={toggle}
            disabled={failed}
            aria-label={playing ? "Pause music" : "Play music"}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-snow text-ink transition-transform duration-300 hover:scale-110 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 sm:h-9 sm:w-9"
          >
            {playing ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
          </button>
        </div>

        <div className="mt-2 h-[2px] overflow-hidden rounded-full bg-white/10 sm:mt-2.5">
          <div className="h-full bg-gradient-to-r from-azure to-sky" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
      <span className="pointer-events-none absolute -right-2.5 -top-3 hidden select-none text-xl sm:block" aria-hidden>
        🎧
      </span>
    </motion.div>
  );
}
