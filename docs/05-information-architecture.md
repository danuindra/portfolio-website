# 05 — Information Architecture

> Last updated: August 2026
> Status: Active — updated post design review (August 2026)

---

## Overview

Information Architecture (IA) mendefinisikan struktur, hierarki, dan hubungan antar halaman website.

Dokumen ini menjawab:
- Halaman apa saja yang ada?
- Bagaimana pengunjung berpindah antar halaman?
- Konten apa yang masuk di mana?
- Apa yang dibangun sekarang vs nanti?

Prinsip IA untuk Living Portfolio:
> **Mulai minimal. Struktur harus scalable — halaman baru ditambah tanpa merusak navigasi yang sudah ada.**

---

## Sitemap V1

```
portfolio-website/
│
├── / (Home)
│   ├── Hero
│   ├── About (summary)
│   ├── Projects (highlight 3 project)   ← moved up: proof before tools
│   ├── Skills (ringkasan, curated)       ← moved down: supporting context
│   └── Contact (CTA)                    ← Journey removed from Home
│
├── /about
│   ├── Full bio
│   ├── Values & working style
│   └── Timeline lengkap                 ← Skills removed: covered on Home
│
├── /projects
│   ├── Project index (semua project)
│   └── /projects/[slug] (detail project)
│
├── /contact
│   ├── Contact form (Resend)
│   ├── Email link
│   └── Social links
│
└── /404 (custom error page)
```

---

## Sitemap V2+ (Future Pages)

```
portfolio-website/
│
├── /blog (opsional — artikel & catatan belajar)
│   └── /blog/[slug]
│
├── /uses (tools & setup yang digunakan)
│
├── /now (apa yang sedang dikerjakan sekarang)
│
├── /services (saat siap menerima freelance client)
│
└── /resume (versi web dari CV — opsional)
```

> Halaman V2 tidak dibangun sampai V1 solid dan ada alasan nyata untuk menambahnya.

---

## Halaman Detail — V1

### / — Home

**Tujuan:** First impression. Rekruter harus tahu siapa Danu dalam 5 detik pertama.

**Struktur konten (berurutan):**

| Order | Section | Tujuan | Audiens Utama | Review Note |
|---|---|---|---|---|
| 1 | Hero | Identitas + tagline + CTA utama | Rekruter, Hiring Manager | — |
| 2 | About (summary) | Siapa Danu — singkat & engaging | Semua | — |
| 3 | Projects | Highlight 3 project terbaik | Hiring Manager, Freelance Client | ↑ moved up: proof lands before tools |
| 4 | Skills (curated) | Marketing & analytics competencies | Hiring Manager | ↓ moved down: supporting context; dev tools excluded |
| 5 | Contact / CTA | Undang pengunjung untuk terhubung | Semua | — |

> **Journey dihapus dari Home.** Journey tinggal sepenuhnya di /about. Alasan: di fase awal dengan entry terbatas, Journey di Home tidak menambah nilai — malah membuat halaman terasa personal-heavy dibanding proof-heavy. Lihat `23-ux-review.md` Issue 3.

**Design note:** Home adalah ringkasan. Detail ada di halaman masing-masing.
Pengunjung yang ingin lebih dalam akan klik — jangan paksa semua konten masuk ke Home.

---

### /about

**Tujuan:** Menceritakan siapa Danu lebih dalam — cara berpikir, nilai, dan perjalanan.

**Struktur konten:**
- Full bio (lebih panjang dari Hero)
- Values & working style — cara Danu bekerja dan berkolaborasi
- Timeline lengkap — semua milestone pendidikan, program, dan proyek

> **Skills dihapus dari /about.** Skills sudah ditampilkan di Home. Menampilkannya lagi di About menciptakan repetisi, bukan kedalaman. Halaman About harus terasa seperti *going deeper*, bukan membaca ulang. Lihat `23-ux-review.md` Issue 4.

**Kenapa About page terpisah dari Home:**
Rekruter cukup lihat Home untuk keputusan awal. Hiring Manager yang tertarik akan masuk ke /about untuk memvalidasi. Ini menghormati waktu keduanya.

---

### /projects

**Tujuan:** Menampilkan semua karya dengan struktur yang konsisten dan mudah di-scan.

**Struktur index:**
- Filter/tag berdasarkan kategori (Analytics, Marketing, Web, AI)
- Project card: thumbnail · judul · kategori · tools · satu kalimat deskripsi

**Struktur detail `/projects/[slug]`:**
```
1. Header (judul, kategori, tools, timeline)
2. Overview (apa project ini dan mengapa dikerjakan)
3. Problem (masalah yang diselesaikan)
4. Process (langkah-langkah yang diambil)
5. Solution (hasil akhir)
6. Results (angka atau dampak yang terukur)
7. Learnings (apa yang dipelajari)
8. Next Steps (jika relevan)
```

> Format ini konsisten untuk semua project — lihat `13-project-template.md`.

---

### /contact

**Tujuan:** Membuat proses menghubungi Danu semudah mungkin.

**Struktur konten:**
- Kalimat pembuka yang hangat (bukan hanya form kosong)
- Contact form: nama · email · pesan — backend: **Resend + Next.js Server Action**
- Email langsung (sebagai alternatif form)
- Link ke LinkedIn, GitHub, dan platform relevan lainnya
- Status availability (misal: "Open to opportunities" atau "Currently employed")

---

### /404

