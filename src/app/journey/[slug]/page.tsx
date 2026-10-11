import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { revouWeeks, getWeekBySlug, getAdjacentWeeks } from '@/data/revou-weeks'
import WeekDetailClient from '@/components/journey/WeekDetailClient/WeekDetailClient'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return revouWeeks.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const week = getWeekBySlug(slug)
  if (!week) return { title: 'Week Not Found' }
  return {
    title: `${week.title} — Week ${String(week.week).padStart(2, '0')}`,
    description: week.shortDescription,
  }
}

export default async function WeekDetailPage({ params }: Props) {
  const { slug } = await params
  const week = getWeekBySlug(slug)
  if (!week) notFound()

  const { prev, next } = getAdjacentWeeks(slug)

  return <WeekDetailClient week={week} prev={prev} next={next} />
}
