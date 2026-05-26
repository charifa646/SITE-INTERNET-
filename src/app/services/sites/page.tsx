import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CtaFinal from '@/components/sections/CtaFinal'
import Link from 'next/link'
import { SITE_CONFIG } from '@/config/links'

export const metadata: Metadata = {
  title: 'Création de Sites Internet',
  description:
    'Sites vitrines modernes et landing pages premium pour renforcer votre image en ligne et présenter vos services avec clarté.',
}

const checklistItems = [
  { title: 'Design sur-mesure premium', desc: "Identité visuelle unique, jamais de template recyclé. Approche éditoriale moderne." },
  { title: 'Responsive parfait', desc: "Expérience irréprochable sur mobile, tablette et desktop — testée sur tous les écrans." },
  { title: 'Performance & SEO', desc: "Chargement rapide, structure optimisée Google, analytics intégré dès le lancement." },
  { title: 'Intégrations business', desc: "Paiement (Chariow, Stripe), formulaires intelligents, CRM, automatisations." },
  { title: 'Formation à la gestion', desc: "Vous êtes autonome pour modifier vos textes, vos images, vos pages." },
]

export default function SitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Service 03"
        heading="Création de <em>Sites Internet</em>."
        lead="Des sites vitrines modernes et landing pages premium pour renforcer votre image en ligne et présenter vos services avec clarté."
      />

      <section className="bg-[#F8F6F1] py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          {/* Aside */}
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
            <div className="rounded-[var(--radius-xl)] bg-[#F2EFE8] border border-[var(--line)] p-8 flex flex-col gap-8">
              <div className="text-navy">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-mute mb-3" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>Pour qui ?</p>
                <p className="text-ink-soft text-sm leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                  Entrepreneurs, coachs et entreprises qui veulent un site qui reflète vraiment leur niveau d&apos;expertise — fini les templates génériques sans âme.
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
                <Link
                  href="/portfolio"
                  className="block w-full text-center rounded-[var(--radius)] border border-[var(--line)] px-6 py-3.5 text-sm font-medium text-ink-soft hover:border-ink hover:text-ink transition-colors"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  Voir des réalisations
                </Link>
              </div>
            </div>
          </div>

          {/* Main body */}
          <div className="flex flex-col gap-8">
            <p className="eyebrow">Ce que vous obtenez</p>
            <h2 className="text-ink">
              Un site qui <em>vend</em>, pas juste un site qui existe.
            </h2>
            <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Votre site est votre première impression digitale. Il doit transmettre instantanément votre expertise, votre niveau et votre univers. Sans compromis sur la qualité ni sur les performances.
            </p>
            <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Je conçois des sites sur-mesure, jamais des templates recyclés. Chaque détail compte : la typographie, l&apos;espacement, les animations, le copywriting. Et tout est pensé mobile-first.
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

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-navy px-7 py-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
              >
                Démarrer mon site
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 7h12M8 3l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaFinal
        eyebrow="Et si on créait votre site ?"
        heading="Votre site, votre <em>image</em>, votre impact."
        body="30 minutes d'échange pour cerner vos besoins et vous proposer la meilleure approche."
        primaryLabel="Réserver un appel"
        secondaryLabel="Voir le portfolio"
        secondaryHref="/portfolio"
      />
    </>
  )
}
