'use client'

import { useRef, useEffect, ReactNode } from 'react'

export function Panel({ children }: { children: ReactNode }) {
  return (
    <div
      className="w-screen flex-shrink-0 h-full overflow-y-auto overflow-x-hidden"
      style={{ scrollSnapAlign: 'start' }}
    >
      {children}
    </div>
  )
}

export default function HorizontalScroller({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      // Redirect vertical wheel to horizontal scroll
      if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <div
      ref={ref}
      data-h-scroll
      className="flex h-full overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      style={{ scrollSnapType: 'x mandatory' }}
    >
      {children}
    </div>
  )
}
