# 18 — Prompt Library

> Last updated: August 2026
> Status: Active — tambah prompt baru saat menemukan pattern yang berulang

---

## Overview

Prompt library ini berisi template prompt yang sudah dioptimalkan untuk task-task
yang akan sering dilakukan selama development dan maintenance Living Portfolio.

Cara menggunakan:
1. Temukan prompt yang sesuai dengan task
2. Copy template
3. Isi bagian `[dalam kurung siku]` dengan detail spesifik
4. Paste ke Kiro

Setiap prompt sudah meng-embed konteks proyek yang diperlukan sehingga tidak perlu
briefing ulang dari nol.

---

## MASTER CONTEXT PROMPT

Gunakan prompt ini di awal sesi kerja baru untuk memastikan Kiro memahami konteks penuh:

```
Kita sedang mengerjakan Living Portfolio Danu Indra Ismawan.

Konteks proyek:
- Website: Personal Living Portfolio — "A website that grows together with my career"
- Owner: Danu Indra Ismawan — Digital Marketer & Analyst, entry level
- Stack: Next.js 14+ (App Router) / TypeScript / Tailwind CSS / Framer Motion / MDX
- Design: Dark-first, typography-led, content-focused. Accent color: #6366F1 (Indigo)
- Principles: Scalability > features, content > visual effects, accessibility required

Dokumen referensi yang sudah ada di docs/:
- 01-product-vision.md       → Why, Mission, Vision
- 02-personal-branding.md    → Tone, positioning, personality
- 08-design-direction.md     → Visual language
- 09-design-system.md        → Colors, typography, spacing tokens
- 10-components.md           → Component interfaces
- 11-copywriting.md          → All website copy
- 13-project-template.md     → Project structure template
- 15-folder-structure.md     → Where files go
- 16-coding-rules.md         → Code standards
- 17-kiro-rules.md           → How Kiro should work

Hari ini kita akan mengerjakan: [DESKRIPSIKAN TASK]
```

---

## CATEGORY 1 — Component Prompts

### 1.1 — Buat Komponen Baru

```
Buat komponen [NamaKomponen] untuk Living Portfolio Danu.

Referensi:
- Interface yang dibutuhkan ada di docs/10-components.md section [NamaKomponen]
- Design tokens dari docs/09-design-system.md
- Coding rules dari docs/16-coding-rules.md

Requirements:
- TypeScript dengan interface yang lengkap (tidak ada `any`)
- Tailwind classes menggunakan design system tokens (bg-bg-surface, text-text-primary, dll)
- Accessibility: aria labels, semantic HTML, keyboard navigation
- Responsive: mobile-first dengan breakpoints md: dan lg:
- Animation: Framer Motion dengan prefers-reduced-motion support
- File location: src/components/[kategori]/[NamaKomponen]/[NamaKomponen].tsx

Context tambahan: [tambahkan detail spesifik jika perlu]
```

### 1.2 — Update Komponen yang Sudah Ada

```
Update komponen [NamaKomponen] di src/components/[path].

Perubahan yang dibutuhkan:
[DESKRIPSIKAN PERUBAHAN]

Yang tidak boleh berubah:
- Interface/props yang sudah ada (backward compatible)
- Design tokens yang sudah digunakan
- Accessibility attributes yang sudah ada

Baca file yang ada dulu sebelum mengubah apapun.
```

### 1.3 — Buat UI Component (Button, Badge, Tag)

```
Buat komponen UI [NamaKomponen] untuk Living Portfolio.

Design specs dari docs/09-design-system.md:
- Background: bg-bg-surface atau bg-bg-elevated untuk hover
- Border: border-border-subtle
- Text: text-text-primary (primary) / text-text-secondary (secondary)
- Accent: text-accent / bg-accent untuk highlighted state
- Radius: rounded-lg (12px) untuk cards, rounded-md (8px) untuk buttons
- Transition: duration-[250ms] ease-default

Variants yang dibutuhkan: [LIST VARIANTS]
Sizes yang dibutuhkan: [LIST SIZES — sm/md/lg]

Pastikan: hover states, focus-visible states, disabled states semua ter-handle.
```

---

## CATEGORY 2 — Page Prompts

### 2.1 — Buat Halaman Baru

