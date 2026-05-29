import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import CtaFinal from '@/components/sections/CtaFinal'
import Testimonials from '@/components/sections/Testimonials'
import { StaggerReveal, StaggerItem } from '@/components/sections/StaggerReveal'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Tunnels de vente, automatisations et systèmes conçus pour offrir une expérience moderne, claire et performante — avec des résultats à la clé.',
}

// Textes EXACTS de COPYWRITING.md — section « Portfolio — Projets ».
// TODO Charifa : valider la correspondance image → projet.
const projects = [
  {
    id: 'F1',
    tag: 'Funnel webinar',
    title: 'Écosystème Webinar Premium',
    result: '+47% de conversion',
    detail: 'WebinarJam + Meta Ads',
    image: '/portfolio/projet-funnel-pdv-pdc.png',
  },
  {
    id: 'F2',
    tag: 'Funnel coaching',
    title: 'Tunnel de vente coaching 1-to-1',
    result: '15h/sem économisées',
    detail: 'Automatisation complète',
    image: '/portfolio/projet-funnel-landingpage.png',
  },
  {
    id: 'F3',
    tag: 'Sales page',
    title: 'Design Shift Ebook',
    result: 'Intégration paiement',
    detail: 'Sales page + Chariow',
    image: '/portfolio/projet-funnel-pagedecapture.png',
  },
  {
    id: 'F4',
    tag: 'Plateforme membres',
    title: 'Digital Shift Membres',
    result: 'Accès sécurisé',
    detail: 'OAuth · Espace privé',
    image: '/portfolio/projet-funnel-site.png',
  },
  {
    id: 'F5',
    tag: 'Automatisation',
    title: 'Système de relances email',
    result: 'Séquences automatiques',
    detail: 'ActiveCampaign',
    image: '/portfolio/projet-resultatfunnel-01.jpeg',
  },
  {
    id: 'F6',
    tag: 'Funnel formation',
    title: 'Lancement formation en ligne',
    result: '',
    detail: 'Page de capture + email + paiement',
    image: '/portfolio/projet-funnel-portfolio.jpeg',
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
                  {/* Thumbnail — real mockup image */}
                  <div className="aspect-[16/10] relative overflow-hidden bg-[#F2EFE8]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    />
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
                    <p
                      className="text-sm text-ink-mute"
                      style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                    >
                      {p.result && (
                        <>
                          <strong className="text-blue-600 font-medium">{p.result}</strong>
                          {' · '}
                        </>
                      )}
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
        heading="Et si votre projet rejoignait cette liste ?"
        body="Chaque projet commence par une conversation. Parlons du vôtre."
        primaryLabel="Démarrer mon projet"
        primaryHref="/contact"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  )
}
