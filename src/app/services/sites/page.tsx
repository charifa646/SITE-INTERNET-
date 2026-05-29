import type { Metadata } from 'next'
import CtaFinal from '@/components/sections/CtaFinal'
import GridBackground from '@/components/ui/GridBackground'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG, whatsappLink } from '@/config/links'
import { SitesScrollHero } from '@/components/ui/container-scroll-animation'
import { ScrollReveal, ScrollRevealList, ScrollRevealItem } from '@/components/ui/ScrollReveal'
import MagneticButton from '@/components/ui/MagneticButton'

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
      <SitesScrollHero />

      <section className="bg-[#F8F6F1] py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          {/* Aside */}
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
            <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-[#F2EFE8] border border-[var(--line)] p-8 flex flex-col">
              <GridBackground variant="light" />
              {/* Preview image */}
              <div className="relative rounded-[var(--radius-lg)] overflow-hidden mb-6" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/images/pourquoi-im.jpg"
                  alt="Aperçu site"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-8">
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
                  <a
                    href={whatsappLink('Création de Sites')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-[var(--radius)] border border-[var(--line)] px-6 py-3.5 text-sm font-medium text-ink-soft hover:border-ink hover:text-ink transition-colors"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.16c-.25.69-1.43 1.32-1.97 1.4-.5.08-1.14.11-1.84-.12-.42-.13-.97-.31-1.67-.61-2.94-1.27-4.86-4.23-5.01-4.43-.15-.2-1.2-1.59-1.2-3.03 0-1.44.76-2.15 1.03-2.44.27-.29.58-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.59.84 2.03.91 2.18.07.15.12.32.02.52-.1.2-.15.32-.29.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.2-.29.39-.24.66-.15.27.1 1.71.81 2 .96.29.15.49.22.56.34.07.12.07.71-.18 1.4z" />
                    </svg>
                    Écrire sur WhatsApp
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
          </div>

          {/* Main body */}
          <div className="flex flex-col gap-8">
            <ScrollReveal variant="fadeUp" delay={0}>
              <p className="eyebrow">Ce que vous obtenez</p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.07}>
              <h2 className="text-ink">
                Un site qui <em>vend</em>, pas juste un site qui existe.
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.12}>
              <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif', maxWidth: '58ch' }}>
                Votre site est votre première impression digitale. Il doit transmettre instantanément votre expertise, votre niveau et votre univers. Sans compromis sur la qualité ni sur les performances.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.16}>
              <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif', maxWidth: '58ch' }}>
                Je conçois des sites sur-mesure, jamais des templates recyclés. Chaque détail compte : la typographie, l&apos;espacement, les animations, le copywriting. Et tout est pensé mobile-first.
              </p>
            </ScrollReveal>

            {/* Checklist */}
            <ScrollRevealList className="flex flex-col">
              {checklistItems.map((item) => (
                <ScrollRevealItem key={item.title} className="flex items-start gap-4 py-5 border-t border-[var(--line)]">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-blue-600">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-ink text-sm font-medium mb-1" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>{item.title}</p>
                    <p className="text-ink-mute text-sm leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>{item.desc}</p>
                  </div>
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
                Démarrer mon site
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 7h12M8 3l4 4-4 4" />
                </svg>
              </MagneticButton>
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
