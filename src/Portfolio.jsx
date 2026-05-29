import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  GitBranch,
  Link2,
  Mail,
  ExternalLink,
  Trophy,
  Award,
  ChevronDown,
  Menu,
  X,
  Copy,
  Check,
  Terminal,
  Code2,
  Database,
  Cloud,
  Layers,
  Cpu,
} from "lucide-react";

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const NAV_LINKS = ["Home", "About", "Skills", "Experience", "Projects", "Coding", "Contact"];

const SKILLS = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript"],
  Backend: ["Node.js", "Express.js", "Flask"],
  Frontend: ["Next.js", "React.js"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL"],
  "Cloud & Infra": ["AWS Lambda", "AWS Cognito", "Docker", "Serverless Framework", "CI/CD", "Prisma ORM", "Git"],
  Core: ["REST APIs", "Auth & Authorization", "OOP", "Design Patterns", "Data Structures", "ACID Transactions"],
};

const SKILL_ICONS = {
  Languages: <Code2 size={15} />,
  Backend: <Layers size={15} />,
  Frontend: <Terminal size={15} />,
  Databases: <Database size={15} />,
  "Cloud & Infra": <Cloud size={15} />,
  Core: <Cpu size={15} />,
};

const SKILL_ACCENTS = {
  Languages:    { color: "#00f5ff", glow: "rgba(0,245,255,0.11)",    border: "rgba(0,245,255,0.28)",    pillBg: "rgba(0,245,255,0.07)",    pillBorder: "rgba(0,245,255,0.22)",    pillGlow: "0 0 10px rgba(0,245,255,0.5)"    },
  Backend:      { color: "#34d399", glow: "rgba(52,211,153,0.11)",   border: "rgba(52,211,153,0.28)",   pillBg: "rgba(52,211,153,0.07)",   pillBorder: "rgba(52,211,153,0.22)",   pillGlow: "0 0 10px rgba(52,211,153,0.5)"   },
  Frontend:     { color: "#f472b6", glow: "rgba(244,114,182,0.11)",  border: "rgba(244,114,182,0.28)",  pillBg: "rgba(244,114,182,0.07)",  pillBorder: "rgba(244,114,182,0.22)",  pillGlow: "0 0 10px rgba(244,114,182,0.5)"  },
  Databases:    { color: "#60a5fa", glow: "rgba(96,165,250,0.11)",   border: "rgba(96,165,250,0.28)",   pillBg: "rgba(96,165,250,0.07)",   pillBorder: "rgba(96,165,250,0.22)",   pillGlow: "0 0 10px rgba(96,165,250,0.5)"   },
  "Cloud & Infra": { color: "#a78bfa", glow: "rgba(167,139,250,0.11)", border: "rgba(167,139,250,0.28)", pillBg: "rgba(167,139,250,0.07)", pillBorder: "rgba(167,139,250,0.22)", pillGlow: "0 0 10px rgba(167,139,250,0.5)" },
  Core:         { color: "#fb923c", glow: "rgba(251,146,60,0.11)",   border: "rgba(251,146,60,0.28)",   pillBg: "rgba(251,146,60,0.07)",   pillBorder: "rgba(251,146,60,0.22)",   pillGlow: "0 0 10px rgba(251,146,60,0.5)"   },
};

const EXPERIENCES = [
  {
    company: "Secure Blink",
    role: "Backend Developer Intern",
    period: "Aug 2025 – Dec 2025",
    tag: "Security · Serverless",
    color: "#00f5ff",
    monogram: "SB",
    mission: "01",
    metrics: [
      { value: 61, suffix: "%", label: "Latency Reduced" },
      { value: 15, suffix: "+", label: "APIs Secured" },
      { value: 3,  suffix: "",  label: "Breaches Blocked" },
    ],
    bullets: [
      "Monolith → serverless Lambda migration: cold-start latency 61% down (2.3s → 890ms)",
      "RBAC system protecting 15+ API endpoints, blocked 3 unauthorized access events",
      "Static code analysis engine detecting OWASP Top 10 vulnerabilities",
    ],
  },
  {
    company: "Labfox.Studio",
    role: "Full Stack Developer Intern",
    period: "Mar 2025 – May 2025",
    tag: "Frontend · Performance",
    color: "#a78bfa",
    monogram: "LF",
    mission: "02",
    metrics: [
      { value: 50, suffix: "%", label: "Faster Load" },
      { value: 18, suffix: "%", label: "Bounce Drop" },
      { value: 12, suffix: "%", label: "Session Gain" },
    ],
    bullets: [
      "Page load time cut by 50% → 18% bounce rate drop, 12% session length increase",
      "Built reusable React component library using atomic design principles",
    ],
  },
];

