# 06 — User Flow

> Last updated: August 2026
> Status: Active

---

## Overview

User flow menggambarkan bagaimana setiap tipe pengunjung bergerak melalui website —
dari titik masuk pertama hingga tindakan yang diharapkan (conversion).

Setiap audiens memiliki **mental model yang berbeda** saat tiba di website:
- Rekruter: *"Apakah orang ini cocok untuk posisi yang kami buka?"*
- Hiring Manager: *"Apakah orang ini bisa bekerja dengan cara yang kami butuhkan?"*
- Freelance Client: *"Apakah orang ini bisa membantu bisnis saya?"*
- Mentor/Peer: *"Bagaimana perkembangan orang ini?"*

Website yang baik menjawab pertanyaan tersebut secepat mungkin.

---

## Entry Points

Dari mana pengunjung biasanya datang:

| Entry Point | Audiens yang Mungkin | Halaman Tujuan |
|---|---|---|
| Link di CV / resume | Rekruter, Hiring Manager | `/` (Home) |
| Link di LinkedIn profile | Semua | `/` (Home) |
| Direct search nama di Google | Rekruter, Hiring Manager | `/` (Home) |
| Link project yang dibagikan | Hiring Manager, Freelance Client | `/projects/[slug]` |
| Link dari komunitas / forum | Mentor, Peer | `/projects` atau `/about` |
| Referral dari orang lain | Semua | `/` (Home) |

**Implikasi:** Home page adalah halaman terpenting. Tapi `/projects/[slug]` juga harus bisa berdiri sendiri — pengunjung yang masuk langsung ke project page harus tetap bisa memahami konteks siapa Danu.

---

## Primary User Flow — Rekruter

**Konteks:** Membuka link dari CV atau LinkedIn. Punya 30–60 detik untuk memutuskan apakah lanjut atau tidak.

```
Entry: Home (/)
│
├── [0–5 detik] Hero Section
│   └── Baca: Nama, peran, tagline
│   └── Keputusan: "Relevan untuk posisi ini?"
│       ├── TIDAK → Keluar (bounce)
│       └── YA → Scroll ke bawah
│
├── [5–15 detik] About Summary + Skills
│   └── Baca: Background singkat, tools utama
│   └── Keputusan: "Level-nya cocok?"
│       ├── TIDAK → Keluar
│       └── YA → Lanjut scroll
│
├── [15–30 detik] Projects Highlight
│   └── Scan: Judul project, kategori, tools
│   └── Keputusan: "Ada karya nyata?"
│       ├── TIDAK → Keluar
│       └── YA → Lanjut
│
├── [30–60 detik] Contact / CTA
│   └── Aksi: Klik LinkedIn atau salin email
│   └── ATAU: Klik "View All Projects" untuk lebih dalam
│
└── Conversion: Menghubungi via LinkedIn atau email
```

**Critical moment:** 0–5 detik di Hero. Jika Hero tidak menjawab "siapa ini dan apa yang dia bisa" — rekruter pergi.

---

## Primary User Flow — Hiring Manager

**Konteks:** Sudah melihat CV, ingin validasi lebih dalam. Punya 3–5 menit.

```
Entry: Home (/)
│
├── Hero Section
│   └── Konfirmasi identitas dan positioning
│
├── Projects Highlight
│   └── Klik salah satu project yang relevan
│
├── /projects/[slug] — Detail Project
│   └── Baca: Problem → Process → Results
│   └── Perhatikan: Tools yang digunakan, cara berpikir
│   └── Keputusan: "Apakah pendekatan kerjanya cocok dengan tim kami?"
│       ├── TIDAK → Keluar atau lihat project lain
│       └── YA → Lanjut ke About
│
├── /about
│   └── Baca: Full bio, values, working style
│   └── Konfirmasi: "Apakah orang ini akan fit di tim kami?"
│
└── Conversion: Menghubungi langsung atau merekomendasikan ke rekruter
```

**Critical moment:** Detail project. Hiring manager mengevaluasi *cara berpikir*, bukan hanya output akhir. Case study yang menjelaskan reasoning adalah penentu.

---

## Secondary User Flow — Freelance Client

**Konteks:** Mencari bantuan marketing/analytics untuk bisnisnya. Belum tentu tahu apa yang dia butuhkan secara spesifik.

```
Entry: Home (/) atau /projects langsung
│
├── Hero Section
│   └── Cek: "Apakah orang ini mengerjakan hal yang saya butuhkan?"
│
├── Projects Section
│   └── Scan: Kategori project
│   └── Klik project yang relevan dengan kebutuhannya
│
├── /projects/[slug]
│   └── Baca: Konteks bisnis, hasil yang dicapai
│   └── Keputusan: "Apakah hasil ini sebanding untuk bisnis saya?"
│
├── /about
│   └── Evaluasi: Kepribadian dan cara berkomunikasi
│
├── /contact
│   └── Aksi: Kirim pesan atau email
│
└── Conversion: Memulai diskusi kolaborasi
```

> **Catatan:** Flow ini belum dioptimalkan sepenuhnya di V1 karena belum ada services page. Akan dikembangkan di V2.

---

## Secondary User Flow — Mentor / Peer

