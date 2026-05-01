'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getProject, getAdjacentProjects, projects } from '@/lib/projects'
import { colorize } from '@/lib/brand'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = getProject(slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(slug)

  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-10 pt-32 pb-16 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto">

          <motion.div
            className="flex items-center justify-between mb-12"
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
          >
            <span className="text-2xs tracking-widest uppercase text-muted">{project.id}</span>
            <span className="text-2xs tabular-nums text-muted">{project.date}</span>
          </motion.div>

          <motion.h1
            className="text-[clamp(2.5rem,6vw,7rem)] font-light leading-[1.05] tracking-tight text-foreground mb-6"
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
          >
            {colorize(project.title)}
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center gap-6 mt-8"
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
          >
            <div className="flex flex-col gap-1">
              <span className="text-2xs tracking-widest uppercase text-muted">Category</span>
              <span className="text-xs text-foreground">{project.category}</span>
            </div>
            <div className="w-px h-8 bg-[#1a1a1a]" />
            <div className="flex flex-col gap-1">
              <span className="text-2xs tracking-widest uppercase text-muted">Location</span>
              <span className="text-xs text-foreground">{project.location}</span>
            </div>
            <div className="w-px h-8 bg-[#1a1a1a]" />
            <div className="flex flex-col gap-1">
              <span className="text-2xs tracking-widest uppercase text-muted">Services</span>
              <span className="text-xs text-foreground">{project.services.join(' · ')}</span>
            </div>
            {project.liveUrl && (
              <>
                <div className="w-px h-8 bg-[#1a1a1a]" />
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200 border-b border-transparent hover:border-foreground pb-px"
                >
                  Live site →
                </a>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Hero image placeholder */}
      <section className="border-b border-[#1a1a1a]">
        <motion.div
          className="w-full aspect-[16/9] bg-[#111] flex items-center justify-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="text-2xs tracking-widest uppercase text-[#333]">
            {project.title} — Hero Image
          </span>
        </motion.div>
      </section>

      {/* Description */}
      <section className="px-6 md:px-10 py-24 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <p className="text-[clamp(1.1rem,2vw,1.6rem)] font-light leading-[1.5] text-foreground">
              {colorize(project.description)}
            </p>
          </motion.div>
          <motion.div
            className="md:col-span-5 md:col-start-8"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-sm text-muted leading-relaxed">
              {project.philosophy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image grid placeholders */}
      {project.imageCount > 1 && (
        <section className="border-b border-[#1a1a1a]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {Array.from({ length: project.imageCount - 1 }).map((_, i) => (
              <motion.div
                key={i}
                className="aspect-[4/3] bg-[#0d0d0d] flex items-center justify-center"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <span className="text-2xs tracking-widest uppercase text-[#222]">
                  {project.title} — Image {i + 2}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Next Case carousel */}
      <section className="px-6 md:px-10 py-20 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto">
          <motion.p
            className="text-2xs tracking-widest uppercase text-muted mb-10"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            All Projects
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-[#1a1a1a]">
            {projects.map((p, i) => (
              <motion.div
                key={p.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={`/archives/${p.slug}`}
                  className={`group flex flex-col gap-3 p-4 bg-[#0a0a0a] hover:bg-[#111] transition-colors duration-200 h-full ${
                    p.slug === slug ? 'border border-[#333]' : ''
                  }`}
                >
                  <div className="aspect-[4/3] bg-[#111] flex items-center justify-center mb-2">
                    <span className="text-2xs text-[#222] tracking-widest uppercase">{p.id.split('-')[0]}</span>
                  </div>
                  <p className="text-xs font-light text-foreground group-hover:text-white transition-colors duration-200 leading-snug">
                    {colorize(p.title)}
                  </p>
                  <p className="text-2xs tracking-widest uppercase text-muted">{p.services[0]}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="border-t border-[#1a1a1a]">
        <div className="grid grid-cols-2 divide-x divide-[#1a1a1a]">
          <Link
            href={`/archives/${prev.slug}`}
            className="group flex flex-col gap-2 px-6 md:px-10 py-10 hover:bg-[#111] transition-colors duration-200"
          >
            <span className="text-2xs tracking-widest uppercase text-muted">← Previous</span>
            <span className="text-base md:text-xl font-light text-foreground group-hover:text-white transition-colors duration-200">
              {colorize(prev.title)}
            </span>
          </Link>
          <Link
            href={`/archives/${next.slug}`}
            className="group flex flex-col gap-2 px-6 md:px-10 py-10 text-right hover:bg-[#111] transition-colors duration-200"
          >
            <span className="text-2xs tracking-widest uppercase text-muted">Next →</span>
            <span className="text-base md:text-xl font-light text-foreground group-hover:text-white transition-colors duration-200">
              {colorize(next.title)}
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}
