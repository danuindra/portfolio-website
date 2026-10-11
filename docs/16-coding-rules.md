# 16 — Coding Rules

> Last updated: August 2026
> Status: Active — updated post design review (August 2026)

---

## Overview

Coding rules ini bukan tentang preferensi estetika — ini tentang membuat keputusan sekali
sehingga tidak perlu dipikirkan ulang setiap kali menulis code.

Untuk solo developer yang akan maintain proyek ini bertahun-tahun,
konsistensi adalah bentuk dokumentasi terbaik.

Filosofi:
> Code yang ditulis hari ini harus bisa dimengerti oleh Danu 2 tahun dari sekarang —
> tanpa perlu membaca seluruh codebase untuk memahami konteksnya.

---

## 1. TypeScript Rules

### Selalu gunakan TypeScript — tidak ada `any`

```typescript
// ❌ Hindari
const project: any = getProject()
function render(data: any) { ... }

// ✅ Gunakan
const project: Project = getProject()
function render(data: ProjectCardProps) { ... }
```

### Explicit return types untuk semua fungsi publik

```typescript
// ❌ Hindari — return type tersirat
async function getAllProjects() {
  return projects
}

// ✅ Gunakan — return type eksplisit
async function getAllProjects(): Promise<Project[]> {
  return projects
}
```

### Interface untuk object shapes, type untuk unions

```typescript
// ✅ Interface untuk object
interface ProjectCardProps {
  title: string
  slug: string
  category: ProjectCategory
}

// ✅ Type untuk union
type ProjectCategory = 'analytics' | 'marketing' | 'web' | 'ai'
type ProjectStatus = 'completed' | 'in-progress' | 'archived'
```

### Semua types di `/src/types/` — tidak inline di komponen

```typescript
// ❌ Hindari
const Component = ({ title }: { title: string; slug: string }) => { ... }

// ✅ Gunakan
import { ProjectCardProps } from '@/types'
const Component = ({ title, slug }: ProjectCardProps) => { ... }
```

---

## 2. Component Rules

### Satu komponen per file, nama file = nama komponen

```
✅ Button.tsx         → export default function Button()
✅ ProjectCard.tsx    → export default function ProjectCard()
❌ button.tsx         → salah naming
❌ components.tsx     → jangan gabung banyak komponen
```

### Gunakan function declaration, bukan arrow function untuk komponen utama

```typescript
// ❌ Hindari untuk komponen utama
const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>
}

// ✅ Gunakan
export default function Button({ children }: ButtonProps) {
  return <button>{children}</button>
}
```

**Mengapa:** Function declarations lebih mudah di-debug (nama muncul di stack trace) dan lebih jelas sebagai komponen utama vs helper function.

### Props destructuring di parameter, tidak di body

```typescript
// ❌ Hindari
function Card(props: CardProps) {
  const { title, description } = props
  return ...
}

// ✅ Gunakan
function Card({ title, description }: CardProps) {
  return ...
}
```

### Default exports untuk komponen, named exports untuk utilities

```typescript
// Komponen — default export
export default function Button() { ... }

// Utility function — named export
export function cn(...classes: string[]) { ... }
export function formatDate(date: string) { ... }
```

---

## 3. Styling Rules

### Tidak ada hardcoded color, spacing, atau font di luar design system

```typescript
// ❌ Hindari — hardcoded values
<div className="bg-[#1a1a1a] p-[18px] text-[#ededed]">

// ✅ Gunakan — design system tokens
<div className="bg-bg-surface p-6 text-text-primary">
```

### Gunakan `cn()` utility untuk conditional classes

```typescript
// ❌ Hindari — string concatenation
<button className={`btn ${isActive ? 'btn-active' : ''} ${disabled ? 'btn-disabled' : ''}`}>

// ✅ Gunakan — cn() utility
<button className={cn(
  'base-button-classes',
  isActive && 'btn-active',
  disabled && 'btn-disabled'
)}>
```

### Urutan Tailwind classes yang konsisten

Ikuti urutan:
```
1. Layout (display, position, flex, grid)
2. Sizing (w, h, max-w, min-h)
3. Spacing (m, p)
4. Typography (font, text, leading, tracking)
5. Colors (bg, text, border)
6. Effects (shadow, opacity, transition)
7. Responsive modifiers (md:, lg:)
8. State modifiers (hover:, focus:, dark:)
```

**Tools:** Gunakan `prettier-plugin-tailwindcss` untuk auto-sort.

### Tidak ada inline styles kecuali untuk dynamic values

