# 19 — Quality Checklist

> Last updated: August 2026
> Status: Active — jalankan sebelum setiap deployment

---

## Overview

Checklist ini adalah gate terakhir sebelum website atau fitur baru dipublikasikan.

Tiga tingkat prioritas:
- 🔴 **Critical** — harus pass. Jangan deploy jika gagal.
- 🟡 **Important** — seharusnya pass. Dokumentasikan jika ada exception.
- 🟢 **Nice to have** — ideal tapi tidak blocking.

Waktu yang dibutuhkan: 20–30 menit untuk full checklist.

Gunakan ini untuk:
- Pre-deployment check (sebelum push ke production)
- Quarterly review (setiap 3 bulan)
- Post-update verification (setelah update besar)

---

## SECTION 1 — Responsive Design

### Desktop (1280px+)
- 🔴 [ ] Layout tidak overflow horizontal
- 🔴 [ ] Container max-width 1200px terpusat dengan benar
- 🔴 [ ] Semua sections punya vertical spacing yang konsisten
- 🟡 [ ] Tidak ada text yang terlalu panjang tanpa line break
- 🟡 [ ] Grid layouts berfungsi dengan benar (2 kolom, 3 kolom)

### Tablet (768px — 1024px)
- 🔴 [ ] Layout menyesuaikan dengan benar (bukan scaled-down desktop)
- 🔴 [ ] Navigation masih bisa digunakan
- 🟡 [ ] Cards dan grids reflow dengan benar
- 🟡 [ ] Images tidak terlalu besar atau terlalu kecil

### Mobile (375px — 767px)
- 🔴 [ ] Tidak ada horizontal scroll
- 🔴 [ ] Touch targets minimal 44×44px (buttons, links, nav items)
- 🔴 [ ] Text readable — minimum 14px body, 16px inputs
- 🔴 [ ] Navbar collapse ke hamburger menu dan berfungsi
- 🔴 [ ] CTA buttons full-width atau setidaknya mudah di-tap
- 🟡 [ ] Images tidak overflow container
- 🟡 [ ] Tidak ada hover-only interactions (karena mobile tidak punya hover)
- 🟡 [ ] Contact links bisa di-tap langsung (mailto:, tel:)

**Testing tools:** Browser DevTools Device Mode, actual device jika tersedia.

---

## SECTION 2 — Performance

### Core Web Vitals
- 🔴 [ ] LCP (Largest Contentful Paint) < 2.5 detik
- 🔴 [ ] CLS (Cumulative Layout Shift) < 0.1
- 🟡 [ ] FID/INP (Interaction) < 200ms
- 🟡 [ ] FCP (First Contentful Paint) < 1.8 detik

### Images
- 🔴 [ ] Semua images menggunakan Next.js `<Image>` component
- 🔴 [ ] Semua images punya `width` dan `height` props (mencegah CLS)
- 🟡 [ ] Hero image di-prioritize dengan `priority` prop
- 🟡 [ ] Project thumbnails 800×450px (16:9), di-compress < 200KB
- 🟡 [ ] OG image ada: `/public/og-default.png` (1200×630px)

### Loading
- 🔴 [ ] Tidak ada blocking resources yang memperlambat initial render
- 🟡 [ ] Fonts di-load dengan `display: swap` (Next.js handle otomatis)
- 🟡 [ ] Heavy components menggunakan dynamic import
- 🟢 [ ] Lighthouse score: Performance > 90

**Testing tools:** Google PageSpeed Insights, Lighthouse di Chrome DevTools.

---

## SECTION 3 — Accessibility

### Semantic Structure
- 🔴 [ ] Setiap halaman punya tepat satu `<h1>`
- 🔴 [ ] Heading hierarchy benar: H1 → H2 → H3 (tidak ada lompatan)
- 🔴 [ ] `<main>` ada di setiap halaman (hanya satu per halaman)
- 🔴 [ ] `<nav>` punya `aria-label` yang deskriptif
- 🟡 [ ] Semantic HTML digunakan: `<header>`, `<footer>`, `<section>`, `<article>`
- 🟡 [ ] `<time>` digunakan untuk tanggal dengan `datetime` attribute

