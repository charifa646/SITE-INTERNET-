'use client'

import { memo, useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type TiltCardProps = {
  children: ReactNode
  className?: string
}

const TiltCard = memo(function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const rawRotateX = useMotionValue(0)
  const rawRotateY = useMotionValue(0)
  const scale = useMotionValue(1)

  const rotateX = useSpring(rawRotateX, { stiffness: 300, damping: 30 })
  const rotateY = useSpring(rawRotateY, { stiffness: 300, damping: 30 })
  const springScale = useSpring(scale, { stiffness: 300, damping: 30 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rawRotateX.set(-(py - 0.5) * 16)
    rawRotateY.set((px - 0.5) * 16)
    scale.set(1.02)
  }

  function handleMouseLeave() {
    rawRotateX.set(0)
    rawRotateY.set(0)
    scale.set(1)
  }

  return (
    <div style={{ perspective: '1000px' }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale: springScale,
          willChange: 'transform',
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
})

export default TiltCard
