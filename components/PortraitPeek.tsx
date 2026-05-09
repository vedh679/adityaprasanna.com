'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function PortraitPeek() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const entranceDone = useRef(false)
  const scrollShift = useRef(0)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    // Start: off-screen right, invisible
    el.style.transition = 'none'
    el.style.opacity = '0'
    el.style.transform = 'translateX(55vw)'

    // Entrance: after short delay, slide in with spring transition
    const t1 = setTimeout(() => {
      el.style.transition = 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateX(0)'
    }, 400)

    // After entrance completes, mark done and drop transition for responsive scroll
    const t2 = setTimeout(() => {
      entranceDone.current = true
      el.style.transition = 'none'
    }, 1700) // 400ms delay + 1200ms anim + 100ms buffer

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  // Scroll parallax: move left as user scrolls right
  useEffect(() => {
    const scroller = document.querySelector('[data-h-scroll]') as HTMLElement | null
    if (!scroller) return

    const onScroll = () => {
      const el = wrapRef.current
      if (!el || !entranceDone.current) return
      const maxScroll = scroller.scrollWidth - scroller.clientWidth
      const pct = maxScroll > 0 ? scroller.scrollLeft / maxScroll : 0
      scrollShift.current = pct * window.innerWidth * 0.75
      el.style.transform = `translateX(-${scrollShift.current}px)`
    }

    scroller.addEventListener('scroll', onScroll, { passive: true })
    return () => scroller.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed z-20 pointer-events-none overflow-hidden"
      style={{ top: '65px', bottom: '52px', left: 0, right: 0 }}
    >
      <div
        ref={wrapRef}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: '50vw',
        }}
      >
        <Image
          src="/portrait.png"
          alt="Aditya Prasanna"
          fill
          style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
          priority
        />
      </div>
    </div>
  )
}