### Images & Media
- 🔴 [ ] Semua `<Image>` punya `alt` text yang deskriptif
- 🔴 [ ] Decorative images punya `alt=""` (empty string)
- 🟡 [ ] Alt text mendeskripsikan konten, bukan hanya nama file

### Keyboard Navigation
- 🔴 [ ] Seluruh website bisa dinavigasi hanya dengan keyboard (Tab, Enter, Escape)
- 🔴 [ ] Focus indicator terlihat di semua interactive elements
- 🔴 [ ] Skip navigation link ada dan berfungsi
- 🔴 [ ] Mobile menu bisa dibuka dan ditutup via keyboard
- 🟡 [ ] Focus trap di mobile menu saat terbuka (Tab tidak keluar dari menu)
- 🟡 [ ] Escape key menutup mobile menu

### Forms
- 🔴 [ ] Semua form inputs punya `<label>` yang terhubung via `htmlFor`
- 🔴 [ ] Error messages terhubung ke input via `aria-describedby`
- 🔴 [ ] Required fields ditandai dengan `required` attribute
- 🟡 [ ] Form submission memberikan feedback yang jelas (success atau error)
- 🟡 [ ] Autocomplete attributes diset untuk common fields

### Color & Contrast
- 🔴 [ ] Body text contrast ratio ≥ 4.5:1 (WCAG AA)
- 🔴 [ ] Large text (18px+ atau 14px+ bold) contrast ratio ≥ 3:1
- 🟡 [ ] UI components (buttons, borders) contrast ratio ≥ 3:1
- 🟡 [ ] Informasi tidak disampaikan hanya melalui warna

### Animation
- 🔴 [ ] `prefers-reduced-motion` dihormati di semua animasi
- 🟡 [ ] Tidak ada animasi yang berkedip lebih dari 3x per detik

**Testing tools:** axe DevTools extension, Chrome Accessibility panel, keyboard navigation manual test.

---

## SECTION 4 — SEO

