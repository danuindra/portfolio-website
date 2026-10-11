import type { RevoUWeek } from '@/types'

// RevoU Digital Marketing Program — 14-week journey
// HOW TO FILL IN:
//   1. Set title: 'Judul project kamu'
//   2. Set shortDescription: 'Deskripsi singkat 1-2 kalimat'
//   3. Set category: pilih dari RevoUCategory di src/types/revou.ts
//   4. Set tools: ['Tool 1', 'Tool 2']
//   5. Set isPlaceholder: false
//   6. (Optional) Set thumbnail: '/images/revou/week-XX/thumbnail.jpg'

export const revouWeeks: RevoUWeek[] = [
  {
    week: 1,
    slug: 'week-01',
    title: 'Landing Page WashClub',
    shortDescription: 'Merancang dan membangun landing page berbasis konversi untuk WashClub, layanan laundry berlangganan antar jemput di Jakarta Selatan. Leads dari form terhubung langsung ke Google Spreadsheet.',
    category: 'Digital Marketing Fundamentals',
    tools: ['Kiro', 'HTML/CSS', 'Google Sheets'],
    thumbnail: undefined,
    isPlaceholder: false,
  },
  {
    week: 2,
    slug: 'week-02',
    title: 'Landing Page YORU PET',
    shortDescription: 'Membangun landing page pre-launching untuk YORU PET, layanan home pet grooming di Yogyakarta. Fokus pada waiting list acquisition dengan copywriting problem-solution dan perbandingan vs petshop biasa.',
    category: 'Digital Marketing Fundamentals',
    tools: ['Kiro', 'HTML/CSS', 'Netlify'],
    thumbnail: undefined,
    isPlaceholder: false,
  },
  {
    week: 3,
    slug: 'week-03',
    title: 'Digital Marketing Campaign Analysis & Reporting',
    shortDescription: 'Menganalisis performa campaign digital marketing (Meta Ads, Google Ads, TikTok Ads) periode Oktober–Desember. Mengidentifikasi 3 key insight dan menyusun rekomendasi realokasi anggaran berbasis data untuk meningkatkan revenue.',
    category: 'Analytics',
    tools: ['Google Slides', 'Data Analytics'],
    thumbnail: undefined,
    liveUrl: 'https://docs.google.com/presentation/d/1i2OhDNItdqjvypUCFMe41ZzrcLonePD6/edit?usp=sharing',
    isPlaceholder: false,
  },
  {
    week: 4,
    slug: 'week-04',
    title: 'WashClub Social Media Marketing Plan',
    shortDescription: 'Menyusun strategi organic social media lengkap untuk WashClub — mulai dari brand identity, target persona, pemilihan platform (Instagram & TikTok), content pillars, content calendar 3 bulan, hingga KPI tracking. Strategi dirancang untuk membangun brand awareness dan mengumpulkan waitlist sebelum layanan resmi diluncurkan.',
    category: 'Social Media Marketing',
    tools: ['Google Slides', 'Canva'],
    thumbnail: undefined,
    liveUrl: 'https://docs.google.com/presentation/d/1o-TxhBFxjlVS6TiL0ahbVf9sNfXxHi5m/edit?usp=sharing',
    isPlaceholder: false,
  },
  {
    week: 5,
    slug: 'week-05',
    title: 'WashClub Content Creation — Carousel Instagram',
    shortDescription: 'Merancang konten carousel Instagram untuk WashClub dengan pendekatan Problem → Comparison → Solution. Mencakup riset target audience (25–35 tahun, gaya hidup urban), penyusunan content pillar, key message, CTA, caption, hingga visual direction yang clean dan tidak hard selling.',
    category: 'Content Marketing',
    tools: ['Google Slides', 'Canva'],
    thumbnail: undefined,
    liveUrl: 'https://docs.google.com/presentation/d/1coLGnNidJ1G9dV0RZhUJJoUIxFYdYQhL/edit?usp=sharing',
    isPlaceholder: false,
  },
  {
    week: 6,
    slug: 'week-06',
    title: 'WashClub Meta Ads Campaign Strategy',
    shortDescription: 'Merancang strategi Meta Ads lengkap untuk WashClub dengan 2 campaign (Leads & Sales), audience segmentation (Cold/Warm/Hot), full campaign tree diagram per ad set dan ad creative, competitor ads analysis vs Kireiwash, serta actionable recommendations berbasis data untuk meningkatkan konversi.',
    category: 'Campaign Strategy',
    tools: ['Google Slides', 'Meta Ads', 'ChatGPT'],
    thumbnail: undefined,
    liveUrl: 'https://docs.google.com/presentation/d/1HvT8pd17l8P-ttRvsKQ9vLw6QDay04c1oPR-yehAGc4/edit?usp=sharing',
    isPlaceholder: false,
  },
  {
    week: 7,
    slug: 'week-07',
    title: 'Strategi KOL WashClub & Audit Media Sosial Aice',
    shortDescription: 'Merancang strategi kampanye influencer untuk WashClub (pre-launch) dengan memilih 3 KOL micro-to-macro yang relevan, menyusun campaign concept per KOL, do\'s & don\'ts konten, serta timeline posting. Dilengkapi audit media sosial @aiceindonesia vs Wall\'s & Campina dengan analisis metrik dan rekomendasi strategis Continue/Start/Stop.',
    category: 'Social Media Marketing',
    tools: ['Google Slides', 'KOL Research', 'Competitor Analysis'],
    thumbnail: undefined,
    liveUrl: 'https://docs.google.com/presentation/d/1WLyasRJOeF0GhecPbaIUm3pPNtNbce5V/edit?usp=sharing',
    isPlaceholder: false,
  },
  {
    week: 8,
    slug: 'week-08',
    title: '3Second Google Ads Search Campaign Strategy',
    shortDescription: 'Merancang strategi Google Ads Search Campaign lengkap untuk 3Second (kategori Men) dengan budget IDR 20jt/bulan. Mencakup keyword research 17 kata kunci, 4-campaign structure (Brand Search, T-Shirts, Outerwear, Competitor Steal), RSA copywriting via Gemini AI, bidding strategy Target CPA, media plan & budget allocation, serta proyeksi 283 konversi dengan ROAS ~3.55x.',
    category: 'Campaign Strategy',
    tools: ['Google Ads', 'Google Slides', 'Gemini AI', 'Keyword Research'],
    thumbnail: undefined,
    liveUrl: 'https://docs.google.com/presentation/d/1EXhu_OmO6X8QP_9yEyjbTtN4GHNY1t4S_2hpxKI0c9g/edit?usp=sharing',
    isPlaceholder: false,
  },
  {
    week: 9,
    slug: 'week-09',
    title: 'WashClub Social Media Ads — Live Campaign',
    shortDescription: 'Group project menjalankan kampanye Meta Ads nyata untuk WashClub (Section Amsterdam, Team 2). Total spend Rp446.566 menghasilkan 3 website leads dengan CTR 3,03% dan CPL Rp148.855. Mencakup campaign structure (3 ad sets), 4-fase optimization journey dari 0 ke 3 leads, performance analysis per audience segment, serta insights & rekomendasi strategis.',
    category: 'Campaign Strategy',
    tools: ['Meta Ads Manager', 'Facebook Ads', 'Canva'],
    thumbnail: undefined,
    liveUrl: 'https://canva.link/axk3ovwo1liwg5t',
    isPlaceholder: false,
  },
  {
    week: 10,
    slug: 'week-10',
    title: 'Q4 2026 Media & Performance Plan – Muda.Id',
    shortDescription: 'Menyusun media plan Q4 2026 siap-pitching untuk brand modest fashion Muda.Id. Mencakup diagnosis performa Q3, strategi portofolio produk & bundling, full-funnel ad structure (Shopee + TikTok), konten brief 5 video, media plan bulanan Oktober–Desember, serta competitor audit vs Klamby. Target: GMV Rp 5,3 Miliar dengan Blended ROAS 25x.',
    category: 'Campaign Strategy',
    tools: ['Shopee Ads', 'TikTok Ads', 'Meta Ads', 'Google Slides', 'Gemini AI'],
    thumbnail: undefined,
    liveUrl: 'https://docs.google.com/presentation/d/1afV0tRuQdko7LEc3iSNmp3VwR5cvT5NV/edit?usp=sharing',
    isPlaceholder: false,
  },
  {
    week: 11,
    slug: 'week-11',
    title: 'WashClub – Google Search Ads Local Demand Testing',
    shortDescription: 'Menjalankan local demand test 5 hari (14–18 Sep) via Google Search Ads untuk WashClub di Jakarta Selatan. Sebagai PM & Designer, mengelola alur kerja tim, merancang struktur kampanye intent-based (4 ad groups), optimasi harian dari automated ke Manual CPC, dan audit GA4 conversion tracking. Hasil: 123 click, CTR 5,66%, 6 GA4-verified leads, CPL Rp83.157, dengan winning keyword "laundry antar jemput" (CTR 10,18%).',
    category: 'Campaign Strategy',
    tools: ['Google Ads', 'Google Analytics 4', 'Gemini AI', 'Google Slides'],
    thumbnail: undefined,
    liveUrl: 'https://drive.google.com/file/d/1SXvdrmjQGEMXBmrbpFOnOUsZPQ2Zyzea/view?usp=sharing',
    isPlaceholder: false,
  },
  {
    week: 12,
    slug: 'week-12',
    title: 'WashClub SEO Content Strategy & Article Execution',
    shortDescription: 'Merancang strategi konten SEO end-to-end untuk WashClub (washclub.biz.id) — mulai dari keyword research (primary + 5 related queries), content brief lengkap, hingga eksekusi artikel blog di WordPress. Artikel menargetkan keyword "laundry bulanan jakarta selatan" dengan struktur H1–H3 teroptimasi, CTA konversi ke formulir pendaftaran langganan, dan validasi tren via Google Trends (>5.000% growth).',
    category: 'SEO',
    tools: ['Google Trends', 'Google Search', 'Gemini AI', 'WordPress', 'Google Slides'],
    thumbnail: undefined,
    liveUrl: 'https://docs.google.com/presentation/d/13FvH5-O9Biq3XqeQqxsYsNwLrchurKbp/edit',
    isPlaceholder: false,
  },
]

// Utility: get a single week by slug
export function getWeekBySlug(slug: string): RevoUWeek | undefined {
  return revouWeeks.find((w) => w.slug === slug)
}

// Utility: get prev/next week for navigation
export function getAdjacentWeeks(slug: string): {
  prev: RevoUWeek | null
  next: RevoUWeek | null
} {
  const idx = revouWeeks.findIndex((w) => w.slug === slug)
  return {
    prev: idx > 0 ? revouWeeks[idx - 1] : null,
    next: idx < revouWeeks.length - 1 ? revouWeeks[idx + 1] : null,
  }
}
