import type { JourneyEntry } from '@/types'

// Journey timeline entries
// Only entries that are real and confirmed — do not add speculative items

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
]
