# 14 — Tech Stack

> Last updated: August 2026
> Status: Active — updated post design review (August 2026)

---

## Overview

Setiap keputusan tech stack di dokumen ini dijustifikasi berdasarkan tiga kriteria:

1. **Fit dengan Living Portfolio** — apakah teknologi ini mendukung scalability jangka panjang?
2. **Solo maintainability** — apakah Danu bisa maintain ini sendiri selama bertahun-tahun?
3. **Right-sizing** — apakah ini solusi yang tepat, bukan over-engineered untuk kebutuhannya?

Filosofi:
> Pilih teknologi yang akan masih relevan dalam 3 tahun, bukan yang sedang trending minggu ini.

---

## Stack Overview

```
Framework:       Next.js 14+ (App Router)
Language:        TypeScript
Styling:         Tailwind CSS
Animation:       Framer Motion
Content:         MDX (Markdown + JSX)
Email:           Resend (contact form)
Deployment:      Vercel
Analytics:       Google Analytics 4 + Vercel Analytics
SEO:             Next.js built-in + next-sitemap
Performance:     Next.js Image, font optimization built-in
```

---

## Core Technologies

### Next.js 14+ (App Router)

**Mengapa Next.js:**
- **SSG + SSR hybrid** — halaman statis (About, Projects) di-render saat build, halaman dinamis di-render saat request. Ini memberikan performa terbaik untuk portfolio.
- **File-based routing** — struktur folder = struktur URL. `/app/projects/[slug]/page.tsx` langsung menjadi `/projects/ga4-dashboard`. Tidak perlu konfigurasi routing tambahan.
- **Built-in Image optimization** — `<Image>` component otomatis compress, resize, dan lazy load gambar. Penting untuk Core Web Vitals.
- **Built-in font optimization** — Google Fonts di-load tanpa layout shift (CLS = 0).
- **SEO-ready out of the box** — metadata API di App Router sangat clean dan type-safe.
- **Ekosistem terbesar** — jika ada masalah, solusinya ada di Stack Overflow atau dokumentasi.

**Mengapa App Router, bukan Pages Router:**
App Router adalah arah resmi Next.js ke depan. Pages Router masih didukung tapi tidak akan dapat fitur baru. Investasi ke App Router sekarang berarti tidak perlu migrasi di V2 atau V3.

**Versi:** Gunakan versi LTS terbaru saat memulai development.

---

### TypeScript

**Mengapa TypeScript:**
- **Type safety untuk project data** — interface `Project`, `JourneyEntry`, dll. yang sudah didefinisikan di `13-project-template.md` dan `10-components.md` bisa langsung diimplementasikan.
- **Autocomplete di IDE** — saat menambahkan project baru, TypeScript akan mengingatkan jika ada field yang kurang atau salah tipe.
- **Refactoring yang aman** — saat struktur data berubah di masa depan, TypeScript menunjukkan semua tempat yang perlu diupdate.
- **Self-documenting code** — interface types adalah dokumentasi yang selalu up-to-date.

**Tradeoff:** Sedikit lebih verbose di awal. Worth it untuk project yang akan di-maintain bertahun-tahun.

---

### Tailwind CSS

**Mengapa Tailwind:**
- **Design system yang sudah didefinisikan** — semua token dari `09-design-system.md` bisa langsung dikonfigurasi di `tailwind.config.js`. Tidak perlu custom CSS untuk design tokens.
- **No unused CSS** — Tailwind hanya include class yang digunakan. Bundle size minimal.
- **Consistency enforcement** — susah untuk keluar dari design system karena semua nilai sudah terdefinisi di config.
- **Co-location** — styling ada di component yang sama dengan markup. Tidak perlu berpindah file untuk styling.
- **Responsive sudah built-in** — `md:grid-cols-2 lg:grid-cols-3` langsung berfungsi.

**Tradeoff:** JSX bisa terasa verbose dengan banyak class. Mitigasi: gunakan `cn()` utility dan component abstraction.

**Plugin yang digunakan:**
```
@tailwindcss/typography    ← untuk rendering MDX content (blog, project body)
```

---

### Framer Motion

