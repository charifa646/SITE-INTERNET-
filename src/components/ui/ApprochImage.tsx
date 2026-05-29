'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ApprochImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="relative w-full overflow-hidden rounded-[var(--radius-lg)]"
      style={{
        willChange: 'transform, opacity',
        boxShadow: '0 24px 50px -20px rgba(27,42,78,0.35)',
      }}
    >
      <Image
        src="/images/charifa-approche.jpg"
        alt="Charifa Ouedraogo — approche digitale"
        width={880}
        height={1100}
        className="w-full h-auto object-cover aspect-[4/5]"
        priority
      />
      {/* Inner refraction border */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[var(--radius-lg)] pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)' }}
      />
    </motion.div>
  )
}
