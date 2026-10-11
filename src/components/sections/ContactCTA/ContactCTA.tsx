'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import { siteConfig } from '@/data/site'
import { useLocale } from '@/context/LocaleContext'

export default function ContactCTA() {
  const { t } = useLocale()

  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="py-24 border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]"
    >
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10">
        <AnimatedSection>
          <div className="max-w-xl mx-auto text-center">
            <h2
              id="contact-cta-heading"
              className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-4"
            >
              {t.contactCta.heading}
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
              {t.contactCta.body}
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-[var(--color-accent)] text-white text-sm font-medium transition-all hover:-translate-y-px hover:shadow-md active:translate-y-0 mb-8"
            >
              {t.contactCta.button}
            </Link>

            {/* Social links */}
            <div className="flex items-center justify-center gap-6">
              <a
                href={`https://${siteConfig.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.ariaLinkedIn}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                {t.contactCta.linkedin}
              </a>
              <span className="w-px h-4 bg-[var(--color-border-subtle)]" aria-hidden="true" />
              {siteConfig.email && (
                <>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    aria-label={t.contact.ariaEmail}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {t.contactCta.email}
                  </a>
                  <span className="w-px h-4 bg-[var(--color-border-subtle)]" aria-hidden="true" />
                </>
              )}
              <a
                href={`https://${siteConfig.github}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.ariaGitHub}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                {t.contactCta.github}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
