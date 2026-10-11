# 10 — Components

> Last updated: August 2026
> Status: Active — updated post design review (August 2026)

---

## Overview

Dokumen ini mendefinisikan semua komponen UI yang dibutuhkan untuk V1.

Setiap komponen mencakup:
- **Deskripsi** — apa dan mengapa
- **Variants** — semua state dan variasi yang diperlukan
- **Props** — interface TypeScript yang diharapkan
- **Behavior** — interaksi dan animasi
- **Accessibility** — requirement ARIA dan keyboard
- **Used in** — halaman atau section mana yang menggunakannya

Prinsip:
> Bangun komponen yang kamu butuhkan sekarang. Jangan over-engineer untuk kebutuhan yang belum ada.

---

## Component Map

> **`'use client'`** annotations menunjukkan komponen yang membutuhkan Client Component directive.
> Komponen tanpa annotation adalah Server Components by default.

```
src/components/
│
├── layout/
│   ├── Navbar          ← 'use client' (scroll listener, mobile menu state)
│   ├── Footer
│   └── Container
│
├── ui/
│   ├── Button          ← 'use client' jika ada onClick handler
│   ├── Badge
│   ├── Tag
│   └── SectionLabel
│
├── sections/
│   ├── Hero            ← Server Component (static content)
│   ├── AboutSummary    ← Server Component
│   ├── Skills          ← Server Component
│   ├── ProjectsHighlight ← Server Component
│   ├── Journey         ← Server Component
│   └── ContactCTA      ← Server Component
│
├── project/
│   ├── ProjectCard     ← Server Component
│   ├── ProjectFilter   ← 'use client' (state + URL params)
│   ├── ProjectHeader   ← Server Component
│   ├── ProjectMetric   ← 'use client' (count-up animation)
│   └── ProjectNav      ← Server Component
│
└── shared/
    ├── AnimatedSection ← 'use client' (Framer Motion)
    └── StatusBadge     ← 'use client' (pulse animation)
```

> **SEO component dihapus.** Next.js App Router memiliki Metadata API built-in yang lebih idiomatic.
> Gunakan `export const metadata` atau `export async function generateMetadata` di setiap `page.tsx`.
> Helper terpusat ada di `src/lib/metadata.ts`. Lihat `25-technical-review.md` Issue 2.

---

## LAYOUT COMPONENTS

---

### Navbar

**Deskripsi:**
Navigation bar yang sticky di bagian atas halaman. Transparent saat di top, mendapat background saat di-scroll.

**Variants:**
- `default` — transparent background + blur saat scroll
- `solid` — background solid (untuk halaman non-home)

**Props:**
```typescript
interface NavbarProps {
  variant?: 'default' | 'solid'
}
```

**Behavior:**
- Sticky: `position: sticky; top: 0; z-index: 50`
- Scroll behavior: saat `scrollY > 20`, tambahkan `backdrop-blur` + `bg-bg-base/80`
- Mobile: hamburger icon menggantikan nav links
- Mobile menu: full-screen overlay dengan links dan social links
- Active link: indicator yang menunjukkan halaman aktif saat ini

**Links:**
```
[Name/Logo] → /
[About]     → /about
[Projects]  → /projects
[Contact]   → /contact
```

**Accessibility:**
- `<nav>` element dengan `aria-label="Main navigation"`
- Mobile menu toggle: `aria-expanded`, `aria-controls`
- Skip navigation link: `<a href="#main-content">` tersembunyi yang muncul saat focus

---

### Footer

**Deskripsi:**
Footer minimal di bagian bawah setiap halaman.

**Props:**
```typescript
interface FooterProps {
  // No required props — data di-hardcode atau dari config
}
```

**Konten:**
```
Kiri:   © 2026 Danu Indra Ismawan
Tengah: [About] [Projects] [Contact]
Kanan:  [LinkedIn icon] [GitHub icon] [Email icon]
```

**Behavior:**
- Stack vertikal di mobile
- Social icon: tooltip dengan nama platform saat hover

