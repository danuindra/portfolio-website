'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/data/site'
import ThemeToggle from '@/components/shared/ThemeToggle/ThemeToggle'
import LocaleToggle from '@/components/shared/LocaleToggle/LocaleToggle'
import { useLocale } from '@/context/LocaleContext'

const navLinks = [
  { href: '/', labelKey: 'home' as const },
  { href: '/about', labelKey: 'about' as const },
  { href: '/projects', labelKey: 'projects' as const },
  { href: '/skills', labelKey: 'skills' as const },
  { href: '/resume', labelKey: 'resume' as const },
  { href: '/contact', labelKey: 'contact' as const },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const { t } = useLocale()

  // Close on route change
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-0 z-40 flex flex-col bg-[var(--color-bg-base)]"
    >
      {/* Top bar with theme toggle + close button */}
      <div className="flex items-center justify-between px-4 h-16">
        <Link
          href="/"
          onClick={onClose}
          className="text-sm font-semibold text-[var(--color-text-primary)]"
        >
          {siteConfig.shortName}
        </Link>
        <div className="flex items-center">
          <LocaleToggle />
          <ThemeToggle />
          <button
            onClick={onClose}
            aria-label={t.nav.closeMenu}
            className="w-10 h-10 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col gap-1 px-4 pt-4">
        {navLinks.map((link) => {
          const isActive =
            link.href === '/'
              ? pathname === '/'
              : pathname === link.href || pathname.startsWith(link.href + '/')
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                'py-3 px-2 text-xl font-medium rounded-lg transition-colors',
                isActive
                  ? 'text-[var(--color-accent)]'
                  : 'text-[var(--color-text-primary)] hover:text-[var(--color-accent)]'
              )}
            >
              {t.nav[link.labelKey]}
            </Link>
          )
        })}
      </nav>

      {/* Social links */}
      <div className="mt-auto px-6 pb-10 flex gap-6">
        <a
          href={`https://${siteConfig.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
          className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={`https://${siteConfig.github}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
          className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}
