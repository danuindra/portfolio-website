# 13 — Project Template

> Last updated: August 2026
> Status: Active — updated post design review (August 2026)

---

## Overview

Setiap project di website ini mengikuti struktur yang sama.

Mengapa template penting untuk Living Portfolio:
- **Konsistensi** — pengunjung yang membaca dua project merasakan pengalaman yang sama
- **Scalability** — project baru bisa ditambahkan tanpa keputusan struktural baru
- **Comparability** — hiring manager bisa membandingkan project secara apple-to-apple
- **Completeness** — template mencegah project yang "setengah jadi" dipublikasikan

Prinsip:
> Setiap project harus bisa menjawab pertanyaan hiring manager:
> *"Apa masalahnya, bagaimana kamu menyelesaikannya, dan apa hasilnya?"*

---

## Project Data Structure

Ada dua lapisan yang berbeda — penting untuk dipahami sebelum implementasi.
Lihat `25-technical-review.md` Issue 1 untuk konteks lengkap.

```
YAML Frontmatter (di atas file .mdx)  ←  ProjectFrontmatter interface
MDX Body Content (isi file .mdx)      ←  ditulis sebagai Markdown sections
Gabungan keduanya saat di-render      ←  ProjectPage interface
```

### Interface 1 — ProjectFrontmatter

Yang disimpan di YAML frontmatter setiap `.mdx` file:

```typescript
// src/types/project.ts

interface ProjectFrontmatter {
  slug: string                    // URL: /projects/ga4-dashboard
  title: string                   // "Google Analytics 4 Dashboard"
  tagline: string                 // Satu kalimat — untuk project card
  category: ProjectCategory       // 'analytics' | 'marketing' | 'web' | 'ai'
  status: ProjectStatus           // 'completed' | 'in-progress' | 'archived'
  featured: boolean               // Tampil di Home highlight (max 3)

  date: string                    // "2026-07" — format YYYY-MM
  duration?: string               // "3 weeks"
  tools: string[]                 // ["GA4", "Looker Studio", "Google Sheets"]
  tags?: string[]                 // Additional searchable tags

  thumbnail: string               // Path: /images/projects/ga4-dashboard/thumbnail.jpg
  coverImage?: string             // Full-width hero image di detail page

  metrics?: ProjectMetric[]       // Hasil terukur — opsional tapi sangat dianjurkan
  liveUrl?: string                // Link ke project live
  repoUrl?: string                // GitHub link — opsional
}

interface ProjectMetric {
  value: string                   // "47%" atau "+200" atau "3x"
  label: string                   // "Increase in organic traffic"
  description?: string            // Context tambahan jika perlu
}

type ProjectCategory = 'analytics' | 'marketing' | 'web' | 'ai'
type ProjectStatus = 'completed' | 'in-progress' | 'archived'
```

### Interface 2 — ProjectPage

Yang digunakan oleh halaman `/projects/[slug]` setelah MDX di-parse:

```typescript
// src/types/project.ts

interface ProjectPage extends ProjectFrontmatter {
  content: React.ReactNode  // MDX body yang sudah di-compile menjadi React component
}
```

> **Penting:** Field seperti `problem`, `approach`, `process`, `results`, `learnings`
> **bukan** frontmatter fields. Mereka adalah **heading sections dalam MDX body**
> yang ditulis sebagai `## The Problem`, `## My Approach`, dst.
> Struktur sections ini di-enforce oleh content guidelines di bawah,
> bukan oleh TypeScript type enforcement.

### Interface 3 — ProjectCard (untuk listing)

```typescript
// Digunakan di /projects index dan ProjectsHighlight di Home
interface ProjectCardData extends Pick<ProjectFrontmatter,
  'slug' | 'title' | 'tagline' | 'category' | 'tools' | 'thumbnail' | 'featured' | 'date'
> {}
```

### Helper Types

```typescript
interface ProjectImage {
  src: string
  alt: string       // Wajib — untuk accessibility
  caption?: string
}
```

### Contoh MDX File Lengkap