const PROJECTS = [
  {
    id: "01",
    name: "Code Battle Ground",
    subtitle: "Competitive Programming Arena",
    color: "#00f5ff",
    stats: [
      { value: 5, suffix: "",  decimals: 0, label: "Languages" },
      { value: 0, suffix: "",  decimals: 0, label: "Breaches" },
      { value: 2, suffix: "s", decimals: 0, label: "Exec Limit" },
    ],
    stack: ["Next.js", "PostgreSQL", "Docker"],
    bullets: [
      "Multi-tenant platform with real-time leaderboards & automated judging",
      "ACID-compliant PostgreSQL schema - zero data corruption under peak contest traffic",
      "Docker sandbox: 512MB RAM / 2s limit, 5 languages, zero breaches",
    ],
    github: "https://github.com/ramtejvigna/CodeBattleGround",
  },
  {
    id: "02",
    name: "Vedic Baby Names",
    subtitle: "CRM Automation",
    color: "#f59e0b",
    stats: [
      { value: 87,   suffix: "%", decimals: 0, label: "Time Saved" },
      { value: 99.2, suffix: "%", decimals: 1, label: "API Uptime" },
      { value: 70,   suffix: "%", decimals: 0, label: "Less Errors" },
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    bullets: [
      "Full-stack CRM cutting fulfillment time 87% (15 min → 2 min)",
      "Express + MongoDB backend: 99.2% API uptime, 70% fewer server errors",
      "End-to-end automation of order processing workflow",
    ],
    github: "https://github.com/ramtejvigna/CRM-vedic",
  },
  {
    id: "03",
    name: "AMILE",
    subtitle: "Career Development & Talent Networking",
    color: "#a78bfa",
    stats: [
      { value: 11, suffix: "",  decimals: 0, label: "Endpoints" },
      { value: 60, suffix: "%", decimals: 0, label: "Fewer Bugs" },
      { value: 60, suffix: "%", decimals: 0, label: "Faster API" },
    ],
    stack: ["React.js", "Node.js", "MongoDB"],
    bullets: [
      "NLP-based mock interview system with 11 backend endpoints",
      "API response time halved (450ms → 180ms), production bugs cut 60%",
      "8 frontend features for talent networking and career growth",
    ],
    github: "https://github.com/ramtejvigna/AMILE",
  },
  {
    id: "04",
    name: "Multimodal Sentiment Analyzer",
    subtitle: "Deep Learning · Emotion Recognition",
    color: "#ec4899",
    stats: [
      { value: 94.6,  suffix: "%",  decimals: 1, label: "Text Accuracy" },
      { value: 80,  suffix: "%",  decimals: 0, label: "Face Accuracy" },
      { value: 100, suffix: "ms", decimals: 0, label: "Latency"       },
    ],
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
    bullets: [
      "ResNet-50 + MTCNN pipeline with 3D depth landmark extraction — 80%+ facial emotion accuracy on RAF-DB dataset",
      "Attention-augmented BiLSTM with GloVe embeddings achieves 94% sentiment accuracy on IMDb 50K reviews",
      "Adaptive Late Fusion with confidence-based dynamic weighting resolves cross-modal conflicts in <100 ms end-to-end",
    ],
    github: "https://github.com/ramtejvigna/multimodel-sentiment/tree/v2",
  },
];

const STACK_COLORS = {
  "Next.js":     "bg-zinc-800 text-zinc-200 border-zinc-600",
  "PostgreSQL":  "bg-blue-950 text-blue-300 border-blue-700",
  "Docker":      "bg-sky-950 text-sky-300 border-sky-700",
  "React.js":    "bg-cyan-950 text-cyan-300 border-cyan-700",
  "Node.js":     "bg-green-950 text-green-300 border-green-700",
  "Express.js":  "bg-neutral-800 text-neutral-300 border-neutral-600",
  "MongoDB":     "bg-emerald-950 text-emerald-300 border-emerald-700",
  "Python":      "bg-yellow-950 text-yellow-300 border-yellow-700",
  "TensorFlow":  "bg-orange-950 text-orange-300 border-orange-700",
  "Keras":       "bg-red-950 text-red-300 border-red-800",
  "OpenCV":      "bg-teal-950 text-teal-300 border-teal-700",
  "Flask":       "bg-stone-800 text-stone-300 border-stone-600",
};

const ACHIEVEMENTS = [
  {
    icon: <Trophy size={26} />,
    rank: "WINNER",
    color: "#f59e0b",
    index: "ACH_01",
    event: "Hackoverflow 2K24",
    scale: "National Level",
    year: "2024",
    stats: [
      { value: "24h",  label: "Build Sprint" },
      { value: "250+", label: "Teams Competed" },
      { value: "#1",   label: "Final Rank" },
    ],
    title: "Winner – Hackoverflow 2K24",
    desc: "National-level hackathon. Competed against top engineering teams across India to build an innovative solution under 24 hours.",
  },
  {
    icon: <Award size={26} />,
    rank: "BEST JUNIOR",
    color: "#22d3ee",
    index: "ACH_02",
    event: "SIH Internal 2023",
    scale: "Internal Selection",
    year: "2023",
    stats: [
      { value: "250+",   label: "Teams" },
      { value: "Junior", label: "Category" },
      { value: "#1",     label: "Junior Rank" },
    ],
    title: "Best Junior Team – SIH Internal 2023",
    desc: "Selected as the best junior team out of 250+ competing teams in the Smart India Hackathon internal selection round.",
  },
];

const DSA_CONFIG = {
  leetcode: {
    username: "ramtejvigna",
    color: "#FFA116",
    glow: "rgba(255,161,22,0.14)",
    border: "rgba(255,161,22,0.3)",
    profileUrl: "https://leetcode.com/u/ramtejvigna",
    fallback: { solved: 0, easy: 0, medium: 0, hard: 0, contestRating: null, contestRank: null },
  },
  github: {
    username: "ramtejvigna",
    color: "#e2e8f0",
    glow: "rgba(226,232,240,0.07)",
    border: "rgba(226,232,240,0.18)",
    profileUrl: "https://github.com/ramtejvigna",
    fallback: { repos: 0, followers: 0, contributions: 0 },
  },
};

// ─────────────────────────────────────────────
// PARTICLE CANVAS  — Fibonacci Sphere
// ─────────────────────────────────────────────
function NeuralCanvas({ explode }) {
  const canvasRef = useRef(null);
  const simRef = useRef({ particles: [], pulses: [], animId: null });
  const explodeRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const sim = simRef.current;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // ── Init particles with depth-based layering ──
    const count = 120;
    sim.particles = Array.from({ length: count }, () => {
      const depth = Math.random(); // 0 = near, 1 = far
      const speed = 0.10 + (1 - depth) * 0.22;
      const dvx = (Math.random() - 0.5) * speed;
      const dvy = (Math.random() - 0.5) * speed;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dvx, dvy, vx: dvx, vy: dvy,
        depth,
        size: (0.5 + Math.random() * 1.6) * (1 - depth * 0.6),
        baseOpacity: (0.18 + Math.random() * 0.52) * (1 - depth * 0.55),
        pulse: Math.random() * Math.PI * 2,
        isHub: false,
        isCyan: Math.random() > 0.28,
      };
    });

    // Upgrade 10 random nodes to glowing hubs
    const hubSet = new Set();
    while (hubSet.size < 10) hubSet.add(Math.floor(Math.random() * count));
    for (const i of hubSet) {
      const p = sim.particles[i];
      p.isHub = true;
      p.size = (p.size + 0.8) * 2;
      p.baseOpacity = Math.min(0.82, p.baseOpacity * 2.2);
    }

    sim.pulses = [];

    function draw() {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const pts = sim.particles;
      const maxDist = 130;

      // Move all particles (wrap at edges)
      for (const p of pts) {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
        p.pulse += 0.015;
      }

      // Draw constellation connection lines
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          if (Math.abs(p.depth - q.depth) > 0.38) continue;
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d >= maxDist) continue;
          const nearness = 1 - (p.depth + q.depth) / 2;
          const alpha = (1 - d / maxDist) * 0.15 * (0.35 + nearness * 0.65);
          const rgb = (p.isCyan && q.isCyan) ? "0,245,255"
            : (!p.isCyan && !q.isCyan) ? "124,58,237"
            : "60,180,220";
          ctx.strokeStyle = `rgba(${rgb},${alpha})`;
          ctx.lineWidth = 0.3 + nearness * 0.45;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      // Update and draw data-pulse signals
      for (let i = sim.pulses.length - 1; i >= 0; i--) {
        const pulse = sim.pulses[i];
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) { sim.pulses.splice(i, 1); continue; }
        const p = pts[pulse.src], q = pts[pulse.dst];
        const dx = p.x - q.x, dy = p.y - q.y;
        if (Math.sqrt(dx * dx + dy * dy) >= maxDist) { sim.pulses.splice(i, 1); continue; }
        const px = p.x + (q.x - p.x) * pulse.progress;
        const py = p.y + (q.y - p.y) * pulse.progress;
        const nearness = 1 - (p.depth + q.depth) / 2;
        const bright = 0.55 + nearness * 0.45;
        const rgb = p.isCyan ? "0,245,255" : "124,58,237";
        // glow halo
        ctx.beginPath();
        ctx.arc(px, py, 5 + nearness * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${bright * 0.22})`;
        ctx.fill();
        // bright core
        ctx.beginPath();
        ctx.arc(px, py, 1.4 + nearness * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${bright})`;
        ctx.fill();
      }

      // Randomly spawn new data pulses
      if (Math.random() < 0.025 && sim.pulses.length < 18) {
        const src = Math.floor(Math.random() * pts.length);
        const p = pts[src];
        for (let j = 0; j < pts.length; j++) {
          if (j === src) continue;
          const q = pts[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist && Math.abs(p.depth - q.depth) < 0.38) {
            sim.pulses.push({ src, dst: j, progress: 0, speed: 0.006 + Math.random() * 0.01 });
            break;
          }
        }
      }

      // Draw nodes
      for (const p of pts) {
        const pulseOpacity = p.baseOpacity * (0.72 + 0.28 * Math.sin(p.pulse));
        const drawSize = Math.max(0.3, p.size);
        const rgb = p.isCyan ? "0,245,255" : "124,58,237";
        if (p.isHub) {
          const glowR = drawSize * 5;
          const g = ctx.createRadialGradient(p.x, p.y, drawSize * 0.5, p.x, p.y, glowR);
          g.addColorStop(0, `rgba(${rgb},${pulseOpacity * 0.38})`);
          g.addColorStop(1, `rgba(${rgb},0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${pulseOpacity})`;
        ctx.fill();
      }

      sim.animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(sim.animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const pts = simRef.current.particles;
    const cx = canvas.width / 2, cy = canvas.height / 2;
    if (explode && !explodeRef.current) {
      for (const p of pts) {
        const dx = p.x - cx, dy = p.y - cy;
        const d = Math.sqrt(dx * dx + dy * dy) || 1;
        const speed = 1.5 + Math.random() * 3;
        p.vx = (dx / d) * speed;
        p.vy = (dy / d) * speed;
      }
      simRef.current.pulses = [];
    }
    if (!explode && explodeRef.current) {
      for (const p of pts) {
        p.vx = p.dvx;
        p.vy = p.dvy;
      }
    }
    explodeRef.current = explode;
  }, [explode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

// ─────────────────────────────────────────────
// TYPEWRITER
// ─────────────────────────────────────────────
const ROLES = ["Software Developer Engineer","Freelancer", "Educator", "Tech Enthusiast"];
function useTypewriter() {
  const [display, setDisplay] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout;
    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx((c) => c - 1), 45);
      } else {
        setDeleting(false);
        setRoleIdx((r) => (r + 1) % ROLES.length);
      }
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return display;
}

// ─────────────────────────────────────────────
// DSA DATA HOOKS
// ─────────────────────────────────────────────
function useLeetCodeStats(username) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const BASE = "https://alfa-leetcode-api.onrender.com";
    Promise.allSettled([
      fetch(`${BASE}/${username}/solved`).then((r) => r.json()),
      fetch(`${BASE}/${username}/contest`).then((r) => r.json()),
    ]).then(([solvedRes, contestRes]) => {
      const solved  = solvedRes.status  === "fulfilled" ? solvedRes.value  : null;
      const contest = contestRes.status === "fulfilled" ? contestRes.value : null;
      if (solved && typeof solved.solvedProblem === "number") {
        setData({
          solved:        solved.solvedProblem,
          easy:          solved.easySolved   ?? 0,
          medium:        solved.mediumSolved ?? 0,
          hard:          solved.hardSolved   ?? 0,
          contestRating: contest?.contestRating  ?? null,
          contestRank:   contest?.contestRanking ?? null,
        });
      } else {
        setData(DSA_CONFIG.leetcode.fallback);
      }
      setLoading(false);
    }).catch(() => {
      setData(DSA_CONFIG.leetcode.fallback);
      setLoading(false);
    });
  }, [username]);

  return { data, loading };
}

function useGitHubStats(username) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled([
      fetch(`https://api.github.com/users/${username}`).then((r) => r.json()),
      fetch(`https://github-contributions-api.jogruber.de/v4/${username}`).then((r) => r.json()),
    ]).then(([userRes, contribRes]) => {
      const user   = userRes.status   === "fulfilled" ? userRes.value   : null;
      const contrib = contribRes.status === "fulfilled" ? contribRes.value : null;
      const year   = new Date().getFullYear().toString();
      const totalContribs =
        contrib?.total?.[year] ??
        (contrib?.total
          ? Object.values(contrib.total).reduce((a, b) => a + b, 0)
          : DSA_CONFIG.github.fallback.contributions);
      const contribData = contrib?.contributions ?? [];
      if (user && user.public_repos != null) {
        setData({ repos: user.public_repos, followers: user.followers, contributions: totalContribs, contribData });
      } else {
        setData({ ...DSA_CONFIG.github.fallback, contributions: totalContribs, contribData });
      }
      setLoading(false);
    }).catch(() => {
      setData({ ...DSA_CONFIG.github.fallback, contribData: [] });
      setLoading(false);
    });
  }, [username]);

  return { data, loading };
}