**Mengapa Framer Motion:**
- **Deklaratif** — animasi dideskripsikan sebagai state, bukan imperative code.
- **`whileInView`** — animasi saat element masuk viewport tanpa setup IntersectionObserver manual.
- **`AnimatePresence`** — page transitions yang smooth tanpa boilerplate.
- **`prefers-reduced-motion`** — Framer Motion respects `useReducedMotion` hook secara native.
- **Cocok dengan React mental model** — tidak perlu belajar paradigma baru.

**Aturan penggunaan:**
- Hanya untuk animasi yang *tidak bisa* dilakukan dengan CSS transition
- CSS transition untuk hover states — Framer Motion untuk scroll-triggered dan page transitions
- Jangan animasi lebih dari 5 element secara bersamaan di satu view

---

### MDX (Markdown + JSX)

**Mengapa MDX untuk content:**
- **Project content sebagai file** — setiap project adalah file `.mdx` di `/content/projects/`. Tidak perlu database, tidak perlu CMS.
- **Rich content** — bisa embed komponen React di dalam Markdown. Metric cards, image galleries, code blocks semua bisa digunakan langsung di konten.
- **Git-tracked** — setiap perubahan konten ada di git history. Rollback mudah.
- **Future-proof** — jika suatu hari pindah ke CMS, konten MDX mudah dimigrasi.

**Library:** `next-mdx-remote` atau `@next/mdx` (pilih saat setup berdasarkan kebutuhan aktual).

**Frontmatter:** Semua metadata project (title, date, tools, dll.) disimpan sebagai YAML frontmatter di atas file MDX. Lihat `13-project-template.md` untuk interface lengkap.

```mdx
---
title: "Google Analytics 4 Dashboard"
category: "analytics"
date: "2026-07"
tools: ["GA4", "Looker Studio"]
featured: true
---

## Overview

Built a centralized dashboard...
```

**Error Handling Strategy:**

MDX parsing bisa gagal dengan tiga cara: malformed frontmatter, invalid MDX syntax, atau missing images. Tanpa error handling, satu broken file crash seluruh `/projects` page.

Gunakan `Promise.allSettled` — bukan `Promise.all` — agar satu broken file tidak crash halaman:

```typescript
// src/lib/mdx.ts
export async function getAllProjects(): Promise<ProjectFrontmatter[]> {
  try {
    const slugs = getProjectSlugs() // baca semua folder di content/projects/
    const results = await Promise.allSettled(
      slugs.map(slug => getProjectFrontmatter(slug))
    )

    // Log failures without crashing — broken MDX is skipped, not fatal
    results
      .filter(r => r.status === 'rejected')
      .forEach(r => console.error('Failed to parse project:', r))

    return results
      .filter((r): r is PromiseFulfilledResult<ProjectFrontmatter> =>
        r.status === 'fulfilled'
      )
      .map(r => r.value)
  } catch (error) {
    console.error('Failed to load projects:', error)
    return [] // empty state — better than crash
  }
}
```

> Lihat `25-technical-review.md` Issue 6 untuk konteks lengkap.

---

## Deployment & Infrastructure

### Vercel

**Mengapa Vercel:**
- **Zero-config deployment untuk Next.js** — push ke GitHub = auto deploy. Tidak perlu konfigurasi server.
- **Preview deployments** — setiap pull request dapat URL preview unik. Memudahkan review sebelum merge ke production.
- **Edge network** — website di-serve dari CDN global. Latency rendah untuk pengunjung dari mana saja.
- **Free tier yang generous** — lebih dari cukup untuk personal portfolio.
- **Analytics built-in** — Vercel Analytics memberikan lightweight page view tracking tanpa script tambahan.
- **Domain management** — custom domain setup sangat mudah.

**Tradeoff:** Vendor lock-in ke Vercel/Next.js ecosystem. Acceptable untuk personal portfolio — bukan enterprise critical system.

---

### Google Analytics 4

