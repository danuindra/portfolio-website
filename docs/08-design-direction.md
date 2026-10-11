# 08 — Design Direction

> Last updated: August 2026
> Status: Active — updated post design review (August 2026)

---

## Overview

Dokumen ini menerjemahkan preferensi visual menjadi keputusan desain yang konkret.

Bukan hanya "terinspirasi dari Linear" — tapi *apa spesifiknya dari Linear* yang diambil,
dan *mengapa keputusan itu tepat* untuk Living Portfolio Danu.

Design direction ini menjadi panduan bagi semua keputusan visual di Phase 3,
dan referensi saat ada disagreement tentang pilihan desain di masa depan.

---

## Design Philosophy

> **"Design should be invisible. Content should be unforgettable."**

Website ini bukan tentang desain yang memukau — tapi tentang konten yang disampaikan
dengan cara yang bersih, mudah dicerna, dan profesional.

Desain yang baik di sini berarti:
- Rekruter tidak terdistraksi oleh elemen visual yang tidak perlu
- Hiring manager bisa fokus membaca case study tanpa gangguan
- Website terasa *premium* karena konsisten dan detail — bukan karena penuh animasi

---

## Reference Analysis

### Linear — Primary Inspiration

**Apa yang diambil:**
- Dark background dengan teks putih/abu yang kontras tinggi
- Typography yang bold dan presisi di headline
- Penggunaan subtle gradient pada elemen tertentu (bukan seluruh halaman)
- Micro-interactions yang halus — hover states, transitions yang smooth
- Grid yang ketat dan konsisten — tidak ada elemen yang "mengapung" sembarangan
- Kesan "engineering precision" yang terasa di setiap pixel

**Apa yang tidak diambil:**
- Linear sangat product-focused dengan ilustrasi teknis — tidak relevan untuk portfolio personal
- Terlalu banyak motion di homepage Linear — kita ambil restraint-nya, bukan volume-nya

---

### Apple — Secondary Inspiration

**Apa yang diambil:**
- Whitespace yang agresif — "less is more" bukan klise, tapi prinsip layout
- Typography sebagai hero elemen — headline besar, bold, dengan kerning yang presisi
- Product photography approach: satu visual kuat lebih baik dari banyak visual biasa
- Scroll-driven storytelling — konten terungkap saat user scroll, bukan dump sekaligus
- Konsistensi absolut — setiap margin, padding, dan radius mengikuti sistem yang sama

**Apa yang tidak diambil:**
- Apple menggunakan banyak video dan animasi berat — tidak practical untuk portfolio
- Skala Apple sangat besar — kita ambil *filosofinya*, bukan skalanya

---

### Vercel — Secondary Inspiration

**Apa yang diambil:**
- Minimalism yang fungsional — setiap elemen ada karena alasan, bukan dekorasi
- Developer-aesthetic yang clean: monospace accents, clean code blocks
- Dark/light mode yang dieksekusi dengan baik
- Section yang jelas terdefinisi tanpa border yang mencolok — hanya whitespace

**Apa yang tidak diambil:**
- Vercel sangat technical dan developer-centric — portfolio ini untuk digital marketer,
  tidak perlu terasa seperti developer documentation

---

### Notion — Secondary Inspiration

**Apa yang diambil:**
- Readability di atas segalanya — body text yang nyaman dibaca dalam jumlah panjang
- Hierarchy yang jelas tanpa dekorasi berlebihan
- Clean dan functional — tidak ada yang "sok kreatif" yang mengorbankan kejelasan

**Apa yang tidak diambil:**
- Notion terlalu plain dan utilitarian — kita butuh lebih banyak visual hierarchy
  dan personality dibanding Notion

---

## Synthesized Design Direction

Dari keempat referensi di atas, ini DNA visual yang disintesis:

```
Linear's precision
+ Apple's whitespace & typography scale
+ Vercel's minimalist functionality
+ Notion's readability
= Clean, premium, content-first portfolio
```

### Satu Kalimat Design Direction:

> **"Light-first, typography-led, content-focused — calm, confident, and professional."**

> **Keputusan final (Design Review August 2026):** Light mode adalah default V1. Dark mode direncanakan untuk V2. Alasan: audiens utama adalah rekruter dan hiring manager di industri digital marketing — termasuk perusahaan konvensional dan agensi — yang lebih familiar dengan tampilan professional berbasis light background. Lihat `22-design-review.md` Issue 1.

