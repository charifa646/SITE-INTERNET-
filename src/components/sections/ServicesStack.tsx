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
import { serviceIcon } from '@/components/sections/serviceIcons'
import { FALLBACK_SERVICES, type ServiceData } from '@/sanity/services'

type Service = ServiceData & {
  icon: React.ReactNode
}

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

export default function ServicesStack({ services: data }: { services?: ServiceData[] }) {
  const source = data && data.length > 0 ? data : FALLBACK_SERVICES
  const services: Service[] = source.map((s) => ({ ...s, icon: serviceIcon(s.slug) }))

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
