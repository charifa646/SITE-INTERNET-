'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import GridBackground from '@/components/ui/GridBackground'

// Copy : PAGE SERVICE — CRÉATION DE SITES INTERNET (COPYWRITING.md)
export function SitesScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Mockup : penché → plat au scroll
  const rotateX   = useTransform(scrollYProgress, [0, 0.5], [18, 0])
  const scale     = useTransform(scrollYProgress, [0, 0.5], [0.82, 1])
  const translateY = useTransform(scrollYProgress, [0, 0.5], [60, 0])

  // Header : s'efface vers le haut pendant le scroll
  const headerOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0])
  const headerY       = useTransform(scrollYProgress, [0, 0.28], [0, -64])

  return (
    /* Conteneur tall : donne l'espace de scroll pour l'animation */
    <div ref={containerRef} className="relative" style={{ height: '200dvh' }}>

      {/* Zone sticky — reste en vue pendant tout le scroll */}
      <div
        className="sticky top-0 overflow-hidden flex flex-col items-center justify-start bg-[#0A0F1E]"
        style={{ height: '100dvh' }}
      >
        <GridBackground variant="dark" />

        {/* ── Header — copie COPYWRITING.md ── */}
        <motion.div
          style={{
            opacity: headerOpacity,
            y: headerY,
            willChange: 'transform, opacity',
            paddingTop: 'calc(var(--nav-h) + 3rem)',
          }}
          className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <p
            className="mb-5 text-xs uppercase tracking-[0.2em] text-white/40"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            Service 03
          </p>

          {/* H1 */}
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              maxWidth: '20ch',
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

          {/* Lead */}
          <p
            className="text-white/55 mb-9 leading-relaxed"
            style={{
              fontFamily: 'Satoshi, system-ui, sans-serif',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
              maxWidth: '52ch',
            }}
          >
            Des sites vitrines modernes et landing pages premium pour renforcer
            votre image en ligne et présenter vos services avec clarté.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
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
        </motion.div>

        {/* ── Mockup — se redresse au scroll ── */}
        <div
          className="absolute bottom-0 left-1/2 w-full max-w-4xl px-6"
          style={{
            transform: 'translateX(-50%)',
            perspective: '1200px',
            bottom: '-4rem',
          }}
        >
          <motion.div
            style={{
              rotateX,
              scale,
              y: translateY,
              transformOrigin: 'top center',
              willChange: 'transform',
            }}
          >
            {/* Cadre "navigateur" en navy Digital Shift */}
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

              {/* Screenshot du site */}
              <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/funnel-hero/capture-code.png"
                  alt="Exemple de site vitrine créé par Digital Shift"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
