import { useEffect, useRef, useState, type ReactNode } from 'react'

// ---------------------------------------------------------------------------
// Lightweight motion helpers: count-up numbers + scroll-reveal wrapper.
// No external animation library — keeps the bundle lean.
// ---------------------------------------------------------------------------

export function useCountUp(target: number, duration = 1600, start = true) {
  const [value, setValue] = useState(0)
  const raf = useRef<number>()

  useEffect(() => {
    if (!start) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(target)
      return
    }
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
      setValue(target * eased)
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [target, duration, start])

  return value
}

export function CountUp({
  to,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration,
}: {
  to: number
  decimals?: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const { ref, visible } = useReveal<HTMLSpanElement>()
  const v = useCountUp(to, duration, visible)
  return (
    <span ref={ref}>
      {prefix}
      {v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  )
}

// Returns a ref + visibility flag; toggles when the element scrolls into view.
export function useReveal<T extends HTMLElement>(once = true) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) io.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.18 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [once])

  return { ref, visible }
}

// Wraps children in a scroll-reveal container with an optional stagger delay.
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
