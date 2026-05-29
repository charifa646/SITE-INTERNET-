import Image from 'next/image'
import Link from 'next/link'
import GridBackground from '@/components/ui/GridBackground'

// Hero statique responsive — PAGE SERVICE CRÉATION DE SITES INTERNET (COPYWRITING.md)
export function SitesScrollHero() {
  return (
    <section
      className="relative bg-[#0A0F1E] overflow-hidden"
      style={{ paddingTop: 'calc(var(--nav-h) + 3.5rem)' }}
    >
      <GridBackground variant="dark" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-12">

          {/* ── Texte ── */}
          <div className="flex flex-col gap-6 lg:w-[46%] pb-12 lg:pb-16">
            <p
              className="text-xs uppercase tracking-[0.2em] text-white/40"
              style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
            >
              Service 03
            </p>

            <h1
              className="text-white"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontWeight: 300,
                fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
              }}
            >
              Création de{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  color: 'transparent',
                  background: 'linear-gradient(135deg, #93C5FD 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                Sites Internet.
              </em>
            </h1>

            <p
              className="text-white/55 leading-relaxed"
              style={{
                fontFamily: 'Satoshi, system-ui, sans-serif',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                maxWidth: '46ch',
              }}
            >
              Des sites vitrines modernes et landing pages premium pour renforcer
              votre image en ligne et présenter vos services avec clarté.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-blue-600 px-7 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
              >
                Démarrer mon projet
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-white/15 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
              >
                Voir des réalisations
              </Link>
            </div>
          </div>

          {/* ── Mockup navigateur (statique) ── */}
          <div className="lg:flex-1 self-end">
            <div
              className="w-full overflow-hidden"
              style={{
                borderRadius: '12px 12px 0 0',
                background: '#1B2A4E',
                boxShadow:
                  '0 -24px 80px -20px rgba(37,99,235,0.35), 0 0 0 1px rgba(255,255,255,0.06)',
              }}
            >
              {/* Barre navigateur */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
                <div className="w-3 h-3 rounded-full bg-white/15" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/8" />
                <div
                  className="ml-3 flex-1 h-5 rounded-full bg-white/6 flex items-center px-3"
                  style={{ maxWidth: '280px' }}
                >
                  <span
                    className="text-white/30 text-[10px] truncate"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  >
                    digitalshift.co
                  </span>
                </div>
              </div>

              {/* Capture du site */}
              <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/funnel-hero/capture-code.png"
                  alt="Exemple de site vitrine créé par Digital Shift"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 55vw"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
