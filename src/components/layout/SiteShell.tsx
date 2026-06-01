'use client'

import { Suspense } from 'react'
import { usePathname } from 'next/navigation'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio = pathname?.startsWith('/studio')

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <>
      <Suspense>
        <Nav />
      </Suspense>
      <main>{children}</main>
      <Footer />
    </>
  )
}
