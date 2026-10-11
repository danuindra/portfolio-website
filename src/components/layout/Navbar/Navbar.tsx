'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/data/site'
import MobileMenu from './MobileMenu'
import ThemeToggle from '@/components/shared/ThemeToggle/ThemeToggle'
import LocaleToggle from '@/components/shared/LocaleToggle/LocaleToggle'
import { useLocale } from '@/context/LocaleContext'

export default function Navbar() {
  const pathname = usePathname()
  const { t } = useLocale()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = useCallback(() => setIsMobileOpen(false), [])

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/projects', label: t.nav.projects },
    { href: '/skills', label: t.nav.skills },
    { href: '/resume', label: t.nav.resume },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <>
      {/* Skip navigation — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-accent)] focus:text-white focus:rounded-lg"
      >
        {t.nav.skipToMain}
      </a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-16 transition-all',
          isScrolled
            ? 'bg-[var(--color-bg-base)]/90 backdrop-blur-md border-b border-[var(--color-border-subtle)]'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <nav
          aria-label="Main navigation"
          className="h-full flex items-center justify-between w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10"
        >
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-sm font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
          >
            {siteConfig.shortName}
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6" role="list">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm transition-colors',
                      isActive
                        ? 'text-[var(--color-accent)] font-medium'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Right side: locale toggle + theme toggle + mobile hamburger */}
          <div className="flex items-center">
            <LocaleToggle />
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
              onClick={() => setIsMobileOpen(true)}
              aria-label={t.nav.openMenu}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <MobileMenu isOpen={isMobileOpen} onClose={closeMobile} />
    </>
  )
}
