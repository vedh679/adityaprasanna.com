'use client'

import Marquee from 'react-fast-marquee'

const items = [
  'Design & Code',
  '·',
  'For those who refuse to settle',
  '·',
  'A—P',
  '·',
  'Identity',
  '·',
  'Web Design',
  '·',
  'Development',
  '·',
  'Art Direction',
  '·',
  'Enschede, NL',
  '·',
]

export default function MarqueeStrip() {
  return (
    <div className="border-t border-b border-[#1a1a1a] py-4 overflow-hidden">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {items.map((item, i) => (
          <span
            key={i}
            className={`mx-6 text-xs tracking-widest uppercase ${
              item === '·' ? 'text-[#333]' : item === 'A—P' ? 'text-crimson' : 'text-muted'
            }`}
          >
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  )
}