**Mengapa GA4:**
- **Sekaligus project showcase** — menggunakan GA4 di website sendiri adalah demonstrasi langsung kemampuan yang diklaim. Hiring manager yang tech-savvy akan appreciate ini.
- **Event-based model** — lebih fleksibel dari Universal Analytics untuk melacak interaksi spesifik.
- **Free** — tidak ada biaya untuk personal website traffic.
- **Looker Studio integration** — data GA4 bisa langsung di-visualize di Looker Studio sebagai project showcase terpisah.

**Yang akan dilacak:**
```
Page views per halaman
Session duration
Scroll depth di project pages
Click-through rate ke /projects dari Home
Contact form submissions
External link clicks (LinkedIn, GitHub)
```

---

### Resend (Contact Form Email)

**Mengapa Resend:**
- **Production-ready email API** — bukan no-code form service dengan submission limits
- **Next.js Server Actions native support** — integrasi bersih dengan App Router pattern
- **Free tier generous** — 3,000 emails/bulan, lebih dari cukup untuk personal portfolio
- **Sekaligus portfolio signal** — menggunakan Server Action + Resend adalah talking point teknis yang konkret dalam interview
- **Simple SDK** — `await resend.emails.send({...})` — tidak ada boilerplate

**Cara kerja:**
```typescript
// src/app/actions/contact.ts — Server Action
'use server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  await resend.emails.send({
    from: 'Portfolio Contact <noreply@danuindra.com>',
    to: 'danu@email.com',
    subject: `New message from ${name}`,
    text: `From: ${name} (${email})\n\n${message}`,
  })
}
```

**Environment variable yang dibutuhkan:**
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

> Lihat `20-deployment.md` untuk setup lengkap dan cara mendapatkan API key.

---

### ESLint + Prettier

**Config:**
```json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "rules": {
    "no-unused-vars": "error",
    "no-console": "warn"
  }
}
```

**Mengapa keduanya:**
- ESLint: menangkap error logika dan best practice violations
- Prettier: formatting yang konsisten tanpa debat "tabs vs spaces"
- Keduanya dijalankan otomatis saat save (via VS Code settings)

---

### Husky + lint-staged

**Mengapa:**
- Pre-commit hook: ESLint + TypeScript check dijalankan sebelum setiap commit
- Mencegah broken code masuk ke repository
- Penting untuk project solo jangka panjang — tidak ada code reviewer, jadi tools harus jadi safety net

---

## Dependency Philosophy

```
Prinsip pemilihan dependency:

1. Coba tanpa library dulu
   → Jika bisa dengan 10 baris vanilla code, tidak perlu install library

2. Pilih library yang well-maintained
   → Cek: last commit, open issues, weekly downloads, TypeScript support

3. Hindari library yang hanya untuk satu trick
   → Satu library untuk satu animasi kecil tidak worth the bundle size

4. Pin exact versions di production
   → "^1.2.3" bisa auto-update ke versi yang breaking. Gunakan "1.2.3"
```

**Minimal dependencies philosophy:**
```
✅ Perlu:     next, react, typescript, tailwindcss, framer-motion
✅ Perlu:     next-mdx-remote, @tailwindcss/typography
✅ Perlu:     resend (contact form email)
✅ Perlu:     eslint, prettier, husky
⚠️  Evaluate: clsx/cn utility (bisa buat sendiri)
❌ Hindari:   UI component libraries (shadcn boleh, tapi selektif)
❌ Hindari:   State management library (React state cukup untuk portfolio)
❌ Hindari:   Date library besar (Intl API sudah cukup)
```

---

## Version Targets

```
Node.js:      20 LTS (atau versi LTS terbaru)
Next.js:      14+ (App Router)
React:        18+
TypeScript:   5+
Tailwind CSS: 3.4+
Framer Motion: 11+
```

---

## What We're NOT Using (and Why)

| Teknologi | Alasan Tidak Digunakan |
|---|---|
| CMS (Contentful, Sanity) | Overkill untuk konten yang dikelola sendiri. MDX files sudah cukup. |
| Database (Prisma, Supabase) | Tidak ada user data atau dynamic content yang membutuhkan database. |
| Redux / Zustand | State management terpusat tidak diperlukan — React state sudah cukup. |
| GraphQL | Tidak ada API kompleks yang membutuhkan query language. |
| Webpack custom config | Next.js mengelola ini. Custom config hanya untuk kebutuhan sangat spesifik. |
| CSS-in-JS (styled-components) | Tailwind sudah cukup. CSS-in-JS menambah runtime overhead. |
| Docker | Tidak perlu untuk deployment ke Vercel. |

