'use client'

import * as React from 'react'
import {
  HTMLMotionProps,
  MotionValue,
  Variants,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion'
import { cn } from '@/lib/utils'

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>
}

interface ContainerInsetProps extends HTMLMotionProps<'div'> {
  insetYRange?: [number, number]
  insetXRange?: [number, number]
  roundednessRange?: [number, number]
}

interface ContainerAnimatedProps extends HTMLMotionProps<'div'> {
  inputRange?: number[]
  outputRange?: number[]
}

const SPRING_CONFIG = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
}

const fadeVariants: Variants = {
  hidden: { filter: 'blur(10px)', opacity: 0 },
  visible: { filter: 'blur(0px)', opacity: 1 },
}

const VideoScrollContext = React.createContext<ContainerScrollContextValue | undefined>(undefined)

function useVideoScrollContext() {
  const ctx = React.useContext(VideoScrollContext)
  if (!ctx) throw new Error('Must be used within VideoContainerScroll')
  return ctx
}

export const VideoContainerScroll: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start center', 'end end'],
  })

  return (
    <VideoScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn('relative min-h-[100dvh] w-full', className)}
        {...props}
      >
        {children}
      </div>
    </VideoScrollContext.Provider>
  )
}
VideoContainerScroll.displayName = 'VideoContainerScroll'

export const VideoContainerAnimated = React.forwardRef<HTMLDivElement, ContainerAnimatedProps>(
  (
    {
      className,
      transition,
      style,
      inputRange = [0.2, 0.8],
      outputRange = [80, 0],
      ...props
    },
    ref
  ) => {
    const { scrollYProgress } = useVideoScrollContext()
    const y = useTransform(scrollYProgress, inputRange, outputRange)
    return (
      <motion.div
        ref={ref}
        className={cn('', className)}
        variants={fadeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        style={{ y, ...style }}
        transition={{ ...SPRING_CONFIG, ...transition }}
        {...props}
      />
    )
  }
)
VideoContainerAnimated.displayName = 'VideoContainerAnimated'

export const VideoContainerSticky = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('sticky left-0 top-0 min-h-[100dvh] w-full', className)}
    {...props}
  />
))
VideoContainerSticky.displayName = 'VideoContainerSticky'

export const HeroVideoPlayer = React.forwardRef<HTMLVideoElement, HTMLMotionProps<'video'>>(
  ({ style, className, ...props }, ref) => {
    const { scrollYProgress } = useVideoScrollContext()
    const scale = useTransform(scrollYProgress, [0, 0.8], [0.7, 1])

    return (
      <motion.video
        ref={ref}
        className={cn('relative z-10 size-auto max-h-full max-w-full', className)}
        autoPlay
        muted
        loop
        playsInline
        style={{ scale, ...style }}
        {...props}
      />
    )
  }
)
HeroVideoPlayer.displayName = 'HeroVideoPlayer'

export const VideoContainerInset = React.forwardRef<HTMLDivElement, ContainerInsetProps>(
  (
    {
      className,
      style,
      insetYRange = [45, 0],
      insetXRange = [45, 0],
      roundednessRange = [1000, 16],
      ...props
    },
    ref
  ) => {
    const { scrollYProgress } = useVideoScrollContext()
    const insetY = useTransform(scrollYProgress, [0, 0.8], insetYRange)
    const insetX = useTransform(scrollYProgress, [0, 0.8], insetXRange)
    const roundedness = useTransform(scrollYProgress, [0, 1], roundednessRange)
    const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${roundedness}px)`

    return (
      <motion.div
        ref={ref}
        className={cn('pointer-events-none overflow-hidden', className)}
        style={{ clipPath, ...style }}
        {...props}
      />
    )
  }
)
VideoContainerInset.displayName = 'VideoContainerInset'
