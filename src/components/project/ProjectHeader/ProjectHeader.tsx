'use client'

import Link from 'next/link'
import type { ProjectFrontmatter } from '@/types'
import { useLocale } from '@/context/LocaleContext'

interface ProjectHeaderProps {
  project: ProjectFrontmatter
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  const { title, category, date, tools, status, tagline } = project
  const { t } = useLocale()

  const formattedDate = new Date(date + '-01').toLocaleDateString(t.projectHeader.dateLocale, {
    month: 'long',
    year: 'numeric',
  })

  return (
    <header className="mb-12">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors mb-8"
      >
        {t.projectHeader.backLink}
      </Link>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2.5 py-1 rounded-full capitalize">
          {category}
        </span>
        {status === 'in-progress' && (
          <span className="text-xs font-medium text-[var(--color-warning)] bg-amber-50 px-2.5 py-1 rounded-full">
            {t.projectHeader.inProgress}
          </span>
        )}
        <time
          dateTime={date}
          className="text-xs text-[var(--color-text-tertiary)]"
        >
          {formattedDate}
        </time>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4 leading-tight">
        {title}
      </h1>

      {/* Tagline */}
      <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-2xl">
        {tagline}
      </p>

      {/* Tools */}
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-xs font-mono text-[var(--color-text-secondary)] bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] px-2.5 py-1 rounded"
          >
            {tool}
          </span>
        ))}
      </div>
    </header>
  )
}
