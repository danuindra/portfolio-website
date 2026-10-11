# 15 — Folder Structure

> Last updated: August 2026
> Status: Active — updated post design review (August 2026)

---

## Overview

Struktur folder ini dirancang berdasarkan dua prinsip utama:

1. **Content terpisah dari code** — menambah project baru tidak menyentuh source code
2. **Struktur folder = struktur URL** — Next.js App Router membuat ini natural

Setiap folder punya tanggung jawab yang jelas.
Jika ragu file ini harus di mana, tanya: *"Apakah ini code atau content?"*

---

## Full Structure

```
portfolio-website/
│
├── .github/
│   └── workflows/
│       └── ci.yml                    # GitHub Actions — lint + type check
│
├── content/                          # CONTENT — sering disentuh
│   └── projects/                     # Setiap project = satu folder
│       ├── ga4-dashboard/
│       │   ├── index.mdx             # Konten utama project
│       │   ├── thumbnail.jpg         # 800×450px, 16:9
│       │   ├── cover.jpg             # Full-width hero image
│       │   └── images/               # Screenshot, mockup, diagram
│       │       ├── dashboard-overview.png
│       │       └── metric-breakdown.png
│       │
│       └── landing-page-revou/
│           ├── index.mdx
│           ├── thumbnail.jpg
│           └── images/
│
├── public/                           # Static assets — served as-is
│   ├── images/
│   │   ├── profile.jpg               # Foto profil
│   │   └── og-default.png            # Default OG image (1200×630)
│   ├── fonts/                        # Self-hosted fonts (opsional)
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml                   # Auto-generated oleh next-sitemap
│
├── src/
│   ├── app/                          # Next.js App Router — struktur = URL
│   │   ├── layout.tsx                # Root layout (Navbar, Footer, fonts)
│   │   ├── page.tsx                  # / — Home page
│   │   ├── not-found.tsx             # /404 — Custom 404
│   │   ├── globals.css               # Global styles, CSS variables
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx              # /about
│   │   │
│   │   ├── projects/
│   │   │   ├── page.tsx              # /projects — index
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # /projects/[slug] — detail
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx              # /contact
│   │   │
│   │   └── actions/                  # Next.js Server Actions
│   │       └── contact.ts            # sendContactEmail() — Resend integration
│   │
│   ├── components/                   # Semua komponen React
│   │   ├── layout/
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── MobileMenu.tsx
│   │   │   ├── Footer/
│   │   │   │   └── Footer.tsx
│   │   │   └── Container/
│   │   │       └── Container.tsx
│   │   │
│   │   ├── ui/                       # Atomic UI components
│   │   │   ├── Button/
│   │   │   │   └── Button.tsx
│   │   │   ├── Badge/
│   │   │   │   └── Badge.tsx
│   │   │   ├── Tag/
│   │   │   │   └── Tag.tsx
│   │   │   └── SectionLabel/
│   │   │       └── SectionLabel.tsx
│   │   │
│   │   ├── sections/                 # Page sections — digunakan di app/
│   │   │   ├── Hero/
│   │   │   │   └── Hero.tsx
│   │   │   ├── AboutSummary/
│   │   │   │   └── AboutSummary.tsx
│   │   │   ├── Skills/
│   │   │   │   └── Skills.tsx
│   │   │   ├── ProjectsHighlight/
│   │   │   │   └── ProjectsHighlight.tsx
│   │   │   ├── Journey/
│   │   │   │   └── Journey.tsx
│   │   │   └── ContactCTA/
│   │   │       └── ContactCTA.tsx
│   │   │
│   │   ├── project/                  # Project-specific components
│   │   │   ├── ProjectCard/
│   │   │   │   └── ProjectCard.tsx
│   │   │   ├── ProjectFilter/
│   │   │   │   └── ProjectFilter.tsx
│   │   │   ├── ProjectHeader/
│   │   │   │   └── ProjectHeader.tsx
│   │   │   ├── ProjectMetric/
│   │   │   │   └── ProjectMetric.tsx
│   │   │   └── ProjectNav/
│   │   │       └── ProjectNav.tsx
│   │   │
│   │   └── shared/                   # Cross-cutting components
│   │       ├── AnimatedSection/
│   │       │   └── AnimatedSection.tsx
│   │       └── StatusBadge/
│   │           └── StatusBadge.tsx
│   │
│   ├── data/                         # Static data — sering diupdate  ← moved from content/data/
│   │   ├── journey.ts                # Timeline entries
│   │   ├── skills.ts                 # Skills & tools list (curated display)
│   │   └── site.ts                   # Site-wide config (name, social links, etc.)
│   │
│   ├── lib/                          # Utility functions & helpers
│   │   ├── mdx.ts                    # MDX parsing & project data fetching
│   │   ├── utils.ts                  # cn() dan general utilities
│   │   ├── metadata.ts               # createMetadata() helper
│   │   └── analytics.ts              # GA4 trackEvent() helper
│   │
│   └── types/                        # TypeScript type definitions
│       ├── project.ts                # ProjectFrontmatter, ProjectPage, ProjectCardData
│       ├── journey.ts                # JourneyEntry
│       └── index.ts                  # Re-export semua types
│
├── .env.local                        # Environment variables (tidak di-commit)
├── .env.example                      # Template env variables (di-commit)
├── .eslintrc.json                    # ESLint config
├── .gitignore
├── .prettierrc                       # Prettier config
├── next.config.js                    # Next.js configuration
├── next-sitemap.config.js            # Sitemap generation config
├── postcss.config.js                 # PostCSS (dibutuhkan Tailwind)
├── tailwind.config.js                # Design tokens dari 09-design-system.md
├── tsconfig.json                     # TypeScript configuration
├── package.json
└── README.md
```

