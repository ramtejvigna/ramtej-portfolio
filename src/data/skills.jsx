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
  Languages: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "C++"],
  Backend: ["Django", "Node.js", "Express.js", "Flask", "Kafka"],
  Frontend: ["Next.js", "React.js", "Tailwind CSS"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  "Cloud & Infra": ["AWS Lambda", "AWS Amplify", "AWS Cognito", "Docker", "Kubernetes", "Minikube", "Serverless Framework", "CI/CD", "Prisma ORM", "Git", "Terraform"],
  Core: ["REST APIs", "LLM Integration", "RBAC", "OAuth 2.0", "Auth & Authorization", "OOP", "Design Patterns", "Data Structures", "ACID Transactions"],
  "Tools": ["Notion", "Openclaw"],
};

export const SKILL_ICONS = {
  Languages: <Code2 size={18} />,
  Backend: <Layers size={18} />,
  Frontend: <Terminal size={18} />,
  Databases: <Database size={18} />,
  "Cloud & Infra": <Cloud size={18} />,
  Core: <Cpu size={18} />,
  "Tools": <GitBranch size={18} />,
};
