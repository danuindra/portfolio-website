import { Suspense } from 'react'
import type { Metadata } from 'next'
import { getAllProjects } from '@/lib/mdx'
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import ProjectsClient from '@/components/project/ProjectsClient/ProjectsClient'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Case studies and real-world projects in digital marketing, analytics, and web development.',
}

export default async function ProjectsPage() {
  const allProjects = await getAllProjects()

  return (
    <main id="main-content" className="pt-16">
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10 py-16">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <ProjectsClient projects={allProjects} />
        </Suspense>
      </div>
    </main>
  )
}
