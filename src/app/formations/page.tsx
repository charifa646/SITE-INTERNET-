import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CtaFinal from '@/components/sections/CtaFinal'
import GridBackground from '@/components/ui/GridBackground'
import { StaggerReveal, StaggerItem } from '@/components/sections/StaggerReveal'
import Link from 'next/link'
import { SITE_CONFIG } from '@/config/links'

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
      <PageHero
        eyebrow="Formations"
        heading="Formations en <em>présentiel</em>."
        lead="Des formations pratiques et accessibles, exclusivement en présentiel, pour aider entrepreneurs et entreprises à intégrer l'IA et maîtriser la communication digitale."
        cta={
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-navy px-7 py-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            Demander une session
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 7h12M8 3l4 4-4 4" />
            </svg>
          </Link>
        }
      />

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
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formations.map((f) => (
              <StaggerItem key={f.num}>
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
              </StaggerItem>
            ))}
          </StaggerReveal>
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