```typescript
// ❌ Hindari — static value sebagai inline style
<div style={{ padding: '16px', color: '#ededed' }}>

// ✅ Boleh — hanya untuk truly dynamic values
<div style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}>
```

---

## 4. Naming Rules

### Komponen: PascalCase

```typescript
✅ ProjectCard, AnimatedSection, SectionLabel
❌ projectCard, project-card, projectcard
```

### Functions & variables: camelCase

```typescript
✅ getAllProjects, formatDate, isLoading, projectSlug
❌ GetAllProjects, format_date, IsLoading
```

### Constants: SCREAMING_SNAKE_CASE

```typescript
✅ MAX_FEATURED_PROJECTS, DEFAULT_CATEGORY, SITE_URL
❌ maxFeaturedProjects, defaultCategory
```

### Files: sesuai kontennya

```
Komponen:     PascalCase.tsx    → Button.tsx
Utilities:    camelCase.ts      → mdx.ts, utils.ts
Types:        camelCase.ts      → project.ts
Config:       kebab-case.js     → tailwind.config.js
Content:      kebab-case        → ga4-dashboard/
```

### Boolean props/variables: prefix `is`, `has`, `should`, `can`

```typescript
✅ isLoading, hasError, shouldAnimate, canSubmit, isFeatured
❌ loading, error, animate, submit, featured
```

---

## 5. Accessibility Rules

Accessibility bukan opsional. Portfolio ini harus bisa diakses semua orang.

### Setiap image wajib punya alt text yang deskriptif

```typescript
// ❌ Hindari
<Image src={thumbnail} alt="" />
<Image src={thumbnail} alt="image" />

// ✅ Gunakan
<Image src={thumbnail} alt="Screenshot of GA4 dashboard showing traffic overview" />
```

### Interactive elements harus bisa diakses via keyboard

```typescript
// ❌ Hindari — div sebagai button
<div onClick={handleClick}>Click me</div>

// ✅ Gunakan — semantic HTML
<button onClick={handleClick}>Click me</button>

// ✅ Atau dengan role (jika harus div)
<div role="button" tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDown}>
```

### Form inputs harus punya label yang terhubung

```typescript
// ❌ Hindari — placeholder bukan pengganti label
<input placeholder="Your name" />

// ✅ Gunakan
<label htmlFor="name">Your Name</label>
<input id="name" name="name" placeholder="What should I call you?" />
```

### Focus states harus visible

```css
/* Jangan pernah */
* { outline: none; }
button:focus { outline: none; }

/* Gunakan custom focus style jika perlu */
button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Heading hierarchy harus benar

```
Setiap halaman: satu H1
H2 untuk section utama
H3 untuk sub-section atau card titles
Tidak ada lompatan (H1 langsung ke H3)
```

### `prefers-reduced-motion` wajib dihormati

```typescript
// Di AnimatedSection component
const { reducedMotion } = useReducedMotion()

const variants = {
  hidden: reducedMotion ? {} : { opacity: 0, y: 20 },
  visible: reducedMotion ? {} : { opacity: 1, y: 0 },
}
```

### Color contrast minimum WCAG AA

```
Normal text:   4.5:1 contrast ratio minimum
Large text:    3:1 contrast ratio minimum
UI components: 3:1 contrast ratio minimum
```

---

## 6. Performance Rules

### Gunakan Next.js `<Image>` untuk semua gambar

```typescript
// ❌ Hindari
<img src="/images/thumbnail.jpg" alt="..." />

// ✅ Gunakan
import Image from 'next/image'
<Image src="/images/thumbnail.jpg" alt="..." width={800} height={450} />
```

### Lazy load komponen yang berat

```typescript
// ❌ Hindari — import langsung untuk komponen berat
import HeavyAnimationComponent from '@/components/HeavyAnimationComponent'

// ✅ Gunakan dynamic import
const HeavyAnimationComponent = dynamic(
  () => import('@/components/HeavyAnimationComponent'),
  { ssr: false }
)
```

### Tidak ada `console.log` di production code

```typescript
// ❌ Hindari di final code
console.log('Debug:', data)

// ✅ Gunakan untuk development saja, hapus sebelum commit
// Atau gunakan ESLint rule: "no-console": "warn"
```

### External links harus membuka tab baru + rel security

```typescript
// ✅ Selalu untuk external links
<a href="https://linkedin.com/in/..." target="_blank" rel="noopener noreferrer">
  LinkedIn
