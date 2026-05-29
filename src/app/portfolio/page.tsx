import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import CtaFinal from '@/components/sections/CtaFinal'
import Testimonials from '@/components/sections/Testimonials'
import { StaggerReveal, StaggerItem } from '@/components/sections/StaggerReveal'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import WistiaPlayer from '@/components/ui/WistiaPlayer'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Tunnels de vente, automatisations et systèmes conçus pour offrir une expérience moderne, claire et performante — avec des résultats à la clé.',
}

// Descriptions alignées sur le contenu RÉEL de chaque image (lecture des mockups).
// Chiffres des résultats (14 183 €, +133%, etc.) transcrits depuis les captures — pas inventés.
const projects = [
  {
    id: 'F1',
    tag: 'Funnel coaching',
    title: 'Funnel immersion coaching',
    result: '',
    detail: 'Systeme.io · Page de vente + capture',
    image: '/portfolio/projet-funnel-landingpage.png',
  },
  {
    id: 'F2',
    tag: 'Funnel formation',
    title: 'Plateforme formation Marketing Digital',
    result: '',
    detail: 'Systeme.io · Funnel complet',
    image: '/portfolio/projet-funnel-pagedecapture.png',
  },
  {
    id: 'F3',
    tag: 'Page de vente',
    title: '"Déclic pour ton site" — Templates clés en main',
    result: '',
    detail: 'Systeme.io · Capture + vente',
    image: '/portfolio/projet-funnel-pdv-pdc.png',
  },
  {
    id: 'F4',
    tag: 'Page portfolio',
    title: 'Page portfolio & services',
    result: '',
    detail: 'Systeme.io · Design sur-mesure',
    image: '/portfolio/projet-funnel-portfolio.jpeg',
  },
  {
    id: 'F5',
    tag: 'Site vitrine',
    title: 'Site vitrine coaching',
    result: '',
    detail: 'Systeme.io · Design complet',
    image: '/portfolio/projet-funnel-site.png',
  },
  {
    id: 'F6',
    tag: 'Résultats client',
    title: 'Performance Systeme.io — 1 an',
    result: '14 183 € générés',
    detail: '+133% sur 365 jours',
    image: '/portfolio/projet-resultatfunnel-01.jpeg',
  },
  {
    id: 'F7',
    tag: 'Résultats client',
    title: 'Performance Systeme.io — 61 jours',
    result: '6 489 € générés',
    detail: '+2762% en 61 jours',
    image: '/portfolio/projet-resultatfunnel-02.jpeg',
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

      {/* ── Vidéos témoignages ── */}
      <section className="bg-[#F8F6F1] py-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <ScrollReveal variant="fadeDown" delay={0}>
              <p className="eyebrow mb-4">Ils m&apos;ont fait confiance</p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.08}>
              <h2 className="text-ink">
                Leurs mots valent plus <em style={{ color: 'var(--blue-600)', fontStyle: 'italic' }}>que les miens</em>.
              </h2>
            </ScrollReveal>
          </div>

          {/* Vidéo 1 — paysage (16:9) — Jean Sommer */}
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="max-w-2xl mx-auto mb-14">
              <div
                className="rounded-[var(--radius-xl)] overflow-hidden"
                style={{ boxShadow: '0 24px 60px -12px rgba(37,99,235,0.14)' }}
              >
                <WistiaPlayer mediaId="52noyw8oi1" aspect={1.7777777777777777} />
              </div>
              <div className="mt-5 text-center">
                <p
                  className="font-medium text-ink"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  Jean Sommer
                </p>
                <p
                  className="text-sm text-ink-mute mt-0.5"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  Coach de la voix et de la prise de parole depuis 25 ans
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Vidéos portrait (9:16) — 3 colonnes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">

            {/* Vidéo 2 — Coach business */}
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="flex flex-col items-center">
                <div
                  className="w-full max-w-[280px] mx-auto rounded-[var(--radius-xl)] overflow-hidden"
                  style={{ boxShadow: '0 16px 48px -10px rgba(15,23,42,0.12)' }}
                >
                  <WistiaPlayer mediaId="7htowttuil" aspect={0.575} />
                </div>
                <div className="mt-4 text-center">
                  <p
                    className="font-medium text-ink text-sm"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    Coach business
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Vidéo 3 — Experte en événementielle */}
            <ScrollReveal variant="fadeUp" delay={0.17}>
              <div className="flex flex-col items-center">
                <div
                  className="w-full max-w-[280px] mx-auto rounded-[var(--radius-xl)] overflow-hidden"
                  style={{ boxShadow: '0 16px 48px -10px rgba(15,23,42,0.12)' }}
                >
                  <WistiaPlayer mediaId="mz1v0wtjgg" aspect={0.575} />
                </div>
                <div className="mt-4 text-center">
                  <p
                    className="font-medium text-ink text-sm"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    Experte en événementielle
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Vidéo 4 — Coach EFT Alchimique (MP4 hébergé dans le repo) */}
            <ScrollReveal variant="fadeUp" delay={0.24}>
              <div className="flex flex-col items-center">
                <div
                  className="w-full max-w-[280px] mx-auto rounded-[var(--radius-xl)] overflow-hidden bg-black"
                  style={{ aspectRatio: '9/16', boxShadow: '0 16px 48px -10px rgba(15,23,42,0.12)' }}
                >
                  <video
                    src="/portfolio/video-temoignage4.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p
                    className="font-medium text-ink text-sm"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    Coach en EFT Alchimique
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

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
