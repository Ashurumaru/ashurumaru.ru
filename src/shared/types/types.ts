import React from 'react';

export interface Service {
  num: string;
  title: string;
  description: string;
  href: string;
}

 type Item = {
  duration: string;
  position?: string;
  company?: string;
  institution?: string;
  degree?: string;
  name?: string;
  icon?: React.ReactNode;
};

export type Translation = {
  resume: {
    experience: {
      title: string;
      description: string;
      icon: React.ReactNode;
      items: Item[];
    };
    education: {
      title: string;
      description: string;
      icon: React.ReactNode;
      items: Item[];
    };
    skills: {
      title: string;
      description: string;
      icon: React.ReactNode;
      items: Record<string, { name: string; icon: React.ReactNode }>;
    };
    about: {
      title: string;
      description: string;
      icon: React.ReactNode;
      items: Record<string, string>;
      values: Record<string, string>;
    };
  };
};

export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: { name: string }[];
  images: string[];
  live: string;
  github: string;
  startDate: string;
  endDate: string;
}

export type WorkTranslation = {
  title_page: string;
  description_page: string;
  categories: {
    webDevelopment: string;
    appDevelopment: string;
    design: string;
    businessCardSite: string;
    telegramBot: string;
    landingPage: string;
  };
  filterProjects: string;
  category: string;
  resetFilters: string;
  noResults: string;

  page: string;
  of: string;
  firstPage: string;
  previousPage: string;
  nextPage: string;
  lastPage: string;
  rowsPerPage: string;
  projects: Project[];

  GitHub_repository: string;
  go_to_site: string;
  work_period: string;
  technology: string;
  description: string;
};