```mdx
---
slug: "ga4-dashboard"
title: "Google Analytics 4 Dashboard"
tagline: "Centralized analytics dashboard built with GA4 and Looker Studio."
category: "analytics"
status: "completed"
featured: true
date: "2026-07"
duration: "2 weeks"
tools: ["Google Analytics 4", "Looker Studio", "Google Sheets"]
thumbnail: "/images/projects/ga4-dashboard/thumbnail.jpg"
metrics:
  - value: "90%"
    label: "Reduction in manual reporting time"
  - value: "1"
    label: "Unified dashboard replacing 4 separate tools"
---

## Overview

Built a centralized marketing analytics dashboard...

## The Problem

Without a centralized dashboard...

## My Approach

I chose Looker Studio over a custom-built solution...

## The Process

1. Audit: Reviewed existing data sources...

## Results

The dashboard is now the single source of truth...

## What I Learned

GA4's session definition is fundamentally different...
```

---

## Content Template — Per Section

### 1. Overview

**Tujuan:** Satu paragraf yang bisa berdiri sendiri. Jika seseorang hanya membaca ini, mereka harus mengerti apa project ini dan mengapa penting.

**Format:**
```
[Apa yang dibangun] — [konteks/platform] — [hasil utama atau tujuan].
```

**Contoh:**
```
Built a Google Analytics 4 reporting dashboard using Looker Studio to
track and visualize marketing performance for a personal project.
The goal was to create a single source of truth for campaign data
that could be understood without technical knowledge.
```

**Panjang:** 2–4 kalimat. Tidak lebih.

---

### 2. The Problem

**Tujuan:** Menunjukkan bahwa project dimulai dari pemahaman masalah yang jelas — bukan sekadar "saya ingin belajar GA4."

**Pertanyaan yang harus dijawab:**
- Situasi apa yang ada sebelum project ini?
- Apa yang tidak berfungsi atau bisa ditingkatkan?
- Mengapa masalah ini penting untuk diselesaikan?

**Format:**
```
Context: [Situasi awal]
Problem: [Apa yang tidak berjalan atau bisa lebih baik]
Impact: [Mengapa ini penting — untuk siapa?]
```

**Contoh:**
```
Without a centralized dashboard, tracking campaign performance meant
switching between multiple platforms and manually compiling data in
spreadsheets. This made it difficult to spot patterns quickly or
share insights with others in a readable format.
```

**Panjang:** 2–3 paragraf. Cukup untuk membangun konteks, tidak perlu essay.

---

### 3. My Approach

**Tujuan:** Menunjukkan *reasoning* — mengapa pilihan ini dibuat, bukan pilihan lain. Ini yang paling membedakan dari portfolio yang hanya menampilkan output.

**Pertanyaan yang harus dijawab:**
- Apa framework atau mental model yang digunakan?
- Mengapa tools ini yang dipilih?
- Ada tradeoff apa yang dipertimbangkan?

**Contoh:**
```
I chose Looker Studio over a custom-built solution because the priority
was speed to insight, not technical complexity. The goal was a dashboard
that could be updated automatically and read without explanation.

I structured the dashboard around three questions: What is happening?
Why is it happening? What should we do about it?
```

**Panjang:** 2–3 paragraf.

---

### 4. The Process

**Tujuan:** Dokumentasi langkah-langkah konkret. Ini yang memberikan depth kepada hiring manager.

**Format:** Bisa berupa narasi atau numbered steps — pilih yang paling natural untuk project tersebut.

**Yang harus ada:**
- Langkah-langkah yang diambil secara kronologis
- Tantangan yang ditemui dan bagaimana diatasi
- Screenshot atau visual progress jika ada

**Contoh struktur:**
```
1. Audit: Reviewed existing data sources and identified gaps
2. Setup: Connected GA4 to Looker Studio and defined key metrics
3. Design: Built initial dashboard layout focused on readability
4. Iteration: Revised based on what was actually useful vs. what looked good
5. Documentation: Wrote a guide for how to read and update the dashboard
```

