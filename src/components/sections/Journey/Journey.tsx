'use client'

import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import { journeyEntries } from '@/data/journey'
import { useLocale } from '@/context/LocaleContext'

export default function Journey() {
  const { t } = useLocale()

  // Merge static dates/isCurrent from data with translated text from i18n
  const entries = journeyEntries.map((entry, i) => ({
    ...entry,
    title: t.journey.entries[i]?.title ?? entry.title,
    organization: t.journey.entries[i]?.organization ?? entry.organization,
    description: t.journey.entries[i]?.description ?? entry.description,
  }))

  return (
    <section
      aria-labelledby="journey-heading"
      className="py-16"
    >
      <AnimatedSection>
        <h2
          id="journey-heading"
          className="text-2xl font-semibold text-[var(--color-text-primary)] mb-12"
        >
          {t.journey.heading}
        </h2>
      </AnimatedSection>

      <ol className="relative border-l border-[var(--color-border-subtle)] ml-3 space-y-0">
        {entries.map((entry, i) => (
          <AnimatedSection key={`${entry.date}-${entry.title}`} delay={i * 80}>
            <li className="mb-10 ml-6">
              {/* Timeline dot */}
              <span
                className={`absolute -left-[7px] flex items-center justify-center w-3.5 h-3.5 rounded-full border-2 ${
                  entry.isCurrent
                    ? 'bg-[var(--color-accent)] border-[var(--color-accent)]'
                    : 'bg-[var(--color-bg-base)] border-[var(--color-border-default)]'
                }`}
                aria-hidden="true"
              />

              {/* Date */}
              <time
                dateTime={entry.date}
                className="block text-xs font-medium text-[var(--color-text-tertiary)] mb-1"
              >
                {entry.date}
                {entry.isCurrent && (
                  <span className="ml-2 text-[var(--color-accent)]">{t.journey.current}</span>
                )}
              </time>

              {/* Title + Organization */}
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                {entry.title}
                {entry.organization && (
                  <span className="font-normal text-[var(--color-text-secondary)]">
                    {' '}— {entry.organization}
                  </span>
                )}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {entry.description}
              </p>
            </li>
          </AnimatedSection>
        ))}

        {/* Ongoing indicator */}
        <li className="ml-6">
          <span
            className="absolute -left-[7px] flex items-center justify-center w-3.5 h-3.5 rounded-full border-2 border-dashed border-[var(--color-border-default)] bg-[var(--color-bg-base)]"
            aria-hidden="true"
          />
          <p className="text-xs text-[var(--color-text-tertiary)] italic">
            {t.journey.ongoing}
          </p>
        </li>
      </ol>
    </section>
  )
}
