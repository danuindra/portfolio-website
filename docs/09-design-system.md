# 09 — Design System

> Last updated: August 2026
> Status: Active — updated post design review (August 2026)

---

## Overview

Design system ini menerjemahkan keputusan visual dari `08-design-direction.md`
menjadi nilai konkret yang langsung dapat diimplementasikan ke kode.

Stack: **Tailwind CSS** — semua token dirancang kompatibel dengan `tailwind.config.js`.

Prinsip:
- Setiap nilai punya alasan
- Token bernama berdasarkan fungsi, bukan nilai (misal: `surface` bukan `gray-900`)
- Sistem harus bisa di-extend tanpa direbuild

---

## Color System

### Base Palette

```
Neutral Scale:
  #FFFFFF   white
  #F5F5F5   gray-50
  #E5E5E5   gray-100
  #A3A3A3   gray-400
  #737373   gray-500
  #404040   gray-700
  #262626   gray-800
  #171717   gray-900
  #0A0A0A   gray-950
  #000000   black
```

### Semantic Tokens — Light Mode (Default — V1)

> Light mode adalah default V1. Keputusan final berdasarkan Design Review August 2026.

| Token | Value | Penggunaan |
|---|---|---|
| `bg-base` | `#FFFFFF` | Background utama seluruh halaman |
| `bg-surface` | `#F9F9F9` | Background cards, sections |
| `bg-elevated` | `#F0F0F0` | Hover state cards, dropdown |
| `border-subtle` | `#E5E5E5` | Border tipis — dividers, card borders |
| `border-default` | `#D1D5DB` | Border standar |
| `text-primary` | `#111111` | Teks utama — body, paragraf |
| `text-secondary` | `#666666` | Metadata, label, caption |
| `text-tertiary` | `#9CA3AF` | Placeholder, disabled state |
| `text-inverse` | `#FFFFFF` | Teks di atas accent color |
| `accent` | `#4F46E5` | CTA, links, highlight utama (Indigo) |
| `accent-hover` | `#4338CA` | Hover state accent |
| `accent-subtle` | `#EEF2FF` | Background subtle untuk badge accent |

**Mengapa Indigo (`#4F46E5`) sebagai accent di light mode:**
- Kontras ratio ≥ 4.5:1 pada white background — memenuhi WCAG AA
- Distinctive dan premium — tidak generic seperti biru standar
- Konsisten dengan dark mode accent — brand recognition terjaga saat toggle ditambahkan di V2
- Digunakan oleh Linear, Tailwind UI — selaras dengan referensi

### Semantic Tokens — Dark Mode (V2 Reference)

> Token ini sudah siap. Implementasikan di V2 bersama ThemeToggle component.
> Tidak ada perubahan di codebase yang dibutuhkan — hanya tambah `dark:` variant classes.

| Token | Value | Penggunaan |
|---|---|---|
| `bg-base` | `#0D0D0D` | Background utama |
| `bg-surface` | `#161616` | Background cards |
| `bg-elevated` | `#1F1F1F` | Hover state |
| `border-subtle` | `#2A2A2A` | Border tipis |
| `border-default` | `#3A3A3A` | Border standar |
| `text-primary` | `#EDEDED` | Teks utama |
| `text-secondary` | `#A0A0A0` | Metadata |
| `text-tertiary` | `#666666` | Placeholder |
| `text-inverse` | `#0D0D0D` | Teks di atas accent |
| `accent` | `#6366F1` | CTA, links |
| `accent-hover` | `#4F46E5` | Hover state accent |
| `accent-subtle` | `#1E1B4B` | Background subtle badge |

### Status Colors

| Token | Value | Penggunaan |
|---|---|---|
| `success` | `#22C55E` | Positive state, completed |
| `warning` | `#F59E0B` | In progress, attention |
| `error` | `#EF4444` | Error state |
| `info` | `#3B82F6` | Informational |

---

## Typography System

### Font Selection

| Role | Font | Source | Fallback |
|---|---|---|---|
| **Display / Heading** | `Inter` | Google Fonts | `system-ui, sans-serif` |
| **Body** | `Inter` | Google Fonts | `system-ui, sans-serif` |
| **Monospace** | `JetBrains Mono` | Google Fonts | `'Courier New', monospace` |

**Mengapa Inter:**
- Dirancang untuk layar — legibility di semua ukuran sangat baik
- Digunakan oleh Linear, Vercel, GitHub — konsisten dengan referensi
- Variable font — satu file untuk semua weight, performa lebih baik
- Free, open source, production-ready

**Mengapa JetBrains Mono:**
- Hanya untuk tool badges, code snippets, dan monospace accents
- Memberikan subtle nod ke developer/technical aesthetic
- Tidak menggunakan di body copy — terlalu berat untuk dibaca panjang

