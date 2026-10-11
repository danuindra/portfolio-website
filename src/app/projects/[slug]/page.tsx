import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/mdx'
import ProjectHeader from '@/components/project/ProjectHeader/ProjectHeader'
import ProjectMetric from '@/components/project/ProjectMetric/ProjectMetric'
import ProjectDetailCTA from '@/components/project/ProjectDetailCTA/ProjectDetailCTA'
import type { Locale } from '@/i18n'

interface Props {
  params: Promise<{ slug: string }>
}

// Read locale directly from the cookie — no proxy/header needed
async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const locale = cookieStore.get('portfolio-locale')?.value
  return locale === 'id' ? 'id' : 'en'
}

export async function generateStaticParams() {
  return getAllProjectSlugs()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  // Metadata always uses default locale (en) — locale-specific titles not needed for SEO
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

// Force dynamic rendering so headers() is available on every request
export const dynamic = 'force-dynamic'

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
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

        {/* MDX body — rendered with @tailwindcss/typography */}
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

        {/* Bottom CTA — client component for translations */}
        <ProjectDetailCTA />

      </article>
    </main>
  )
}
