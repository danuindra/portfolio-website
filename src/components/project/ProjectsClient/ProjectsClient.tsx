'use client'

import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import WeekCard from '@/components/journey/WeekCard/WeekCard'
import ProjectCard from '@/components/project/ProjectCard/ProjectCard'
import { revouWeeks } from '@/data/revou-weeks'
import { useLocale } from '@/context/LocaleContext'
import type { ProjectFrontmatter } from '@/types'

interface ProjectsClientProps {
  // MDX case-study projects (e.g. ga4-dashboard)
  mdxProjects: ProjectFrontmatter[]
}

export default function ProjectsClient({ mdxProjects }: ProjectsClientProps) {
  const { t } = useLocale()

  return (
    <>
      {/* Page header */}
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4">
          {t.projects.heading}
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-12 max-w-xl leading-relaxed">
          {t.projects.subheading}
        </p>
      </AnimatedSection>

      {/* Featured / MDX projects — shown only when they exist */}
      {mdxProjects.length > 0 && (
        <AnimatedSection delay={60} className="mb-16">
          <h2 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-widest mb-6">
            Featured Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mdxProjects.map((project, i) => (
              <AnimatedSection key={project.slug} delay={i * 60}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      )}

      {/* Divider + RevoU section header */}
      <AnimatedSection delay={80}>
        <div className={mdxProjects.length > 0 ? 'border-t border-[var(--color-border-subtle)] pt-12 mb-8' : 'mb-8'}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <span className="inline-block text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2.5 py-1 rounded-full mb-3">
                RevoU Digital Marketing Program
              </span>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
                14-Week Learning Journey
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1 max-w-lg">
                Real projects completed each week — from fundamentals to strategy, analytics, and execution.
                Click any card to see the full case study.
              </p>
            </div>
            <p className="text-xs text-[var(--color-text-tertiary)] shrink-0 sm:text-right">
              {revouWeeks.filter(w => !w.isPlaceholder).length} / {revouWeeks.length} weeks documented
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* 14-week grid: 3 cols desktop, 2 tablet, 1 mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {revouWeeks.map((week, i) => (
          <AnimatedSection key={week.slug} delay={100 + i * 40}>
            <WeekCard week={week} />
          </AnimatedSection>
        ))}
      </div>

      {/* In-progress note */}
      <AnimatedSection delay={200} className="mt-12">
        <div className="p-5 rounded-xl border border-dashed border-[var(--color-border-default)] bg-[var(--color-bg-surface)]">
          <p className="text-sm text-[var(--color-text-secondary)]">
            <span className="font-semibold text-[var(--color-text-primary)]">Content in progress.</span>{' '}
            Project details will be added week by week as the program progresses.
            Cards marked "Coming soon" will be updated with full case studies, tools, and outcomes.
          </p>
        </div>
      </AnimatedSection>
    </>
  )
}