```
Buat halaman [nama-halaman] untuk Living Portfolio.

Route: /[path] → file: src/app/[path]/page.tsx

Referensi:
- Wireframe ada di docs/07-wireframe.md section [Wireframe XX]
- Copy sudah ada di docs/11-copywriting.md section [NAMA SECTION]
- Components yang digunakan: [list dari docs/10-components.md]

Requirements:
- Next.js metadata untuk SEO (title dan description dari 11-copywriting.md)
- Semantic HTML structure (<main>, <section>, <article> sesuai konteks)
- Semua sections menggunakan AnimatedSection wrapper
- Mobile-responsive

Data yang dibutuhkan: [sumber data — static, MDX, atau data files]
```

### 2.2 — Buat Home Page Sections

```
Buat section [NamaSection] untuk halaman Home.

Section ini adalah bagian ke-[NOMOR] dari Home page sequence:
Hero → About Summary → Skills → Projects Highlight → Journey → Contact CTA

Copy untuk section ini dari docs/11-copywriting.md:
[PASTE COPY YANG RELEVAN]

Wireframe reference: docs/07-wireframe.md — Wireframe 01, section [NAMA]

Component yang perlu dibuat/digunakan:
- [list components]

Animation behavior:
- Fade in dari bawah saat masuk viewport
- Stagger delay [X]ms antar items jika ada multiple items
- prefers-reduced-motion: skip animation jika true
```

### 2.3 — Setup Metadata dan SEO

```
Tambahkan metadata SEO untuk halaman [nama-halaman].

Dari docs/11-copywriting.md:
Title: "[TITLE]"
Description: "[DESCRIPTION]"

Format yang digunakan (Next.js App Router):
export const metadata: Metadata = {
  title: '...',
  description: '...',
  openGraph: {
    title: '...',
    description: '...',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
}

Tambahkan juga canonical URL jika halaman ini bisa diakses dari multiple paths.
```

---

## CATEGORY 3 — Content Prompts

### 3.1 — Tambah Project Baru

```
Tambahkan project baru ke Living Portfolio.

Detail project:
- Slug: [nama-project] (lowercase, hyphen-separated)
- Title: [JUDUL PROJECT]
- Category: [analytics/marketing/web/ai]
- Date: [YYYY-MM]
- Tools: [LIST TOOLS]
- Featured: [true/false]

Buat file: content/projects/[slug]/index.mdx

Ikuti template dari docs/13-project-template.md dengan ketat.
Frontmatter harus sesuai Project TypeScript interface dari docs/13-project-template.md.

Content yang sudah ada untuk diisi:
Overview: [TEKS ATAU "Perlu ditulis bersama"]
Problem: [TEKS ATAU "Perlu ditulis bersama"]
[dst...]

Jalankan publishing checklist dari docs/13-project-template.md sebelum selesai.
```

### 3.2 — Tulis Copy untuk Project

```
Tulis konten untuk project [JUDUL PROJECT] mengikuti docs/13-project-template.md.

Context project:
- Apa yang dibangun: [DESKRIPSI]
- Tools yang digunakan: [LIST]
- Hasil utama: [HASIL]
- Timeline: [DURASI]

Tone of voice dari docs/02-personal-branding.md:
- Clear over clever
- Confident but humble
- Active voice
- Specific, bukan generic

Tulis semua 6 section: Overview, Problem, Approach, Process, Results, Learnings.
Untuk Results: gunakan hierarchy dari quantitative → qualitative → learning outcomes.
```

### 3.3 — Update Journey Timeline

```
Tambahkan entry baru ke Journey timeline.

File: content/data/journey.ts

Entry baru:
- Year: [TAHUN]
- Title: [JUDUL MILESTONE]
- Organization: [ORGANISASI — opsional]
- Description: [1-2 kalimat deskripsi]
- isCurrent: [true/false]

Guidelines:
- Deskripsi harus spesifik, bukan generic
- RevoU: jika entry ini tentang RevoU, framing sebagai "one milestone in learning path"
- Konsisten dengan entries yang sudah ada dalam tone dan length
- Tambahkan di posisi kronologis yang benar (terbaru paling bawah atau atas sesuai implementasi)

Baca file yang ada dulu sebelum mengedit.
```

### 3.4 — Update Skills List

