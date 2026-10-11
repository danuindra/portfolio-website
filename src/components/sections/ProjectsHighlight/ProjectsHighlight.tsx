// Server component — fetches featured projects then hands off to client wrapper
import { getFeaturedProjects } from '@/lib/mdx'
import ProjectsHighlightClient from './ProjectsHighlightClient'

export default async function ProjectsHighlight() {
  const projects = await getFeaturedProjects()
  return <ProjectsHighlightClient projects={projects} />
}
