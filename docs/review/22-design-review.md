# 22 — Design Review

> Reviewer: Kiro
> Date: August 2026
> Scope: docs/08-design-direction.md + docs/09-design-system.md + docs/07-wireframe.md + docs/10-components.md
> Status: Review Complete — action required before development

---

## Summary Verdict

The design foundation is **strong and coherent**. The Linear-led dark aesthetic is well-reasoned, the token system is production-ready, and the component inventory is thorough. However, five issues need resolution before coding starts — two are real risks, three are clarifications.

---

## Issue 1 — CRITICAL: Dark Mode Default Is a Significant Assumption

**Where:** `08-design-direction.md` — "Dark mode as default"

**The problem:**
The reasoning given is that dark mode signals "analytical + technical" and aligns with Linear/Vercel. This is valid for a developer audience. But the primary audience is **recruiters and hiring managers in digital marketing** — not developers.

Digital marketing recruiters at traditional companies, agencies, or SMEs are more likely to be on standard-lit screens in office environments. Dark mode portfolios can read as "designer or developer" rather than "marketing professional" in that context.

The decision was made based on aesthetic preference and reference alignment, not audience validation.

**Challenge the assumption:**
- Linear and Vercel's users are engineers. Danu's audience is marketers and HR.
- There is no evidence that digital marketing recruiters prefer or expect dark mode portfolios.
- Light mode portfolios from marketing professionals (e.g., Notion-style, clean white) often read as more professional to non-technical hiring managers.

**Recommended action:**
Do not change the decision unilaterally — but **acknowledge this risk explicitly** and make a conscious, documented choice. Two options:

| Option | Tradeoff |
|---|---|
| **A: Keep dark default** | Aligns with personal aesthetic, differentiates, accepts the risk that some non-tech recruiters may find it less familiar |
| **B: Switch to light default** | Safer for target audience, easier to read in office environments, more conventional for marketing professionals |

**Recommendation:** If the goal is career growth in digital marketing at conventional companies → consider light mode default. If the goal is standing out and attracting tech-adjacent marketing roles → dark is fine. **This decision needs Danu's input before development starts.**

---

## Issue 2 — MODERATE: Sidebar on Project Detail Will Be a UX Problem on Tablet

**Where:** `07-wireframe.md` — Wireframe 04 (Project Detail)

**The problem:**
The wireframe shows a sticky sidebar with table of contents for desktop. There is a note that "on mobile, sidebar collapses to sticky top bar" — but no wireframe or specification for what happens on **tablet (768px–1024px)**.

At tablet width, a two-column layout with a sidebar is extremely tight. A sidebar of ~200px + main content on an 8-column tablet grid will feel cramped. This is a common layout failure point that often isn't caught until implementation.

**Specific gaps:**
- No breakpoint specification for when sidebar → top bar transition happens
- No wireframe for tablet layout of project detail
- No specification for what the sticky top bar looks like (just "sticky top bar")

