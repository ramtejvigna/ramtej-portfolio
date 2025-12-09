
import { Achievement, Certification, Education, Experience, Position, Project, Skill, SocialLink, CodingProfiles } from "@/types";

export const personalInfo = {
  name: "Vigna Ramtej Telagarapu",
  tagline: ["Full Stack Developer", "AI/ML Engineer", "Competitive Programmer"],
  email: "vignaramtej46@gmail.com",
  phone: "9032149776",
};

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vignaramtej/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://www.github.com/ramtejvigna",
    icon: "github",
  },
  {
    name: "LeetCode",
    url: "https://www.leetcode.com/ramtejvigna",
    icon: "code",
  },
];

export const education: Education = {
  degree: "B.Tech in Artificial Intelligence and Data Science",
  institution: "Sagi Ramakrishnam Raju Engineering College",
  location: "Bhimavaram",
  period: "2022–Present",
  cgpa: "8.66/10.00",
  courses: ["AI","Machine Learning", "Data Analytics", "Computer Networks", "Web Technologies"],
};

export const experiences: Experience[] = [
  {
    title: "Backend Developer Apprentice",
    company: "Secure Blink",
    period: "Aug 2025 - Present",
    description: [
      "Designed and implemented a scalable backend services, optimizing performance and reliability. Integrated AWS Cognito to enable secure, role-based user authentication and authorization",
      "Managed backend with Serverless Framework on AWS Lambda for scalable production environments. For actionable information, the scanning process was automated and made public via the backend API",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Labfox.Studio",
    period: "Mar 2025 – May 2025",
    description: [
      "Revamped the platform’s UI/UX using Next.js and Tailwind CSS, implementing responsive design best practices that reduced page load times by 40% and boosted user engagement by 60% through efficient state management strategies.",
      "Integrated and optimized APIs leveraging Supabase for real-time data synchronization and validation, enhancing system reliability and data accuracy across the application.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Code Quest",
    description: "A POTD platform for solving coding challenges, tracking streaks, and competing on a live leaderboard. Integrated real-time data fetching from coding platforms to update user progress dynamically. Designed an instant search functionality using Typesense for fast and accurate problem discovery and user profiles.",
    skills: ["React.js", "Real-time API", "GraphQL", "Indexing", "Rate limiting"],
    repoLink: "https://github.com/ramtejvigna/CODE-QUEST.git",
    demoLink: "https://codequest.srkrcodingclub.in"
  },
  {
    title: "Code Battle Ground",
    description: "A competitive coding platform created utilizing Next.js for server-side rendering and user interactions. A strong backend using PostgreSQL (hosted on NeonDB). Containerized the application with Docker to provide uniform deployment environments. Enabled real-time code execution and leaderboard updates to enhance user engagement.",
    skills: ["Next.js", "PostgreSQL", "Node.js", "Docker", "NeonDB", "Prisma ORM"],
    repoLink: "https://github.com/ramtejvigna/CodeBattleGround.git",
    demoLink: "https://codebattleground.ram-innovate.me"
  },
  {
    title: "Code IDE",
    description: "A cutting-edge, cloud-based IDE revolutionizing developer workflows with multi-language support and real-time execution. Engineered a performant code execution environment with isolated Docker containers for secure runtime. Integrated Monaco Editor with custom language servers to provide intelligent code completion, syntax highlighting, and error checking across 5+ languages. Implemented collaborative editing features using operational transformation for real-time multi-user coding sessions.",
    skills: [
      "React.js", 
      "Monaco Editor", 
      "Docker", 
      "Node.js", 
      "Language Server Protocol"
    ],
    repoLink: "https://github.com/ramtejvigna/code-editor.git",
    demoLink: "https://code-ide.ram-innovate.me"
  },
  {
    title: "Vedic Baby Names - CRM",
    description: "Led the development of a CRM platform that produced customized baby name suggestions, deftly handling more than 200 client requests from the first inquiry to the last follow-up conversations. Controlled the whole development process, including front-end and back-end management, ensuring user identity was secure, and connecting WhatsApp via email to offer name options in PDF format.",
    skills: ["CRM", "WhatsApp Integration", "PDF Generation", "React.js", "Express.js"],
    repoLink: "https://github.com/ramtejvigna/CRM-vedic.git",
    demoLink: "https://vedic-crm.netlify.app/"
  },
  {
    title: "AMILE",
    description: "Collaborated with a diverse group of experts to identify and address three major pain points in the job preparation landscape, utilizing AI and machine learning models for groundbreaking solutions aimed at transforming candidate experiences. Secure permission and authentication were added to the web interface, and the web platform was seamlessly integrated with ML models and APIs to create an interactive interview simulation experience.",
    skills: ["AI", "Machine Learning", "Interview Simulation", "Web Sockets"],
    demoLink: "https://amile.vercel.app",
    repoLink: "https://github.com/avinasha18/amile.git"
  },
  {
    title: "AgriConnect AI",
    description: "Initiated a real-time interface to transform agriculture by solving farmers' biggest challenges using AI. The project improves productivity, crop and fertilizer recommendations, agricultural disease prediction, and market price prediction using machine learning algorithms.",
    skills: ["AI", "Machine Learning", "Agriculture"],
    repoLink: "https://github.com/avinasha18/AgriConnect.git",
  },
  {
    title: "Customer Sentiment Dashboard",
    description: "Created a dashboard to assess client course feedback. This dashboard lets us examine trends and client sentiment regarding the offered courses. Machine learning algorithms categorized feedback attitudes using BERT and Random Forest models.",
    skills: ["BERT", "Random Forest", "Sentiment Analysis"],
    repoLink: "https://github.com/ramtejvigna/Customer-Feedback-Dashboard.git",
  },
];

export const codingProfiles: CodingProfiles[] = [
  {
    title: "Leetcode",
    username: "ramtejvigna",
    rank: 337000,
    rating: 0,
    problems: 323
  }
]

export const skills: Skill[] = [
  // Languages
  { name: "Java", level: 85, category: "language" },
  { name: "Python", level: 90, category: "language" },
  { name: "C++", level: 75, category: "language" },
  { name: "JavaScript", level: 88, category: "language" },
  { name: "TypeScript", level: 82, category: "language" },
  
  // Frameworks
  { name: "React.js", level: 90, category: "framework" },
  { name: "Next.js", level: 85, category: "framework" },
  { name: "Node.js", level: 82, category: "framework" },
  { name: "Express.js", level: 78, category: "framework" },
  { name: "Django", level: 75, category: "framework" },
  { name: "Flask", level: 70, category: "framework" },
  
  // Databases
  { name: "PostgreSQL", level: 80, category: "database" },
  { name: "MongoDB", level: 78, category: "database" },
  { name: "MySQL", level: 75, category: "database" },
  { name: "Oracle SQL", level: 70, category: "database" },
  
  // AI/ML
  { name: "TensorFlow", level: 80, category: "aiml" },
  { name: "Scikit-learn", level: 85, category: "aiml" },
  { name: "Pandas", level: 90, category: "aiml" },
  
  // Tools
  { name: "Docker", level: 75, category: "tool" },
  { name: "Git", level: 85, category: "tool" },
  { name: "Tailwind CSS", level: 90, category: "tool" },
  { name: "Kubernetes", level: 60, category: "tool" }
];

export const achievements: Achievement[] = [
  {
    title: "Hackoverflow 2k24 Winner",
    description: "Secured third place in a national-level hackathon with 50+ teams, illustrating creativity and teamwork in problem-solving.",
  },
  {
    title: "SIH Internal Hackathon Winner",
    description: "Awarded as the Junior best team at the Smart India Internal Hackathon 2023, which had over 250 participants.",
  },
  {
    title: "Problem Solving",
    description: "Solved more than 500 problems across all coding platforms, demonstrating strong problem-solving skills and proficiency in algorithms and data structures.",
  },
];

export const certifications: Certification[] = [
  {
    title: "Data Science for Engineers",
    provider: "NPTEL",
    score: "84%",
  },
  {
    title: "Programming in Java",
    provider: "NPTEL",
    score: "70%",
  },
  {
    title: "Programming in Modern C++",
    provider: "NPTEL",
    score: "56%",
  },
  {
    title: "Problem Solving through Programming in C",
    provider: "NPTEL",
    score: "73%",
  },
];

export const positions: Position[] = [
  {
    title: "Technical Lead",
    organization: "SRKR Coding Club",
    period: "Mar 2025",
    description: [
      "Lead the technical team by teaching a variety of courses. Handled a variety of tasks aimed at improving our club.",
      "As a technical lead, I fostered a positive productive environment in the club by educating representatives on various technologies and motivating them to be productive.",
    ],
  },
  {
    title: "MERN Event Coordinator",
    organization: "Vedic Vision MERN Bootcamp",
    period: "Aug 2024",
    description: [
      "Contributed as a member of the technical team in the Vedic Vision MERN Bootcamp and 24-Hour Hackathon 2k24. Helped 250+ participants and promoted solutions to address problems in Sports and Health.",
      "Provided realistic technical help, ensured a seamless event, satisfied guests with information, and fostered effective cooperation.",
    ],
  },
];

