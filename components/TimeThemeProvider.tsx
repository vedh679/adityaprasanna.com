'use client'

import { useEffect } from 'react'
import { getThemeAtHour, applyTheme, currentDecimalHours } from '@/lib/time-theme'

export default function TimeThemeProvider() {
  useEffect(() => {
    // Apply immediately on mount
    applyTheme(getThemeAtHour(currentDecimalHours()))

    // Update every second — each tick shifts colours by ~1/3600th of the day cycle
    const id = setInterval(() => {
      applyTheme(getThemeAtHour(currentDecimalHours()))
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return null
}
