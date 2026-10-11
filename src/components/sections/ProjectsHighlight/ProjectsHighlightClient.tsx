'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import ProjectCard from '@/components/project/ProjectCard/ProjectCard'
import { useLocale } from '@/context/LocaleContext'
import type { ProjectCardData } from '@/types'

interface Props {
  projects: ProjectCardData[]
}

export default function ProjectsHighlightClient({ projects }: Props) {
  const { t } = useLocale()

  return (
    <section
      aria-labelledby="projects-heading"
      className="py-24 border-t border-[var(--color-border-subtle)]"
    >
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-widest text-[var(--color-accent)] uppercase mb-4">
            {t.projectsHighlight.eyebrow}
          </p>
          <h2
            id="projects-heading"
            className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-12"
          >
            {t.projectsHighlight.heading}
          </h2>
        </AnimatedSection>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {projects.map((project, i) => (
              <AnimatedSection key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection>
            <p className="text-[var(--color-text-secondary)] mb-10">
              {t.projectsHighlight.empty}
            </p>
          </AnimatedSection>
        )}

        <AnimatedSection delay={projects.length * 80}>
          <Link
            href="/projects"
            className="text-sm font-medium text-[var(--color-accent)] hover:underline underline-offset-4"
          >
            {t.projectsHighlight.viewAll}
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
