'use client'

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
    <div className="group flex flex-col h-full rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] overflow-hidden">
      {/* Main card body — non-clickable for now */}
      <div className="flex flex-col flex-1 p-5">
        {/* Week number */}
        <span className="text-xs font-mono font-semibold text-[var(--color-text-tertiary)] mb-3 tracking-widest">
          PROJECT {weekNum}
        </span>

        {/* Category badge */}
        <span className={`inline-block self-start text-xs font-medium px-2 py-0.5 rounded mb-3 ${colour}`}>
          {week.category}
        </span>

        {/* Title */}
        <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2 leading-snug">
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
      </div>

      {/* Live URL button — only shown when liveUrl exists */}
      {week.liveUrl && !week.isPlaceholder && (
        <div className="px-5 pb-4">
          <a
            href={week.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent)] border border-[var(--color-accent)] rounded px-3 py-1.5 hover:bg-[var(--color-accent)] hover:text-white transition-colors w-full justify-center"
            aria-label={`Open live project for Week ${weekNum}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Lihat Presentasi
          </a>
        </div>
      )}
    </div>
  )
}
