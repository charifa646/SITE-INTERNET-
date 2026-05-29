'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import MagneticButton from '@/components/ui/MagneticButton'
import GridBackground from '@/components/ui/GridBackground'
import { SITE_CONFIG } from '@/config/links'

type CtaFinalProps = {
  eyebrow?: string
  heading?: string
  body?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  bgImage?: string
}

const CtaFinal = memo(function CtaFinal({
  eyebrow = 'Parlons de votre projet',
  heading = 'Donnez une nouvelle <em>dimension</em> à votre activité.',
  body = 'Vous souhaitez automatiser votre business, améliorer votre présence digitale ou intégrer l\'IA dans votre activité ? Contactez-moi pour échanger sur vos besoins.',
  primaryLabel = 'Réserver un appel',
  primaryHref = '/contact',
  secondaryLabel = 'Voir tous les services',
  secondaryHref = '/services',
  bgImage,
}: CtaFinalProps) {
  return (
    <section className="relative px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 70, damping: 18 }}
          style={{ willChange: 'transform' }}
          className="relative overflow-hidden rounded-[var(--radius-xl)] bg-[#0A0F1E] px-8 py-16 md:px-16 md:py-20"
        >
          <GridBackground variant="dark" />

          {bgImage && (
            <div className="absolute inset-0 z-0">
              <Image
                src={bgImage}
                alt=""
                fill
                aria-hidden="true"
                style={{ objectFit: 'cover', opacity: 0.06, mixBlendMode: 'luminosity' }}
              />
            </div>
          )}

          {/* Radial gradients */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 30% 100%, rgba(37,99,235,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 0%, rgba(96,165,250,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Mesh blobs */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.45, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-4rem',
              right: '-4rem',
              width: '24rem',
              height: '24rem',
              borderRadius: '50%',
              background: 'rgba(59,130,246,0.08)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
              zIndex: 0,
              willChange: 'transform',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-6">
            <span className="eyebrow" style={{ color: '#60A5FA' }}>
              {eyebrow}
            </span>

            <h2
              className="text-white"
              style={{ maxWidth: '18ch' }}
              dangerouslySetInnerHTML={{
                __html: heading.replace(/<em>(.*?)<\/em>/g, '<em style="color:#60A5FA">$1</em>'),
              }}
            />

            <p className="max-w-lg text-white/55 text-base leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
              {body}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <MagneticButton
                href={primaryHref}
                as="a"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-blue-600 px-7 py-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                {primaryLabel}
              </MagneticButton>
              <MagneticButton
                href={secondaryHref}
                as="a"
                className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-white/15 bg-white/5 backdrop-blur-sm px-7 py-4 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              >
                {secondaryLabel}
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default CtaFinal