**Panjang:** Ini section terpanjang — 3–6 paragraf atau 5–8 steps. Boleh menyertakan sub-sections.

---

### 5. Results

**Tujuan:** Bukti konkret bahwa project ini memberikan hasil — bukan sekadar "project selesai."

**Hierarki hasil (dari terbaik ke acceptable):**
```
1. Quantitative metrics     — "47% increase in organic traffic"
2. Qualitative outcomes     — "Dashboard digunakan tim setiap minggu"
3. Learning outcomes        — "Identified that mobile users bounce at 3x the rate"
4. Process outcomes         — "Reduced reporting time from 2 hours to 15 minutes"
```

**Jika tidak ada angka yang bisa diklaim:**
Jujur tentang ini. "This was a learning project — the primary result was
understanding how GA4's attribution model works in practice" adalah
lebih credible dari angka yang dikarang-karang.

**Panjang:** 1–2 paragraf naratif + metric cards jika ada.

---

### 6. What I Learned

**Tujuan:** Menunjukkan growth mindset dan kemampuan refleksi — dua kualitas yang sangat dihargai hiring manager.

**Pertanyaan yang harus dijawab:**
- Apa yang berjalan lebih baik dari ekspektasi?
- Apa yang tidak berjalan dan mengapa?
- Apa yang akan dilakukan berbeda jika mengulang project ini?
- Apa yang akan diterapkan ke project berikutnya?

**Penting:** Learnings harus spesifik. "I learned a lot" tidak berguna.
"I learned that GA4's session definition is fundamentally different from
Universal Analytics, which explains why our numbers looked inconsistent" — ini berguna.

**Panjang:** 3–5 bullet points atau 1–2 paragraf.

---

### 7. Next Steps *(Opsional)*

**Gunakan jika:** Project masih aktif berkembang atau ada iterasi yang direncanakan.
**Skip jika:** Project benar-benar selesai dan tidak akan dilanjutkan.

**Contoh:**
```
- Add automated alerts when key metrics drop below threshold
- Build a mobile-optimized version of the dashboard
- Expand to track social media performance alongside search data
```

---

## Project Card Template

Versi ringkas untuk ditampilkan di grid:

```
[Category badge]
[Title]
[Tagline — 1 kalimat]
[Tools: tag tag tag]
[View Case Study →]
```

**Aturan tagline:**
- Maksimal 15 kata
- Harus bisa dipahami tanpa konteks tambahan
- Fokus pada hasil atau pendekatan, bukan deskripsi teknis

**Contoh tagline yang baik:**
```
✅  "Built a GA4 dashboard that reduced reporting time from 2 hours to 15 minutes."
✅  "Analyzed a 3-month SEO campaign to identify what actually drove traffic."
✅  "Designed and launched a landing page with 34% conversion rate."
```

**Contoh tagline yang buruk:**
```
❌  "A Google Analytics project using Looker Studio."
❌  "Learning project about data visualization."
❌  "Marketing analytics dashboard."
```

---

## Thumbnail Guidelines

**Ukuran:** 800×450px (16:9 ratio) — konsisten untuk semua project

**Yang boleh digunakan:**
- Screenshot dari dashboard atau interface
- Mockup device (laptop/phone) dengan project di dalamnya
- Clean graphic dengan judul dan visual elemen

**Yang tidak boleh:**
- Screenshot mentah tanpa cropping atau treatment
- Placeholder abu-abu
- Stock photo yang tidak relevan

**File naming:** `thumbnail.jpg` di folder project masing-masing

---

## Publishing Checklist

Sebelum project dipublikasikan, pastikan semua ini terpenuhi:

