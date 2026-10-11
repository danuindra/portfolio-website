# 25 — Technical Review

> Reviewer: Kiro
> Date: August 2026
> Scope: docs/14-tech-stack.md + docs/15-folder-structure.md + docs/16-coding-rules.md + docs/13-project-template.md + docs/10-components.md + docs/20-deployment.md
> Status: Review Complete — action required before development

---

## Summary Verdict

The technical architecture is **well-considered and appropriately scoped**. The stack choices are correct, the folder structure is clean, and the coding rules are practical. However, five issues were found — two are blockers that will cause real problems during implementation, and three are gaps that should be resolved before the first line of code is written.

---

## Issue 1 — CRITICAL: MDX Frontmatter ↔ TypeScript Interface Mismatch

**Where:** `13-project-template.md` — TypeScript interface vs MDX frontmatter

**The problem:**
`13-project-template.md` defines a TypeScript `Project` interface that includes:
```typescript
interface Project {
  content: ProjectContent  // object with problem, approach, process, solution, results, learnings
  metrics?: ProjectMetric[]
  images?: ProjectImage[]
  // ...
}
```

But MDX frontmatter is **YAML**, not TypeScript. YAML frontmatter cannot contain nested objects like `ProjectContent` with `problem`, `approach`, `process` fields — these are written as the **MDX body content**, not frontmatter.

The architecture has a fundamental split that was never explicitly documented:

```
What lives in frontmatter (YAML):
  slug, title, tagline, category, status, featured,
  date, duration, tools, tags, thumbnail, coverImage,
  liveUrl, repoUrl, metrics[]

What lives in MDX body (Markdown):
  overview (as first section)
  ## The Problem
  ## My Approach
  ## The Process
  ## Results
  ## What I Learned
  ## Next Steps
```

The `ProjectContent` interface fields (`problem`, `approach`, `process`, `solution`, `results`, `learnings`) are **section headings in the MDX body**, not frontmatter fields. The TypeScript interface as currently written implies they are all in frontmatter, which is wrong.

This means the `lib/mdx.ts` parsing function needs to:
1. Parse frontmatter for metadata
2. Parse the MDX body for section content
3. Reconcile both into the `Project` interface

If a developer implements `lib/mdx.ts` based on the current interface without understanding this split, the data fetching will be incorrect.

**Recommended action:**
Split the TypeScript interface into two clearly defined parts in `13-project-template.md`:

```typescript
// What comes from YAML frontmatter:
interface ProjectFrontmatter {
  slug: string
  title: string
  tagline: string
  category: ProjectCategory
  status: ProjectStatus
  featured: boolean
  date: string
  duration?: string
  tools: string[]
  tags?: string[]
  thumbnail: string
  coverImage?: string
  metrics?: ProjectMetric[]
  liveUrl?: string
  repoUrl?: string
}

// What is parsed from the MDX body (rendered React component):
interface ProjectPage extends ProjectFrontmatter {
  content: React.ReactNode  // the compiled MDX output
}
```

The section structure (Problem, Approach, etc.) is enforced by the **content template guidelines**, not by TypeScript type enforcement.

---

## Issue 2 — CRITICAL: SEO Component Is Redundant — Next.js App Router Has Built-in Metadata API

**Where:** `10-components.md` — SEO component; `14-tech-stack.md` — Next.js App Router

**The problem:**
`10-components.md` defines a custom `SEO` component:
```typescript
interface SEOProps {
  title: string
  description: string
  image?: string
  canonical?: string
  type?: 'website' | 'article'
}
```

But **Next.js App Router (14+) has a native Metadata API** that handles all of this:

```typescript
// In any page.tsx:
export const metadata: Metadata = {
  title: 'Projects — Danu Indra Ismawan',
  description: '...',
  openGraph: { title: '...', description: '...', images: [...] },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://...' },
}

// For dynamic routes:
export async function generateMetadata({ params }): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  return { title: project.title, description: project.overview }
}
```

Building a custom `SEO` component that wraps this functionality:
1. Adds a layer of abstraction that provides no benefit
2. Requires implementing `useHead` or similar — which doesn't exist in Server Components
3. Creates confusion about where metadata is defined
4. Goes against the App Router pattern that Next.js is built around

The `SEO` component was designed for the **Pages Router** pattern (where `next/head` was used). In App Router, metadata is exported from `page.tsx` files directly — no component needed.

**Recommended action:**
Remove the `SEO` component from `10-components.md` entirely. Replace all references with: "Each `page.tsx` exports a `metadata` object or `generateMetadata` function per the Next.js App Router Metadata API."

Add a metadata helper to `src/lib/metadata.ts` (already planned in folder structure) that generates consistent metadata objects:

```typescript
// src/lib/metadata.ts
export function createMetadata(override: Partial<Metadata>): Metadata {
  return {
    title: { default: 'Danu Indra Ismawan', template: '%s — Danu Indra Ismawan' },
    description: 'Portfolio of Danu Indra Ismawan...',
    openGraph: { ... },
    ...override,
  }
}
```

