import Link from 'next/link'
import { SITE_CONFIG } from '@/config/links'

const serviceLinks = [
  { label: 'Funnels & Automatisation', href: '/services/funnels' },
  { label: 'Intelligence Artificielle', href: '/services/ia' },
  { label: 'Création de Sites', href: '/services/sites' },
  { label: 'Formation & Consulting', href: '/services/formation' },
]

const navLinks = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Formations', href: '/formations' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#F2EFE8] border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-[10px] text-sm font-semibold text-white"
                style={{
                  width: 38,
                  height: 38,
                  background: 'var(--navy)',
                  fontFamily: 'Fraunces, Georgia, serif',
                }}
              >
                CO
              </div>
              <span className="text-sm font-medium text-ink" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                Charifa <span className="text-ink-mute">&middot;</span> Ouedraogo
              </span>
            </div>
            <p className="text-sm text-ink-mute leading-relaxed max-w-xs" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Consultante marketing &amp; IA. J&apos;aide les entrepreneurs à automatiser leur business et moderniser leur croissance digitale.
            </p>
            <p className="text-xs text-ink-mute" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Ouagadougou, Burkina Faso
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-mute font-medium mb-5" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-ink-soft hover:text-blue-600 transition-colors"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-mute font-medium mb-5" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-ink-soft hover:text-blue-600 transition-colors"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-mute font-medium mb-5" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-ink-soft" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                Ouagadougou, BF
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-soft hover:text-blue-600 transition-colors"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-soft hover:text-blue-600 transition-colors"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  Calendly
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm text-ink-soft hover:text-blue-600 transition-colors"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--line)] pt-8">
          <p className="text-xs text-ink-mute" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
            &copy; 2026 Charifa Ouedraogo &middot; Digital Shift. Tous droits réservés.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-ink-mute hover:text-blue-600 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-mute hover:text-blue-600 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-ink-mute hover:text-blue-600 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
