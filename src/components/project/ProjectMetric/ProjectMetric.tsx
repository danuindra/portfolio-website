import type { ProjectMetric } from '@/types'

interface ProjectMetricProps {
  metric: ProjectMetric
}

export default function ProjectMetric({ metric }: ProjectMetricProps) {
  return (
    <div className="p-5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] text-center">
      <p className="text-3xl font-bold text-[var(--color-accent)] mb-1 tabular-nums">
        {metric.value}
      </p>
      <p className="text-sm font-medium text-[var(--color-text-primary)] mb-1">
        {metric.label}
      </p>
      {metric.description && (
        <p className="text-xs text-[var(--color-text-tertiary)]">
          {metric.description}
        </p>
      )}
    </div>
  )
}
