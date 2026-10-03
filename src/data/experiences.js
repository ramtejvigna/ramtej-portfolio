export const EXPERIENCES = [
  {
    company: "CoComply AI",
    role: "Backend & Automation Engineer",
    period: "Mar 2026 – Present",
    tag: "Django · LLM Pipelines · RegTech",
    mission: "01",
    metrics: [
      { value: 6,   suffix: "",  label: "Backend Modules" },
      { value: 130, suffix: "+", label: "API Routes Shipped" },
      { value: 3,   suffix: "",  label: "Async LLM Job Types" },
    ],
    bullets: [
      "Built features on a 6-module Django + PostgreSQL backend, including Regulatory Intelligence APIs and schema changes",
      "Shipped an internal GTM platform (Next.js, TypeScript, 130+ API routes) on AWS Amplify covering leads, scoring, content & analytics",
      "Designed a queue + Python worker system so 3 types of long-running LLM jobs run asynchronously",
      "Built a Regulatory Intelligence pipeline that uses LLMs to turn regulator documents into structured requirements",
    ],
  },
  {
    company: "Secure Blink",
    role: "Backend Developer Intern",
    period: "Aug 2025 – Dec 2025",
    tag: "Security · Serverless",
    mission: "02",
    metrics: [
      { value: 61, suffix: "%", label: "Latency Reduced" },
      { value: 15, suffix: "+", label: "APIs Secured" },
      { value: 890, suffix: "ms", label: "Cold Start" },
    ],
    bullets: [
      "Monolith → serverless Lambda migration: cold-start latency 61% down (2.3s → 890ms)",
      "Role-based access control (RBAC) protecting 15+ API endpoints",
      "Static code analysis engine detecting OWASP Top 10 vulnerabilities",
    ],
  },
  {
    company: "Labfox.Studio",
    role: "Full Stack Developer Intern",
    period: "Mar 2025 – May 2025",
    tag: "Frontend · Performance",
    mission: "03",
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
