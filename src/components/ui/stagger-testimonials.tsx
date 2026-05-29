'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// Témoignages RÉELS transcrits des captures clientes (testi-01…06).
// Léger nettoyage orthographique/ponctuation, emojis retirés (politique anti-emoji).
// Attribution : prénom lisible (Pamela) sinon label neutre. Aucun nom inventé.
type Testimonial = {
  tempId: number
  quote: string
  by: string
  initial: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    tempId: 0,
    quote: 'Bonjour la grande guerrière ! Waouh, super boulot ! Je te félicite déjà pour avoir respecté le délai. Tu as fait preuve d’une grande personnalité.',
    by: 'Cliente accompagnée',
    initial: 'C',
  },
  {
    tempId: 1,
    quote: 'Génial, un gros merci ! T’es top.',
    by: 'Pamela',
    initial: 'P',
  },
  {
    tempId: 2,
    quote: 'Gratitude pour votre présence dans ma vie. Je vais vous envoyer mes copines !',
    by: 'Cliente accompagnée',
    initial: 'C',
  },
  {
    tempId: 3,
    quote: 'Vous êtes ma pépite. Merci !',
    by: 'Cliente accompagnée',
    initial: 'C',
  },
  {
    tempId: 4,
    quote: 'Oui, une m’a déjà demandé un appel ! J’ai partagé votre lien, j’ai dit que vous travaillez sur devis.',
    by: 'Cliente accompagnée',
    initial: 'C',
  },
  {
    tempId: 5,
    quote: 'Oui, t’as fait du super boulot vraiment.',
    by: 'Cliente accompagnée',
    initial: 'C',
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: Testimonial
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        'absolute left-1/2 top-1/2 cursor-pointer rounded-[var(--radius-lg)] p-7 sm:p-8 transition-all duration-500 ease-in-out',
        isCenter
          ? 'z-10 text-white border border-blue-400/20'
          : 'z-0 bg-white text-ink border border-[var(--line)] hover:border-blue-600/40'
      )}
      style={{
        width: cardSize,
        height: cardSize,
        background: isCenter
          ? 'linear-gradient(135deg, #1B2A4E 0%, #2563EB 100%)'
          : undefined,
        boxShadow: isCenter
          ? '0 24px 60px -18px rgba(37,99,235,0.55)'
          : '0 12px 30px -16px rgba(27,42,78,0.35)',
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -55 : position % 2 ? 12 : -12}px)
          rotate(${isCenter ? 0 : position % 2 ? 2 : -2}deg)
        `,
      }}
    >
      {/* Monogramme initiale */}
      <div
        className="mb-6 flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold"
        style={{
          fontFamily: 'Satoshi, system-ui, sans-serif',
          background: isCenter
            ? 'rgba(255,255,255,0.92)'
            : 'linear-gradient(135deg, #2563EB 0%, #0D3B99 100%)',
          color: isCenter ? '#1B2A4E' : '#FFFFFF',
        }}
        aria-hidden="true"
      >
        {testimonial.initial}
      </div>

      {/* Citation */}
      <h3
        className="italic"
        style={{
          fontFamily: 'Fraunces, Georgia, serif',
          fontWeight: 300,
          fontSize: 'clamp(1.05rem, 2.2vw, 1.4rem)',
          lineHeight: 1.4,
          letterSpacing: '-0.01em',
        }}
      >
        &laquo;&nbsp;{testimonial.quote}&nbsp;&raquo;
      </h3>

      {/* Auteur */}
      <p
        className={cn(
          'absolute bottom-7 left-7 right-7 sm:bottom-8 sm:left-8 sm:right-8 text-sm',
          isCenter ? 'text-white/70' : 'text-ink-mute'
        )}
        style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
      >
        — {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(340)
  const [list, setList] = useState<Testimonial[]>(TESTIMONIALS)
  const touchStartX = useRef<number | null>(null)

  const handleMove = (steps: number) => {
    const newList = [...list]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setList(newList)
  }

  // Swipe tactile : seuil 50px pour éviter les faux positifs
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) < 50) return
    handleMove(delta < 0 ? 1 : -1)
    touchStartX.current = null
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia('(min-width: 640px)')
      setCardSize(matches ? 360 : 280)
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <div className="relative w-full" style={{ height: 540 }}>
      {/* Zone de swipe + cartes */}
      <div
        className="absolute inset-0 overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        // Masque dégradé : fondu sur les bords gauche et droit (fond #0A0F1E)
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)',
        }}
      >
        {list.map((testimonial, index) => {
          const position =
            list.length % 2
              ? index - (list.length + 1) / 2
              : index - list.length / 2
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          )
        })}
      </div>

      {/* Navigation — en dehors du masque pour rester pleinement visible */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-3 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-full border transition-colors',
            'border-white/15 bg-white/5 text-white/80 backdrop-blur-sm',
            'hover:bg-blue-600 hover:border-blue-600 hover:text-white',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1E]'
          )}
          aria-label="Témoignage précédent"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-full border transition-colors',
            'border-white/15 bg-white/5 text-white/80 backdrop-blur-sm',
            'hover:bg-blue-600 hover:border-blue-600 hover:text-white',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1E]'
          )}
          aria-label="Témoignage suivant"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