</a>
```

---

## 7. SEO Rules

### Setiap halaman harus punya unique title dan description

```typescript
// Di setiap page.tsx
export const metadata: Metadata = {
  title: 'Projects — Danu Indra Ismawan',
  description: 'Case studies in digital marketing, analytics, and web development.',
}
```

### Gunakan semantic HTML tags

```
<header>    → untuk Navbar dan page header
<main>      → untuk konten utama halaman
<footer>    → untuk Footer
<nav>       → untuk navigation
<article>   → untuk project case study content
<section>   → untuk major sections dalam halaman
<aside>     → untuk sidebar
<time>      → untuk tanggal (dengan datetime attribute)
```

### Structured data untuk project pages (opsional tapi dianjurkan)

```typescript
// Di /projects/[slug]/page.tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: project.title,
  datePublished: project.date,
  author: { '@type': 'Person', name: 'Danu Indra Ismawan' },
}
```

---

## 8. Git Rules

### Commit message format: Conventional Commits

```
feat:     Fitur baru
fix:      Bug fix
content:  Tambah atau update konten (project, journey, dll)
style:    Perubahan styling — tidak ada logic change
refactor: Code refactoring
docs:     Update dokumentasi
chore:    Dependency update, config change
```

**Contoh commit messages yang baik:**
```
✅ feat: add ProjectFilter component with URL sync
✅ content: add ga4-dashboard project case study
✅ fix: correct mobile layout on contact page
✅ style: update hero section spacing for mobile
✅ chore: update Next.js to 14.2.5

❌ update stuff
❌ fix bug
❌ wip
```

### Commit kecil dan focused

```
✅ Satu commit = satu perubahan logis
❌ Jangan commit "added navbar, fixed footer, updated about page, new project"
```

### Selalu pull sebelum push

```bash
git pull origin main
# resolve conflicts jika ada
git push origin main
```

---

## 9. Code Review Checklist (Self-Review)

Sebelum commit apapun, pastikan:

```
TypeScript:
[ ] Tidak ada `any` types
[ ] Semua props punya interface yang didefinisikan
[ ] Return types eksplisit untuk fungsi publik

Styling:
[ ] Tidak ada hardcoded colors atau spacing
[ ] Classes menggunakan design system tokens
[ ] Responsive sudah dicek di mobile dan desktop

Accessibility:
[ ] Semua images punya alt text
[ ] Interactive elements bisa di-tab
[ ] Heading hierarchy benar
[ ] Color contrast adequate

Performance:
[ ] Semua images menggunakan Next.js Image
[ ] Tidak ada console.log tersisa
[ ] External links punya rel="noopener noreferrer"

Content (jika ada):
[ ] Tidak ada typo atau placeholder text
[ ] MDX frontmatter lengkap
[ ] Publishing checklist dari 13-project-template.md dilakukan
```

---

## 10. Server vs Client Component Rules

Next.js App Router memperkenalkan split fundamental antara Server dan Client Components.
Salah menggunakannya menghasilkan error yang sulit di-debug. Lihat `25-technical-review.md` Issue 5.

### Aturan Dasar

```
Default: Server Component.
Tambahkan 'use client' HANYA jika diperlukan.
```

### Kapan tambahkan `'use client'`

```typescript
// Tambahkan 'use client' jika komponen menggunakan:

✅ React hooks (useState, useEffect, useRef, useContext, useReducer)
✅ Browser APIs (window, document, localStorage, navigator)
✅ Framer Motion animations (motion.div, AnimatePresence, useAnimation)
✅ Event handlers interaktif (onClick, onChange, onSubmit) — selain <Link> dan <form>
✅ next/navigation hooks (useRouter, usePathname, useSearchParams)
✅ Realtime data atau subscriptions

// Contoh:
'use client'

import { useState } from 'react'
export default function ProjectFilter({ ... }) {
  const [active, setActive] = useState('all')
  // ...
}
```

### Kapan TETAP Server Component (tidak perlu `'use client'`)

```typescript
// Tidak perlu 'use client' jika komponen:

✅ Hanya render static markup
✅ Fetch data langsung (gunakan async/await di Server Component)
✅ Import dari src/data/ atau content/
✅ Hanya menerima props dan merender JSX

// Contoh — ini harus Server Component:
// Hero.tsx, AboutSummary.tsx, Skills.tsx, ProjectCard.tsx,
// Footer.tsx, Container.tsx, SectionLabel.tsx, Badge.tsx, Tag.tsx
```

### Komponen yang WAJIB `'use client'` di proyek ini

Berdasarkan `10-components.md`:

| Komponen | Alasan |
|---|---|
| `Navbar` | Scroll event listener, mobile menu state |
| `MobileMenu` | useState untuk open/close |
| `ProjectFilter` | useState + useSearchParams untuk URL sync |
| `AnimatedSection` | Framer Motion whileInView |
| `ProjectMetric` | Count-up animation (Framer Motion) |
| `StatusBadge` | Pulse animation |
| `Button` | Jika ada onClick handler (tidak jika hanya `href`) |

### Aturan Boundary

```typescript
// ✅ Server Component bisa import Server atau Client Component
// ✅ Client Component bisa import Client Component lain
// ❌ Client Component TIDAK BISA import Server Component

