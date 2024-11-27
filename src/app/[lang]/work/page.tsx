'use client';

import 'swiper/css';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import WorkSliderButton from '@/components/work/work-slider-button';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/shared/config/i18n';
import { Project, WorkTranslation } from '@/shared/types/types';

type WorkPageProps = {
  params: {
    lang: Locale;
  };
};

const Work: React.FC<WorkPageProps> = ({ params: { lang } }) => {
  const [translations, setTranslations] = useState<WorkTranslation | null>(null);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      const dictionary = await getDictionary(lang);
      const workTranslations: WorkTranslation = dictionary.work;
      setTranslations(workTranslations);
      setCurrentProject(workTranslations.projects[0]);
    };

    fetchTranslations();
  }, [lang]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setCurrentProject(translations?.projects[currentIndex] || null); // Fallback to null if undefined
  };

  if (!translations || !currentProject) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.4, ease: 'easeInOut' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 px-4 md:px-8 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <ProjectDetails project={currentProject} />
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              className="h-[320px] md:h-[420px] lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {translations.projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <ProjectSlide project={project} />
                </SwiperSlide>
              ))}
              <WorkSliderButton
                containerStyles="flex gap-2 absolute right-0 bottom-20 lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    className="w-full lg:w-[50%] flex flex-col justify-between order-2 lg:order-none mb-8 lg:mb-0"
  >
    <div className="flex flex-col gap-[20px]">
      <div className="text-5xl sm:text-8xl leading-none font-extrabold text-transparent text-outline">
        {project.num}
      </div>
      <h2 className="text-[24px] sm:text-[32px] md:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
        {project.title}
      </h2>
      <p className="text-white/60 text-sm md:text-base">
        {project.description}
      </p>
      <ul className="flex gap-2 md:gap-4 flex-wrap">
        {project.stack.map((item, index) => (
          <li key={index} className="text-sm md:text-lg text-accent">
            {item.name}
            {index !== project.stack.length - 1 && <span className="px-2">/</span>}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <ProjectLink
          href={project.live}
          icon={<BsArrowUpRight />}
          tooltipText="Live Website"
          ariaLabel="Live Website"
        />
        <ProjectLink
          href={project.github}
          icon={<BsGithub />}
          tooltipText="GitHub Repo"
          ariaLabel="GitHub Repo"
        />
      </div>
    </div>
  </motion.div>
);

interface ProjectSlideProps {
  project: Project;
}

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    className="h-[320px] md:h-[420px] lg:h-[460px] relative group flex justify-center items-center bg-pink-50/20"
  >
    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
    <div className="relative w-full h-full">
      <Image
        src={project.image}
        fill
        className="object-cover"
        alt={project.category}
        priority
      />
    </div>
  </motion.div>
);

interface ProjectLinkProps {
  href: string;
  icon: React.ReactNode;
  tooltipText: string;
  ariaLabel: string;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({
                                                   href,
                                                   icon,
                                                   tooltipText,
                                                   ariaLabel,
                                                 }) => (
  <TooltipProvider delayDuration={180}>
    <Link href={href} aria-label={ariaLabel}>
      <Tooltip>
        <TooltipTrigger className="w-[44px] h-[44px] rounded-full bg-white/5 flex justify-center items-center group transition-transform duration-300 hover:scale-110">
          {icon}
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </Link>
  </TooltipProvider>
);

export default Work;
