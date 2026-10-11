# 26 — V1 Development Plan

> Author: Kiro
> Date: August 2026
> Status: Documentation phase complete — Sprint 0 ready to begin

---

## Purpose

This document consolidates all findings from the four review documents (22–25) into a single, actionable development plan. It answers:

1. What needs to be resolved **before** writing any code?
2. What changes need to be made to existing documentation?
3. In what order should V1 be built?
4. What does the minimum viable V1 look like?

---

## Part 1 — Decisions Required from Danu

All three decisions have been made. Documented below for record.

---

### Decision A — Default Color Mode ✅ DECIDED

**Answer: Light mode default**

Light mode is the default experience for V1. Dark mode will be implemented in V2 without major refactoring — all tokens are already prepared in `09-design-system.md`.

**Rationale:** Target audience includes recruiters and hiring managers at conventional marketing companies, agencies, and non-tech businesses. Light mode is more universally professional and familiar. First impression goal: calm, confident, professional.

**Changes applied to:**
- `08-design-direction.md` — Design Direction tagline, Color Approach section, Key Decisions
- `09-design-system.md` — Light/dark token sections swapped, Tailwind config updated

---

### Decision B — Contact Form Backend ✅ DECIDED

**Answer: Resend + Next.js Server Action**

Production-ready email API. Free tier: 3,000 emails/month. Uses the most current Next.js pattern (Server Actions). Becomes a portfolio talking point in interviews.

**Changes applied to:**
- `14-tech-stack.md` — Resend section added, dependencies updated
- `15-folder-structure.md` — `src/app/actions/contact.ts` added, env vars updated
- `20-deployment.md` — Step 6 Resend setup with full implementation guide

---

### Decision C — Skills Section Scope ✅ DECIDED

**Answer: Curate Display**

Home skills section shows only marketing-relevant competencies (3 categories: Marketing & Strategy, Data & Visualization, Technical Skills). Dev frameworks (Next.js, React, TypeScript, Tailwind, Framer Motion) appear only within project case studies as tool context — not as primary personal skills.

**Changes applied to:**
- `10-components.md` — Skills component updated with curated categories
- `11-copywriting.md` — Skills section rewritten, Web & Development renamed to Technical Skills, dev tools removed from display list

---

## Part 2 — Documentation Updates

All 22 documentation updates have been applied. Records below.

### Updates Completed ✅

| # | Document | Change | Status |
|---|---|---|---|
| 1 | `02-personal-branding.md` | Removed "Aspiring", updated brand assets, aligned personal story tone | ✅ Done |
| 2 | `02-personal-branding.md` | Brand assets table updated to reference `09-design-system.md` | ✅ Done |
| 3 | `02-personal-branding.md` | Personal story tone aligned to match `11-copywriting.md` | ✅ Done |
| 4 | `10-components.md` | Hero spec role tagline → "Digital Marketer & Analyst" | ✅ Done |
| 5 | `10-components.md` | SEO component removed, replaced with metadata helper pattern | ✅ Done |
| 6 | `10-components.md` | `'use client'` annotations added to all components that require it | ✅ Done |
| 7 | `13-project-template.md` | TypeScript interface split into `ProjectFrontmatter` + `ProjectPage` | ✅ Done |
| 8 | `15-folder-structure.md` | `content/data/` moved to `src/data/`, structure diagram updated | ✅ Done |
| 9 | `07-wireframe.md` | Journey removed from Home | ✅ Done |
| 10 | `07-wireframe.md` | Breadcrumbs removed from /about and /projects | ✅ Done |
| 11 | `07-wireframe.md` | Share button removed from project detail sidebar | ✅ Done |
| 12 | `07-wireframe.md` | Tablet layout spec added for project detail (sidebar → collapsible ToC at < 1024px) | ✅ Done |
| 13 | `05-information-architecture.md` | Home section order: Hero→About→Projects→Skills→Contact | ✅ Done |
| 14 | `09-design-system.md` | `transitionDuration` moved to `theme` (replaces defaults, not extends) | ✅ Done |
| 15 | `16-coding-rules.md` | Section 10 — Server vs Client Component rules added | ✅ Done |
| 16 | `14-tech-stack.md` | MDX error handling strategy (Promise.allSettled pattern) documented | ✅ Done |
| 17 | `11-copywriting.md` | Hero description revised to method-framing | ✅ Done |
| 18 | `11-copywriting.md` | Journey entries updated to month-based dates (Mon YYYY) | ✅ Done |
| 19 | `11-copywriting.md` | Skills display list updated to curated marketing categories | ✅ Done |
| 20 | `14-tech-stack.md` | Resend added as email service with Server Action code example | ✅ Done |
| 21 | `20-deployment.md` | Step 6: Resend setup instructions with full implementation guide | ✅ Done |
| 22 | `08-design-direction.md` | Light mode default, Design Direction tagline updated, Key Decisions updated | ✅ Done |

