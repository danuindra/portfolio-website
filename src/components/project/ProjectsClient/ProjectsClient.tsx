'use client'

import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import WeekCard from '@/components/journey/WeekCard/WeekCard'
import { revouWeeks } from '@/data/revou-weeks'
import { useLocale } from '@/context/LocaleContext'

export default function ProjectsClient() {
  const { t } = useLocale()
  const isID = t.locale.current === 'ID'

  const documented = revouWeeks.filter(w => !w.isPlaceholder).length

  return (
    <>
      {/* Page header */}
      <AnimatedSection>
        <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">
          {isID ? 'Program RevoU · Digital Marketing' : 'RevoU Program · Digital Marketing'}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4">
          {isID
            ? '12 Studi Kasus & Eksperimen Digital Marketing'
            : '12 Digital Marketing Case Studies & Experiments'}
        </h1>
        <p className="text-[var(--color-text-secondary)] max-w-2xl leading-relaxed mb-3">
          {isID
            ? 'Ini proyek-proyek nyata yang saya kerjain selama program RevoU — mulai dari bikin landing page, riset keyword, ngatur Meta Ads & Google Ads, sampai ngejalanin kampanye live dengan budget beneran. Bukan simulasi, semua ada hasilnya.'
            : 'These are real projects I built during the RevoU program — from landing pages and keyword research to running live Meta Ads and Google Ads campaigns with real budgets. All of them shipped, all of them have results.'}
        </p>
        <p className="text-xs text-[var(--color-text-tertiary)]">
          {documented} / {revouWeeks.length}{' '}
          {isID ? 'studi kasus sudah terdokumentasi' : 'case studies documented'}
        </p>
      </AnimatedSection>

      {/* 14-week grid — 3 cols desktop / 2 tablet / 1 mobile */}
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
              {isID ? 'Konten sedang dikerjakan.' : 'Content in progress.'}
            </span>{' '}
            {isID
              ? 'Studi kasus akan ditambahkan setiap minggu seiring program berjalan. Card "Coming soon" akan diperbarui dengan narasi STAR lengkap, tools yang digunakan, dan hasil nyata.'
              : 'Case studies will be added week by week as the program progresses. "Coming soon" cards will be updated with full STAR narratives, tools used, and real outcomes.'}
          </p>
        </div>
      </AnimatedSection>
    </>
  )
}
