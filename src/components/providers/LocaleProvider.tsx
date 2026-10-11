'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { LocaleContext } from '@/context/LocaleContext'
import { locales, defaultLocale, type Locale } from '@/i18n'

const STORAGE_KEY = 'portfolio-locale'

// Pages that are server-rendered and need a hard refresh to pick up new locale cookie
const DYNAMIC_PAGES = ['/projects/']

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const router = useRouter()
  const pathname = usePathname()

  // On mount: read saved preference, fall back to browser language
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
    let resolved: Locale = defaultLocale
    if (saved === 'en' || saved === 'id') {
      resolved = saved
    } else {
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('id')) resolved = 'id'
    }
    document.cookie = `portfolio-locale=${resolved};path=/;max-age=31536000;SameSite=Lax`
    setLocaleState(resolved)
  }, [])

  // Update <html lang> whenever locale changes
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (next: Locale) => {
    localStorage.setItem(STORAGE_KEY, next)
    document.cookie = `portfolio-locale=${next};path=/;max-age=31536000;SameSite=Lax`
    setLocaleState(next)

    // If currently on a server-rendered dynamic page (project detail),
    // trigger a router refresh so the server re-reads the new cookie
    const isDynamicPage = DYNAMIC_PAGES.some((p) => pathname.startsWith(p))
    if (isDynamicPage) {
      router.refresh()
    }
  }

  return (
    <LocaleContext.Provider value={{ locale, t: locales[locale], setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}
