'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    num: '01',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: 'Approche stratégique',
    desc: 'Chaque projet est pensé selon votre activité, votre cible et le résultat que vous souhaitez atteindre.',
  },
  {
    num: '02',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Solutions modernes',
    desc: "J'utilise des outils digitaux et IA actuels pour créer des systèmes plus intelligents, plus rapides et plus performants.",
  },
  {
    num: '03',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Design premium',
    desc: "Je conçois des interfaces modernes, épurées et professionnelles, adaptées à l'image que vous souhaitez transmettre.",
  },
  {
    num: '04',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Accompagnement personnalisé',
    desc: "Je m'adapte à votre niveau, à vos besoins et à votre rythme pour construire une solution vraiment utile.",
  },
]

const cardVariants = {
  active: {
    backgroundColor: '#1B2A4E',
    borderColor: '#2563EB',
    scale: 1.02,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
  inactive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E0D6',
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
}

export default function BucketFeatures() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-2 gap-3">
      {features.map((f, i) => {
        const isActive = active === i
        return (
          <motion.div
            key={f.num}
            variants={cardVariants}
            animate={isActive ? 'active' : 'inactive'}
            onClick={() => setActive(i)}
            className="rounded-[var(--radius)] border p-5 cursor-pointer select-none"
            style={{ willChange: 'background-color, border-color, transform' }}
          >
            {/* Icon */}
            <motion.div
              animate={{ color: isActive ? '#60A5FA' : '#94A3B8' }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {f.icon}
            </motion.div>

            {/* Number */}
            <motion.span
              animate={{ color: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(15,23,42,0.15)' }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="block mt-4 mb-1 text-xs"
              style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 300, fontStyle: 'italic' }}
            >
              {f.num}
            </motion.span>

            {/* Title */}
            <motion.h4
              animate={{ color: isActive ? '#F8F6F1' : '#0F172A' }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="mb-2 text-sm font-medium leading-snug"
              style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
            >
              {f.title}
            </motion.h4>

            {/* Description */}
            <motion.p
              animate={{ color: isActive ? 'rgba(248,246,241,0.55)' : '#64748B' }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="text-xs leading-relaxed"
              style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
            >
              {f.desc}
            </motion.p>
          </motion.div>
        )
      })}
    </div>
  )
}
