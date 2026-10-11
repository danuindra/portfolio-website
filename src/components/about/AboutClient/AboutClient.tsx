'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import { useLocale } from '@/context/LocaleContext'
import type { skillCategories as SkillCategoriesType } from '@/data/skills'
import type { siteConfig as SiteConfigType } from '@/data/site'

interface AboutClientProps {
  skillCategories: typeof SkillCategoriesType
  siteConfig: typeof SiteConfigType
}

export default function AboutClient({ skillCategories, siteConfig }: AboutClientProps) {
  const { t } = useLocale()

  return (
    <main id="main-content" className="pt-16">
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10 py-16">

        {/* Page header */}
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-16">
            {t.about.heading}
          </h1>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection delay={80} className="mb-20 max-w-2xl">
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-5">
            {siteConfig.name}, {t.about.bio1} {siteConfig.location}.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
            {t.about.bio2}
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
            {t.about.bio3}
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {t.about.bio4}
          </p>
        </AnimatedSection>

        {/* Core Operational Values */}
        <AnimatedSection delay={140} className="mb-20">
          <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3">
            {t.about.howIWorkHeading}
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-8 max-w-xl">
            {t.about.howIWorkSubheading}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.about.values.map((value, i) => (
              <AnimatedSection key={value.title} delay={140 + i * 60}>
                <div className="p-6 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] h-full">
                  <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">
                    0{i + 1}
                  </p>
                  <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection delay={200} className="mb-20">
          <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-8">
            {t.about.skillsHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div key={category.name}>
                <h3 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-[var(--color-text-secondary)] bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection delay={260}>
          <div className="border-t border-[var(--color-border-subtle)] pt-12">
            <p className="text-[var(--color-text-secondary)] mb-6">
              {t.about.ctaText}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-5 rounded-lg bg-[var(--color-accent)] text-white text-sm font-medium transition-all hover:-translate-y-px hover:shadow-md"
              >
                {t.about.ctaContact}
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center h-10 px-5 rounded-lg border border-[var(--color-border-default)] text-[var(--color-text-primary)] text-sm font-medium transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {t.about.ctaProjects}
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </main>
  )
}
