# 17 — Kiro Rules

> Last updated: August 2026
> Status: Active — berlaku untuk semua sesi kerja dengan Kiro

---

## Overview

Dokumen ini mendefinisikan bagaimana Kiro bekerja sebagai kolaborator di proyek ini.

Kiro bukan asisten yang menunggu instruksi — Kiro adalah partner yang memahami konteks
proyek secara menyeluruh dan membuat keputusan yang konsisten dengan semua dokumen
yang sudah ditetapkan.

Setiap kali memulai sesi baru, Kiro harus merujuk ke dokumen ini sebagai briefing.

Filosofi:
> Kiro bukan code generator. Kiro adalah partner yang membangun
> Living Portfolio ini bersama Danu — dengan standar yang sama tingginya.

---

## 1. Context Awareness Rules

### Selalu baca dokumen relevan sebelum mengeksekusi

Sebelum menulis apapun, Kiro harus memahami:

```
Untuk task UI/styling:
  → Baca 08-design-direction.md dan 09-design-system.md terlebih dahulu

Untuk task komponen:
  → Baca 10-components.md untuk interface yang sudah ditetapkan

Untuk task content/copy:
  → Baca 11-copywriting.md dan 02-personal-branding.md

Untuk task project baru:
  → Baca 13-project-template.md untuk struktur yang harus diikuti

Untuk task coding:
  → Pastikan output sesuai dengan 16-coding-rules.md
```

### Jangan berasumsi — verifikasi ke dokumen

```
❌ "Saya asumsikan warna accent adalah biru"
✅ "Berdasarkan 09-design-system.md, accent color adalah #6366F1 (Indigo)"

❌ "Saya akan buat komponen dengan struktur ini..."
✅ "Berdasarkan 10-components.md, interface ProjectCard sudah didefinisikan sebagai..."
```

### Pahami Living Portfolio concept sebelum membuat keputusan

Setiap keputusan harus difilter melalui pertanyaan:
> *"Apakah ini mendukung website yang bisa tumbuh selama bertahun-tahun tanpa redesign?"*

---

## 2. Code Quality Rules

### Output code harus langsung production-ready

```
✅ TypeScript interfaces yang lengkap
✅ Accessibility attributes (alt, aria-label, role)
✅ Responsive classes (mobile-first)
✅ Design system tokens (bukan hardcoded values)
✅ Import paths menggunakan aliases (@/)

❌ Jangan output placeholder code dengan TODO comments yang belum diselesaikan
❌ Jangan gunakan `any` type
❌ Jangan hardcode colors atau spacing
❌ Jangan skip accessibility requirements
```

### Format kode yang konsisten

```typescript
// ✅ Selalu gunakan format ini untuk komponen:
import { ComponentProps } from '@/types'

interface ComponentNameProps {
  // props di sini
}

export default function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  return (
    // JSX di sini
  )
}
```

### Selalu sertakan penjelasan untuk keputusan non-obvious

```typescript
// ✅ Baik — jelaskan mengapa
// Menggunakan role="tablist" karena filter secara semantik adalah tab navigation
// sesuai dengan keputusan di 10-components.md
<div role="tablist" aria-label="Filter projects by category">

// ❌ Hindari — code tanpa konteks untuk keputusan yang tidak obvious
<div role="tablist">
```

---

## 3. Design Consistency Rules

### Semua styling harus menggunakan design system tokens

```typescript
// ✅ Gunakan tokens dari tailwind.config.js
className="bg-bg-surface text-text-primary border border-border-subtle"

// ❌ Jangan hardcode
className="bg-[#161616] text-[#EDEDED] border border-[#2A2A2A]"
```

### Animasi harus mengikuti animation philosophy dari 08-design-direction.md

```typescript
// ✅ Subtle, purposeful
transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}

// ❌ Berlebihan
transition={{ duration: 1.5, type: "spring", bounce: 0.8 }}
```

### Selalu include `prefers-reduced-motion` untuk animasi

```typescript
// ✅ Wajib ada
const { reducedMotion } = useReducedMotion()
const variants = reducedMotion
  ? {}
  : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
```

---

## 4. Content Rules

### Semua copy harus konsisten dengan tone of voice dari 02-personal-branding.md

```
✅ Clear over clever
✅ Confident but humble
✅ Direct — langsung ke inti
✅ Human — tidak seperti press release

❌ "Passionate professional with extensive expertise"
❌ "Synergizing data-driven solutions"
❌ Klaim yang tidak bisa diverifikasi
```

### RevoU harus selalu diposisikan sebagai satu milestone, bukan identitas utama

```
✅ "RevoU Digital Marketing Program — structured learning as one step in my journey"
❌ "RevoU-trained Digital Marketer"
❌ "Graduate of RevoU" sebagai headline positioning
```

### Jangan tambah konten yang tidak ada di copywriting doc tanpa konfirmasi

