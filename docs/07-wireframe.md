# 07 — Wireframe

> Last updated: August 2026
> Status: Active — updated post design review (August 2026)

---

## Overview

Wireframe ini mendefinisikan layout dan hierarki konten setiap halaman.

Aturan wireframe ini:
- ❌ Belum ada warna
- ❌ Belum ada gambar nyata
- ❌ Belum ada ikon
- ❌ Belum ada font final
- ✅ Hanya struktur, posisi, dan hierarki konten

Wireframe adalah kontrak antara UX strategy dan UI design.
Setiap keputusan layout di sini harus sudah mempertimbangkan user flow dari `06-user-flow.md`.

---

## Wireframe 01 — Home Page (/)

### Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      │
│  [Logo / Name]              [About]  [Projects]  [Contact]  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  HERO SECTION                                               │
│                                                             │
│  ┌─────────────────────────┐  ┌─────────────────────────┐  │
│  │                         │  │                         │  │
│  │  [Greeting — small]     │  │   [Profile Photo /      │  │
│  │                         │  │    Visual Element]      │  │
│  │  H1: Name               │  │                         │  │
│  │  H2: Role / Tagline     │  │                         │  │
│  │                         │  │                         │  │
│  │  [Short description     │  │                         │  │
│  │   1–2 sentences]        │  │                         │  │
│  │                         │  └─────────────────────────┘  │
│  │  [CTA Primary]          │                               │
│  │  [CTA Secondary]        │                               │
│  │                         │                               │
│  └─────────────────────────┘                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ABOUT SUMMARY                                              │
│                                                             │
│  [Section Label — small caps]                               │
│  H2: About                                                  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  [2–3 kalimat bio singkat]                          │   │
│  │  [Link: "Read more →"]                              │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PROJECTS HIGHLIGHT  ← moved up: proof before tools         │
│                                                             │
│  [Section Label]                                            │
│  H2: Selected Projects                                      │
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────┐          │
│  │ PROJECT CARD 1      │  │ PROJECT CARD 2      │          │
│  │ [Thumbnail Area]    │  │ [Thumbnail Area]    │          │
│  │ [Category tag]      │  │ [Category tag]      │          │
│  │ H3: Project Title   │  │ H3: Project Title   │          │
│  │ [1 sentence desc]   │  │ [1 sentence desc]   │          │
│  │ [Tools: x, y, z]    │  │ [Tools: x, y, z]    │          │
│  │ [View Case Study →] │  │ [View Case Study →] │          │
│  └─────────────────────┘  └─────────────────────┘          │
│                                                             │
│  ┌─────────────────────┐                                    │
│  │ PROJECT CARD 3      │                                    │
│  │ [Thumbnail Area]    │                                    │
│  │ [Category tag]      │                                    │
│  │ H3: Project Title   │                                    │
│  │ [1 sentence desc]   │                                    │
│  │ [Tools: x, y, z]    │                                    │
│  │ [View Case Study →] │                                    │
│  └─────────────────────┘                                    │
│                                                             │
│  [View All Projects →]                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SKILLS SUMMARY  ← moved down: supporting context           │
│                                                             │
│  [Section Label]                                            │
│  H2: Skills & Tools                                         │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Marketing &  │  │ Data &       │  │ Technical    │      │
│  │ Strategy     │  │ Visualization│  │ Skills       │      │
│  │ [tool] [tool]│  │ [tool] [tool]│  │ [tool] [tool]│      │
│  │ [tool]       │  │ [tool]       │  │ [tool]       │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                             │
│  Note: Dev frameworks (Next.js, React, TypeScript) are not  │
│  shown here. They appear in project case studies only.      │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  CONTACT / CTA                                              │
│                                                             │
│  H2: Let's Connect                                          │
│  [Supporting text — 1–2 kalimat]                            │
│                                                             │
│  [CTA Button: Get in Touch]                                 │
│  [LinkedIn]  [Email]  [GitHub]                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FOOTER                                                     │
│  © 2026 Danu Indra Ismawan    [About] [Projects] [Contact] │
└─────────────────────────────────────────────────────────────┘
```

### Mobile Layout (375px)

```
┌───────────────────────────┐
│ NAVBAR                    │
│ [Name/Logo]    [☰ Menu]   │
└───────────────────────────┘

