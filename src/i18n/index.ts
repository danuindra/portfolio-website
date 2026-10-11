import en from './locales/en'
import id from './locales/id'
import type { Translations } from './locales/en'

export type Locale = 'en' | 'id'
export type { Translations }

export const locales: Record<Locale, Translations> = { en, id }

export const defaultLocale: Locale = 'en'
