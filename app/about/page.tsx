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

const capabilities = [
  'Art Direction',
  'Branding',
  'Digital Design',
  'Development',
]

const experience = [
  {
    role: 'Lead Designer',
    company: 'Outcast Region',
    year: '2020',
    desc: 'Esports organisation. Built the visual identity and all creative output from the ground up.',
  },
  {
    role: 'Designer',
    company: 'Team Synergy',
    year: '2021',
    desc: 'Designed brand assets, social content, and team identity for a competitive esports organisation.',
  },
  {
    role: 'Digital Designer & Developer',
    company: 'UNCOMMON',
    year: '2024 — present',
    desc: 'Internship at an independent creative agency. Working across brand, web design, and development.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero intro */}
      <section className="px-6 md:px-10 pt-32 pb-24 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto">
          <motion.span
            className="text-2xs tracking-widest uppercase text-muted block mb-10"
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
          >
            About
          </motion.span>
          <motion.p
            className="text-[clamp(1.4rem,3vw,2.8rem)] font-light leading-[1.3] tracking-tight text-foreground max-w-4xl"
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
          >
            R—K is an independent design and development practice focused on
            building strong digital presence for ambitious brands.
          </motion.p>
          <motion.p
            className="mt-6 text-base text-muted leading-relaxed max-w-2xl"
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
          >
            The work sits at the intersection of beauty and function — where
            strategy meets craft and every decision carries intent.
          </motion.p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 md:px-10 py-16 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto">
          <motion.p
            className="text-2xs tracking-widest uppercase text-muted mb-8"
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
                className="text-xs tracking-widest uppercase text-muted border border-[#1a1a1a] px-4 py-2"
              >
                {cap}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Portrait placeholder */}
      <section className="border-b border-[#1a1a1a]">
        <motion.div
          className="w-full aspect-[16/7] bg-[#111] flex items-center justify-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 1 }}
        >
          <span className="text-2xs tracking-widest uppercase text-[#333]">
            Portrait — Ravi Klaassens
          </span>
        </motion.div>
      </section>

      {/* Founder narrative */}
      <section className="px-6 md:px-10 py-24 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.p
            className="text-2xs tracking-widest uppercase text-muted md:col-span-2 pt-1"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            Background
          </motion.p>
          <div className="md:col-span-7 flex flex-col gap-6">
            {[
              'It started at 13 with Photoshop — no brief, no client, just the pull of making something from nothing. That instinct hasn\'t changed. Only the tools and the stakes have.',
              'In 2020, esports became the first real proving ground. Building visual identities for Outcast Region and Team Synergy meant learning fast — creating systems that had to work across every format, at pace, under scrutiny.',
              'The internship at UNCOMMON in 2024 brought the next layer: working inside a real creative agency, across brand strategy, digital design, and development. That\'s where Paramor began — and eventually gave way to this practice.',
              'R—K exists to support agencies that need a sharp, reliable design and development partner, and brands that are ready to build something that holds weight. The practice is kept deliberately small to keep the quality high.',
            ].map((para, i) => (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="text-base text-muted leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="px-6 md:px-10 py-20 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto">
          <motion.p
            className="text-2xs tracking-widest uppercase text-muted mb-12"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            Experience
          </motion.p>
          <div className="flex flex-col divide-y divide-[#1a1a1a]">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="grid grid-cols-12 gap-6 py-8"
              >
                <span className="col-span-12 md:col-span-2 text-xs tabular-nums text-muted">{exp.year}</span>
                <div className="col-span-12 md:col-span-4">
                  <p className="text-sm font-light text-foreground">{exp.role}</p>
                  <p className="text-xs text-muted mt-1 tracking-wide">{exp.company}</p>
                </div>
                <p className="col-span-12 md:col-span-5 md:col-start-8 text-sm text-muted leading-relaxed">
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-site mx-auto">
          <motion.p
            className="text-2xs tracking-widest uppercase text-muted mb-4"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            Available from late May '26
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl font-light leading-tight text-foreground max-w-xl mb-12"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
          >
            Work together on something that matters.
          </motion.h2>
          <motion.div
            className="flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/for-agencies"
              className="text-xs tracking-widest uppercase text-foreground border border-[#333] hover:border-foreground px-6 py-3 transition-colors duration-200"
            >
              For Agencies →
            </Link>
            <Link
              href="/for-brands"
              className="text-xs tracking-widest uppercase text-muted border border-[#1a1a1a] hover:border-[#333] hover:text-foreground px-6 py-3 transition-colors duration-200"
            >
              For Brands →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
