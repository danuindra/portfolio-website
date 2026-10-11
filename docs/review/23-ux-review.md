# 23 — UX Review

> Reviewer: Kiro
> Date: August 2026
> Scope: docs/05-information-architecture.md + docs/06-user-flow.md + docs/07-wireframe.md
> Status: Review Complete — action required before development

---

## Summary Verdict

The UX foundation is **well-structured and audience-aware**. The flow differentiation per audience type is a genuine strength. However, six issues were found — one is a real risk that could undermine the primary goal, two are structural gaps, and three are unnecessary complexity that should be simplified before building.

---

## Issue 1 — CRITICAL: The Home Page Has Too Many Sections for a 30-Second Recruiter

**Where:** `05-information-architecture.md` — Home structure; `06-user-flow.md` — Recruiter flow

**The problem:**
The current Home page has **six sections** in sequence:
1. Hero
2. About Summary
3. Skills
4. Projects Highlight
5. Journey
6. Contact CTA

The user flow doc correctly identifies that a recruiter has 30–60 seconds. But the IA sends them through six distinct content blocks before reaching Contact. That's a lot of scroll for someone making a quick relevance decision.

More critically, **Skills (section 3) sits between About and Projects**. For a recruiter, the decision path is:
> "Who is this person?" → "What have they done?" → "How do I contact them?"

Skills is a supporting detail — it answers "with what tools?" not "what have you done?" Placing it between About and Projects breaks the primary decision flow. A recruiter who gets bored at Skills never sees the project work — the strongest proof of capability.

**The right order by recruiter priority:**
```
Current:  Hero → About → Skills → Projects → Journey → Contact
Better:   Hero → About → Projects → Skills → Journey → Contact
```

Moving Projects to position 3 means the strongest proof lands earlier. Skills becomes supporting context after the reader is already interested.

**Recommended action:**
Reorder Home sections. Swap Skills and Projects. Update wireframe accordingly.

---

## Issue 2 — CRITICAL: Contact Form Has No Backend — This Is Not a UX Detail

**Where:** `07-wireframe.md` — Contact page; `10-components.md` — No form backend spec; `20-deployment.md` — No form handling mentioned

**The problem:**
The contact form is listed as a V1 requirement. The wireframe shows Name + Email + Message + Send button. The quality checklist requires "Contact form bisa disubmit." But **nowhere in 21 documents is there a plan for how the form actually sends the message.**

This is not a minor technical detail — it's a functional blocker. Without a backend:
- The form renders but does nothing when submitted
- The QA checklist item "Contact form bisa disubmit" will always fail
- The most important conversion action on the website is broken

Options that exist for Next.js portfolio forms:
| Option | Complexity | Cost |
|---|---|---|
| Resend (email API) | Low | Free tier: 3k emails/month |
| Formspree | Very Low | Free tier: 50 submissions/month |
| EmailJS | Very Low | Free tier: 200 emails/month |
| Netlify Forms | Very Low | Free if hosted on Netlify |
| Next.js Route Handler + Resend | Medium | Free tier |

**Recommended action:**
Pick one service now and document it. **Formspree** is the simplest option — no backend code needed, just a form action URL. If Danu wants to demonstrate technical skills, use a **Next.js Route Handler + Resend** — this also becomes a talking point in interviews ("I built the contact form backend myself").

Add this decision to `14-tech-stack.md` and `20-deployment.md`.

---

## Issue 3 — MODERATE: Journey Section on Home Competes with Projects for Attention

**Where:** `05-information-architecture.md` — Home structure; `07-wireframe.md` — Wireframe 01

**The problem:**
Journey on Home shows "3 entry terbaru" in compact variant. For a new entry-level candidate with limited entries (currently 4 entries total in `11-copywriting.md`), showing 3 of 4 entries on Home means the About page Journey section shows almost no new information.

The Living Portfolio concept is best served by Journey being a **dedicated, full section on /about** — not a preview on Home. The Home preview adds cognitive load without meaningful value when entries are sparse.

Additionally, the Journey section on Home creates a visual rhythm problem: the page goes Hero (personal) → About (personal) → Skills (functional) → Projects (proof) → Journey (personal again) → Contact. Two personal sections at the start and a third personal section near the end makes the Home feel self-centered rather than proof-centered.

**Recommended action:**
For V1, **remove Journey from Home** entirely. Replace the space with a stronger closing CTA or a brief "currently building" note that links to /about. Journey lives fully on /about where it can be appreciated in full context.

This also simplifies the Home component list — one less section to build for launch.

---

## Issue 4 — MODERATE: The /about Page Duplicates Too Much from Home

**Where:** `05-information-architecture.md` — /about structure; `07-wireframe.md` — Wireframe 02

**The problem:**
The /about page contains:
1. Full bio
2. Values & working style
3. Skills & tools ← also on Home
4. Timeline (full) ← also on Home (compact)

Skills appears on both Home and About with different densities but the same data. For a visitor who reads Home first then clicks "Read full story →", seeing Skills again on About creates a sense of repetition rather than depth.

The /about page should feel like **going deeper**, not re-reading. It should answer different questions than Home, not the same questions in more detail.

