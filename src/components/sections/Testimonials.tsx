import GridBackground from '@/components/ui/GridBackground'
import { StaggerTestimonials } from '@/components/ui/stagger-testimonials'
import { getTestimonials } from '@/sanity/client'
import type { Testimonial } from '@/components/ui/stagger-testimonials'

export default async function Testimonials() {
  const sanityData = await getTestimonials()

  // Mappe le format Sanity → format interne du composant.
  // L'initiale est dérivée de l'auteur si le champ est vide dans Sanity.
  const testimonials: Testimonial[] = sanityData.map((t, i) => ({
    tempId: i,
    quote: t.quote,
    by: t.author,
    initial: t.initial || t.author.charAt(0).toUpperCase(),
  }))

  return (
    <section className="relative bg-[#0A0F1E] py-24 px-6 overflow-hidden">
      <GridBackground variant="dark" />

      {/* Halo bleu d'accent — discret (pas un glow générique) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(59,130,246,0.10), transparent 35%), radial-gradient(circle at bottom right, rgba(37,99,235,0.12), transparent 42%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <p
          className="eyebrow mb-4"
          style={{ '--blue-600': '#60A5FA' } as React.CSSProperties}
        >
          Témoignages
        </p>

        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-white">Ils m&apos;ont fait confiance.</h2>
          <p
            className="max-w-sm"
            style={{
              fontFamily: 'Satoshi, system-ui, sans-serif',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            Des entrepreneurs, formateurs et entreprises accompagnés dans leur
            transformation digitale.
          </p>
        </div>

        {/* Carrousel — données Sanity si disponibles, sinon fallback hardcodé */}
        <StaggerTestimonials testimonials={testimonials.length > 0 ? testimonials : undefined} />
      </div>
    </section>
  )
}
