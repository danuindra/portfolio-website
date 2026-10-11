'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number    // delay in ms for stagger effect
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)
  // Use a ref so the observer effect doesn't re-run when this value changes
  const prefersReducedRef = useRef(false)

  // Check prefers-reduced-motion — runs once, updates both ref and state
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedRef.current = mq.matches
    setPrefersReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => {
      prefersReducedRef.current = e.matches
      setPrefersReduced(e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // IntersectionObserver — only re-runs when delay changes, not when prefersReduced changes
  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If reduced motion, show immediately without animation
    if (prefersReducedRef.current) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay])

  const translateMap = {
    up: 'translateY(24px)',
    down: 'translateY(-24px)',
    left: 'translateX(24px)',
    right: 'translateX(-24px)',
  }

  return (
    <div
      ref={ref}
      className={cn('transition-none', className)}
      style={
        prefersReduced
          ? undefined
          : {
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate(0)' : translateMap[direction],
              transition: isVisible
                ? `opacity 400ms cubic-bezier(0,0,0.2,1) ${delay}ms, transform 400ms cubic-bezier(0,0,0.2,1) ${delay}ms`
                : 'none',
            }
      }
    >
      {children}
    </div>
  )
}