**Accessibility:**
- Social links: `aria-label="Visit LinkedIn profile"` dst
- `<footer>` dengan `role="contentinfo"`

---

### Container

**Deskripsi:**
Wrapper untuk max-width dan horizontal padding yang konsisten.

**Props:**
```typescript
interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements  // default: 'div'
}
```

**Behavior:**
- Max width: `1200px`
- Auto margin horizontal
- Padding: `16px` mobile, `32px` tablet, `40px` desktop

---

## UI COMPONENTS

---

### Button

**Deskripsi:**
Komponen button reusable dengan tiga variant utama.

**Variants:**
- `primary` — filled accent color, untuk CTA utama
- `secondary` — outline, untuk aksi sekunder
- `ghost` — no border no background, untuk aksi tersier

**Sizes:**
- `sm` — 14px text, padding 8px 16px
- `md` — 16px text, padding 12px 24px (default)
- `lg` — 18px text, padding 14px 32px

**Props:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string          // jika ada, render sebagai <a>
  disabled?: boolean
  loading?: boolean
  className?: string
  onClick?: () => void
}
```

**Behavior:**
- Hover: `translateY(-1px)` + subtle shadow — `duration-base` transition
- Active/Press: `translateY(0)` — snap back
- Loading state: spinner icon menggantikan children
- Disabled: `opacity-50`, `cursor-not-allowed`, tidak ada hover effect
- Jika ada `href`: render sebagai Next.js `<Link>` bukan `<button>`

**Accessibility:**
- Selalu punya accessible text (children atau `aria-label`)
- Loading state: `aria-busy="true"`, `aria-label` berubah ke "Loading..."
- Disabled: `aria-disabled="true"`

---

### Badge

**Deskripsi:**
Label kecil untuk kategori, status, atau penanda.

**Variants:**
- `default` — bg-surface, text-secondary
- `accent` — bg-accent-subtle, text-accent
- `success` — green subtle
- `warning` — amber subtle

**Props:**
```typescript
interface BadgeProps {
  variant?: 'default' | 'accent' | 'success' | 'warning'
  children: React.ReactNode
  className?: string
}
```

**Penggunaan:** Project category label, status "Open to Opportunities", skill level indicator

---

### Tag

**Deskripsi:**
Label monospace untuk tool, teknologi, atau keyword. Berbeda dari Badge — lebih technical.

**Props:**
```typescript
interface TagProps {
  children: React.ReactNode
  className?: string
}
```

**Visual:**
- Font: `JetBrains Mono`
- Background: `bg-elevated`
- Border: `border-subtle`
- Radius: `radius-sm`
- Size: `text-xs`

**Penggunaan:** Tools list di project card ("GA4", "Looker Studio", "Next.js")

---

### SectionLabel

**Deskripsi:**
Label kecil di atas section heading. Pattern: kecil, uppercase, letter-spacing wide, color accent.

**Props:**
```typescript
interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}
```

**Visual:**
```
SELECTED PROJECTS   ← contoh output
```
- `text-xs`, `font-medium`, `tracking-widest`, `text-accent`, `uppercase`

---

## SECTION COMPONENTS

---

### Hero

**Deskripsi:**
Section pertama yang dilihat pengunjung. Harus menyampaikan identitas dalam 3 detik.

**Konten:**
```
[Greeting text]        ← "Hi, I'm" — small, text-secondary
[H1: Name]             ← "Danu Indra Ismawan" — display size, bold
[H2: Role tagline]     ← "Digital Marketer & Analyst" — large, text-secondary
[Description]          ← 1–2 kalimat — text-base, text-secondary
[CTA Primary]          ← "View My Work" → /projects
[CTA Secondary]        ← "Get in Touch" → /contact
[Visual element]       ← profile photo atau abstract visual — kanan (desktop)
```

**Behavior:**
- Fade-in dengan stagger: setiap elemen muncul 100ms setelah elemen sebelumnya
- Scroll indicator di bagian bawah: subtle animated arrow/chevron
- Visual element: subtle float animation (opsional, hanya jika tidak mengganggu)

**Accessibility:**
- H1 hanya satu di seluruh halaman — ada di Hero
- `role="banner"` pada `<header>` yang membungkus Hero

---

### AboutSummary

**Deskripsi:**
Versi ringkas tentang Danu — 2–3 kalimat + link ke /about.

**Konten:**
```
[SectionLabel: "About"]
[H2: "About Me"]
[2–3 paragraf singkat]
[Link: "Read full story →"]
```

**Behavior:**
- Fade-in saat masuk viewport (`IntersectionObserver`)

---

### Skills

**Deskripsi:**
Ringkasan tools dan kompetensi utama dalam format grid. **Curated display** — hanya marketing-relevant skills yang ditampilkan. Dev frameworks tidak muncul di sini.

**Data structure:**
```typescript
interface SkillCategory {
  name: string
  skills: string[]
}
```

**Kategori yang ditampilkan di Home (curated):**
```
Marketing & Strategy   → GA4, Google Search Console, SEO, SEM, Content Strategy
Data & Visualization   → Looker Studio, Google Sheets, Data Storytelling, Reporting
Technical Skills       → HTML/CSS, GTM, AI Tools, Prompt Engineering, Figma (basics)
```

> Dev frameworks (Next.js, React, TypeScript, Tailwind, Framer Motion) **tidak** muncul di skills display.
> Mereka muncul sebagai tool tags di project case studies. Lihat `24-content-review.md` Issue 3.

**Konten:**
```
[SectionLabel: "Skills & Tools"]
[H2: "What I Work With"]
[Grid: 3 kolom desktop, 2 mobile]
  [Category card]
    [Category name]
    [Tag] [Tag] [Tag]
