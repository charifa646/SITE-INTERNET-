import type { Metadata } from 'next'
import CtaFinal from '@/components/sections/CtaFinal'
import GridBackground from '@/components/ui/GridBackground'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG, whatsappLink } from '@/config/links'
import { ScrollReveal, ScrollRevealList, ScrollRevealItem } from '@/components/ui/ScrollReveal'
import MagneticButton from '@/components/ui/MagneticButton'

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
      {/* Split hero */}
      <section
        className="bg-[#0A0F1E] px-6 overflow-hidden"
        style={{ paddingTop: 'calc(var(--nav-h) + 3rem)', paddingBottom: '4rem' }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — image */}
          <div className="order-2 lg:order-1">
            <ScrollReveal variant="fadeLeft">
              <div className="relative h-[460px] rounded-[var(--radius-xl)] overflow-hidden">
                <Image
                  src="/images/pourquoi-im.jpg"
                  alt="Funnels & Automatisation"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT — text */}
          <div className="order-1 lg:order-2">
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <div className="flex flex-col gap-6">
                <span
                  className="inline-flex self-start items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  ★ Service phare
                </span>
                <h1
                  style={{
                    fontFamily: 'Fraunces, Georgia, serif',
                    fontWeight: 300,
                    fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1,
                  }}
                  className="text-white"
                >
                  Funnels &amp;{' '}
                  <em
                    style={{
                      color: 'transparent',
                      background: 'linear-gradient(135deg, #93C5FD 0%, #3B82F6 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      fontStyle: 'italic',
                    }}
                  >
                    Automatisation
                  </em>
                  .
                </h1>
                <p
                  className="text-white/65 leading-relaxed"
                  style={{
                    fontFamily: 'Satoshi, system-ui, sans-serif',
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                    maxWidth: '48ch',
                  }}
                >
                  Mon expertise principale. Je construis des systèmes de vente automatisés qui convertissent, fidélisent et génèrent des revenus — sans que vous ayez à tout gérer manuellement.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <MagneticButton
                    href="/contact"
                    as="a"
                    className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-blue-600 px-7 py-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors active:scale-[0.98]"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    Réserver un appel
                  </MagneticButton>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-4 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    Voir des réalisations
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0F1E] py-24 px-6">
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
                <div className="flex flex-col gap-3">
                  <a
                    href={SITE_CONFIG.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center rounded-[var(--radius)] bg-blue-600 px-6 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    Réserver un appel
                  </a>
                  <a
                    href={whatsappLink('Funnels & Automatisation')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-[var(--radius)] border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.16c-.25.69-1.43 1.32-1.97 1.4-.5.08-1.14.11-1.84-.12-.42-.13-.97-.31-1.67-.61-2.94-1.27-4.86-4.23-5.01-4.43-.15-.2-1.2-1.59-1.2-3.03 0-1.44.76-2.15 1.03-2.44.27-.29.58-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.59.84 2.03.91 2.18.07.15.12.32.02.52-.1.2-.15.32-.29.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.2-.29.39-.24.66-.15.27.1 1.71.81 2 .96.29.15.49.22.56.34.07.12.07.71-.18 1.4z" />
                    </svg>
                    Écrire sur WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main body */}
          <div className="flex flex-col gap-8">
            <ScrollReveal variant="fadeUp" delay={0}>
              <p className="eyebrow">Ce que vous obtenez</p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.07}>
              <h2 className="text-white">
                Un <em style={{ color: '#60A5FA' }}>système</em> qui vend à votre place.
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.12}>
              <p className="text-white/65 leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif', maxWidth: '58ch' }}>
                Imaginez un système qui attire vos prospects idéaux, leur présente votre offre de façon convaincante, gère les paiements et assure le suivi — le tout automatiquement.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.16}>
              <p className="text-white/65 leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif', maxWidth: '58ch' }}>
                C&apos;est exactement ce que je construis pour vous. Chaque funnel est pensé de A à Z, optimisé pour convertir et configuré pour durer.
              </p>
            </ScrollReveal>

            {/* Checklist */}
            <ScrollRevealList className="flex flex-col gap-4">
              {checklistItems.map((item) => (
                <ScrollRevealItem key={item} className="flex items-start gap-3 py-4 border-t border-white/10">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-blue-400">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" />
                    </svg>
                  </div>
                  <span className="text-white/65 text-sm" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>{item}</span>
                </ScrollRevealItem>
              ))}
            </ScrollRevealList>

            <div className="pt-4">
              <MagneticButton
                href="/contact"
                as="a"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-navy px-7 py-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors active:scale-[0.98]"
                style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
              >
                Démarrer mon funnel
              </MagneticButton>
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
