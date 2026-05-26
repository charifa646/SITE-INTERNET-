'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type MagneticButtonProps = {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  href?: string
  as?: 'button' | 'a'
  target?: string
  rel?: string
}

export default function MagneticButton({
  children,
  className = '',
  style,
  onClick,
  href,
  as: Tag = 'button',
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const x = useSpring(rawX, { stiffness: 150, damping: 15 })
  const y = useSpring(rawY, { stiffness: 150, damping: 15 })

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    rawX.set(dx * 0.25)
    rawY.set(dy * 0.25)
  }

  function handleMouseLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  const MotionTag = motion[Tag as 'button' | 'a']

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLButtonElement & HTMLAnchorElement>}
      style={{ x, y, willChange: 'transform', ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      href={href as string}
      target={target}
      rel={rel}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
