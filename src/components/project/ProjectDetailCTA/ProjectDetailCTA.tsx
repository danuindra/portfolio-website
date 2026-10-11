'use client'

import Link from 'next/link'
import { useLocale } from '@/context/LocaleContext'

export default function ProjectDetailCTA() {
  const { t } = useLocale()

  return (
    <div className="mt-16 pt-10 border-t border-[var(--color-border-subtle)]">
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        {t.projectDetail.ctaText}
      </p>
      <div className="flex flex-wrap gap-4 items-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center h-10 px-5 rounded-lg bg-[var(--color-accent)] text-white text-sm font-medium transition-all hover:-translate-y-px hover:shadow-md"
        >
          {t.projectDetail.ctaButton}
        </Link>
        <Link
          href="/projects"
          className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
        >
          {t.projectDetail.backToProjects}
        </Link>
      </div>
    </div>
  )
}
