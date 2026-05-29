'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import MagneticButton from '@/components/ui/MagneticButton'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import GridBackground from '@/components/ui/GridBackground'

export default function HeroLamp() {
  return (
    <section className="relative min-h-[100dvh] bg-[#0A0F1E] overflow-hidden flex flex-col items-center justify-center pb-28 md:pb-40">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pourquoi-im.jpg"
          alt=""
          fill
          aria-hidden="true"
          priority
          style={{ objectFit: 'cover', opacity: 0.07, mixBlendMode: 'luminosity' }}
        />
      </div>
      {/* Edge fade overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.5) 60%, rgba(10,15,30,0.1) 100%)',
        }}
      />
      <GridBackground variant="dark" />

      {/* ── Lamp assembly ── fixed at top of section */}
      <div className="absolute top-0 left-0 right-0 z-0 flex items-start justify-center" style={{ height: '340px' }}>

        {/* Blur overlay */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-48 backdrop-blur-md opacity-10"
        />

        {/* Central glow blob */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '28rem',
            height: '9rem',
            background: 'rgba(37,99,235,0.6)',
            filter: 'blur(48px)',
            borderRadius: '50%',
            zIndex: 50,
          }}
        />

        {/* Core bright lamp */}
        <motion.div
          aria-hidden="true"
          initial={{ width: '8rem' }}
          animate={{ width: '16rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '-3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '9rem',
            background: 'rgba(37,99,235,0.6)',
            filter: 'blur(24px)',
            borderRadius: '50%',
            zIndex: 30,
            willChange: 'width',
          }}
        />

        {/* Horizontal line */}
        <motion.div
          aria-hidden="true"
          initial={{ width: '15rem' }}
          animate={{ width: '30rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            height: '1.5px',
            background: 'rgba(37,99,235,0.7)',
            boxShadow: '0 0 20px 3px rgba(96,165,250,0.6)',
            zIndex: 50,
            willChange: 'width',
          }}
        />

        {/* Left conic cone — right edge at 50% (center), spreads left */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0.5, width: '15rem' }}
          animate={{ opacity: 1, width: '30rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            right: '50%',
            height: '340px',
            overflow: 'visible',
            backgroundImage: 'conic-gradient(from 70deg at 50% 0%, rgba(37,99,235,0.55), transparent 50%, transparent 100%)',
            zIndex: 0,
            willChange: 'width, opacity',
          }}
        >
          {/* bottom fade */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px',
            background: '#0A0F1E',
            WebkitMaskImage: 'linear-gradient(to top, white, transparent)',
            maskImage: 'linear-gradient(to top, white, transparent)',
          }} />
          {/* left fade */}
          <div style={{
            position: 'absolute', top: 0, bottom: 0, left: 0, width: '160px',
            background: '#0A0F1E',
            WebkitMaskImage: 'linear-gradient(to right, white, transparent)',
            maskImage: 'linear-gradient(to right, white, transparent)',
          }} />
        </motion.div>

        {/* Right conic cone — left edge at 50% (center), spreads right */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0.5, width: '15rem' }}
          animate={{ opacity: 1, width: '30rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            height: '340px',
            overflow: 'visible',
            backgroundImage: 'conic-gradient(from 290deg at 50% 0%, transparent 50%, rgba(37,99,235,0.55) 100%)',
            zIndex: 0,
            willChange: 'width, opacity',
          }}
        >
          {/* right fade */}
          <div style={{
            position: 'absolute', top: 0, bottom: 0, right: 0, width: '160px',
            background: '#0A0F1E',
            WebkitMaskImage: 'linear-gradient(to left, white, transparent)',
            maskImage: 'linear-gradient(to left, white, transparent)',
          }} />
          {/* bottom fade */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px',
            background: '#0A0F1E',
            WebkitMaskImage: 'linear-gradient(to top, white, transparent)',
            maskImage: 'linear-gradient(to top, white, transparent)',
          }} />
        </motion.div>
      </div>

      {/* ── Hero content — centered vertically, slight upward offset ── */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 60, damping: 20 }}
        style={{ willChange: 'transform' }}
        className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-4xl mx-auto -translate-y-10 pt-[calc(var(--nav-h)+3rem)] md:pt-[calc(var(--nav-h)+2rem)]"
      >
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2.5 text-sm text-white/70">
          <span
            className="rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-medium text-white"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            2026
          </span>
          <span style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
            Consultante Marketing &amp; IA &middot; Disponible
          </span>
        </div>

        {/* H1 */}
        <h1
          className="text-white mb-6"
          style={{
            fontFamily: 'Fraunces, Georgia, serif',
            fontWeight: 300,
            fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            maxWidth: '18ch',
          }}
        >
          Automatisez votre business.{' '}
          <em
            style={{
              color: 'transparent',
              background: 'linear-gradient(135deg, #93C5FD 0%, #3B82F6 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              fontStyle: 'italic',
            }}
          >
            Modernisez
          </em>{' '}
          votre croissance.
        </h1>

        {/* Sous-titre */}
        <p
          className="text-white/55 mb-10 leading-relaxed"
          style={{
            fontFamily: 'Satoshi, system-ui, sans-serif',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            maxWidth: '54ch',
          }}
        >
          J&apos;accompagne entrepreneurs, formateurs et entreprises dans
          l&apos;automatisation et le développement de leur activité grâce aux
          funnels de vente, aux sites internet modernes et à l&apos;intégration
          de l&apos;intelligence artificielle.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
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
            Découvrir mes services
          </MagneticButton>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="flex flex-col items-center gap-1">
            <span
              className="font-light text-white"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                lineHeight: 1,
              }}
            >
              <AnimatedCounter target={100} suffix="+" />
            </span>
            <span
              className="text-white/40 uppercase tracking-widest"
              style={{ fontFamily: 'Satoshi, system-ui, sans-serif', fontSize: '0.65rem' }}
            >
              Entrepreneurs formés
            </span>
          </div>

          <div className="w-px h-10 bg-white/10 hidden sm:block" />

          <div className="flex flex-col items-center gap-1">
            <span
              className="font-light text-white"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                lineHeight: 1,
              }}
            >
              <AnimatedCounter target={3} suffix=" ans" />
            </span>
            <span
              className="text-white/40 uppercase tracking-widest"
              style={{ fontFamily: 'Satoshi, system-ui, sans-serif', fontSize: '0.65rem' }}
            >
              D&apos;expertise digitale
            </span>
          </div>

          <div className="w-px h-10 bg-white/10 hidden sm:block" />

          <div className="flex flex-col items-center gap-1">
            <span
              className="font-light text-white"
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                lineHeight: 1,
              }}
            >
              Afrique
            </span>
            <span
              className="text-white/40 uppercase tracking-widest"
              style={{ fontFamily: 'Satoshi, system-ui, sans-serif', fontSize: '0.65rem' }}
            >
              Francophone
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
