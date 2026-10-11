import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import Hero from '@/components/sections/Hero/Hero'
import AboutSummary from '@/components/sections/AboutSummary/AboutSummary'
import JourneyHighlight from '@/components/sections/JourneyHighlight/JourneyHighlight'
import ProjectsHighlight from '@/components/sections/ProjectsHighlight/ProjectsHighlight'
import Skills from '@/components/sections/Skills/Skills'
import ContactCTA from '@/components/sections/ContactCTA/ContactCTA'

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.description,
}

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <AboutSummary />
      <JourneyHighlight />
      <ProjectsHighlight />
      <Skills />
      <ContactCTA />
    </main>
  )
}
