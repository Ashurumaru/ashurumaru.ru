'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionDisplay from '@/components/resume/section-display';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/shared/config/i18n';
import { iconMapping } from '@/shared/constants/data';
import { Translation } from '@/shared/types/types';

type ResumePageProps = {
  params: {
    lang: Locale;
  };
};

const ResumePage: React.FC<ResumePageProps> = ({ params: { lang } }) => {
  const [translations, setTranslations] = useState<Translation | null>(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      const dictionary = await getDictionary(lang);
      const resumeTranslations: Translation['resume'] = dictionary.resume;

      setTranslations({
        resume: resumeTranslations
      });
    };

    fetchTranslations();
  }, [lang]);


  if (!translations) return null;

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
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{translations.resume.experience.title}</TabsTrigger>
            <TabsTrigger value="education">{translations.resume.education.title}</TabsTrigger>
            <TabsTrigger value="skills">{translations.resume.skills.title}</TabsTrigger>
            <TabsTrigger value="about">{translations.resume.about.title}</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full flex flex-col">
            {/* Раздел Experience */}
            <TabsContent value="experience" className="flex-grow">
              <SectionDisplay
                title={translations.resume.experience.title}
                description={translations.resume.experience.description}
                icon={iconMapping[translations.resume.experience.icon as string]}
              >
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {translations.resume.experience.items?.map((exp, index) => (
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

            {/* Раздел Education */}
            <TabsContent value="education" className="flex-grow">
              <SectionDisplay
                title={translations.resume.education.title}
                description={translations.resume.education.description}
                icon={iconMapping[translations.resume.education.icon as string]}
              >
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {translations.resume.education.items?.map((edu, index) => (
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

            {/* Раздел Skills */}
            <TabsContent value="skills" className="flex-grow">
              <SectionDisplay
                title={translations.resume.skills.title}
                description={translations.resume.skills.description}
                icon={iconMapping[translations.resume.skills.icon as string]}
              >
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {Object.keys(translations.resume.skills.items).map((key) => (
                      <li key={key}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"
                              aria-label={translations.resume.skills.items[key].name}
                            >
                              <div className="text-6xl group-hover:text-accent-hover transition-all duration-300">
                                {iconMapping[translations.resume.skills.items[key].icon as string]}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{translations.resume.skills.items[key].name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </SectionDisplay>
            </TabsContent>

            {/* Раздел About */}
            <TabsContent value="about" className="flex-grow">
              <SectionDisplay
                title={translations.resume.about.title}
                description={translations.resume.about.description}
                icon={iconMapping[translations.resume.about.icon as string]}
              >
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[650px] mx-auto xl:mx-0">
                  {Object.keys(translations.resume.about.items).map((key) => (
                    <li key={key} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/80">{translations.resume.about.items[key]}</span>
                      <span className="text-xl">{translations.resume.about.values[key]}</span>
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

export default ResumePage;