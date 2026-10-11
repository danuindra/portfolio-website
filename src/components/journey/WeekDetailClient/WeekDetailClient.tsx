'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import type { RevoUWeek } from '@/types'

interface WeekDetailClientProps {
  week: RevoUWeek
  prev: RevoUWeek | null
  next: RevoUWeek | null
}

const categoryColour: Record<string, string> = {
  'Digital Marketing Fundamentals': 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/40',
  'SEO': 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-950/40',
  'SEM': 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-950/40',
  'Social Media Marketing': 'text-pink-600 bg-pink-50 dark:text-pink-400 dark:bg-pink-950/40',
  'Content Marketing': 'text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-950/40',
  'Email Marketing': 'text-yellow-700 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-950/40',
  'Analytics': 'text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-950/40',
  'Campaign Strategy': 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-950/40',
  'Data Visualization': 'text-teal-600 bg-teal-50 dark:text-teal-400 dark:bg-teal-950/40',
  'Marketing Automation': 'text-cyan-600 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-950/40',
  'Final Project': 'text-[var(--color-accent)] bg-[var(--color-accent-subtle)]',
  'Placeholder': 'text-[var(--color-text-tertiary)] bg-[var(--color-bg-elevated)]',
}

function SectionBlock({
  id,
  label,
  tag,
  children,
}: {
  id: string
  label: string
  tag: string
  children?: React.ReactNode
}) {
  return (
    <section aria-labelledby={id} className="scroll-mt-20">
      <div className="flex flex-wrap items-baseline gap-3 mb-4">
        <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-widest">
          {tag}
        </span>
        <h2
          id={id}
          className="text-xl font-semibold text-[var(--color-text-primary)]"
        >
          {label}
        </h2>
      </div>
      {children ?? (
        <div className="rounded-lg border border-dashed border-[var(--color-border-default)] bg-[var(--color-bg-surface)] p-5">
          <p className="text-sm text-[var(--color-text-tertiary)] italic">
            Konten segera hadir, akan diisi setelah minggu ini selesai.
          </p>
        </div>
      )}
    </section>
  )
}

export default function WeekDetailClient({ week, prev, next }: WeekDetailClientProps) {
  const weekNum = String(week.week).padStart(2, '0')
  const colour = categoryColour[week.category] ?? categoryColour['Placeholder']

  // STAR section definitions
  const starSections = [
    { id: 'situation-heading',  tag: 'S — Situation',  label: 'Overview & Business Context' },
    { id: 'target-heading',     tag: 'T — Target',     label: 'Objective & Target Metrics' },
    { id: 'action-heading',     tag: 'A — Action',     label: 'My Role & Execution Strategy' },
    { id: 'tools-heading',      tag: 'Tools',          label: 'Tools & Workflow' },
    { id: 'result-heading',     tag: 'R — Result',     label: 'Results & Business Impact' },
    { id: 'learnings-heading',  tag: 'Key Learnings',  label: 'What I Learned' },
  ]

  return (
    <main id="main-content" className="pt-16">
      <article className="w-full mx-auto max-w-[800px] px-4 md:px-8 py-16">

        {/* Back link */}
        <AnimatedSection>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors mb-8"
          >
            ← Semua Proyek
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection delay={40}>
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono font-semibold text-[var(--color-text-tertiary)] tracking-widest">
                PROJECT {weekNum}
              </span>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colour}`}>
                {week.category}
              </span>
              <span className="text-xs text-[var(--color-text-tertiary)] bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] px-2.5 py-1 rounded-full">
                RevoU Digital Marketing
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4 leading-tight">
              {week.isPlaceholder
                ? <span className="text-[var(--color-text-secondary)]">Project {weekNum} — Coming Soon</span>
                : week.title}
            </h1>

            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-2xl">
              {week.shortDescription}
            </p>

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

        {/* In-progress banner */}
        {week.isPlaceholder && (
          <AnimatedSection delay={80}>
            <div className="mb-12 p-5 rounded-xl border border-[var(--color-warning)] bg-amber-50 dark:bg-amber-950/20">
              <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-1">
                Studi kasus sedang ditulis
              </p>
              <p className="text-sm text-amber-600 dark:text-amber-500">
                Project minggu ini belum selesai didokumentasikan. Konten lengkap akan tersedia setelah minggu ini berakhir — termasuk narasi STAR, tools, dan hasil nyata.
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* STAR sections */}
        <AnimatedSection delay={100} className="space-y-12">

          {starSections.map((s) => {
            // Tools section gets special rendering if tools exist
            if (s.id === 'tools-heading' && week.tools.length > 0) {
              return (
                <SectionBlock key={s.id} id={s.id} tag={s.tag} label={s.label}>
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
                </SectionBlock>
              )
            }
            return <SectionBlock key={s.id} id={s.id} tag={s.tag} label={s.label} />
          })}

          {/* Gallery */}
          <section aria-labelledby="gallery-heading" className="scroll-mt-20">
            <div className="flex flex-wrap items-baseline gap-3 mb-4">
              <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-widest">
                Gallery
              </span>
              <h2 id="gallery-heading" className="text-xl font-semibold text-[var(--color-text-primary)]">
                Project Output & Visual Assets
              </h2>
            </div>
            <div className="rounded-xl border border-dashed border-[var(--color-border-default)] bg-[var(--color-bg-surface)] aspect-video flex items-center justify-center">
              <p className="text-sm text-[var(--color-text-tertiary)] italic">
                Screenshot & output visual — segera hadir.
              </p>
            </div>
          </section>

        </AnimatedSection>

        {/* Prev / Next navigation */}
        <AnimatedSection delay={160}>
          <nav
            aria-label="Project navigation"
            className="mt-16 pt-10 border-t border-[var(--color-border-subtle)] grid grid-cols-2 gap-4"
          >
            <div>
              {prev ? (
                <Link
                  href={`/projects/week-${String(prev.week).padStart(2, '0')}`}
                  className="group flex flex-col gap-1 p-4 rounded-xl border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] transition-colors"
                >
                  <span className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-colors">
                    ← Sebelumnya
                  </span>
                  <span className="text-sm font-medium text-[var(--color-text-primary)] line-clamp-2">
                    Project {String(prev.week).padStart(2, '0')} — {prev.isPlaceholder ? 'Coming soon' : prev.title}
                  </span>
                </Link>
              ) : <div />}
            </div>

            <div className="flex justify-end">
              {next ? (
                <Link
                  href={`/projects/week-${String(next.week).padStart(2, '0')}`}
                  className="group flex flex-col gap-1 p-4 rounded-xl border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] transition-colors text-right w-full"
                >
                  <span className="text-xs text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-colors">
                    Berikutnya →
                  </span>
                  <span className="text-sm font-medium text-[var(--color-text-primary)] line-clamp-2">
                    Project {String(next.week).padStart(2, '0')} — {next.isPlaceholder ? 'Coming soon' : next.title}
                  </span>
                </Link>
              ) : <div />}
            </div>
          </nav>
        </AnimatedSection>

        {/* Back link bottom */}
        <AnimatedSection delay={200} className="mt-8 text-center">
          <Link
            href="/projects"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            ← Kembali ke semua proyek
          </Link>
        </AnimatedSection>

      </article>
    </main>
  )
}
