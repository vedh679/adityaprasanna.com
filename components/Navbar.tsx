'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const hh = String(now.getHours()).padStart(2, '0')
      const mm = String(now.getMinutes()).padStart(2, '0')
      const ss = String(now.getSeconds()).padStart(2, '0')
      setTime(`${hh}:${mm}:${ss}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-site items-center justify-between px-6 py-4 md:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-medium tracking-widest text-foreground hover:text-muted transition-colors duration-200"
        >
          <span className="text-crimson">A—P</span>
        </Link>

        {/* Right: clock + socials */}
        <div className="flex items-center gap-6">
          <span className="text-xs tracking-wider text-muted tabular-nums hidden md:block">
            {time}
          </span>
          <a
            href="https://www.instagram.com/adityaprasanna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200"
          >
            IG
          </a>
          <a
            href="https://www.linkedin.com/in/adityaprasanna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200"
          >
            LI
          </a>
        </div>
      </nav>
    </header>
  )
}
