import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-site px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">

          {/* Left: logo + tagline */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm font-medium tracking-widest text-foreground hover:text-muted transition-colors duration-200"
            >
              <span className="text-crimson">A—P</span>
            </Link>
            <p className="text-xs text-muted tracking-wide max-w-xs">
              Design & Code for those who refuse to settle.
            </p>
          </div>

          {/* Centre: nav links */}
          <nav className="flex flex-col gap-3">
            {[
              { label: 'For Agencies', href: '/for-agencies' },
              { label: 'For Brands', href: '/for-brands' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: contact + socials */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:work@adityaprasanna.com"
              className="text-xs tracking-wide text-muted hover:text-foreground transition-colors duration-200"
            >
              work@adityaprasanna.com
            </a>
            <a
              href="tel:+31630951453"
              className="text-xs tracking-wide text-muted hover:text-foreground transition-colors duration-200"
            >
              +31 6 30 951 453
            </a>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/adityaprasanna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/adityaprasanna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-2">
          <span className="text-xs text-muted tracking-wide">
            ©2026 <span className="text-crimson">A—P</span>. All rights reserved.
          </span>
          <span className="text-xs text-muted tracking-wide">
            Enschede, NL
          </span>
        </div>
      </div>
    </footer>
  )
}
