import React from 'react';

export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
}

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