import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CtaFinal from '@/components/sections/CtaFinal'
import Testimonials from '@/components/sections/Testimonials'
import { StaggerReveal, StaggerItem } from '@/components/sections/StaggerReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Tunnels de vente, automatisations et systèmes conçus pour offrir une expérience moderne, claire et performante — avec des résultats à la clé.',
}

const projects = [
  {
    id: 'F1',
    tag: 'Funnel webinar',
    title: 'Écosystème Webinar Premium',
    result: '+47% de conversion',
    detail: 'WebinarJam + Meta Ads',
    bg: 'linear-gradient(135deg, #2563EB 0%, #0D3B99 100%)',
  },
  {
    id: 'F2',
    tag: 'Funnel coaching',
    title: 'Tunnel de vente coaching 1-to-1',
    result: '15h/sem économisées',
    detail: 'Automatisation complète',
    bg: 'linear-gradient(135deg, #1B2A4E 0%, #2563EB 100%)',
  },
  {
    id: 'F3',
    tag: 'Sales page',
    title: 'Design Shift Ebook',
    result: 'Intégration paiement',
    detail: 'Sales page + Chariow',
    bg: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
  },
  {
    id: 'F4',
    tag: 'Plateforme membres',
    title: 'Digital Shift Membres',
    result: 'Accès sécurisé',
    detail: 'OAuth · Espace privé',
    bg: 'linear-gradient(135deg, #0F172A 0%, #1B2A4E 100%)',
  },
  {
    id: 'F5',
    tag: 'Automatisation',
    title: 'Système de relances email',
    result: 'Séquences automatiques',
    detail: 'ActiveCampaign',
    bg: 'linear-gradient(135deg, #60A5FA 0%, #2563EB 100%)',
  },
  {
    id: 'F6',
    tag: 'Funnel formation',
    title: 'Lancement formation en ligne',
    result: 'Conversion optimisée',
    detail: 'Capture + email + paiement',
    bg: 'linear-gradient(135deg, #1D4ED8 0%, #0D3B99 100%)',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        heading="Quelques <em>funnels</em> & résultats clients."
        lead="Tunnels de vente, automatisations et systèmes conçus pour offrir une expérience moderne, claire et performante — avec des résultats à la clé."
      />

      <section className="bg-[#F8F6F1] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <StaggerItem key={p.id}>
                <div className="group rounded-[var(--radius-lg)] bg-white border border-[var(--line)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-12px_rgba(37,99,235,0.18)] hover:border-blue-100">
                  {/* Thumbnail */}
                  <div
                    className="aspect-[4/3] flex items-center justify-center relative overflow-hidden"
                    style={{ background: p.bg }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2), transparent 50%)',
                      }}
                    />
                    <span
                      className="relative z-10 text-white/80 italic"
                      style={{
                        fontFamily: 'Fraunces, Georgia, serif',
                        fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                        fontWeight: 300,
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {p.id}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <p
                      className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-2"
                      style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                    >
                      {p.tag}
                    </p>
                    <h3
                      className="text-ink mb-2"
                      style={{
                        fontFamily: 'Fraunces, Georgia, serif',
                        fontSize: '1.1rem',
                        fontWeight: 300,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm text-ink-mute" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                      <strong className="text-blue-600 font-medium">{p.result}</strong>
                      {' · '}
                      {p.detail}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <Testimonials />

      <CtaFinal
        eyebrow="Et si votre projet rejoignait cette liste ?"
        heading="Chaque résultat commence par une <em>conversation</em>."
        body="Parlons de votre projet. 30 minutes suffisent pour cerner vos besoins et définir la meilleure approche."
        primaryLabel="Démarrer mon projet"
        primaryHref="/contact"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  )
}
