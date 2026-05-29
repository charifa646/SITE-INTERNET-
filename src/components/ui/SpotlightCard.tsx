'use client'

import { memo, useRef, type ReactNode } from 'react'

type SpotlightCardProps = {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

const SpotlightCard = memo(function SpotlightCard({
  children,
  className = '',
  style,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
    el.style.setProperty('--spot-opacity', '1')
  }

  function handleMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--spot-opacity', '0')
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      style={{
        border: '1px solid rgba(37,99,235,0.15)',
        '--spot-x': '50%',
        '--spot-y': '50%',
        '--spot-opacity': '0',
        ...style,
      } as React.CSSProperties}
    >
      {/* Spotlight radial — rendu uniquement via CSS, zéro re-render */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 'var(--spot-opacity)' as string,
          background: 'radial-gradient(280px circle at var(--spot-x) var(--spot-y), rgba(37,99,235,0.08), transparent 70%)',
          transition: 'opacity 0.2s ease',
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  )
})

export default SpotlightCard
