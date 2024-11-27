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

export interface InfoField {
  fieldName: string;
  fieldValue: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

export interface SkillItem {
  icon: React.ReactNode;
  name: string;
}

export interface SectionData<T> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  items?: T[];
}
