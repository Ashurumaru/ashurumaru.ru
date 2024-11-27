import { EducationItem, ExperienceItem, InfoField, Project, SectionData, SkillItem } from '@/shared/types/types';
import {FaBriefcase, FaCss3, FaGraduationCap, FaHtml5, FaJs, FaNodeJs, FaReact, FaUser,} from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import {SiGit, SiMysql, SiPostgresql, SiSharp, SiTailwindcss, SiTypescript,} from 'react-icons/si';

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

export const about: SectionData<InfoField> = {
  icon: <FaUser className="text-3xl text-accent" />,
  title: 'About Me',
  description: 'A brief description about myself.',
  items: [
    { fieldName: 'Name', fieldValue: 'Ashurumaru' },
    { fieldName: 'Phone', fieldValue: 'On request' },
    { fieldName: 'Experience', fieldValue: '0 Years' },
    { fieldName: 'Nationality', fieldValue: 'Russia' },
    { fieldName: 'Github', fieldValue: 'Ashurumaru' },
    { fieldName: 'Email', fieldValue: 'ashuramarumaru@gmail.com' },
    { fieldName: 'Languages', fieldValue: 'Russian, English' },
  ],
};

export const experience: SectionData<ExperienceItem> = {
  icon: <FaBriefcase className="text-3xl text-accent" />,
  title: 'Experience',
  description:
    "Although I don't have professional experience yet, I am actively honing my skills and eagerly looking forward to contributing to impactful projects in the near future.",
  items: [],
};

export const education: SectionData<EducationItem> = {
  icon: <FaGraduationCap className="text-3xl text-accent" />,
  title: 'Education',
  description: 'My educational background.',
  items: [
    {
      institution:
        'Siberian State University of Telecommunications and Informatics (branch)',
      degree: 'Programming in computer networks',
      duration: '2021 - Present',
    },
    {
      institution: 'Additional professional education',
      degree:
        'An introduction to Model View ViewModel with object-oriented programming.',
      duration: 'October 22, 2023 - April 13, 2024',
    },
  ],
};

export const skills: SectionData<SkillItem> = {
  icon: <GiSkills className="text-3xl text-accent" />,
  title: 'Skills',
  description: 'Technologies and tools I excel in.',
  items: [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3 />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiTailwindcss />, name: 'TailwindCSS' },
    { icon: <SiGit />, name: 'Git' },
    { icon: <SiSharp />, name: 'C#' },
  ],
};