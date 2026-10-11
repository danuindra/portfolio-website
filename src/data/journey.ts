import type { JourneyEntry } from '@/types'

// Journey timeline entries — month-based dates for trajectory visibility
// Format: "Mon YYYY" e.g. "Aug 2026"
// Add new entries at the bottom. Never edit existing entries — only add.
// Update isCurrent: false on previous entry when adding a new current one.

export const journeyEntries: JourneyEntry[] = [
  {
    date: 'Aug 2026',
    title: 'RevoU Digital Marketing Program',
    organization: 'RevoU',
    description:
      'Structured learning in digital marketing fundamentals, analytics, and campaign strategy. One milestone in an ongoing learning path.',
    isCurrent: true,
  },
  {
    date: 'Aug 2026',
    title: 'Personal Portfolio Website',
    organization: undefined,
    description:
      'Built this website as a real product — from strategy and UX to development and deployment.',
    isCurrent: false,
  },
  {
    date: 'Jul 2026',
    title: 'Google Analytics 4 Dashboard',
    organization: undefined,
    description:
      'Built a working GA4 + Looker Studio reporting system for tracking and analyzing marketing performance.',
    isCurrent: false,
  },
  {
    date: 'Jul 2026',
    title: 'AI Product Visualization',
    organization: undefined,
    description:
      'Explored AI-assisted workflows for content creation and product visualization.',
    isCurrent: false,
  },
]
