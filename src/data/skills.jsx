import {
  Code2,
  Database,
  Cloud,
  Layers,
  Cpu,
  Terminal,
  GitBranch,
} from "lucide-react";

export const SKILLS = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "C++"],
  Backend: ["Node.js", "Express.js", "Flask", "Kafka"],
  Frontend: ["Next.js", "React.js", "Tailwind CSS"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  "Cloud & Infra": ["AWS Lambda", "AWS Cognito", "Docker", "Kubernetes", "Minikube", "Serverless Framework", "CI/CD", "Prisma ORM", "Git", "Terraform"],
  Core: ["REST APIs", "Auth & Authorization", "OOP", "Design Patterns", "Data Structures", "ACID Transactions"],
  "Tools": ["Notion", "Openclaw"],
};

export const SKILL_ICONS = {
  Languages: <Code2 size={15} />,
  Backend: <Layers size={15} />,
  Frontend: <Terminal size={15} />,
  Databases: <Database size={15} />,
  "Cloud & Infra": <Cloud size={15} />,
  Core: <Cpu size={15} />,
  "Tools": <GitBranch size={15} />,
};

export const SKILL_ACCENTS = {
  Languages:    { color: "#00f5ff", glow: "rgba(0,245,255,0.11)",    border: "rgba(0,245,255,0.28)",    pillBg: "rgba(0,245,255,0.07)",    pillBorder: "rgba(0,245,255,0.22)",    pillGlow: "0 0 10px rgba(0,245,255,0.5)"    },
  Backend:      { color: "#34d399", glow: "rgba(52,211,153,0.11)",   border: "rgba(52,211,153,0.28)",   pillBg: "rgba(52,211,153,0.07)",   pillBorder: "rgba(52,211,153,0.22)",   pillGlow: "0 0 10px rgba(52,211,153,0.5)"   },
  Frontend:     { color: "#f472b6", glow: "rgba(244,114,182,0.11)",  border: "rgba(244,114,182,0.28)",  pillBg: "rgba(244,114,182,0.07)",  pillBorder: "rgba(244,114,182,0.22)",  pillGlow: "0 0 10px rgba(244,114,182,0.5)"  },
  Databases:    { color: "#60a5fa", glow: "rgba(96,165,250,0.11)",   border: "rgba(96,165,250,0.28)",   pillBg: "rgba(96,165,250,0.07)",   pillBorder: "rgba(96,165,250,0.22)",   pillGlow: "0 0 10px rgba(96,165,250,0.5)"   },
  "Cloud & Infra": { color: "#a78bfa", glow: "rgba(167,139,250,0.11)", border: "rgba(167,139,250,0.28)", pillBg: "rgba(167,139,250,0.07)", pillBorder: "rgba(167,139,250,0.22)", pillGlow: "0 0 10px rgba(167,139,250,0.5)" },
  Core:              { color: "#fb923c", glow: "rgba(251,146,60,0.11)",   border: "rgba(251,146,60,0.28)",   pillBg: "rgba(251,146,60,0.07)",   pillBorder: "rgba(251,146,60,0.22)",   pillGlow: "0 0 10px rgba(251,146,60,0.5)"   },
  "Tools": { color: "#e2e8f0", glow: "rgba(226,232,240,0.11)", border: "rgba(226,232,240,0.28)", pillBg: "rgba(226,232,240,0.07)", pillBorder: "rgba(226,232,240,0.22)", pillGlow: "0 0 10px rgba(226,232,240,0.4)" },
};