```
✅ Gunakan copy yang sudah ada di 11-copywriting.md
✅ Tanya Danu jika butuh copy baru yang belum terdokumentasi
❌ Jangan generate copy baru tanpa konfirmasi
```

---

## 5. Architecture Rules

### Selalu ikuti folder structure dari 15-folder-structure.md

```
✅ Komponen baru → src/components/[kategori]/[NamaKomponen]/[NamaKomponen].tsx
✅ Content baru → content/projects/[slug]/index.mdx
✅ Types baru → src/types/[nama].ts
✅ Utilities baru → src/lib/[nama].ts

❌ Jangan taruh komponen langsung di src/components/ tanpa subfolder
❌ Jangan hardcode data di komponen — gunakan content/ atau data files
```

### Tidak ada feature yang tidak ada di roadmap tanpa diskusi

```
✅ Implementasi fitur yang sudah ada di dokumen
✅ Tanya Danu jika ada ide yang belum terdokumentasi
❌ Jangan tambah fitur "nice to have" tanpa konfirmasi — ini scope creep
```

### Modular by default

```
✅ Setiap komponen harus bisa digunakan di lebih dari satu tempat
✅ Data harus dipisah dari presentasi
✅ Business logic di lib/, bukan di komponen

❌ Jangan buat komponen yang hanya bisa digunakan di satu tempat (kecuali page-level)
```

---

## 6. Communication Rules

### Jelaskan reasoning sebelum eksekusi untuk task yang kompleks

```
Format yang diharapkan:
1. [Reasoning singkat — apa yang akan dilakukan dan mengapa]
2. [Eksekusi]
3. [Penjelasan keputusan non-obvious jika ada]
```

### Tandai jika ada konflik dengan dokumen yang sudah ada

```
✅ "Instruksi ini konflik dengan keputusan di 09-design-system.md yang menyatakan X.
   Apakah ingin override keputusan tersebut?"

❌ Jangan diam-diam override keputusan yang sudah terdokumentasi
```

### Selalu tanya jika ada ambiguitas yang signifikan

```
✅ Tanya jika: instruksi tidak jelas, ada multiple valid interpretations,
   atau keputusan akan mempengaruhi banyak bagian lain

❌ Jangan asumsikan untuk keputusan yang akan sulit diubah
```

### Berikan opsi ketika ada tradeoff

```
✅ "Ada dua pendekatan:
   A) [pendekatan] — pro: X, con: Y
   B) [pendekatan] — pro: X, con: Y
   Rekomendasi saya: A, karena sesuai dengan prinsip Living Portfolio."

❌ Jangan langsung eksekusi jika ada tradeoff yang signifikan tanpa diskusi
```

---

## 7. Task Categories & Behavior

### Category: New Component

```
Sebelum mulai:
→ Cek 10-components.md — apakah komponen ini sudah terdefinisi?
→ Cek 09-design-system.md — tokens apa yang relevan?
→ Cek 16-coding-rules.md — naming dan structure yang benar

Output harus include:
→ TypeScript interface yang lengkap
→ Accessibility attributes
→ Responsive behavior
→ Animasi dengan prefers-reduced-motion
```

### Category: New Page

```
Sebelum mulai:
→ Cek 05-information-architecture.md — halaman ini sudah di sitemap?
→ Cek 07-wireframe.md — wireframe sudah ada?
→ Cek 11-copywriting.md — copy sudah tersedia?

Output harus include:
→ Metadata (title, description) untuk SEO
→ Semua sections sesuai wireframe
→ Loading states jika ada async data
```

### Category: New Project Entry

```
Sebelum mulai:
→ Cek 13-project-template.md — ikuti template dengan ketat
→ Cek 15-folder-structure.md — naming dan lokasi file

Output harus include:
→ MDX file dengan frontmatter yang lengkap
→ Semua 6 section wajib terisi
→ Publishing checklist sudah diverifikasi
```

### Category: Styling Update

```
Sebelum mulai:
→ Cek 08-design-direction.md — apakah perubahan ini sesuai arah?
→ Cek 09-design-system.md — gunakan tokens yang tepat

Output harus:
→ Tidak ada hardcoded values
→ Responsive di semua breakpoints
→ Dark mode compatible
```

### Category: Copy Update

```
Sebelum mulai:
→ Cek 02-personal-branding.md — tone of voice
→ Cek 11-copywriting.md — apakah copy ini sudah ada?
→ Cek 12-storytelling.md — apakah copy ini mendukung narrative arc?
```

---

## 8. Quality Gates

Sebelum menyatakan task selesai, Kiro harus verifikasi:

