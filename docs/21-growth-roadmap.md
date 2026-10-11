# 21 — Growth Roadmap

> Last updated: August 2026
> Status: Active — review dan update setiap 6 bulan

---

## Overview

Dokumen ini adalah peta pertumbuhan Living Portfolio selama bertahun-tahun ke depan.

Tiga dimensi pertumbuhan yang dikelola secara bersamaan:

```
1. WEBSITE GROWTH     → fitur, halaman, dan kapabilitas baru
2. CONTENT GROWTH     → lebih banyak project, milestone, dan karya
3. CAREER GROWTH      → perubahan positioning seiring karier berkembang
```

Filosofi:
> Website yang tidak berkembang adalah website yang mati.
> Setiap milestone karier harus tercermin di website — bukan sebagai update besar,
> tapi sebagai penambahan natural yang sudah direncanakan sejak awal.

---

## Version Roadmap

```
V1.0 — Foundation          ← Sekarang
V1.x — Content Expansion   ← 0–6 bulan
V2.0 — Feature Growth      ← 6–12 bulan
V3.0 — Platform Evolution  ← 1–2 tahun
```

---

## V1.0 — Foundation *(Target: Launch)*

**Tujuan:** Website live dengan fondasi yang solid.

### Must-have untuk launch:
```
Pages:
[ ] Home — semua sections berfungsi
[ ] About — full bio, skills, timeline
[ ] Projects — minimal 3 case studies
[ ] Contact — form berfungsi
[ ] 404 — custom page

Technical:
[ ] Domain aktif (danuindra.com)
[ ] SSL certificate aktif
[ ] GA4 tracking berfungsi
[ ] Google Search Console verified
[ ] Sitemap ter-submit
[ ] Mobile responsive (semua halaman)
[ ] Quality checklist dari 19-quality-checklist.md passed

Content:
[ ] 3 project case studies dipublikasikan
[ ] Journey timeline up-to-date
[ ] Skills list akurat
[ ] Status badge akurat
```

**Success metric V1.0:**
Website dapat dibagikan sebagai referensi profesional tanpa rasa malu.

---

## V1.x — Content Expansion *(0–6 bulan post-launch)*

**Tujuan:** Website hidup dan terus berkembang dengan konten nyata.

### Content milestones:
```
Bulan 1–2:
[ ] Project #4 dipublikasikan
[ ] Journey timeline diupdate dengan milestone terbaru

Bulan 3–4:
[ ] Project #5 dipublikasikan
[ ] Skills list diupdate setelah menguasai tool baru
[ ] About copy di-review dan diupdate jika ada pergeseran positioning

Bulan 5–6:
[ ] Project #6 dipublikasikan
[ ] Quarterly review pertama dijalankan (dari 19-quality-checklist.md)
[ ] GA4 data review: halaman apa yang paling efektif?
```

### Technical improvements (non-breaking):
```
[ ] Performance optimization berdasarkan Lighthouse data aktual
[ ] SEO refinement berdasarkan Search Console data
[ ] Accessibility fixes jika ada issues ditemukan post-launch
[ ] Fix minor bugs yang ditemukan setelah live
```

**Success metric V1.x:**
Minimal 6 project case studies. Website terasa "hidup" — selalu ada yang baru.

---

## V2.0 — Feature Growth *(6–12 bulan post-launch)*

**Tujuan:** Tambah kapabilitas baru yang mendukung positioning yang berkembang.

### New Pages:

**`/now` page:**
```
Apa yang sedang dikerjakan sekarang.
Update: setiap 1–2 bulan
Konten: current projects, current learning, current reading
Inspirasi: nownownow.com
Alasan: menunjukkan website aktif dan Danu terus berkembang
```

**`/uses` page:**
```
Tools dan setup yang digunakan sehari-hari.
Update: saat ada perubahan setup
Konten: tools, software, hardware, resources
Alasan: berguna untuk komunitas, menunjukkan expertise
```

### Enhanced Features:

**Light mode toggle:**
```
Token sudah dipersiapkan di 09-design-system.md
Implementation: ThemeToggle component + localStorage persistence
Timing: V2 — setelah V1 solid dan ada feedback dari pengunjung nyata
```

**Project search:**
```
Search across all projects by title, tools, atau keyword
Relevant saat project > 10
Implementation: fuse.js atau algolia free tier
```

**Reading time indicator:**
```
"5 min read" di setiap project case study
Implementation: reading-time utility, berdasarkan word count
```

**Project tags yang lebih granular:**
```
Saat ini: analytics, marketing, web, ai
V2: tambah sub-tags (seo, sem, dashboard, landing-page, dll)
Relevant saat project > 10 untuk navigasi yang lebih baik
```