### Meta Tags
- 🔴 [ ] Setiap halaman punya `<title>` yang unik (max 60 karakter)
- 🔴 [ ] Setiap halaman punya `meta description` yang unik (max 160 karakter)
- 🔴 [ ] Canonical URL ada di setiap halaman
- 🟡 [ ] Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`
- 🟡 [ ] Twitter Card tags tersedia
- 🟢 [ ] Structured data (JSON-LD) untuk project pages

### Technical SEO
- 🔴 [ ] `robots.txt` ada di `/public/robots.txt`
- 🔴 [ ] `sitemap.xml` ter-generate dan accessible
- 🟡 [ ] Semua internal links berfungsi (tidak ada 404)
- 🟡 [ ] Tidak ada duplicate content
- 🟡 [ ] URL structure clean dan deskriptif (`/projects/ga4-dashboard` bukan `/projects/123`)

### Content SEO
- 🟡 [ ] H1 mengandung keyword yang relevan
- 🟡 [ ] Image alt texts mengandung keyword yang natural
- 🟢 [ ] Project pages punya sufficient word count (500+ kata)

**Testing tools:** Google Search Console, Screaming Frog (atau ahrefs free tier).

---

## SECTION 5 — Content Quality

### Copy
- 🔴 [ ] Tidak ada placeholder text ("Lorem ipsum", "[TBD]", "Coming soon" tanpa context)
- 🔴 [ ] Tidak ada typo di halaman utama (Home, About, Projects index)
- 🔴 [ ] Tone konsisten dengan docs/02-personal-branding.md di semua halaman
- 🔴 [ ] RevoU tidak diposisikan sebagai identitas utama — hanya satu milestone
- 🟡 [ ] Semua external links masih valid dan aktif
- 🟡 [ ] Contact information (email, LinkedIn) masih akurat

### Projects
- 🔴 [ ] Semua featured projects punya thumbnail
- 🔴 [ ] Tidak ada project dengan section yang kosong
- 🟡 [ ] Setiap project punya minimal satu hasil terukur atau learning outcome yang spesifik
- 🟡 [ ] Project template diikuti konsisten (dari docs/13-project-template.md)
- 🟢 [ ] Project thumbnails visual quality konsisten

### Journey & Skills
- 🟡 [ ] Journey timeline up-to-date — entry terbaru sudah ditambahkan
- 🟡 [ ] Skills list masih relevan — tidak ada tool yang sudah tidak digunakan
- 🟢 [ ] Status badge ("Open to opportunities") masih akurat

---

## SECTION 6 — Design Consistency

### Visual
- 🔴 [ ] Semua warna menggunakan design system tokens (tidak ada hardcoded values)
- 🔴 [ ] Spacing konsisten menggunakan Tailwind scale
- 🟡 [ ] Typography hierarchy konsisten di semua halaman
- 🟡 [ ] Card styles konsisten (radius, shadow, border)
- 🟡 [ ] Button variants digunakan dengan benar (primary untuk CTA utama, secondary untuk aksi sekunder)

### Dark Mode
- 🔴 [ ] Semua teks readable di dark background
- 🔴 [ ] Tidak ada elemen yang "hilang" di dark background
- 🟡 [ ] Images tidak terlihat aneh di dark background

---

## SECTION 7 — Functionality

### Navigation
- 🔴 [ ] Semua navbar links berfungsi dan mengarah ke halaman yang benar
- 🔴 [ ] Logo/name link mengarah ke Home
- 🔴 [ ] Active state berfungsi (menunjukkan halaman aktif)
- 🔴 [ ] Mobile menu buka dan tutup dengan benar
- 🔴 [ ] Footer links berfungsi

### Forms
- 🔴 [ ] Contact form bisa disubmit (jika ada)
- 🔴 [ ] Form validation berfungsi (required fields, email format)
- 🔴 [ ] Success dan error states ter-handle dengan feedback yang jelas
- 🟡 [ ] Form tidak bisa disubmit dua kali (double submit prevention)

### Projects
- 🔴 [ ] Project filter berfungsi di /projects
- 🔴 [ ] Filter state ter-sync ke URL params
- 🔴 [ ] Project detail pages semua accessible via /projects/[slug]
- 🟡 [ ] Previous/Next project navigation berfungsi

### Analytics
- 🟡 [ ] GA4 tracking terpasang dan berfungsi (cek Real-time di GA4)
- 🟡 [ ] Page views ter-track saat navigasi
- 🟢 [ ] Custom events ter-track (contact click, project view)

---

## SECTION 8 — Technical

### Code Quality
- 🟡 [ ] `npm run build` sukses tanpa error
- 🟡 [ ] ESLint tidak ada error (warning boleh, tapi dicatat)
- 🟡 [ ] TypeScript tidak ada type errors
- 🟡 [ ] Tidak ada `console.log` yang tertinggal di production code
- 🟢 [ ] Bundle size tidak meningkat drastis (cek dengan `next build` output)

### Security
- 🔴 [ ] Tidak ada API keys atau secrets di client-side code
- 🔴 [ ] `.env.local` tidak di-commit ke git
- 🟡 [ ] External links punya `rel="noopener noreferrer"`
- 🟡 [ ] Form inputs ter-sanitize

### Browser Compatibility
- 🟡 [ ] Chrome (latest)
- 🟡 [ ] Firefox (latest)
- 🟡 [ ] Safari (latest) — terutama iOS Safari
- 🟢 [ ] Edge (latest)

---

## SECTION 9 — Pre-Deployment Final Check

Jalankan checklist ini tepat sebelum push ke production:

```
[ ] git status — tidak ada file yang tidak sengaja diubah
[ ] .env.local tidak masuk ke git
[ ] npm run build — sukses tanpa error
[ ] npm run lint — tidak ada error
[ ] Cek halaman utama di localhost sekali lagi: /, /about, /projects, /contact
[ ] Cek satu project detail page
[ ] Cek di mobile viewport (375px) via DevTools
[ ] Vercel preview deployment sudah di-review (jika menggunakan PR workflow)
```

---

## Quarterly Review Checklist

Setiap 3 bulan, jalankan review tambahan ini:

```
Content Review:
[ ] Semua copy masih akurat dan relevan
[ ] Journey timeline sudah diupdate dengan milestone baru
[ ] Skills list sudah diupdate
[ ] Status badge ("Open to opportunities") masih akurat
[ ] Semua project links masih aktif

