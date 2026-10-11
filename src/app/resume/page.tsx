import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import ResumeClient from '@/components/resume/ResumeClient/ResumeClient'

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume and CV of ${siteConfig.name} — Digital Marketer & Analyst.`,
}

export default function ResumePage() {
  return <ResumeClient siteConfig={siteConfig} />
}
