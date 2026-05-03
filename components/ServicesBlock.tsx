'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    label: 'For Agencies',
    href: '/for-agencies',
    headline: 'Design & Development Partner for Creative Agencies',
    body: 'Partnering with agencies and freelancers on brand, website, and digital design projects — from concept through development.',
    cta: 'View services →',
  },
  {
    label: 'For Brands',
    href: '/for-brands',
    headline: 'Helping Brands Build Presence from Idea Through Launch',
    body: 'From naming and identity to web design and development — full-service support for ambitious companies building from the ground up.',
    cta: 'View services →',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
}

export default function ServicesBlock() {
  return (
    <section className="border-t border-border px-6 md:px-10 py-24">
      <div className="max-w-site mx-auto">

        <motion.p
          className="text-2xs tracking-widest uppercase text-muted mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Services
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
          {services.map((s, i) => (
            <motion.div
              key={s.href}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="bg-background p-10 md:p-16 flex flex-col justify-between gap-12 group"
            >
              <div className="flex flex-col gap-6">
                <span className="text-2xs tracking-widest uppercase text-muted">
                  {s.label}
                </span>
                <h2 className="text-2xl md:text-3xl font-light leading-snug tracking-tight text-foreground">
                  {s.headline}
                </h2>
                <p className="text-sm text-muted leading-relaxed max-w-sm">
                  {s.body}
                </p>
              </div>
              <Link
                href={s.href}
                className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200 self-start border-b border-transparent hover:border-foreground pb-px"
              >
                {s.cta}
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