---

## Penjelasan Per Layer

### `/content/` — Content Layer

**Ini adalah wilayah yang paling sering disentuh.**

Ketika menambah project baru, hanya folder ini yang perlu disentuh:
```
content/projects/nama-project/
  index.mdx        ← tulis konten di sini
  thumbnail.jpg    ← tambah gambar di sini
```

Tidak perlu menyentuh `/src/` sama sekali. Ini adalah prinsip terpenting untuk Living Portfolio scalability.

> **`content/data/` dihapus.** TypeScript data files dipindahkan ke `src/data/` agar berada dalam boundary
> yang di-monitor Next.js dan TypeScript secara default. Lihat `25-technical-review.md` Issue 4.

---

### `/src/data/` — Data Layer

Data statis yang sering diupdate — journey entries, skills list, site config.

```typescript
// src/data/journey.ts
import type { JourneyEntry } from '@/types'

export const journeyEntries: JourneyEntry[] = [
  {
    date: "Aug 2026",
    title: "RevoU Digital Marketing Program",
    organization: "RevoU",
    description: "Structured learning in digital marketing. One milestone in an ongoing learning path.",
    isCurrent: true,
  },
  // tambah entry baru di sini — format: "Mon YYYY"
]

// src/data/skills.ts
import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    name: "Marketing & Strategy",
    skills: ["Google Analytics 4", "Google Search Console", "SEO", "SEM", "Content Strategy"],
  },
  // dev frameworks (Next.js, TypeScript, dll.) TIDAK ada di sini
  // mereka muncul di project case studies sebagai tool context
]

// src/data/site.ts
export const siteConfig = {
  name: "Danu Indra Ismawan",
  title: "Digital Marketer & Analyst",
  email: "",         // isi sebelum launch
  linkedin: "linkedin.com/in/danuindra",
  github: "github.com/danuindra",
  domain: "danuindra.com",
}
```

---

### `/src/app/` — Routing Layer

Mengikuti Next.js App Router convention:
- Setiap folder = route segment
- `page.tsx` = halaman yang di-render
- `layout.tsx` = wrapper yang persist antar navigasi

```
app/
  layout.tsx          ← Navbar + Footer ada di sini (persist di semua halaman)
  page.tsx            ← Home: render semua sections
  about/page.tsx      ← About page
  projects/page.tsx   ← Projects index
  projects/[slug]/page.tsx  ← Dynamic: baca slug, fetch MDX, render
  contact/page.tsx    ← Contact form
  not-found.tsx       ← Custom 404
```

---

### `/src/components/` — Component Layer

Empat kategori yang jelas:

| Folder | Isi | Frekuensi perubahan |
|---|---|---|
| `layout/` | Navbar, Footer, Container | Jarang |
| `ui/` | Button, Badge, Tag, SectionLabel | Jarang |
| `sections/` | Hero, About, Skills, Projects, Journey, Contact | Kadang |
| `project/` | ProjectCard, ProjectFilter, dll. | Kadang |
| `shared/` | AnimatedSection, StatusBadge | Jarang |

> **SEO/ folder dihapus.** SEO ditangani oleh Next.js Metadata API di setiap `page.tsx`. Lihat `10-components.md`.

**Aturan:** Setiap komponen dalam folder sendiri. Ini memudahkan penambahan file test, stories, atau sub-komponen di masa depan tanpa mengubah struktur.

---

### `/src/lib/` — Logic Layer

```typescript
// lib/mdx.ts — contoh
export async function getAllProjects(): Promise<Project[]> {
  // baca semua folder di content/projects/
  // parse frontmatter
  // return array of projects
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  // baca content/projects/[slug]/index.mdx
  // parse MDX content
  // return project dengan rendered content
}

// lib/utils.ts
export function cn(...classes: string[]): string {
  // className merger utility (clsx equivalent)
}
```

---

### `/src/types/` — Type Layer

Semua TypeScript interfaces terpusat di sini. Import dari satu tempat:

```typescript
// Di komponen manapun:
import { Project, JourneyEntry } from '@/types'
```

---

## Path Aliases

