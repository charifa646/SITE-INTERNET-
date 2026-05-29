import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CtaFinal from '@/components/sections/CtaFinal'
import SpotlightCard from '@/components/ui/SpotlightCard'
import GridBackground from '@/components/ui/GridBackground'
import Link from 'next/link'
import ArrowRightIcon from '@/components/ui/ArrowRightIcon'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Funnels & automatisation, intelligence artificielle, création de sites et formations. Des services pensés pour votre croissance digitale.',
}

const services = [
  {
    num: '01',
    title: 'Funnels & Automatisation',
    desc: 'Création de tunnels de vente performants, systèmes de conversion et automatisations marketing pour vendre votre offre de manière plus fluide et plus efficace. Conçu pour coachs, formateurs et entrepreneurs qui veulent vendre de façon automatisée.',
    tag: 'Pour coachs & formateurs en ligne',
    href: '/services/funnels',
    featured: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3h18l-7 9v6l-4 2v-8L3 3z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Intelligence Artificielle',
    desc: 'Accompagnement à l\'intégration de l\'IA pour automatiser des tâches et améliorer votre productivité.',
    tag: 'Entrepreneurs & entreprises',
    href: '/services/ia',
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a4 4 0 00-4 4v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2h-2V6a4 4 0 00-4-4z" />
        <circle cx="12" cy="15" r="2" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Création de Sites Internet',
    desc: 'Sites vitrines modernes et landing pages premium pour renforcer votre image en ligne et présenter vos services avec clarté.',
    tag: 'Sites premium',
    href: '/services/sites',
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Formation & Consulting',
    desc: 'Accompagnement personnalisé en présentiel pour aider entrepreneurs et équipes à mieux comprendre l\'IA et la communication digitale sur les réseaux.',
    tag: 'En présentiel',
    href: '/services/formation',
    featured: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        heading="Des services pensés pour accompagner votre <em>croissance</em> digitale."
        lead="Funnels de vente, automatisation business, intelligence artificielle, création de sites internet et accompagnement stratégique pour structurer et moderniser votre activité."
        bgImage="/images/im - service hero.jpg"
        cta={
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-navy px-7 py-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            Réserver un appel
          </Link>
        }
      />

      {/* Services Bento */}
      <section className="relative bg-[#F2EFE8] py-24 px-6 overflow-hidden">
        <GridBackground variant="light" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4 mb-4">
            {/* Service phare */}
            <ScrollReveal variant="zoomIn" delay={0}>
              <SpotlightCard className="rounded-[var(--radius-lg)] relative overflow-hidden min-h-[340px] flex flex-col justify-end p-8" style={{ background: '#1B2A4E', gridRow: 'span 2' } as React.CSSProperties}>
                <GridBackground variant="dark" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-auto">
                    <span className="italic text-white/20" style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '3rem', fontWeight: 300, lineHeight: 1 }}>
                      {services[0].num}
                    </span>
                    <span className="rounded-full bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 text-xs text-yellow-300" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                      ★ Service phare
                    </span>
                  </div>
                  <div className="mt-16 mb-4 text-white/60">{services[0].icon}</div>
                  <h3 className="text-white mb-3">{services[0].title}</h3>
                  <p className="text-white/50 text-sm mb-6 leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>{services[0].desc}</p>
                  <Link href={services[0].href} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 bg-blue-400/10 hover:bg-blue-400/20 px-4 py-2 rounded-full transition-colors" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                    En savoir plus
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </SpotlightCard>
            </ScrollReveal>

            {services.slice(1, 3).map((s, i) => (
              <ScrollReveal key={s.href} variant="zoomIn" delay={0.08 + i * 0.08}>
                <SpotlightCard className="rounded-[var(--radius-lg)] bg-white p-8 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <span className="italic text-ink/15" style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '2rem', fontWeight: 300, lineHeight: 1 }}>{s.num}</span>
                    <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs text-blue-600" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>{s.tag}</span>
                  </div>
                  <div className="text-navy">{s.icon}</div>
                  <h3 className="text-ink" style={{ fontSize: '1.2rem' }}>{s.title}</h3>
                  <p className="text-ink-mute text-sm leading-relaxed flex-1" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>{s.desc}</p>
                  <div className="mt-auto pt-4 border-t border-[var(--line)]">
                    <Link href={s.href} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                      En savoir plus
                      <ArrowRightIcon size={14} />
                    </Link>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="zoomIn" delay={0.24}>
          <SpotlightCard className="rounded-[var(--radius-lg)] bg-white p-8 flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex-shrink-0 flex flex-col gap-2">
              <span className="italic text-ink/15" style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '2rem', fontWeight: 300, lineHeight: 1 }}>{services[3].num}</span>
              <div className="text-navy">{services[3].icon}</div>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-ink" style={{ fontSize: '1.2rem' }}>{services[3].title}</h3>
                <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs text-blue-600 flex-shrink-0" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>{services[3].tag}</span>
              </div>
              <p className="text-ink-mute text-sm leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>{services[3].desc}</p>
              <div className="pt-4 border-t border-[var(--line)]">
                <Link href={services[3].href} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                  En savoir plus
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>
          </SpotlightCard>
          </ScrollReveal>
        </div>
      </section>

      <CtaFinal
        eyebrow="Discutons de votre projet"
        heading="Discutons de votre <em>projet</em>."
        body="Chaque accompagnement commence par un échange pour comprendre vos besoins."
        primaryLabel="Me contacter"
        primaryHref="/contact"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  )
}
