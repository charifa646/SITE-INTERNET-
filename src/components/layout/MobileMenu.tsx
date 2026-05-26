'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

type NavLink = { label: string; href: string }

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  links: NavLink[]
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close on route change
  useEffect(() => {
    onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 32 }}
            style={{ willChange: 'transform' }}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#F8F6F1] shadow-2xl md:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-[var(--nav-h)] border-b border-[var(--line)]">
              <span className="text-sm font-medium text-ink" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                Menu
              </span>
              <button onClick={onClose} aria-label="Fermer le menu" className="p-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-1 p-4 flex-1">
              {links.map((link, i) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href))
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, type: 'spring', stiffness: 200, damping: 24 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-[var(--radius-sm)] text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-ink hover:bg-[var(--bg-soft)] hover:text-ink'
                      }`}
                      style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* CTA */}
            <div className="p-6 border-t border-[var(--line)]">
              <Link
                href="/contact"
                className="block w-full text-center rounded-[var(--radius)] bg-navy px-6 py-3.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
              >
                Réserver un appel
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
