# 27 — Launch Checklist & Growth Setup

> Dibuat: August 2026
> Status: Active — centang setiap item setelah selesai

---

## TAHAP 1 — Selesaikan Website (Sebelum Deploy)

### Koding (bisa dikerjakan Kiro)
- [ ] Buat halaman 404 custom (`src/app/not-found.tsx`)
- [ ] Buat `public/robots.txt`
- [ ] Setup sitemap (`next-sitemap`)
- [ ] Pasang GA4 tracking script di `layout.tsx`
- [ ] Pasang Google Tag Manager script di `layout.tsx`

### Konten (harus dikerjakan sendiri)
- [ ] Tulis project #2 — buat file `content/projects/[nama]/index.mdx`
- [ ] Tulis project #2 versi ID — `index.id.mdx`
- [ ] Tulis project #3 — buat file `content/projects/[nama]/index.mdx`
- [ ] Tulis project #3 versi ID — `index.id.mdx`
- [ ] Buat `og-default.png` (1200×630px) — nama + title + warna brand
- [ ] Isi `siteConfig.email` di `src/data/site.ts`

---

## TAHAP 2 — Deploy ke Vercel

- [ ] Push ke GitHub: `git init` → `git add .` → `git commit` → `git push`
- [ ] Buka [vercel.com](https://vercel.com) → Import repo → Deploy
- [ ] Isi Environment Variables di Vercel Dashboard:
  - [ ] `RESEND_API_KEY`
  - [ ] `CONTACT_EMAIL_TO`
  - [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - [ ] `NEXT_PUBLIC_SITE_URL`
- [ ] Test contact form di URL Vercel (bukan localhost)
- [ ] Beli domain `danuindra.com` (Namecheap / Niagahoster)
- [ ] Sambungkan domain ke Vercel (DNS settings)
- [ ] Tunggu SSL aktif (biasanya < 30 menit)

---

## TAHAP 3 — Analytics Setup

### Google Analytics 4
- [ ] Buka [analytics.google.com](https://analytics.google.com) → buat akun
- [ ] Buat Property → Web Stream → copy `Measurement ID` (G-XXXXXXXXXX)
- [ ] Isi `NEXT_PUBLIC_GA_MEASUREMENT_ID` di Vercel env vars
- [ ] Verifikasi: buka website → cek GA4 Real-time ada active user
- [ ] Simpan screenshot data pertama — bisa jadi konten LinkedIn

### Google Tag Manager
- [ ] Buka [tagmanager.google.com](https://tagmanager.google.com) → buat akun
- [ ] Pasang GTM snippet di `layout.tsx`
- [ ] Buat trigger untuk: klik LinkedIn, klik GitHub, submit contact form
- [ ] Test via GTM Preview mode
- [ ] **Nilai interview:** bisa demo GTM live dari portfolio sendiri

### Google Search Console
- [ ] Buka [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Add property → masukkan domain `danuindra.com`
- [ ] Verifikasi ownership (via HTML meta tag di `layout.tsx`)
- [ ] Submit sitemap: `https://danuindra.com/sitemap.xml`
- [ ] Tunggu 3–7 hari untuk data pertama muncul

---

## TAHAP 4 — Notifikasi & Otomasi (Gratis)

### Telegram Bot (notifikasi pesan masuk)
- [ ] Buat bot di Telegram: cari `@BotFather` → `/newbot`
- [ ] Copy Bot Token
- [ ] Hubungkan ke contact form via `src/app/actions/contact.ts`
- [ ] Test: isi form → notifikasi masuk ke Telegram HP

### Auto-reply Email (Resend)
- [ ] Update `src/app/actions/contact.ts` — tambah kirim email ke pengirim
- [ ] Test: isi form → pengirim dapat email balasan otomatis

### UTM Tracking (untuk LinkedIn sharing)
- [ ] Buat UTM link khusus untuk di-share di LinkedIn:
  `https://danuindra.com?utm_source=linkedin&utm_medium=profile&utm_campaign=bio`
- [ ] Pasang di LinkedIn profile → website field
- [ ] Monitor di GA4: berapa yang datang dari LinkedIn

---

## TAHAP 5 — Notion sebagai Command Center (Gratis)

- [ ] Buat workspace Notion untuk portfolio management
- [ ] Buat halaman **Content Calendar**:
  - Project ideas yang akan ditulis
  - Target tanggal publish
  - Status (draft / in progress / published)
- [ ] Buat halaman **Lead Tracker**:
  - Nama recruiter / perusahaan yang menghubungi
  - Tanggal kontak
  - Status follow-up
- [ ] Buat halaman **Analytics Dashboard**:
  - Screenshot GA4 monthly report
  - Insight dan action items

---

## TAHAP 6 — Post-Launch (Setelah Website Live)

### Minggu pertama
- [ ] Share ke LinkedIn dengan UTM link
- [ ] Minta 2–3 orang terpercaya review website
- [ ] Cek GA4 Real-time setiap hari — lihat siapa yang datang

### Bulan pertama
- [ ] Publish project #4
- [ ] Update Journey timeline
- [ ] Review GA4: halaman apa yang paling banyak dikunjungi?
- [ ] Cek Search Console: keyword apa yang bawa traffic?

### Persiapan interview
- [ ] Screenshot GA4 dashboard portfolio sendiri
- [ ] Buat slide atau catatan: "ini data traffic portfolio saya"
- [ ] Siapkan cerita: "saya pasang GA4 di website sendiri dan ini yang saya temukan"
- [ ] Demo GTM live jika pewawancara tertarik

---

## Catatan Penting

**Yang TIDAK perlu dikerjakan sekarang:**
- Blog / writing section → V3 (1–2 tahun)
- Services page → hanya jika siap freelance
- Project search → hanya jika project > 10
- CMS migration → hanya jika konten > 50 items

**Urutan prioritas jika waktu terbatas:**
1. Project #2 dan #3 (konten paling penting)
2. Deploy ke Vercel
3. GA4 aktif
4. Google Search Console
5. Sisanya bisa menyusul

---

## Progress Tracker

| Tahap | Total Item | Selesai | % |
|---|---|---|---|
| Tahap 1 — Website | 11 | 0 | 0% |
| Tahap 2 — Deploy | 10 | 0 | 0% |
| Tahap 3 — Analytics | 12 | 0 | 0% |
| Tahap 4 — Otomasi | 7 | 0 | 0% |
| Tahap 5 — Notion | 6 | 0 | 0% |
| Tahap 6 — Post-Launch | 8 | 0 | 0% |
| **Total** | **54** | **0** | **0%** |

---

## ROADMAP OTOMASI & AI

> Dikerjakan bertahap setelah website live. Semua gratis atau hampir gratis.

---

### Level 1 — Komunikasi Otomatis *(setelah deploy)*

- [ ] **Auto-reply ke pengirim form kontak**
  Setiap orang yang kirim pesan langsung dapat email balasan otomatis.
  Tool: Resend (sudah terpasang) — tinggal tambah 1 fungsi kirim email kedua.

- [ ] **Email notifikasi format rapi**
  Email yang masuk ke inbox Anda pakai HTML template yang enak dibaca — bukan plain text.
  Tool: Resend HTML template.

- [ ] **Weekly digest otomatis**
  Setiap Senin dapat ringkasan: berapa visitor, dari mana, halaman apa yang paling banyak dilihat.
  Tool: GA4 Data API + Resend + Make (gratis 1.000 ops/bulan).

---

### Level 2 — Website yang Update Sendiri *(1–3 bulan post-launch)*

- [ ] **Auto-publish project dari Notion**
  Tulis case study di Notion → website otomatis update tanpa buka code editor.
  Tool: Notion API + Make + GitHub API (trigger Vercel redeploy).

- [ ] **Testimonial / endorsement feed**
  Rekomendasi LinkedIn ditarik otomatis dan tampil di website.
  Tool: LinkedIn API atau manual update via Notion.

- [ ] **Blog / notes — publish dari mana saja**
  Tulis di Obsidian atau Notion → otomatis jadi halaman di website.
  Tool: Notion API atau Obsidian Git plugin + MDX pipeline (sudah ada).

---

### Level 3 — AI Assistant Terintegrasi *(3–6 bulan post-launch)*

- [ ] **AI chat widget**
  Pengunjung bisa tanya: "apa project terbaiknya?" atau "apakah dia cocok untuk posisi ini?"
  AI jawab berdasarkan konten portfolio.
  Tool: OpenAI API + Vercel AI SDK. Biaya: ~$1–5/bulan tergantung traffic.

- [ ] **CV generator otomatis**
  Paste job description → AI generate versi CV yang relevan dari data portfolio Anda.
  Tool: OpenAI API + form input di halaman tersembunyi (`/cv-gen` private).

- [ ] **Lead scoring otomatis**
  Setiap pesan masuk dianalisis AI — recruiter serius, klien potensial, atau spam.
  Anda dapat notifikasi Telegram dengan label prioritas.
  Tool: OpenAI API + Resend + Telegram Bot.

---

### Level 4 — Portfolio yang Belajar Sendiri *(6–12 bulan post-launch)*

- [ ] **Analytics → AI insight → saran konten**
  GA4 data dikirim ke AI setiap minggu → AI kasih rekomendasi:
  "Bounce rate About 80%, coba persingkat section bio."
  Tool: GA4 Data API + OpenAI API + Telegram Bot.

- [ ] **A/B testing otomatis headline dan CTA**
  Dua versi hero text dirotasi, GA4 track mana yang lebih banyak klik.
  Tool: Next.js middleware + GA4 custom events.

- [ ] **Personal brand monitoring**
  Pantau mention nama "Danu Indra" atau "danuindra.com" di internet.
  Dapat notifikasi Telegram kalau ada yang nyebut.
  Tool: Google Alerts (gratis) + Telegram Bot via webhook.

---

### Catatan Biaya

| Level | Estimasi Biaya/Bulan |
|---|---|
| Level 1 | Rp 0 (semua gratis) |
| Level 2 | Rp 0 (Notion free + Make free tier) |
| Level 3 | Rp 15.000–75.000 (OpenAI API, tergantung usage) |
| Level 4 | Rp 15.000–75.000 (sama, plus Google Alerts gratis) |

---

## Progress Tracker (Updated)

| Tahap | Total Item | Selesai | % |
|---|---|---|---|
| Tahap 1 — Website | 11 | 0 | 0% |
| Tahap 2 — Deploy | 10 | 0 | 0% |
| Tahap 3 — Analytics | 12 | 0 | 0% |
| Tahap 4 — Otomasi | 7 | 0 | 0% |
| Tahap 5 — Notion | 6 | 0 | 0% |
| Tahap 6 — Post-Launch | 8 | 0 | 0% |
| Roadmap L1 — Komunikasi | 3 | 0 | 0% |
| Roadmap L2 — Auto-update | 3 | 0 | 0% |
| Roadmap L3 — AI Assistant | 3 | 0 | 0% |
| Roadmap L4 — Self-learning | 3 | 0 | 0% |
| **Total** | **66** | **0** | **0%** |
