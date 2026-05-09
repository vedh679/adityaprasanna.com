'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export default function Hero() {
  return (
    <section className="relative h-full flex flex-col justify-between px-6 md:px-10 pt-12 pb-6 overflow-hidden">

      {/* Top label row */}
      <motion.div
        className="flex items-center justify-between"
        custom={0.1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <span className="text-2xs tracking-widest uppercase text-muted">
          Design & Code
        </span>
        <span className="text-2xs tracking-widest uppercase text-muted">
          Est. 2020
        </span>
      </motion.div>

      {/* Main headline */}
      <div className="flex flex-col gap-0 mt-auto mb-auto py-6 max-w-site mx-auto w-full">
        <motion.h1
          className="text-[clamp(2.8rem,8vw,8rem)] font-light leading-[1.05] tracking-tight text-foreground"
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="text-crimson">Aditya Prasanna</span>.
        </motion.h1>
        <motion.h1
          className="text-[clamp(2.8rem,8vw,8rem)] font-light leading-[1.05] tracking-tight text-foreground"
          custom={0.35}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Design & Code
        </motion.h1>
        <motion.h1
          className="text-[clamp(2.8rem,8vw,8rem)] font-light leading-[1.05] tracking-tight text-muted"
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          for those who refuse
        </motion.h1>
        <motion.h1
          className="text-[clamp(2.8rem,8vw,8rem)] font-light leading-[1.05] tracking-tight text-muted"
          custom={0.65}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          to settle.
        </motion.h1>
      </div>

      {/* Bottom row */}
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
        custom={0.8}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <p className="text-xs text-muted tracking-wide max-w-xs leading-relaxed">
          Independent design and development practice.<br />
          Building digital presence for ambitious brands.
        </p>
        <span className="text-xs tracking-widest uppercase text-muted">
          Scroll to explore →
        </span>
      </motion.div>

      {/* Scroll indicator — horizontal */}
      <motion.div
        className="absolute right-10 top-1/2 -translate-y-1/2 flex items-center gap-2"
        custom={1.0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <motion.div
          className="h-px w-12 bg-crimson"
          animate={{ scaleX: [0, 1, 0], originX: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
