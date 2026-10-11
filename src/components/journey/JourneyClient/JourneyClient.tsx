'use client'

import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import WeekCard from '@/components/journey/WeekCard/WeekCard'
import type { RevoUWeek } from '@/types'

interface JourneyClientProps {
  weeks: RevoUWeek[]
}

export default function JourneyClient({ weeks }: JourneyClientProps) {
  return (
    <main id="main-content" className="pt-16">
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10 py-16">

        {/* Page header */}
        <AnimatedSection>
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2.5 py-1 rounded-full uppercase tracking-wider">
              RevoU Program
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-5 leading-tight">
            My RevoU Journey
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl leading-relaxed mb-3">
            12 proyek nyata — Google Ads, Meta Ads, SEO, konten, social media, sampai kampanye live. Semua dikerjakan beneran, bukan simulasi.
          </p>
          <p className="text-sm text-[var(--color-text-tertiary)]">
            Klik salah satu proyek untuk lihat studi kasus lengkap: konteks, strategi, eksekusi, dan hasilnya.
          </p>
        </AnimatedSection>

        {/* Progress narrative */}
        <AnimatedSection delay={80} className="mt-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Learning', description: 'Projects 1–4', icon: '📖' },
              { label: 'Building', description: 'Projects 5–8', icon: '🔨' },
              { label: 'Applying', description: 'Projects 9–12', icon: '🚀' },
              { label: 'Results', description: 'Live Campaigns', icon: '📊' },
            ].map((phase, i) => (
              <AnimatedSection key={phase.label} delay={i * 60}>
                <div className="p-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] text-center">
                  <span className="text-2xl mb-2 block" aria-hidden="true">{phase.icon}</span>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">{phase.label}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)] mt-0.5">{phase.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="border-t border-[var(--color-border-subtle)] mb-12" />

        {/* Week grid */}
        <AnimatedSection delay={120}>
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-8">
            Semua 12 Proyek
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {weeks.map((week, i) => (
            <AnimatedSection key={week.slug} delay={80 + i * 40}>
              <WeekCard week={week} />
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={200} className="mt-16">
          <div className="p-6 rounded-xl border border-dashed border-[var(--color-border-default)] bg-[var(--color-bg-surface)]">
            <p className="text-sm text-[var(--color-text-secondary)]">
              <span className="font-semibold text-[var(--color-text-primary)]">Content in progress.</span>{' '}
              Project details for each week will be added as the program progresses.
              Cards marked "Coming soon" will be updated with full case studies.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </main>
  )
}
