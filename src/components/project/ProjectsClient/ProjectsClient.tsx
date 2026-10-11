'use client'

import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import WeekCard from '@/components/journey/WeekCard/WeekCard'
import { revouWeeks } from '@/data/revou-weeks'
import { useLocale } from '@/context/LocaleContext'

export default function ProjectsClient() {
  const { t } = useLocale()

  const documented = revouWeeks.filter(w => !w.isPlaceholder).length

  return (
    <>
      {/* Page header */}
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4">
          {t.projects.heading}
        </h1>
        <p className="text-[var(--color-text-secondary)] max-w-xl leading-relaxed mb-3">
          {t.projects.subheading}
        </p>
        <p className="text-xs text-[var(--color-text-tertiary)]">
          {documented} / {revouWeeks.length} {t.locale.current === 'ID' ? 'project didokumentasikan' : 'projects documented'}
        </p>
      </AnimatedSection>

      {/* 14-week grid — flat, 3 cols desktop / 2 tablet / 1 mobile */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {revouWeeks.map((week, i) => (
          <AnimatedSection key={week.slug} delay={60 + i * 40}>
            <WeekCard week={week} />
          </AnimatedSection>
        ))}
      </div>

      {/* In-progress note */}
      <AnimatedSection delay={200} className="mt-12">
        <div className="p-5 rounded-xl border border-dashed border-[var(--color-border-default)] bg-[var(--color-bg-surface)]">
          <p className="text-sm text-[var(--color-text-secondary)]">
            <span className="font-semibold text-[var(--color-text-primary)]">
              {t.locale.current === 'ID' ? 'Konten sedang dikerjakan.' : 'Content in progress.'}
            </span>{' '}
            {t.locale.current === 'ID'
              ? 'Detail project akan ditambahkan setiap minggu. Card "Coming soon" akan diperbarui dengan studi kasus lengkap.'
              : 'Project details will be added week by week. Cards marked "Coming soon" will be updated with full case studies, tools, and outcomes.'}
          </p>
        </div>
      </AnimatedSection>
    </>
  )
}
