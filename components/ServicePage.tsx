'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
}

const featuredProjects = [
  { title: 'R—K', category: 'Identity + Art Direction', year: '2026', slug: '/archives/r-k' },
  { title: 'Prop Films', category: 'Exploration', year: '2025', slug: '/archives/prop' },
  { title: 'Buyt Bags', category: 'Web Development', year: '2025', slug: '/archives/buyt' },
]

const capabilities = [
  'Web Development',
  'Logos',
  'Naming',
  'Motion',
  'Art Direction',
  'Branding',
  'Digital Design',
  'Product Design',
]

const process = [
  { step: '01', title: 'Discovery', desc: 'Understanding your brand, goals, audience, and competitive landscape before a single pixel is touched.' },
  { step: '02', title: 'Strategy', desc: 'Turning research into direction — positioning, messaging hierarchy, and a clear creative brief.' },
  { step: '03', title: 'Design', desc: 'Visual exploration grounded in strategy. Every form, colour, and type choice earns its place.' },
  { step: '04', title: 'Development', desc: 'Hand-coded, performant, and precise — the design translated faithfully into a live product.' },
  { step: '05', title: 'Launch', desc: 'Delivery, handoff, and support. The work is done when it performs, not just when it ships.' },
]

export type ServicePageVariant = 'agencies' | 'brands'

interface Props {
  variant: ServicePageVariant
}

const content = {
  agencies: {
    label: 'For Agencies',
    headline: 'Design & Development Partner for Creative Agencies',
    subheadline: 'Partnering with agencies and freelancers on brand, website, and digital design projects — from concept through development.',
    body: 'Editorial grid-based layouts and strong content shape powerful presence — the kind that stands in a league of its own. White-label or credited, the quality is the same.',
    testimonialQuote: 'Ravi built a beautiful and updated website for us. He translated our mockups into a polished final product and always took time to explain everything.',
    testimonialAuthor: 'Sep Graf',
    testimonialCompany: 'The Cavalry',
  },
  brands: {
    label: 'For Brands',
    headline: 'Helping Brands Build Presence from Idea Through Launch',
    subheadline: 'Helping brands and companies create their brand, website, and online presence from idea through launch.',
    body: 'From naming and identity to web design and development — full-service support for ambitious companies who know that perception is foundational, not decorative.',
    testimonialQuote: 'Ravi built a beautiful and updated website for us. He translated our mockups into a polished final product and always took time to explain everything.',
    testimonialAuthor: 'Sep Graf',
    testimonialCompany: 'The Cavalry',
  },
}

export default function ServicePage({ variant }: Props) {
  const c = content[variant]

  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-10 pt-32 pb-24 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto">
          <motion.span
            className="text-2xs tracking-widest uppercase text-muted block mb-10"
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
          >
            {c.label}
          </motion.span>
          <motion.h1
            className="text-[clamp(2rem,5vw,5rem)] font-light leading-[1.1] tracking-tight text-foreground max-w-4xl"
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
          >
            {c.headline}
          </motion.h1>
          <motion.p
            className="mt-8 text-base text-muted leading-relaxed max-w-xl"
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
          >
            {c.subheadline}
          </motion.p>
          <motion.div
            className="mt-10 flex gap-6"
            custom={3} initial="hidden" animate="visible" variants={fadeUp}
          >
            <Link
              href="/contact"
              className="text-xs tracking-widest uppercase text-foreground border border-[#333] hover:border-crimson hover:text-crimson px-6 py-3 transition-colors duration-200"
            >
              Start a project →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 md:px-10 py-20 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto">
          <motion.p
            className="text-2xs tracking-widest uppercase text-muted mb-10"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            Capabilities
          </motion.p>
          <div className="flex flex-wrap gap-3">
            {capabilities.map((cap, i) => (
              <motion.span
                key={cap}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-xs tracking-widest uppercase text-muted border border-[#1a1a1a] px-4 py-2 hover:border-[#333] hover:text-foreground transition-colors duration-200"
              >
                {cap}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Body copy */}
      <section className="px-6 md:px-10 py-20 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto max-w-3xl">
          <motion.p
            className="text-[clamp(1.1rem,2vw,1.5rem)] font-light leading-[1.6] text-foreground"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9 }}
          >
            {c.body}
          </motion.p>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-10 py-20 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto">
          <motion.p
            className="text-2xs tracking-widest uppercase text-muted mb-12"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            Process
          </motion.p>
          <div className="flex flex-col divide-y divide-[#1a1a1a]">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="grid grid-cols-12 gap-6 py-8"
              >
                <span className="col-span-1 text-2xs tabular-nums text-muted pt-1">{p.step}</span>
                <div className="col-span-11 md:col-span-4">
                  <h3 className="text-base font-light text-foreground">{p.title}</h3>
                </div>
                <p className="col-span-11 md:col-span-7 text-sm text-muted leading-relaxed md:col-start-6">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 md:px-10 py-20 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto">
          <motion.blockquote
            className="max-w-2xl"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9 }}
          >
            <p className="text-xl md:text-2xl font-light leading-snug text-foreground mb-8">
              "{c.testimonialQuote}"
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#333]" />
              <div>
                <p className="text-xs text-foreground tracking-wide">{c.testimonialAuthor}</p>
                <p className="text-xs text-muted tracking-wide">{c.testimonialCompany}</p>
              </div>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Awards */}
      <section className="px-6 md:px-10 py-16 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
          <motion.div
            className="flex items-baseline gap-3"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <span className="text-5xl font-light tabular-nums text-foreground">9</span>
            <span className="text-xs tracking-widest uppercase text-muted">Awards</span>
          </motion.div>
          <div className="flex gap-10">
            {[{ n: '2×', label: 'Site of the Day' }, { n: '7×', label: 'Honors' }].map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <p className="text-lg font-light text-foreground">{a.n}</p>
                <p className="text-xs text-muted tracking-wide">{a.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="px-6 md:px-10 py-20 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto">
          <motion.p
            className="text-2xs tracking-widest uppercase text-muted mb-12"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            Featured Work
          </motion.p>
          <div className="border-t border-[#1a1a1a]">
            {featuredProjects.map((proj, i) => (
              <motion.div
                key={proj.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={proj.slug}
                  className="group flex items-center justify-between py-5 border-b border-[#1a1a1a] hover:bg-[#111] px-2 -mx-2 transition-colors duration-300"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-2xs tabular-nums text-muted w-6">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-xl font-light text-foreground">{proj.title}</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="hidden md:block text-xs tracking-widest uppercase text-muted">{proj.category}</span>
                    <span className="text-xs tabular-nums text-muted">{proj.year}</span>
                    <span className="text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-site mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <p className="text-2xs tracking-widest uppercase text-muted mb-4">Available from late May '26</p>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground max-w-lg">
              Ready to build something that refuses to settle?
            </h2>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="mailto:work@raviklaassens.com"
              className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200 border-b border-transparent hover:border-foreground pb-px"
            >
              work@raviklaassens.com →
            </a>
            <a
              href="tel:+31630951453"
              className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200 border-b border-transparent hover:border-foreground pb-px"
            >
              +31 6 30 951 453 →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
