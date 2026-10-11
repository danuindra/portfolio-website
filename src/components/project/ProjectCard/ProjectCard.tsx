'use client'

import Link from 'next/link'
import type { ProjectCardData } from '@/types'
import { useLocale } from '@/context/LocaleContext'

interface ProjectCardProps {
  project: ProjectCardData
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, tagline, category, tools } = project
  const { t } = useLocale()

  const ariaLabel = t.projectCard.ariaLabel.replace('{title}', title)

  return (
    <Link
      href={`/projects/${slug}`}
      aria-label={ariaLabel}
      className="group flex flex-col h-full p-6 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] hover:border-[var(--color-border-default)] hover:shadow-md transition-all duration-[250ms] hover:-translate-y-1"
    >
      {/* Category badge */}
      <span className="inline-block self-start text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2 py-0.5 rounded mb-4 capitalize">
        {category}
      </span>

      {/* Title */}
      <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors leading-snug">
        {title}
      </h3>

      {/* Tagline */}
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 flex-1">
        {tagline}
      </p>

      {/* Tools */}
      <div className="flex flex-wrap gap-1.5">
        {tools.slice(0, 4).map((tool) => (
          <span
            key={tool}
            className="text-xs font-mono text-[var(--color-text-tertiary)] bg-[var(--color-bg-elevated)] px-2 py-0.5 rounded border border-[var(--color-border-subtle)]"
          >
            {tool}
          </span>
        ))}
        {tools.length > 4 && (
          <span className="text-xs text-[var(--color-text-tertiary)] px-1 py-0.5">
            +{tools.length - 4}
          </span>
        )}
      </div>

      {/* View link indicator */}
      <p className="mt-4 text-xs font-medium text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
        {t.projectCard.viewCaseStudy}
      </p>
    </Link>
  )
}