┌───────────────────────────┐
│ HERO                      │
│                           │
│ [Visual Element — top]    │
│                           │
│ [Greeting]                │
│ H1: Name                  │
│ H2: Role / Tagline        │
│ [Description]             │
│                           │
│ [CTA Primary — full width]│
│ [CTA Secondary]           │
└───────────────────────────┘

┌───────────────────────────┐
│ ABOUT SUMMARY             │
│ H2: About                 │
│ [2–3 kalimat]             │
│ [Read more →]             │
└───────────────────────────┘

┌───────────────────────────┐
│ PROJECTS  ← moved up      │
│ H2: Selected Projects     │
│                           │
│ ┌─────────────────────┐   │
│ │ PROJECT CARD 1      │   │
│ │ [Thumbnail]         │   │
│ │ [Tag] Title         │   │
│ │ [Description]       │   │
│ │ [View →]            │   │
│ └─────────────────────┘   │
│                           │
│ ┌─────────────────────┐   │
│ │ PROJECT CARD 2      │   │
│ └─────────────────────┘   │
│                           │
│ ┌─────────────────────┐   │
│ │ PROJECT CARD 3      │   │
│ └─────────────────────┘   │
│                           │
│ [View All Projects →]     │
└───────────────────────────┘

┌───────────────────────────┐
│ SKILLS  ← moved down      │
│ H2: Skills & Tools        │
│ ┌─────────┐ ┌─────────┐  │
│ │Marketing│ │Data &   │  │
│ │& Strat. │ │Viz.     │  │
│ │[tool]   │ │[tool]   │  │
│ └─────────┘ └─────────┘  │
│ ┌─────────────────────┐   │
│ │ Technical Skills    │   │
│ │ [tool] [tool]       │   │
│ └─────────────────────┘   │
└───────────────────────────┘

┌───────────────────────────┐
│ CONTACT                   │
│ H2: Let's Connect         │
│ [Text]                    │
│ [Get in Touch — full btn] │
│ [LinkedIn] [Email]        │
└───────────────────────────┘

┌───────────────────────────┐
│ FOOTER                    │
│ © 2026 Danu Indra         │
│ [About] [Projects]        │
└───────────────────────────┘
```

---

## Wireframe 02 — About Page (/about)

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (sticky)                                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PAGE HEADER                                                │
│  H1: About Me                                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  BIO SECTION                                                │
│                                                             │
│  ┌─────────────────────────┐  ┌─────────────────────────┐  │
│  │ [Profile Photo]         │  │ H2: Full Bio            │  │
│  │                         │  │ [3–5 paragraf]          │  │
│  │ [Name]                  │  │                         │  │
│  │ [Role]                  │  │                         │  │
│  │ [Location]              │  │                         │  │
│  │ [Status Badge:          │  │                         │  │
│  │  Open to Opportunities] │  │                         │  │
│  └─────────────────────────┘  └─────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  VALUES & WORKING STYLE                                     │
│  H2: How I Work                                             │
│                                                             │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│  │ Value 1    │  │ Value 2    │  │ Value 3    │            │
│  │ [icon area]│  │ [icon area]│  │ [icon area]│            │
│  │ [Title]    │  │ [Title]    │  │ [Title]    │            │
│  │ [Desc]     │  │ [Desc]     │  │ [Desc]     │            │
│  └────────────┘  └────────────┘  └────────────┘            │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  TIMELINE — FULL                                            │
│  H2: My Journey                                             │
│                                                             │
│  [Mon YYYY]                                                 │
│  ├── ● [Milestone] — [Org/Platform]                         │
│  │      [Short description]                                 │
│  │                                                          │
│  ├── ● [Milestone] — [Org/Platform]                         │
│         [Short description]                                 │
│                                                             │
│  [Mon YYYY]                                                 │
│  └── ● [Milestone — Current]                               │
│         [Short description]                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  CTA BOTTOM                                                 │
│  "Interested in working together?"                          │
│  [Get in Touch]  [View Projects]                            │
└─────────────────────────────────────────────────────────────┘
```

> **Skills removed from /about.** Skills is covered on Home. Journey uses month-based dates (Mon YYYY) to show trajectory within a year.

---