### Services Page *(kondisional — hanya jika siap menerima freelance)*:
```
/services
  Layanan yang ditawarkan
  Process dan timeline
  CTA untuk inquiry

Timing: Aktifkan hanya setelah:
- Portfolio punya minimal 5 case studies yang solid
- Danu siap dan mau menerima klien pertama
- Positioning sudah clear antara "employee" dan "freelancer"
```

**Success metric V2.0:**
Website terasa seperti platform profesional yang mature, bukan sekadar portfolio.

---

## V3.0 — Platform Evolution *(1–2 tahun post-launch)*

**Tujuan:** Website menjadi platform yang mencerminkan karier yang sudah established.

### Blog / Writing Section:
```
/blog atau /writing
  Artikel tentang marketing, analytics, dan learnings
  Format: case study style — spesifik dan actionable

Syarat sebelum launch:
- Minimal 5 artikel sudah ditulis dan siap tayang
- Konsistensi: komitmen minimal 1 artikel per bulan
- Jangan launch blog kosong

Technical: MDX-based, sama seperti projects
Konten yang bisa ditulis:
  - "How I built [X] and what I learned"
  - "Analyzing [campaign/product] using GA4"
  - "My learning journey in [topic]"
```

### Case Study Expansion:
```
Dari template standar ke format yang lebih kaya:
- Video walkthrough (opsional)
- Interactive demos
- Downloadable resources

Timing: Saat ada klien atau project yang cukup signifikan untuk diinvestasikan
```

### CMS Migration (jika diperlukan):
```
Dari MDX files ke headless CMS jika:
- Jumlah konten > 50 items
- Ada kebutuhan collaborative editing
- Workflow MDX terasa terlalu friction

Pilihan: Contentful, Sanity, atau Notion as CMS
```

**Success metric V3.0:**
Website menjadi referensi utama ketika ada orang yang bertanya tentang Danu secara profesional.

---

## Career Milestone → Website Update Map

Setiap milestone karier harus tercermin di website. Ini panduan konkretnya:

| Milestone Karier | Update Website |
|---|---|
| Selesai RevoU Program | Tambah ke Journey, update Skills |
| Dapat pekerjaan pertama | Update Hero subheadline, update status badge, tambah ke Journey |
| Selesai project pertama di tempat kerja | Tambah project case study (jika shareable) |
| Dapat sertifikasi baru | Tambah ke Journey, mungkin tambah ke Skills |
| Dapat promosi | Update About bio, update Journey |
| Mulai freelance | Aktifkan /services page |
| Publish artikel/tulisan | Aktifkan /blog |
| Speak di event | Tambah ke Journey, mungkin buat dedicated section |
| 1 year anniversary | Quarterly review besar, review seluruh positioning |

**Prinsip:** Website harus selalu 1–2 minggu di belakang realita karier — bukan berbulan-bulan.

---

## Analytics Growth Tracking

Gunakan GA4 untuk memvalidasi pertumbuhan nyata:

### Metrics yang ditrack:

**Engagement:**
```
Sessions per bulan    → baseline setelah launch, track trend
Avg session duration  → target > 2 menit (menunjukkan konten dibaca)
Pages per session     → target > 2 (pengunjung explore lebih dari 1 halaman)
Bounce rate           → target < 60% untuk portfolio
```

**Conversion:**
```
Contact page visits   → berapa % pengunjung yang sampai ke contact?
Contact link clicks   → berapa yang klik LinkedIn atau email?
Project deep reads    → berapa lama rata-rata di project detail page?
```

**Acquisition:**
```
Direct traffic        → orang yang sengaja mengetik URL (brand awareness)
Organic search        → nama Danu muncul di Google
Referral              → dari LinkedIn, GitHub, atau CV
```

### Review cadence:
```
Mingguan:   Cek apakah ada traffic spike atau anomali
Bulanan:    Review semua metrics vs bulan sebelumnya
Quarterly:  Deep analysis — apa yang bekerja, apa yang tidak
Tahunan:    Review seluruh strategi dan positioning
```

---

## Content Calendar

Framework untuk memastikan konten terus bertambah:

### Monthly minimum:
```
1 update ke website — bisa project baru, journey entry, atau skills update
Review status badge — masih akurat?
```

### Quarterly:
```
Full quality checklist dari 19-quality-checklist.md
Review dan update About copy jika ada perubahan positioning
GA4 data review
Cek semua external links masih valid
```

### Annually:
```
Review semua dokumen di docs/ — masih relevan?
Update design system jika ada keputusan visual baru
Review tech stack — ada yang perlu diupgrade?
Review growth roadmap ini — revisi target berdasarkan realita
```

---

## Positioning Evolution

Seiring karier berkembang, positioning di website harus ikut berkembang:

