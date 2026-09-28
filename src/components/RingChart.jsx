import { useEffect, useRef, useState } from "react";

export default function RingChart({ easy, medium, hard, total }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const R  = 60;
  const CX = 80;
  const CY = 80;
  const C  = 2 * Math.PI * R;
  const t  = total > 0 ? total : 1;

  const eL = animated ? (easy   / t) * C : 0;
  const mL = animated ? (medium / t) * C : 0;
  const hL = animated ? (hard   / t) * C : 0;

  const mOff = -((easy           / t) * C);
  const hOff = -((easy + medium) / t) * C;

  const dur = "1.2s cubic-bezier(0.4,0,0.2,1)";

  return (
    <div ref={ref} style={{ position: "relative", width: 160, height: 160, flexShrink: 0 }}>
      <svg width={160} height={160} style={{ overflow: "visible" }}>
        <circle cx={CX} cy={CY} r={R + 14} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={1} strokeDasharray="3 6" />
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={11} />
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="#93b4ff" strokeWidth={11}
          strokeLinecap="butt"
          strokeDasharray={`${eL} ${C}`}
          strokeDashoffset={0}
          transform={`rotate(-90 ${CX} ${CY})`}
          style={{ transition: animated ? `stroke-dasharray ${dur}` : "none", filter: "drop-shadow(0 0 6px #93b4ff)" }}
        />
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="#3b82f6" strokeWidth={11}
          strokeLinecap="butt"
          strokeDasharray={`${mL} ${C}`}
          strokeDashoffset={mOff}
          transform={`rotate(-90 ${CX} ${CY})`}
          style={{ transition: animated ? `stroke-dasharray ${dur} 0.2s` : "none", filter: "drop-shadow(0 0 6px #3b82f6)" }}
        />
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="#f5f7ff" strokeWidth={11}
          strokeLinecap="butt"
          strokeDasharray={`${hL} ${C}`}
          strokeDashoffset={hOff}
          transform={`rotate(-90 ${CX} ${CY})`}
          style={{ transition: animated ? `stroke-dasharray ${dur} 0.4s` : "none", filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))" }}
        />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <span style={{ fontSize: 28, fontWeight: 900, color: "#f0f4ff", fontFamily: "var(--font-display)", lineHeight: 1, textShadow: "0 0 24px rgba(255,255,255,0.25)" }}>
          {total}
        </span>
        <span style={{ fontSize: 9, color: "#9aa6c4", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", marginTop: 4 }}>
          SOLVED
        </span>
      </div>
    </div>
  );
}