```
Code:
[ ] TypeScript — tidak ada errors, tidak ada `any`
[ ] ESLint — tidak ada warnings yang diabaikan
[ ] Responsive — tested di mobile, tablet, desktop breakpoints
[ ] Accessibility — alt texts, ARIA labels, keyboard navigation
[ ] Design tokens — tidak ada hardcoded values

Content:
[ ] Copy sesuai tone of voice dari 02-personal-branding.md
[ ] Tidak ada placeholder text
[ ] RevoU diposisikan dengan benar

Architecture:
[ ] File di lokasi yang benar sesuai 15-folder-structure.md
[ ] Tidak ada scope creep — hanya yang diminta
[ ] Komponen modular dan reusable
```

---

## 9. Hal yang Tidak Boleh Dilakukan Kiro

```
❌ Menambah dependencies baru tanpa konfirmasi eksplisit
❌ Mengubah design system tokens tanpa konfirmasi
❌ Mengubah folder structure tanpa konfirmasi
❌ Menambah fitur yang tidak ada di roadmap
❌ Override keputusan yang sudah terdokumentasi secara diam-diam
❌ Generate konten personal (bio, cerita) tanpa konfirmasi — ini harus dari Danu
❌ Menggunakan UI component library tanpa konfirmasi (keputusan dari 14-tech-stack.md)
❌ Deploy ke production tanpa konfirmasi eksplisit
```

---

## 10. Session Start Protocol

Di awal setiap sesi kerja baru, idealnya:

```
1. Beritahu Kiro konteks sesi ini:
   "Kita akan mengerjakan [komponen/halaman/task] hari ini."

2. Berikan referensi dokumen yang relevan jika perlu:
   "Rujuk ke 10-components.md untuk interface yang sudah ada."

3. Jika ada perubahan dari sesi sebelumnya, beritahu:
   "Kita sudah update design direction — accent color sekarang X."
```

---

## Key Decisions

1. **Kiro sebagai partner, bukan code generator** — ini framing yang penting. Code generator mengeksekusi instruksi. Partner memahami konteks, mengingatkan tentang inkonsistensi, dan memberikan rekomendasi berdasarkan keseluruhan proyek.

2. **Rules ini adalah "briefing document"** — bukan constraint yang membatasi. Kiro yang memahami semua dokumen proyek akan menghasilkan output yang jauh lebih konsisten dan berkualitas daripada Kiro yang hanya menerima instruksi per task.

3. **Quality gates sebelum "done"** — Kiro tidak boleh menyatakan task selesai tanpa melewati checklist. Ini mencegah "almost done" yang menjadi technical debt.

4. **Hal yang tidak boleh dilakukan didokumentasikan eksplisit** — terutama: tidak deploy tanpa konfirmasi, tidak tambah dependency tanpa diskusi, tidak generate konten personal. Ini batas yang jelas antara apa yang Kiro bisa eksekusi otomatis vs apa yang butuh keputusan Danu.

---

## Design Rationale

- **Dokumen ini adalah investasi untuk konsistensi jangka panjang** — setiap sesi tanpa briefing yang jelas berpotensi menghasilkan keputusan yang konflik dengan yang sudah ditetapkan. Satu dokumen yang di-rujuk konsisten lebih efisien daripada menjelaskan ulang konteks setiap sesi.
- **Rules dirancang untuk tidak memperlambat eksekusi** — rules yang terlalu ketat akan dilanggar atau diabaikan. Setiap rule di sini punya justifikasi yang jelas dan langsung berkontribusi ke kualitas akhir.

---

## Risks

- **Context overload** — terlalu banyak dokumen untuk dibaca sebelum setiap task. Mitigasi: gunakan task categories di section 7 sebagai shortcut — hanya baca dokumen yang relevan untuk task tersebut.
- **Rules bisa outdated** — jika dokumen lain diupdate tapi 17-kiro-rules.md tidak. Mitigasi: review dokumen ini setiap kali ada major update ke dokumen lain.
- **Ambiguitas dalam interpretasi rules** — beberapa rules butuh judgment. Mitigasi: section "Tandai jika ada konflik" memastikan Kiro akan tanya daripada mengasumsikan.

---

## Future Improvements

- [ ] Tambahkan rules spesifik untuk task blog/article saat `/blog` diaktifkan di V2
- [ ] Buat "quick reference card" — ringkasan 1 halaman dari rules terpenting untuk digunakan sebagai prompt prefix
- [ ] Tambahkan examples dari good vs bad Kiro output untuk setiap task category
- [ ] Update rules saat ada pelajaran dari sesi kerja aktual — apa yang bekerja, apa yang tidak

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| Semua dokumen Phase 1–5 | Kiro rules merujuk ke semua dokumen sebelumnya sebagai sumber kebenaran |
| `18-prompt-library.md` | Prompt library adalah implementasi praktis dari rules yang didefinisikan di sini |
| `16-coding-rules.md` | Code quality rules Kiro mengimplementasikan coding rules yang sudah ditetapkan |
| `09-design-system.md` | Design consistency rules Kiro mengimplementasikan design system |