## Wireframe 03 — Projects Index (/projects)

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (sticky)                                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PAGE HEADER                                                │
│  H1: Projects                                               │
│  [Subtitle: "A collection of real-world work..."]           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  FILTER BAR                                                 │
│  [All]  [Analytics]  [Marketing]  [Web]  [AI]               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PROJECT GRID                                               │
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────┐          │
│  │ [Thumbnail]         │  │ [Thumbnail]         │          │
│  │ [Category tag]      │  │ [Category tag]      │          │
│  │ H3: Project Title   │  │ H3: Project Title   │          │
│  │ [Description]       │  │ [Description]       │          │
│  │ [Tools]             │  │ [Tools]             │          │
│  │ [View Case Study →] │  │ [View Case Study →] │          │
│  └─────────────────────┘  └─────────────────────┘          │
│                                                             │
│  ┌─────────────────────┐  ┌─────────────────────┐          │
│  │ ...                 │  │ ...                 │          │
│  └─────────────────────┘  └─────────────────────┘          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Wireframe 04 — Project Detail (/projects/[slug])

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (sticky)                                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PROJECT HEADER                                             │
│  [← Projects]  (simple back link, no full breadcrumb)      │
│  [Category tag]  [Date]                                     │
│  H1: Project Title                                          │
│  [1–2 kalimat overview]                                     │
│                                                             │
│  [Tools: badge badge badge]                                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  HERO IMAGE / MOCKUP                                        │
│  [Full-width visual — screenshot, mockup, atau cover]       │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────┐  ┌──────────────────────────────────┐
│  SIDEBAR (sticky)    │  │  MAIN CONTENT                    │
│  Desktop only        │  │                                  │
│  (≥ 1024px)          │  │  H2: Overview                   │
│                      │  │  [Teks]                          │
│  Table of Contents:  │  │                                  │
│  · Overview          │  │  H2: Problem                    │
│  · Problem           │  │  [Teks]                          │
│  · Process           │  │                                  │
│  · Solution          │  │  H2: Process                    │
│  · Results           │  │  [Teks + visual jika ada]        │
│  · Learnings         │  │                                  │
│                      │  │  H2: Solution                   │
│  ──────────────────  │  │  [Teks + visual]                 │
│                      │  │                                  │
│  [← Back]           │  │  H2: Results                    │
│                      │  │  [Metric] [Metric] [Metric]      │
│                      │  │  [Teks]                          │
│                      │  │                                  │
│                      │  │  H2: Learnings                  │
│                      │  │  [Teks]                          │
└──────────────────────┘  └──────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  BOTTOM CTA                                                 │
│  "Have a similar project in mind?"                          │
│  [Get in Touch]                                             │
│                                                             │
│  [← Previous Project]          [Next Project →]            │
└─────────────────────────────────────────────────────────────┘
```

### Tablet Layout (768px–1023px) — Project Detail

> Sidebar does not render on tablet. Table of contents becomes a collapsible element at the top of the article.

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (sticky)                                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PROJECT HEADER                                             │
│  [← Projects]                                               │
│  [Category tag]  [Date]                                     │
│  H1: Project Title                                          │
│  [Overview — 1–2 sentences]                                 │
│  [Tools: badge badge badge]                                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  HERO IMAGE / MOCKUP (full width)                           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ▼ On this page  (collapsible — closed by default)          │
│    Overview · Problem · Process · Solution · Results ·      │
│    Learnings                                                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  MAIN CONTENT (full width, no sidebar)                      │
│                                                             │
│  H2: Overview                                               │
│  H2: Problem                                                │
│  H2: Process                                                │
│  H2: Solution                                               │
│  H2: Results  [Metric] [Metric] [Metric]                    │
│  H2: Learnings                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  BOTTOM CTA + PROJECT NAV                                   │
│  [Get in Touch]                                             │
│  [← Previous Project]   [Next Project →]                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Wireframe 05 — Contact Page (/contact)

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (sticky)                                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PAGE HEADER                                                │
│  H1: Let's Connect                                          │
│  [Kalimat pembuka — hangat, bukan korporat]                 │
│  [Status: "Currently open to full-time opportunities"]      │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────┐  ┌───────────────────────────┐  │
│  CONTACT FORM            │  │  DIRECT CONTACT           │  │
│                          │  │                           │  │
│  [Name input]            │  │  Email:                   │  │
│  [Email input]           │  │  [email address]          │  │
│  [Message textarea]      │  │                           │  │
│                          │  │  LinkedIn:                │  │
│  [Send Message — button] │  │  [link]                   │  │
│                          │  │                           │  │
│                          │  │  GitHub:                  │  │
│                          │  │  [link]                   │  │
└──────────────────────────┘  └───────────────────────────┘

└─────────────────────────────────────────────────────────────┘
```

