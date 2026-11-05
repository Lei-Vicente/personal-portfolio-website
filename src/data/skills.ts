import { SkillCategory } from '../types';

export const coreSkillCategories: SkillCategory[] = [
  {
    title: 'Front-End',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5 & CSS3'],
  },
  {
    title: 'Back-End',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'PHP'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Prisma ORM'],
  },
  {
    title: 'Tooling & Deployment',
    skills: ['Git & GitHub', 'Docker', 'Vite', 'Vercel', 'Figma'],
  },
  {
    title: 'Testing & Quality',
    skills: ['Playwright (E2E)', 'Jest (Unit)', 'QA Testing'],
  },
];

export const supplementarySkills: SkillCategory[] = [
  {
    title: 'Additional Programming & Query Languages',
    skills: ['C++', 'Java', 'Python', 'SQL'],
  },
  {
    title: 'Productivity & Creative Tools',
    skills: ['Microsoft Office (Word, Excel, PowerPoint)', 'Canva', 'CapCut'],
  },
  {
    title: 'Operational & Technical Competencies',
    skills: [
      'Hardware & Network Troubleshooting',
      'Inventory & Records Management',
      'Cross-Team Communication',
      'Task & Project Coordination',
    ],
  },
];
