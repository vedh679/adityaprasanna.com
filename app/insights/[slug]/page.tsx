'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getArticle, getAdjacentArticles, articles } from '@/lib/articles'
import { colorize } from '@/lib/brand'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const article = getArticle(slug)
  if (!article) notFound()

  const { prev, next } = getAdjacentArticles(slug)

  return (
    <>
      {/* Article header */}
      <section className="px-6 md:px-10 pt-32 pb-16 border-b border-border">
        <div className="max-w-site mx-auto">
          <motion.div
            className="flex items-center justify-between mb-12"
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
          >
            <div className="flex items-center gap-4">
              <span className="text-2xs tabular-nums text-muted">{article.number}</span>
              <span className="text-2xs tracking-widest uppercase text-muted">{article.category}</span>
            </div>
            <span className="text-2xs text-muted">{article.date}</span>
          </motion.div>

          <motion.h1
            className="text-[clamp(2rem,5vw,5.5rem)] font-light leading-[1.1] tracking-tight text-foreground max-w-4xl"
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
          >
            {article.title}
          </motion.h1>

          <motion.p
            className="mt-8 text-base text-muted leading-relaxed max-w-2xl"
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
          >
            {article.excerpt}
          </motion.p>
        </div>
      </section>

      {/* Article body */}
      <section className="px-6 md:px-10 py-24 border-b border-border">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col divide-y divide-border">
            {article.body.map((section, i) => (
              <motion.div
                key={section.n}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="grid grid-cols-12 gap-6 py-12"
              >
                <span className="col-span-12 md:col-span-1 text-2xs tabular-nums text-muted pt-1">
                  {section.n}
                </span>
                <div className="col-span-12 md:col-span-3">
                  <h2 className="text-base font-light text-foreground leading-snug">
                    {section.heading}
                  </h2>
                </div>
                <p className="col-span-12 md:col-span-6 md:col-start-6 text-sm text-muted leading-relaxed">
                  {section.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Author block */}
      <section className="px-6 md:px-10 py-16 border-b border-border">
        <div className="max-w-site mx-auto flex items-center gap-6">
          <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center">
            <span className="text-2xs text-muted">AP</span>
          </div>
          <div>
            <p className="text-xs text-foreground tracking-wide"><span className="text-crimson">Aditya Prasanna</span></p>
            <p className="text-xs text-muted tracking-wide"><span className="text-crimson">A—P</span> · {article.date}</p>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="px-6 md:px-10 py-20 border-b border-border">
        <div className="max-w-site mx-auto">
          <motion.p
            className="text-2xs tracking-widest uppercase text-muted mb-10"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            More Insights
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {articles
              .filter((a) => a.slug !== slug)
              .slice(0, 2)
              .map((a, i) => (
                <motion.div
                  key={a.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link
                    href={`/insights/${a.slug}`}
                    className="group flex flex-col justify-between gap-8 bg-background p-8 md:p-10 h-full hover:bg-[#111] transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-2xs tabular-nums text-muted">{a.number}</span>
                      <span className="text-2xs tracking-widest uppercase text-muted">{a.category}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-light leading-snug text-foreground group-hover:text-white transition-colors duration-200">
                      {colorize(a.title)}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted">{a.date}</span>
                      <span className="text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200">Read →</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="border-t border-border">
        <div className="grid grid-cols-2 divide-x divide-border">
          <Link
            href={`/insights/${prev.slug}`}
            className="group flex flex-col gap-2 px-6 md:px-10 py-10 hover:bg-[#111] transition-colors duration-200"
          >
            <span className="text-2xs tracking-widest uppercase text-muted">← Previous</span>
            <span className="text-base md:text-xl font-light text-foreground group-hover:text-white transition-colors duration-200">
              {colorize(prev.title)}
            </span>
          </Link>
          <Link
            href={`/insights/${next.slug}`}
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