**Recommended action:**
Define explicitly: at what breakpoint does the sidebar collapse? Recommended: `< 1024px` (below desktop). Below that threshold, the table of contents becomes a collapsible `<details>` element at the top of the article, or is removed entirely for mobile/tablet (most readers won't use it on small screens).

**Update needed in:** `07-wireframe.md` — add tablet behavior spec for project detail.

---

## Issue 3 — MODERATE: Three-Column Skills Grid May Be Overcrowded

**Where:** `07-wireframe.md` — Home page, Skills section; `11-copywriting.md` — Skills categories

**The problem:**
The wireframe shows a 3-column skills grid. The copywriting doc shows 4 categories with multiple tools each:
- Marketing & Strategy (7 items)
- Data & Visualization (5 items)
- Web & Development (7 items)
- AI & Productivity (5 items)

Four categories in three columns means one category will either break into two rows or be omitted. This inconsistency between wireframe (3 columns) and content (4 categories) was never resolved.

Additionally, listing "Web & Development" skills like Next.js, TypeScript, and Framer Motion in a digital marketing portfolio is a double-edged sword:
- **Pro:** Demonstrates technical depth, differentiates from non-technical marketers
- **Con:** Recruiter scanning for a digital marketer may be confused by "TypeScript" appearing in skills

**Recommended action:**
1. Resolve the column/category mismatch: either use 4 columns (or 2×2 grid) to match 4 categories, or reduce to 3 categories
2. Consider renaming "Web & Development" to something less dev-heavy like "Technical Skills" or keeping it but de-emphasizing code-specific items in the display
3. Keep the full skills in About page — on Home, show only top 3 categories to keep it clean

---

## Issue 4 — LOW: Brand Assets Section in 02-personal-branding.md Is Stale

**Where:** `02-personal-branding.md` — Brand Assets section

**The problem:**
Brand Assets section still reads:
```
| Logo / Wordmark | Belum ditentukan |
| Color Palette   | Belum ditentukan |
| Typography      | Belum ditentukan |
```

But `09-design-system.md` has fully defined:
- Color palette (complete token system with hex values)
- Typography (Inter + JetBrains Mono, full type scale)
- Visual language (dark background, indigo accent)

This creates a false impression that design identity is unresolved, when in fact it is fully specified.

**Recommended action:**
Update `02-personal-branding.md` brand assets table to reference the decisions already made in `09-design-system.md`. This takes 5 minutes but removes confusion for any future collaborator or Danu-in-6-months reading the docs.

---

## Issue 5 — LOW: Animation Token Naming Conflict with Tailwind Defaults

**Where:** `09-design-system.md` — Animation Tokens; Tailwind Config Reference

**The problem:**
The design system defines custom `transitionDuration` tokens named `fast`, `base`, `slow`, `slower`. However, Tailwind already has built-in duration utilities (`duration-75`, `duration-100`, `duration-150`, `duration-200`, `duration-300`, `duration-500`, `duration-700`, `duration-1000`).

By adding custom tokens with names like `base` and `slow`, the Tailwind config extends — not replaces — the defaults. This means in practice there will be TWO sets of duration utilities available: the custom ones AND the defaults. Developers (or Kiro) could accidentally use `duration-300` (Tailwind default) instead of `duration-base` (custom), breaking the design system rule of "no hardcoded values."

**Recommended action:**
In `tailwind.config.js`, explicitly set `transitionDuration` under `theme` (not `theme.extend`) to replace defaults with only the custom tokens. This forces all duration utilities to use the design system names, making violations impossible rather than just prohibited.

```js
// Replace, don't extend:
theme: {
  transitionDuration: {
    fast: '150ms',
    base: '250ms',
    slow: '400ms',
    slower: '600ms',
    DEFAULT: '250ms',
  },
  extend: {
    // other custom tokens here
  }
}
```

---

## What Is Working Well

These decisions are solid — do not second-guess them:

**The token naming system is excellent.** `bg-surface`, `text-primary`, `accent-subtle` — semantic naming that will survive a light mode addition without touching any component code. This is the right call.

**Inter as the sole font is the right call.** One font, variable weight, zero extra HTTP requests. The JetBrains Mono accent for tool tags adds just enough technical personality without overcomplicating the typography.

**The animation philosophy is well-disciplined.** "Animasi mendukung UX, bukan menjadi atraksi" — and the anti-patterns list (no glassmorphism, no neon, no scroll-jacking) is a genuine guard against scope creep during development.

**Indigo as accent is the right call.** It's distinctive enough to be memorable, associated with precision tools (Linear, Tailwind's default), and has strong contrast on dark backgrounds.

**The shadow system using black + opacity** rather than gray values is the correct approach for dark mode shadows. Many design systems get this wrong.

---

## Summary of Actions Required

| # | Issue | Priority | Action | Who |
|---|---|---|---|---|
| 1 | Dark vs light mode default | 🔴 Critical | Danu decides before dev starts | Danu |
| 2 | Tablet sidebar spec missing | 🟡 Moderate | Add tablet breakpoint behavior to wireframe | Kiro + Danu |
| 3 | Skills grid column/category mismatch | 🟡 Moderate | Resolve to 4 categories or reduce to 3 | Danu |
| 4 | Brand assets section stale | 🟢 Low | Update 02-branding.md to reference 09-design-system | Kiro |
| 5 | Animation token collision | 🟢 Low | Replace transitionDuration in tailwind config (don't extend) | Kiro |

---

## Documents That Need Updates Before Development

- `02-personal-branding.md` — Brand Assets section (update to reflect 09-design-system decisions)
- `07-wireframe.md` — Add tablet layout spec for project detail page sidebar
- `09-design-system.md` — Clarify transitionDuration replacement strategy
- `11-copywriting.md` — Resolve skills categories count (3 vs 4)
