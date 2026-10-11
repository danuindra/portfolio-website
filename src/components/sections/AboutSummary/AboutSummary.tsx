'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import { useLocale } from '@/context/LocaleContext'

export default function AboutSummary() {
  const { t } = useLocale()

  return (
    <section aria-labelledby="about-heading" className="py-24 border-t border-[var(--color-border-subtle)]">
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-widest text-[var(--color-accent)] uppercase mb-4">
            {t.aboutSummary.eyebrow}
          </p>
          <h2
            id="about-heading"
            className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-6 max-w-xl"
          >
            {t.aboutSummary.heading}
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-2">
            {t.aboutSummary.body1}
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-8">
            {t.aboutSummary.body2}
          </p>
          <Link
            href="/about"
            className="text-sm font-medium text-[var(--color-accent)] hover:underline underline-offset-4"
          >
            {t.aboutSummary.readMore}
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
