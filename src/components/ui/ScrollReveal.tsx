'use client'

import { motion, Variants, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

type Variant = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'zoomIn' | 'fade'

const variants: Record<Variant, Variants> = {
  fadeUp:    { hidden: { opacity: 0, y: 36 },  visible: { opacity: 1, y: 0 } },
  fadeDown:  { hidden: { opacity: 0, y: -28 }, visible: { opacity: 1, y: 0 } },
  fadeLeft:  { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 48 },  visible: { opacity: 1, x: 0 } },
  zoomIn:    { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
  fade:      { hidden: { opacity: 0 },          visible: { opacity: 1 } },
}

// Variantes sans mouvement pour prefers-reduced-motion
const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

interface ScrollRevealProps {
  children: ReactNode
  variant?: Variant
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'li'
}

export function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  className,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const reduced = useReducedMotion()
  const MotionTag = motion[Tag]

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.12 }}
      variants={reduced ? reducedVariants : variants[variant]}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 18,
        delay: reduced ? 0 : delay,
      }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </MotionTag>
  )
}

// Conteneur pour les listes staggerées
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } },
}
const reducedItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
}

export function ScrollRevealList({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.08 }}
      variants={reduced ? {} : containerVariants}
      className={className}
    >
      {children}
    </motion.ul>
  )
}

export function ScrollRevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  return (
    <motion.li
      variants={reduced ? reducedItemVariants : itemVariants}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.li>
  )
}