```
Content:
[ ] Semua 6 section wajib terisi (Overview, Problem, Approach, Process, Results, Learnings)
[ ] Tidak ada placeholder text ("Lorem ipsum" atau "[TBD]")
[ ] Overview bisa berdiri sendiri sebagai meta description
[ ] Results section jujur — tidak mengklaim angka yang tidak terverifikasi
[ ] Learnings spesifik, bukan generic

Visual:
[ ] Thumbnail ada dan 16:9
[ ] Semua image punya alt text
[ ] Cover image ada (opsional tapi sangat dianjurkan)

Technical:
[ ] Slug sudah benar: lowercase, hyphen-separated, deskriptif
[ ] Category sudah dipilih
[ ] Status sudah benar (completed/in-progress)
[ ] Tools array sudah diisi
[ ] Date sudah diisi format YYYY-MM

SEO:
[ ] Title tidak lebih dari 60 karakter
[ ] Overview bisa digunakan sebagai meta description (max 160 karakter)
```

---

## Project Directory Structure

```
/content/projects/
  ga4-dashboard/
    index.mdx           ← konten utama
    thumbnail.jpg
    cover.jpg
    images/
      dashboard-overview.png
      metric-breakdown.png
```

---

## Key Decisions

1. **ProjectFrontmatter dan ProjectPage dipisah** — keduanya berbeda secara fundamental. Frontmatter adalah YAML yang di-parse, MDX body adalah React component yang di-render. Menggabungkannya dalam satu interface menciptakan false expectation bahwa semua fields ada di frontmatter. Lihat `25-technical-review.md` Issue 1.

2. **Section content tidak di-type-enforce** — `problem`, `approach`, dll. adalah heading dalam MDX body, bukan TypeScript fields. Enforcement dilakukan melalui publishing checklist dan content guidelines, bukan type system.

3. **Approach section adalah section terpenting, bukan Results** — hiring manager ingin tahu *bagaimana Danu berpikir*. Approach adalah jendela ke reasoning process.

4. **Results section mendorong kejujuran** — hierarki quantitative → qualitative → learning outcomes memberikan jalan keluar yang dignified untuk project tanpa angka dramatis.

5. **Tagline harus bisa berdiri sendiri** — project card ditampilkan di grid tanpa konteks. Tagline yang buruk membuat project tidak diklik.

6. **Publishing checklist sebagai gate** — tidak ada project yang live tanpa melewati checklist. Mencegah "half-baked" project yang merusak kesan profesional.

---

## Design Rationale

- **Template yang rigid tapi konten yang fleksibel** — struktur section sama untuk semua project, tapi panjang dan format dalam setiap section bisa disesuaikan. Analytics project mungkin lebih data-heavy di Results, web project mungkin lebih visual di Process.
- **Markdown untuk konten** — memisahkan konten dari presentasi. Jika UI diubah di masa depan, konten tidak perlu diubah.

---

## Risks

- **Template bisa terasa formulaic** — jika setiap project terasa seperti mengisi form yang sama. Mitigasi: setiap section harus ditulis dengan voice yang natural, bukan sebagai checklist.
- **Projects dengan hasil yang belum terukur** — terutama di fase awal. Mitigasi: gunakan learning outcomes sebagai results yang valid dan jujur.
- **Thumbnail quality yang tidak konsisten** — akan langsung terlihat di grid view. Mitigasi: buat template Figma sederhana untuk thumbnail.

---

## Future Improvements

- [ ] Buat template Figma untuk thumbnail project agar konsisten secara visual
- [ ] Tambahkan field `client` dan `industry` saat mulai menerima freelance work
- [ ] Tambahkan field `testimonial` untuk endorsement dari kolega atau mentor
- [ ] Pertimbangkan `video` field untuk project walkthrough di V2
- [ ] Buat project draft system — project bisa disimpan sebagai draft sebelum dipublikasikan

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| `10-components.md` | ProjectCard, ProjectHeader, ProjectMetric, ProjectNav mengimplementasikan template ini |
| `11-copywriting.md` | Copy guidelines berlaku untuk semua teks dalam template |
| `12-storytelling.md` | Mini-arc narasi setiap project (Situasi→Problem→Approach→Result) mengikuti storytelling framework |
| `15-folder-structure.md` | `/content/projects/` directory structure harus sesuai dengan template ini |
| `19-quality-checklist.md` | Publishing checklist di atas menjadi bagian dari QA checklist keseluruhan |