**Konteks:** Memantau perkembangan, mencari inspirasi, atau mengikuti perjalanan belajar.

```
Entry: Home (/) atau direct link ke project/about
│
├── Journey / Timeline Section
│   └── Lihat: Milestone terbaru
│
├── /projects
│   └── Scan: Project baru apa yang ditambahkan?
│
├── /about
│   └── Baca: Current focus dan learning direction
│
└── Aksi: Connect di LinkedIn atau share ke komunitas
```

---

## Micro-flows Penting

### Flow: Pengunjung yang Bingung (Tidak Tahu Harus ke Mana)

```
Masuk ke Home
→ Scroll sebentar
→ Tidak menemukan yang dicari
→ Lihat Navbar
→ Pilih "Projects" atau "About"
```

**Implikasi desain:** Navbar harus selalu visible. Label harus jelas — tidak ada label kreatif seperti "My Universe" untuk About page.

---

### Flow: Pengunjung yang Masuk ke Project Page Langsung

```
Entry: /projects/[slug] (dari link yang dibagikan)
│
├── Baca detail project
├── Lihat: "Siapa yang membuat ini?"
├── Klik nama / link ke About atau Home
└── Keputusan: Lanjut explore atau tidak
```

**Implikasi desain:** Setiap halaman project harus punya:
- Nama Danu dengan link ke Home atau About
- CTA di akhir: "Want to work together?" atau "See more projects"

---

### Flow: Mobile Visitor

```
Buka website di HP
→ Hero muncul full screen
→ Scroll dengan jempol
→ Project cards harus tap-friendly
→ Contact harus 1-tap (tel: atau mailto:)
```

**Implikasi desain:** Tap target minimal 44×44px. Tidak ada hover-only interactions di mobile.

---

## Conversion Goals per Flow

| Audiens | Primary Conversion | Secondary Conversion |
|---|---|---|
| Rekruter | Klik LinkedIn / salin email | Download CV (jika tersedia) |
| Hiring Manager | Kirim pesan / email | Share profil ke tim |
| Freelance Client | Kirim pesan lewat contact form | Follow di LinkedIn |
| Mentor/Peer | Connect di LinkedIn | Share project ke komunitas |

---

## Drop-off Points yang Harus Dihindari

Titik-titik di mana pengunjung paling sering pergi — dan cara mengatasinya:

| Drop-off Point | Penyebab | Solusi |
|---|---|---|
| Hero section | Tagline tidak jelas / terlalu generic | Pernyataan yang spesifik dan langsung |
| Loading lambat | File tidak dioptimalkan | Image compression, lazy loading |
| Project tanpa hasil terukur | Deskripsi terlalu umum | Selalu sertakan angka atau dampak nyata |
| Contact page tanpa alternatif | Form tidak berfungsi | Selalu tampilkan email langsung sebagai backup |
| Mobile layout rusak | Tidak responsive | Test di semua breakpoint sebelum launch |

---

## Key Decisions

1. **Flow dibedakan per audiens, bukan satu flow universal** — karena setiap audiens punya pertanyaan berbeda. Desain yang mencoba menjawab semua orang dengan cara yang sama akhirnya tidak menjawab siapapun dengan baik.

2. **Critical moment diidentifikasi eksplisit** — Hero (0–5 detik) untuk rekruter, case study untuk hiring manager. Ini menentukan mana yang harus diprioritaskan saat resources terbatas.

3. **Mobile flow didokumentasikan terpisah** — karena behavior mobile berbeda fundamental. Tap vs hover, scroll vs click, layar kecil vs lebar.

4. **Drop-off points didokumentasikan** — agar saat QA dan testing, ada checklist konkret yang bisa divalidasi.

5. **Freelance client flow sengaja minimal di V1** — karena belum ada services page. Mendokumentasikannya sekarang memastikan V2 bisa dibangun di atas fondasi yang sudah terencana.

---

## Future Improvements

- [ ] Setelah website live, pasang session recording (Microsoft Clarity / Hotjar) untuk melihat flow nyata pengunjung vs flow yang direncanakan di dokumen ini
- [ ] Buat flow khusus untuk `/now` page saat halaman tersebut ditambahkan di V2
- [ ] Tambahkan A/B testing plan untuk Hero CTA — "View My Work" vs "See Projects" untuk melihat mana yang lebih mengkonversi
- [ ] Update flow Freelance Client saat services page sudah dibangun
- [ ] Dokumentasikan exit intent — apa yang terjadi jika pengunjung mau pergi (misal: sticky contact bar)

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| `03-target-audience.md` | Flow dirancang berdasarkan mental model setiap audiens yang sudah didefinisikan |
| `05-information-architecture.md` | Flow bergerak di atas struktur halaman yang sudah ditetapkan di IA |
| `07-wireframe.md` | Wireframe harus memfasilitasi setiap flow yang didokumentasikan di sini |
| `10-components.md` | Komponen CTA, navbar, dan contact harus mendukung setiap conversion point |
| `11-copywriting.md` | Copy di setiap critical moment (Hero, CTA, Project header) harus ditulis dengan flow ini sebagai referensi |
| `19-quality-checklist.md` | Flow ini menjadi dasar untuk test case saat QA — setiap flow harus bisa dieksekusi tanpa hambatan |
