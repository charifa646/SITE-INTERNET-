import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import { SITE_CONFIG } from '@/config/links'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Parlons de votre projet. Funnels, automatisation, IA, sites internet ou formations — contactez-moi pour échanger sur vos besoins.',
}

const contactMethods = [
  {
    title: 'Réserver un appel',
    desc: 'Planifiez une session de 30 minutes pour discuter de votre projet et définir le meilleur accompagnement.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    cta: 'Réserver via Calendly',
    href: SITE_CONFIG.calendly,
    primary: true,
  },
  {
    title: 'WhatsApp',
    desc: 'Pour une réponse rapide, envoyez-moi un message directement sur WhatsApp.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
    cta: 'Écrire sur WhatsApp',
    href: SITE_CONFIG.whatsapp,
    primary: false,
  },
  {
    title: 'Email',
    desc: 'Préférez-vous l\'email ? Envoyez-moi un message et je vous réponds sous 24h.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    cta: `Envoyer un email`,
    href: `mailto:${SITE_CONFIG.email}`,
    primary: false,
  },
]

const services = [
  'Funnels de vente & automatisation',
  'Intégration intelligence artificielle',
  'Création de sites internet',
  'Formation & consulting présentiel',
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        heading="Parlons de votre <em>projet</em>."
        lead="Besoin d'un accompagnement, d'un funnel, d'un site, d'une formation IA ou d'un système d'automatisation ? Écrivez-moi pour échanger sur vos besoins."
      />

      <section className="relative bg-[#F8F6F1] py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Contact methods */}
          <div className="flex flex-col gap-5">
            {contactMethods.map((m) => (
              <a
                key={m.title}
                href={m.href}
                target={m.href.startsWith('http') ? '_blank' : undefined}
                rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-start gap-5 rounded-[var(--radius-lg)] bg-white border border-[var(--line)] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(37,99,235,0.12)] hover:border-blue-100"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center transition-colors"
                  style={{
                    background: m.primary ? 'var(--blue-600)' : 'var(--bg-soft)',
                    color: m.primary ? 'white' : 'var(--navy)',
                  }}
                >
                  {m.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-ink font-medium mb-1"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    {m.title}
                  </p>
                  <p
                    className="text-ink-mute text-sm leading-relaxed mb-3"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    {m.desc}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    {m.cta}
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M1 7h12M8 3l4 4-4 4" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Info sidebar */}
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)] flex flex-col gap-6">
            <div className="rounded-[var(--radius-xl)] bg-[#1B2A4E] p-8 md:p-10 text-white">
              <p
                className="italic mb-6 leading-snug"
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.8)',
                }}
              >
                Chaque accompagnement commence par une conversation.
              </p>

              <div className="flex flex-col gap-4">
                <p
                  className="text-xs uppercase tracking-widest text-white/40 mb-2"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  Services disponibles
                </p>
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span
                      className="text-sm text-white/60"
                      style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                    >
                      {s}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-white/30" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                  Basée à Ouagadougou, Burkina Faso
                </p>
                <p className="text-xs text-white/30 mt-1" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                  Intervention en Afrique Francophone
                </p>
              </div>
            </div>

            <p
              className="text-xs text-center italic text-ink-mute"
              style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
            >
              Liens à connecter à votre Calendly et WhatsApp
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