```

**Behavior:**
- Stagger animation: setiap card muncul 50ms setelah card sebelumnya
- Hover card: bg sedikit lebih terang (bg-elevated)

---

### ProjectsHighlight

**Deskripsi:**
Highlight 3 project terbaik di Home page. Bukan full grid — hanya preview.

**Props:**
```typescript
interface ProjectsHighlightProps {
  projects: Project[]  // max 3
}
```

**Konten:**
```
[SectionLabel: "Work"]
[H2: "Selected Projects"]
[Grid: 2 kolom desktop, 1 mobile]
  [ProjectCard] × 3
[Link: "View all projects →"]
```

---

### Journey

**Deskripsi:**
Timeline milestone karier dan belajar. Digunakan **hanya di /about** (full variant).
Journey tidak tampil di Home. Lihat `23-ux-review.md` Issue 3.

**Data structure:**
```typescript
interface JourneyEntry {
  date: string          // Format: "Jul 2026" — month-based untuk trajectory visibility
  title: string
  organization?: string
  description: string
  isCurrent?: boolean
}
```

**Props:**
```typescript
interface JourneyProps {
  entries: JourneyEntry[]
}
```

**Visual:**
```
Vertical line di kiri
● dot di setiap entry
[Mon YYYY] [Title] — [Organization]
[Description]
```

**Behavior:**
- Entry animasi masuk dari kiri dengan stagger saat masuk viewport
- Current entry: dot warna accent, subtle glow

**Accessibility:**
- Gunakan `<ol>` untuk timeline — ordered list semantically benar untuk urutan waktu
- `<time datetime="2026-07">` untuk setiap date entry

---

### ContactCTA

**Deskripsi:**
Section penutup di Home page — undangan untuk terhubung.

**Konten:**
```
[H2: "Let's Connect"]
[1–2 kalimat supporting text]
[Button: "Get in Touch" → /contact]
[Social links: LinkedIn, Email, GitHub]
```

**Behavior:**
- Background: sedikit berbeda dari section sebelumnya (bg-surface) untuk visual break
- Centered layout

---

## PROJECT COMPONENTS

---

### ProjectCard

**Deskripsi:**
Card yang menampilkan preview satu project. Digunakan di /projects dan ProjectsHighlight.

**Props:**
```typescript
interface ProjectCardProps {
  title: string
  description: string
  category: string
  tools: string[]
  slug: string
  thumbnail?: string
  featured?: boolean  // untuk styling card yang lebih prominent
}
```

**Konten:**
```
[Thumbnail area]
[Badge: category]
[H3: title]
[description — 1 kalimat, truncated]
[Tags: tool, tool, tool]
[Link: "View Case Study →"]
```

**Behavior:**
- Hover: `translateY(-4px)` + `shadow-lg` — `duration-base` transition
- Thumbnail: object-fit cover, consistent aspect ratio (16:9)
- Jika tidak ada thumbnail: placeholder dengan gradient dan initial/icon

**Accessibility:**
- Seluruh card bisa di-click tapi link text tetap deskriptif
- `aria-label` pada card link: `"View ${title} case study"`

---

### ProjectFilter

**Deskripsi:**
Filter bar untuk memfilter project berdasarkan kategori di /projects.

**Props:**
```typescript
interface ProjectFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}
```

**Categories V1:**
```
All | Analytics | Marketing | Web | AI
```

**Behavior:**
- Active state: accent color background
- Transition: smooth color change — `duration-fast`
- URL param: filter state di-sync ke URL `?category=analytics` untuk shareable links

**Accessibility:**
- Gunakan `role="tablist"` dan `role="tab"` — semantically filter adalah tab navigation
- `aria-selected` pada active tab

---

### ProjectHeader

**Deskripsi:**
Header di halaman detail project (/projects/[slug]).

**Props:**
```typescript
interface ProjectHeaderProps {
  title: string
  category: string
  description: string
  tools: string[]
  date: string
  status: 'completed' | 'in-progress'
}
```

**Konten:**
```
[← Projects]  (back link — no full breadcrumb)
[Badge: category]  [StatusBadge]  [Date]
[H1: title]
[Description lead]
[Tags: tools]
```

---

### ProjectMetric

**Deskripsi:**
Card untuk menampilkan hasil terukur di section Results.

**Props:**
```typescript
interface ProjectMetricProps {
  value: string    // "47%" atau "+200" atau "3x"
  label: string    // "Increase in CTR"
  description?: string
}
```

**Visual:**
```
┌────────────────┐
│   47%          │
│   Increase     │
│   in CTR       │
└────────────────┘
```

**Behavior:**
- Number count-up animation saat masuk viewport (Framer Motion)
- Hover: subtle glow dari accent color

---

### ProjectNav

**Deskripsi:**
Navigation di bawah project detail — previous dan next project.

**Props:**
```typescript
interface ProjectNavProps {
  previous?: { title: string; slug: string }
  next?: { title: string; slug: string }
}
```

**Visual:**
```
[← Previous Project Title]    [Next Project Title →]
```

---

## SHARED COMPONENTS

---

### ~~SEO Component~~ → Metadata Helper (App Router Pattern)

> **SEO component dihapus.** Next.js App Router 14+ memiliki Metadata API built-in.
> Membuat custom SEO component adalah Pages Router pattern yang tidak relevan di App Router.
> Lihat `25-technical-review.md` Issue 2.

**Yang digunakan sebagai gantinya:**

```typescript
// src/lib/metadata.ts — helper terpusat
import type { Metadata } from 'next'

