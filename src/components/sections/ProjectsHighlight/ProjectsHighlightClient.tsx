'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import ProjectCard from '@/components/project/ProjectCard/ProjectCard'
import WeekCard from '@/components/journey/WeekCard/WeekCard'
import { revouWeeks } from '@/data/revou-weeks'
import { useLocale } from '@/context/LocaleContext'
import type { ProjectCardData } from '@/types'

interface Props {
  projects: ProjectCardData[]
}

// Show up to 3 featured MDX projects; if none, fall back to first 3 week cards
const PREVIEW_COUNT = 3

export default function ProjectsHighlightClient({ projects }: Props) {
  const { t } = useLocale()

  const hasMdxProjects = projects.length > 0
  const previewWeeks = revouWeeks.slice(0, PREVIEW_COUNT)

  return (
    <section
      aria-labelledby="projects-highlight-heading"
      className="py-24 border-t border-[var(--color-border-subtle)]"
    >
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10">

        {/* Section header */}
        <AnimatedSection className="mb-12">
          <p className="text-xs font-medium tracking-widest text-[var(--color-accent)] uppercase mb-4">
            {t.projectsHighlight.eyebrow}
          </p>
          <h2
            id="projects-highlight-heading"
            className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-3"
          >
            {t.projectsHighlight.heading}
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] max-w-lg">
            {hasMdxProjects
              ? 'Featured case studies from my digital marketing work.'
              : `14-week RevoU Digital Marketing program — real projects, week by week.`}
          </p>
        </AnimatedSection>

        {/* Cards */}
        {hasMdxProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {projects.map((project, i) => (
              <AnimatedSection key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {previewWeeks.map((week, i) => (
              <AnimatedSection key={week.slug} delay={i * 80}>
                <WeekCard week={week} />
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* View all link */}
        <AnimatedSection delay={hasMdxProjects ? projects.length * 80 : PREVIEW_COUNT * 80}>
          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="text-sm font-medium text-[var(--color-accent)] hover:underline underline-offset-4"
            >
              {t.projectsHighlight.viewAll}
            </Link>
            <span className="text-xs text-[var(--color-text-tertiary)]">
              ({revouWeeks.length} projects total)
            </span>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
