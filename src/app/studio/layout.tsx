// Métadonnées et viewport fournis par next-sanity pour le Studio.
// Ce layout isole la route /studio : pas de Nav, Footer ni CustomCursor.
export { metadata, viewport } from 'next-sanity/studio'

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
