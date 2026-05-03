'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { TIMELINE_GRADIENT, getThemeAtHour, applyTheme } from '@/lib/time-theme'

const TICK_HOURS = [0, 6, 12, 18, 24]

function pctToDecimalHour(pct: number) {
  return (Math.max(0, Math.min(100, pct)) / 100) * 24
}

function pctToTimeStr(pct: number) {
  const totalMins = Math.round(pctToDecimalHour(pct) * 60)
  const h = Math.floor(totalMins / 60) % 24
  const m = totalMins % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

function realTimePct() {
  const now = new Date()
  const h = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600
  return (h / 24) * 100
}

// Quartic ease-out for the snap-back
function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 4)
}

export default function DayTimeline() {
  const barRef = useRef<HTMLDivElement>(null)
  const scrubbingRef = useRef(false)
  const displayPctRef = useRef(0)
  const animRef = useRef(0)

  const [mounted, setMounted] = useState(false)
  const [displayPct, setDisplayPct] = useState(0)
  const [realPct, setRealPct] = useState(0)
  const [scrubbing, setScrubbing] = useState(false)

  // Real-time ticker — only advances the marker when not scrubbing
  useEffect(() => {
    setMounted(true)
    const tick = () => {
      const p = realTimePct()
      setRealPct(p)
      if (!scrubbingRef.current) {
        displayPctRef.current = p
        setDisplayPct(p)
      }
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const getPctFromClientX = useCallback((clientX: number): number => {
    if (!barRef.current) return displayPctRef.current
    const rect = barRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    return (x / rect.width) * 100
  }, [])

  const scrubTo = useCallback((pct: number) => {
    displayPctRef.current = pct
    setDisplayPct(pct)
    applyTheme(getThemeAtHour(pctToDecimalHour(pct)))
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    cancelAnimationFrame(animRef.current)
    scrubbingRef.current = true
    setScrubbing(true)
    scrubTo(getPctFromClientX(e.clientX))
  }, [getPctFromClientX, scrubTo])

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!scrubbingRef.current) return
    scrubTo(getPctFromClientX(e.clientX))
  }, [getPctFromClientX, scrubTo])

  const onPointerUp = useCallback(() => {
    if (!scrubbingRef.current) return
    scrubbingRef.current = false
    setScrubbing(false)

    // Animate the marker (and theme) back to the real current time
    const fromPct = displayPctRef.current
    const toPct = realTimePct()
    const startTime = performance.now()
    const DURATION = 900 // ms

    const animate = (now: number) => {
      const t = Math.min((now - startTime) / DURATION, 1)
      const p = fromPct + (toPct - fromPct) * easeOut(t)
      displayPctRef.current = p
      setDisplayPct(p)
      applyTheme(getThemeAtHour(pctToDecimalHour(p)))
      if (t < 1) {
        animRef.current = requestAnimationFrame(animate)
      }
    }
    animRef.current = requestAnimationFrame(animate)
  }, [])

  if (!mounted) return <div className="fixed bottom-0 left-0 right-0 z-40 h-[52px]" />

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 select-none">

      {/* Hour-label row — sits above the gradient, uses theme colours */}
      <div
        className="relative h-5"
        style={{ backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}
      >
        {TICK_HOURS.map((h, i) => (
          <span
            key={h}
            className="absolute bottom-1 text-[7px] tracking-widest tabular-nums"
            style={{
              left: `${(h / 24) * 100}%`,
              color: 'var(--color-muted)',
              transform:
                i === 0
                  ? 'translateX(4px)'
                  : i === TICK_HOURS.length - 1
                  ? 'translateX(calc(-100% - 4px))'
                  : 'translateX(-50%)',
            }}
          >
            {String(h).padStart(2, '0')}h
          </span>
        ))}
      </div>

      {/* Gradient scrub bar */}
      <div
        ref={barRef}
        className="relative h-8 cursor-ew-resize touch-none"
        style={{ background: TIMELINE_GRADIENT }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Subtle dividers at 6, 12, 18h */}
        {[6, 12, 18].map(h => (
          <div
            key={h}
            className="absolute top-0 bottom-0 w-px bg-white/10 pointer-events-none"
            style={{ left: `${(h / 24) * 100}%` }}
          />
        ))}

        {/* Ghost marker — shows real time while scrubbing */}
        {scrubbing && (
          <>
            <div
              className="absolute top-0 bottom-0 w-px bg-white/20 pointer-events-none"
              style={{ left: `${realPct}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/30 pointer-events-none"
              style={{ left: `${realPct}%` }}
            />
          </>
        )}

        {/* Live marker */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/80 pointer-events-none"
          style={{ left: `${displayPct}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-lg ring-1 ring-white/30 pointer-events-none"
          style={{ left: `${displayPct}%` }}
        />

        {/* Current / scrub time label */}
        <span
          className="absolute top-[5px] text-[8px] tracking-widest tabular-nums mix-blend-difference text-white -translate-x-1/2 pointer-events-none font-medium"
          style={{ left: `${displayPct}%` }}
        >
          {pctToTimeStr(displayPct)}
        </span>

        {/* Drag hint — fades when scrubbing */}
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[7px] tracking-widest uppercase text-white/40 mix-blend-difference pointer-events-none transition-opacity duration-300"
          style={{ opacity: scrubbing ? 0 : 1 }}
        >
          drag to preview
        </span>
      </div>
    </div>
  )
}