Konfigurasi di `tsconfig.json` untuk menghindari relative imports yang panjang:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@content/*": ["./content/*"],
      "@public/*": ["./public/*"]
    }
  }
}
```

**Penggunaan:**
```typescript
// ❌ Tanpa alias
import { Button } from '../../../components/ui/Button/Button'

// ✅ Dengan alias
import { Button } from '@/components/ui/Button'
```

---

## Naming Conventions

```
Folder komponen:    PascalCase     → Button/, ProjectCard/
File komponen:      PascalCase     → Button.tsx, ProjectCard.tsx
File utility:       camelCase      → mdx.ts, utils.ts
File types:         camelCase      → project.ts, journey.ts
Content folder:     kebab-case     → ga4-dashboard/, landing-page-revou/
MDX files:          index.mdx      → selalu index.mdx di dalam folder project
Images:             kebab-case     → thumbnail.jpg, dashboard-overview.png
```

---

## File yang Tidak Boleh Di-commit

`.gitignore` harus mencakup:

```
.env.local
.env.*.local
node_modules/
.next/
out/
.DS_Store
*.log
```

`.env.example` di-commit sebagai template:
```
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Site URL (used by next-sitemap)
NEXT_PUBLIC_SITE_URL=https://danuindra.com

# Resend — contact form email
RESEND_API_KEY=
CONTACT_EMAIL_TO=
```

---

## Cara Menambah Project Baru

Prosedur standar yang harus diikuti setiap kali ada project baru:

```
1. Buat folder: content/projects/nama-project/
2. Buat file: content/projects/nama-project/index.mdx
3. Isi frontmatter sesuai Project interface dari 13-project-template.md
4. Tulis konten mengikuti template dari 13-project-template.md
5. Tambahkan thumbnail.jpg (800×450px)
6. Jalankan dev server, cek tampilan di /projects/nama-project
7. Jalankan publishing checklist dari 13-project-template.md
8. Commit dan push
```

Tidak ada langkah yang menyentuh `/src/`. Ini yang dimaksud dengan scalable content architecture.

---

## Key Decisions

1. **`/content/` hanya untuk MDX dan image assets** — tidak ada TypeScript files di sini. Project content (`.mdx`, gambar) adalah konten murni yang bisa ditulis tanpa menyentuh source code.

2. **Data files dipindahkan ke `src/data/`** — `journey.ts`, `skills.ts`, `site.ts` adalah TypeScript source files, bukan konten. Menempatkannya di `content/data/` menciptakan ambiguitas dan import boundary issues dengan Next.js. Lihat `25-technical-review.md` Issue 4.

3. **`src/app/actions/`** — Server Actions untuk contact form diletakkan di sini, bukan di `src/app/api/`. Server Actions adalah cara modern App Router — tidak perlu Route Handler terpisah.

4. **SEO/ folder dihapus dari shared/components** — Next.js Metadata API menggantikan kebutuhan ini sepenuhnya. Lihat `10-components.md` dan `25-technical-review.md` Issue 2.

5. **Setiap komponen dalam folder sendiri** — memudahkan penambahan sub-komponen atau test files tanpa restructuring.

6. **Path aliases `@/*`** — `@/components/ui/Button` jauh lebih readable daripada relative imports. Wajib dikonfigurasi sejak awal.

---

## Design Rationale

- **Struktur ini mengikuti Next.js App Router conventions** — developer baru (atau Danu di masa depan setelah break panjang) bisa langsung orientasi karena struktur mengikuti standar yang terdokumentasi dengan baik.
- **Pemisahan concern yang ketat** — content, routing, components, logic, dan types masing-masing punya "home" yang jelas. Tidak ada file yang bisa berada di dua tempat sekaligus.

---

## Risks

- **Folder structure bisa over-nested** — jika komponen sangat sederhana, folder sendiri terasa berlebihan. Mitigasi: untuk komponen < 50 baris yang tidak akan punya sub-komponen, file tunggal di folder kategori boleh digunakan.
- **Content/data TypeScript files** — jika Danu tidak familiar dengan TypeScript, editing `journey.ts` bisa terasa intimidating. Mitigasi: buat template yang sangat jelas dengan komentar inline.
- **MDX parsing complexity** — setup awal MDX dengan Next.js App Router bisa tricky. Mitigasi: ikuti dokumentasi `next-mdx-remote` dan commit working setup sebelum menambah kompleksitas.

---

## Future Improvements

- [ ] Tambahkan `content/articles/` saat blog diaktifkan di V2
- [ ] Tambahkan `src/app/now/page.tsx` untuk `/now` page di V2
- [ ] Pertimbangkan `src/app/api/` untuk contact form serverless function
- [ ] Tambahkan `__tests__/` atau `*.test.tsx` co-located di komponen saat testing ditambahkan
- [ ] Buat script `npm run new-project` yang auto-generate folder dan template MDX untuk project baru

---

## Dependencies

| Dokumen | Relasi |
|---|---|
| `05-information-architecture.md` | Sitemap menentukan struktur `src/app/` routing |
| `10-components.md` | Component map menentukan struktur `src/components/` |
| `13-project-template.md` | MDX frontmatter dan folder naming di `content/projects/` |
| `14-tech-stack.md` | Next.js App Router, MDX, TypeScript menentukan keseluruhan arsitektur folder |
| `16-coding-rules.md` | Naming conventions dan import rules dikuatkan oleh coding rules |
