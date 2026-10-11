'use client'

import { useSearchParams } from 'next/navigation'
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import ProjectCard from '@/components/project/ProjectCard/ProjectCard'
import ProjectFilter from '@/components/project/ProjectFilter/ProjectFilter'
import { useLocale } from '@/context/LocaleContext'
import type { ProjectFrontmatter, ProjectCategory } from '@/types'

interface ProjectsClientProps {
  projects: ProjectFrontmatter[]
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const { t } = useLocale()
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  const filtered =
    !category || category === 'all'
      ? projects
      : projects.filter((p) => p.category === (category as ProjectCategory))

  return (
    <>
      {/* Page header */}
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-4">
          {t.projects.heading}
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-10 max-w-xl">
          {t.projects.subheading}
        </p>
      </AnimatedSection>

      {/* Filter bar */}
      <AnimatedSection delay={80} className="mb-10">
        <ProjectFilter />
      </AnimatedSection>

      {/* Project grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 60}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <AnimatedSection delay={160}>
          <p className="text-[var(--color-text-secondary)] py-16 text-center">
            {t.projects.empty}{' '}
            <span className="text-[var(--color-text-tertiary)]">
              {t.projects.emptyHint}
            </span>
          </p>
        </AnimatedSection>
      )}
    </>
  )
}
