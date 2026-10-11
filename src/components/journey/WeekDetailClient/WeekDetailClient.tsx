'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import type { RevoUWeek } from '@/types'

interface WeekDetailClientProps {
  week: RevoUWeek
  prev: RevoUWeek | null
  next: RevoUWeek | null
}

// Category colour consistent with WeekCard
const categoryColour: Record<string, string> = {
  'Digital Marketing Fundamentals': 'text-blue-600 bg-blue-50',
  'SEO': 'text-green-600 bg-green-50',
  'SEM': 'text-orange-600 bg-orange-50',
  'Social Media Marketing': 'text-pink-600 bg-pink-50',
  'Content Marketing': 'text-purple-600 bg-purple-50',
  'Email Marketing': 'text-yellow-700 bg-yellow-50',
  'Analytics': 'text-indigo-600 bg-indigo-50',
  'Campaign Strategy': 'text-red-600 bg-red-50',
  'Data Visualization': 'text-teal-600 bg-teal-50',
  'Marketing Automation': 'text-cyan-600 bg-cyan-50',
  'Final Project': 'text-[var(--color-accent)] bg-[var(--color-accent-subtle)]',
  'Placeholder': 'text-[var(--color-text-tertiary)] bg-[var(--color-bg-elevated)]',
}

function PlaceholderBlock({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-5">
      <p className="text-sm text-[var(--color-text-tertiary)] italic">
        {label} — content coming soon.
      </p>
    </div>
  )
}

export default function WeekDetailClient({ week, prev, next }: WeekDetailClientProps) {
  const weekNum = String(week.week).padStart(2, '0')
  const colour = categoryColour[week.category] ?? categoryColour['Placeholder']

  return (
    <main id="main-content" className="pt-16">
      <article className="w-full mx-auto max-w-[800px] px-4 md:px-8 py-16">

        {/* Back to journey */}
        <AnimatedSection>
          <Link
            href="/journey"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors mb-8"
          >
            ← My RevoU Journey
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection delay={40}>
          <header className="mb-12">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono font-semibold text-[var(--color-text-tertiary)] tracking-widest">
                WEEK {weekNum}
              </span>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colour}`}>
                {week.category}
              </span>
              <span className="text-xs text-[var(--color-text-tertiary)] bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] px-2.5 py-1 rounded-full">
                RevoU Digital Marketing
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4 leading-tight">
              {week.isPlaceholder ? (
                <span className="text-[var(--color-text-secondary)]">Week {weekNum} Project</span>
              ) : (
                week.title
              )}
            </h1>

            {/* Short description */}
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-2xl">
              {week.shortDescription}
            </p>

            {/* Tools */}
            {week.tools.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {week.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono text-[var(--color-text-secondary)] bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] px-2.5 py-1 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </header>
        </AnimatedSection>

        {/* Placeholder notice */}
        {week.isPlaceholder && (
          <AnimatedSection delay={80}>
            <div className="mb-12 p-5 rounded-xl border border-[var(--color-warning)] bg-amber-50 dark:bg-amber-950/20">
              <p className="text-sm font-medium text-amber-700 dark:text-amber-400 mb-1">Content in progress</p>
              <p className="text-sm text-amber-600 dark:text-amber-500">
                This project is still being documented. The full case study will be added soon.
                Check back after the week is completed.
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* Case study sections */}
        <AnimatedSection delay={100} className="space-y-10">

          {/* Overview */}
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
              Overview
            </h2>
            <PlaceholderBlock label="Overview" />
          </section>

          {/* Objective */}
          <section aria-labelledby="objective-heading">
            <h2 id="objective-heading" className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
              Objective
            </h2>
            <PlaceholderBlock label="Objective" />
          </section>

          {/* My Role */}
          <section aria-labelledby="role-heading">
            <h2 id="role-heading" className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
              My Role
            </h2>
            <PlaceholderBlock label="My Role" />
          </section>

          {/* Process */}
          <section aria-labelledby="process-heading">
            <h2 id="process-heading" className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
              Process
            </h2>
            <PlaceholderBlock label="Process" />
          </section>

          {/* Tools */}
          <section aria-labelledby="tools-heading">
            <h2 id="tools-heading" className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
              Tools
            </h2>
            {week.tools.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {week.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm font-mono text-[var(--color-text-secondary)] bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] px-3 py-1.5 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            ) : (
              <PlaceholderBlock label="Tools" />
            )}
          </section>

          {/* Result */}
          <section aria-labelledby="result-heading">
            <h2 id="result-heading" className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
              Result
            </h2>
            <PlaceholderBlock label="Result" />
          </section>

          {/* Project Output / Gallery */}
          <section aria-labelledby="output-heading">
            <h2 id="output-heading" className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
              Project Output / Gallery
            </h2>
            <div className="rounded-xl border border-dashed border-[var(--color-border-default)] bg-[var(--color-bg-surface)] aspect-video flex items-center justify-center">
              <p className="text-sm text-[var(--color-text-tertiary)] italic">
                Screenshots / outputs — coming soon.
              </p>
            </div>
          </section>

          {/* What I Learned */}
          <section aria-labelledby="learned-heading">
            <h2 id="learned-heading" className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
              What I Learned
            </h2>
            <PlaceholderBlock label="What I Learned" />
          </section>

        </AnimatedSection>

        {/* Week navigation */}
        <AnimatedSection delay={160}>
          <nav
            aria-label="Week navigation"
            className="mt-16 pt-10 border-t border-[var(--color-border-subtle)] grid grid-cols-2 gap-4"
          >
            {/* Previous week */}
            <div>
              {prev ? (
                <Link
                  href={`/journey/${prev.slug}`}
                  className="group flex flex-col gap-1 p-4 rounded-xl border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] transition-colors"
                >
                  <span className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-colors">
                    ← Previous Week
                  </span>
                  <span className="text-sm font-medium text-[var(--color-text-primary)] line-clamp-2">
                    Week {String(prev.week).padStart(2, '0')} — {prev.isPlaceholder ? 'Coming soon' : prev.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* Next week */}
            <div className="flex justify-end">
              {next ? (
                <Link
                  href={`/journey/${next.slug}`}
                  className="group flex flex-col gap-1 p-4 rounded-xl border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] transition-colors text-right w-full"
                >
                  <span className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-colors">
                    Next Week →
                  </span>
                  <span className="text-sm font-medium text-[var(--color-text-primary)] line-clamp-2">
                    Week {String(next.week).padStart(2, '0')} — {next.isPlaceholder ? 'Coming soon' : next.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </nav>
        </AnimatedSection>

        {/* Back to journey CTA */}
        <AnimatedSection delay={200} className="mt-8 text-center">
          <Link
            href="/journey"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            ← Back to all 14 weeks
          </Link>
        </AnimatedSection>

      </article>
    </main>
  )
}
