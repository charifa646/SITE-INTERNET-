'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  ContainerScroll,
  CardsContainer,
  CardTransformed,
} from '@/components/ui/animated-cards-stack'
import GridBackground from '@/components/ui/GridBackground'
import ArrowRightIcon from '@/components/ui/ArrowRightIcon'
import { cn } from '@/lib/utils'

type Service = {
  num: string
  title: string
  desc: string
  tag: string
  href: string
  featured: boolean
  icon: React.ReactNode
}

// Textes EXACTS de COPYWRITING.md (section « Services (Bento) »). Ne pas reformuler.
const services: Service[] = [
  {
    num: '01',
    title: 'Funnels & Automatisation',
    desc: 'Création de tunnels de vente performants, systèmes de conversion et automatisations marketing pour vendre votre offre de manière plus fluide et plus efficace. Conçu pour coachs, formateurs et entrepreneurs qui veulent vendre de façon automatisée.',
    tag: 'Pour coachs & formateurs en ligne',
    href: '/services/funnels',
    featured: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3h18l-7 9v6l-4 2v-8L3 3z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Intelligence Artificielle',
    desc: 'Accompagnement à l\'intégration de l\'IA pour automatiser des tâches et améliorer votre productivité.',
    tag: 'Entrepreneurs & entreprises',
    href: '/services/ia',
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a4 4 0 00-4 4v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2h-2V6a4 4 0 00-4-4z" />
        <circle cx="12" cy="15" r="2" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Création de Sites Internet',
    desc: 'Sites vitrines modernes et landing pages premium pour renforcer votre image en ligne et présenter vos services avec clarté.',
    tag: 'Sites premium',
    href: '/services/sites',
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Formation & Consulting',
    desc: 'Accompagnement personnalisé en présentiel pour aider entrepreneurs et équipes à mieux comprendre l\'IA et la communication digitale sur les réseaux.',
    tag: 'En présentiel',
    href: '/services/formation',
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
]

function cardClass(featured: boolean, size: string) {
  return cn(
    'rounded-[var(--radius-lg)] overflow-hidden relative flex flex-col p-7 sm:p-8',
    size,
    featured ? 'text-white' : 'bg-white border border-[var(--line)]'
  )
}

function CardInner({ s }: { s: Service }) {
  return (
    <div className="relative z-10 flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <span
          className="italic"
          style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontSize: '2.5rem',
            fontWeight: 300,
            lineHeight: 1,
            color: s.featured ? 'rgba(255,255,255,0.2)' : 'rgba(15,23,42,0.15)',
          }}
        >
          {s.num}
        </span>
        {s.featured ? (
          <span
            className="flex-shrink-0 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs text-blue-300"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            ★ Service phare
          </span>
        ) : (
          <span
            className="flex-shrink-0 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs text-blue-600"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            {s.tag}
          </span>
        )}
      </div>

      <div
        className="mt-6 mb-4"
        style={{ color: s.featured ? 'rgba(255,255,255,0.6)' : 'var(--navy)' }}
      >
        {s.icon}
      </div>

      <h3
        className={s.featured ? 'text-white' : 'text-ink'}
        style={{ fontSize: '1.35rem' }}
      >
        {s.title}
      </h3>

      <p
        className={cn(
          'mt-3 flex-1 text-sm leading-relaxed',
          s.featured ? 'text-white/55' : 'text-ink-mute'
        )}
        style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
      >
        {s.desc}
      </p>

      <div className="mt-6">
        <Link
          href={s.href}
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors',
            s.featured
              ? 'bg-blue-400/10 text-blue-300 hover:bg-blue-400/20'
              : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
          )}
          style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
        >
          En savoir plus
          <ArrowRightIcon size={14} />
        </Link>
      </div>
    </div>
  )
}

export default function ServicesStack() {
  return (
    <section className="relative bg-[#F2EFE8] overflow-hidden">
      <GridBackground variant="light" />

      {/* Section head */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24">
        <p className="eyebrow mb-4">Services</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-ink">
            Des solutions digitales pensées pour faire <em>évoluer</em> votre activité.
          </h2>
          <p className="text-ink-mute max-w-sm" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
            Chaque service est conçu pour répondre à un besoin concret : mieux vendre, gagner du temps, professionnaliser votre image et intégrer des outils modernes.
          </p>
        </div>
      </div>

      {/* Pile animée au scroll — active sur mobile ET desktop, tailles adaptées */}
      <div className="relative z-10 block">
        <ContainerScroll className="h-[280vh] sm:h-[300vh]">
          <div className="sticky top-0 flex h-svh w-full items-center justify-center px-6">
            <CardsContainer className="mx-auto h-[440px] w-full max-w-[360px] sm:h-[460px] sm:max-w-[440px]">
              {services.map((s, i) => (
                <CardTransformed
                  key={s.href}
                  arrayLength={services.length}
                  index={i + 2}
                  className={cardClass(s.featured, 'size-full')}
                  style={s.featured ? { background: '#0A0F1E' } : undefined}
                  role="article"
                  aria-label={s.title}
                >
                  {s.featured && <GridBackground variant="dark" />}
                  <CardInner s={s} />
                </CardTransformed>
              ))}
            </CardsContainer>
          </div>
        </ContainerScroll>
      </div>
    </section>
  )
}
