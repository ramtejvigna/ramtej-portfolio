
import { Achievement, Certification, Education, Experience, Position, Project, Skill, SocialLink } from "@/types";

export const personalInfo = {
  name: "Vigna Ramtej Telagarapu",
  tagline: "B.Tech in AI & Data Science | Full Stack Developer | AI/ML Enthusiast",
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
  cgpa: "8.56/10.00",
  courses: ["AI/ML", "Data Science for Engineers", "Computer Networks", "Web Technologies"],
};

export const experiences: Experience[] = [
  {
    title: "Full Stack Development Intern",
    company: "Labfox.Studio",
    period: "Mar 2025 – Present",
    description: [
      "Modernized legacy UI/UX with Next.js and Tailwind CSS, implementing responsive design principles and reducing page load times by 40%, resulting in a 25% increase in user engagement.",
      "Engineered efficient API integrations, leveraging Supabase for real-time data validation and AI-driven insights.",
    ],
  },
  {
    title: "Full Stack Development Intern",
    company: "IIDT BlackBucks",
    period: "Jan 2025 – Feb 2025",
    description: [
      "Developed Resume Builder app using Django/SQLite.",
      "Implemented user authentication and document management systems.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Code Quest",
    description: "A POTD platform for solving coding challenges, tracking streaks, and competing on a live leaderboard. Integrated real-time data fetching from coding platforms to update user progress dynamically. Designed an instant search functionality using Typesense for fast and accurate problem discovery and user profiles.",
    skills: ["Next.js", "TypeSense", "Real-time API"],
    repoLink: "https://github.com/ramtejvigna/CODE-QUEST.git",
  },
  {
    title: "Code Battle Ground",
    description: "A competitive coding platform created utilizing Next.js for server-side rendering and user interactions. A strong backend using PostgreSQL (hosted on NeonDB). Containerized the application with Docker to provide uniform deployment environments. Enabled real-time code execution and leaderboard updates to enhance user engagement.",
    skills: ["Next.js", "PostgreSQL", "Docker", "NeonDB"],
    repoLink: "https://github.com/ramtejvigna/CodeBattleGround.git",
  },
  {
    title: "Vedic Baby Names - CRM",
    description: "Led the development of a CRM platform that produced customized baby name suggestions, deftly handling more than 200 client requests from the first inquiry to the last follow-up conversations. Controlled the whole development process, including front-end and back-end management, ensuring user identity was secure, and connecting WhatsApp via email to offer name options in PDF format.",
    skills: ["CRM", "WhatsApp Integration", "PDF Generation"],
    repoLink: "https://github.com/ramtejvigna/CRM-vedic.git",
    demoLink: "https://vedic-crm.netlify.app/"
  },
  {
    title: "AMILE",
    description: "Collaborated with a diverse group of experts to identify and address three major pain points in the job preparation landscape, utilizing AI and machine learning models for groundbreaking solutions aimed at transforming candidate experiences. Secure permission and authentication were added to the web interface, and the web platform was seamlessly integrated with ML models and APIs to create an interactive interview simulation experience.",
    skills: ["AI", "Machine Learning", "Interview Simulation"],
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
    title: "LeetCode Problem Solving",
    description: "Solved more than 350 problems across all coding platforms, demonstrating strong problem-solving skills and proficiency in algorithms and data structures.",
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
