'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import { revouWeeks } from '@/data/revou-weeks'

// Show the first 4 weeks as a preview on the home page
const PREVIEW_COUNT = 4

// Category short label for the mini card
const categoryShort: Record<string, string> = {
  'Digital Marketing Fundamentals': 'Fundamentals',
  'SEO': 'SEO',
  'SEM': 'SEM',
  'Social Media Marketing': 'Social Media',
  'Content Marketing': 'Content',
  'Email Marketing': 'Email',
  'Analytics': 'Analytics',
  'Campaign Strategy': 'Strategy',
  'Data Visualization': 'Visualization',
  'Marketing Automation': 'Automation',
  'Final Project': 'Final Project',
  'Placeholder': 'Coming soon',
}

export default function JourneyHighlight() {
  const preview = revouWeeks.slice(0, PREVIEW_COUNT)
  const remaining = revouWeeks.length - PREVIEW_COUNT

  return (
    <section
      aria-labelledby="journey-highlight-heading"
      className="py-24 border-t border-[var(--color-border-subtle)]"
    >
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10">

        {/* Section header */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">
                RevoU Journey
              </p>
              <h2
                id="journey-highlight-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-3"
              >
                12 Proyek Nyata
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-lg leading-relaxed">
                Google Ads, Meta Ads, SEO, konten, social media, sampai kampanye live — semua dikerjakan beneran selama program RevoU.
              </p>
            </div>
            <Link
              href="/journey"
              className="shrink-0 text-sm font-medium text-[var(--color-accent)] hover:underline whitespace-nowrap"
            >
              Lihat semua proyek →
            </Link>
          </div>
        </AnimatedSection>

        {/* Phase banner */}
        <AnimatedSection delay={60} className="mb-10">
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { phase: 'Learning', weeks: '1–4', active: true },
              { phase: 'Building', weeks: '5–8', active: false },
              { phase: 'Applying', weeks: '9–12', active: false },
              { phase: 'Results', weeks: '13–14', active: false },
            ].map((p) => (
              <div
                key={p.phase}
                className={`py-2.5 px-2 rounded-lg text-xs font-medium border transition-colors ${
                  p.active
                    ? 'bg-[var(--color-accent-subtle)] border-[var(--color-accent)] text-[var(--color-accent)]'
                    : 'bg-[var(--color-bg-surface)] border-[var(--color-border-subtle)] text-[var(--color-text-tertiary)]'
                }`}
              >
                <span className="block font-semibold">{p.phase}</span>
                <span className="block opacity-75">Wk {p.weeks}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Preview cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {preview.map((week, i) => {
            const weekNum = String(week.week).padStart(2, '0')
            return (
              <AnimatedSection key={week.slug} delay={80 + i * 60}>
                <Link
                  href={`/projects/${week.slug}`}
                  className="group flex flex-col h-full p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] hover:border-[var(--color-border-default)] hover:shadow-md transition-all duration-[250ms] hover:-translate-y-1"
                  aria-label={`Project ${weekNum}: ${week.title}`}
                >
                  <span className="text-xs font-mono font-semibold text-[var(--color-text-tertiary)] tracking-widest mb-3">
                    PROJECT {weekNum}
                  </span>
                  <span className="inline-block self-start text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2 py-0.5 rounded mb-3">
                    {categoryShort[week.category] ?? week.category}
                  </span>
                  <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-snug flex-1">
                    {week.isPlaceholder
                      ? <span className="italic text-[var(--color-text-tertiary)]">Coming soon…</span>
                      : week.title}
                  </p>
                  <p className="mt-3 text-xs font-medium text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                    View →
                  </p>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>

        {/* View all link */}
        <AnimatedSection delay={160}>
          <p className="text-sm text-[var(--color-text-secondary)] text-center">
            Showing {PREVIEW_COUNT} of {revouWeeks.length} weeks.{' '}
            <Link href="/journey" className="text-[var(--color-accent)] hover:underline font-medium">
              See the full journey →
            </Link>
            {remaining > 0 && (
              <span className="ml-1 text-[var(--color-text-tertiary)]">({remaining} more weeks)</span>
            )}
          </p>
        </AnimatedSection>

      </div>
    </section>
  )
}