---

## Wireframe 06 — 404 Page

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR                                                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    [404]                                    │
│                                                             │
│           H1: Page not found.                               │
│           [Short message — on brand, not generic]           │
│                                                             │
│           [← Back to Home]                                  │
│           [View Projects]                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Layout Notes

### Spacing System
Semua spacing mengikuti skala yang akan didefinisikan di `09-design-system.md`.
Wireframe ini menggunakan spacing konseptual — belum ada nilai px/rem final.

### Grid System
- Desktop: 12-column grid, max-width 1200px, gutter 24px
- Tablet: 8-column grid
- Mobile: 4-column grid, padding 16px kiri-kanan

### Breakpoints
```
Mobile:   < 768px
Tablet:   768px – 1024px
Desktop:  > 1024px
```

---

## Key Decisions

1. **Home section order: Projects before Skills** — proof (karya nyata) mendahului tools. Rekruter yang berhenti setelah About langsung melewatkan project — posisi 3 memastikan ini tidak terjadi. Lihat `23-ux-review.md` Issue 1.

2. **Journey dihapus dari Home** — di fase awal dengan entry terbatas, Journey di Home tidak menambah nilai. Journey hadir penuh di /about. Lihat `23-ux-review.md` Issue 3.

3. **Skills dihapus dari /about** — Skills sudah ditampilkan di Home. /about harus terasa seperti *going deeper*, bukan membaca ulang. Lihat `23-ux-review.md` Issue 4.

4. **Sidebar di project detail hanya desktop (≥ 1024px)** — di tablet, sidebar collapse menjadi collapsible "On this page" element. Di mobile, dihilangkan sepenuhnya. Lihat `22-design-review.md` Issue 2.

5. **Share button dihapus dari sidebar** — tujuannya tidak jelas. Jika ada demand dari data GA4, bisa ditambahkan di V2. Lihat `23-ux-review.md` Issue 6.

6. **Breadcrumb dihapus dari /about dan /projects** — situs 4 halaman tidak membutuhkan wayfinding breadcrumb. Hanya project detail yang memiliki `← Projects` back link karena merupakan sub-page. Lihat `23-ux-review.md` Issue 5.

7. **Two-column layout untuk /contact** — form + direct contact side by side. Jika form gagal, pengunjung tetap bisa menghubungi via email. Ini UX safety net.

8. **Metric cards di Results section** — angka yang divisualisasikan lebih mudah diingat daripada angka dalam paragraf.

---

## Future Improvements

- [ ] Buat wireframe interaktif di Figma atau FigJam untuk validasi sebelum masuk ke coding
- [ ] Tambahkan wireframe untuk `/now` dan `/uses` page saat V2 dimulai
- [ ] Tambahkan wireframe untuk mobile navigation (hamburger menu expanded state)
- [ ] Pertimbangkan dark mode layout — apakah struktur yang sama bekerja di dark background?
- [ ] Tambahkan wireframe untuk blog post page jika `/blog` diputuskan masuk V2

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| `05-information-architecture.md` | Wireframe dibuat berdasarkan sitemap dan struktur halaman yang sudah ditetapkan |
| `06-user-flow.md` | Setiap elemen layout harus memfasilitasi flow yang sudah didokumentasikan |
| `09-design-system.md` | Spacing, grid, dan breakpoints di wireframe ini akan diisi nilai aktual dari design system |
| `10-components.md` | Setiap blok di wireframe ini adalah komponen — daftar komponen dibuat berdasarkan dokumen ini |
| `11-copywriting.md` | Semua placeholder text di wireframe diganti konten nyata dari copywriting doc |
| `13-project-template.md` | Wireframe project detail adalah referensi visual untuk template yang harus diikuti semua project |
