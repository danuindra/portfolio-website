import type { SkillCategory } from '@/types'

// Curated display — marketing-relevant skills only
// Dev frameworks (Next.js, React, TypeScript, etc.) are NOT listed here.
// They appear as tool tags in project case studies.
// Source: docs/11-copywriting.md — Skills Categories & Tools

export const skillCategories: SkillCategory[] = [
  {
    name: 'Marketing & Strategy',
    skills: [
      'Google Analytics 4',
      'Google Search Console',
      'SEO',
      'SEM',
      'Content Strategy',
      'Campaign Planning',
      'Marketing Analytics',
    ],
  },
  {
    name: 'Data & Visualization',
    skills: [
      'Looker Studio',
      'Google Sheets',
      'Data Storytelling',
      'Dashboard Design',
      'Reporting',
    ],
  },
  {
    name: 'Technical Skills',
    skills: [
      'HTML / CSS',
      'Google Tag Manager',
      'AI-assisted Workflows',
      'Prompt Engineering',
      'Figma (basics)',
      'Notion',
    ],
  },
]
