import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaReact, FaUser, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { SiPostgresql, SiMysql, SiTailwindcss, SiGit, SiSharp, SiTypescript } from 'react-icons/si';
import { GiSkills } from 'react-icons/gi';
import { Project } from '@/shared/types/types';

export const projects: Project[] = [
  {
    num: '01',
    category: 'text',
    title: 'text',
    description: 'text',
    stack: [
      { name: 'text' },
      { name: 'text' },
      { name: 'text' },
      { name: 'text' },
      { name: 'text' },
    ],
    image: '/assets/work/thumb1.png',
    live: 'https://github.com/Ashurumaru/ashurumaru.ru',
    github: 'https://github.com/Ashurumaru/ashurumaru.ru',
  },
  {
    num: '02',
    category: 'text',
    title: 'text',
    description: 'text',
    stack: [
      { name: 'text' },
      { name: 'text' },
      { name: 'text' },
      { name: 'text' },
    ],
    image: '/assets/work/thumb2.png',
    live: 'https://github.com/Ashurumaru/ashurumaru.ru',
    github: 'https://github.com/Ashurumaru/ashurumaru.ru',
  },
];

export const iconMapping: Record<string, React.ReactNode> = {
  FaHtml5: <FaHtml5 />,
  FaCss3: <FaCss3 />,
  FaJs: <FaJs />,
  FaNodeJs: <FaNodeJs />,
  FaReact: <FaReact />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiTailwindcss: <SiTailwindcss />,
  SiGit: <SiGit />,
  SiSharp: <SiSharp />,
  SiTypescript: <SiTypescript />,
  FaUser: <FaUser className="text-3xl text-accent" />,
  FaBriefcase: <FaBriefcase className="text-3xl text-accent" />,
  FaGraduationCap: <FaGraduationCap className="text-3xl text-accent" />,
  GiSkills:  <GiSkills className="text-3xl text-accent" />,
};