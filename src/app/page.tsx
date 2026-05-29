import type { Metadata } from 'next'
import HeroLamp from '@/components/sections/HeroLamp'
import CtaFinal from '@/components/sections/CtaFinal'
import GridBackground from '@/components/ui/GridBackground'
import PourquoiMoiTimeline from '@/components/ui/PourquoiMoiTimeline'
import ApprochImage from '@/components/ui/ApprochImage'
import SpotlightImage from '@/components/ui/SpotlightImage'
import ServicesStack from '@/components/sections/ServicesStack'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Charifa Ouedraogo · Digital Shift — Marketing, IA & Automatisation',
  description:
    'Automatisez votre business. Modernisez votre croissance. Consultante en funnels de vente, automatisation et intelligence artificielle.',
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroLamp />

      {/* 2. Credibility Bar */}
      <section className="relative bg-[#F2EFE8] border-t border-b border-[var(--line)] py-20 md:py-24 px-6 overflow-hidden">
        <GridBackground variant="light" />
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,440px)_1fr] gap-10 md:gap-16 items-center">
          {/* Left — image */}
          <ApprochImage />

          {/* Right — label + text */}
          <div className="flex flex-col gap-5">
            <span className="eyebrow">Approche</span>
            <p
              className="text-ink leading-relaxed"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
              }}
            >
              Des solutions digitales conçues pour vous aider à{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--blue-600)' }}>gagner du temps</em>, structurer votre activité et développer une présence en ligne plus performante.
            </p>
          </div>
        </div>
      </section>

      {/* 3. About Preview */}
      <section className="relative bg-[#F8F6F1] py-24 px-6 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Left — photo (Feature Spotlight) */}
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
            <SpotlightImage
              src="/images/charifa-photo-accueil.png"
              alt="Charifa Ouedraogo, consultante Marketing & IA"
              index="01"
              animation="zoom"
              priority
            />
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-6">
            <p className="eyebrow">À propos</p>
            <h2 className="text-ink">
              Une approche moderne du marketing, de l&apos;
              <em>automatisation</em> et de l&apos;IA.
            </h2>
            <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Je suis Charifa Ouedraogo, consultante marketing spécialisée en funnels de vente, automatisation business et intelligence artificielle.
            </p>
            <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              J&apos;aide les entrepreneurs, formateurs et entreprises à vendre plus efficacement, à automatiser leurs business et à intégrer les bons outils digitaux dans leur activité.
            </p>
            <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Mon travail consiste à transformer une activité dispersée en un système clair, structuré et plus rentable.
            </p>

            {/* Signature */}
            <div className="flex items-center gap-4 pt-4 border-t border-[var(--line)]">
              <div
                className="flex items-center justify-center rounded-[10px] text-sm font-semibold text-white"
                style={{
                  width: 44,
                  height: 44,
                  background: 'var(--navy)',
                  fontFamily: 'Fraunces, Georgia, serif',
                  flexShrink: 0,
                }}
              >
                CO
              </div>
              <div>
                <p
                  className="text-ink italic"
                  style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 300 }}
                >
                  Charifa Ouedraogo
                </p>
                <p className="text-xs text-ink-mute" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                  CEO · Digital Shift
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
              >
                En savoir plus
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 7h12M8 3l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services — pile animée au scroll */}
      <ServicesStack />

      {/* 5. Why Section */}
      <section className="relative bg-[#F8F6F1] py-24 px-6 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 lg:items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <p className="eyebrow">Pourquoi moi</p>
            <h2 className="text-ink">
              Une expertise orientée <em>performance</em> et innovation.
            </h2>
            <p className="text-ink-mute leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Mon approche ne se limite pas à créer des outils. Je vous aide à construire un système digital cohérent, efficace et adapté à vos objectifs.
            </p>
          </div>

          {/* Right — Radial Orbital Timeline */}
          <PourquoiMoiTimeline />
        </div>
      </section>

      {/* 6. CTA Final */}
      <CtaFinal
        heading="Donnez une nouvelle <em>dimension</em> à votre activité."
        body="Vous souhaitez automatiser votre business, améliorer votre présence digitale ou intégrer l'IA dans votre activité ? Contactez-moi pour échanger sur vos besoins."
        primaryLabel="Réserver un appel"
        primaryHref="/contact"
        secondaryLabel="Voir tous les services"
        secondaryHref="/services"
      />
    </>
  )
}
