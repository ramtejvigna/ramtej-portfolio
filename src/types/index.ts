
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  skills: string[];
  category: "Full-Stack" | "AI";
  image?: string;
  repoLink?: string;
  demoLink?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  cgpa: string;
  courses: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "language" | "framework" | "database" | "tool" | "aiml";
}

export interface Achievement {
  title: string;
  description: string;
  icon?: string;
}

export interface Certification {
  title: string;
  provider: string;
  score: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Position {
  title: string;
  organization: string;
  period: string;
  description: string[];
}

export interface CodingProfiles {
  title: string;
  username: string;
  rank: number;
  rating?: number;
  problems?: number;
  stars?: number;
}