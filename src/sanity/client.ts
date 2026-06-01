import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// Le client est null si les variables d'env sont absentes (ex: build Vercel
// sans configuration). Les fonctions de fetch retournent [] dans ce cas
// et le site affiche ses données hardcodées sans planter.
const sanityClient =
  projectId && dataset
    ? createClient({
        projectId,
        dataset,
        apiVersion: '2024-01-01',
        useCdn: true,
      })
    : null

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
  if (!sanityClient) return []
  try {
    const results = await sanityClient.fetch<SanityTestimonial[]>(
      TESTIMONIALS_QUERY,
      {},
      { next: { revalidate: 60 } }
    )
    return results ?? []
  } catch {
    return []
  }
}
