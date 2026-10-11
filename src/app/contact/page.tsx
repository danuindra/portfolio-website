import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import ContactClient from '@/components/contact/ContactClient/ContactClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${siteConfig.name} for full-time opportunities, freelance work, or collaboration.`,
}

export default function ContactPage() {
  return <ContactClient siteConfig={siteConfig} />
}