**Additional updates applied during the process:**
- `09-design-system.md` — Light/dark token sections swapped, shadow values adjusted for light mode
- `10-components.md` — Journey compact variant removed (Journey lives only on /about)
- `10-components.md` — Skills curated display documented with correct 3 categories
- `15-folder-structure.md` — `src/app/actions/contact.ts` added, SEO/ folder removed, `analytics.ts` added, `next-sitemap.config.js` added, `.env.example` updated
- `05-information-architecture.md` — Skills removed from /about structure, back link replaces breadcrumb

---

## Part 3 — Revised V1 Scope

After applying all review findings, this is what V1 actually needs to build.

### Pages (unchanged from original plan)

```
/             Home
/about        About
/projects     Projects index
/projects/[slug]  Project detail
/contact      Contact
/not-found    Custom 404
```

### Revised Home Section Order

```
1. Hero
2. About Summary
3. Projects Highlight    ← moved up from position 4
4. Skills                ← moved down from position 3
5. Contact CTA           ← Journey removed from Home
```

### Revised Component List

**Removed from V1:**
- `SEO` component — replaced by Next.js Metadata API
- `Journey` section component on Home — Journey lives only on /about

**Added to V1:**
- Contact form Server Action (`src/app/actions/contact.ts`)
- Metadata helper (`src/lib/metadata.ts`)

**Renamed:**
- `content/data/` → `src/data/` (data files move to src)

**Unchanged:**
All other components from `10-components.md` remain in scope.

### Revised Folder Structure (Key Changes)

```
Before:                          After:
content/                         content/
  data/                    ✗       (removed from here)
    journey.ts
    skills.ts
    site.ts
  projects/                       projects/   (unchanged)

src/                             src/
  (no data folder)                 data/      ← new
                                     journey.ts
                                     skills.ts
                                     site.ts
  app/                             app/
    (no api folder in V1)            actions/  ← new
                                       contact.ts
```

---

## Part 4 — Build Order

This is the recommended sequence for building V1. It is ordered to:
1. Get something visible as early as possible (motivation)
2. Build foundations before features (stability)
3. Validate content before styling (prevents re-work)

---

### Sprint 0 — Project Initialization (Day 1)
*Goal: Running Next.js project with correct configuration*

```
[ ] npx create-next-app@latest with TypeScript, Tailwind, App Router
[ ] Configure tailwind.config.js with design tokens from 09-design-system.md
[ ] Set up path aliases in tsconfig.json (@/*, @content/*)
[ ] Configure globals.css (CSS custom properties, base styles)
[ ] Create src/data/ with journey.ts, skills.ts, site.ts
[ ] Create src/types/ with project.ts, journey.ts, index.ts
[ ] Install dependencies: framer-motion, next-mdx-remote, @tailwindcss/typography
[ ] Set up ESLint, Prettier, Husky
[ ] Create .env.example
[ ] First commit: "chore: initialize project with config"
```

**Exit criteria:** `npm run dev` works, `npm run build` works, design tokens are in Tailwind config.

---

### Sprint 1 — Layout Foundation (Day 1–2)
*Goal: Every page has the same shell — Navbar, Footer, correct fonts*

