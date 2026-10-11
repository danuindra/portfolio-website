'use client'

import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import ContactForm from '@/components/sections/ContactForm/ContactForm'
import { useLocale } from '@/context/LocaleContext'
import type { siteConfig as SiteConfigType } from '@/data/site'

interface ContactClientProps {
  siteConfig: typeof SiteConfigType
}

export default function ContactClient({ siteConfig }: ContactClientProps) {
  const { t } = useLocale()

  return (
    <main id="main-content" className="pt-16">
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10 py-16">

        {/* Page header */}
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4">
            {t.contact.heading}
          </h1>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-2 max-w-xl">
            {t.contact.body1}
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] mb-12">
            {t.contact.body2}
          </p>

          {/* Status */}
          <div className="flex items-center gap-2 mb-12">
            <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" aria-hidden="true" />
            <span className="text-sm text-[var(--color-text-secondary)]">
              {t.contact.availability}
            </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* Contact form */}
          <AnimatedSection delay={80}>
            <ContactForm />
          </AnimatedSection>

          {/* Direct contact */}
          <AnimatedSection delay={160}>
            <div>
              <h2 className="text-sm font-semibold text-[var(--color-text-primary)] mb-6">
                {t.contact.directHeading}
              </h2>

              <dl className="space-y-5">
                {siteConfig.email && (
                  <div>
                    <dt className="text-xs text-[var(--color-text-tertiary)] mb-1">{t.contact.labelEmail}</dt>
                    <dd>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                )}

                <div>
                  <dt className="text-xs text-[var(--color-text-tertiary)] mb-1">{t.contact.labelLinkedIn}</dt>
                  <dd>
                    <a
                      href={`https://${siteConfig.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.contact.ariaLinkedIn}
                      className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      {siteConfig.linkedin}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-[var(--color-text-tertiary)] mb-1">{t.contact.labelGitHub}</dt>
                  <dd>
                    <a
                      href={`https://${siteConfig.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.contact.ariaGitHub}
                      className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      {siteConfig.github}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </main>
  )
}
