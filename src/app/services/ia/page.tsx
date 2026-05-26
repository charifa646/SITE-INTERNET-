import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CtaFinal from '@/components/sections/CtaFinal'
import GridBackground from '@/components/ui/GridBackground'
import Link from 'next/link'
import { SITE_CONFIG } from '@/config/links'

export const metadata: Metadata = {
  title: 'Intelligence Artificielle',
  description:
    'Audit IA, sélection d\'outils et formation pratique. Intégrez l\'IA dans votre activité pour gagner du temps et de la performance.',
}

const checklistItems = [
  'Audit IA personnalisé de votre activité',
  'Sélection d\'outils adaptés (Claude, ChatGPT, Gemini...)',
  'Mise en place & intégration dans vos process',
  'Formation pratique à l\'utilisation',
]

export default function IAPage() {
  return (
    <>
      <PageHero
        eyebrow="Service 02"
        heading="Intelligence <em>Artificielle</em>."
        lead="Découvrez comment l'IA peut transformer votre façon de travailler. Je sélectionne les bons outils, les intègre dans votre activité et vous forme à les utiliser efficacement."
      />

      <section className="bg-[#F8F6F1] py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          {/* Aside */}
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-[#1B2A4E] p-8 flex flex-col">
              <GridBackground variant="dark" />
              <div className="relative z-10 flex flex-col gap-8">
                <div className="text-white/40">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2a4 4 0 00-4 4v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2h-2V6a4 4 0 00-4-4z" />
                    <circle cx="12" cy="15" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-3" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>Pour qui ?</p>
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                    Entrepreneurs, PME et indépendants qui veulent intégrer l&apos;IA dans leur activité sans se perdre dans la jungle des outils disponibles.
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
              L&apos;IA n&apos;est plus une option, c&apos;est un <em>levier</em>.
            </h2>
            <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Les meilleurs entrepreneurs utilisent déjà l&apos;IA pour créer du contenu, automatiser des tâches répétitives, analyser leurs données et améliorer leur service client.
            </p>
            <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Je vous aide à identifier exactement où et comment l&apos;IA peut vous faire gagner du temps — et je vous accompagne dans sa mise en place concrète.
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
                Intégrer l&apos;IA dans mon activité
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaFinal
        eyebrow="Passez à l'action"
        heading="L'IA à votre <em>service</em>, pas l'inverse."
        primaryLabel="Réserver un appel"
        secondaryLabel="Voir tous les services"
        secondaryHref="/services"
      />
    </>
  )
}
