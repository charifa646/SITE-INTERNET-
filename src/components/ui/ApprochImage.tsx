'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ApprochImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="mt-5 rounded-[var(--radius-lg)] overflow-hidden"
      style={{ willChange: 'transform, opacity' }}
    >
      <Image
        src="/images/charifa-approche.jpg"
        alt="Charifa Ouedraogo — approche digitale"
        width={320}
        height={420}
        className="w-full h-auto object-cover"
      />
    </motion.div>
  )
}
