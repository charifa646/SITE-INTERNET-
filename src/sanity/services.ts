import { sanityClient } from './client'

export type ServiceData = {
  num: string
  title: string
  desc: string
  tag: string
  slug: string
  href: string
  featured: boolean
}

// Fallback = textes EXACTS de COPYWRITING.md. Utilisés si Sanity est vide
// ou inaccessible. Ordre obligatoire : funnels, ia, sites, formation.
export const FALLBACK_SERVICES: ServiceData[] = [
  {
    num: '01',
    title: 'Funnels & Automatisation',
    desc: 'Création de tunnels de vente performants, systèmes de conversion et automatisations marketing pour vendre votre offre de manière plus fluide et plus efficace. Conçu pour coachs, formateurs et entrepreneurs qui veulent vendre de façon automatisée.',
    tag: 'Pour coachs & formateurs en ligne',
    slug: 'funnels',
    href: '/services/funnels',
    featured: true,
  },
  {
    num: '02',
    title: 'Intelligence Artificielle',
    desc: "Accompagnement à l'intégration de l'IA pour automatiser des tâches et améliorer votre productivité.",
    tag: 'Entrepreneurs & entreprises',
    slug: 'ia',
    href: '/services/ia',
    featured: false,
  },
  {
    num: '03',
    title: 'Création de Sites Internet',
    desc: 'Sites vitrines modernes et landing pages premium pour renforcer votre image en ligne et présenter vos services avec clarté.',
    tag: 'Sites premium',
    slug: 'sites',
    href: '/services/sites',
    featured: false,
  },
  {
    num: '04',
    title: 'Formation & Consulting',
    desc: "Accompagnement personnalisé en présentiel pour aider entrepreneurs et équipes à mieux comprendre l'IA et la communication digitale sur les réseaux.",
    tag: 'En présentiel',
    slug: 'formation',
    href: '/services/formation',
    featured: false,
  },
]

type RawService = {
  title: string
  desc: string
  tag?: string
  slug: string
  featured?: boolean
  order: number
}

const SERVICES_QUERY = `
  *[_type == "service"] | order(order asc) {
    title,
    desc,
    tag,
    slug,
    featured,
    order
  }
`

export async function getServices(): Promise<ServiceData[]> {
  if (!sanityClient) return FALLBACK_SERVICES
  try {
    const results = await sanityClient.fetch<RawService[]>(
      SERVICES_QUERY,
      {},
      { next: { revalidate: 60 } }
    )
    if (!results || results.length === 0) return FALLBACK_SERVICES
    return results.map((s, i) => ({
      num: String(i + 1).padStart(2, '0'),
      title: s.title,
      desc: s.desc,
      tag: s.tag ?? '',
      slug: s.slug,
      href: `/services/${s.slug}`,
      featured: s.featured ?? false,
    }))
  } catch {
    return FALLBACK_SERVICES
  }
}
