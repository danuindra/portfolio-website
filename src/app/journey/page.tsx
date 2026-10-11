import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import { revouWeeks } from '@/data/revou-weeks'
import JourneyClient from '@/components/journey/JourneyClient/JourneyClient'

export const metadata: Metadata = {
  title: 'My RevoU Journey',
  description: `14 weeks of real-world digital marketing projects by ${siteConfig.name} at RevoU.`,
}

export default function JourneyPage() {
  return <JourneyClient weeks={revouWeeks} />
}
