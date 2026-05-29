'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface TimelineItem {
  id: number
  title: string
  num: string
  content: string
  icon: React.ElementType
  relatedIds: number[]
  energy: number
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[]
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})
  const [rotationAngle, setRotationAngle] = useState<number>(0)
  const [autoRotate, setAutoRotate] = useState<boolean>(true)
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({})
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const orbitRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({})

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({})
      setActiveNodeId(null)
      setPulseEffect({})
      setAutoRotate(true)
    }
  }

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {}
      Object.keys(prev).forEach((key) => { newState[parseInt(key)] = false })
      newState[id] = !prev[id]

      if (!prev[id]) {
        setActiveNodeId(id)
        setAutoRotate(false)
        const related = timelineData.find((i) => i.id === id)?.relatedIds ?? []
        const pulse: Record<number, boolean> = {}
        related.forEach((r) => { pulse[r] = true })
        setPulseEffect(pulse)

        const nodeIndex = timelineData.findIndex((i) => i.id === id)
        const targetAngle = (nodeIndex / timelineData.length) * 360
        setRotationAngle(270 - targetAngle)
      } else {
        setActiveNodeId(null)
        setAutoRotate(true)
        setPulseEffect({})
      }
      return newState
    })
  }

  useEffect(() => {
    if (!autoRotate) return
    const timer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)))
    }, 50)
    return () => clearInterval(timer)
  }, [autoRotate])

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360
    const radius = 170
    const radian = (angle * Math.PI) / 180
    const x = radius * Math.cos(radian)
    const y = radius * Math.sin(radian)
    const zIndex = Math.round(100 + 50 * Math.cos(radian))
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)))
    return { x, y, zIndex, opacity }
  }

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false
    const active = timelineData.find((i) => i.id === activeNodeId)
    return active?.relatedIds.includes(itemId) ?? false
  }

  return (
    <div
      className="w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: '480px' }}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-2xl flex items-center justify-center" style={{ height: '480px' }}>
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: '1000px' }}
        >
          {/* Center orb — palette Digital Shift */}
          <div className="absolute flex items-center justify-center z-10" style={{ width: 64, height: 64 }}>
            <div
              className="absolute rounded-full animate-ping opacity-60"
              style={{ width: 80, height: 80, border: '1px solid rgba(37,99,235,0.3)' }}
            />
            <div
              className="absolute rounded-full animate-ping opacity-40"
              style={{ width: 96, height: 96, border: '1px solid rgba(37,99,235,0.15)', animationDelay: '0.5s' }}
            />
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse"
              style={{
                background: 'linear-gradient(135deg, #1B2A4E 0%, #2563EB 60%, #60A5FA 100%)',
                boxShadow: '0 0 32px rgba(37,99,235,0.4)',
              }}
            >
              <div className="w-8 h-8 rounded-full" style={{ background: 'rgba(248,246,241,0.9)', backdropFilter: 'blur(4px)' }} />
            </div>
          </div>

          {/* Orbit ring */}
          <div
            className="absolute rounded-full"
            style={{ width: 340, height: 340, border: '1px solid rgba(27,42,78,0.12)' }}
          />

          {/* Nodes */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length)
            const isExpanded = expandedItems[item.id]
            const isRelated = isRelatedToActive(item.id)
            const isPulsing = pulseEffect[item.id]
            const Icon = item.icon

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id) }}
              >
                {/* Glow ring */}
                <div
                  className={cn('absolute rounded-full', isPulsing && 'animate-pulse')}
                  style={{
                    background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
                    width: `${item.energy * 0.4 + 40}px`,
                    height: `${item.energy * 0.4 + 40}px`,
                    left: `-${(item.energy * 0.4 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.4 + 40 - 40) / 2}px`,
                  }}
                />

                {/* Node button */}
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300',
                    isExpanded
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-lg scale-150'
                      : isRelated
                      ? 'bg-[#60A5FA]/30 text-[#1B2A4E] border-[#60A5FA] animate-pulse'
                      : 'bg-[#F8F6F1] text-[#1B2A4E] border-[#1B2A4E]/30 hover:border-[#2563EB]'
                  )}
                >
                  <Icon size={16} />
                </div>

                {/* Label */}
                <div
                  className={cn(
                    'absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wide transition-all duration-300',
                    isExpanded ? 'text-[#0F172A] scale-110' : 'text-[#64748B]'
                  )}
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif', left: '50%', transform: isExpanded ? 'translateX(-50%) scale(1.1)' : 'translateX(-50%)' }}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 border-[#E5E0D6] bg-white/95 backdrop-blur-sm shadow-[0_12px_40px_-10px_rgba(27,42,78,0.25)] overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-[#1B2A4E]/30" />
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Badge className="text-xs bg-[#1B2A4E] text-white border-transparent">
                          {item.num}
                        </Badge>
                        <span className="text-xs text-[#94A3B8]" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                          Digital Shift
                        </span>
                      </div>
                      <CardTitle className="mt-2">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-[#64748B] leading-relaxed" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                      <p>{item.content}</p>
                      <div className="mt-4 pt-3 border-t border-[#E5E0D6]">
                        <div className="flex justify-between items-center text-xs mb-1.5 text-[#94A3B8]">
                          <span className="flex items-center gap-1">
                            <Zap size={10} />
                            Impact
                          </span>
                          <span style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: '#E5E0D6' }}>
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${item.energy}%`,
                              background: 'linear-gradient(90deg, #1B2A4E 0%, #2563EB 100%)',
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
