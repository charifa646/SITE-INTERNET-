/**
 * Seed script: pre-fills Sanity with current services + testimonials.
 * Usage:  node scripts/seed-sanity.mjs <WRITE_TOKEN>
 * The token needs Editor permission (sanity.io/manage → API → Tokens).
 */

const PROJECT_ID = 'sit9uvmj'
const DATASET = 'production'
const API_VERSION = '2024-01-01'

const TOKEN = process.argv[2]
if (!TOKEN) {
  console.error('Usage: node scripts/seed-sanity.mjs <WRITE_TOKEN>')
  process.exit(1)
}

const SERVICES = [
  {
    _id: 'service-funnels',
    _type: 'service',
    title: 'Funnels & Automatisation',
    desc: 'Création de tunnels de vente performants, systèmes de conversion et automatisations marketing pour vendre votre offre de manière plus fluide et plus efficace. Conçu pour coachs, formateurs et entrepreneurs qui veulent vendre de façon automatisée.',
    tag: 'Pour coachs & formateurs en ligne',
    slug: 'funnels',
    featured: true,
    order: 1,
  },
  {
    _id: 'service-ia',
    _type: 'service',
    title: 'Intelligence Artificielle',
    desc: "Accompagnement à l'intégration de l'IA pour automatiser des tâches et améliorer votre productivité.",
    tag: 'Entrepreneurs & entreprises',
    slug: 'ia',
    featured: false,
    order: 2,
  },
  {
    _id: 'service-sites',
    _type: 'service',
    title: 'Création de Sites Internet',
    desc: 'Sites vitrines modernes et landing pages premium pour renforcer votre image en ligne et présenter vos services avec clarté.',
    tag: 'Sites premium',
    slug: 'sites',
    featured: false,
    order: 3,
  },
  {
    _id: 'service-formation',
    _type: 'service',
    title: 'Formation & Consulting',
    desc: "Accompagnement personnalisé en présentiel pour aider entrepreneurs et équipes à mieux comprendre l'IA et la communication digitale sur les réseaux.",
    tag: 'En présentiel',
    slug: 'formation',
    featured: false,
    order: 4,
  },
]

const TESTIMONIALS = [
  {
    _id: 'testimonial-01',
    _type: 'testimonial',
    quote: 'Bonjour la grande guerrière ! Waouh, super boulot ! Je te félicite déjà pour avoir respecté le délai. Tu as fait preuve d'une grande personnalité.',
    author: 'Cliente accompagnée',
    initial: 'C',
    order: 1,
  },
  {
    _id: 'testimonial-02',
    _type: 'testimonial',
    quote: 'Génial, un gros merci ! T'es top.',
    author: 'Pamela',
    initial: 'P',
    order: 2,
  },
  {
    _id: 'testimonial-03',
    _type: 'testimonial',
    quote: 'Gratitude pour votre présence dans ma vie. Je vais vous envoyer mes copines !',
    author: 'Cliente accompagnée',
    initial: 'C',
    order: 3,
  },
  {
    _id: 'testimonial-04',
    _type: 'testimonial',
    quote: 'Vous êtes ma pépite. Merci !',
    author: 'Cliente accompagnée',
    initial: 'C',
    order: 4,
  },
  {
    _id: 'testimonial-05',
    _type: 'testimonial',
    quote: "Oui, une m'a déjà demandé un appel ! J'ai partagé votre lien, j'ai dit que vous travaillez sur devis.",
    author: 'Cliente accompagnée',
    initial: 'C',
    order: 5,
  },
  {
    _id: 'testimonial-06',
    _type: 'testimonial',
    quote: "Oui, t'as fait du super boulot vraiment.",
    author: 'Cliente accompagnée',
    initial: 'C',
    order: 6,
  },
]

const mutations = [...SERVICES, ...TESTIMONIALS].map((doc) => ({
  createOrReplace: doc,
}))

const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`

console.log(`Envoi de ${mutations.length} documents vers Sanity...`)

const res = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({ mutations }),
})

const json = await res.json()

if (!res.ok) {
  console.error('Erreur Sanity :', JSON.stringify(json, null, 2))
  process.exit(1)
}

const results = json.results ?? []
const created = results.filter((r) => r.operation === 'create').length
const updated = results.filter((r) => r.operation === 'update').length

console.log(`✓ ${created} créés, ${updated} mis à jour.`)
console.log('Vérifier sur : https://sit9uvmj.sanity.studio/structure')
