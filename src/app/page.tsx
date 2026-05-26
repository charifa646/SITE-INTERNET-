import type { Metadata } from 'next'
import HeroLamp from '@/components/sections/HeroLamp'
import CtaFinal from '@/components/sections/CtaFinal'
import GridBackground from '@/components/ui/GridBackground'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { StaggerReveal, StaggerItem } from '@/components/sections/StaggerReveal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Charifa Ouedraogo · Digital Shift — Marketing, IA & Automatisation',
  description:
    'Automatisez votre business. Modernisez votre croissance. Consultante en funnels de vente, automatisation et intelligence artificielle.',
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

const whyPoints = [
  {
    num: '01',
    title: 'Approche stratégique',
    desc: 'Chaque projet est pensé selon votre activité, votre cible et le résultat que vous souhaitez atteindre.',
  },
  {
    num: '02',
    title: 'Solutions modernes',
    desc: 'J\'utilise des outils digitaux et IA actuels pour créer des systèmes plus intelligents, plus rapides et plus performants.',
  },
  {
    num: '03',
    title: 'Design premium',
    desc: 'Je conçois des interfaces modernes, épurées et professionnelles, adaptées à l\'image que vous souhaitez transmettre.',
  },
  {
    num: '04',
    title: 'Accompagnement personnalisé',
    desc: 'Je m\'adapte à votre niveau, à vos besoins et à votre rythme pour construire une solution vraiment utile.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroLamp />

      {/* 2. Credibility Bar */}
      <section className="relative bg-[#F2EFE8] border-t border-b border-[var(--line)] py-16 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start gap-8">
          <div className="md:w-1/4 flex-shrink-0">
            <span className="eyebrow">Approche</span>
          </div>
          <div className="md:w-3/4">
            <p
              className="text-ink leading-relaxed"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
              }}
            >
              Des solutions digitales conçues pour vous aider à{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--blue-600)' }}>gagner du temps</em>, structurer votre activité et développer une présence en ligne plus performante.
            </p>
          </div>
        </div>
      </section>

      {/* 3. About Preview */}
      <section className="relative bg-[#F8F6F1] py-24 px-6 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Left sticky card */}
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
            <div
              className="relative overflow-hidden rounded-[var(--radius-xl)] p-10 flex flex-col justify-end min-h-[380px]"
              style={{
                background: 'linear-gradient(135deg, #1B2A4E 0%, #1D4ED8 50%, #0D3B99 100%)',
              }}
            >
              {/* Decorative quote mark */}
              <div
                aria-hidden="true"
                className="absolute top-4 right-6 text-white/10 select-none pointer-events-none"
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: '10rem',
                  lineHeight: 1,
                  fontWeight: 300,
                }}
              >
                &ldquo;
              </div>
              <blockquote
                className="relative z-10 text-white/90 italic"
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  fontWeight: 300,
                  lineHeight: 1.4,
                }}
              >
                Je construis mon empire à ma façon — et je m&apos;élève.
              </blockquote>
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-6">
            <p className="eyebrow">À propos</p>
            <h2 className="text-ink">
              Une approche moderne du marketing, de l&apos;
              <em>automatisation</em> et de l&apos;IA.
            </h2>
            <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Je suis Charifa Ouedraogo, consultante marketing spécialisée en funnels de vente, automatisation business et intelligence artificielle.
            </p>
            <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              J&apos;aide les entrepreneurs, formateurs et entreprises à vendre plus efficacement, à automatiser leurs business et à intégrer les bons outils digitaux dans leur activité.
            </p>
            <p className="text-ink-soft leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Mon travail consiste à transformer une activité dispersée en un système clair, structuré et plus rentable.
            </p>

            {/* Signature */}
            <div className="flex items-center gap-4 pt-4 border-t border-[var(--line)]">
              <div
                className="flex items-center justify-center rounded-[10px] text-sm font-semibold text-white"
                style={{
                  width: 44,
                  height: 44,
                  background: 'var(--navy)',
                  fontFamily: 'Fraunces, Georgia, serif',
                  flexShrink: 0,
                }}
              >
                CO
              </div>
              <div>
                <p
                  className="text-ink italic"
                  style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 300 }}
                >
                  Charifa Ouedraogo
                </p>
                <p className="text-xs text-ink-mute" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                  CEO · Digital Shift
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
              >
                En savoir plus
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 7h12M8 3l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Bento */}
      <section className="relative bg-[#F2EFE8] py-24 px-6 overflow-hidden">
        <GridBackground variant="light" />
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Section head */}
          <div className="mb-12">
            <p className="eyebrow mb-4">Services</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-ink">
                Des solutions digitales pensées pour faire <em>évoluer</em> votre activité.
              </h2>
              <p className="text-ink-mute max-w-sm" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                Chaque service est conçu pour répondre à un besoin concret : mieux vendre, gagner du temps, professionnaliser votre image et intégrer des outils modernes.
              </p>
            </div>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4 mb-4">
            {/* Service phare (featured) */}
            <SpotlightCard className="rounded-[var(--radius-lg)] relative overflow-hidden min-h-[340px] flex flex-col justify-end p-8" style={{ background: '#1B2A4E', gridRow: 'span 2' } as React.CSSProperties}>
              <GridBackground variant="dark" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-auto">
                  <span
                    className="italic text-white/20"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '3rem', fontWeight: 300, lineHeight: 1 }}
                  >
                    {services[0].num}
                  </span>
                  <span className="rounded-full bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 text-xs text-yellow-300" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                    ★ Service phare
                  </span>
                </div>
                <div className="mt-16 mb-4 text-white/60">
                  {services[0].icon}
                </div>
                <h3 className="text-white mb-3">{services[0].title}</h3>
                <p className="text-white/50 text-sm mb-6 leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                  {services[0].desc}
                </p>
                <Link
                  href={services[0].href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  En savoir plus
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M1 7h12M8 3l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </SpotlightCard>

            {/* Services 2 & 3 */}
            {services.slice(1, 3).map((s) => (
              <SpotlightCard
                key={s.href}
                className="rounded-[var(--radius-lg)] bg-white p-8 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <span
                    className="italic text-ink/15"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '2rem', fontWeight: 300, lineHeight: 1 }}
                  >
                    {s.num}
                  </span>
                  <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs text-blue-600" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                    {s.tag}
                  </span>
                </div>
                <div className="text-navy">{s.icon}</div>
                <h3 className="text-ink" style={{ fontSize: '1.2rem' }}>{s.title}</h3>
                <p className="text-ink-mute text-sm leading-relaxed flex-1" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                  {s.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-[var(--line)]">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    En savoir plus
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M1 7h12M8 3l4 4-4 4" />
                    </svg>
                  </Link>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* Service 4 full width */}
          <SpotlightCard className="rounded-[var(--radius-lg)] bg-white p-8 flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex-shrink-0 flex flex-col gap-2">
              <span
                className="italic text-ink/15"
                style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '2rem', fontWeight: 300, lineHeight: 1 }}
              >
                {services[3].num}
              </span>
              <div className="text-navy">{services[3].icon}</div>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-ink" style={{ fontSize: '1.2rem' }}>{services[3].title}</h3>
                <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs text-blue-600 flex-shrink-0" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                  {services[3].tag}
                </span>
              </div>
              <p className="text-ink-mute text-sm leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                {services[3].desc}
              </p>
              <div className="pt-4 border-t border-[var(--line)]">
                <Link
                  href={services[3].href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  En savoir plus
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M1 7h12M8 3l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* 5. Why Section */}
      <section className="relative bg-[#F8F6F1] py-24 px-6 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <p className="eyebrow">Pourquoi moi</p>
            <h2 className="text-ink">
              Une expertise orientée <em>performance</em> et innovation.
            </h2>
            <p className="text-ink-mute leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Mon approche ne se limite pas à créer des outils. Je vous aide à construire un système digital cohérent, efficace et adapté à vos objectifs.
            </p>
          </div>

          {/* Right */}
          <StaggerReveal className="flex flex-col">
            {whyPoints.map((p) => (
              <StaggerItem key={p.num}>
                <div className="flex gap-6 py-6 border-t border-[var(--line)] first:border-t-0">
                  <span
                    className="italic text-ink/20 flex-shrink-0 w-8"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.1rem', fontWeight: 300 }}
                  >
                    {p.num}
                  </span>
                  <div>
                    <h4 className="text-ink mb-1" style={{ fontSize: '1rem', fontFamily: 'Satoshi, system-ui, sans-serif', fontWeight: 500, letterSpacing: 'normal', lineHeight: 1.4 }}>
                      {p.title}
                    </h4>
                    <p className="text-ink-mute text-sm leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* 6. CTA Final */}
      <CtaFinal
        heading="Donnez une nouvelle <em>dimension</em> à votre activité."
        body="Vous souhaitez automatiser votre business, améliorer votre présence digitale ou intégrer l'IA dans votre activité ? Contactez-moi pour échanger sur vos besoins."
        primaryLabel="Réserver un appel"
        primaryHref="/contact"
        secondaryLabel="Voir tous les services"
        secondaryHref="/services"
      />
    </>
  )
}
