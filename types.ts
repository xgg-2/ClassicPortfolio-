export type ProjectCategory = 'Discord Bot' | 'Tools' | 'Website';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  imageUrl: string; // Main thumbnail
  gallery: string[]; // Additional screenshots
  link: string; // Live demo link
  githubUrl?: string; // Optional public repo link
  year: string;
}

export interface Script {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  codeSnippet: string; // The actual code to copy
  language: string; // e.g., "Python", "Lua", "JavaScript"
  tags: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}