```
Update daftar skills di content/data/skills.ts.

Perubahan:
- Tambah: [SKILL BARU] ke category [KATEGORI]
- Hapus: [SKILL] (jika tidak relevan lagi)
- Pindah: [SKILL] dari [KATEGORI A] ke [KATEGORI B]

Aturan: Hanya tambahkan skill yang benar-benar sudah dikuasai dan relevan untuk
Digital Marketing & Analytics positioning. Jangan tambahkan yang hanya "familiar with."

Baca file yang ada dulu sebelum mengedit.
```

---

## CATEGORY 4 — Styling Prompts

### 4.1 — Implement Design System ke Tailwind Config

```
Implement design tokens dari docs/09-design-system.md ke tailwind.config.js.

File: tailwind.config.js

Dokumen referensi: docs/09-design-system.md section "Tailwind Config Reference"
Baca seluruh section tersebut sebelum mengimplementasikan.

Pastikan:
- Semua color tokens (bg, text, border, accent) ter-cover
- Font family Inter dan JetBrains Mono terdaftar
- Custom border radius values sesuai design system
- Custom shadow values sesuai design system
- Custom transition duration values sesuai design system
- darkMode: 'class' untuk future light mode support
```

### 4.2 — Implement Responsive Layout

```
Implement responsive layout untuk [NamaKomponen/Halaman].

Breakpoints dari docs/09-design-system.md:
- Mobile: < 768px (default, mobile-first)
- Tablet: md: (768px+)
- Desktop: lg: (1024px+)

Behavior yang diinginkan:
- Mobile: [DESKRIPSIKAN LAYOUT]
- Tablet: [DESKRIPSIKAN LAYOUT]
- Desktop: [DESKRIPSIKAN LAYOUT]

Container max-width: 1200px dengan padding 16px mobile / 32px tablet / 40px desktop.
```

### 4.3 — Tambah Animasi

```
Tambahkan animasi Framer Motion ke [NamaKomponen].

Animation philosophy dari docs/08-design-direction.md:
- Subtle, purposeful — animasi mendukung UX bukan menjadi atraksi
- Duration: 250ms untuk standard, 400ms untuk scroll-triggered
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Selalu include prefers-reduced-motion support

Animasi yang diinginkan: [DESKRIPSIKAN]
Trigger: [on-load / on-scroll / on-hover / on-click]

Jangan gunakan: bounce, overshoot, atau animasi looping tanpa user trigger.
```

---

## CATEGORY 5 — Architecture Prompts

### 5.1 — Setup Data Fetching untuk Projects

```
Setup MDX data fetching untuk projects page.

Requirements:
- Baca semua files dari content/projects/*/index.mdx
- Parse frontmatter sesuai Project interface dari docs/13-project-template.md
- Sort by date (terbaru dulu)
- Filter by category (untuk ProjectFilter component)
- Return type: Promise<Project[]>

File location: src/lib/mdx.ts

Gunakan [next-mdx-remote atau @next/mdx — sesuai yang sudah di-setup].
Ensure proper error handling jika file tidak ada atau frontmatter tidak lengkap.
```

### 5.2 — Setup TypeScript Types

```
Tambahkan TypeScript type definitions untuk [NAMA ENTITY].

File location: src/types/[nama].ts

Interface yang dibutuhkan:
[DESKRIPSIKAN STRUKTUR DATA]

Guidelines dari docs/16-coding-rules.md:
- Gunakan interface untuk object shapes
- Gunakan type untuk union/literal types
- Export semua types
- Tambahkan ke src/types/index.ts sebagai re-export

Contoh yang sudah ada: src/types/project.ts untuk referensi pattern.
```

### 5.3 — Setup Environment Variables

```
Setup environment variables untuk [FITUR].

Variables yang dibutuhkan:
- [NAMA_VAR]: [DESKRIPSI DAN FORMAT]

Files yang perlu diupdate:
1. .env.local — tambah actual values (tidak di-commit)
2. .env.example — tambah placeholder (di-commit sebagai template)
3. src/lib/[relevan].ts — tambah usage dengan proper validation

Validasi: Throw error yang jelas saat variable tidak ada, bukan silent fail.
Prefix: Gunakan NEXT_PUBLIC_ hanya jika variable perlu diakses di browser.
```

---

## CATEGORY 6 — Navbar & Navigation

