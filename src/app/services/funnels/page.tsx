import type { Metadata } from 'next'
import CtaFinal from '@/components/sections/CtaFinal'
import GridBackground from '@/components/ui/GridBackground'
import Link from 'next/link'
import { SITE_CONFIG } from '@/config/links'
import { FunnelAccordionHero } from '@/components/ui/interactive-image-accordion'

export const metadata: Metadata = {
  title: 'Funnels & Automatisation',
  description:
    'Mon expertise principale. Je construis des systèmes de vente automatisés qui travaillent pour vous 24h/24.',
}

const checklistItems = [
  'Stratégie funnel sur-mesure',
  'Pages de capture & vente premium',
  'Séquences email automatisées',
  'Intégration paiement & CRM (Chariow, Stripe, Systeme.io)',
  'Webinar automatisé (option)',
  'Formation à la gestion',
]

export default function FunnelsPage() {
  return (
    <>
      <FunnelAccordionHero />

      <section className="bg-[#F8F6F1] py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          {/* Aside */}
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-[#1B2A4E] p-8 flex flex-col">
              <GridBackground variant="dark" />
              <div className="relative z-10 flex flex-col gap-8">
                <div className="text-white/40">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 3h18l-7 9v6l-4 2v-8L3 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-3" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>Pour qui ?</p>
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                    Coachs et formateurs en ligne, consultants, experts qui veulent automatiser leurs ventes et arrêter d&apos;échanger leur temps contre de l&apos;argent.
                  </p>
                </div>
                <a
                  href={SITE_CONFIG.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-[var(--radius)] bg-blue-600 px-6 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  Réserver un appel
                </a>
              </div>
            </div>
          </div>

          {/* Main body */}
          <div className="flex flex-col gap-8">
            <p className="eyebrow">Ce que vous obtenez</p>
            <h2 className="text-ink">
              Un <em>système</em> qui vend à votre place.
            </h2>
            <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Imaginez un système qui attire vos prospects idéaux, leur présente votre offre de façon convaincante, gère les paiements et assure le suivi — le tout automatiquement.
            </p>
            <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              C&apos;est exactement ce que je construis pour vous. Chaque funnel est pensé de A à Z, optimisé pour convertir et configuré pour durer.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-4">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-start gap-3 py-4 border-t border-[var(--line)]">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-blue-600">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" />
                    </svg>
                  </div>
                  <span className="text-ink-soft text-sm" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-navy px-7 py-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
              >
                Démarrer mon funnel
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaFinal
        eyebrow="Prêt à automatiser ?"
        heading="Un funnel qui <em>travaille</em> pendant que vous dormez."
        primaryLabel="Réserver un appel"
        secondaryLabel="Voir tous les services"
        secondaryHref="/services"
      />
    </>
  )
}
