// ============================================================
// JOURNEY / TIMELINE TYPES
// Source: docs/10-components.md — Journey component
// ============================================================

export interface JourneyEntry {
  date: string           // "Aug 2026" — Mon YYYY format
  title: string
  organization?: string
  description: string
  isCurrent?: boolean    // Accent dot + highlight for current entry
}
