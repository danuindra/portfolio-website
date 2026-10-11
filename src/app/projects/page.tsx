import { Suspense } from 'react'
import type { Metadata } from 'next'
import ProjectsClient from '@/components/project/ProjectsClient/ProjectsClient'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    '14 real-world digital marketing projects from the RevoU program — analytics, strategy, content, and more.',
}

export default function ProjectsPage() {
  return (
    <main id="main-content" className="pt-16">
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10 py-16">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <ProjectsClient />
        </Suspense>
      </div>
    </main>
  )
}
