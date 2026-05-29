'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { House, Briefcase, Images, GraduationCap, Camera, User } from '@phosphor-icons/react'

const LINKS = [
  { label: 'Accueil',    href: '/',           Icon: House },
  { label: 'Services',   href: '/services',   Icon: Briefcase },
  { label: 'Portfolio',  href: '/portfolio',  Icon: Images },
  { label: 'Formations', href: '/formations', Icon: GraduationCap },
  { label: 'Galerie',    href: '/galerie',    Icon: Camera },
  { label: 'À propos',   href: '/about',      Icon: User },
]

interface DockItemProps {
  link: (typeof LINKS)[0]
  mouseX: ReturnType<typeof useMotionValue<number>>
  isDark: boolean
  isActive: boolean
}

function DockItem({ link, mouseX, isDark, isActive }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { Icon } = link

  // Distance entre le curseur et le centre de cet item (coordonnées viewport)
  const distance = useTransform(mouseX, (val) => {
    const b = ref.current?.getBoundingClientRect() ?? { left: 0, width: 0 }
    return val - b.left - b.width / 2
  })

  // Scale spring : 1 → 1.55 au centre, retombe sur les voisins
  const scaleValue = useTransform(distance, [-120, 0, 120], [1, 1.55, 1])
  const scale = useSpring(scaleValue, { mass: 0.1, stiffness: 180, damping: 14 })

  return (
    <motion.div
      ref={ref}
      style={{ scale, originX: '50%', originY: '100%' }}
      className="relative flex items-end justify-center"
    >
      <Link
        href={link.href}
        className="group flex flex-col items-center gap-0"
        aria-label={link.label}
        aria-current={isActive ? 'page' : undefined}
      >
        {/* Tooltip label au-dessus */}
        <span
          className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          style={{
            fontFamily: 'Satoshi, system-ui, sans-serif',
            background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(15,23,42,0.75)',
            color: isDark ? 'white' : 'white',
            backdropFilter: 'blur(8px)',
          }}
        >
          {link.label}
        </span>

        {/* Icône */}
        <div
          className="w-11 h-11 flex items-center justify-center rounded-[12px] transition-colors duration-200"
          style={{
            background: isActive
              ? isDark
                ? 'rgba(37,99,235,0.28)'
                : 'rgba(37,99,235,0.10)'
              : 'transparent',
            color: isActive
              ? isDark ? '#93C5FD' : '#2563EB'
              : isDark ? 'rgba(255,255,255,0.50)' : 'var(--ink-mute)',
          }}
        >
          <Icon size={22} weight={isActive ? 'fill' : 'regular'} />
        </div>

        {/* Pastille active */}
        {isActive && (
          <span
            className="absolute -bottom-2 w-1 h-1 rounded-full"
            style={{ background: isDark ? '#60A5FA' : '#2563EB' }}
          />
        )}
      </Link>
    </motion.div>
  )
}

export default function DockNav({ isDark }: { isDark: boolean }) {
  const pathname = usePathname()
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="hidden md:flex items-end gap-3 px-4 pb-3 pt-2"
      style={{
        borderRadius: 'var(--radius-xl)',
        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(248,246,241,0.85)',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(229,224,214,0.9)'}`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {LINKS.map((link) => {
        const isActive =
          pathname === link.href ||
          (link.href !== '/' && pathname.startsWith(link.href))
        return (
          <DockItem
            key={link.href}
            link={link}
            mouseX={mouseX}
            isDark={isDark}
            isActive={isActive}
          />
        )
      })}
    </motion.div>
  )
}
