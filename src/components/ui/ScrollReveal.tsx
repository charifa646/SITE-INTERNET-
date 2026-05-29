'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Variant = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'zoomIn' | 'fade'

const variants: Record<Variant, { hidden: object; visible: object }> = {
  fadeUp:    { hidden: { opacity: 0, y: 36 },  visible: { opacity: 1, y: 0 } },
  fadeDown:  { hidden: { opacity: 0, y: -28 }, visible: { opacity: 1, y: 0 } },
  fadeLeft:  { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 48 },  visible: { opacity: 1, x: 0 } },
  zoomIn:    { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
  fade:      { hidden: { opacity: 0 },         visible: { opacity: 1 } },
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
  const MotionTag = motion[Tag]
  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.12 }}
      variants={variants[variant]}
      transition={{ type: 'spring', stiffness: 80, damping: 18, delay }}
      className={className}
      style={{ willChange: 'transform' }}
    >
      {children}
    </MotionTag>
  )
}

// Conteneur pour les listes staggerées
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
}

export function ScrollRevealList({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.ul>
  )
}

export function ScrollRevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.li variants={itemVariants} className={className}>
      {children}
    </motion.li>
  )
}