```
Sekarang (Entry Level):
  "Digital Marketer & Analyst building real-world projects"

6–12 bulan (First Job):
  "Digital Marketer at [Company] — [spesialisasi yang berkembang]"

1–2 tahun (Established):
  "[Spesifik title] with focus on [area keahlian]"
  Contoh: "Marketing Analyst specializing in data-driven growth"

3+ tahun (Senior):
  "[Senior title] — [unique expertise atau approach]"
  Contoh: "Growth Marketing Strategist building analytics-first campaigns"
```

**Yang tidak berubah:**
- Living Portfolio concept — website selalu berkembang
- Content-first approach — konten lebih penting dari visual
- Transparency — dokumentasi proses dan pembelajaran tetap ada

---

## Anti-patterns untuk Dihindari

Jebakan yang sering terjadi saat portfolio berkembang:

| Anti-Pattern | Dampak | Pencegahan |
|---|---|---|
| Redesign tanpa alasan | Buang waktu, tidak ada ROI | Redesign hanya jika ada masalah nyata yang teridentifikasi dari data |
| Tambah fitur tanpa use case | Technical debt, website bloat | Setiap fitur harus ada di roadmap ini sebelum dibangun |
| Tidak update konten setelah launch | Website terasa ditinggalkan | Content calendar minimum monthly update |
| Over-engineer untuk traffic yang belum ada | Waste effort | Build for current scale, optimize when needed |
| Ganti stack tanpa kebutuhan nyata | Migration cost tinggi | Stack saat ini akan cukup untuk beberapa tahun |
| Blog tanpa konten yang cukup | Kesan tidak serius | Minimal 5 artikel siap sebelum launch /blog |

---

## Key Decisions

1. **Version roadmap dengan milestone yang jelas** — bukan hanya "tambah fitur nanti." V1, V2, V3 punya scope yang berbeda dan success metric yang bisa divalidasi. Ini mencegah feature creep yang tidak terstruktur.

2. **Career milestone → website update map** — ini yang paling mencerminkan Living Portfolio concept. Website tidak hanya berkembang secara teknis, tapi secara naratif mengikuti trajectory karier. Ini yang membedakan dari portfolio yang dibuat sekali dan ditinggalkan.

3. **Analytics sebagai compass** — bukan sekadar vanity metrics. Setiap keputusan V2 dan V3 harus didukung data dari GA4. "Halaman yang paling banyak dikunjungi" menentukan mana yang perlu dioptimasi lebih dulu.

4. **Services page kondisional** — tidak diaktifkan sampai Danu benar-benar siap menerima klien. Halaman services yang ada sebelum waktunya akan menciptakan ekspektasi yang tidak bisa dipenuhi dan merusak positioning sebagai kandidat kerja.

5. **Anti-patterns didokumentasikan** — terutama "redesign tanpa alasan" yang sangat umum terjadi. Redesign adalah distraksi yang mahal jika dilakukan sebelum ada data yang justify-nya.

---

## Design Rationale

- **Tiga dimensi pertumbuhan (website, content, career)** — portfolio yang hanya mengtrack feature development akan kehilangan konteks mengapa website ini ada. Career growth adalah driver utama, website adalah alat.
- **Positioning evolution timeline** — mendokumentasikan bagaimana Hero subheadline dan positioning akan berubah seiring waktu mencegah identity crisis saat karier berkembang. Perubahan ini sudah direncanakan, bukan reactive.

---

## Risks

- **Roadmap bisa tidak relevan jika karier berubah arah** — jika Danu pindah dari digital marketing ke bidang lain. Mitigasi: review roadmap setiap 6 bulan dan revisi sesuai kebutuhan aktual.
- **V2 dan V3 terlalu ambisius** — banyak yang direncanakan, sedikit yang dieksekusi. Mitigasi: fokus pada V1 dulu. V2 baru dimulai setelah V1 solid dan ada data yang justify prioritasnya.
- **Content stagnation** — website tidak diupdate setelah launch karena kesibukan. Mitigasi: content calendar minimum sangat rendah (1 update per bulan) agar realistic untuk diikuti.

---

## Future Improvements

- [ ] Buat Notion dashboard untuk tracking semua metrics dari roadmap ini di satu tempat
- [ ] Setup calendar reminders untuk quarterly review
- [ ] Tambahkan milestone tracking: setiap item di roadmap ini punya target date yang bisa di-update
- [ ] Review dan revisi dokumen ini setelah 6 bulan pertama — validasi asumsi dengan data nyata

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| `01-product-vision.md` | Growth roadmap adalah operasionalisasi jangka panjang dari vision yang sudah ditetapkan |
| `04-goals.md` | Success metrics di setiap version mengacu pada goals yang sudah ditetapkan |
| `19-quality-checklist.md` | Quarterly review di roadmap ini menggunakan checklist dari dokumen tersebut |
| `20-deployment.md` | Setiap versi baru melalui deployment workflow yang sudah ditetapkan |
| Semua dokumen lain | Growth roadmap adalah dokumen penutup yang mengintegrasikan semua keputusan dari Phase 0–8 |
