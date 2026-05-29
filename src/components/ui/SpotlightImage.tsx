'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type SpotlightImageProps = {
  src: string
  alt: string
  index?: string
  aspect?: string
  priority?: boolean
  /** Type d'animation d'entrée : 'zoom' (Accueil), 'fade' (À propos), 'slide' (legacy) */
  animation?: 'zoom' | 'fade' | 'slide'
}

// Variantes d'animation d'entrée (spring premium Digital Shift)
const variants = {
  zoom: { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 } },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  slide: { initial: { opacity: 0, x: -48 }, animate: { opacity: 1, x: 0 } },
}

// Masque qui fond les 4 bords de l'image dans le fond de section (~18%).
// Le centre reste 100% net ; seuls les bords s'estompent → illusion « incrustée ».
const edgeMask =
  'linear-gradient(to right, transparent 0%, #000 18%, #000 82%, transparent 100%), ' +
  'linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)'

export default function SpotlightImage({
  src,
  alt,
  index,
  aspect = 'aspect-[4/5]',
  priority = false,
  animation = 'zoom',
}: SpotlightImageProps) {
  const v = variants[animation]

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="relative w-full"
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Image container — sans cadre ni ombre, fondu sur les 4 bords */}
      <div className={`relative w-full ${aspect}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 90vw, 40vw"
          className="object-cover"
          style={{
            // Masque (standard + WebKit) : les bords se fondent dans le fond crème
            maskImage: edgeMask,
            WebkitMaskImage: edgeMask,
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
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
