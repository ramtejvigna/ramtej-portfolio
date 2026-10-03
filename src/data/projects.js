export const PROJECTS = [
  {
    id: "01",
    name: "Code Battle Ground",
    subtitle: "Competitive Programming Arena",
    stats: [
      { value: 9,  suffix: "",   decimals: 0, label: "Languages" },
      { value: 32, suffix: "K+", decimals: 0, label: "Lines of TypeScript" },
      { value: 12, suffix: "",   decimals: 0, label: "AWS Lambdas" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS"],
    bullets: [
      "Competitive programming platform with timed contests, profiles & an admin panel (32K+ lines of TypeScript)",
      "Sandboxed execution engine for 9 languages using isolated Docker containers with CPU & memory limits",
      "Live WebSocket leaderboard ranked by a single SQL window-function query, cached in Redis",
      "Deployed with Docker Compose and 12 AWS Lambda functions, with GitHub Actions CI",
    ],
    github: "https://github.com/ramtejvigna/CodeBattleGround",
  },
  {
    id: "02",
    name: "Vedic Baby Names",
    subtitle: "CRM Automation",
    stats: [
      { value: 87,   suffix: "%", decimals: 0, label: "Time Saved" },
      { value: 2,    suffix: " min", decimals: 0, label: "Per Request" },
      { value: 70,   suffix: "%", decimals: 0, label: "Less Errors" },
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    bullets: [
      "CRM for real customers cutting manual fulfillment 87% (15 min → 2 min per request)",
      "Authentication, validation & error-handling middleware: 70% fewer server errors",
    ],
    github: "https://github.com/ramtejvigna/CRM-vedic",
  },
  {
    id: "03",
    name: "AMILE",
    subtitle: "Career Development & Talent Networking",
    stats: [
      { value: 11, suffix: "",  decimals: 0, label: "Endpoints" },
      { value: 180, suffix: "ms", decimals: 0, label: "Avg Response" },
      { value: 60,  suffix: "%",  decimals: 0, label: "Faster API" },
    ],
    stack: ["React.js", "Node.js", "MongoDB"],
    bullets: [
      "Mentorship platform with 11 backend APIs and an NLP-based mock interview system",
      "Average API response time cut from 450ms to 180ms with validation & error handling",
    ],
    github: "https://github.com/ramtejvigna/AMILE",
  },
  {
    id: "04",
    name: "Multimodal Sentiment Analyzer",
    subtitle: "Deep Learning · Emotion Recognition",
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
