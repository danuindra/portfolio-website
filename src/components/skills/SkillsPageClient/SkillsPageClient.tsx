'use client'

import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection'
import type { skillCategories as SkillCategoriesType } from '@/data/skills'

interface SkillsPageClientProps {
  skillCategories: typeof SkillCategoriesType
}

const categoryMeta: Record<string, { icon: string; label: string; labelID: string; desc: string; descID: string }> = {
  'Marketing & Strategy': {
    icon: '📣',
    label: 'Performance Marketing',
    labelID: 'Performance Marketing',
    desc: 'End-to-end campaign execution — from audience targeting and ad copywriting to bid strategy, A/B testing, and ROI optimization.',
    descID: 'Eksekusi kampanye end-to-end — dari targeting audiens dan copywriting iklan hingga strategi bid, A/B testing, dan optimasi ROI.',
  },
  'Data & Visualization': {
    icon: '📊',
    label: 'Data Analytics & Visualization',
    labelID: 'Data Analytics & Visualisasi',
    desc: 'Translating raw marketing data into clear dashboards and actionable insights that drive faster, smarter decisions.',
    descID: 'Mengubah data marketing mentah menjadi dashboard yang jelas dan insight yang bisa langsung ditindaklanjuti.',
  },
  'Technical Skills': {
    icon: '⚙️',
    label: 'Technical Tools',
    labelID: 'Tools Teknis',
    desc: 'Hands-on implementation of tracking infrastructure, automation workflows, and lightweight front-end — the technical layer that makes marketing measurable.',
    descID: 'Implementasi langsung infrastruktur tracking, alur otomasi, dan front-end ringan — lapisan teknis yang membuat marketing bisa diukur.',
  },
}

export default function SkillsPageClient({ skillCategories }: SkillsPageClientProps) {
  const isID = typeof window !== 'undefined' && document.documentElement.lang === 'id'

  return (
    <main id="main-content" className="pt-16">
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10 py-16">

        {/* Page header */}
        <AnimatedSection>
          <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">
            Skills & Tools
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-5">
            Keahlian & Toolkit
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
            Bukan sekadar daftar — setiap tool di sini sudah dipakai dalam konteks proyek nyata selama program RevoU dan pengembangan portfolio ini.
          </p>
        </AnimatedSection>

        {/* Skill categories */}
        <div className="mt-16 space-y-16">
          {skillCategories.map((category, catIdx) => {
            const meta = categoryMeta[category.name]
            return (
              <AnimatedSection key={category.name} delay={catIdx * 100}>
                <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 items-start">

                  {/* Category label */}
                  <div>
                    <span className="text-2xl mb-3 block" aria-hidden="true">
                      {meta?.icon ?? '🔧'}
                    </span>
                    <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                      {meta?.label ?? category.name}
                    </h2>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {meta?.desc ?? ''}
                    </p>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIdx) => (
                      <AnimatedSection key={skill} delay={catIdx * 100 + skillIdx * 25}>
                        <span className="inline-flex items-center text-sm text-[var(--color-text-primary)] bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] px-4 py-2 rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-default select-none">
                          {skill}
                        </span>
                      </AnimatedSection>
                    ))}
                  </div>

                </div>

                {catIdx < skillCategories.length - 1 && (
                  <div className="mt-16 border-t border-[var(--color-border-subtle)]" />
                )}
              </AnimatedSection>
            )
          })}
        </div>

        {/* Footer note */}
        <AnimatedSection delay={320} className="mt-20">
          <div className="p-6 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]">
            <p className="text-sm text-[var(--color-text-secondary)]">
              <span className="font-semibold text-[var(--color-text-primary)]">Catatan:</span>{' '}
              Keahlian development (React, Next.js, TypeScript) digunakan untuk membangun website ini namun sengaja tidak dicantumkan —
              portfolio ini fokus pada kemampuan digital marketing. Mereka muncul sebagai tool tag di studi kasus yang relevan.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </main>
  )
}
