// Types for RevoU 14-week Digital Marketing program

export interface RevoUWeek {
  week: number           // 1–14
  slug: string           // "week-01"
  title: string          // Project title — fill in later
  shortDescription: string
  category: RevoUCategory
  tools: string[]
  thumbnail?: string     // /images/revou/week-01/thumbnail.jpg
  liveUrl?: string       // link to presentation, live demo, etc.
  isPlaceholder: boolean // true = content not yet filled in
}

// Full detail for the week's project page
export interface RevoUWeekDetail extends RevoUWeek {
  overview: string
  objective: string
  myRole: string
  process: string[]      // Ordered steps
  result: string
  whatILearned: string
  gallery?: RevoUGalleryItem[]
  liveUrl?: string
}

export interface RevoUGalleryItem {
  src: string
  alt: string
  caption?: string
}

export type RevoUCategory =
  | 'Digital Marketing Fundamentals'
  | 'SEO'
  | 'SEM'
  | 'Social Media Marketing'
  | 'Content Marketing'
  | 'Email Marketing'
  | 'Analytics'
  | 'Campaign Strategy'
  | 'Data Visualization'
  | 'Marketing Automation'
  | 'Final Project'
  | 'Placeholder'
