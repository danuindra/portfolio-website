'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { cn } from '@/lib/utils'
import { useLocale } from '@/context/LocaleContext'
import type { ProjectCategory } from '@/types'

type CategoryKey = keyof ReturnType<typeof useLocale>['t']['projects']['categories']

const CATEGORY_KEYS: { value: 'all' | ProjectCategory; key: CategoryKey }[] = [
  { value: 'all', key: 'all' },
  { value: 'analytics', key: 'analytics' },
  { value: 'marketing', key: 'marketing' },
  { value: 'web', key: 'web' },
  { value: 'ai', key: 'ai' },
]

export default function ProjectFilter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeCategory = (searchParams.get('category') ?? 'all') as 'all' | ProjectCategory
  const { t } = useLocale()
  const categories = t.projects.categories

  const handleSelect = useCallback(
    (value: 'all' | ProjectCategory) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value === 'all') {
        params.delete('category')
      } else {
        params.set('category', value)
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [router, pathname, searchParams]
  )

  return (
    <div
      role="tablist"
      aria-label={t.projects.filterLabel}
      className="flex flex-wrap gap-2"
    >
      {CATEGORY_KEYS.map(({ value, key }) => {
        const isActive = activeCategory === value
        return (
          <button
            key={value}
            role="tab"
            aria-selected={isActive}
            onClick={() => handleSelect(value)}
            className={cn(
              'px-4 py-1.5 rounded-full text-sm font-medium transition-all',
              isActive
                ? 'bg-[var(--color-accent)] text-white'
                : 'bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-default)] hover:text-[var(--color-text-primary)]'
            )}
          >
            {categories[key]}
          </button>
        )
      })}
    </div>
  )
}
