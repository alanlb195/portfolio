import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiAstro, SiCss3, SiDocker, SiGit, SiHtml5, SiJavascript,
  SiJest, SiKubernetes, SiMongodb, SiNestjs, SiNodedotjs,
  SiPostgresql, SiPostman, SiPrisma, SiReact, SiRedux,
  SiNextdotjs, SiTailwindcss, SiRedis, SiGooglecloud,
  SiTestinglibrary, SiVercel,
  SiTypescript, SiDotnet,
  SiTypeorm,
  SiOpenai
} from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { DiVisualstudio } from "react-icons/di";

export interface Tech {
  name: string;
  icon: IconType;
  color?: string;
  className?: string;
}

// TO SEARCH MORE ICONS:
// https://react-icons.github.io/react-icons/

export const techs: Tech[] = [
  // FRONTEND
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, className: 'text-black dark:text-white' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Astro', icon: SiAstro, color: '#FF5D01' },
  // BACKEND
  { name: 'Visual Studio', icon: DiVisualstudio, color: '#512BD4' },
  { name: '.NET / .NET Core', icon: SiDotnet, color: '#512BD4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Prisma', icon: SiPrisma, color: '#0C344B' },
  { name: 'TypeORM', icon: SiTypeorm, className: 'text-black dark:text-white' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  // DEVOPS
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
  // TESTING
  { name: 'Jest', icon: SiJest, color: '#C21325' },
  { name: 'Testing Library', icon: SiTestinglibrary, color: '#E33332' },
  { name: 'Postman', icon: SiPostman, color: '#ef5b25' },
  // OTRAS / DISEÑO / TOOLS
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Vercel', icon: SiVercel, className: 'text-black dark:text-white' },
  // STATE MANAGEMENT
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Zustand', icon: GiBearFace, className: 'text-black dark:text-white' },
  { name: 'TanStack Query', icon: SiReactquery, color: '#FF4154' },
  // MOBILE
  { name: 'React Native', icon: SiReact, color: '#61DAFB' },
  // IA
  { name: 'Gemini API', icon: GiArtificialIntelligence, color: '#8AB4F8' },
  { name: 'Open AI API', icon: SiOpenai, color: '#8AB4F8' },
];
