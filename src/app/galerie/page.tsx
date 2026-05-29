import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CtaFinal from '@/components/sections/CtaFinal'
import InteractiveBentoGallery, { MediaItemType } from '@/components/ui/interactive-bento-gallery'

export const metadata: Metadata = {
  title: 'Galerie',
  description:
    'Retour en images sur les événements FORGE 2026 et SOJEA 2026.',
}

// Spans adaptés à l'orientation réelle des photos pour éviter le recadrage/zoom.
// Cellule verticale pour les portraits, horizontale pour les paysages.
const PORTRAIT = 'row-span-4 sm:row-span-3 md:col-span-1 md:row-span-3'
const PAYSAGE = 'row-span-2 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-3'

// FORJE 2026 — im1/im3/im4/im5 paysage, im2 portrait
const forgeOrientation = [PAYSAGE, PORTRAIT, PAYSAGE, PAYSAGE, PAYSAGE]
const forgeItems: MediaItemType[] = [1, 2, 3, 4, 5].map((n, i) => ({
  id: n,
  type: 'image',
  title: 'FORJE 2026',
  desc: '',
  url: `/gallerie/forge-2026/forje-2026-im${n}.jpeg`,
  span: forgeOrientation[i],
}))

// SOJEA 2026 — les 4 photos sont en portrait
const sojeaItems: MediaItemType[] = [1, 2, 3, 4].map((n) => ({
  id: n,
  type: 'image',
  title: 'SOJEA 2026',
  desc: '',
  url: `/gallerie/sojea-2026/sojea-2026-im${n}.jpeg`,
  span: PORTRAIT,
}))

export default function GaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        heading="Quelques <em>moments</em> capturés."
        lead="Retour en images sur les événements et rencontres marquantes."
      />

      {/* FORGE 2026 */}
      <section className="bg-[#F8F6F1] pt-8 pb-4 overflow-hidden">
        <InteractiveBentoGallery
          eyebrow="Événement"
          title="FORJE 2026."
          description="Glissez pour réorganiser · Cliquez pour agrandir"
          mediaItems={forgeItems}
        />
      </section>

      {/* SOJEA 2026 */}
      <section className="bg-[#F2EFE8] py-4 overflow-hidden">
        <InteractiveBentoGallery
          eyebrow="Événement"
          title="SOJEA 2026."
          description="Glissez pour réorganiser · Cliquez pour agrandir"
          mediaItems={sojeaItems}
        />
      </section>

      <CtaFinal
        eyebrow="Travaillons ensemble"
        heading="Et si on créait votre prochain <em>projet</em> ?"
        body="Funnels, automatisation, IA ou formation — parlons de vos ambitions digitales."
        primaryLabel="Réserver un appel"
        primaryHref="/contact"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  )
}
