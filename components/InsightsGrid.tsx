'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const articles = [
  {
    slug: '/insights/the-r-k-brand',
    title: 'Creation of the R—K brand',
    category: 'Insight',
    date: 'Mar 19, 2026',
    number: 'N°1',
  },
  {
    slug: '/insights/when-is-it-time-for-a-rebrand',
    title: 'When is it time for a rebrand?',
    category: 'Insight',
    date: 'Mar 19, 2026',
    number: 'N°4',
  },
  {
    slug: '/insights/process-of-a-r-k-project',
    title: 'Process of a R—K project',
    category: 'Insight',
    date: 'Mar 2026',
    number: 'N°2',
  },
  {
    slug: '/insights/presence-as-a-brand-cornerstone',
    title: 'Presence as a brand cornerstone',
    category: 'Insight',
    date: 'Mar 2026',
    number: 'N°3',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
}

export default function InsightsGrid() {
  return (
    <section id="section_insights" className="border-t border-[#1a1a1a] px-6 md:px-10 py-24">
      <div className="max-w-site mx-auto">

        <div className="flex items-end justify-between mb-12">
          <motion.p
            className="text-2xs tracking-widest uppercase text-muted"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Insights
          </motion.p>
          <motion.span
            className="text-2xs tabular-nums text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {articles.length} Articles
          </motion.span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              <Link
                href={article.slug}
                className="group flex flex-col justify-between gap-8 bg-[#0a0a0a] p-8 md:p-10 h-full hover:bg-[#111] transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-2xs tabular-nums text-muted">{article.number}</span>
                  <span className="text-2xs tracking-widest uppercase text-muted">{article.category}</span>
                </div>

                <h3 className="text-lg md:text-xl font-light leading-snug tracking-tight text-foreground group-hover:text-white transition-colors duration-200">
                  {article.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">{article.date}</span>
                  <span className="text-xs text-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Read →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
