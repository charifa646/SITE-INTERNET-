import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CtaFinal from '@/components/sections/CtaFinal'
import GridBackground from '@/components/ui/GridBackground'
import Link from 'next/link'
import { SITE_CONFIG } from '@/config/links'

export const metadata: Metadata = {
  title: 'Formation & Consulting',
  description:
    'Accompagnement personnalisé en présentiel pour aider entrepreneurs et équipes à intégrer l\'IA et maîtriser la communication digitale.',
}

const checklistItems = [
  { title: 'Intégrer l\'IA dans son activité', desc: 'Cas d\'usage concrets selon votre métier, outils adaptés, prompts sur-mesure, workflows.' },
  { title: 'Communication digitale sur les réseaux', desc: 'Stratégie de contenu, ligne éditoriale, calendrier, rédaction qui convertit.' },
  { title: 'Format individuel ou groupe', desc: 'Sessions 1-to-1 ou petits groupes (4-8 personnes max) pour une vraie interaction.' },
  { title: 'Support post-formation', desc: 'Document de synthèse, prompts/templates fournis, accès Q&A pendant 30 jours.' },
]

export default function FormationServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Service 04"
        heading="Formation & <em>Consulting</em>."
        lead="Accompagnement personnalisé en présentiel pour aider entrepreneurs et équipes à intégrer l'IA et maîtriser la communication digitale sur les réseaux."
      />

      <section className="bg-[#F8F6F1] py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          {/* Aside */}
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-[#F2EFE8] border border-[var(--line)] p-8 flex flex-col">
              <GridBackground variant="light" />
              <div className="relative z-10 flex flex-col gap-8">
                <div className="text-navy">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-mute mb-3" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>Pour qui ?</p>
                  <p className="text-ink-soft text-sm leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                    Entrepreneurs, équipes et entreprises qui veulent monter en compétences sur l&apos;IA appliquée à leur métier ou sur la communication digitale.
                  </p>
                </div>
                <p className="text-xs text-ink-mute italic" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                  Format exclusivement en présentiel — à Ouagadougou ou sur site dans votre entreprise.
                </p>
                <a
                  href={SITE_CONFIG.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-[var(--radius)] bg-blue-600 px-6 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  Réserver une session
                </a>
              </div>
            </div>
          </div>

          {/* Main body */}
          <div className="flex flex-col gap-8">
            <p className="eyebrow">Ce que vous apprenez</p>
            <h2 className="text-ink">
              Apprenez en <em>présentiel</em>, appliquez immédiatement.
            </h2>
            <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Mes formations sont conçues pour être directement applicables. Pas de théorie qui dort dans un classeur — vous repartez avec des outils que vous utilisez dès le lendemain dans votre activité.
            </p>
            <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Format en présentiel uniquement, en petit groupe ou en individuel, à Ouagadougou ou sur site dans votre entreprise.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col">
              {checklistItems.map((item) => (
                <li key={item.title} className="flex items-start gap-4 py-5 border-t border-[var(--line)]">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-blue-600">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-ink text-sm font-medium mb-1" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>{item.title}</p>
                    <p className="text-ink-mute text-sm leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-navy px-7 py-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
              >
                Réserver ma session
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 7h12M8 3l4 4-4 4" />
                </svg>
              </Link>
              <Link
                href="/formations"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[var(--line)] px-7 py-4 text-sm font-medium text-ink-soft hover:border-ink hover:text-ink transition-colors"
                style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
              >
                Voir les formations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaFinal
        eyebrow="Prêt à monter en compétences ?"
        heading="Une session adaptée à votre <em>besoin</em>."
        body="Échangeons sur votre niveau et le format le plus adapté à vos objectifs."
        primaryLabel="Me contacter"
        primaryHref="/contact"
        secondaryLabel="Voir les formations"
        secondaryHref="/formations"
      />
    </>
  )
}
