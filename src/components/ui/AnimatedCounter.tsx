'use client'

import { memo, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'

type AnimatedCounterProps = {
  target: number
  suffix?: string
  className?: string
  duration?: number
}

const AnimatedCounter = memo(function AnimatedCounter({
  target,
  suffix = '',
  className = '',
  duration = 2,
}: AnimatedCounterProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, margin: '0px' })

  useEffect(() => {
    if (isInView) {
      count.set(0)
      const controls = animate(count, target, {
        duration,
        ease: [0.16, 1, 0.3, 1],
      })
      return () => controls.stop()
    }
  }, [isInView, count, target, duration])

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
})

export default AnimatedCounter