### Type Scale

Menggunakan **Major Third scale (1.250)** — harmonis dan tidak terlalu dramatis.

| Token | Size | Line Height | Weight | Penggunaan |
|---|---|---|---|---|
| `text-xs` | 12px / 0.75rem | 1.5 | 400 | Caption, label kecil |
| `text-sm` | 14px / 0.875rem | 1.5 | 400 | Metadata, tags, secondary info |
| `text-base` | 16px / 1rem | 1.7 | 400 | Body copy utama |
| `text-lg` | 18px / 1.125rem | 1.6 | 400 | Lead paragraph |
| `text-xl` | 20px / 1.25rem | 1.4 | 500 | Card title, H4 |
| `text-2xl` | 24px / 1.5rem | 1.3 | 600 | H3 |
| `text-3xl` | 30px / 1.875rem | 1.2 | 600 | H2 |
| `text-4xl` | 36px / 2.25rem | 1.15 | 700 | H1 |
| `text-5xl` | 48px / 3rem | 1.1 | 700 | Hero subtitle |
| `text-6xl` | 60px / 3.75rem | 1.0 | 800 | Hero headline |

**Letter spacing:**
- Heading display: `-0.02em` (sedikit tighter — terasa lebih presisi)
- Body: `0` (normal)
- Labels / caps: `+0.05em` (sedikit wider — lebih readable di ukuran kecil)

---

## Spacing System

Menggunakan **base-8 scale** — semua spacing adalah kelipatan 4px.

| Token | Value | Penggunaan |
|---|---|---|
| `space-1` | 4px | Gap sangat kecil, border offset |
| `space-2` | 8px | Padding dalam badge/tag |
| `space-3` | 12px | Gap antar inline elements |
| `space-4` | 16px | Padding default mobile |
| `space-5` | 20px | Gap antar items dalam list |
| `space-6` | 24px | Padding card, gap grid column |
| `space-8` | 32px | Gap antar komponen dalam section |
| `space-10` | 40px | Padding section mobile |
| `space-12` | 48px | Gap antar major elements |
| `space-16` | 64px | Section padding desktop |
| `space-20` | 80px | Section padding desktop large |
| `space-24` | 96px | Section gap desktop |
| `space-32` | 128px | Hero vertical padding |

---

## Border Radius

| Token | Value | Penggunaan |
|---|---|---|
| `radius-sm` | 4px | Badge, tag kecil |
| `radius-md` | 8px | Button, input field |
| `radius-lg` | 12px | Card standar |
| `radius-xl` | 16px | Card besar, modal |
| `radius-full` | 9999px | Pill badge, avatar |

**Mengapa radius sedang, bukan tajam atau bulat:**
- Terlalu tajam (0px) terasa kaku dan unfriendly
- Terlalu bulat (24px+) terasa playful — tidak sesuai tone premium
- `radius-lg` (12px) adalah sweet spot antara presisi dan approachable

---

## Shadow System

Shadows disesuaikan untuk light mode — menggunakan warna gelap dengan opacity rendah.

| Token | Value | Penggunaan |
|---|---|---|
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | Subtle elevation, input |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.10)` | Card default |
| `shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` | Card hover, dropdown |
| `shadow-xl` | `0 16px 48px rgba(0,0,0,0.16)` | Modal, overlay |
| `shadow-glow` | `0 0 20px rgba(79,70,229,0.12)` | Accent glow — sangat selektif |

> `shadow-glow` hanya digunakan pada elemen CTA utama.
> Di dark mode (V2), shadow opacity akan dinaikkan — token akan di-override via `dark:` variant.

---

## Animation Tokens

| Token | Value | Penggunaan |
|---|---|---|
| `duration-fast` | 150ms | Micro-interactions (hover color) |
| `duration-base` | 250ms | Standard transitions (hover transform) |
| `duration-slow` | 400ms | Page elements fade in |
| `duration-slower` | 600ms | Section transitions |
| `ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | General purpose |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Element leaving |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Element entering |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful — gunakan sangat jarang |

**Aturan animasi wajib:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Grid & Layout

### Container

| Breakpoint | Max Width | Padding |
|---|---|---|
| Mobile `< 768px` | 100% | 16px kiri-kanan |
| Tablet `768px–1024px` | 100% | 32px kiri-kanan |
| Desktop `> 1024px` | 1200px | 40px kiri-kanan |
| Wide `> 1440px` | 1200px | Auto (centered) |

### Column Grid

| Breakpoint | Columns | Gutter |
|---|---|---|
| Mobile | 4 | 16px |
| Tablet | 8 | 24px |
| Desktop | 12 | 24px |

### Section Vertical Rhythm

