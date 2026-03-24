import { ReactNode } from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiKubernetes,
  SiDocker,
  SiGit,
  SiTailwindcss,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

export interface SkillIconMapping {
  [key: string]: ReactNode;
}

export const skillIconMap: SkillIconMapping = {
  // Languages
  'Java': <DiJava className="text-red-500" />,
  'Python': <SiPython className="text-blue-400" />,
  'C++': <SiCplusplus className="text-blue-600" />,
  'JavaScript': <SiJavascript className="text-yellow-400" />,
  'TypeScript': <SiTypescript className="text-blue-500" />,
  
  // Frameworks
  'React.js': <SiReact className="text-cyan-400" />,
  'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
  'Node.js': <SiNodedotjs className="text-green-500" />,
  'Express.js': <SiExpress className="text-gray-600 dark:text-gray-300" />,
  'Django': <SiDjango className="text-green-600" />,
  'Flask': <SiFlask className="text-gray-800 dark:text-gray-200" />,
  
  // Databases
  'PostgreSQL': <SiPostgresql className="text-blue-600" />,
  'MongoDB': <SiMongodb className="text-green-500" />,
  'MySQL': <SiMysql className="text-orange-500" />,
  'Oracle SQL': <SiOracle className="text-red-600" />,
  
  // AI/ML
  'TensorFlow': <SiTensorflow className="text-orange-400" />,
  'Scikit-learn': <SiScikitlearn className="text-orange-500" />,
  'Pandas': <SiPandas className="text-blue-600" />,
  
  // Tools
  'Docker': <SiDocker className="text-blue-500" />,
  'Git': <SiGit className="text-orange-600" />,
  'Tailwind CSS': <SiTailwindcss className="text-teal-400" />,
  'Kubernetes': <SiKubernetes className="text-blue-500" />
};

export const getSkillIcon = (skillName: string): ReactNode => {
  return skillIconMap[skillName] || <span className="text-primary font-bold">{skillName.charAt(0)}</span>;
};