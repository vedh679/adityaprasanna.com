'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'For Agencies', href: '/for-agencies' },
  { label: 'For Brands', href: '/for-brands' },
  { label: 'Works', href: '/#section_cases' },
  { label: 'Insights', href: '/#section_insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [time, setTime] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const hh = String(now.getHours()).padStart(2, '0')
      const mm = String(now.getMinutes()).padStart(2, '0')
      const ss = String(now.getSeconds()).padStart(2, '0')
      setTime(`${hh}:${mm}:${ss} CET`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-site items-center justify-between px-6 py-4 md:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-medium tracking-widest text-foreground hover:text-muted transition-colors duration-200"
        >
          A—P
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: clock + socials */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-xs tracking-wider text-muted tabular-nums">
            {time}
          </span>
          <div className="flex items-center gap-4">
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
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-[#0a0a0a]">
          <ul className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-[#1a1a1a] flex gap-6">
              <a
                href="https://www.instagram.com/adityaprasanna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/adityaprasanna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
