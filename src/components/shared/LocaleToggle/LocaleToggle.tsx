'use client'

import { useLocale } from '@/context/LocaleContext'

interface LocaleToggleProps {
  className?: string
}

export default function LocaleToggle({ className = '' }: LocaleToggleProps) {
  const { locale, t, setLocale } = useLocale()

  const handleToggle = () => {
    setLocale(locale === 'en' ? 'id' : 'en')
  }

  return (
    <button
      onClick={handleToggle}
      aria-label={t.locale.switchTo}
      title={t.locale.switchTo}
      className={`h-10 px-2 flex items-center justify-center text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer tracking-wide ${className}`}
    >
      {t.locale.current}
    </button>
  )
}