This is simpler, more idiomatic, and uses zero additional components.

---

## Issue 3 — MODERATE: Contact Form Backend Is Completely Unspecified

**Where:** `14-tech-stack.md` — no mention of form handling; `20-deployment.md` — no form setup

**The problem:**
(Flagged in UX review as well — surfacing here with technical detail.)

The contact form is a V1 requirement. There is no plan for how it submits. This is a functional blocker, not a nice-to-have.

For a Next.js App Router project on Vercel, the options are:

**Option A — Resend + Next.js Route Handler (Recommended)**
```
Complexity: Medium
Code required: ~30 lines (Route Handler + email template)
Free tier: 3,000 emails/month
Benefit: Demonstrates technical skill — becomes a portfolio talking point
Setup: npm install resend, create app/api/contact/route.ts
```

**Option B — Formspree (Simplest)**
```
Complexity: Very Low
Code required: Change form action URL only
Free tier: 50 submissions/month
Benefit: Zero backend code
Tradeoff: Formspree branding on free tier, low submission limit
```

**Option C — Resend + Server Action (Most Modern)**
```
Complexity: Medium
Code required: ~20 lines (Server Action)
Free tier: Same as A
Benefit: Uses latest Next.js pattern (Server Actions), most idiomatic
Setup: No separate route file needed
```

**Recommendation: Option C (Resend + Server Action)**
Server Actions are the idiomatic Next.js 14 approach for form handling. Using this pattern is also a portfolio talking point: "The contact form uses a Next.js Server Action with Resend for email delivery."

**Recommended action:**
- Add `resend` to dependencies in `14-tech-stack.md`
- Add `RESEND_API_KEY` to `.env.example` in `15-folder-structure.md`
- Add form handling setup to `20-deployment.md`
- Add `app/api/contact/route.ts` or Server Action to folder structure

---

## Issue 4 — MODERATE: `content/data/*.ts` Files Will Have Import Issues with Next.js App Router

**Where:** `15-folder-structure.md` — content/data layer

**The problem:**
The folder structure puts data files at `content/data/journey.ts` and `content/data/skills.ts`. These are TypeScript files that export arrays of data.

When imported from components in `src/`, the path would be:
```typescript
import { journeyEntries } from '@content/data/journey'
```

But the tsconfig path alias `@content/*` maps to `./content/*`. TypeScript will be fine, but **Next.js has specific rules about what can be imported as a module from outside `src/`**:

- Files in `content/` are not automatically included in the Next.js compilation unless explicitly configured
- The `content/data/*.ts` files work as data modules, but they need to be importable at build time, which means they cannot use any browser APIs or client-side code
- If any of these data files accidentally import something client-side, it will cause a build error that is hard to debug

Additionally, TypeScript files in `content/` are not co-located with the app — they exist outside the `src/` boundary that Next.js monitors by default. The `tsconfig.json` `include` array needs to explicitly cover `content/`.

**Recommended action:**
Two options:

**Option A — Move data files to `src/data/`:**
```
src/
  data/
    journey.ts
    skills.ts
    site.ts
```
This puts them inside the `src/` boundary that Next.js and TypeScript already monitor. Simpler and more conventional.

**Option B — Keep in `content/data/` but document the tsconfig requirement:**
```json
// tsconfig.json
{
  "include": ["src/**/*", "content/**/*", "next.config.js"]
}
```
And ensure `content/data/*.ts` files are pure data — no imports, no browser APIs.

**Recommendation: Option A** — move to `src/data/`. The distinction between "content that changes often" (`content/projects/`) and "data that is also code" (`*.ts` files) is blurry. TypeScript data files belong with the source code. Only MDX/image assets belong in `content/`.

---

## Issue 5 — LOW: Coding Rules Have No Guidance for Server vs Client Components

**Where:** `16-coding-rules.md` — Component Rules section

**The problem:**
Next.js App Router introduces a fundamental split that doesn't exist in Pages Router:
- **Server Components** (default) — rendered on server, no hooks, no browser APIs, can be `async`
- **Client Components** (`'use client'` directive) — rendered in browser, can use hooks and browser APIs

The current `16-coding-rules.md` has no guidance on:
- When to use `'use client'` vs keeping a component as Server Component
- Which components in `10-components.md` will need `'use client'`
- How to handle the boundary between server and client components

Without this guidance, a developer (or Kiro) will either:
1. Add `'use client'` to everything out of habit (losing all Server Component benefits)
2. Forget it where needed and get cryptic build errors ("useState cannot be used in Server Components")

**Components that WILL need `'use client'`** based on current specs:
- `Navbar` — uses scroll event listener
- `MobileMenu` — uses state for open/close
- `ProjectFilter` — uses state + URL params
- `AnimatedSection` — uses Framer Motion (which requires browser)
- `ContactCTA` / any form component — uses state
- `StatusBadge` — uses pulse animation (Framer Motion)
- `ProjectMetric` — uses count-up animation

