'use client'

import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import { skillCategories } from '@/data/skills'
import { useLocale } from '@/context/LocaleContext'

// Map data category names to translation keys
const categoryKeyMap: Record<string, 'marketing' | 'data' | 'technical'> = {
  'Marketing & Strategy': 'marketing',
  'Data & Visualization': 'data',
  'Technical Skills': 'technical',
}

export default function Skills() {
  const { t } = useLocale()

  return (
    <section
      aria-labelledby="skills-heading"
      className="py-24 border-t border-[var(--color-border-subtle)]"
    >
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10">
        <AnimatedSection>
          <p className="text-xs font-medium tracking-widest text-[var(--color-accent)] uppercase mb-4">
            {t.skills.eyebrow}
          </p>
          <h2
            id="skills-heading"
            className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-12"
          >
            {t.skills.heading}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const key = categoryKeyMap[category.name]
            const localizedName = key ? t.skills.categories[key] : category.name
            return (
              <AnimatedSection key={category.name} delay={i * 80}>
                <div className="p-6 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-elevated)] transition-colors">
                  <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">
                    {localizedName}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-[var(--color-text-secondary)] bg-[var(--color-bg-base)] border border-[var(--color-border-subtle)] px-2.5 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
