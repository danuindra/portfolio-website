'use client'

import Link from 'next/link'
import { siteConfig } from '@/data/site'
import { useLocale } from '@/context/LocaleContext'

export default function Hero() {
  const { t } = useLocale()

  return (
    <section
      aria-label="Introduction"
      className="relative min-h-[calc(100svh-4rem)] flex items-center"
    >
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10 py-24">
        <div className="max-w-2xl">

          {/* Greeting */}
          <p
            className="text-sm text-[var(--color-text-secondary)] mb-3 animate-fade-up"
            style={{ animationDelay: '0ms' }}
          >
            {t.hero.greeting}
          </p>

          {/* Name — H1, only one per page */}
          <h1
            className="text-5xl md:text-6xl font-bold tracking-tight text-[var(--color-text-primary)] leading-tight mb-4 animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            {siteConfig.name}
          </h1>

          {/* Role tagline */}
          <p
            className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-medium mb-6 animate-fade-up"
            style={{ animationDelay: '160ms' }}
          >
            {siteConfig.title}
          </p>

          {/* Description */}
          <p
            className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            {t.hero.description}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 mb-8 animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-[var(--color-accent)] text-white text-sm font-medium transition-all hover:-translate-y-px hover:shadow-md active:translate-y-0"
            >
              {t.hero.ctaWork}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-11 px-6 rounded-lg border border-[var(--color-border-default)] text-[var(--color-text-primary)] text-sm font-medium transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              {t.hero.ctaContact}
            </Link>
          </div>

          {/* Availability badge */}
          <div
            className="flex items-center gap-2 animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            <span
              className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse"
              aria-hidden="true"
            />
            <span className="text-sm text-[var(--color-text-secondary)]">
              {t.hero.availability}
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
