# 20 — Deployment

> Last updated: August 2026
> Status: Active — updated post design review (August 2026)

---

## Overview

Deployment strategy untuk Living Portfolio mengutamakan:
- **Simplicity** — push ke main = deploy otomatis
- **Zero downtime** — tidak ada maintenance window
- **Rollback capability** — setiap deployment bisa di-revert dalam < 1 menit
- **Free tier** — tidak ada biaya hosting untuk personal portfolio

Platform: **Vercel** — dipilih karena zero-config untuk Next.js dan reliability tinggi.
Repository: **GitHub** — source of truth untuk semua code dan konten.

---

## Architecture Overview

```
Local Development
      │
      │  git push origin main
      ▼
GitHub Repository
      │
      │  Vercel auto-detects push
      ▼
Vercel Build Pipeline
  ├── npm install
  ├── npm run build (next build)
  ├── Type check + lint (opsional via CI)
  └── Deploy to Edge Network
      │
      ▼
Production: danuindra.com (atau domain yang dipilih)
      │
      ├── Vercel Analytics (lightweight)
      └── Google Analytics 4 (detailed)
```

---

## PHASE 1 — Initial Setup

### Step 1: GitHub Repository

```bash
# Inisialisasi git di project folder
git init
git add .
git commit -m "chore: initial project setup"

# Buat repository di GitHub (via github.com atau gh CLI)
gh repo create portfolio-website --private

# Push ke GitHub
git remote add origin https://github.com/[username]/portfolio-website.git
git branch -M main
git push -u origin main
```

**Catatan:** Repository bisa private — Vercel tetap bisa deploy dari private repo.

---

### Step 2: Connect Vercel

1. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub
2. Klik **"Add New Project"**
3. Import repository `portfolio-website` dari GitHub
4. Vercel auto-detect Next.js — konfirmasi settings:
   ```
   Framework Preset: Next.js
   Root Directory:   ./
   Build Command:    npm run build
   Output Directory: .next (auto)
   Install Command:  npm install
   ```
5. Klik **"Deploy"**

Website akan live di `portfolio-website-[hash].vercel.app` dalam ~2 menit.

---

### Step 3: Environment Variables

Di Vercel Dashboard → Project → Settings → Environment Variables:

```
Variable Name                    Value                Environment
──────────────────────────────────────────────────────────────────
NEXT_PUBLIC_GA_MEASUREMENT_ID    G-XXXXXXXXXX         Production, Preview
NEXT_PUBLIC_SITE_URL             https://danuindra.com Production
NEXT_PUBLIC_SITE_URL             https://preview-url  Preview (auto)
RESEND_API_KEY                   re_xxxxxxxxxxxx      Production, Preview
CONTACT_EMAIL_TO                 danu@email.com       Production, Preview
```

**Cara mendapatkan GA Measurement ID:**
1. Buka Google Analytics 4
2. Admin → Data Streams → Web Stream
3. Copy Measurement ID (format: `G-XXXXXXXXXX`)

**Penting:** Setelah menambah environment variables, trigger redeploy:
Vercel Dashboard → Deployments → klik titik tiga → Redeploy

---

### Step 4: Custom Domain

1. Beli domain (rekomendasi: Namecheap, Cloudflare, atau Google Domains)
   - Nama yang disarankan: `danuindra.com` atau `danuindraismawan.com`
   - Pilih `.com` — lebih profesional untuk portfolio career

2. Di Vercel Dashboard → Project → Settings → Domains:
   - Klik **"Add"** dan masukkan domain
   - Vercel akan memberikan DNS records yang perlu dikonfigurasi

3. Di DNS provider (Namecheap/Cloudflare/dll):
   ```
   Jika menggunakan Cloudflare (rekomendasi):
   Type: CNAME
   Name: @
   Target: cname.vercel-dns.com
   Proxy: OFF (important!)

   Type: CNAME
   Name: www
   Target: cname.vercel-dns.com
   Proxy: OFF
   ```

4. Tunggu DNS propagasi (biasanya 5–30 menit dengan Cloudflare)

