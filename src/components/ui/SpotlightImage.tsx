'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type SpotlightImageProps = {
  src: string
  alt: string
  index?: string
  aspect?: string
  priority?: boolean
  /** Couleur du fond pour le dégradé de fondu (défaut : crème #F8F6F1) */
  bgColor?: string
}

export default function SpotlightImage({
  src,
  alt,
  index,
  aspect = 'aspect-[4/5]',
  priority = false,
  bgColor = '#F8F6F1',
}: SpotlightImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="relative w-full"
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Image container */}
      <div
        className={`relative w-full overflow-hidden rounded-[var(--radius-lg)] ${aspect}`}
        style={{ boxShadow: '0 24px 50px -20px rgba(27,42,78,0.35)' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 90vw, 40vw"
          className="object-cover"
        />

        {/* Gradient fondu vers le fond de section */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
          style={{ background: `linear-gradient(to top, ${bgColor}, transparent)` }}
        />

        {/* Inset shimmer */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[var(--radius-lg)] pointer-events-none"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)' }}
        />
      </div>

      {/* Index typographique */}
      {index && (
        <span
          className="absolute -bottom-7 right-0 font-mono text-xs text-ink-mute md:text-sm"
          style={{ opacity: 0.4 }}
        >
          {index}
        </span>
      )}
    </motion.div>
  )
}
