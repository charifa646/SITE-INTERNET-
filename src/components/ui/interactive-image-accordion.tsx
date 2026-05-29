'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// Images = vrais livrables clients (ASSETS.md). Labels = COPYWRITING.md §Funnels.
const ITEMS = [
  { id: 1, label: 'Site vitrine',    src: '/funnel-hero/capture-code.png' },
  { id: 2, label: 'Landing Page',    src: '/funnel-hero/page-code-1.jpg'  },
  { id: 3, label: 'Page de Capture', src: '/funnel-hero/page-code-2.jpg'  },
  { id: 4, label: 'Page de Vente',   src: '/funnel-hero/page-code-3.jpg'  },
]

interface AccordionItemProps {
  item: (typeof ITEMS)[0]
  isActive: boolean
  onActivate: () => void
}

function AccordionItem({ item, isActive, onActivate }: AccordionItemProps) {
  return (
    <div
      className={cn(
        'relative rounded-[var(--radius-lg)] overflow-hidden cursor-pointer',
        'transition-all duration-700 ease-in-out shrink-0',
        isActive ? 'flex-1' : 'w-[60px]'
      )}
      style={{ height: '450px' }}
      onMouseEnter={onActivate}
      onClick={onActivate}
      role="button"
      aria-label={item.label}
      aria-pressed={isActive}
    >
      <Image
        src={item.src}
        alt={item.label}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 1024px) 0px, 380px"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A0F1E]/45 transition-opacity duration-700" />

      {/* Active inset border */}
      {isActive && (
        <div
          className="absolute inset-0 rounded-[var(--radius-lg)] pointer-events-none"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.10)' }}
        />
      )}

      {/* Label — horizontal si actif, vertical si inactif */}
      <span
        className={cn(
          'absolute text-white text-xs font-medium whitespace-nowrap transition-all duration-500 uppercase tracking-widest',
          isActive
            ? 'bottom-5 left-5 rotate-0 opacity-100'
            : 'bottom-24 left-1/2 -translate-x-1/2 rotate-90 opacity-55'
        )}
        style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
      >
        {item.label}
      </span>

      {isActive && (
        <div className="absolute bottom-5 right-5 w-1.5 h-1.5 rounded-full bg-blue-400" />
      )}
    </div>
  )
}

export function FunnelAccordionHero() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      className="relative bg-[#F8F6F1]"
      style={{
        paddingTop: 'calc(var(--nav-h) + 3rem)',
        paddingBottom: '4rem',
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          {/* ── Gauche — texte (COPYWRITING.md) ── */}
          <div className="flex flex-col gap-6 lg:w-[42%] shrink-0">

            {/* Badge ★ Service phare */}
            <span
              className="inline-flex self-start items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-1.5 text-xs text-ink-mute"
              style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
            >
              <span style={{ color: '#D97706' }}>★</span>
              Service phare
            </span>

            {/* H1 */}
            <h1
              className="text-ink"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontWeight: 300,
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
              }}
            >
              Funnels &amp;{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  color: 'transparent',
                  background: 'linear-gradient(135deg, #2563EB 0%, #0D3B99 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                Automatisation.
              </em>
            </h1>

            {/* Lead */}
            <p
              className="text-ink-soft leading-relaxed"
              style={{
                fontFamily: 'Satoshi, system-ui, sans-serif',
                fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
                maxWidth: '46ch',
              }}
            >
              Mon expertise principale. Je construis des systèmes de vente
              automatisés qui transforment vos visiteurs en clients pendant que
              vous dormez.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-blue-600 px-6 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
              >
                Démarrer mon projet
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[var(--line)] bg-white px-6 py-3.5 text-sm font-medium text-ink hover:border-blue-600/40 hover:text-blue-600 transition-colors"
                style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
              >
                Voir des réalisations
              </Link>
            </div>
          </div>

          {/* ── Droite — accordéon ── */}
          <div className="flex-1 min-w-0">

            {/* Mobile : image active + sélecteurs numérotés */}
            <div className="lg:hidden flex flex-col gap-4">
              <div className="relative h-[260px] rounded-[var(--radius-lg)] overflow-hidden">
                <Image
                  src={ITEMS[activeIndex].src}
                  alt={ITEMS[activeIndex].label}
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="90vw"
                  priority
                />
                <div className="absolute inset-0 bg-[#0A0F1E]/40" />
                <span
                  className="absolute bottom-4 left-4 text-white text-xs font-medium tracking-widest uppercase"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  {ITEMS[activeIndex].label}
                </span>
              </div>
              <div className="flex gap-2">
                {ITEMS.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      'flex-1 py-2 rounded-full text-xs font-medium transition-colors border',
                      i === activeIndex
                        ? 'bg-[#1B2A4E] text-white border-[#1B2A4E]'
                        : 'bg-white text-ink-mute border-[var(--line)] hover:border-blue-600/40'
                    )}
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                    aria-label={item.label}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop : accordéon horizontal hover */}
            <div className="hidden lg:flex flex-row items-stretch gap-3">
              {ITEMS.map((item, i) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={i === activeIndex}
                  onActivate={() => setActiveIndex(i)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