```
Section padding top/bottom:
  Mobile:   64px (space-16)
  Desktop:  96px (space-24)

Gap antar sections:
  Konsisten — tidak ada section yang "lebih penting" terlihat dari spacing
```

---

## Tailwind Config Reference

```js
// tailwind.config.js — V1 implementation (light mode default)
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class', // dark mode ready for V2 via .dark class
  theme: {
    // transitionDuration REPLACES defaults (not extends) to prevent
    // accidental use of Tailwind built-in duration-300, duration-500, etc.
    // This enforces design system token usage. See 22-design-review.md Issue 5.
    transitionDuration: {
      fast: '150ms',
      base: '250ms',
      slow: '400ms',
      slower: '600ms',
      DEFAULT: '250ms',
    },
    extend: {
      colors: {
        // Light mode tokens (V1 default)
        bg: {
          base: '#FFFFFF',
          surface: '#F9F9F9',
          elevated: '#F0F0F0',
        },
        border: {
          subtle: '#E5E5E5',
          default: '#D1D5DB',
        },
        text: {
          primary: '#111111',
          secondary: '#666666',
          tertiary: '#9CA3AF',
          inverse: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          subtle: '#EEF2FF',
        },
        // Dark mode tokens (V2 — used via dark: variant)
        // Example: dark:bg-dark-base, dark:text-dark-primary
        dark: {
          base: '#0D0D0D',
          surface: '#161616',
          elevated: '#1F1F1F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.08)',
        md: '0 4px 12px rgba(0,0,0,0.10)',
        lg: '0 8px 24px rgba(0,0,0,0.12)',
        xl: '0 16px 48px rgba(0,0,0,0.16)',
        glow: '0 0 20px rgba(79,70,229,0.12)',
      },
      transitionTimingFunction: {
        default: 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

> **Catatan penting:** `transitionDuration` ditempatkan di `theme` (bukan `theme.extend`) untuk **menggantikan** default Tailwind, bukan menambahkannya. Ini mencegah penggunaan `duration-300` atau `duration-500` (Tailwind default) yang akan melanggar design system. Hanya `duration-fast`, `duration-base`, `duration-slow`, `duration-slower` yang tersedia.

---

## Key Decisions

1. **Light mode sebagai default V1, dark mode sebagai V2** — keputusan final berdasarkan Design Review. Token semantic naming (`bg-surface`, `text-primary`, dll.) memastikan dark mode bisa ditambahkan di V2 tanpa menyentuh satu pun component class. Hanya nilai token yang berubah.

2. **Inter sebagai satu-satunya font untuk display dan body** — Inter cukup versatile untuk keduanya, mengurangi HTTP request, dan hasilnya lebih kohesif.

3. **Indigo sebagai accent color** — `#4F46E5` di light mode. Kontras ratio ≥ 4.5:1 di white background (WCAG AA). Distinctive, premium, tidak generic.

4. **Base-8 spacing scale** — semua spacing adalah kelipatan 4px. Konsistensi antara desainer dan developer.

5. **Semantic token naming** — `bg-surface` bukan `gray-100`. Saat dark mode ditambahkan di V2, hanya nilai token di config yang berubah — bukan ribuan class di seluruh codebase.

6. **`transitionDuration` sebagai replacement, bukan extension** — mencegah penggunaan Tailwind default durations (`duration-300`, dll.) yang akan melanggar design system. Hanya nama token kustom yang tersedia. Lihat `22-design-review.md` Issue 5.

---

## Future Improvements

- [ ] Implementasikan dark mode di V2 — token sudah siap di bagian "Dark Mode (V2 Reference)". Tambahkan `dark:` variant classes ke komponen, buat ThemeToggle component
- [ ] Evaluasi apakah perlu custom font selain Inter setelah V1 live
- [ ] Tambahkan motion tokens yang lebih kaya untuk Framer Motion animations
- [ ] Pertimbangkan CSS custom properties (`:root { --color-accent: ... }`) untuk runtime theming di V3
- [ ] Buat visual token preview sederhana untuk validasi sebelum digunakan di production

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| `08-design-direction.md` | Semua nilai di sini adalah operasionalisasi keputusan visual yang sudah ditetapkan di design direction |
| `10-components.md` | Setiap komponen menggunakan token dari dokumen ini — tidak boleh ada hardcoded values di komponen |
| `14-tech-stack.md` | Tailwind CSS dan Inter font harus masuk ke dependency list |
| `15-folder-structure.md` | `tailwind.config.js` dan `globals.css` harus mencerminkan token yang didefinisikan di sini |
| `16-coding-rules.md` | Aturan: tidak ada hardcoded color atau spacing di luar design system tokens |
| `19-quality-checklist.md` | Checklist harus memvalidasi konsistensi penggunaan token di seluruh codebase |
