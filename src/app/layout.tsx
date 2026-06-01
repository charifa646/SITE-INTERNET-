import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import { Suspense } from 'react'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: {
    default: 'Charifa Ouedraogo · Digital Shift',
    template: '%s · Charifa Ouedraogo',
  },
  description:
    'Consultante marketing & IA en Afrique Francophone. Funnels de vente, automatisation, création de sites performants et formations adaptées à votre activité.',
  keywords: ['marketing digital', 'automatisation', 'intelligence artificielle', 'funnels', 'Afrique', 'Burkina Faso'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Charifa Ouedraogo · Digital Shift',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <CustomCursor />
        <Suspense>
          <Nav />
        </Suspense>
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
