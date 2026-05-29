'use client'

import * as React from 'react'
import {
  HTMLMotionProps,
  MotionValue,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion'

import { cn } from '@/lib/utils'

interface CardStickyProps extends HTMLMotionProps<'div'> {
  arrayLength: number
  index: number
  incrementY?: number
  incrementZ?: number
  incrementRotation?: number
}

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>
}

const ContainerScrollContext = React.createContext<
  ContainerScrollContextValue | undefined
>(undefined)

function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext)
  if (context === undefined) {
    throw new Error(
      'useContainerScrollContext must be used within a ContainerScroll'
    )
  }
  return context
}

export const ContainerScroll: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ children, className, style, ...props }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start center', 'end end'],
  })

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn('relative w-full', className)}
        style={{ perspective: '1000px', ...style }}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  )
}
ContainerScroll.displayName = 'ContainerScroll'

export const CardsContainer: React.FC<
  React.HTMLAttributes<HTMLDivElement>
> = ({ children, className, style, ...props }) => {
  return (
    <div
      className={cn('relative', className)}
      style={{ perspective: '1000px', ...style }}
      {...props}
    >
      {children}
    </div>
  )
}
CardsContainer.displayName = 'CardsContainer'

export const CardTransformed = React.forwardRef<
  HTMLDivElement,
  CardStickyProps
>(
  (
    {
      arrayLength,
      index,
      incrementY = 10,
      incrementZ = 10,
      incrementRotation = -index + 90,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const { scrollYProgress } = useContainerScrollContext()

    const start = index / (arrayLength + 1)
    const end = (index + 1) / (arrayLength + 1)
    const range = React.useMemo(() => [start, end], [start, end])
    const rotateRange = [range[0] - 1.5, range[1] / 1.5]

    const y = useTransform(scrollYProgress, range, ['0%', '-180%'])
    const rotate = useTransform(scrollYProgress, rotateRange, [
      incrementRotation,
      0,
    ])
    const transform = useMotionTemplate`translateZ(${
      index * incrementZ
    }px) translateY(${y}) rotate(${rotate}deg)`

    const dx = useTransform(scrollYProgress, rotateRange, [4, 0])
    const dy = useTransform(scrollYProgress, rotateRange, [4, 12])
    const blur = useTransform(scrollYProgress, rotateRange, [2, 24])
    const alpha = useTransform(scrollYProgress, rotateRange, [0.12, 0.2])
    // Ombre portée en navy Digital Shift (pas le noir générique de la démo).
    const filter = useMotionTemplate`drop-shadow(${dx}px ${dy}px ${blur}px rgba(27,42,78,${alpha}))`

    return (
      <motion.div
        layout="position"
        ref={ref}
        style={{
          top: index * incrementY,
          transform,
          backfaceVisibility: 'hidden',
          zIndex: (arrayLength - index) * incrementZ,
          filter,
          ...style,
        }}
        className={cn('absolute size-full will-change-transform', className)}
        {...props}
      />
    )
  }
)
CardTransformed.displayName = 'CardTransformed'