export function createMetadata(override: Partial<Metadata> = {}): Metadata {
  return {
    title: {
      default: 'Danu Indra Ismawan — Digital Marketer & Analyst',
      template: '%s — Danu Indra Ismawan',
    },
    description: 'Portfolio of Danu Indra Ismawan...',
    openGraph: {
      siteName: 'Danu Indra Ismawan',
      images: [{ url: '/og-default.png', width: 1200, height: 630 }],
    },
    ...override,
  }
}

// Di setiap page.tsx (static):
export const metadata: Metadata = createMetadata({
  title: 'Projects',
  description: 'Case studies in digital marketing and analytics.',
})

// Di dynamic routes (project detail):
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  return createMetadata({
    title: project.title,
    description: project.overview,
  })
}
```

---

### AnimatedSection

**Deskripsi:**
Wrapper untuk fade-in animation saat section masuk viewport. Digunakan di setiap section.

**Props:**
```typescript
interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number    // delay dalam ms untuk stagger
  direction?: 'up' | 'down' | 'left' | 'right'  // default: 'up'
}
```

**Behavior:**
- Menggunakan `IntersectionObserver` atau Framer Motion `whileInView`
- Default: fade + translateY(20px) → opacity(1) + translateY(0)
- Respects `prefers-reduced-motion` — jika true, skip animation

---

### StatusBadge

**Deskripsi:**
Badge khusus untuk menampilkan status availability Danu.

**Props:**
```typescript
interface StatusBadgeProps {
  status: 'open' | 'employed' | 'selective'
  showDot?: boolean  // animated green dot
}
```

**Output examples:**
```
● Open to Opportunities
● Currently Employed
● Selective Availability
```

**Behavior:**
- Dot: pulse animation (subtle) saat status 'open'

---

## Component Naming Conventions

```
PascalCase untuk semua komponen:    Navbar, ProjectCard, AnimatedSection
camelCase untuk props:              isLoading, onCategoryChange
kebab-case untuk CSS classes:       project-card, section-label
SCREAMING_SNAKE untuk constants:    MAX_PROJECTS, DEFAULT_CATEGORY
```

---

## Key Decisions

1. **Pemisahan `Badge` dan `Tag`** — keduanya label kecil tapi berbeda fungsi. Badge untuk status/kategori (semantic), Tag untuk tools/tech (monospace). Menggabungkannya menciptakan prop yang terlalu kompleks.

2. **`AnimatedSection` sebagai wrapper, bukan inline** — `prefers-reduced-motion` cukup di-handle di satu tempat. Semua section menggunakan wrapper yang sama.

3. **`Journey` hanya satu variant — full di /about** — compact variant dihapus karena Journey tidak lagi tampil di Home. Satu variant lebih sederhana dan tidak ada tradeoff. Lihat `23-ux-review.md` Issue 3.

4. **`ProjectFilter` sync ke URL params** — filter yang bisa di-share memungkinkan hiring manager membagikan link "semua project analytics" ke kolega.

5. **SEO component dihapus, diganti metadata helper** — Next.js App Router Metadata API adalah cara yang benar. Custom SEO component adalah Pages Router pattern yang tidak relevan dan menambah abstraksi tanpa value. Lihat `25-technical-review.md` Issue 2.

6. **Skills menampilkan curated marketing skills, bukan dev frameworks** — dev tools muncul di project case studies sebagai context, bukan sebagai personal skill utama. Ini mencegah "developer misread" dari rekruter marketing. Lihat `24-content-review.md` Issue 3.

---

## Future Improvements

- [ ] Tambahkan `Tooltip` component saat ada elemen yang butuh hover explanation
- [ ] Tambahkan `Modal` component untuk lightbox gambar di project detail
- [ ] Buat `ThemeToggle` component saat dark mode ditambahkan di V2
- [ ] Tambahkan `CommandMenu` (cmd+K) untuk navigasi cepat — V2
- [ ] Evaluasi `Skeleton` loading component setelah melihat real-world loading behavior
- [ ] Pertimbangkan `BlogCard` component saat `/blog` diaktifkan di V2

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| `07-wireframe.md` | Setiap blok di wireframe adalah komponen yang didefinisikan di sini |
| `09-design-system.md` | Semua komponen menggunakan tokens dari design system — tidak ada hardcoded values |
| `13-project-template.md` | ProjectCard, ProjectHeader, ProjectMetric, ProjectNav membentuk struktur template project |
| `15-folder-structure.md` | Component map di dokumen ini harus tercermin di struktur folder src/components/ |
| `16-coding-rules.md` | Setiap komponen harus mengikuti coding rules — naming, TypeScript, accessibility |
| `18-prompt-library.md` | Setiap komponen di sini memiliki prompt Kiro yang sesuai di prompt library |