5. Vercel otomatis provision SSL certificate (Let's Encrypt)

**Rekomendasi tambahan:** Setup `www` redirect ke apex domain atau sebaliknya — konsisten.

---

### Step 5: Vercel Analytics

1. Vercel Dashboard → Project → Analytics tab
2. Enable Analytics (gratis untuk hobby tier)
3. Ini terpisah dari GA4 — lightweight, privacy-friendly, tanpa cookie

---

### Step 6: Resend — Contact Form Email

1. Buka [resend.com](https://resend.com) dan buat akun gratis
2. Dashboard → API Keys → **Create API Key**
   - Name: `portfolio-contact`
   - Permission: `Sending access`
3. Copy API key (hanya ditampilkan sekali) → simpan di `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   CONTACT_EMAIL_TO=your-email@gmail.com
   ```
4. Tambahkan ke Vercel environment variables (lihat Step 3)
5. **Verifikasi domain** (opsional tapi dianjurkan untuk production):
   - Resend Dashboard → Domains → Add Domain
   - Tambahkan DNS records yang diberikan ke domain provider
   - Setelah verified, ubah `from` di Server Action menjadi `noreply@danuindra.com`

**Test form submission:**
```bash
# Jalankan dev server
npm run dev

# Buka /contact, isi form, submit
# Cek inbox email CONTACT_EMAIL_TO
# Verifikasi tidak masuk spam folder
```

**Server Action implementation** ada di `src/app/actions/contact.ts`:
```typescript
'use server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required' }
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <noreply@danuindra.com>',
      to: process.env.CONTACT_EMAIL_TO!,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    })
    return { success: true }
  } catch (error) {
    console.error('Email send failed:', error)
    return { success: false, error: 'Failed to send message' }
  }
}
```

---

### Step 7: Google Search Console

1. Buka [Google Search Console](https://search.google.com/search-console)
2. Klik **"Add property"** → pilih **"URL prefix"**
3. Masukkan: `https://danuindra.com`
4. Verifikasi ownership:
   - Pilih method **"HTML tag"**
   - Copy meta tag verification
   - Tambahkan ke `src/app/layout.tsx`:
     ```typescript
     export const metadata: Metadata = {
       verification: {
         google: 'verification-code-here',
       },
     }
     ```
5. Submit sitemap: `https://danuindra.com/sitemap.xml`

---

## PHASE 2 — Deployment Workflow

### Standard Deployment (Content Update)

Untuk menambah project baru, update journey, atau update copy:

```bash
# Buat/edit file di content/
# Contoh: tambah project baru
# content/projects/new-project/index.mdx

# Review perubahan
git diff

# Stage dan commit
git add content/projects/new-project/
git commit -m "content: add new-project case study"

# Push — Vercel auto-deploy
git push origin main
```

**Estimasi waktu:** 2–3 menit dari push ke live.

---

### Feature Development (Code Change)

Untuk perubahan code (komponen baru, fitur, styling):

```bash
# Buat feature branch
git checkout -b feat/[nama-fitur]

# Kerjakan perubahan...

# Jalankan quality checklist lokal
npm run build
npm run lint
npm run type-check

# Commit dengan Conventional Commits
git add src/components/NamaKomponen/
git commit -m "feat: add NamaKomponen with accessibility support"

# Push feature branch
git push origin feat/[nama-fitur]
```

**Vercel Preview Deployment:**
Setiap push ke branch selain `main` otomatis mendapat preview URL unik:
`portfolio-website-git-feat-nama-fitur-[hash].vercel.app`

Review preview, pastikan semua benar, lalu:

```bash
# Merge ke main (langsung jika solo, PR jika ingin history yang bersih)
git checkout main
git merge feat/[nama-fitur]
git push origin main

# Hapus feature branch setelah merge
git branch -d feat/[nama-fitur]
git push origin --delete feat/[nama-fitur]
```

---

### Rollback

Jika deployment bermasalah, rollback dalam < 1 menit:

```
Via Vercel Dashboard:
1. Project → Deployments
2. Temukan deployment sebelumnya yang berfungsi
3. Klik titik tiga → "Promote to Production"
```

---

## PHASE 3 — Post-Deployment Verification

Setelah setiap deployment ke production, verifikasi:

```
[ ] Website live di domain (danuindra.com)
[ ] Home page load dengan benar
[ ] Cek halaman yang diubah/ditambah
[ ] Mobile view berfungsi (DevTools quick check)
[ ] Tidak ada console errors di browser
[ ] GA4 Real-time menunjukkan active session
[ ] Contact form submission berhasil dikirim dan diterima di email
[ ] Vercel deployment status: "Ready" (bukan "Error")
```

---

## Environment Configuration

### `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict mode untuk better DX
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [], // tambahkan external image domains jika perlu
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },

  // Redirect www ke apex (atau sebaliknya — pilih salah satu)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.danuindra.com' }],
        destination: 'https://danuindra.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
```

---

### `robots.txt`

```
# /public/robots.txt
User-agent: *
Allow: /

Sitemap: https://danuindra.com/sitemap.xml
```

---

### Sitemap Setup

Install dan konfigurasi `next-sitemap`:

```bash
npm install next-sitemap@[latest-version]
```

```javascript
// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://danuindra.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/404'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/projects'),
    await config.transform(config, '/contact'),
  ],
}
```

```json
// package.json — tambahkan ke scripts
{
  "scripts": {
    "postbuild": "next-sitemap"
  }
}
```

Sitemap akan otomatis di-generate setiap build dan include semua project pages.

---

## Monitoring & Alerts

### Yang dimonitor secara aktif:

| Metric | Tool | Frekuensi Review |
|---|---|---|
| Traffic & engagement | Google Analytics 4 | Mingguan |
| Search visibility | Google Search Console | Bulanan |
| Performance | Vercel Analytics | Bulanan |
| Build status | Vercel Dashboard | Setiap deployment |
| Uptime | Vercel (built-in) | Pasif |

### Setup GA4 basic events tracking:

```typescript
// src/lib/analytics.ts
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function trackEvent(action: string, category: string, label?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    })
  }
}