// Pattern yang benar: pass Server Component sebagai children ke Client Component
// ClientWrapper.tsx ('use client')
export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return <div>{children}</div>  // children bisa berupa Server Component
}
```

### Server Actions — Bukan Client, Bukan Server Component

```typescript
// Server Actions adalah fungsi async yang berjalan di server,
// tapi bisa dipanggil dari Client Component (form action)

// src/app/actions/contact.ts
'use server'  // ← directive khusus, bukan 'use client'

export async function sendContactEmail(formData: FormData) {
  // kode ini berjalan di server, bukan di browser
}
```

---

1. **Function declaration untuk komponen, bukan arrow function** — function declarations muncul di stack trace dengan nama yang jelas, lebih mudah debug. Arrow functions di body file adalah untuk helper functions yang bukan komponen utama.

2. **Tidak ada `any` tanpa exception** — TypeScript tanpa disiplin ini tidak memberikan value. Jika ada type yang kompleks, invest waktu untuk mendefinisikannya dengan benar. Ini investasi yang payback-nya terasa saat refactoring 6 bulan kemudian.

3. **Accessibility sebagai requirement, bukan afterthought** — alt text, focus states, keyboard navigation bukan opsional. Portfolio yang tidak accessible adalah ironi — jika Danu akan bekerja di digital marketing, website pribadinya harus mencerminkan standar yang sama.

4. **Conventional Commits** — solo developer sering skip ini karena "tidak ada yang lihat." Tapi git history adalah dokumentasi. `git log --oneline` yang bersih adalah aset saat debug di masa depan.

6. **Server vs Client Component split didokumentasikan eksplisit** — tanpa panduan ini, developer cenderung menambahkan `'use client'` ke semua komponen "agar aman" dan kehilangan semua benefit Server Components. Atau sebaliknya, lupa menambahkannya dan mendapat error yang membingungkan. Lihat `25-technical-review.md` Issue 5.

---

## Design Rationale

- **Rules ini dirancang untuk not block productivity** — tidak ada rule yang membutuhkan waktu lebih dari 30 detik untuk diikuti. Rules yang terlalu ketat untuk solo developer akan diabaikan.
- **ESLint dan Prettier mengotomasi sebagian besar rules ini** — ide-nya adalah: rules yang bisa di-enforce oleh tools, serahkan ke tools. Rules di dokumen ini adalah yang butuh judgment manusia.

---

## Risks

- **Rules bisa dilanggar karena deadline atau fatigue** — terutama accessibility rules yang butuh effort lebih. Mitigasi: pasang ESLint plugin `eslint-plugin-jsx-a11y` untuk catch accessibility issues otomatis.
- **Conventional Commits bisa terasa berlebihan untuk solo project** — tapi value-nya terasa di bulan ke-6 saat debugging. Commit "wip" tidak memberi informasi apapun.
- **TypeScript strict mode bisa memperlambat di awal** — terutama saat belajar pattern baru. Mitigasi: mulai dengan `strict: false` di `tsconfig.json`, aktifkan secara bertahap setelah comfortable.

---

## Future Improvements

- [ ] Setup `eslint-plugin-jsx-a11y` untuk auto-catch accessibility violations
- [ ] Tambahkan `prettier-plugin-tailwindcss` untuk auto-sort Tailwind classes
- [ ] Pertimbangkan `Husky` pre-commit hook yang menjalankan ESLint + TypeScript check otomatis
- [ ] Tambahkan Lighthouse CI di GitHub Actions untuk auto-check performance dan accessibility
- [ ] Review dan update coding rules setiap 6 bulan — aturan yang tidak diikuti perlu dievaluasi

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| `09-design-system.md` | Design tokens yang digunakan dalam styling rules berasal dari design system |
| `10-components.md` | Component naming dan props interface mengikuti conventions yang sudah ditetapkan |
| `14-tech-stack.md` | TypeScript, ESLint, Prettier, Husky adalah tools yang mendukung enforcement coding rules |
| `15-folder-structure.md` | Naming conventions untuk files dan folders konsisten dengan folder structure |
| `19-quality-checklist.md` | Self-review checklist di dokumen ini menjadi bagian dari QA checklist keseluruhan |
