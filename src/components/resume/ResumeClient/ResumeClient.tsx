'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import type { siteConfig as SiteConfigType } from '@/data/site'

interface ResumeClientProps {
  siteConfig: typeof SiteConfigType
}

// Resume section data — sourced from real identity only
// Fill in actual dates, descriptions once CV is finalised

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-widest mb-6 pb-3 border-b border-[var(--color-border-subtle)]">
        {title}
      </h2>
      {children}
    </section>
  )
}

function ResumeItem({
  title,
  subtitle,
  period,
  description,
  isPlaceholder,
}: {
  title: string
  subtitle?: string
  period?: string
  description?: string
  isPlaceholder?: boolean
}) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{title}</h3>
        {period && (
          <span className="text-xs text-[var(--color-text-tertiary)] font-mono shrink-0">
            {period}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="text-sm text-[var(--color-accent)] mb-2">{subtitle}</p>
      )}
      {description && (
        <p className={`text-sm leading-relaxed ${isPlaceholder ? 'text-[var(--color-text-tertiary)] italic' : 'text-[var(--color-text-secondary)]'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default function ResumeClient({ siteConfig }: ResumeClientProps) {
  return (
    <main id="main-content" className="pt-16">
      <div className="w-full mx-auto max-w-[800px] px-4 md:px-8 py-16">

        {/* Page header + download */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
                Resume
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-3">
                {siteConfig.name}
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)]">{siteConfig.title}</p>
              <p className="text-sm text-[var(--color-text-tertiary)] mt-1">{siteConfig.location}</p>
            </div>

            {/* Download button — disabled until CV file is uploaded to /public/resume/cv.pdf */}
            <div className="flex flex-col gap-3 sm:items-end shrink-0">
              <span
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg border border-[var(--color-border-default)] text-[var(--color-text-tertiary)] text-sm font-medium cursor-not-allowed select-none"
                aria-label="CV not yet available for download"
                title="CV file coming soon"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1v9M4.5 7l3.5 3.5L11.5 7M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download CV
              </span>
              <p className="text-xs text-[var(--color-text-tertiary)]">
                PDF coming soon — upload to <code className="font-mono">/public/resume/cv.pdf</code>
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Identity links */}
        <AnimatedSection delay={60}>
          <div className="flex flex-wrap gap-4 mb-16 pb-12 border-b border-[var(--color-border-subtle)]">
            <a
              href={`https://${siteConfig.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5"
            >
              <span aria-hidden="true">→</span> {siteConfig.linkedin}
            </a>
            <a
              href={`https://${siteConfig.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5"
            >
              <span aria-hidden="true">→</span> {siteConfig.github}
            </a>
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5"
              >
                <span aria-hidden="true">→</span> {siteConfig.email}
              </a>
            )}
          </div>
        </AnimatedSection>

        {/* Resume body */}
        <AnimatedSection delay={100}>

          {/* Education */}
          <Section title="Education">
            <ResumeItem
              title="RevoU Digital Marketing Program"
              subtitle="RevoU"
              period="2026"
              description="14-week intensive program covering digital marketing fundamentals, SEO, SEM, social media, analytics, and campaign strategy. Completed 14 real-world projects."
            />
            <ResumeItem
              title="Formal Education"
              subtitle="Add your degree, institution, and field of study here"
              period="Add year"
              description="Fill in your education details from your CV."
              isPlaceholder
            />
          </Section>

          {/* Experience */}
          <Section title="Experience">
            <ResumeItem
              title="Add your work experience here"
              subtitle="Company / Organisation"
              period="Add period"
              description="Fill in your work experience from your CV. Update src/components/resume/ResumeClient/ResumeClient.tsx with real data."
              isPlaceholder
            />
          </Section>

          {/* Skills */}
          <Section title="Skills">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  label: 'Digital Marketing',
                  items: ['GA4', 'Google Search Console', 'SEO', 'SEM', 'Content Strategy', 'Campaign Planning'],
                },
                {
                  label: 'Analytics',
                  items: ['Looker Studio', 'Google Sheets', 'Data Storytelling', 'Dashboard Design', 'Reporting'],
                },
                {
                  label: 'Tools & Technical',
                  items: ['HTML / CSS', 'Google Tag Manager', 'AI-assisted Workflows', 'Figma (basics)', 'Notion'],
                },
              ].map((group) => (
                <div key={group.label}>
                  <h3 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
                    {group.label}
                  </h3>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-[var(--color-text-secondary)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* Projects */}
          <Section title="Selected Projects">
            <ResumeItem
              title="Google Analytics 4 Dashboard"
              subtitle="Analytics · RevoU Program"
              period="Jul 2026"
              description="Built a centralised GA4 + Looker Studio reporting system replacing four separate tracking tools. 90% reduction in manual reporting time."
            />
            <ResumeItem
              title="Personal Portfolio Website"
              subtitle="Web · Self-directed"
              period="Aug 2026"
              description="Designed and built this portfolio as a real product — from strategy and information architecture to full-stack development with Next.js and Tailwind CSS."
            />
            <p className="text-sm text-[var(--color-text-tertiary)] mt-2">
              →{' '}
              <Link
                href="/projects"
                className="text-[var(--color-accent)] hover:underline"
              >
                View all projects
              </Link>
            </p>
          </Section>

        </AnimatedSection>

        {/* Download CTA — bottom */}
        <AnimatedSection delay={200}>
          <div className="mt-4 pt-12 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-6">
            <p className="text-sm text-[var(--color-text-secondary)]">
              PDF version coming soon. Upload your CV to <code className="font-mono text-xs">/public/resume/cv.pdf</code> to enable the download button.
            </p>
            <span
              className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-lg border border-[var(--color-border-subtle)] text-[var(--color-text-tertiary)] text-sm font-medium cursor-not-allowed select-none"
              aria-label="CV not yet available"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1v9M4.5 7l3.5 3.5L11.5 7M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download CV
            </span>
          </div>
        </AnimatedSection>

      </div>
    </main>
  )
}