// Penggunaan:
// trackEvent('click', 'contact', 'linkedin')
// trackEvent('view', 'project', 'ga4-dashboard')
```

---

## Domain Selection Guide

Jika domain belum dibeli, pertimbangkan:

| Domain | Kelebihan | Kekurangan |
|---|---|---|
| `danuindra.com` | Pendek, mudah diingat | Perlu cek availability |
| `danuindraismawan.com` | Nama lengkap, SEO untuk nama | Panjang, susah dieja |
| `danuindra.dev` | Signal developer | Kurang familiar untuk non-tech |
| `danuindra.id` | Indonesia TLD, unik | Kurang global |

**Rekomendasi:** `danuindra.com` sebagai primary. Beli juga `danuindraismawan.com` dan redirect ke primary jika budget memungkinkan.

---

## Key Decisions

1. **Vercel sebagai deployment platform** — zero-config untuk Next.js, preview deployments gratis, rollback satu klik, SSL otomatis. Tidak ada alternatif yang menawarkan kombinasi ini dengan better DX untuk solo developer.

2. **main branch = production** — untuk solo developer, branch strategy yang kompleks tidak memberikan value. Feature branch hanya untuk perubahan code yang signifikan; content updates langsung ke main.

3. **Preview deployments untuk code changes** — setiap feature branch mendapat URL preview. Ini memungkinkan review visual sebelum merge ke production — penting karena tidak ada staging server terpisah.

4. **next-sitemap sebagai postbuild step** — sitemap di-generate otomatis setiap build. Ini memastikan project baru langsung masuk sitemap tanpa langkah manual.

5. **Security headers di next.config.js** — basic security hardening yang tidak membutuhkan infrastruktur tambahan. X-Frame-Options mencegah clickjacking, X-Content-Type-Options mencegah MIME sniffing.

6. **Resend sebagai email backend contact form** — 3,000 emails/bulan gratis, zero infrastructure, native Server Actions integration. Deployment setup membutuhkan satu API key dan satu env variable. Lihat `25-technical-review.md` Issue 3.

---

## Design Rationale

- **Workflow yang didokumentasikan per scenario** — bukan hanya "push to deploy." Content update, feature development, dan rollback punya langkah yang berbeda dan perlu diperlakukan berbeda.
- **Post-deployment verification sebagai habit** — ini yang mencegah "deploy and forget" yang berakhir dengan production broken tanpa yang tahu.

---

## Risks

- **Vercel free tier limits** — 100GB bandwidth per bulan. Untuk portfolio personal traffic, ini lebih dari cukup. Jika viral, Vercel akan notify sebelum blocking traffic.
- **Domain expiry** — domain yang expire akan membuat website tidak accessible. Mitigasi: setup auto-renewal di domain provider dan set calendar reminder 30 hari sebelum expiry.
- **Dependency pada Vercel** — jika Vercel berubah pricing atau policy. Mitigasi: next.config.js dan code tidak ada Vercel-specific features yang tidak bisa di-migrate ke Netlify atau Cloudflare Pages.
- **GA4 script blocking performance** — Google Analytics menambah ~45kb. Mitigasi: load dengan `strategy="afterInteractive"` di Next.js Script component.

---

## Future Improvements

- [ ] Setup GitHub Actions CI untuk automated testing sebelum merge ke main
- [ ] Tambahkan Lighthouse CI di pipeline untuk auto-check performance setiap deployment
- [ ] Setup error monitoring (Sentry free tier) saat website sudah dapat traffic nyata
- [ ] Pertimbangkan Cloudflare sebagai CDN tambahan di atas Vercel untuk performance yang lebih baik di Asia
- [ ] Setup uptime monitoring (Better Uptime atau UptimeRobot free tier) untuk notifikasi downtime

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| `14-tech-stack.md` | Next.js dan Vercel sebagai deployment platform sudah ditetapkan di tech stack |
| `15-folder-structure.md` | `next.config.js`, `robots.txt`, dan `public/` directory ada di struktur yang sudah ditetapkan |
| `19-quality-checklist.md` | Pre-deployment checklist dari dokumen ini harus dijalankan sebelum setiap push ke production |
| `21-growth-roadmap.md` | Analytics setup di sini adalah fondasi untuk tracking growth metrics di roadmap |