---

## Visual Language

### 1. Color Approach

**Skema:** Light mode sebagai default V1, dark mode sebagai V2

```
Primary Background:  White (#FFFFFF) — bersih, profesional, familier
Surface:             Off-white (#F9F9F9) — untuk cards dan sections
Border:              Subtle gray — memberikan struktur tanpa noise
Text Primary:        Near-black (#111111) — kontras tinggi, mudah dibaca
Text Secondary:      Medium gray (#666666) — untuk metadata, labels, captions
Accent:              Indigo (#4F46E5) — untuk CTA, links, highlights
```

**Mengapa light mode sebagai default:**
- Audiens utama adalah rekruter dan hiring manager digital marketing — termasuk perusahaan non-tech yang familiar dengan UI berbasis cahaya
- Portfolio digital marketing yang clean dan light terasa lebih *professional* dibanding developer-aesthetic dark mode
- Lebih mudah dibaca di layar kantor dengan pencahayaan ambient tinggi
- First impression yang ingin dicapai: "calm, confident, professional" — light mode mendukung ini lebih natural
- Token dark mode sudah dipersiapkan penuh di `09-design-system.md` — implementasi V2 tidak membutuhkan refactor

**Mengapa Indigo tetap sebagai accent di light mode:**
- Kontras yang cukup di white background (ratio ≥ 4.5:1 untuk teks normal)
- Distinctive dan premium — tidak generic seperti biru standar
- Konsisten antara light dan dark mode — brand recognition tetap terjaga saat toggle ditambahkan di V2

---

### 2. Typography Approach

**Hierarki:**
```
Display / H1:   Large, bold — statement, bukan whisper
H2:             Clear section dividers — medium-large, semibold
H3:             Card titles, subsections — medium, medium weight
Body:           Readable, comfortable line-height — 1.6–1.8
Caption/Label:  Small, tracking sedikit lebih lebar — untuk metadata
```

**Karakter yang dicari:**
- Geometric sans-serif untuk headline — tegas, modern, presisi
- Humanist sans-serif untuk body — hangat, mudah dibaca dalam panjang
- Monospace untuk code/tool references — opsional, sebagai accent

**Font final akan ditetapkan di `09-design-system.md`**

---

### 3. Spacing & Layout

- **Whitespace adalah fitur, bukan kemewahan** — section yang "kosong" memberikan napas
- Padding section: generous di desktop, lebih compact di mobile
- Konsisten — jika satu card punya padding 24px, semua card punya padding 24px
- Tidak ada elemen yang "mengapung" tanpa alignment yang jelas ke grid

---

### 4. Animation Philosophy

**Prinsip:** Animasi mendukung UX, bukan menjadi atraksi.

| Animasi | Gunakan | Hindari |
|---|---|---|
| Fade in on scroll | ✅ Subtle, tidak mengganggu | ❌ Jangan bounce atau overshoot |
| Hover states | ✅ Micro feedback yang jelas | ❌ Jangan transformasi besar |
| Page transitions | ✅ Simple fade/slide | ❌ Jangan elaborate loading screen |
| Parallax | ⚠️ Hanya jika sangat subtle | ❌ Jangan full parallax hero |
| Loading skeleton | ✅ Untuk content yang loading | ❌ Jangan spinner yang lama |

**Aturan animasi:**
- Duration: 150ms–300ms untuk micro, 400ms–600ms untuk page transitions
- Easing: ease-out atau custom cubic bezier — tidak pernah linear
- Tidak ada animasi yang berjalan terus (looping) tanpa trigger dari user
- Semua animasi harus bisa di-disable untuk `prefers-reduced-motion`

---

### 5. Component Visual Style

**Cards:**
- Background: satu level lebih terang dari page background
- Border: subtle, 1px — atau no border dengan shadow sangat tipis
- Radius: medium — tidak terlalu sharp, tidak terlalu round
- Hover: background sedikit lebih terang + subtle border highlight

**Buttons:**
- Primary: filled dengan accent color — jelas sebagai CTA utama
- Secondary: outline atau ghost — untuk aksi sekunder
- Tidak ada gradient button — flat dan clean
- Hover: subtle transform (translateY -1px) + shadow tipis

**Badges/Tags:**
- Small, compact, low contrast — tidak mencuri fokus dari konten utama
- Monospace font untuk tool/tech tags — subtle nod ke developer aesthetic