**What About should answer that Home doesn't:**
- The reasoning behind career choices
- How Danu thinks about problems (not just what problems)
- The full unfiltered Journey
- Values that can't be shown in a project card

**Recommended action:**
Remove Skills section from /about. Skills is fully covered on Home. The space on About is better used for:
- A longer, more personal bio section
- Expanded Values with real examples from projects
- Full Journey with richer descriptions per entry
- A "Currently reading / thinking about" section (Living Portfolio concept)

This makes About genuinely different from Home, not just longer.

---

## Issue 5 — LOW: Breadcrumbs Are Over-Engineered for a 4-Page Site

**Where:** `07-wireframe.md` — About, Projects, Project Detail pages all show breadcrumbs

**The problem:**
Breadcrumbs like "Home > About" and "Home > Projects" are unnecessary navigation aids for a website with only 4 pages. They add visual clutter to page headers without meaningful wayfinding value.

Breadcrumbs are useful when:
- There are multiple levels of hierarchy (e.g., Shop > Electronics > Laptops > Product)
- Users can get lost within nested content
- There are more than ~6 pages

For this portfolio, the navbar already shows all available pages. A visitor on /about cannot be confused about where they are.

The only breadcrumb with genuine value is on `/projects/[slug]` — "Projects → Project Name" — because it helps users understand they're in a sub-page and provides a back path without using the browser Back button.

**Recommended action:**
- Remove breadcrumbs from /about and /projects index
- Keep breadcrumb only on `/projects/[slug]` detail pages
- Simplify the breadcrumb to just: `← Projects` (back arrow, no "Home >" prefix)

This removes two unnecessary UI elements and simplifies the page header components.

---

## Issue 6 — LOW: The "Share" Button on Project Detail Sidebar Has No Clear Purpose

**Where:** `07-wireframe.md` — Wireframe 04 (Project Detail), Sidebar

**The problem:**
The sidebar includes a [Share] button. But sharing functionality for a portfolio project page is undefined:
- Share to what? LinkedIn? Twitter? Copy link?
- Who is the audience for sharing — the visitor themselves, or the project owner?
- Is this for the recruiter to share the profile, or for Danu to share his own work?

For a solo personal portfolio, a Share button adds complexity with unclear ROI. Most people who want to share a URL just copy it from the browser. The LinkedIn and GitHub links in footer/navbar already serve the networking function.

**Recommended action:**
Remove the Share button from the sidebar for V1. If sharing is needed, a "Copy link" button can be added in V2 after seeing whether visitors actually want to share project pages (trackable via GA4 events).

---

## What Is Working Well

**Flow differentiation per audience is the right approach.** Having separate documented flows for Recruiter (30-60 sec), Hiring Manager (3-5 min), Freelance Client, and Mentor shows genuine UX thinking. Most portfolios design for one hypothetical visitor. This one designs for four real ones.

**The drop-off point analysis in `06-user-flow.md` is excellent.** Identifying that project pages with no measurable results cause drop-off, and that mobile tap targets are a friction point — these are real, specific problems documented before they happen.

**The micro-flow for "visitor who enters via project link"** is a detail most portfolios miss. Someone arriving from LinkedIn directly to a project page needs to understand who built this. The spec to include Danu's name with a link to Home/About on every project page is correct.

**The decision to not put /services on V1** is the right UX call. A services page without social proof or testimonials creates expectations that can't be met. Withholding it is a better UX decision than showing an empty or weak services page.

---

## Summary of Actions Required

| # | Issue | Priority | Action | Who |
|---|---|---|---|---|
| 1 | Home section order — Projects before Skills | 🔴 Critical | Reorder to Hero→About→Projects→Skills→Journey→Contact | Kiro |
| 2 | Contact form has no backend plan | 🔴 Critical | Choose form service, document in tech stack + deployment | Danu decides, Kiro implements |
| 3 | Journey on Home adds noise, not value at V1 | 🟡 Moderate | Remove Journey from Home; it lives fully on /about | Kiro |
| 4 | /about duplicates Skills from Home | 🟡 Moderate | Remove Skills from /about; replace with richer personal content | Kiro |
| 5 | Breadcrumbs on simple pages | 🟢 Low | Remove from /about and /projects; keep only on /projects/[slug] | Kiro |
| 6 | Share button with undefined purpose | 🟢 Low | Remove from V1 sidebar | Kiro |

---

## Revised Home Section Order (Recommended)

```
Before:                          After:
1. Hero                          1. Hero
2. About Summary                 2. About Summary
3. Skills          ←──swap──→    3. Projects Highlight  ← proof lands earlier
4. Projects        ←──swap──→    4. Skills              ← supporting context
5. Journey                       5. Contact CTA         ← Journey moved to /about
6. Contact CTA
```

**Net change:** 6 sections → 5 sections. Cleaner. Faster. Better for the 30-second recruiter.

---

## Documents That Need Updates Before Development

- `05-information-architecture.md` — Update Home section order
- `07-wireframe.md` — Update wireframe 01 (section order), remove Journey from Home, remove breadcrumbs from /about and /projects, remove Share from sidebar, add tablet spec for project detail
- `14-tech-stack.md` — Add contact form service decision
- `20-deployment.md` — Add contact form backend setup instructions