```
[ ] Navbar component (desktop + mobile menu)
[ ] Footer component
[ ] Container component
[ ] Root layout.tsx (fonts, Navbar, Footer, metadata defaults)
[ ] metadata helper in src/lib/metadata.ts
[ ] All 5 page.tsx stubs (Home, About, Projects, Contact, 404) — empty but routable
[ ] Test all routes are accessible
[ ] Test mobile menu opens/closes
[ ] Commit: "feat: layout foundation — navbar, footer, routing"
```

**Exit criteria:** Navigate to all 5 pages, Navbar and Footer render correctly on all, mobile menu works.

---

### Sprint 2 — Home Page (Day 2–4)
*Goal: The most important page is complete and functional*

Build sections in order of importance to the recruiter:

```
[ ] Hero section (with correct copy from 11-copywriting.md)
[ ] About Summary section
[ ] ProjectsHighlight section (with placeholder project data)
[ ] Skills section (with final category decision from Decision C)
[ ] ContactCTA section
[ ] Home page metadata
[ ] AnimatedSection wrapper (scroll-triggered fade-in)
[ ] Test full Home page on mobile, tablet, desktop
[ ] Commit: "feat: home page complete"
```

**Exit criteria:** Home renders correctly at all breakpoints, all sections visible, animations work with prefers-reduced-motion respected.

---

### Sprint 3 — MDX Pipeline (Day 3–4)
*Goal: Projects are readable from MDX files*

```
[ ] Set up content/projects/ directory structure
[ ] Write lib/mdx.ts with getAllProjects() and getProjectBySlug()
[ ] Implement ProjectFrontmatter parsing (YAML) + content rendering
[ ] Add Promise.allSettled error handling pattern
[ ] Create first real project MDX file (GA4 dashboard or portfolio website)
[ ] /projects page — grid layout + ProjectCard components
[ ] /projects/[slug] page — full detail page with correct section structure
[ ] ProjectFilter component with URL param sync
[ ] ProjectCard, ProjectHeader, ProjectMetric, ProjectNav components
[ ] Test with 1 real project before adding more
[ ] Commit: "feat: MDX project pipeline + projects pages"
```

**Exit criteria:** At least 1 real project is visible at /projects/ga4-dashboard with all sections rendered correctly.

---

### Sprint 4 — About Page (Day 4–5)
*Goal: About page complete — the second most visited page*

```
[ ] Full bio section (from 11-copywriting.md)
[ ] How I Work / Values section (3 value cards)
[ ] Skills & Tools section (full list — About version)
[ ] Journey timeline (full, from src/data/journey.ts)
[ ] About page metadata
[ ] CTA at bottom of About page
[ ] Test full About page on all breakpoints
[ ] Commit: "feat: about page complete"
```

**Exit criteria:** About page renders correctly, Journey timeline shows all entries with correct dates.

---

### Sprint 5 — Contact Page + Form (Day 5–6)
*Goal: Contact page works end-to-end — form actually sends email*

```
[ ] Contact page layout (from wireframe)
[ ] Contact form UI (Name, Email, Message, Submit)
[ ] Server Action for form submission (src/app/actions/contact.ts)
[ ] Resend integration (or chosen alternative)
[ ] Form validation (client-side + server-side)
[ ] Success and error states
[ ] Loading state during submission
[ ] Direct contact links (email, LinkedIn, GitHub)
[ ] Test form end-to-end: submit → receive email
[ ] Contact page metadata
[ ] Commit: "feat: contact page + working form"
```

**Exit criteria:** Contact form submission results in an actual email received. Both success and error states are visible.

---

### Sprint 6 — Polish & QA (Day 6–7)
*Goal: Everything works, nothing is broken, ready for deployment*

```
[ ] 404 page (copy: "Nothing here. The page you're looking for doesn't exist — or not yet.")
[ ] Add 2 more real project MDX files (total: 3 for launch)
[ ] Run full quality checklist from 19-quality-checklist.md
[ ] Fix all 🔴 Critical items
[ ] Lighthouse check: Performance > 90, Accessibility > 90
[ ] Test all user flows from 06-user-flow.md manually
[ ] Verify GA4 tracking fires on all pages
[ ] Verify sitemap.xml generates correctly (postbuild)
[ ] Check all external links work
[ ] Final review of all copy against 11-copywriting.md
[ ] Commit: "chore: v1 pre-launch QA complete"
```

