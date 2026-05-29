'use client'

import { memo, type ReactNode } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 20,
    },
  },
}

type StaggerRevealProps = {
  children: ReactNode
  className?: string
}

export const StaggerReveal = memo(function StaggerReveal({
  children,
  className = '',
}: StaggerRevealProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
})

type StaggerItemProps = {
  children: ReactNode
  className?: string
}

export const StaggerItem = memo(function StaggerItem({
  children,
  className = '',
}: StaggerItemProps) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
})
