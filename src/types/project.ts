import type { ReactNode } from 'react'

// ============================================================
// PROJECT TYPES
// Source: docs/13-project-template.md
// ============================================================

// What lives in YAML frontmatter of each .mdx file
export interface ProjectFrontmatter {
  slug: string           // URL: /projects/ga4-dashboard
  title: string          // "Google Analytics 4 Dashboard"
  tagline: string        // One sentence — for project card
  category: ProjectCategory
  status: ProjectStatus
  featured: boolean      // Show in Home highlight (max 3)
  date: string           // "2026-07" — YYYY-MM format
  duration?: string      // "2 weeks"
  tools: string[]        // ["GA4", "Looker Studio"]
  tags?: string[]        // Additional searchable tags
  thumbnail: string      // "/images/projects/ga4-dashboard/thumbnail.jpg"
  coverImage?: string    // Full-width hero image
  metrics?: ProjectMetric[]
  liveUrl?: string
  repoUrl?: string
}

// What the project detail page receives after MDX is parsed
export interface ProjectPage extends ProjectFrontmatter {
  content: ReactNode     // Compiled MDX body
}

// Subset used for project card listings and Home highlight
export type ProjectCardData = Pick<
  ProjectFrontmatter,
  'slug' | 'title' | 'tagline' | 'category' | 'tools' | 'thumbnail' | 'featured' | 'date'
>

// Result metric displayed in the Results section
export interface ProjectMetric {
  value: string          // "47%" or "+200" or "3x"
  label: string          // "Increase in organic traffic"
  description?: string
}

// Image with required alt text for accessibility
export interface ProjectImage {
  src: string
  alt: string            // Required — no empty alt on project images
  caption?: string
}

// Union types
export type ProjectCategory = 'analytics' | 'marketing' | 'web' | 'ai'
export type ProjectStatus = 'completed' | 'in-progress' | 'archived'
