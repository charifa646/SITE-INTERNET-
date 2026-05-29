'use client'

import { useState } from 'react'
import Image from 'next/image'

type SpotlightImageProps = {
  src: string
  alt: string
  /** Petit index typographique en bas à droite (ex. "01"). Masqué si absent. */
  index?: string
  /** Classe d'aspect-ratio Tailwind (défaut 4/5 portrait). */
  aspect?: string
  priority?: boolean
}

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function SpotlightImage({
  src,
  alt,
  index,
  aspect = 'aspect-[4/5]',
  priority = false,
}: SpotlightImageProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateX(4px) translateY(-4px)' : 'translateX(0) translateY(0)',
        transition: 'transform 700ms',
        transitionTimingFunction: EASE,
      }}
    >
      {/* Frame outline */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 md:-inset-4 border rounded-[var(--radius-lg)] transition-all duration-700"
        style={{
          borderColor: isHovered ? 'rgba(15,23,42,0.15)' : 'transparent',
          transform: isHovered ? 'scale(1.01)' : 'scale(1)',
          transitionTimingFunction: EASE,
        }}
      />

      {/* Image container */}
      <div className={`relative w-full overflow-hidden rounded-[var(--radius-lg)] ${aspect}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 90vw, 40vw"
          className="object-cover transition-transform duration-1000"
          style={{
            transform: isHovered ? 'scale(1.03)' : 'scale(1)',
            transitionTimingFunction: EASE,
          }}
        />

        {/* Hover gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent transition-opacity duration-700"
          style={{ opacity: isHovered ? 1 : 0, transitionTimingFunction: EASE }}
        />

        {/* Corner accents */}
        <div className="absolute left-3 top-3 h-6 w-px bg-white/80 transition-all duration-500" style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? 'scaleY(1)' : 'scaleY(0)', transformOrigin: 'top', transitionTimingFunction: EASE, transitionDelay: '50ms' }} />
        <div className="absolute left-3 top-3 h-px w-6 bg-white/80 transition-all duration-500" style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transitionTimingFunction: EASE, transitionDelay: '100ms' }} />
        <div className="absolute bottom-3 right-3 h-6 w-px bg-white/80 transition-all duration-500" style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? 'scaleY(1)' : 'scaleY(0)', transformOrigin: 'bottom', transitionTimingFunction: EASE, transitionDelay: '150ms' }} />
        <div className="absolute bottom-3 right-3 h-px w-6 bg-white/80 transition-all duration-500" style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'right', transitionTimingFunction: EASE, transitionDelay: '200ms' }} />
      </div>

      {/* Index number */}
      {index && (
        <span
          className="absolute -bottom-7 right-0 font-mono text-xs text-ink-mute transition-all duration-700 md:text-sm"
          style={{
            opacity: isHovered ? 1 : 0.4,
            transform: isHovered ? 'translateY(12px)' : 'translateY(0)',
            transitionTimingFunction: EASE,
          }}
        >
          {index}
        </span>
      )}
    </div>
  )
}
