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
          14 proyek nyata dari program RevoU Digital Marketing — satu project setiap minggu,
          dari fundamental hingga strategi, analitik, dan eksekusi.
        </p>
        <p className="text-xs text-[var(--color-text-tertiary)]">
          {documented} / {revouWeeks.length} project sudah didokumentasikan
        </p>
      </AnimatedSection>

      {/* 14-week grid — flat, no sub-sections */}
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
            <span className="font-semibold text-[var(--color-text-primary)]">Konten sedang dikerjakan.</span>{' '}
            Detail project akan ditambahkan setiap minggu seiring program berjalan.
            Card yang bertanda "Coming soon" akan diperbarui dengan studi kasus lengkap.
          </p>
        </div>
      </AnimatedSection>
    </>
  )
}