Performance Review:
[ ] Jalankan Lighthouse dan bandingkan dengan baseline
[ ] Cek Google Search Console untuk crawl errors atau manual actions
[ ] Review GA4 data — halaman mana yang paling banyak dikunjungi? Ada yang perlu dioptimasi?

Technical Review:
[ ] Update dependencies yang ada security patches (npm audit)
[ ] Review Next.js release notes untuk breaking changes atau improvements
[ ] Backup konten: pastikan semua MDX files ada di git
```

---

## Key Decisions

1. **Tiga tingkat prioritas (Critical/Important/Nice to have)** — QA checklist yang "semua harus pass" akan diabaikan karena terasa impossible. Dengan tingkatan prioritas, deployer tahu mana yang truly blocking dan mana yang bisa di-defer.

2. **Checklist diorganisir per domain, bukan per halaman** — lebih efisien untuk dieksekusi. Testing responsive sekaligus untuk semua halaman lebih cepat daripada mengecek setiap kategori per halaman.

3. **Pre-deployment final check dipisahkan** — daftar pendek yang bisa dieksekusi dalam 5 menit. Ini yang paling sering dibutuhkan dan harus semudah mungkin.

4. **Quarterly review sebagai Living Portfolio maintenance** — portfolio yang tidak di-maintain adalah portfolio yang mati. Quarterly review memastikan konten tetap akurat dan relevan seiring waktu.

5. **RevoU positioning dimasukkan ke content checklist** — karena ini adalah risiko yang sudah diidentifikasi dan perlu diverifikasi secara konsisten.

---

## Design Rationale

- **Format checklist markdown dengan emoji priority** — mudah dibaca, mudah dieksekusi, bisa di-copy ke task manager atau Notion jika perlu tracking.
- **Testing tools disebutkan per section** — checklist tanpa tool reference sering membuat developer bingung harus mulai dari mana. Tool yang spesifik membuat eksekusi lebih konkret.

---

## Risks

- **Checklist bisa diabaikan karena terlalu panjang** — mitigasi: gunakan "Pre-Deployment Final Check" section (Section 9) sebagai minimum viable QA. Full checklist untuk major releases saja.
- **Accessibility manual testing sulit untuk solo developer** — mitigasi: pasang axe DevTools extension untuk catch sebagian besar issues secara otomatis.
- **Performance metrics bisa berfluktuasi** — Lighthouse score bisa berbeda-beda tergantung kondisi jaringan. Mitigasi: gunakan Google PageSpeed Insights (server-side) untuk hasil yang lebih konsisten.

---

## Future Improvements

- [ ] Setup GitHub Actions CI yang otomatis menjalankan `build` + `lint` + `type-check` di setiap PR
- [ ] Tambahkan Lighthouse CI untuk auto-check performance dan accessibility score
- [ ] Buat checklist spesifik untuk "new project published" — lebih focused daripada full checklist
- [ ] Tambahkan visual regression testing (Playwright screenshots) di V2 untuk catch UI regressions
- [ ] Setup automated broken link checker yang berjalan weekly

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| `06-user-flow.md` | User flows menjadi basis untuk functional testing — setiap flow harus bisa dieksekusi tanpa hambatan |
| `09-design-system.md` | Design consistency checks memverifikasi implementasi design system |
| `11-copywriting.md` | Content quality checks memverifikasi copy sesuai dengan yang sudah ditetapkan |
| `13-project-template.md` | Project checklist memverifikasi setiap project mengikuti template |
| `16-coding-rules.md` | Technical checks memverifikasi coding rules diikuti |
| `20-deployment.md` | Pre-deployment checklist ini dijalankan sebagai bagian dari deployment workflow |