### 6.1 — Buat Navbar

```
Buat Navbar component untuk Living Portfolio.

Referensi: docs/10-components.md section Navbar
Design: docs/08-design-direction.md, docs/09-design-system.md

Specs:
- Sticky, z-index 50
- Transparent default, backdrop-blur saat scroll > 20px
- Logo/Name "Danu Indra" → links ke /
- Nav links: About → /about, Projects → /projects, Contact → /contact
- Active link indicator
- Mobile: hamburger menu (full-screen overlay)
- Skip navigation link untuk accessibility

Copy dari docs/11-copywriting.md section NAVBAR.

File: src/components/layout/Navbar/Navbar.tsx
Mobile menu: src/components/layout/Navbar/MobileMenu.tsx
```

---

## CATEGORY 7 — Hero Section

### 7.1 — Buat Hero Section

```
Buat Hero section untuk Home page Living Portfolio.

Referensi: docs/07-wireframe.md — Wireframe 01, Hero Section
Copy dari docs/11-copywriting.md section HERO SECTION:
  Greeting: "Hi, I'm"
  H1: "Danu Indra Ismawan"
  H2: "Digital Marketer & Analyst"
  Description: "I build marketing systems that are measurable, scalable, and built to last.
               Currently developing real-world projects in analytics, data visualization,
               and digital marketing strategy."
  CTA Primary: "View My Work" → /projects
  CTA Secondary: "Get in Touch" → /contact
  Status: "● Open to full-time opportunities"

Animation:
- Stagger fade-in: greeting → name → role → description → CTA
- Delay: 100ms antar elemen
- prefers-reduced-motion: skip all animations

Layout:
- Desktop: 2 kolom (content kiri, visual kanan)
- Mobile: visual atas, content bawah

File: src/components/sections/Hero/Hero.tsx
```

---

## CATEGORY 8 — Responsive & Mobile

### 8.1 — Mobile Testing Checklist Prompt

```
Review [NamaKomponen/Halaman] untuk mobile responsiveness.

Checklist yang harus diverifikasi:
[ ] Layout tidak overflow di 375px (iPhone SE)
[ ] Touch targets minimal 44×44px untuk semua interactive elements
[ ] Tidak ada hover-only interactions (mobile tidak punya hover)
[ ] Text tidak terlalu kecil (minimum 14px untuk body)
[ ] Images responsive dengan Next.js Image component
[ ] Navbar collapse ke hamburger menu
[ ] Contact: email/phone bisa di-tap langsung (tel: dan mailto: links)
[ ] Spacing tidak terlalu tight — ada breathing room

Breakpoints: Mobile < 768px, Tablet 768-1024px, Desktop > 1024px
```

---

## CATEGORY 9 — Animations

### 9.1 — Scroll-triggered Fade In

```
Tambahkan scroll-triggered fade-in animation ke [LIST SECTIONS].

Gunakan AnimatedSection wrapper component dari src/components/shared/AnimatedSection.

Pattern:
- Direction: 'up' (fade dari bawah ke atas)
- Opacity: 0 → 1
- Transform: translateY(20px) → translateY(0)
- Duration: 400ms
- Easing: ease-out

Stagger untuk list items: delay 50ms antar item.

WAJIB: prefers-reduced-motion — jika true, skip semua animation.
Test di semua breakpoints setelah implementasi.
```

---

## CATEGORY 10 — Kiro Steering Rules

Prompt ini untuk di-simpan sebagai `.kiro/steering/` file agar berlaku otomatis:

### 10.1 — Master Steering Prompt

```
Ini adalah Living Portfolio Danu Indra Ismawan.

Stack: Next.js 14+ App Router / TypeScript / Tailwind CSS / Framer Motion / MDX
Deployment: Vercel

Design System (dari docs/09-design-system.md):
- bg-base: #0D0D0D, bg-surface: #161616, bg-elevated: #1F1F1F
- text-primary: #EDEDED, text-secondary: #A0A0A0
- accent: #6366F1 (Indigo)
- Font: Inter (sans), JetBrains Mono (mono)
- Radius: sm=4px, md=8px, lg=12px

Coding Rules (wajib):
- TypeScript strict, tidak ada `any`
- Tidak ada hardcoded values — gunakan design system tokens
- Accessibility wajib: alt text, aria, keyboard navigation
- prefers-reduced-motion wajib di setiap animasi
- Conventional Commits

Content Rules:
- Tone: clear over clever, confident but humble, direct, human
- RevoU = satu milestone dalam journey, bukan identitas utama
- Copy baru harus konfirmasi dulu ke docs/11-copywriting.md

Folder Structure:
- Components: src/components/[layout|ui|sections|project|shared]/[Name]/
- Content: content/projects/[slug]/index.mdx
- Types: src/types/
- Utils: src/lib/

Semua dokumen referensi ada di docs/ folder.
Baca dokumen yang relevan sebelum mengeksekusi task apapun.
```

