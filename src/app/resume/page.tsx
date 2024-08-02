"use client";

import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact, FaBriefcase, FaGraduationCap, FaUser } from "react-icons/fa";
import { SiGit, SiMysql, SiPostgresql, SiSharp, SiTailwindcss, SiTypescript } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { motion } from "framer-motion";
import React from 'react';

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface InfoField {
    fieldName: string;
    fieldValue: string;
}

interface ExperienceItem {
    company: string;
    position: string;
    duration: string;
}

interface EducationItem {
    institution: string;
    degree: string;
    duration: string;
}

interface SkillItem {
    icon: React.ReactNode;
    name: string;
}

interface SectionData<T> {
    icon?: React.ReactNode;
    title: string;
    description: string;
    items?: T[];
}

const about: SectionData<InfoField> = {
    icon: <FaUser className="text-3xl text-accent" />,
    title: "About Me",
    description: "A brief description about myself.",
    items: [
        { fieldName: "Name", fieldValue: "Ashurumaru" },
        { fieldName: "Phone", fieldValue: "On request" },
        { fieldName: "Experience", fieldValue: "0 Years" },
        { fieldName: "Nationality", fieldValue: "Russia" },
        { fieldName: "Github", fieldValue: "Ashurumaru" },
        { fieldName: "Email", fieldValue: "ashuramarumaru@gmail.com" },
        { fieldName: "Languages", fieldValue: "Russian, English" },
    ],
};

const experience: SectionData<ExperienceItem> = {
    icon: <FaBriefcase className="text-3xl text-accent"/>,
    title: "Experience",
    description: "Although I don't have professional experience yet, I am actively honing my skills and eagerly looking forward to contributing to impactful projects in the near future.",
    items: [],
};

const education: SectionData<EducationItem> = {
    icon: <FaGraduationCap className="text-3xl text-accent"/>,
    title: "Education",
    description: "My educational background.",
    items: [
        { institution: "Siberian State University of Telecommunications and Informatics (branch)", degree: "Programming in computer networks", duration: "2021 - Present" },
        { institution: "Additional professional education", degree: "An introduction to Model View ViewModel with object-oriented programming.", duration: "October 22, 2023 - April 13, 2024" },
    ],
};

const skills: SectionData<SkillItem> = {
    icon: <GiSkills className="text-3xl text-accent" />,
    title: "Skills",
    description: "Technologies and tools I excel in.",
    items: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiTailwindcss />, name: "TailwindCSS" },
        { icon: <SiGit />, name: "Git" },
        { icon: <SiSharp />, name: "C#" },
    ],
};

interface SectionDisplayProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
}

const SectionDisplay: React.FC<SectionDisplayProps> = ({ title, description, icon, children }) => (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <div className="flex items-center justify-center xl:justify-start gap-4">
            {icon && <div className="text-accent text-4xl">{icon}</div>}
            <h2 className="text-4xl font-semibold">{title}</h2>
        </div>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
        {children}
    </div>
);

const Resume: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.4,
                    ease: "easeIn",
                    delay: 0.3,
                },
            }}
            className="min-h-[70vh] flex items-center justify-center py-12 xl:pt-[70px] xl:pb-[50px]"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience" aria-label="Experience">Experience</TabsTrigger>
                        <TabsTrigger value="education" aria-label="Education">Education</TabsTrigger>
                        <TabsTrigger value="skills" aria-label="Skills">Skills</TabsTrigger>
                        <TabsTrigger value="about" aria-label="About Me">About Me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full flex flex-col">
                        <TabsContent value="experience" className="flex-grow">
                            <SectionDisplay title={experience.title} description={experience.description} icon={experience.icon}>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items?.map((exp, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{exp.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {exp.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{exp.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </SectionDisplay>
                        </TabsContent>

                        <TabsContent value="education" className="flex-grow">
                            <SectionDisplay title={education.title} description={education.description} icon={education.icon}>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items?.map((edu, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{edu.duration}</span>
                                                <h4 className="text-xl max-w-[260px] min-h-[40px] text-center lg:text-left">
                                                    {edu.degree}
                                                </h4>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{edu.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </SectionDisplay>
                        </TabsContent>

                        <TabsContent value="skills" className="flex-grow">
                            <SectionDisplay title={skills.title} description={skills.description} icon={skills.icon}>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                        {skills.items?.map((skill) => (
                                            <li key={skill.name}>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger
                                                            className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"
                                                            aria-label={skill.name}
                                                        >
                                                            <div
                                                                className="text-6xl group-hover:text-accent-hover transition-all duration-300"
                                                            >
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </SectionDisplay>
                        </TabsContent>

                        <TabsContent value="about" className="flex-grow">
                            <SectionDisplay title={about.title} description={about.description} icon={about.icon}>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[650px] mx-auto xl:mx-0">
                                    {about.items?.map((info) => (
                                        <li
                                            key={info.fieldName}
                                            className="flex items-center justify-center xl:justify-start gap-4"
                                        >
                                            <span className="text-white/80">{info.fieldName}</span>
                                            <span className="text-xl">{info.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </SectionDisplay>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
