'use client'

import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import type { skillCategories as SkillCategoriesType } from '@/data/skills'

interface SkillsPageClientProps {
  skillCategories: typeof SkillCategoriesType
}

// Icon per category name — purely decorative
const categoryIcon: Record<string, string> = {
  'Marketing & Strategy': '📣',
  'Data & Visualization': '📊',
  'Technical Skills': '⚙️',
}

// Proficiency labels shown alongside each category card
const categoryDescription: Record<string, string> = {
  'Marketing & Strategy': 'Core tools and concepts powering every campaign and project.',
  'Data & Visualization': 'Turning raw numbers into clear, actionable stories.',
  'Technical Skills': 'Practical knowledge that extends beyond the marketing brief.',
}

export default function SkillsPageClient({ skillCategories }: SkillsPageClientProps) {
  return (
    <main id="main-content" className="pt-16">
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10 py-16">

        {/* Page header */}
        <AnimatedSection>
          <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">
            Skills & Tools
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-5">
            What I Work With
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
            Skills built through real projects — not just courses. Each tool listed here has been
            applied in an actual working context during my RevoU program or personal projects.
          </p>
        </AnimatedSection>

        {/* Skill categories */}
        <div className="mt-16 space-y-16">
          {skillCategories.map((category, catIdx) => (
            <AnimatedSection key={category.name} delay={catIdx * 100}>
              <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 items-start">

                {/* Category label column */}
                <div>
                  <span className="text-2xl mb-3 block" aria-hidden="true">
                    {categoryIcon[category.name] ?? '🔧'}
                  </span>
                  <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                    {category.name}
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {categoryDescription[category.name] ?? ''}
                  </p>
                </div>

                {/* Skills grid */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <AnimatedSection key={skill} delay={catIdx * 100 + skillIdx * 30}>
                      <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-primary)] bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] px-4 py-2 rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-default">
                        {skill}
                      </span>
                    </AnimatedSection>
                  ))}
                </div>

              </div>

              {/* Separator */}
              {catIdx < skillCategories.length - 1 && (
                <div className="mt-16 border-t border-[var(--color-border-subtle)]" />
              )}
            </AnimatedSection>
          ))}
        </div>

        {/* Note */}
        <AnimatedSection delay={300} className="mt-20">
          <div className="p-6 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]">
            <p className="text-sm text-[var(--color-text-secondary)]">
              <span className="font-semibold text-[var(--color-text-primary)]">Note:</span>{' '}
              Development skills (React, Next.js, TypeScript) are used in building this website
              but are intentionally excluded here — this portfolio is focused on my digital
              marketing capabilities. They appear as tool tags in relevant project case studies.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </main>
  )
}
