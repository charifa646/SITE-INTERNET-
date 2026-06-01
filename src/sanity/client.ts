import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true,
})

export type SanityTestimonial = {
  _id: string
  quote: string
  author: string
  initial?: string
  order: number
}

const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    author,
    initial,
    order
  }
`

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  try {
    const results = await sanityClient.fetch<SanityTestimonial[]>(
      TESTIMONIALS_QUERY,
      {},
      { next: { revalidate: 60 } }
    )
    return results ?? []
  } catch {
    // Retourne un tableau vide si Sanity est inaccessible — le composant
    // utilisera alors les données hardcodées comme fallback.
    return []
  }
}