**Components that should remain Server Components:**
- All static section components (Hero, AboutSummary, Skills, Journey, etc.)
- All page-level components (`page.tsx` files)
- Footer, Container, SectionLabel, Badge, Tag

**Recommended action:**
Add a section to `16-coding-rules.md`:

```
## 10. Server vs Client Component Rules

Default: Server Component. Add 'use client' only when needed.

Add 'use client' when the component:
- Uses React hooks (useState, useEffect, useRef, useContext)
- Uses browser APIs (window, document, localStorage)
- Uses Framer Motion animations
- Handles user events (onClick beyond simple navigation)
- Uses next/navigation hooks (useRouter, usePathname, useSearchParams)

Keep as Server Component when:
- Component only renders static markup
- Component fetches data (use async/await directly)
- Component imports from content/ or data/
```

Also add a `'use client'` indicator to each component in `10-components.md` that requires it.

---

## Issue 6 — LOW: No Error Boundary Strategy for MDX Parsing Failures

**Where:** `14-tech-stack.md` — MDX; `15-folder-structure.md` — lib/mdx.ts

**The problem:**
When `lib/mdx.ts` parses a project MDX file, three failure modes exist:
1. MDX file has malformed frontmatter (YAML parse error)
2. MDX file has invalid MDX syntax (compile error)
3. Referenced image in MDX doesn't exist (404 at runtime)

None of these are handled or even acknowledged in the documentation. For a portfolio where projects are added by editing MDX files directly, these errors will happen — especially during content creation.

Without error handling:
- A malformed frontmatter crashes the entire `/projects` page (not just that one project)
- A broken project MDX causes a build failure that is hard to trace back to the specific file
- The error message from `next-mdx-remote` is cryptic without context

**Recommended action:**
Document the error handling strategy in `14-tech-stack.md`:

```typescript
// lib/mdx.ts — recommended pattern
export async function getAllProjects(): Promise<Project[]> {
  try {
    const slugs = getProjectSlugs()
    const projects = await Promise.allSettled(
      slugs.map(slug => getProjectBySlug(slug))
    )
    // Log failures but don't crash
    return projects
      .filter(result => result.status === 'fulfilled')
      .map(result => (result as PromiseFulfilledResult<Project>).value)
  } catch (error) {
    console.error('Failed to load projects:', error)
    return []
  }
}
```

Using `Promise.allSettled` instead of `Promise.all` means one broken MDX file doesn't crash the entire projects page — it just omits that project and logs the error. This is much better UX during content authoring.

---

## What Is Working Well

**The stack selection is correct and well-justified.** Next.js App Router + TypeScript + Tailwind is the right combination for a portfolio that needs to be maintainable solo for years. The "what we're not using" table is a genuine strength — it prevents scope creep during development.

**`/content` separated from `/src` is the right architectural decision.** This is the single most important structural choice for Living Portfolio concept. Danu adding a new project by creating a folder and writing an MDX file — without touching source code — is the correct model.

**The dependency philosophy is sound.** "Try without a library first" and "pin exact versions" are the right defaults for a long-lived solo project.

**Husky + lint-staged for pre-commit hooks** is the right safety net for a solo developer without a code reviewer. It catches the errors that are easiest to forget under time pressure.

**The coding rules are practical, not perfectionist.** The rule that "if a component is < 50 lines and won't have sub-components, a single file in the category folder is fine" is the kind of pragmatic escape hatch that prevents over-engineering. Rigid rules create workarounds; this one doesn't.

---

## Summary of Actions Required

| # | Issue | Priority | Action | Who |
|---|---|---|---|---|
| 1 | MDX frontmatter ↔ TypeScript interface mismatch | 🔴 Critical | Split interface into `ProjectFrontmatter` + `ProjectPage` | Kiro |
| 2 | SEO component redundant with App Router Metadata API | 🔴 Critical | Remove SEO component, use metadata helper instead | Kiro |
| 3 | Contact form backend unspecified | 🟡 Moderate | Choose Resend + Server Action, add to tech stack + deployment docs | Danu decides, Kiro implements |
| 4 | `content/data/*.ts` import boundary issue | 🟡 Moderate | Move to `src/data/` or document tsconfig requirement | Kiro |
| 5 | No Server vs Client Component guidance | 🟢 Low | Add section to coding rules, annotate components doc | Kiro |
| 6 | No error handling for MDX parsing failures | 🟢 Low | Document `Promise.allSettled` pattern in tech stack | Kiro |

---

## Documents That Need Updates Before Development

- `10-components.md` — Remove SEO component, add `'use client'` annotations
- `13-project-template.md` — Split TypeScript interface into frontmatter vs page parts
- `14-tech-stack.md` — Add Resend, document MDX error handling strategy
- `15-folder-structure.md` — Move data files to `src/data/`, update `.env.example`
- `16-coding-rules.md` — Add Server vs Client Component rules section
- `20-deployment.md` — Add contact form (Resend/Server Action) setup steps