// ─────────────────────────────────────────────
// SECTION WRAPPER (fade-slide-up)
// ─────────────────────────────────────────────
function Section({ id, className = "", children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────
// COUNT-UP STAT
// ─────────────────────────────────────────────
function CountUp({ target, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const start = performance.now();
    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setValue(parseFloat((ease * target).toFixed(decimals)));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [started, target, decimals]);

  return <span ref={ref}>{value.toFixed(decimals)}{suffix}</span>;
}

// ─────────────────────────────────────────────
// RING CHART — SVG donut for difficulty split
// ─────────────────────────────────────────────
function RingChart({ easy, medium, hard, total }) {
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
        {/* Outer dashed decoration */}
        <circle cx={CX} cy={CY} r={R + 14} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={1} strokeDasharray="3 6" />
        {/* Track */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={11} />
        {/* Easy */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="#22c55e" strokeWidth={11}
          strokeLinecap="butt"
          strokeDasharray={`${eL} ${C}`}
          strokeDashoffset={0}
          transform={`rotate(-90 ${CX} ${CY})`}
          style={{ transition: animated ? `stroke-dasharray ${dur}` : "none", filter: "drop-shadow(0 0 6px #22c55e)" }}
        />
        {/* Medium */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="#f59e0b" strokeWidth={11}
          strokeLinecap="butt"
          strokeDasharray={`${mL} ${C}`}
          strokeDashoffset={mOff}
          transform={`rotate(-90 ${CX} ${CY})`}
          style={{ transition: animated ? `stroke-dasharray ${dur} 0.2s` : "none", filter: "drop-shadow(0 0 6px #f59e0b)" }}
        />
        {/* Hard */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="#ef4444" strokeWidth={11}
          strokeLinecap="butt"
          strokeDasharray={`${hL} ${C}`}
          strokeDashoffset={hOff}
          transform={`rotate(-90 ${CX} ${CY})`}
          style={{ transition: animated ? `stroke-dasharray ${dur} 0.4s` : "none", filter: "drop-shadow(0 0 6px #ef4444)" }}
        />
      </svg>
      {/* Center label */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <span style={{ fontSize: 28, fontWeight: 900, color: "#f0f4ff", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1, textShadow: "0 0 24px rgba(255,255,255,0.25)" }}>
          {total}
        </span>
        <span style={{ fontSize: 9, color: "#475569", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.12em", marginTop: 4 }}>
          SOLVED
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CONTRIBUTION HEATMAP
// ─────────────────────────────────────────────
function ContribHeatmap({ contribData }) {
  const WEEKS = 30;
  const DAYS  = 7;
  const size  = 9;
  const gap   = 2;

  const levelColors = [
    "rgba(255,255,255,0.04)", // 0 — none
    "rgba(34,197,94,0.22)",   // 1 — low
    "rgba(34,197,94,0.48)",   // 2 — medium
    "rgba(34,197,94,0.74)",   // 3 — high
    "#22c55e",                // 4 — max
  ];

  const recent = Array.isArray(contribData) ? contribData.slice(-(WEEKS * DAYS)) : [];
  const padded = [...Array(Math.max(0, WEEKS * DAYS - recent.length)).fill({ count: 0, level: 0 }), ...recent];
  const weeks  = Array.from({ length: WEEKS }, (_, w) => padded.slice(w * DAYS, w * DAYS + DAYS));
  const svgW   = WEEKS * (size + gap) - gap;
  const svgH   = DAYS  * (size + gap) - gap;

  return (
    <svg width="100%" viewBox={`0 0 ${svgW} ${svgH}`} style={{ display: "block" }}>
      {weeks.map((week, w) =>
        week.map((day, d) => (
          <rect
            key={`${w}-${d}`}
            x={w * (size + gap)}
            y={d * (size + gap)}
            width={size}
            height={size}
            rx={2}
            fill={levelColors[Math.min(day.level ?? 0, 4)]}
          />
        ))
      )}
    </svg>
  );
}

// ─────────────────────────────────────────────
// PROJECT SHOWCASE — interactive spotlight
// ─────────────────────────────────────────────
function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const proj = PROJECTS[active];

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col lg:grid lg:grid-cols-[1fr_280px]"
      style={{
        border: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(5,8,22,0.72)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.55)",
      }}
    >
      {/* ── LEFT: featured panel ── */}
      <div
        className="relative overflow-hidden p-8 lg:p-10 border-b lg:border-b-0 lg:border-r"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.34 }}
            className="relative"
          >
            {/* Watermark */}
            <div
              className="absolute -top-2 right-0 pointer-events-none select-none"
              style={{
                fontSize: 140,
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 900,
                color: proj.color,
                opacity: 0.04,
                lineHeight: 1,
              }}
            >
              {proj.id}
            </div>

            {/* Identity header */}
            <div className="flex items-center gap-3 mb-5">
              <span
                style={{
                  fontSize: 10,
                  color: proj.color,
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                project_{proj.id}
              </span>
              <span
                style={{
                  flex: 1,
                  height: 1,
                  background: `linear-gradient(90deg, ${proj.color}44, transparent)`,
                }}
              />
            </div>

            {/* Name + subtitle */}
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(26px, 4vw, 38px)",
                fontWeight: 800,
                color: "#f0f4ff",
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              {proj.name}
            </h3>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                color: proj.color,
                marginBottom: 24,
                opacity: 0.8,
              }}
            >
              {proj.subtitle}
            </p>

            {/* Stack chips */}
            <div className="flex flex-wrap gap-2 mb-7">
              {proj.stack.map((s) => (
                <span
                  key={s}
                  className={`text-xs px-2.5 py-1 rounded-lg border ${STACK_COLORS[s] || "bg-zinc-800 text-zinc-300 border-zinc-600"}`}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-7">
              {proj.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 32,
                      fontWeight: 800,
                      color: proj.color,
                      lineHeight: 1,
                    }}
                  >
                    <CountUp target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </span>
                  <span style={{ fontSize: 11, color: "#475569", fontFamily: "'Inter', sans-serif" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-3 mb-8">
              {proj.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                  <span style={{ color: proj.color, flexShrink: 0, marginTop: 2 }}>▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div
              className="flex items-center justify-between pt-5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  color: proj.color,
                  fontFamily: "'JetBrains Mono', monospace",
                  padding: "7px 16px",
                  borderRadius: 8,
                  border: `1px solid ${proj.color}33`,
                  background: `${proj.color}0d`,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${proj.color}1f`;
                  e.currentTarget.style.borderColor = `${proj.color}66`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${proj.color}0d`;
                  e.currentTarget.style.borderColor = `${proj.color}33`;
                }}
              >
                <GitBranch size={13} /> GitHub <ExternalLink size={11} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── RIGHT: project index ── */}
      <div
        className="flex flex-col p-6"
        style={{ background: "rgba(5,8,22,0.45)" }}
      >
        <span
          style={{
            fontSize: 9,
            color: "#64748b",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 12,
            display: "block",
          }}
        >
          / project_index
        </span>

        <div className="flex flex-col gap-2">
          {PROJECTS.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  padding: "14px 12px",
                  borderRadius: 12,
                  background: isActive ? `${p.color}12` : "transparent",
                  border: `1px solid ${isActive ? p.color + "30" : "transparent"}`,
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.22s",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = "transparent";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      fontSize: 10,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: isActive ? p.color : "#64748b",
                      fontWeight: 700,
                      transition: "color 0.22s",
                    }}
                  >
                    {p.id}
                  </span>
                  {isActive && (
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: p.color,
                        display: "inline-block",
                        boxShadow: `0 0 7px ${p.color}`,
                      }}
                    />
                  )}
                </div>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: isActive ? "#f0f4ff" : "#475569",
                    fontFamily: "'Space Grotesk', sans-serif",
                    transition: "color 0.22s",
                  }}
                >
                  {p.name}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: isActive ? p.color : "#64748b",
                    fontFamily: "'JetBrains Mono', monospace",
                    transition: "color 0.22s",
                    opacity: isActive ? 0.75 : 1,
                  }}
                >
                  {p.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom totals */}
        <div
          className="mt-auto pt-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span style={{ fontSize: 10, color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>
            {PROJECTS.length} repos · {[...new Set(PROJECTS.flatMap((p) => p.stack))].length} technologies
          </span>
        </div>
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────
// SKILLS ARSENAL — interactive console
// ─────────────────────────────────────────────
function SkillsArsenal() {
  const [activeCat, setActiveCat] = useState(Object.keys(SKILLS)[0]);
  const catKeys = Object.keys(SKILLS);
  const skills = SKILLS[activeCat];
  const accent = SKILL_ACCENTS[activeCat];
  const totalSkills = Object.values(SKILLS).flat().length;

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: "1px solid rgba(0,245,255,0.1)",
        background: "rgba(5,8,16,0.88)",
        backdropFilter: "blur(20px)",
        boxShadow: [
          "inset 0 1px 0 rgba(255,255,255,0.06)",
          "0 0 0 1px rgba(255,255,255,0.03)",
          "0 24px 64px rgba(0,0,0,0.6)",
          "0 0 100px rgba(0,245,255,0.025)",
        ].join(", "),
      }}
    >
      {/* ── macOS title bar ── */}
      <div
        className="flex items-center gap-3 px-5 py-3.5"
        style={{ background: "rgba(255,255,255,0.025)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex gap-1.5">
          {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
            <span key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "inline-block" }} />
          ))}
        </div>
        <span style={{ marginLeft: 8, fontSize: 11, color: "#2d4a6b", fontFamily: "'JetBrains Mono', monospace" }}>
          vigna@arsenal — module_registry
        </span>
        <span style={{ marginLeft: "auto", fontSize: 10, color: "#1e3a5f", fontFamily: "'JetBrains Mono', monospace" }}>
          {catKeys.length} modules · {totalSkills} pkgs indexed
        </span>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col lg:flex-row" style={{ minHeight: 400 }}>

        {/* ── LEFT RAIL: module selector ── */}
        <div
          className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible shrink-0 lg:w-52"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="hidden lg:flex items-center px-4 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <span style={{ fontSize: 9, color: "#1e3a5f", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              / modules
            </span>
          </div>

          {catKeys.map((cat, i) => {
            const acc = SKILL_ACCENTS[cat];
            const isActive = cat === activeCat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className="flex items-center gap-2.5 px-4 py-3.5 shrink-0 lg:w-full text-left relative"
                style={{
                  background: isActive ? acc.glow : "transparent",
                  borderLeft: `2.5px solid ${isActive ? acc.color : "transparent"}`,
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  transition: "background 0.18s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.025)"; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
              >
                <span style={{ fontSize: 10, color: isActive ? acc.color : "#1e3a5f", fontFamily: "'JetBrains Mono', monospace", minWidth: 18 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ color: isActive ? acc.color : "#2d4a6b", flexShrink: 0 }}>
                  {SKILL_ICONS[cat]}
                </span>
                <span
                  className="hidden sm:block"
                  style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: isActive ? acc.color : "#64748b", fontWeight: isActive ? 600 : 400, flex: 1, whiteSpace: "nowrap" }}
                >
                  {cat}
                </span>
                <span
                  style={{
                    fontSize: 10, padding: "1px 5px", borderRadius: 4, marginLeft: "auto",
                    background: isActive ? acc.pillBg : "rgba(255,255,255,0.03)",
                    color: isActive ? acc.color : "#1e3a5f",
                    fontFamily: "'JetBrains Mono', monospace",
                    border: `1px solid ${isActive ? acc.pillBorder : "rgba(255,255,255,0.05)"}`,
                    flexShrink: 0,
                  }}
                >
                  {SKILLS[cat].length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Vertical divider – desktop only */}
        <div className="hidden lg:block w-px shrink-0" style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* ── RIGHT PANEL: skill manifest ── */}
        <div
          className="flex-1 min-w-0 flex flex-col"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.022) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex flex-col flex-1"
            >
              {/* Panel header */}
              <div
                className="flex items-center gap-4 px-6 py-4"
                style={{
                  borderBottom: `1px solid ${accent.border}`,
                  background: `linear-gradient(90deg, ${accent.glow} 0%, transparent 60%)`,
                }}
              >
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                  style={{ background: accent.glow, border: `1px solid ${accent.border}`, color: accent.color, boxShadow: `0 0 20px ${accent.glow}` }}
                >
                  {SKILL_ICONS[activeCat]}
                </div>
                <div className="flex flex-col">
                  <span style={{ fontSize: 15, fontFamily: "'Space Grotesk', sans-serif", color: accent.color, fontWeight: 700, letterSpacing: "0.03em" }}>
                    {activeCat.toUpperCase().replace(/ /g, "_")}
                  </span>
                  <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "#64748b" }}>
                    {skills.length} pkgs · status: stable
                  </span>
                </div>
                <div className="ml-auto flex items-center gap-2 shrink-0">
                  <motion.span
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ width: 7, height: 7, borderRadius: "50%", background: "#22d3ee", display: "inline-block", boxShadow: "0 0 9px rgba(34,211,238,0.9)" }}
                  />
                  <span style={{ fontSize: 10, color: "#22d3ee", fontFamily: "'JetBrains Mono', monospace" }}>ACTIVE</span>
                </div>
              </div>

              {/* Skills grid */}
              <div className="p-6 grid sm:grid-cols-2 gap-2.5 flex-1">
                {skills.map((skill, pi) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: pi * 0.055, duration: 0.22 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      transition: "background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = accent.pillBg;
                      e.currentTarget.style.borderColor = accent.pillBorder;
                      e.currentTarget.style.boxShadow = accent.pillGlow;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <motion.span
                      animate={{ opacity: [0.55, 1, 0.55] }}
                      transition={{ duration: 2.5 + pi * 0.35, repeat: Infinity }}
                      style={{ width: 5, height: 5, borderRadius: "50%", background: accent.color, flexShrink: 0, boxShadow: `0 0 6px ${accent.color}` }}
                    />
                    <span style={{ fontSize: 13, fontFamily: "'Inter', sans-serif", color: "#cbd5e1", fontWeight: 500, flex: 1 }}>
                      {skill}
                    </span>
                    <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#1e3a5f" }}>
                      ✓ ready
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Console footer */}
              <div
                className="flex items-center px-6 py-2.5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(5,8,16,0.5)" }}
              >
                <span style={{ fontSize: 10, color: "#1e3a5f", fontFamily: "'JetBrains Mono', monospace" }}>
                  &gt;_ {activeCat.toLowerCase().replace(/ /g, "_")}.module loaded
                </span>
                <span style={{ marginLeft: "auto", fontSize: 10, color: "#1e3a5f", fontFamily: "'JetBrains Mono', monospace" }}>
                  prod-ready
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN PORTFOLIO
// ─────────────────────────────────────────────
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [heroExploded, setHeroExploded] = useState(false);
  const typewriter = useTypewriter();

  // ── DSA stats ───────────────────────────
  const { data: lcData, loading: lcLoading } = useLeetCodeStats(DSA_CONFIG.leetcode.username);
  const { data: ghData, loading: ghLoading } = useGitHubStats(DSA_CONFIG.github.username);

  // ── Hero 3D tilt motion values ──────────
  const heroMouseX = useMotionValue(0);
  const heroMouseY = useMotionValue(0);
  const springHeroX = useSpring(heroMouseX, { stiffness: 55, damping: 22 });
  const springHeroY = useSpring(heroMouseY, { stiffness: 55, damping: 22 });

  // ── Scroll progress bar ─────────────────────
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // ── Font injection ──────────────────────────
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600&display=swap');

      html { scroll-behavior: smooth; }

      * { box-sizing: border-box; }

      body { margin: 0; background: #050810; color: #f0f4ff; font-family: 'Inter', sans-serif; }

      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-track { background: #050810; }
      ::-webkit-scrollbar-thumb { background: #00f5ff44; border-radius: 10px; }

      @keyframes shimmer {
        0%   { background-position: -200% center; }
        100% { background-position:  200% center; }
      }
      @keyframes bounce-arrow {
        0%, 100% { transform: translateY(0); }
        50%       { transform: translateY(10px); }
      }
      @keyframes grid-fade {
        0%   { opacity: 0.03; }
        100% { opacity: 0.06; }
      }
      .shimmer-border {
        background: linear-gradient(90deg, #00f5ff33, #7c3aed88, #00f5ff33);
        background-size: 200%;
        animation: shimmer 2.8s linear infinite;
      }
      .bounce-arrow { animation: bounce-arrow 1.8s ease-in-out infinite; }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0.35; }
      }
      @keyframes lc-glow-pulse {
        0%, 100% { box-shadow: 0 0 24px rgba(255,161,22,0.12), 0 8px 40px rgba(0,0,0,0.55); }
        50%       { box-shadow: 0 0 52px rgba(255,161,22,0.26), 0 8px 40px rgba(0,0,0,0.55); }
      }
      @keyframes gh-glow-pulse {
        0%, 100% { box-shadow: 0 0 20px rgba(226,232,240,0.06), 0 8px 40px rgba(0,0,0,0.55); }
        50%       { box-shadow: 0 0 42px rgba(226,232,240,0.13), 0 8px 40px rgba(0,0,0,0.55); }
      }
      .lc-glow { animation: lc-glow-pulse 3.2s ease-in-out infinite; }
      .gh-glow { animation: gh-glow-pulse 4s   ease-in-out infinite; }
      .dsa-skeleton { animation: pulse 1.8s ease-in-out infinite; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // ── Scroll state ──────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── IntersectionObserver for active nav ──
  useEffect(() => {
    const sections = NAV_LINKS.map((n) => document.getElementById(n));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.getElementById("Home");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        setHeroExploded(!entry.isIntersecting);
      },
      { threshold: 0.98 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  function copyEmail() {
    navigator.clipboard.writeText("vignaramtej46@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  // ── Hero name letters ─────────────────────
  const heroName = "Vigna Ramtej";
  const nameLetters = heroName.split("");

  // ─────────────────────────────────────────
  return (
    <div style={{ background: "#050810", minHeight: "100vh" }}>

      {/* ── GRID OVERLAY (subtle) ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ════════════════════════════════════ */}
      {/* NAVBAR                               */}
      {/* ════════════════════════════════════ */}
      {/* ── Scroll progress bar ── */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          width: progressWidth,
          background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
          zIndex: 100,
          boxShadow: "0 0 10px rgba(0,245,255,0.5)",
          transformOrigin: "left",
        }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => scrollTo("Home")} className="flex items-center gap-2">
            <span
              className="text-xl font-bold px-2 py-0.5 rounded border"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#00f5ff",
                borderColor: "#00f5ff55",
                background: "rgba(0,245,255,0.06)",
                letterSpacing: "0.05em",
              }}
            >
              ~/RT
            </span>
          </button>

          {/* Desktop floating pill nav */}
          <nav
            className="hidden md:flex items-center gap-0.5 p-1 rounded-full"
            style={{
              background: "rgba(5,8,16,0.78)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0,245,255,0.13)",
              boxShadow: "0 0 0 1px rgba(0,245,255,0.04) inset, 0 4px 24px rgba(0,0,0,0.5)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-150"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: activeSection === link ? "#050810" : "#64748b",
                  zIndex: 1,
                }}
              >
                {activeSection === link && (
                  <motion.div
                    layoutId="pill-active"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "#00f5ff", zIndex: -1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.38 }}
                  />
                )}
                {link}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            style={{ color: "#00f5ff" }}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "rgba(5,8,16,0.97)", backdropFilter: "blur(24px)" }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5"
              style={{ color: "#00f5ff" }}
            >
              <X size={26} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.055, duration: 0.28 }}
                  onClick={() => { scrollTo(link); setMenuOpen(false); }}
                  className="text-4xl font-bold"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: activeSection === link ? "#00f5ff" : "#64748b",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {link}
                </motion.button>
              ))}
            </div>
            <p style={{ position: "absolute", bottom: 32, color: "#1e293b", fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>
              tap link to navigate · × to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════ */}
      {/* HERO SECTION                         */}
      {/* ════════════════════════════════════ */}
      <section
        id="Home"
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "100vh" }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          heroMouseX.set(((e.clientX - rect.left - rect.width / 2) / rect.width) * 12);
          heroMouseY.set(((e.clientY - rect.top - rect.height / 2) / rect.height) * -8);
        }}
        onMouseLeave={() => { heroMouseX.set(0); heroMouseY.set(0); }}
      >
        <NeuralCanvas explode={heroExploded} />

        {/* Radial glow centre */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1, background: "radial-gradient(ellipse 65% 50% at 50% 55%, rgba(0,245,255,0.07) 0%, transparent 70%)" }}
        />

        {/* ── HUD corner brackets ── */}
        {[
          { top: "5%",    left: "2.5%",  borderTop: "1px solid rgba(0,245,255,0.22)",    borderLeft: "1px solid rgba(0,245,255,0.22)",    borderRadius: "4px 0 0 0" },
          { top: "5%",    right: "2.5%", borderTop: "1px solid rgba(0,245,255,0.22)",    borderRight: "1px solid rgba(0,245,255,0.22)",   borderRadius: "0 4px 0 0" },
          { bottom: "9%", left: "2.5%",  borderBottom: "1px solid rgba(0,245,255,0.22)", borderLeft: "1px solid rgba(0,245,255,0.22)",    borderRadius: "0 0 0 4px" },
          { bottom: "9%", right: "2.5%", borderBottom: "1px solid rgba(0,245,255,0.22)", borderRight: "1px solid rgba(0,245,255,0.22)",   borderRadius: "0 0 4px 0" },
        ].map((style, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.12, duration: 0.5, ease: "easeOut" }}
            style={{ position: "absolute", width: 28, height: 28, pointerEvents: "none", zIndex: 4, ...style }}
          />
        ))}

        {/* ── 3D perspective grid floor ── */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden"
          style={{ height: "52%", perspective: "600px", perspectiveOrigin: "50% 0%", zIndex: 2 }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "300%",
              left: "-100%",
              height: "280%",
              transform: "rotateX(75deg)",
              transformOrigin: "bottom center",
              backgroundImage: [
                "linear-gradient(rgba(0,245,255,0.07) 1px, transparent 1px)",
                "linear-gradient(90deg, rgba(0,245,255,0.07) 1px, transparent 1px)",
              ].join(", "),
              backgroundSize: "70px 70px",
              WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)",
              maskImage: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)",
            }}
          />
          {/* Horizon glow line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background: "linear-gradient(90deg, transparent 5%, rgba(0,245,255,0.22) 35%, rgba(124,58,237,0.22) 65%, transparent 95%)",
              boxShadow: "0 0 28px rgba(0,245,255,0.12), 0 2px 40px rgba(124,58,237,0.08)",
            }}
          />
        </div>

        {/* ── Floating depth labels (lg+ only) ── */}
        {[
          { text: "> backend_architect", style: { top: "26%",    left: "6%"  }, delay: 0.8, dy: -10 },
          { text: "> available: true",   style: { top: "22%",    right: "6%" }, delay: 1.2, dy: -8  },
          { text: "> full_stack: true",  style: { bottom: "28%", left: "7%"  }, delay: 1.0, dy: 8   },
          { text: "> shipped: prod",     style: { bottom: "24%", right: "6%" }, delay: 1.4, dy: 10  },
        ].map(({ text, style, delay, dy }) => (
          <motion.div
            key={text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 0.9 }}
            className="absolute hidden lg:block pointer-events-none"
            style={{ zIndex: 5, ...style }}
          >
            <motion.span
              animate={{ y: [0, dy, 0] }}
              transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut" }}
              style={{
                display: "block",
                fontSize: 11,
                color: "rgba(0,245,255,0.42)",
                fontFamily: "'JetBrains Mono', monospace",
                background: "rgba(0,245,255,0.04)",
                border: "1px solid rgba(0,245,255,0.1)",
                padding: "5px 12px",
                borderRadius: 8,
                backdropFilter: "blur(6px)",
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
              }}
            >
              {text}
            </motion.span>
          </motion.div>
        ))}

        {/* ── Main content with 3D tilt ── */}
        <motion.div
          style={{
            rotateY: springHeroX,
            rotateX: springHeroY,
            transformPerspective: 1200,
          }}
          className="relative z-10 flex flex-col items-center text-center px-4 gap-6 pt-16"
        >
          {/* Soft glow halo behind content */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: "-48px -72px",
              borderRadius: 56,
              background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,245,255,0.045) 0%, transparent 70%)",
              zIndex: -1,
            }}
          />

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm uppercase tracking-widest"
            style={{ color: "#00f5ff", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.22em" }}
          >
            Chapter 01 // Boot Sequence
          </motion.p>

          {/* Name with stagger + 3D text extrusion */}
          <h1
            className="text-5xl sm:text-7xl font-bold leading-tight"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {nameLetters.map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.045 }}
                style={{
                  color: ch === " " ? "transparent" : "#f0f4ff",
                  display: "inline-block",
                  textShadow: ch !== " "
                    ? "2px 2px 0 rgba(0,245,255,0.18), 4px 4px 0 rgba(0,245,255,0.1), 6px 6px 0 rgba(0,245,255,0.05), 8px 8px 22px rgba(0,245,255,0.1)"
                    : "none",
                }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="h-8 flex items-center gap-0"
          >
            <span
              className="text-xl sm:text-2xl font-medium"
              style={{ color: "#00f5ff", fontFamily: "'JetBrains Mono', monospace" }}
            >
              {typewriter}
            </span>
            <span
              className="text-xl sm:text-2xl font-medium ml-0.5"
              style={{ color: "#7c3aed", animation: "pulse 1s step-end infinite" }}
            >
              |
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="max-w-lg text-base sm:text-lg text-center"
            style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
          >
            Hello, I'm Ramtej. This is the story of how I turn ideas into reliable systems.
            <br />
            From serverless Lambdas to fast, cinematic product experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <button
              onClick={() => scrollTo("Projects")}
              className="px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #00f5ff22, #00f5ff11)",
                border: "1px solid #00f5ff88",
                color: "#00f5ff",
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 0 24px rgba(0,245,255,0.2), 0 0 0 1px rgba(0,245,255,0.06) inset",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 40px rgba(0,245,255,0.45), 0 0 0 1px rgba(0,245,255,0.12) inset"; e.currentTarget.style.background = "rgba(0,245,255,0.14)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 24px rgba(0,245,255,0.2), 0 0 0 1px rgba(0,245,255,0.06) inset"; e.currentTarget.style.background = "linear-gradient(135deg, #00f5ff22, #00f5ff11)"; }}
            >
              View My Work
            </button>
            {/* <a
              href="#"
              className="px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 text-center"
              style={{
                border: "1px solid rgba(240,244,255,0.2)",
                color: "#f0f4ff",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(240,244,255,0.45)"; e.currentTarget.style.background = "rgba(240,244,255,0.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(240,244,255,0.2)"; e.currentTarget.style.background = ""; }}
            >
              Download Resume
            </a> */}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
          <span className="text-xs" style={{ color: "#475569", fontFamily: "'JetBrains Mono', monospace" }}>scroll</span>
          <div className="bounce-arrow" style={{ color: "#00f5ff" }}>
            <ChevronDown size={20} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════ */}
      {/* ABOUT SECTION                        */}
      {/* ════════════════════════════════════ */}
      <Section
        id="About"
        className="py-28 px-4 sm:px-6 relative overflow-hidden"
        style={{ background: "#0a0f1e" }}
      >
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position: "absolute", top: "8%", right: "4%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,255,0.045) 0%, transparent 68%)" }} />
          <div style={{ position: "absolute", bottom: "12%", left: "3%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 68%)" }} />
        </div>

        <div className="max-w-6xl mx-auto relative">

          {/* ── Section header ── */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span style={{ display: "inline-block", width: 28, height: 1, background: "rgba(0,245,255,0.6)" }} />
              <p className="text-xs uppercase tracking-widest" style={{ color: "#00f5ff", fontFamily: "'JetBrains Mono', monospace" }}>
                Chapter 02 // Origin Story
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span style={{ color: "#f0f4ff" }}>The Engineer Behind</span>{" "}
              <span style={{ background: "linear-gradient(90deg, #00f5ff 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                The Build
              </span>
            </h2>
          </div>

          {/* ── Main grid: 3 + 2 columns ── */}
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* LEFT COLUMN (3 cols) — profile card + bio + links */}
            <div className="lg:col-span-3 flex flex-col gap-7">

              {/* Profile identity card */}
              <div className="flex items-center gap-5 p-5 rounded-2xl"
                style={{
                  background: "linear-gradient(145deg, rgba(0,245,255,0.07) 0%, rgba(5,8,16,0.5) 100%)",
                  border: "1.5px solid rgba(0,245,255,0.4)",
                  backdropFilter: "blur(12px)",
                  boxShadow: [
                    "inset 0 1px 0 rgba(255,255,255,0.08)",
                    "inset 1px 0 0 rgba(255,255,255,0.04)",
                    "0 2px 4px rgba(0,0,0,0.6)",
                    "0 8px 16px rgba(0,0,0,0.45)",
                    "0 16px 32px rgba(0,0,0,0.3)",
                    "4px 6px 0 rgba(0,245,255,0.16)",
                  ].join(", "),
                }}>
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <img
                    src="/DP.webp"
                    alt="Vigna Ramtej"
                    style={{
                      width: 70, height: 70, borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid rgba(0,245,255,0.4)",
                      boxShadow: "0 0 28px rgba(0,245,255,0.18)",
                      display: "block",
                    }}
                  />
                  {/* Online indicator */}
                  <span style={{
                    position: "absolute", bottom: 3, right: 3,
                    width: 13, height: 13, borderRadius: "50%",
                    background: "#22d3ee", border: "2px solid #0a0f1e",
                    boxShadow: "0 0 8px rgba(34,211,238,0.9)"
                  }} />
                </div>

                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#f0f4ff", fontSize: 17, fontWeight: 700, marginBottom: 3 }}>
                    Vigna Ramtej Telagarapu
                  </h3>
                  <p style={{ color: "#00f5ff", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", marginBottom: 8 }}>
                    Full Stack &amp; Backend Engineer
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {[
                      { label: "Open to Work", cyan: true },
                      { label: "B.Tech AI&DS '26", cyan: false },
                    ].map(({ label, cyan }) => (
                      <span key={label} style={{
                        fontSize: 11, padding: "3px 9px", borderRadius: 6,
                        background: cyan ? "rgba(34,211,238,0.1)" : "rgba(124,58,237,0.1)",
                        color: cyan ? "#22d3ee" : "#a78bfa",
                        border: `1px solid ${cyan ? "rgba(34,211,238,0.3)" : "rgba(124,58,237,0.3)"}`,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}>{label}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio paragraphs */}
              <div className="flex flex-col gap-4">
                <p style={{ color: "#94a3b8", lineHeight: 1.9, fontFamily: "'Inter', sans-serif", fontSize: 15 }}>
                  Pursuing B.Tech in{" "}
                  <span style={{ color: "#f0f4ff", fontWeight: 500 }}>AI &amp; Data Science</span>{" "}
                  at Sagi Ramakrishnam Raju Engineering College (2022–2026), maintaining a CGPA of{" "}
                  <span style={{ color: "#00f5ff", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>8.56</span>.
                </p>
                <p style={{ color: "#94a3b8", lineHeight: 1.9, fontFamily: "'Inter', sans-serif", fontSize: 15 }}>
                  I thrive at the intersection of performance engineering and product thinking - whether migrating
                  monoliths to serverless architectures, designing ACID-safe database schemas, or building reusable
                  frontend component libraries that boost user engagement.
                </p>

                {/* Hackathon callout */}
                <div style={{
                  padding: "14px 18px", borderRadius: 12,
                  background: "rgba(124,58,237,0.06)",
                  borderLeft: "3px solid #7c3aed",
                }}>
                  <p style={{ color: "#c4b5fd", lineHeight: 1.75, fontFamily: "'Inter', sans-serif", fontSize: 14, margin: 0 }}>
                    Won <strong style={{ color: "#f0f4ff" }}>Hackoverflow 2K24</strong> (national-level) and led team to{" "}
                    <strong style={{ color: "#f0f4ff" }}>Best Junior Team</strong> at Smart India Hackathon 2023 out of{" "}
                    <span style={{ color: "#a78bfa", fontWeight: 600 }}>250+ competing teams</span>.
                  </p>
                </div>
              </div>

              {/* Social buttons with labels */}
              <div className="flex gap-3 flex-wrap">
                {[
                  { href: "https://github.com/ramtejvigna", icon: <GitBranch size={14} />, label: "GitHub", border: "rgba(0,245,255,0.22)", hoverBg: "rgba(0,245,255,0.08)", hoverBorder: "rgba(0,245,255,0.55)", color: "#00f5ff" },
                  { href: "https://linkedin.com/in/vignaramtej", icon: <Link2 size={14} />, label: "LinkedIn", border: "rgba(124,58,237,0.3)", hoverBg: "rgba(124,58,237,0.08)", hoverBorder: "rgba(124,58,237,0.6)", color: "#a78bfa" },
                  { href: "mailto:vignaramtej46@gmail.com", icon: <Mail size={14} />, label: "Email", border: "rgba(240,244,255,0.12)", hoverBg: "rgba(240,244,255,0.05)", hoverBorder: "rgba(240,244,255,0.3)", color: "#94a3b8" },
                ].map(({ href, icon, label, border, hoverBg, hoverBorder, color }) => (
                  <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 text-sm font-medium"
                    style={{ border: `1px solid ${border}`, color, fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = hoverBg; e.currentTarget.style.borderColor = hoverBorder; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = ""; e.currentTarget.style.borderColor = border; }}
                  >
                    {icon}{label}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN (2 cols) — stats + terminal */}
            <div className="lg:col-span-2 flex flex-col gap-4">

              {/* Stat rows */}
              {[
                { label: "Internships Completed", value: 2, suffix: "", decimals: 0, color: "#00f5ff" },
                { label: "Projects Shipped", value: 4, suffix: "+", decimals: 0, color: "#7c3aed" },
                { label: "Hackathon Achievements", value: 5, suffix: "", decimals: 0, color: "#f59e0b" },
                { label: "Current CGPA", value: 8.56, suffix: "", decimals: 2, color: "#00f5ff" },
              ].map((stat) => (
                <div key={stat.label}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(5,8,16,0.5) 100%)",
                    border: "1.5px solid rgba(255,255,255,0.18)",
                    boxShadow: [
                      "inset 0 1px 0 rgba(255,255,255,0.07)",
                      "0 2px 4px rgba(0,0,0,0.55)",
                      "0 6px 12px rgba(0,0,0,0.4)",
                      "0 14px 28px rgba(0,0,0,0.25)",
                      "3px 5px 0 rgba(255,255,255,0.05)",
                    ].join(", "),
                    transition: "box-shadow 0.22s ease, border-color 0.22s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,245,255,0.55)";
                    e.currentTarget.style.boxShadow = [
                      "inset 0 1px 0 rgba(255,255,255,0.1)",
                      "0 4px 8px rgba(0,0,0,0.65)",
                      "0 12px 24px rgba(0,0,0,0.5)",
                      "0 24px 48px rgba(0,0,0,0.3)",
                      "4px 7px 0 rgba(0,245,255,0.2)",
                      "0 0 40px rgba(0,245,255,0.06)",
                    ].join(", ");
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                    e.currentTarget.style.boxShadow = [
                      "inset 0 1px 0 rgba(255,255,255,0.07)",
                      "0 2px 4px rgba(0,0,0,0.55)",
                      "0 6px 12px rgba(0,0,0,0.4)",
                      "0 14px 28px rgba(0,0,0,0.25)",
                      "3px 5px 0 rgba(255,255,255,0.05)",
                    ].join(", ");
                  }}
                >
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", color: stat.color, fontSize: 28, fontWeight: 700, minWidth: 72, lineHeight: 1 }}>
                    <CountUp target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </span>
                  <span style={{ color: "#64748b", fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.4 }}>
                    {stat.label}
                  </span>
                </div>
              ))}

              {/* Terminal quick-facts card */}
              <div className="rounded-xl overflow-hidden mt-2" style={{
                border: "1.5px solid rgba(0,245,255,0.4)",
                boxShadow: [
                  "inset 0 1px 0 rgba(255,255,255,0.07)",
                  "0 2px 4px rgba(0,0,0,0.6)",
                  "0 8px 16px rgba(0,0,0,0.45)",
                  "0 16px 32px rgba(0,0,0,0.28)",
                  "4px 6px 0 rgba(0,245,255,0.16)",
                ].join(", "),
              }}>
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "rgba(0,245,255,0.04)", borderBottom: "1px solid rgba(0,245,255,0.08)" }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
                  <span style={{ marginLeft: 8, fontSize: 11, color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>
                    vigna@portfolio ~ about.sh
                  </span>
                </div>
                {/* Terminal body */}
                <div style={{ background: "rgba(5,8,16,0.85)", padding: "16px 18px", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, lineHeight: 2.1 }}>
                  {[
                    { key: "location", value: "Bhimavaram, AP, India", color: "#00f5ff" },
                    { key: "degree", value: "B.Tech AI & DS", color: "#a78bfa" },
                    { key: "year", value: "Final Year · 2022–26", color: "#a78bfa" },
                    { key: "focus", value: "Backend + Full Stack", color: "#34d399" },
                    { key: "available", value: "true", color: "#34d399" },
                  ].map(({ key, value, color }) => (
                    <div key={key} style={{ display: "flex", gap: 6, alignItems: "baseline" }}>
                      <span style={{ color: "#64748b" }}>$</span>
                      <span style={{ color: "#38bdf8" }}>{key}</span>
                      <span style={{ color: "#64748b" }}>=</span>
                      <span style={{ color }}>&quot;{value}&quot;</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                    <span style={{ color: "#64748b" }}>$</span>
                    <span style={{ color: "#64748b" }}>_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════ */}
      {/* SKILLS SECTION  — Chapter 03        */}
      {/* ════════════════════════════════════ */}
      <Section id="Skills" className="py-28 px-4 sm:px-6 relative overflow-hidden" style={{ background: "#080d18" }}>

        {/* Ambient glow orbs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position: "absolute", top: "8%",  left: "4%",  width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,255,0.032) 0%, transparent 68%)" }} />
          <div style={{ position: "absolute", bottom: "8%", right: "4%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 68%)" }} />
          <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 280, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(0,245,255,0.018) 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-6xl mx-auto relative">

          {/* ── Section header ── */}
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

          {/* ── Interactive arsenal console ── */}
          <SkillsArsenal />

        </div>
      </Section>

      {/* ════════════════════════════════════ */}
      {/* EXPERIENCE SECTION  — Chapter 04    */}
      {/* ════════════════════════════════════ */}
      <Section id="Experience" className="py-28 px-4 sm:px-6 relative overflow-hidden" style={{ background: "#0a0f1e" }}>

        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position: "absolute", top: "10%", right: "4%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,255,0.038) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "10%", left: "4%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-6xl mx-auto relative">

          {/* ── Section header ── */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span style={{ display: "inline-block", width: 28, height: 1, background: "rgba(0,245,255,0.6)" }} />
              <p className="text-xs uppercase tracking-widest" style={{ color: "#00f5ff", fontFamily: "'JetBrains Mono', monospace" }}>
                Chapter 04 // Field Work
              </p>
              <span style={{ display: "inline-block", flex: 1, height: 1, background: "linear-gradient(90deg, rgba(0,245,255,0.3), transparent)" }} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span style={{ color: "#f0f4ff" }}>Real Products,</span>{" "}
              <span style={{ background: "linear-gradient(90deg, #00f5ff 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Real Constraints
              </span>
            </h2>
            <p className="mt-4 text-base" style={{ color: "#475569", fontFamily: "'Inter', sans-serif", maxWidth: 520, lineHeight: 1.75 }}>
              Two internships. Shipped to production. Numbers that speak.
            </p>
          </div>

          {/* ── Mission debrief cards ── */}
          <div className="flex flex-col">
            {EXPERIENCES.map((exp, i) => (
              <div key={exp.company}>
                <motion.div
                  initial={{ opacity: 0, y: 44 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.65, delay: i * 0.15 }}
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${exp.color}07 0%, rgba(5,8,16,0.75) 50%, rgba(5,8,16,0.92) 100%)`,
                    border: `1.5px solid ${exp.color}28`,
                    backdropFilter: "blur(16px)",
                    boxShadow: [
                      "inset 0 1px 0 rgba(255,255,255,0.06)",
                      "0 4px 8px rgba(0,0,0,0.55)",
                      "0 16px 32px rgba(0,0,0,0.4)",
                      "0 32px 64px rgba(0,0,0,0.22)",
                    ].join(", "),
                    transition: "box-shadow 0.28s ease, border-color 0.28s ease, transform 0.28s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = exp.color + "55";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = [
                      "inset 0 1px 0 rgba(255,255,255,0.09)",
                      "0 8px 16px rgba(0,0,0,0.65)",
                      "0 28px 56px rgba(0,0,0,0.45)",
                      `0 0 80px ${exp.color}12`,
                    ].join(", ");
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = exp.color + "28";
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = [
                      "inset 0 1px 0 rgba(255,255,255,0.06)",
                      "0 4px 8px rgba(0,0,0,0.55)",
                      "0 16px 32px rgba(0,0,0,0.4)",
                      "0 32px 64px rgba(0,0,0,0.22)",
                    ].join(", ");
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{ height: 2, background: `linear-gradient(90deg, ${exp.color}, ${exp.color}44 60%, transparent)` }} />

                  {/* Watermark monogram */}
                  <div
                    className="absolute top-3 right-6 pointer-events-none select-none"
                    style={{ fontSize: 110, fontFamily: "'JetBrains Mono', monospace", fontWeight: 900, color: exp.color, opacity: 0.04, lineHeight: 1 }}
                  >
                    {exp.monogram}
                  </div>

                  {/* 3-column grid */}
                  <div className="flex flex-col lg:grid lg:grid-cols-[220px_260px_1fr]">

                    {/* ── Col 1: Identity ── */}
                    <div
                      className="flex flex-col gap-4 p-7 border-b lg:border-b-0 lg:border-r"
                      style={{ borderColor: "rgba(255,255,255,0.06)" }}
                    >
                      <div className="flex items-center gap-2">
                        <span style={{ fontSize: 10, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.14em" }}>MISSION</span>
                        <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: exp.color, fontWeight: 700 }}>#{exp.mission}</span>
                      </div>

                      <div>
                        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#f0f4ff", fontSize: 22, fontWeight: 800, lineHeight: 1.2, marginBottom: 8 }}>
                          {exp.company}
                        </h3>
                        <span style={{
                          fontSize: 11, padding: "3px 9px", borderRadius: 6,
                          background: `${exp.color}15`, color: exp.color,
                          fontFamily: "'JetBrains Mono', monospace",
                          border: `1px solid ${exp.color}28`,
                          display: "inline-block",
                        }}>
                          {exp.role}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <span style={{ fontSize: 12, color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>{exp.period}</span>
                        <span style={{ fontSize: 11, color: exp.color, fontFamily: "'JetBrains Mono', monospace", opacity: 0.65 }}>{exp.tag}</span>
                      </div>

                      <div className="flex items-center gap-2 mt-auto pt-2">
                        <motion.span
                          animate={{ opacity: [1, 0.2, 1] }}
                          transition={{ duration: 2.2, repeat: Infinity }}
                          style={{ width: 7, height: 7, borderRadius: "50%", background: "#22d3ee", display: "inline-block", boxShadow: "0 0 7px rgba(34,211,238,0.9)" }}
                        />
                        <span style={{ fontSize: 10, color: "#22d3ee", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>MISSION COMPLETE</span>
                      </div>
                    </div>

                    {/* ── Col 2: Metrics ── */}
                    <div
                      className="flex flex-col justify-center gap-5 p-7 border-b lg:border-b-0 lg:border-r"
                      style={{
                        borderColor: "rgba(255,255,255,0.06)",
                        background: `linear-gradient(160deg, ${exp.color}05 0%, transparent 100%)`,
                      }}
                    >
                      <span style={{ fontSize: 9, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                        / impact metrics
                      </span>
                      {exp.metrics.map((m) => (
                        <div key={m.label} className="flex items-end gap-3">
                          <span style={{ fontSize: 38, fontFamily: "'Space Grotesk', sans-serif", color: exp.color, fontWeight: 800, lineHeight: 1 }}>
                            <CountUp target={m.value} suffix={m.suffix} />
                          </span>
                          <span style={{ fontSize: 12, color: "#475569", fontFamily: "'Inter', sans-serif", paddingBottom: 5, lineHeight: 1.3 }}>
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* ── Col 3: Actions ── */}
                    <div className="flex flex-col justify-center gap-5 p-7">
                      <span style={{ fontSize: 9, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                        / deployed actions
                      </span>
                      <ul className="flex flex-col gap-3.5">
                        {exp.bullets.map((b, bi) => (
                          <li key={bi} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                            <span style={{ color: exp.color, flexShrink: 0, marginTop: 2 }}>▹</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </motion.div>

                {/* ── Mission connector ── */}
                {i < EXPERIENCES.length - 1 && (
                  <div className="flex items-center gap-4 py-4 px-2">
                    <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.2))" }} />
                    <span style={{ fontSize: 10, color: "#475569", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
                      → MISSION_02 INITIATED
                    </span>
                    <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(167,139,250,0.2), transparent)" }} />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </Section>

      {/* ════════════════════════════════════ */}
      {/* PROJECTS SECTION  — Chapter 05      */}
      {/* ════════════════════════════════════ */}
      <Section id="Projects" className="py-28 px-4 sm:px-6 relative overflow-hidden" style={{ background: "#080d18" }}>

        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position: "absolute", top: "15%", left: "8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,255,0.03) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "15%", right: "8%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-6xl mx-auto relative">

          {/* ── Section header ── */}
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

      {/* ════════════════════════════════════ */}
      {/* CODING ARENA SECTION — Chapter 06   */}
      {/* ════════════════════════════════════ */}
      <Section id="Coding" className="py-28 px-4 sm:px-6 relative overflow-hidden" style={{ background: "#050810" }}>

        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position: "absolute", top: "4%",  left: "-8%",  width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,161,22,0.055) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", bottom: "4%", right: "-8%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 1000, height: 220, background: "radial-gradient(ellipse, rgba(124,58,237,0.025) 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-6xl mx-auto relative">

          {/* ── Section header ── */}
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

          {/* ── Platform cards ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* ─── LeetCode Card ─── */}
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
              {/* Window chrome */}
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

              {/* Identity row */}
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

              {/* Main body */}
              <div className="flex flex-col sm:flex-row items-start gap-6 px-6 pt-6 pb-4 flex-1">

                {/* Ring chart */}
                {lcLoading ? (
                  <div
                    className="dsa-skeleton"
                    style={{ width: 160, height: 160, borderRadius: "50%", flexShrink: 0, background: "rgba(255,161,22,0.05)", border: "2px dashed rgba(255,161,22,0.1)" }}
                  />
                ) : (
                  <RingChart easy={lcData.easy} medium={lcData.medium} hard={lcData.hard} total={lcData.solved} />
                )}

                {/* Stats */}
                <div className="flex flex-col gap-4 flex-1 w-full min-w-0">

                  {/* Total solved headline */}
                  <div>
                    <p style={{ fontSize: 10, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.12em", margin: "0 0 2px" }}>// total_solved</p>
                    <p style={{ fontSize: 44, fontWeight: 900, color: "#f0f4ff", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1, margin: 0, textShadow: "0 0 48px rgba(255,161,22,0.38)" }}>
                      {lcLoading ? <span className="dsa-skeleton" style={{ display: "inline-block", width: 80, height: 44, borderRadius: 8, background: "rgba(255,255,255,0.06)", verticalAlign: "middle" }} /> : <CountUp target={lcData.solved} />}
                    </p>
                  </div>

                  {/* Difficulty rows — terminal style */}
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

              {/* Footer: contest rating */}
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

            {/* ─── GitHub Card ─── */}
            <motion.div
              initial={{ opacity: 0, x: 44 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="gh-glow rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "linear-gradient(160deg, rgba(226,232,240,0.05) 0%, rgba(8,10,24,0.96) 42%, rgba(5,8,20,0.99) 100%)",
                border: "1px solid rgba(226,232,240,0.12)",
              }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3 border-b" style={{ borderColor: "rgba(226,232,240,0.07)", background: "rgba(0,0,0,0.32)" }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", display: "inline-block", boxShadow: "0 0 4px #ef4444aa" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", display: "inline-block", boxShadow: "0 0 4px #f59e0baa" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 4px #22c55eaa" }} />
                <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em" }}>
                  ~/github_activity.sh
                </span>
                <a
                  href={DSA_CONFIG.github.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 transition-all duration-200"
                  style={{ fontSize: 11, color: DSA_CONFIG.github.color, fontFamily: "'JetBrains Mono', monospace", opacity: 0.65 }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.65"; }}
                >
                  <ExternalLink size={11} /> view
                </a>
              </div>

              {/* Identity row */}
              <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{ background: "rgba(226,232,240,0.07)", border: "1px solid rgba(226,232,240,0.2)", boxShadow: "0 0 16px rgba(226,232,240,0.07)" }}
                  >
                    <GitBranch size={18} color={DSA_CONFIG.github.color} />
                  </div>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#f0f4ff", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.2, margin: 0 }}>GitHub</p>
                    <p style={{ fontSize: 11, color: "#475569", fontFamily: "'JetBrains Mono', monospace", margin: 0 }}>@{DSA_CONFIG.github.username}</p>
                  </div>
                </div>
              </div>

              {/* Contribution heatmap */}
              <div className="px-6 pt-5 pb-3">
                <div className="flex items-center justify-between mb-3">
                  <span style={{ fontSize: 10, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.12em" }}>
                    CONTRIBUTION_MAP // {new Date().getFullYear()}
                  </span>
                  {!ghLoading && (
                    <span style={{ fontSize: 12, color: "#22c55e", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                      <CountUp target={ghData.contributions} suffix=" commits" />
                    </span>
                  )}
                </div>
                {ghLoading ? (
                  <div
                    className="dsa-skeleton"
                    style={{ height: 76, borderRadius: 8, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.04)" }}
                  />
                ) : (
                  <ContribHeatmap contribData={ghData.contribData} />
                )}
              </div>

              {/* Stat tiles */}
              <div className="grid grid-cols-3 gap-3 px-6 pb-6 mt-auto">
                {[
                  { label: "REPOS",         value: ghData?.repos,         suffix: "",  color: "#e2e8f0" },
                  { label: "FOLLOWERS",     value: ghData?.followers,     suffix: "",  color: "#a78bfa" },
                  { label: "CONTRIBUTIONS", value: ghData?.contributions, suffix: "+", color: "#22d3ee" },
                ].map(({ label, value, suffix, color }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center gap-1.5 py-4 rounded-xl relative overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.055)" }}
                  >
                    {/* Top edge glow */}
                    <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 60, height: 1, background: `linear-gradient(90deg, transparent, ${color}55, transparent)` }} />
                    {ghLoading ? (
                      <div className="dsa-skeleton" style={{ width: 44, height: 28, borderRadius: 5, background: "rgba(255,255,255,0.06)" }} />
                    ) : (
                      <span style={{ fontSize: 26, fontWeight: 800, color, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1, textShadow: `0 0 22px ${color}44` }}>
                        <CountUp target={value ?? 0} suffix={suffix} />
                      </span>
                    )}
                    <span style={{ fontSize: 9, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textAlign: "center" }}>{label}</span>
                  </div>
                ))}
              </div>

            </motion.div>

          </div>

        </div>
      </Section>

      {/* ════════════════════════════════════ */}
      {/* ACHIEVEMENTS SECTION — Chapter 07   */}
      {/* ════════════════════════════════════ */}
      <Section id="Achievements" className="py-28 px-4 sm:px-6 relative overflow-hidden" style={{ background: "#0a0f1e" }}>

        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position: "absolute", top: "10%", left: "10%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-5xl mx-auto relative">

          {/* ── Section header ── */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span style={{ display: "inline-block", width: 28, height: 1, background: "rgba(0,245,255,0.6)" }} />
              <p className="text-xs uppercase tracking-widest" style={{ color: "#00f5ff", fontFamily: "'JetBrains Mono', monospace" }}>
                Chapter 07 // Battle Record
              </p>
              <span style={{ display: "inline-block", flex: 1, height: 1, background: "linear-gradient(90deg, rgba(0,245,255,0.3), transparent)" }} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span style={{ color: "#f0f4ff" }}>Wins That</span>{" "}
              <span style={{ background: "linear-gradient(90deg, #00f5ff 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Shaped My Mindset
              </span>
            </h2>
          </div>

          {/* ── Achievement cards ── */}
          <div className="flex flex-col">
            {ACHIEVEMENTS.map((ach, i) => (
              <div key={ach.title}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -44 : 44 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.65, delay: i * 0.12 }}
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${ach.color}09 0%, rgba(5,8,16,0.75) 55%, rgba(5,8,16,0.9) 100%)`,
                    border: `1px solid ${ach.color}25`,
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.5), 0 16px 32px rgba(0,0,0,0.35)",
                    transition: "border-color 0.28s, box-shadow 0.28s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = ach.color + "50";
                    e.currentTarget.style.boxShadow = `0 8px 16px rgba(0,0,0,0.6), 0 24px 48px rgba(0,0,0,0.4), 0 0 60px ${ach.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = ach.color + "25";
                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.5), 0 16px 32px rgba(0,0,0,0.35)";
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{ height: 2, background: `linear-gradient(90deg, ${ach.color}, ${ach.color}44 60%, transparent)` }} />

                  {/* Watermark */}
                  <div
                    className="absolute top-3 right-5 pointer-events-none select-none"
                    style={{ fontSize: 90, fontFamily: "'JetBrains Mono', monospace", fontWeight: 900, color: ach.color, opacity: 0.04, lineHeight: 1 }}
                  >
                    {ach.rank.split(" ")[0]}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-0">

                    {/* ── Left: Trophy column ── */}
                    <div
                      className="flex flex-col items-center justify-center gap-4 p-7 sm:p-8 border-b sm:border-b-0 sm:border-r"
                      style={{ borderColor: "rgba(255,255,255,0.06)", minWidth: 160, flexShrink: 0 }}
                    >
                      {/* Glowing icon circle */}
                      <div
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: "50%",
                          background: `${ach.color}14`,
                          border: `2px solid ${ach.color}35`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: ach.color,
                          boxShadow: `0 0 24px ${ach.color}22`,
                        }}
                      >
                        {ach.icon}
                      </div>

                      {/* Rank + index */}
                      <div className="text-center">
                        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 900, color: ach.color, letterSpacing: "0.06em", display: "block" }}>
                          {ach.rank}
                        </span>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#64748b", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                          {ach.index}
                        </span>
                      </div>

                      {/* Pulsing beacon */}
                      <div className="flex items-center gap-1.5">
                        <motion.span
                          animate={{ opacity: [1, 0.2, 1] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                          style={{ width: 6, height: 6, borderRadius: "50%", background: ach.color, display: "inline-block", boxShadow: `0 0 6px ${ach.color}` }}
                        />
                        <span style={{ fontSize: 9, color: ach.color, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>CONFIRMED</span>
                      </div>
                    </div>

                    {/* ── Right: Details column ── */}
                    <div className="flex flex-col justify-center gap-4 p-7 sm:p-8 flex-1">

                      {/* Event + year */}
                      <div className="flex flex-wrap items-start gap-3">
                        <div className="flex-1">
                          <span style={{ fontSize: 10, color: "#64748b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.16em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                            / competition
                          </span>
                          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 800, color: "#f0f4ff", lineHeight: 1.2 }}>
                            {ach.event}
                          </h3>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 6, background: `${ach.color}15`, color: ach.color, fontFamily: "'JetBrains Mono', monospace", border: `1px solid ${ach.color}28` }}>
                            {ach.year}
                          </span>
                          <span style={{ fontSize: 11, color: "#475569", fontFamily: "'JetBrains Mono', monospace" }}>{ach.scale}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.75, fontFamily: "'Inter', sans-serif" }}>
                        {ach.desc}
                      </p>

                      {/* Stat chips */}
                      <div className="flex flex-wrap gap-2">
                        {ach.stats.map((s) => (
                          <span
                            key={s.label}
                            style={{
                              fontSize: 11,
                              padding: "4px 12px",
                              borderRadius: 20,
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.08)",
                              fontFamily: "'JetBrains Mono', monospace",
                              color: "#64748b",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 5,
                            }}
                          >
                            <span style={{ color: ach.color, fontWeight: 700 }}>{s.value}</span>
                            <span>·</span>
                            <span>{s.label}</span>
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>

                {/* ── Connector ── */}
                {i < ACHIEVEMENTS.length - 1 && (
                  <div className="flex items-center gap-4 py-4 px-2">
                    <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.15))" }} />
                    <span style={{ fontSize: 10, color: "#475569", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
                      → ACH_02 LOGGED
                    </span>
                    <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(34,211,238,0.15), transparent)" }} />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </Section>

      {/* ════════════════════════════════════ */}
      {/* CONTACT SECTION                      */}
      {/* ════════════════════════════════════ */}
      <Section id="Contact" className="py-24 px-4 sm:px-6" style={{ background: "#080d18" }}>
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

          {/* Email chip */}
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
              vignaramtej46@gmail.com
              {copied ? <Check size={15} style={{ color: "#4ade80" }} /> : <Copy size={14} />}
            </button>

            {/* Toast */}
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

          {/* Social links */}
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

      {/* ════════════════════════════════════ */}
      {/* FOOTER                               */}
      {/* ════════════════════════════════════ */}
      <footer
        className="py-8 text-center border-t"
        style={{ borderColor: "rgba(0,245,255,0.08)", background: "#050810" }}
      >
        <p
          className="text-sm"
          style={{ color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span style={{ color: "#00f5ff" }}>$</span> Built with ♥ by{" "}
          <span style={{ color: "#f0f4ff" }}>Vigna Ramtej</span>
        </p>
      </footer>
    </div>
  );
}
