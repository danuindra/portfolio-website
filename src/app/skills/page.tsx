import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import { skillCategories } from '@/data/skills'
import SkillsPageClient from '@/components/skills/SkillsPageClient/SkillsPageClient'

export const metadata: Metadata = {
  title: 'Skills',
  description: `Skills and tools used by ${siteConfig.name} — digital marketing, analytics, content, and more.`,
}

export default function SkillsPage() {
  return <SkillsPageClient skillCategories={skillCategories} />
}
