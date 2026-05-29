import type { Metadata } from 'next'
import CtaFinal from '@/components/sections/CtaFinal'
import GridBackground from '@/components/ui/GridBackground'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/config/links'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import MagneticButton from '@/components/ui/MagneticButton'

export const metadata: Metadata = {
  title: 'Formations',
  description:
    'Des formations pratiques et accessibles, exclusivement en présentiel, pour aider entrepreneurs et entreprises à intégrer l\'IA et maîtriser la communication digitale.',
}

const formations = [
  {
    num: '01',
    title: 'Intégrer l\'IA dans son activité',
    desc: 'Maîtrisez les outils d\'IA adaptés à votre domaine. Cas d\'usage concrets, prompts sur-mesure, workflows automatisés pour gagner du temps au quotidien.',
    features: [
      'Outils IA adaptés à votre métier',
      'Prompts & méthodes prêtes à l\'emploi',
      'Cas pratiques business directement applicables',
      'Support post-formation 30 jours',
    ],
    cta: 'Demander une session',
    variant: 'primary' as const,
  },
  {
    num: '02',
    title: 'Communication digitale sur les réseaux',
    desc: 'Structurez votre présence en ligne pour attirer, engager et convertir. Ligne éditoriale, calendrier de contenu, rédaction qui convertit.',
    features: [
      'Stratégie de contenu sur-mesure',
      'Ligne éditoriale & ton de marque',
      'Calendrier de publication efficace',
      'Rédaction qui engage et convertit',
    ],
    cta: 'Demander une session',
    variant: 'ghost' as const,
  },
]

export default function FormationsPage() {
  return (
    <>
      {/* Split hero */}
      <section
        className="bg-[#F8F6F1] px-6 overflow-hidden"
        style={{ paddingTop: 'calc(var(--nav-h) + 3rem)', paddingBottom: '3rem' }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — text */}
          <div>
            <ScrollReveal variant="fadeLeft">
              <div className="flex flex-col gap-6">
                <p className="eyebrow">Formations</p>
                <h1
                  style={{
                    fontFamily: 'Fraunces, Georgia, serif',
                    fontWeight: 300,
                    fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1,
                  }}
                  className="text-ink"
                >
                  Formations en{' '}
                  <em
                    style={{
                      color: 'transparent',
                      background: 'linear-gradient(135deg, #2563EB 0%, #0D3B99 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      fontStyle: 'italic',
                    }}
                  >
                    présentiel
                  </em>
                  .
                </h1>
                <p
                  className="text-ink-soft leading-relaxed"
                  style={{
                    fontFamily: 'Satoshi, system-ui, sans-serif',
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                    maxWidth: '48ch',
                  }}
                >
                  Des formations pratiques et accessibles, exclusivement en présentiel, pour aider entrepreneurs et entreprises à intégrer l&apos;IA et maîtriser la communication digitale.
                </p>
                <div className="pt-2">
                  <MagneticButton
                    href="/contact"
                    as="a"
                    className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-blue-600 px-7 py-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors active:scale-[0.98]"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    Demander une session
                  </MagneticButton>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT — image */}
          <div>
            <ScrollReveal variant="fadeRight" delay={0.1}>
              <div className="relative h-[480px] rounded-[var(--radius-xl)] overflow-hidden">
                <Image
                  src="/images/charifa-approche.jpg"
                  alt="Formations en présentiel"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F2EFE8] py-24 px-6 overflow-hidden">
        <GridBackground variant="light" />
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-16">
          {/* Info banner */}
          <div className="flex gap-4 items-start rounded-[var(--radius-lg)] bg-blue-50 border border-blue-100 p-6 md:p-8">
            <div className="flex-shrink-0 text-blue-600 mt-0.5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
            <p
              className="italic text-blue-900 leading-relaxed"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 'clamp(0.95rem, 1.7vw, 1.08rem)',
                fontWeight: 300,
              }}
            >
              Format exclusivement en présentiel — individuel ou petits groupes (4 à 8 personnes), à Ouagadougou ou sur site dans votre entreprise.
            </p>
          </div>

          {/* Formations grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formations.map((f, i) => (
              <ScrollReveal key={f.num} variant="zoomIn" delay={i * 0.1}>
                <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--line)] p-8 md:p-10 flex flex-col gap-6 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-12px_rgba(37,99,235,0.12)] hover:border-blue-100">
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-4"
                      style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                    >
                      Formation {f.num}
                    </p>
                    <h3
                      className="text-ink mb-3"
                      style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 300, letterSpacing: '-0.01em' }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-ink-mute text-sm leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                      {f.desc}
                    </p>
                  </div>

                  <ul className="flex flex-col flex-1">
                    {f.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 py-3.5 border-t border-[var(--line-soft)]">
                        <div className="flex-shrink-0 text-blue-600">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-sm text-ink-soft" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={SITE_CONFIG.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto block w-full text-center rounded-[var(--radius)] px-6 py-3.5 text-sm font-medium transition-colors ${
                      f.variant === 'primary'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border border-[var(--line)] text-ink-soft hover:border-ink hover:text-ink'
                    }`}
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    {f.cta}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal
        eyebrow="Prêt à monter en compétences ?"
        heading="Prêt à apprendre et <em>appliquer</em> dès demain ?"
        body="Écrivez-moi pour organiser une session adaptée à votre niveau et vos objectifs."
        primaryLabel="Me contacter"
        primaryHref="/contact"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  )
}
