'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import GridBackground from '@/components/ui/GridBackground'

const testimonials = [
  { src: '/testimonials/testi-01.jpeg', alt: 'Témoignage client 1' },
  { src: '/testimonials/testi-02.jpeg', alt: 'Témoignage client 2' },
  { src: '/testimonials/testi-03.jpeg', alt: 'Témoignage client 3' },
  { src: '/testimonials/testi-04.jpeg', alt: 'Témoignage client 4' },
  { src: '/testimonials/testi-05.jpeg', alt: 'Témoignage client 5' },
  { src: '/testimonials/testi-06.jpeg', alt: 'Témoignage client 6' },
]

// Deterministic per-card config: delay (s), slight rotation (deg), float duration (s)
const CARD_CONFIG = [
  { delay: 0,   rotate: -1.5, duration: 4.2 },
  { delay: 0.8, rotate:  1.2, duration: 4.8 },
  { delay: 1.6, rotate: -0.8, duration: 3.9 },
  { delay: 2.4, rotate:  1.5, duration: 4.5 },
  { delay: 3.2, rotate: -1.2, duration: 4.1 },
  { delay: 4.0, rotate:  0.8, duration: 4.6 },
]

export default function Testimonials() {
  return (
    <section className="relative bg-[#0A0F1E] py-24 px-6 overflow-hidden">
      <GridBackground variant="dark" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <p
          className="eyebrow mb-4"
          style={{ '--blue-600': '#60A5FA' } as React.CSSProperties}
        >
          Témoignages
        </p>

        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-white">
            Ils m&apos;ont fait confiance.
          </h2>
          <p
            className="max-w-sm"
            style={{
              fontFamily: 'Satoshi, system-ui, sans-serif',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            Des entrepreneurs, formateurs et entreprises accompagnés dans leur transformation digitale.
          </p>
        </div>

        {/* Floating image cards — 3 col desktop · 2 col tablet · 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => {
            const cfg = CARD_CONFIG[i]
            return (
              <motion.div
                key={t.src}
                initial={{ rotate: cfg.rotate }}
                animate={{ y: [0, -14, 0] }}
                whileHover={{ y: -20, rotate: 0, scale: 1.02 }}
                transition={{
                  y: {
                    duration: cfg.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: cfg.delay,
                  },
                  rotate: { type: 'spring', stiffness: 100, damping: 20 },
                  scale: { type: 'spring', stiffness: 100, damping: 20 },
                }}
                className="cursor-pointer"
              >
                <div
                  className="overflow-hidden rounded-[var(--radius-lg)]"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(96,165,250,0.12)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow:
                      '0 8px 32px rgba(27,42,78,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
                  }}
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto block"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
