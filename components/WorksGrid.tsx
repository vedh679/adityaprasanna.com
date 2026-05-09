'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { colorize } from '@/lib/brand'

const projects = [
  {
    id: 'r-k',
    title: 'A—P',
    category: 'Identity + Art Direction',
    year: '2026',
    slug: '/archives/r-k',
    image: null,
  },
  {
    id: 'prop',
    title: 'Prop Films',
    category: 'Exploration',
    year: '2025',
    slug: '/archives/prop',
    image: null,
  },
  {
    id: 'buyt',
    title: 'Buyt Bags',
    category: 'Web Development',
    year: '2025',
    slug: '/archives/buyt',
    image: null,
  },
  {
    id: 'ta-design',
    title: 'TA Design',
    category: 'Web Design + Development',
    year: '2025',
    slug: '/archives/ta-design',
    image: null,
  },
  {
    id: 'mfk',
    title: 'Maison Francis Kurkdjian',
    category: 'Exploration',
    year: '2024',
    slug: '/archives/mfk',
    image: null,
  },
  {
    id: 'chris-hansen',
    title: 'Chris+Hansen',
    category: 'Identity + Art Direction',
    year: '2025',
    slug: '/archives/chris-hansen',
    image: null,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 },
  }),
}

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
    >
      <Link
        href={project.slug}
        className="group flex items-center justify-between py-5 border-b border-border relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Hover background sweep */}
        <motion.div
          className="absolute inset-0 bg-[#111] -z-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
        />

        {/* Left: index + title */}
        <div className="flex items-baseline gap-6">
          <span className="text-2xs tabular-nums text-muted w-8">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-lg md:text-2xl font-light tracking-tight text-foreground group-hover:text-white transition-colors duration-300">
            {colorize(project.title)}
          </span>
        </div>

        {/* Right: category + year + arrow */}
        <div className="flex items-center gap-8">
          <span className="hidden md:block text-xs tracking-widest uppercase text-muted group-hover:text-[#666] transition-colors duration-300">
            {project.category}
          </span>
          <span className="text-xs tabular-nums text-muted">
            {project.year}
          </span>
          <span className="text-xs text-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            →
          </span>
        </div>

        {/* Placeholder image on hover (right side, absolute) */}
        <motion.div
          className="absolute right-32 top-1/2 -translate-y-1/2 w-32 h-20 bg-[#1a1a1a] rounded overflow-hidden pointer-events-none"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 12 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Placeholder until real images are provided */}
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-2xs text-muted tracking-widest uppercase">
              {project.id}
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function WorksGrid() {
  return (
    <section id="section_cases" className="border-t border-border px-6 md:px-10 py-10 h-full overflow-y-auto">
      <div className="max-w-site mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <motion.p
            className="text-2xs tracking-widest uppercase text-muted"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Selected Works
          </motion.p>
          <motion.span
            className="text-2xs tabular-nums text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {projects.length} Projects
          </motion.span>
        </div>

        {/* Top border */}
        <div className="border-t border-border">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
