'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-10 pt-32 pb-24 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto">
          <motion.div
            className="flex items-center gap-3 mb-10"
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
          >
            {/* Availability dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-2xs tracking-widest uppercase text-muted">
              Available for Projects — from late May '26
            </span>
          </motion.div>

          <motion.h1
            className="text-[clamp(2.2rem,6vw,6rem)] font-light leading-[1.05] tracking-tight text-foreground max-w-3xl"
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
          >
            Start your web design & development project.
          </motion.h1>

          <motion.p
            className="mt-8 text-base text-muted leading-relaxed max-w-lg"
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
          >
            Send your brief by email with as much detail as possible, and I'll
            reply personally.
          </motion.p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="px-6 md:px-10 py-20 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">

          <motion.a
            href="mailto:work@raviklaassens.com"
            className="group bg-[#0a0a0a] p-10 md:p-14 flex flex-col justify-between gap-16 hover:bg-[#111] transition-colors duration-300"
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
          >
            <span className="text-2xs tracking-widest uppercase text-muted">Email</span>
            <div>
              <p className="text-2xl md:text-3xl font-light text-foreground group-hover:text-white transition-colors duration-200 break-all">
                work@raviklaassens.com
              </p>
              <p className="text-xs text-muted mt-3 tracking-wide">
                Preferred for new projects & briefs →
              </p>
            </div>
          </motion.a>

          <motion.a
            href="tel:+31630951453"
            className="group bg-[#0a0a0a] p-10 md:p-14 flex flex-col justify-between gap-16 hover:bg-[#111] transition-colors duration-300"
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
          >
            <span className="text-2xs tracking-widest uppercase text-muted">Phone</span>
            <div>
              <p className="text-2xl md:text-3xl font-light text-foreground group-hover:text-white transition-colors duration-200">
                +31 6 30 951 453
              </p>
              <p className="text-xs text-muted mt-3 tracking-wide">
                For existing clients & quick questions →
              </p>
            </div>
          </motion.a>

        </div>
      </section>

      {/* Positioning / ideal client filter */}
      <section className="px-6 md:px-10 py-20 border-b border-[#1a1a1a]">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.p
            className="text-2xs tracking-widest uppercase text-muted md:col-span-2 pt-1"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            Good to know
          </motion.p>
          <div className="md:col-span-7 flex flex-col gap-5">
            {[
              {
                label: 'Who this is for',
                text: 'Founders, brands, and agencies seeking intentional design work where strategy and aesthetics combine. Clients who value craft, move with purpose, and understand that great work takes time.',
              },
              {
                label: 'Who this isn\'t for',
                text: 'Rushed projects, high-volume work, or template-based solutions. If speed is the priority over quality, this isn\'t the right fit.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="py-6 border-t border-[#1a1a1a] grid grid-cols-1 md:grid-cols-5 gap-4"
              >
                <p className="text-xs tracking-widest uppercase text-muted md:col-span-2">{item.label}</p>
                <p className="text-sm text-muted leading-relaxed md:col-span-3">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Socials */}
      <section className="px-6 md:px-10 py-16">
        <div className="max-w-site mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <motion.p
            className="text-sm text-muted font-light"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            Also reachable on social.
          </motion.p>
          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a
              href="https://www.instagram.com/raviklaassens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200 border-b border-transparent hover:border-foreground pb-px"
            >
              Instagram →
            </a>
            <a
              href="https://www.linkedin.com/in/raviklaassens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-200 border-b border-transparent hover:border-foreground pb-px"
            >
              LinkedIn →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
