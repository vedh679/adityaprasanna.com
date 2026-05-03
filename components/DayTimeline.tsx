'use client'

import { useEffect, useState } from 'react'
import { TIMELINE_GRADIENT } from '@/lib/time-theme'

const HOUR_LABELS = [
  { h: 0,  label: '00' },
  { h: 6,  label: '06' },
  { h: 12, label: '12' },
  { h: 18, label: '18' },
  { h: 24, label: '24' },
]

export default function DayTimeline() {
  const [pct, setPct] = useState(0)
  const [timeStr, setTimeStr] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      const h = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600
      setPct((h / 24) * 100)
      setTimeStr(
        `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) return <div className="fixed top-[65px] left-0 right-0 z-40 h-10" />

  return (
    <div className="fixed top-[65px] left-0 right-0 z-40 select-none pointer-events-none">
      {/* Gradient bar */}
      <div
        className="relative h-7"
        style={{ background: TIMELINE_GRADIENT }}
      >
        {/* Subtle tick marks at key hours */}
        {[6, 12, 18].map(h => (
          <div
            key={h}
            className="absolute top-0 bottom-0 w-px bg-white/10"
            style={{ left: `${(h / 24) * 100}%` }}
          />
        ))}

        {/* Current time hairline */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/70"
          style={{ left: `${pct}%` }}
        />

        {/* Current time dot */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-md ring-1 ring-white/40"
          style={{ left: `${pct}%` }}
        />

        {/* Current time label — sits inside the bar above the dot */}
        <span
          className="absolute top-1 text-[8px] tracking-widest tabular-nums mix-blend-difference text-white -translate-x-1/2"
          style={{ left: `${pct}%` }}
        >
          {timeStr}
        </span>
      </div>

      {/* Hour labels row */}
      <div
        className="relative h-3"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        {HOUR_LABELS.map(({ h, label }, i) => (
          <span
            key={label}
            className="absolute text-[7px] tracking-widest tabular-nums"
            style={{
              left: `${(h / 24) * 100}%`,
              top: '2px',
              color: 'var(--color-muted)',
              transform: i === 0 ? 'none' : i === HOUR_LABELS.length - 1 ? 'translateX(-100%)' : 'translateX(-50%)',
            }}
          >
            {label}h
          </span>
        ))}
      </div>
    </div>
  )
}
