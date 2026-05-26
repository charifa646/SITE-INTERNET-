'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import MagneticButton from '@/components/ui/MagneticButton'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const FloatingCard = memo(function FloatingCard({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      style={{ willChange: 'transform' }}
      className={`rounded-[var(--radius-sm)] border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 text-sm text-white/80 ${className}`}
    >
      {children}
    </motion.div>
  )
})

export default function HeroLamp() {
  return (
    <section className="relative min-h-[100dvh] bg-[#0A0F1E] overflow-hidden flex flex-col items-center">
      {/* Lamp assembly */}
      <div className="relative flex w-full flex-col items-center" style={{ paddingTop: '12rem' }}>
        {/* Cones */}
        <div className="relative flex w-full items-center justify-center" style={{ height: '180px' }}>
          {/* Left cone */}
          <motion.div
            initial={{ width: '15rem', opacity: 0.3 }}
            animate={{ width: '32rem', opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              right: '50%',
              top: 0,
              height: '100%',
              background:
                'conic-gradient(from 70deg at 100% 100%, transparent 20%, rgba(96,165,250,0.55) 60%, transparent 80%)',
              willChange: 'transform',
            }}
          />
          {/* Right cone */}
          <motion.div
            initial={{ width: '15rem', opacity: 0.3 }}
            animate={{ width: '32rem', opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              height: '100%',
              background:
                'conic-gradient(from 290deg at 0% 100%, transparent 20%, rgba(96,165,250,0.55) 60%, transparent 80%)',
              willChange: 'transform',
            }}
          />

          {/* Center glow ball */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '-1rem',
              width: '28rem',
              height: '9rem',
              background: 'rgba(59,130,246,0.5)',
              filter: 'blur(48px)',
              borderRadius: '50%',
              zIndex: 1,
            }}
          />

          {/* Narrow core glow */}
          <motion.div
            initial={{ width: '6rem' }}
            animate={{ width: '8rem' }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '-0.5rem',
              height: '5rem',
              background: '#60A5FA',
              filter: 'blur(40px)',
              borderRadius: '50%',
              zIndex: 2,
              willChange: 'transform',
            }}
          />

          {/* Horizontal line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60%',
              height: '1px',
              background:
                'linear-gradient(to right, transparent, #93C5FD, #60A5FA, #93C5FD, transparent)',
              boxShadow: '0 0 20px 2px rgba(96,165,250,0.6)',
              zIndex: 3,
            }}
          />
        </div>

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, type: 'spring', stiffness: 60, damping: 20 }}
          style={{ willChange: 'transform' }}
          className="relative z-10 flex flex-col items-center text-center px-6 pt-12 pb-24 w-full max-w-5xl mx-auto"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2.5 text-sm text-white/70">
            <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-medium text-white">2026</span>
            <span>Consultante Marketing &amp; IA &middot; Disponible</span>
          </div>

          {/* H1 */}
          <h1 className="gradient-text-dark mx-auto mb-6" style={{ maxWidth: '14ch' }}>
            Automatisez votre business.{' '}
            <em className="not-italic" style={{ color: 'transparent', background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              Modernisez
            </em>{' '}
            votre croissance.
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-base text-white/55 mb-10 leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
            Funnels de vente, automatisation IA, sites performants et formations adaptées &mdash; tout ce dont votre activité a besoin pour passer au niveau supérieur.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <MagneticButton
              href="/contact"
              as="a"
              className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-blue-600 px-7 py-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Réserver un appel
            </MagneticButton>
            <MagneticButton
              href="/services"
              as="a"
              className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-white/15 bg-white/5 backdrop-blur-sm px-7 py-4 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
            >
              Voir les services
            </MagneticButton>
          </div>

          {/* Stats grid */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-light text-white" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                <AnimatedCounter target={100} suffix="+" className="" />
              </span>
              <span className="text-xs text-white/40 uppercase tracking-widest">Entrepreneurs formés</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-light text-white" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                <AnimatedCounter target={3} suffix=" ans" className="" />
              </span>
              <span className="text-xs text-white/40 uppercase tracking-widest">D&apos;expertise digitale</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-light text-white" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Afrique</span>
              <span className="text-xs text-white/40 uppercase tracking-widest">Francophone</span>
            </div>
          </div>

          {/* Floating cards */}
          <div className="relative w-full flex flex-wrap justify-center gap-4">
            <FloatingCard delay={0} className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Automatisation active
            </FloatingCard>

            <FloatingCard delay={0.6}>
              IA intégrée &middot; Claude &middot; GPT &middot; Gemini
            </FloatingCard>

            <FloatingCard delay={1.2}>
              +47% conversion &middot; Moyenne clients
            </FloatingCard>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