**Tujuan:** Halaman error yang tetap on-brand dan tidak membuat pengunjung pergi.

**Struktur:**
- Pesan yang ringan dan sesuai tone
- Link kembali ke Home
- Opsional: link ke /projects atau /contact

---

## Navigation Structure

### Primary Navigation (Navbar)

```
Logo/Name    |    About    Projects    Contact
```

- Minimal — hanya halaman utama
- Logo/Name selalu link ke Home
- Active state untuk halaman yang sedang dibuka
- Sticky di desktop, hamburger menu di mobile

**Kenapa tidak ada semua halaman di navbar:**
Navbar yang penuh terasa sibuk dan membebani rekruter yang hanya punya 30 detik. Tiga link sudah cukup untuk V1.

### Secondary Navigation (Footer)

```
© Danu Indra Ismawan    |    About · Projects · Contact    |    LinkedIn · GitHub
```

- Ulangi link utama
- Social media links
- Copyright

### In-page Navigation

- Home: tiap section memiliki anchor link yang bisa dibagikan
- /projects: filter tag untuk navigasi cepat antar kategori
- /projects/[slug]: `← Projects` back link (tanpa breadcrumb penuh — situs terlalu kecil untuk breadcrumb)

---

## Content Hierarchy

Prinsip hierarki konten untuk semua halaman:

```
Level 1 — Page Title / Hero Headline
  └── Level 2 — Section Heading
        └── Level 3 — Sub-section / Card Title
              └── Level 4 — Body copy, metadata, tags
```

Setiap halaman hanya boleh punya **satu H1**.
Ini penting untuk SEO dan aksesibilitas screen reader.

---

## Scalability Rules

Aturan ini memastikan IA tetap sehat saat website berkembang:

1. **Halaman baru masuk ke sitemap ini dulu** sebelum dibangun
2. **Navbar maksimal 5 item** — jika lebih, evaluasi ulang prioritas
3. **Setiap project baru menggunakan slug yang konsisten:** `/projects/nama-project`
4. **Blog/notes** tidak dibangun sampai ada minimal 5 artikel siap tayang
5. **Hapus halaman yang tidak perform** — IA yang baik kadang berarti mengurangi, bukan menambah

---

## Key Decisions

1. **Single Page App vs Multi-page** — dipilih multi-page (Next.js routing) agar setiap halaman bisa diindeks Google secara terpisah. Ini penting untuk SEO personal branding jangka panjang.

2. **Home sebagai ringkasan, bukan all-in-one** — menghindari "infinite scroll portfolio" yang umum tapi melelahkan. Pengunjung yang tertarik akan menjelajah lebih dalam sendiri.

3. **Projects di posisi 3, Skills di posisi 4** — proof (karya nyata) harus mendahului tools. Rekruter yang keluar setelah About langsung melewatkan project — posisi 3 memastikan ini tidak terjadi. Lihat `23-ux-review.md` Issue 1.

4. **Journey hanya di /about** — di fase awal dengan entry terbatas, Journey di Home menambah cognitive load tanpa value. Di /about, Journey dinikmati dalam konteks yang tepat.

5. **Skills ditampilkan hanya di Home (versi curated)** — dev tools (Next.js, TypeScript, dll.) tidak muncul di skills display utama. Mereka muncul di project case studies sebagai konteks teknis, bukan sebagai personal skill utama.

6. **Projects menggunakan dynamic routing `/projects/[slug]`** — memastikan setiap project bisa ditambah tanpa mengubah struktur navigasi. Konsisten dengan Living Portfolio concept.

7. **Blog/Notes sengaja ditunda ke V2** — membangun blog sebelum ada konten yang konsisten hanya akan menciptakan halaman kosong yang merusak kesan profesional.

8. **Custom 404 page** — detail kecil yang mencerminkan perhatian terhadap UX. Rekruter yang salah ketik URL tidak langsung pergi.

---

## Future Improvements

- [ ] Tambahkan `/now` page — halaman yang selalu up-to-date tentang apa yang sedang Danu kerjakan (inspirasi: nownownow.com)
- [ ] Tambahkan `/uses` page — tools dan setup yang digunakan, relevan untuk komunitas developer/marketer
- [ ] Evaluasi apakah `/about` perlu dipecah menjadi `/about` dan `/resume` saat melamar ke perusahaan yang lebih besar
- [ ] Setelah V1 live, cek heatmap (Hotjar atau Microsoft Clarity) untuk validasi apakah struktur navigasi sesuai dengan behavior pengunjung nyata
- [ ] Pertimbangkan search functionality jika jumlah project sudah lebih dari 10

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| `04-goals.md` | Setiap halaman dan section harus mendukung minimal satu goal yang sudah ditetapkan |
| `03-target-audience.md` | Urutan section di Home mencerminkan prioritas audiens |
| `06-user-flow.md` | IA adalah fondasi — user flow menggambarkan *bagaimana* pengunjung berpindah antar halaman ini |
| `07-wireframe.md` | Wireframe dibuat berdasarkan struktur halaman yang sudah didefinisikan di sini |
| `10-components.md` | Daftar komponen dibuat berdasarkan kebutuhan setiap halaman di sitemap ini |
| `13-project-template.md` | Template project mengikuti struktur `/projects/[slug]` yang sudah ditetapkan |
| `15-folder-structure.md` | Struktur folder Next.js harus mencerminkan sitemap ini |