---

### 6. Imagery & Visual Assets

**Photography:**
- Jika menggunakan foto profil: clean background, professional tapi tidak kaku
- Project screenshots: high quality, di-crop rapi, consistent aspect ratio
- Mockups: clean device mockups jika diperlukan

**Tidak menggunakan:**
- Stock photos generik (orang berjabat tangan, laptop di kafe, dll)
- Ilustrasi vector yang cartoonish — tidak sesuai tone premium
- Background gradients yang mencolok

---

## Anti-Design Patterns

Hal-hal yang sengaja dihindari:

| Pattern | Alasan Dihindari |
|---|---|
| Glassmorphism berlebihan | Sudah terlalu mainstream, cepat terasa dated |
| Neon/glow effects | Terlalu gaming, tidak sesuai persona profesional |
| Scroll-jacking | Mengganggu UX, merusak accessibility |
| Full-screen video hero | Berat, tidak relevan untuk portfolio teks-heavy |
| Cursor custom | Gimmick yang tidak menambah nilai |
| Loading screen panjang | Tidak ada alasan teknis, hanya mengurangi nilai |
| Terlalu banyak font weight | Hierarki harus jelas dengan maksimal 3 weight |

---

## Mood Board Keywords

Kata-kata yang harus terasa saat pengunjung menggunakan website ini:

```
Precise  ·  Confident  ·  Clean  ·  Focused
Professional  ·  Readable  ·  Trustworthy  ·  Modern
Intentional  ·  Calm  ·  Premium  ·  Timeless
```

---

## Key Decisions

1. **Light mode sebagai default V1** — keputusan final berdasarkan Design Review. Target audiens adalah rekruter dan hiring manager digital marketing yang bekerja di berbagai jenis perusahaan. Light mode lebih universal, profesional, dan mendukung first impression "calm, confident, professional." Dark mode diimplementasikan di V2 — token sudah siap. Lihat `22-design-review.md` Issue 1.

2. **Typography sebagai elemen desain utama** — tidak ada ilustrasi mahal, tidak ada video hero. Typography yang dipilih dan di-scale dengan baik adalah "visual hero" utama. Ini juga berarti pemilihan font adalah keputusan paling kritis di Phase 3.

3. **Animasi minimalis by principle** — bukan karena kurang kemampuan, tapi karena konten adalah prioritas. Animasi yang berlebihan mengalihkan perhatian dari case study dan karya. Setiap animasi harus bisa dijustifikasi dengan: "Ini membantu user memahami atau berinteraksi lebih baik."

4. **Satu accent color** — bukan dua atau tiga. Indigo (`#4F46E5` di light mode) dipilih karena distinctive, premium, dan memiliki kontras yang baik di background putih. Konsistensi accent antara light dan dark mode menjaga brand recognition.

5. **Anti-patterns didokumentasikan** — agar saat ada godaan untuk menambahkan fitur visual yang "keren", ada referensi konkret mengapa itu bukan pilihan yang tepat untuk proyek ini.

---

## Future Improvements

- [ ] Implementasikan dark mode di V2 — token sudah siap di `09-design-system.md`, tambahkan ThemeToggle component
- [ ] Buat mood board visual di Figma dengan screenshot referensi aktual dari Linear, Apple, Vercel, Notion
- [ ] Validasi direction dengan feedback dari 2–3 rekruter atau hiring manager setelah V1 live
- [ ] Review design direction setiap tahun — pastikan masih relevan dan tidak terasa dated

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| `02-personal-branding.md` | Brand personality (Precise, Methodical, Premium) harus tercermin dalam setiap keputusan visual di sini |
| `03-target-audience.md` | Light mode dipilih karena sesuai dengan audiens rekruter dan hiring manager di berbagai jenis perusahaan — bukan hanya tech-savvy |
| `07-wireframe.md` | Wireframe adalah struktur — dokumen ini adalah *karakter visual* yang akan diaplikasikan ke atas struktur tersebut |
| `09-design-system.md` | Design direction ini diterjemahkan menjadi nilai konkret (hex colors, font names, spacing values) di design system |
| `10-components.md` | Setiap komponen harus dibangun mengikuti visual language yang sudah didefinisikan di sini |
| `16-coding-rules.md` | Animasi `prefers-reduced-motion` dan accessibility harus diimplementasikan di level kode |
