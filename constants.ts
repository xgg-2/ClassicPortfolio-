import { Project, Script, Experience, SkillCategory, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', label: 'github.com/xgg2' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', label: 'linkedin.com/in/youcef' },
  { platform: 'Email', url: 'mailto:contact@xgg2.dev', label: 'contact@xgg2.dev' },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Core Technologies",
    skills: ["TypeScript", "React", "Node.js", "Python", "SQL", "Go"]
  },
  {
    title: "Architecture & DevOps",
    skills: ["Microservices", "AWS", "Docker", "Kubernetes", "CI/CD", "System Design"]
  },
  {
    title: "Design Principles",
    skills: ["Clean Architecture", "SOLID", "Domain-Driven Design", "Accessibility (WCAG)", "UI/UX Strategy"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Staff Engineer",
    company: "Architech Solutions",
    period: "2021 — Present",
    description: [
      "Led the migration of a legacy monolith to a micro-frontend architecture, improving deployment velocity by 40%.",
      "Mentored a team of 12 developers, establishing code quality standards and review processes.",
      "Architected a real-time data processing pipeline handling 10k+ events per second."
    ]
  },
  {
    id: "exp-2",
    role: "Lead Frontend Developer",
    company: "Vanguard Digital",
    period: "2018 — 2021",
    description: [
      "Designed and implemented a proprietary UI component library used across 15+ internal products.",
      "Optimized core application performance, reducing Time-to-Interactive (TTI) by 60%.",
      "Collaborated closely with design teams to bridge the gap between Figma prototypes and production code."
    ]
  },
  {
    id: "exp-3",
    role: "Software Engineer",
    company: "BrightPath Systems",
    period: "2015 — 2018",
    description: [
      "Developed full-stack features for a cloud-based CRM using Python and React.",
      "Implemented automated testing suites that increased code coverage from 45% to 90%.",
      "Managed database migrations and optimizations for large-scale datasets."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Lumina Finance Platform",
    category: "Website",
    description: "A comprehensive dashboard for institutional investors to track real-time market data and manage diverse portfolios. Built with precision and performance in mind.",
    technologies: ["React", "TypeScript", "D3.js", "WebSockets", "Redis"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    gallery: [
      "https://picsum.photos/1200/800?random=10",
      "https://picsum.photos/1200/800?random=11",
      "https://picsum.photos/1200/800?random=12"
    ],
    link: "#",
    year: "2023"
  },
  {
    id: "proj-2",
    title: "Chronos Task Engine",
    category: "Tools",
    description: "An open-source distributed task scheduler capable of handling complex dependency graphs. Designed for high availability and fault tolerance.",
    technologies: ["Go", "gRPC", "PostgreSQL", "Redis", "Docker"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    gallery: [
       "https://picsum.photos/1200/800?random=20",
       "https://picsum.photos/1200/800?random=21"
    ],
    link: "#",
    githubUrl: "https://github.com/xgg2/chronos",
    year: "2022"
  },
  {
    id: "proj-3",
    title: "Aesthete CMS",
    category: "Website",
    description: "A headless CMS focused on editorial content, providing a rich text editing experience and structured content modeling for digital publishers.",
    technologies: ["Node.js", "GraphQL", "MongoDB", "Next.js", "AWS S3"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    gallery: [
      "https://picsum.photos/1200/800?random=30",
      "https://picsum.photos/1200/800?random=31",
      "https://picsum.photos/1200/800?random=32"
    ],
    link: "#",
    githubUrl: "https://github.com/xgg2/aesthete",
    year: "2021"
  },
  {
    id: "proj-4",
    title: "Vortex Bot",
    category: "Discord Bot",
    description: "A high-performance moderation and utility bot serving over 50,000 servers. Features include auto-moderation, leveling systems, and music playback.",
    technologies: ["TypeScript", "Discord.js", "PostgreSQL", "Redis"],
    imageUrl: "https://picsum.photos/800/600?random=4",
    gallery: [
       "https://picsum.photos/1200/800?random=40",
       "https://picsum.photos/1200/800?random=41"
    ],
    link: "#",
    year: "2023"
  },
  {
    id: "proj-5",
    title: "DevUtils CLI",
    category: "Tools",
    description: "A command-line interface tool for developers to quickly scaffold projects, generate boilerplate code, and manage local environments.",
    technologies: ["Rust", "Clap", "Tokio"],
    imageUrl: "https://picsum.photos/800/600?random=5",
    gallery: [
       "https://picsum.photos/1200/800?random=50"
    ],
    link: "#",
    githubUrl: "https://github.com/xgg2/devutils",
    year: "2023"
  },
  {
    id: "proj-6",
    title: "Sentinel Guardian",
    category: "Discord Bot",
    description: "Advanced anti-raid and security bot for large communities. Implements heuristic analysis to detect and ban raid accounts in real-time.",
    technologies: ["Python", "Hikari", "TensorFlow"],
    imageUrl: "https://picsum.photos/800/600?random=6",
    gallery: [
       "https://picsum.photos/1200/800?random=60"
    ],
    link: "#",
    year: "2022"
  }
];

export const SCRIPTS: Script[] = [
  {
    id: "script-1",
    title: "Auto-Role Assigner",
    description: "A lightweight script to automatically assign roles to new members based on join date.",
    imageUrl: "https://picsum.photos/800/600?random=100",
    language: "Python",
    tags: ["Discord", "Automation"],
    codeSnippet: `import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='!')

@bot.event
async def on_member_join(member):
    role = discord.utils.get(member.guild.roles, name="Member")
    if role:
        await member.add_roles(role)
        print(f"Assigned {role.name} to {member.name}")

bot.run('YOUR_TOKEN')`
  },
  {
    id: "script-2",
    title: "React Component Generator",
    description: "Shell script to generate a React component structure with TypeScript interfaces and SCSS modules.",
    imageUrl: "https://picsum.photos/800/600?random=101",
    language: "Bash",
    tags: ["Productivity", "React"],
    codeSnippet: `#!/bin/bash
NAME=$1
mkdir $NAME
cd $NAME
touch index.ts $NAME.tsx $NAME.module.scss

echo "export { default } from './$NAME';" > index.ts

echo "import React from 'react';
import styles from './$NAME.module.scss';

interface \${NAME}Props {}

const $NAME: React.FC<\${NAME}Props> = () => {
  return <div className={styles.container}>$NAME Component</div>;
};

export default $NAME;" > $NAME.tsx`
  },
  {
    id: "script-3",
    title: "Data Sanitizer Middleware",
    description: "Express.js middleware to sanitize request bodies and prevent XSS attacks.",
    imageUrl: "https://picsum.photos/800/600?random=102",
    language: "JavaScript",
    tags: ["Security", "Node.js"],
    codeSnippet: `const xss = require('xss');

const sanitize = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = xss(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      sanitize(obj[key]);
    }
  }
};

module.exports = (req, res, next) => {
  if (req.body) sanitize(req.body);
  if (req.query) sanitize(req.query);
  if (req.params) sanitize(req.params);
  next();
};`
  }
];