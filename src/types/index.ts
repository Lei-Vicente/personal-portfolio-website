export interface Profile {
  fullName: string;
  shortName: string;
  headline: string;
  status: string;
  university: string;
  expectedGraduation: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl?: string; // Optional - only render if provided
  resumeUrl?: string;
  avatarUrl?: string; // Optional - path to profile photo
  heroHeading: string;
  heroDescription: string;
  aboutParagraph: string;
  targetRole: string;
  openTo: string;
  strengths: string[];
}

export type ExperienceCategory = 'professional' | 'leadership' | 'academic';

export interface Experience {
  id: string;
  role: string;
  organization: string;
  dates?: string; // Hidden if undefined
  category: ExperienceCategory;
  summary: string;
  responsibilities?: string[]; // Omitted if empty or undefined
}

export type ProjectCategory = 'Personal' | 'Academic' | 'Business';

export interface ProjectPillar {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  summary: string;
  role?: string;
  overview?: string;
  pillars?: ProjectPillar[];
  problem?: string;
  goal?: string;
  discussedScope?: string[];
  implementedFeatures?: string[];
  myContributions?: string[];
  technologies?: string[];
  outcomes?: string[];
  demoUrl?: string;
  repoUrl?: string;
  coverImage?: string;
  screenshots?: string[];
  featured?: boolean;
  visibility?: 'public' | 'draft';
  accentColor?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  degreeOrLevel: string;
  period: string;
  recognition?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuedAt?: string;
  credentialUrl?: string;
  imageUrl?: string;
}
