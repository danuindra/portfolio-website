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
  const isID = t.locale.current === 'ID'

  return (
    <main id="main-content" className="pt-16">
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10 py-16">

        {/* Page header */}
        <AnimatedSection>
          <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">
            {isID ? 'Kontak' : 'Contact'}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4">
            {isID ? 'Yuk, Ngobrol!' : "Let's Talk"}
          </h1>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-2 max-w-xl">
            {isID
              ? 'Yuk, ngobrolin peluang kerja sama atau diskusi seputar digital marketing! Saya terbuka untuk peran full-time, kolaborasi freelance, atau sekadar tukar pikiran soal growth strategy.'
              : "Let's talk about work opportunities or anything digital marketing. Open to full-time roles, freelance projects, or a quick chat about growth strategy."}
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] mb-10">
            {isID
              ? 'Cara paling cepat? Kirim pesan via form di bawah — saya balas dalam 24 jam.'
              : 'Fastest way? Drop a message below. I reply within 24 hours.'}
          </p>

          {/* Availability status */}
          <div className="flex items-center gap-2 mb-12">
            <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" aria-hidden="true" />
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
                      className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors break-all"
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
                      className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors break-all"
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
