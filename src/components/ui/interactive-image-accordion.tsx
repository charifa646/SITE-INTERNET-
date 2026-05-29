'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Item = {
  id: number
  label: string
  src: string
}

// Labels = noms des livrables (COMPONENTS.md §5). Images = vrais funnels clients.
const ITEMS: Item[] = [
  { id: 1, label: 'Site vitrine',     src: '/funnel-hero/capture-code.png' },
  { id: 2, label: 'Landing Page',     src: '/funnel-hero/page-code-1.jpg'  },
  { id: 3, label: 'Page de Capture',  src: '/funnel-hero/page-code-2.jpg'  },
  { id: 4, label: 'Page de Vente',    src: '/funnel-hero/page-code-3.jpg'  },
]

interface AccordionItemProps {
  item: Item
  isActive: boolean
  onActivate: () => void
}

function AccordionItem({ item, isActive, onActivate }: AccordionItemProps) {
  return (
    <div
      className={cn(
        'relative rounded-[var(--radius-lg)] overflow-hidden cursor-pointer',
        'transition-all duration-700 ease-in-out h-full',
        isActive ? 'flex-1' : 'w-[52px] shrink-0'
      )}
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
        className="object-cover"
        sizes="(max-width: 1024px) 0px, 380px"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A0F1E]/50 transition-opacity duration-700" />

      {/* Inset shimmer on active */}
      {isActive && (
        <div
          className="absolute inset-0 rounded-[var(--radius-lg)] pointer-events-none"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.10)' }}
        />
      )}

      {/* Label — horizontal on active, vertical on inactive */}
      <span
        className={cn(
          'absolute text-white text-xs font-medium whitespace-nowrap transition-all duration-500',
          isActive
            ? 'bottom-5 left-5 rotate-0 opacity-100 tracking-widest uppercase'
            : 'bottom-24 left-1/2 -translate-x-1/2 rotate-90 opacity-55 tracking-wider uppercase'
        )}
        style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
      >
        {item.label}
      </span>

      {/* Active indicator dot */}
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
      className="relative bg-[#F8F6F1] overflow-hidden flex items-center"
      style={{
        minHeight: '100dvh',
        paddingTop: 'calc(var(--nav-h) + 3rem)',
        paddingBottom: '4rem',
      }}
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          {/* ── Left — Copy (COPYWRITING.md : PAGE SERVICE — FUNNELS) ── */}
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

          {/* ── Right — Accordion ── */}
          <div className="flex-1 min-w-0">

            {/* Mobile : image active pleine largeur + sélecteurs numérotés */}
            <div className="lg:hidden flex flex-col gap-4">
              <div className="relative h-[280px] rounded-[var(--radius-lg)] overflow-hidden">
                <Image
                  src={ITEMS[activeIndex].src}
                  alt={ITEMS[activeIndex].label}
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="90vw"
                  priority
                />
                <div className="absolute inset-0 bg-[#0A0F1E]/45" />
                <span
                  className="absolute bottom-4 left-4 text-white text-xs font-medium tracking-widest uppercase"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  {ITEMS[activeIndex].label}
                </span>
              </div>

              {/* Selector tabs */}
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

            {/* Desktop : accordéon horizontal hover/click */}
            <div className="hidden lg:flex flex-row items-stretch gap-3 h-[480px]">
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
