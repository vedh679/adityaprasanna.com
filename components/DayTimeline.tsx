'use client'

import { useEffect, useState } from 'react'
import { TIMELINE_GRADIENT } from '@/lib/time-theme'

const TICK_HOURS = [0, 6, 12, 18, 24]

function realTimePct() {
  const now = new Date()
  const h = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600
  return (h / 24) * 100
}

function pctToTimeStr(pct: number) {
  const totalMins = Math.round((pct / 100) * 24 * 60)
  const h = Math.floor(totalMins / 60) % 24
  const m = totalMins % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

export default function DayTimeline() {
  const [mounted, setMounted] = useState(false)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    setMounted(true)
    const tick = () => setPct(realTimePct())
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) return <div className="fixed bottom-0 left-0 right-0 z-40 h-[52px]" />

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 select-none pointer-events-none">

      {/* Hour labels */}
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

      {/* Gradient bar */}
      <div
        className="relative h-8"
        style={{ background: TIMELINE_GRADIENT }}
      >
        {/* Subtle dividers */}
        {[6, 12, 18].map(h => (
          <div
            key={h}
            className="absolute top-0 bottom-0 w-px bg-white/10"
            style={{ left: `${(h / 24) * 100}%` }}
          />
        ))}

        {/* Live marker line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/80"
          style={{ left: `${pct}%` }}
        />
        {/* Live marker dot */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-lg ring-1 ring-white/30"
          style={{ left: `${pct}%` }}
        />
        {/* Time label */}
        <span
          className="absolute top-[5px] text-[8px] tracking-widest tabular-nums mix-blend-difference text-white -translate-x-1/2 font-medium"
          style={{ left: `${pct}%` }}
        >
          {pctToTimeStr(pct)}
        </span>
      </div>
    </div>
  )
}