**Exit criteria:** All Critical items in quality checklist pass. At least 3 projects published. No console errors in browser.

---

### Sprint 7 — Deployment (Day 7)
*Goal: Website is live on custom domain with analytics*

```
[ ] Push to GitHub main
[ ] Connect Vercel to repository
[ ] Set environment variables in Vercel
[ ] Purchase domain (danuindra.com)
[ ] Configure DNS
[ ] Verify SSL certificate active
[ ] Set up Google Search Console
[ ] Submit sitemap
[ ] Verify GA4 Real-time shows active session
[ ] Share URL with 1 trusted person for sanity check
[ ] Commit: "chore: v1 deployed to production"
```

**Exit criteria:** Website is accessible at custom domain, HTTPS active, GA4 tracking confirmed, sitemap indexed.

---

## Part 5 — V1 Definition of Done

V1 is complete when all of the following are true:

```
Pages:
[✓] All 5 pages load without errors on desktop and mobile
[✓] All navigation links work
[✓] No placeholder text anywhere

Content:
[✓] Minimum 3 project case studies published
[✓] All 6 project sections filled (no "[TBD]")
[✓] Journey timeline has at least 3 entries with month-based dates
[✓] Status badge reflects actual availability
[✓] All copy matches 11-copywriting.md final version

Technical:
[✓] Contact form sends real emails
[✓] GA4 tracking works
[✓] Sitemap.xml accessible
[✓] npm run build succeeds without errors
[✓] Lighthouse Performance ≥ 90, Accessibility ≥ 90

Deployment:
[✓] Live on custom domain
[✓] HTTPS active
[✓] Google Search Console verified
```

---

## Part 6 — What V1 Deliberately Excludes

These were in earlier planning documents but are explicitly cut from V1 to keep the scope manageable:

| Removed Feature | Where It Was | When to Add |
|---|---|---|
| Journey section on Home | 05-IA, 07-wireframe | Never — /about only |
| Breadcrumbs on /about and /projects | 07-wireframe | Never — too simple a site |
| Share button on project detail | 07-wireframe | V2 if data shows demand |
| Skills section on /about | 05-IA | Never — covered on Home |
| SEO component | 10-components | Replaced by metadata API |
| Blog / /now / /uses pages | 21-growth | V2 |
| Light/dark mode toggle | 10-components | V2 |
| Project search | 21-growth | V2 (when >10 projects) |
| /services page | 21-growth | V2 (when ready for freelance) |

---

## Summary: Ready for Sprint 0

### Decisions recorded ✅
```
[✓] Decision A: Light mode default
[✓] Decision B: Resend + Server Action for contact form
[✓] Decision C: Curate Display — marketing skills only on Home
```

### Documentation updates complete ✅
All 22 updates applied across 12 documents. See Part 2 for full record.

### Next step: Start Sprint 0
Follow the build order in Part 4. Begin with:
```
npx create-next-app@latest portfolio-website \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"
```

**Remember:** Start writing the 3 project case studies during Sprint 0–2.
Content creation is the bottleneck — not the code.

---

## Estimated Total Timeline

| Sprint | Duration | Cumulative |
|---|---|---|
| Pre-dev: decisions + doc updates | 1 day | Day 1 |
| Sprint 0: Project initialization | 0.5 day | Day 1.5 |
| Sprint 1: Layout foundation | 1 day | Day 2.5 |
| Sprint 2: Home page | 1.5 days | Day 4 |
| Sprint 3: MDX pipeline | 1.5 days | Day 5.5 |
| Sprint 4: About page | 1 day | Day 6.5 |
| Sprint 5: Contact + form | 1 day | Day 7.5 |
| Sprint 6: Polish + QA | 1 day | Day 8.5 |
| Sprint 7: Deployment | 0.5 day | Day 9 |

**Total: ~9 working days to V1 launch.**

This assumes focused work. Real-world timeline with learning curves and content creation (writing 3 project case studies) is more likely **2–3 weeks**.

The bottleneck will be **content creation** — the 3 project case studies must be written before Sprint 6. Start writing them during Sprint 0–2 so they are ready when the MDX pipeline is built.
