'use client'

import Link from 'next/link'
import { siteConfig } from '@/data/site'
import { useLocale } from '@/context/LocaleContext'

export default function Footer() {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  const navLinks = [
    { href: '/', label: t.footer.navHome },
    { href: '/about', label: t.footer.navAbout },
    { href: '/projects', label: t.footer.navProjects },
    { href: '/skills', label: t.footer.navSkills },
    { href: '/resume', label: t.footer.navResume },
    { href: '/contact', label: t.footer.navContact },
  ]

  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--color-border-subtle)] mt-auto"
    >
      <div className="w-full mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Copyright */}
          <p className="text-sm text-[var(--color-text-secondary)]">
            © {year} {siteConfig.name}
            <span className="ml-2 text-[var(--color-text-tertiary)]">
              · {t.footer.builtWith}
            </span>
          </p>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href={`https://${siteConfig.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.ariaLinkedIn}
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              {t.footer.linkedin}
            </a>
            <a
              href={`https://${siteConfig.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.ariaGitHub}
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              {t.footer.github}
            </a>
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label={t.contact.ariaEmail}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                {t.footer.email}
              </a>
            )}
          </div>

        </div>
      </div>
    </footer>
  )
}
