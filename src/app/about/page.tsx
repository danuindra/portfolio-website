import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import { skillCategories } from '@/data/skills'
import AboutClient from '@/components/about/AboutClient/AboutClient'

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${siteConfig.name}'s background, skills, and approach to digital marketing and data analytics.`,
}

export default function AboutPage() {
  return <AboutClient skillCategories={skillCategories} siteConfig={siteConfig} />
}
