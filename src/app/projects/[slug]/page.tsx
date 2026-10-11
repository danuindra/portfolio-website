import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/mdx'
import { revouWeeks, getWeekBySlug, getAdjacentWeeks } from '@/data/revou-weeks'
import ProjectHeader from '@/components/project/ProjectHeader/ProjectHeader'
import ProjectMetric from '@/components/project/ProjectMetric/ProjectMetric'
import ProjectDetailCTA from '@/components/project/ProjectDetailCTA/ProjectDetailCTA'
import WeekDetailClient from '@/components/journey/WeekDetailClient/WeekDetailClient'
import type { Locale } from '@/i18n'

interface Props {
  params: Promise<{ slug: string }>
}

// Read locale from cookie for locale-aware MDX rendering
async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const locale = cookieStore.get('portfolio-locale')?.value
  return locale === 'id' ? 'id' : 'en'
}

// Collect all slugs: MDX project slugs + 14 week slugs
export async function generateStaticParams() {
  const mdxSlugs = getAllProjectSlugs()
  const weekSlugs = revouWeeks.map((w) => ({ slug: w.slug }))
  return [...mdxSlugs, ...weekSlugs]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  // Check if it's a week slug
  if (slug.startsWith('week-')) {
    const week = getWeekBySlug(slug)
    if (!week) return { title: 'Project Not Found' }
    return {
      title: week.isPlaceholder
        ? `Week ${String(week.week).padStart(2, '0')} — RevoU`
        : week.title,
      description: week.shortDescription,
    }
  }

  // Otherwise treat as MDX project
  const project = await getProjectBySlug(slug, 'en')
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.tagline,
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.tagline,
    },
  }
}

// Force dynamic so cookies() works on every request
export const dynamic = 'force-dynamic'

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params

  // ── Week detail (RevoU) ──────────────────────────────────────────────────────
  if (slug.startsWith('week-')) {
    const week = getWeekBySlug(slug)
    if (!week) notFound()
    const { prev, next } = getAdjacentWeeks(slug)
    return <WeekDetailClient week={week} prev={prev} next={next} />
  }

  // ── MDX project detail ───────────────────────────────────────────────────────
  const locale = await getLocale()
  const project = await getProjectBySlug(slug, locale)
  if (!project) notFound()

  const { frontmatter, rawContent } = project

  return (
    <main id="main-content" className="pt-16">
      <article className="w-full mx-auto max-w-[800px] px-4 md:px-8 py-16">

        {/* Header: back link, meta, title, tagline, tools */}
        <ProjectHeader project={frontmatter} />

        {/* Metrics — shown if available */}
        {frontmatter.metrics && frontmatter.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 not-prose">
            {frontmatter.metrics.map((metric, i) => (
              <ProjectMetric key={i} metric={metric} />
            ))}
          </div>
        )}

        {/* MDX body */}
        <div className="prose prose-neutral max-w-none
          prose-headings:font-semibold prose-headings:text-[var(--color-text-primary)]
          prose-p:text-[var(--color-text-secondary)] prose-p:leading-relaxed
          prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-[var(--color-text-primary)]
          prose-code:text-[var(--color-accent)] prose-code:bg-[var(--color-accent-subtle)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-li:text-[var(--color-text-secondary)]
          prose-hr:border-[var(--color-border-subtle)]">
          <MDXRemote source={rawContent} />
        </div>

        {/* Bottom CTA */}
        <ProjectDetailCTA />

      </article>
    </main>
  )
}
