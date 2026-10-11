'use client'

import Link from 'next/link'
import type { RevoUWeek } from '@/types'

interface WeekCardProps {
  week: RevoUWeek
}

// Category colour map — accent-tinted backgrounds per topic
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

export default function WeekCard({ week }: WeekCardProps) {
  const weekNum = String(week.week).padStart(2, '0')
  const colour = categoryColour[week.category] ?? categoryColour['Placeholder']

  return (
    <Link
      href={`/projects/week-${weekNum}`}
      className="group flex flex-col h-full p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] hover:border-[var(--color-border-default)] hover:shadow-md transition-all duration-[250ms] hover:-translate-y-1"
      aria-label={`View Week ${weekNum}: ${week.title}`}
    >
      {/* Week number */}
      <span className="text-xs font-mono font-semibold text-[var(--color-text-tertiary)] mb-3 tracking-widest">
        WEEK {weekNum}
      </span>

      {/* Category badge */}
      <span className={`inline-block self-start text-xs font-medium px-2 py-0.5 rounded mb-3 ${colour}`}>
        {week.category}
      </span>

      {/* Title */}
      <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
        {week.isPlaceholder ? (
          <span className="italic text-[var(--color-text-tertiary)]">Coming soon…</span>
        ) : (
          week.title
        )}
      </h3>

      {/* Description */}
      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-3 flex-1">
        {week.shortDescription}
      </p>

      {/* Tools */}
      {week.tools.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {week.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="text-xs font-mono text-[var(--color-text-tertiary)] bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] px-2 py-0.5 rounded"
            >
              {tool}
            </span>
          ))}
          {week.tools.length > 3 && (
            <span className="text-xs text-[var(--color-text-tertiary)] px-1 py-0.5">
              +{week.tools.length - 3}
            </span>
          )}
        </div>
      )}

      {/* View link */}
      <p className="mt-3 text-xs font-medium text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
        View Project →
      </p>
    </Link>
  )
}
