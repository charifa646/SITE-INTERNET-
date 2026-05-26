'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import MobileMenu from '@/components/layout/MobileMenu'
import MagneticButton from '@/components/ui/MagneticButton'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Formations', href: '/formations' },
  { label: 'À propos', href: '/about' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === '/'

  const isDark = isHome && !scrolled

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={false}
        animate={
          isDark
            ? { backgroundColor: 'rgba(10,15,30,0)', borderBottomColor: 'rgba(255,255,255,0)' }
            : { backgroundColor: 'rgba(248,246,241,0.85)', borderBottomColor: 'rgba(229,224,214,0.8)' }
        }
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl"
        style={{
          height: 'var(--nav-h)',
          boxShadow: isDark ? 'none' : 'inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        <nav className="max-w-6xl mx-auto h-full flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Charifa Ouedraogo - Accueil">
            <div
              className="flex items-center justify-center rounded-[10px] text-sm font-semibold transition-colors"
              style={{
                width: 38,
                height: 38,
                background: isDark ? 'rgba(255,255,255,0.08)' : 'var(--navy)',
                color: isDark ? 'white' : 'white',
                fontFamily: 'Fraunces, Georgia, serif',
              }}
            >
              CO
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span
                className="text-sm font-medium"
                style={{
                  color: isDark ? 'rgba(255,255,255,0.9)' : 'var(--ink)',
                  fontFamily: 'Satoshi, system-ui, sans-serif',
                }}
              >
                Charifa <span style={{ opacity: 0.4 }}>&middot;</span> Ouedraogo
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium rounded-[var(--radius-sm)] transition-colors"
                    style={{
                      color: isDark
                        ? isActive
                          ? 'white'
                          : 'rgba(255,255,255,0.6)'
                        : isActive
                        ? 'var(--ink)'
                        : 'var(--ink-mute)',
                      fontFamily: 'Satoshi, system-ui, sans-serif',
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-[var(--radius-sm)]"
                        style={{
                          background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(37,99,235,0.07)',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <MagneticButton
              href="/contact"
              as="a"
              className="hidden md:inline-flex items-center gap-2 rounded-[var(--radius)] px-5 py-2.5 text-sm font-medium transition-colors"
              style={{
                background: isDark ? 'rgba(255,255,255,0.1)' : 'var(--navy)',
                color: 'white',
                fontFamily: 'Satoshi, system-ui, sans-serif',
              } as React.CSSProperties}
            >
              Réserver un appel
            </MagneticButton>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              <span
                className="block w-6 h-px transition-all"
                style={{ background: isDark ? 'white' : 'var(--ink)' }}
              />
              <span
                className="block w-4 h-px transition-all"
                style={{ background: isDark ? 'white' : 'var(--ink)' }}
              />
              <span
                className="block w-6 h-px transition-all"
                style={{ background: isDark ? 'white' : 'var(--ink)' }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </>
  )
}
