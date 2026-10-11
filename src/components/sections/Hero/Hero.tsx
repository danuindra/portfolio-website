'use client'

import Link from 'next/link'
import { siteConfig } from '@/data/site'
import { useLocale } from '@/context/LocaleContext'

// Impact snapshot capabilities — shown below the hero copy
const capabilities = [
  {
    icon: '📈',
    label: 'Paid Growth',
    desc: 'Google Ads, Meta Ads, SEM strategy & budget optimization',
  },
  {
    icon: '📊',
    label: 'Performance Analytics',
    desc: 'GA4, Looker Studio, conversion tracking & data storytelling',
  },
  {
    icon: '⚙️',
    label: 'Tracking & Automation',
    desc: 'GTM setup, event tracking, marketing workflow automation',
  },
]

export default function Hero() {
  const { t } = useLocale()
  const isID = t.locale.current === 'ID'

  return (
    <section
      aria-label="Introduction"
      className="relative min-h-[calc(100svh-4rem)] flex items-center"
    >
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10 py-24">
        <div className="max-w-3xl">

          {/* Greeting */}
          <p
            className="text-sm text-[var(--color-text-secondary)] mb-3 animate-fade-up"
            style={{ animationDelay: '0ms' }}
          >
            {t.hero.greeting}
          </p>

          {/* Name */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--color-text-primary)] leading-tight mb-4 animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            {siteConfig.name}
          </h1>

          {/* Headline — punchy value prop */}
          <p
            className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-medium mb-5 animate-fade-up"
            style={{ animationDelay: '160ms' }}
          >
            {t.hero.headline}
          </p>

          {/* Sub-headline */}
          <p
            className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-2xl animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            {t.hero.subheadline}
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
            className="flex items-center gap-2 mb-16 animate-fade-up"
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

          {/* Impact Snapshot */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-up"
            style={{ animationDelay: '480ms' }}
            aria-label="Core capabilities"
          >
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="p-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]"
              >
                <span className="text-xl mb-2 block" aria-hidden="true">{cap.icon}</span>
                <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                  {cap.label}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {isID
                    ? cap.label === 'Paid Growth'
                      ? 'Google Ads, Meta Ads, strategi SEM & optimasi anggaran'
                      : cap.label === 'Performance Analytics'
                      ? 'GA4, Looker Studio, tracking konversi & data storytelling'
                      : 'Setup GTM, event tracking, otomasi alur kerja marketing'
                    : cap.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