---

## Key Decisions

1. **Next.js App Router bukan Pages Router** — ini investasi ke masa depan. Pages Router masih bekerja tapi App Router adalah arah resmi. Migrasi kemudian lebih mahal daripada belajar App Router sekarang.

2. **MDX untuk content, bukan CMS** — untuk portfolio personal yang dikelola satu orang, CMS adalah over-engineering. MDX files di git adalah solusi yang lebih sederhana, lebih cepat, dan lebih mudah di-version control.

3. **Framer Motion untuk animasi, CSS untuk hover** — pemisahan yang jelas antara dua tools. Framer Motion hanya untuk animasi yang benar-benar butuh JavaScript (scroll-triggered, page transitions). CSS transition untuk semua hover state.

4. **GA4 sebagai showcase sekaligus analytics** — ini keputusan strategis yang mendukung Living Portfolio concept. Menggunakan GA4 di website sendiri adalah bukti langsung kemampuan yang diklaim di portfolio.

5. **No UI component library** — membangun komponen dari scratch dengan Tailwind menghasilkan bundle yang lebih kecil, kontrol penuh atas desain, dan bukti kemampuan front-end yang lebih kuat.

6. **Resend + Server Action untuk contact form** — production-ready, free, idiomatic App Router pattern. Menjadi portfolio talking point sekaligus fungsional. Lihat `25-technical-review.md` Issue 3.

---

## Design Rationale

- **Stack ini adalah sweet spot antara capability dan maintainability** — cukup powerful untuk membangun website yang sophisticated, tapi tidak membutuhkan tim atau DevOps untuk di-maintain.
- **Semua pilihan adalah industry standard** — Next.js, TypeScript, Tailwind adalah stack yang digunakan perusahaan besar. Ini juga berfungsi sebagai signal kemampuan teknis kepada hiring manager.

---

## Risks

- **Next.js App Router masih relatif baru** — beberapa pattern belum settled, dokumentasi masih berkembang. Mitigasi: ikuti dokumentasi resmi, hindari experimental features untuk V1.
- **TypeScript learning curve** — jika belum familiar dengan TypeScript, akan ada friction di awal. Mitigasi: mulai dengan konfigurasi yang tidak terlalu strict, tingkatkan secara bertahap.
- **Framer Motion bundle size** — Framer Motion menambahkan ~45kb ke bundle. Mitigasi: gunakan dynamic imports untuk komponen yang berat animasinya.
- **MDX maintenance jangka panjang** — jika ada 50+ project, mengelola file MDX bisa terasa manual. Mitigasi: pertimbangkan headless CMS di V3 jika project sudah sangat banyak.

---

## Future Improvements

- [ ] Evaluasi **Contentlayer** sebagai type-safe MDX processing layer jika jumlah konten bertambah signifikan
- [ ] Tambahkan **next-sitemap** untuk auto-generate sitemap.xml saat project baru ditambahkan
- [ ] Pertimbangkan **Playwright** untuk end-to-end testing di V2 — terutama untuk contact form
- [ ] Eksplorasi **React Server Components** lebih dalam saat pattern sudah mature di ekosistem
- [ ] Evaluasi migrasi ke headless CMS (Sanity atau Contentful) di V3 jika konten sudah 50+ items

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| `09-design-system.md` | Tailwind config mengimplementasikan semua design tokens yang sudah ditetapkan |
| `13-project-template.md` | MDX frontmatter schema harus sesuai dengan TypeScript interface Project yang sudah didefinisikan |
| `15-folder-structure.md` | Struktur folder Next.js App Router harus sesuai dengan sitemap dari IA |
| `16-coding-rules.md` | TypeScript strict settings dan ESLint config didefinisikan di coding rules |
| `20-deployment.md` | Vercel sebagai deployment target menentukan cara setup environment variables dan domain |
