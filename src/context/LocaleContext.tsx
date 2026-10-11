'use client'

import { createContext, useContext } from 'react'
import type { Locale, Translations } from '@/i18n'

export interface LocaleContextValue {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used inside LocaleProvider')
  return ctx
}
