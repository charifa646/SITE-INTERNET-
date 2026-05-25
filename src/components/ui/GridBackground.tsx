type GridBackgroundProps = {
  variant?: 'light' | 'dark'
}

export default function GridBackground({ variant = 'light' }: GridBackgroundProps) {
  const isLight = variant === 'light'

  const gridColor = isLight
    ? 'rgba(37,99,235,0.07)'
    : 'rgba(255,255,255,0.04)'

  const gridSize = isLight ? '40px' : '50px'

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
        backgroundSize: `${gridSize} ${gridSize}`,
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }}
    />
  )
}
