import type { RevoUWeek } from '@/types'

// RevoU Digital Marketing Program — 14-week journey
// INSTRUCTIONS: Fill in title, shortDescription, category, and tools for each week.
// Set isPlaceholder: false once content is ready.
// Add a thumbnail image to /public/images/revou/week-XX/thumbnail.jpg

export const revouWeeks: RevoUWeek[] = [
  {
    week: 1,
    slug: 'week-01',
    title: 'Week 01 Project',
    shortDescription: 'Project description coming soon. Update this in src/data/revou-weeks.ts.',
    category: 'Digital Marketing Fundamentals',
    tools: [],
    thumbnail: undefined,
    isPlaceholder: true,
  },
  {
    week: 2,
    slug: 'week-02',
    title: 'Week 02 Project',
    shortDescription: 'Project description coming soon. Update this in src/data/revou-weeks.ts.',
    category: 'Digital Marketing Fundamentals',
    tools: [],
    thumbnail: undefined,
    isPlaceholder: true,
  },
  {
    week: 3,
    slug: 'week-03',
    title: 'Week 03 Project',
    shortDescription: 'Project description coming soon. Update this in src/data/revou-weeks.ts.',
    category: 'SEO',
    tools: [],
    thumbnail: undefined,
    isPlaceholder: true,
  },
  {
    week: 4,
    slug: 'week-04',
    title: 'Week 04 Project',
    shortDescription: 'Project description coming soon. Update this in src/data/revou-weeks.ts.',
    category: 'SEO',
    tools: [],
    thumbnail: undefined,
    isPlaceholder: true,
  },
  {
    week: 5,
    slug: 'week-05',
    title: 'Week 05 Project',
    shortDescription: 'Project description coming soon. Update this in src/data/revou-weeks.ts.',
    category: 'SEM',
    tools: [],
    thumbnail: undefined,
    isPlaceholder: true,
  },
  {
    week: 6,
    slug: 'week-06',
    title: 'Week 06 Project',
    shortDescription: 'Project description coming soon. Update this in src/data/revou-weeks.ts.',
    category: 'SEM',
    tools: [],
    thumbnail: undefined,
    isPlaceholder: true,
  },
  {
    week: 7,
    slug: 'week-07',
    title: 'Week 07 Project',
    shortDescription: 'Project description coming soon. Update this in src/data/revou-weeks.ts.',
    category: 'Social Media Marketing',
    tools: [],
    thumbnail: undefined,
    isPlaceholder: true,
  },
  {
    week: 8,
    slug: 'week-08',
    title: 'Week 08 Project',
    shortDescription: 'Project description coming soon. Update this in src/data/revou-weeks.ts.',
    category: 'Content Marketing',
    tools: [],
    thumbnail: undefined,
    isPlaceholder: true,
  },
  {
    week: 9,
    slug: 'week-09',
    title: 'Week 09 Project',
    shortDescription: 'Project description coming soon. Update this in src/data/revou-weeks.ts.',
    category: 'Email Marketing',
    tools: [],
    thumbnail: undefined,
    isPlaceholder: true,
  },
  {
    week: 10,
    slug: 'week-10',
    title: 'Week 10 Project',
    shortDescription: 'Project description coming soon. Update this in src/data/revou-weeks.ts.',
    category: 'Analytics',
    tools: [],
    thumbnail: undefined,
    isPlaceholder: true,
  },
  {
    week: 11,
    slug: 'week-11',
    title: 'Week 11 Project',
    shortDescription: 'Project description coming soon. Update this in src/data/revou-weeks.ts.',
    category: 'Data Visualization',
    tools: [],
    thumbnail: undefined,
    isPlaceholder: true,
  },
  {
    week: 12,
    slug: 'week-12',
    title: 'Week 12 Project',
    shortDescription: 'Project description coming soon. Update this in src/data/revou-weeks.ts.',
    category: 'Campaign Strategy',
    tools: [],
    thumbnail: undefined,
    isPlaceholder: true,
  },
  {
    week: 13,
    slug: 'week-13',
    title: 'Week 13 Project',
    shortDescription: 'Project description coming soon. Update this in src/data/revou-weeks.ts.',
    category: 'Marketing Automation',
    tools: [],
    thumbnail: undefined,
    isPlaceholder: true,
  },
  {
    week: 14,
    slug: 'week-14',
    title: 'Week 14 Project',
    shortDescription: 'Project description coming soon. Update this in src/data/revou-weeks.ts.',
    category: 'Final Project',
    tools: [],
    thumbnail: undefined,
    isPlaceholder: true,
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
