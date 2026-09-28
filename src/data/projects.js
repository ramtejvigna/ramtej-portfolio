export const PROJECTS = [
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

export const STACK_COLORS = {
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
