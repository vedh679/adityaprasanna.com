'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Philosophy() {
  return (
    <section className="border-t border-[#1a1a1a] px-6 md:px-10 py-24 md:py-36">
      <div className="max-w-site mx-auto">

        {/* Label */}
        <motion.p
          className="text-2xs tracking-widest uppercase text-muted mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          Philosophy
        </motion.p>

        {/* Statement */}
        <motion.p
          className="text-[clamp(1.5rem,3.5vw,3rem)] font-light leading-[1.3] tracking-tight text-foreground max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          Design shapes the world not as decoration,{' '}
          <span className="text-muted">
            but as a force. Every decision — form, type, space — carries
            consequence. Settling is easy. The work here isn't built for that.
          </span>
        </motion.p>

      </div>
    </section>
  )
}