---

## Prompt Maintenance

### Kapan menambah prompt baru:
- Ketika menemukan task yang dilakukan lebih dari 2 kali
- Ketika ada pattern yang berulang yang butuh brief yang sama
- Ketika ada prompt yang menghasilkan output berkualitas tinggi

### Kapan mengupdate prompt yang ada:
- Ketika design system berubah (update tokens di semua prompt yang relevan)
- Ketika ada keputusan arsitektur baru
- Ketika prompt menghasilkan output yang tidak sesuai ekspektasi

### Format penambahan prompt baru:
```
### [Nomor] — [Nama Prompt Deskriptif]

[PROMPT TEMPLATE]
```

---

## Key Decisions

1. **Master Context Prompt sebagai session opener** — daripada menjelaskan konteks berulang, satu prompt yang comprehensive di awal sesi jauh lebih efisien. Ini juga memastikan konsistensi antar sesi.

2. **Prompt dikategorikan berdasarkan task type, bukan komponen** — lebih mudah ditemukan saat dibutuhkan. Developer tidak selalu ingat nama komponen, tapi selalu tahu sedang mengerjakan apa.

3. **Setiap prompt meng-embed konteks yang diperlukan** — bukan hanya instruksi. Ini mengurangi back-and-forth antara Danu dan Kiro saat memulai task.

4. **Steering prompt disertakan (Category 10)** — prompt yang bisa disimpan sebagai `.kiro/steering/` file untuk berlaku otomatis di setiap sesi tanpa perlu copy-paste manual.

5. **Prompt maintenance guidelines** — prompt library yang tidak di-maintain akan outdated dan tidak berguna. Guidelines ini memastikan library tetap relevan.

---

## Design Rationale

- **Template dengan placeholder `[dalam kurung siku]`** — langsung terlihat apa yang perlu diisi. Tidak ada ambiguitas tentang bagian mana yang generic vs spesifik per-task.
- **Copy dari docs dilampirkan langsung** — beberapa prompt meng-include copy aktual dari `11-copywriting.md`. Ini mengurangi kemungkinan Kiro menggunakan copy yang salah atau menggenerate ulang.

---

## Risks

- **Prompt bisa outdated setelah design system berubah** — warna hardcoded di beberapa prompt. Mitigasi: setiap update design system, review prompt library.
- **Terlalu panjang untuk di-copy setiap saat** — mitigasi: simpan Master Steering Prompt sebagai `.kiro/steering/portfolio-context.md` agar berlaku otomatis.
- **Prompt tidak menjamin output yang sempurna** — hanya meningkatkan konsistensi. Review output tetap diperlukan.

---

## Future Improvements

- [ ] Simpan Master Steering Prompt sebagai `.kiro/steering/portfolio-context.md` untuk auto-inclusion
- [ ] Tambahkan prompt untuk blog/article saat `/blog` diaktifkan di V2
- [ ] Tambahkan prompt untuk contact form serverless function setup
- [ ] Buat prompt untuk "monthly portfolio review" — checklist untuk review dan update berkala
- [ ] Tambahkan prompt untuk dark/light mode toggle implementation di V2

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| `17-kiro-rules.md` | Prompt library adalah implementasi praktis dari rules yang didefinisikan di sini |
| `09-design-system.md` | Design tokens di-embed langsung ke beberapa prompt |
| `10-components.md` | Component prompts merujuk ke interfaces yang sudah ditetapkan |
| `11-copywriting.md` | Copy di-embed langsung ke Hero dan section prompts |
| `13-project-template.md` | Project prompts mengikuti template yang sudah ditetapkan |
