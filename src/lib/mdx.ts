import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { ProjectFrontmatter, ProjectCardData } from '@/types'

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects')

// Get all project slugs from content/projects/ folders
function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return []
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((name) => {
      const fullPath = path.join(PROJECTS_DIR, name)
      return fs.statSync(fullPath).isDirectory()
    })
}

// Parse frontmatter from a single project MDX file
// Falls back to index.mdx if locale-specific file doesn't exist
async function getProjectFrontmatter(slug: string, locale = 'en'): Promise<ProjectFrontmatter> {
  const localePath = path.join(PROJECTS_DIR, slug, `index.${locale}.mdx`)
  const defaultPath = path.join(PROJECTS_DIR, slug, 'index.mdx')

  // Use locale file if it exists, otherwise fall back to default (English)
  const filePath = locale !== 'en' && fs.existsSync(localePath) ? localePath : defaultPath

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(raw)

  return {
    slug,
    title: data.title,
    tagline: data.tagline,
    category: data.category,
    status: data.status ?? 'completed',
    featured: data.featured ?? false,
    date: data.date,
    duration: data.duration,
    tools: data.tools ?? [],
    tags: data.tags,
    thumbnail: data.thumbnail ?? `/images/projects/${slug}/thumbnail.jpg`,
    coverImage: data.coverImage,
    metrics: data.metrics,
    liveUrl: data.liveUrl,
    repoUrl: data.repoUrl,
  }
}

// Get all projects — uses Promise.allSettled so one broken MDX doesn't crash the page
export async function getAllProjects(locale = 'en'): Promise<ProjectFrontmatter[]> {
  const slugs = getProjectSlugs()
  if (slugs.length === 0) return []

  const results = await Promise.allSettled(
    slugs.map((slug) => getProjectFrontmatter(slug, locale))
  )

  results
    .filter((r): r is PromiseRejectedResult => r.status === 'rejected')
    .forEach((r) => console.error('[mdx] Failed to parse project:', r.reason))

  return results
    .filter((r): r is PromiseFulfilledResult<ProjectFrontmatter> => r.status === 'fulfilled')
    .map((r) => r.value)
    .sort((a, b) => b.date.localeCompare(a.date))
}

// Get featured projects for Home page highlight (max 3)
export async function getFeaturedProjects(locale = 'en'): Promise<ProjectCardData[]> {
  const all = await getAllProjects(locale)
  return all
    .filter((p) => p.featured)
    .slice(0, 3)
    .map(({ slug, title, tagline, category, tools, thumbnail, featured, date }) => ({
      slug, title, tagline, category, tools, thumbnail, featured, date,
    }))
}

// Get a single project with compiled MDX content — locale-aware
export async function getProjectBySlug(slug: string, locale = 'en') {
  const localePath = path.join(PROJECTS_DIR, slug, `index.${locale}.mdx`)
  const defaultPath = path.join(PROJECTS_DIR, slug, 'index.mdx')

  const filePath = locale !== 'en' && fs.existsSync(localePath) ? localePath : defaultPath

  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  const frontmatter = await getProjectFrontmatter(slug, locale)

  return { frontmatter, rawContent: content, data }
}

// Get all slugs for generateStaticParams
export function getAllProjectSlugs(): { slug: string }[] {
  return getProjectSlugs().map((slug) => ({ slug }))
}
