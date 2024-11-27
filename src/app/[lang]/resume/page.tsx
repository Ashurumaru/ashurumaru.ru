'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { about, education, experience, skills } from '@/shared/constants/data';

interface SectionDisplayProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const SectionDisplay: React.FC<SectionDisplayProps> = ({
  title,
  description,
  icon,
  children,
}) => (
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
          ease: 'easeIn',
          delay: 0.3,
        },
      }}
      className="min-h-[70vh] flex items-center justify-center py-12 xl:pt-[70px] xl:pb-[50px]"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" aria-label="Experience">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" aria-label="Education">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" aria-label="Skills">
              Skills
            </TabsTrigger>
            <TabsTrigger value="about" aria-label="About Me">
              About Me
            </TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full flex flex-col">
            <TabsContent value="experience" className="flex-grow">
              <SectionDisplay
                title={experience.title}
                description={experience.description}
                icon={experience.icon}
              >
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
              <SectionDisplay
                title={education.title}
                description={education.description}
                icon={education.icon}
              >
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items?.map((edu, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-8 lg:px-10 rounded-lg shadow-lg"
                      >
                        <div className="mb-2">
                          <span className="block text-accent text-sm font-medium">
                            {edu.duration}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold leading-tight mt-1">
                            {edu.institution}
                          </h3>
                        </div>
                        <p className="text-white/70 text-sm sm:text-base">
                          {edu.degree}
                        </p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </SectionDisplay>
            </TabsContent>

            <TabsContent value="skills" className="flex-grow">
              <SectionDisplay
                title={skills.title}
                description={skills.description}
                icon={skills.icon}
              >
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
                              <div className="text-6xl group-hover:text-accent-hover transition-all duration-300">
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
              <SectionDisplay
                title={about.title}
                description={about.description}
                icon={about.icon}
              >
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
