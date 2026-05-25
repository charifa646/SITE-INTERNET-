'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const isLarge = useMotionValue(0)

  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 })
  const size = useSpring(12, { stiffness: 300, damping: 25 })
  const outerSize = useSpring(40, { stiffness: 200, damping: 25 })
  const outerOpacity = useSpring(0.2, { stiffness: 300, damping: 25 })

  const isTouch = useRef(false)

  useEffect(() => {
    isTouch.current = window.matchMedia('(hover: none)').matches
    if (isTouch.current) return

    function onMove(e: MouseEvent) {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    function onEnterInteractive() {
      size.set(8)
      outerSize.set(56)
      outerOpacity.set(0.3)
      isLarge.set(1)
    }

    function onLeaveInteractive() {
      size.set(12)
      outerSize.set(40)
      outerOpacity.set(0.2)
      isLarge.set(0)
    }

    function attachListeners() {
      const interactives = document.querySelectorAll('a, button, [role="button"]')
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', onEnterInteractive)
        el.addEventListener('mouseleave', onLeaveInteractive)
      })
    }

    window.addEventListener('mousemove', onMove)
    attachListeners()

    const observer = new MutationObserver(attachListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
      const interactives = document.querySelectorAll('a, button, [role="button"]')
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
    }
  }, [cursorX, cursorY, size, outerSize, outerOpacity, isLarge])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: outerSize,
          height: outerSize,
          borderRadius: '50%',
          border: '1px solid rgba(37,99,235,0.8)',
          opacity: outerOpacity,
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
      />
      {/* Inner dot */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: 'rgba(37,99,235,1)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
      />
    </>
  )
}
