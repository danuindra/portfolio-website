'use client'

import { useActionState } from 'react'
import { sendContactEmail, type ContactFormState } from '@/app/actions/contact'
import { cn } from '@/lib/utils'
import { useLocale } from '@/context/LocaleContext'

const initialState: ContactFormState = { status: 'idle' }

export default function ContactForm() {
  const [state, action, isPending] = useActionState(sendContactEmail, initialState)
  const { t } = useLocale()

  if (state.status === 'success') {
    return (
      <div className="p-6 rounded-xl border border-[var(--color-success)] bg-green-50 text-center">
        <p className="text-base font-medium text-green-800 mb-1">{t.contactForm.successTitle}</p>
        <p className="text-sm text-green-700">
          {t.contactForm.successBody}
        </p>
      </div>
    )
  }

  return (
    <form action={action} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5"
        >
          {t.contactForm.nameLbl}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={t.contactForm.namePlaceholder}
          disabled={isPending}
          className={cn(
            'w-full h-11 px-4 rounded-lg border bg-[var(--color-bg-base)] text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-tertiary)] transition-colors',
            'border-[var(--color-border-default)] focus:outline-none focus:border-[var(--color-accent)]',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5"
        >
          {t.contactForm.emailLbl}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t.contactForm.emailPlaceholder}
          disabled={isPending}
          className={cn(
            'w-full h-11 px-4 rounded-lg border bg-[var(--color-bg-base)] text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-tertiary)] transition-colors',
            'border-[var(--color-border-default)] focus:outline-none focus:border-[var(--color-accent)]',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5"
        >
          {t.contactForm.messageLbl}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t.contactForm.messagePlaceholder}
          disabled={isPending}
          className={cn(
            'w-full px-4 py-3 rounded-lg border bg-[var(--color-bg-base)] text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-tertiary)] transition-colors resize-none',
            'border-[var(--color-border-default)] focus:outline-none focus:border-[var(--color-accent)]',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        />
      </div>

      {/* Error message */}
      {state.status === 'error' && state.message && (
        <p
          role="alert"
          className="text-sm text-[var(--color-error)]"
        >
          {state.message}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        aria-busy={isPending}
        className={cn(
          'inline-flex items-center justify-center h-11 px-6 rounded-lg bg-[var(--color-accent)] text-white text-sm font-medium transition-all',
          'hover:-translate-y-px hover:shadow-md active:translate-y-0',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
        )}
      >
        {isPending ? t.contactForm.sending : t.contactForm.submit}
      </button>
    </form>
  )
}
