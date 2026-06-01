import { defineType, defineField } from 'sanity'

export const serviceSchema = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Étiquette (badge)',
      type: 'string',
      description: 'Ex: "Pour coachs & formateurs en ligne", "En présentiel"',
    }),
    defineField({
      name: 'slug',
      title: 'Identifiant de page',
      type: 'string',
      description:
        "Détermine le lien ET l'icône. Valeurs possibles : funnels, ia, sites, formation. À ne pas modifier.",
      options: {
        list: [
          { title: 'Funnels & Automatisation', value: 'funnels' },
          { title: 'Intelligence Artificielle', value: 'ia' },
          { title: 'Création de Sites', value: 'sites' },
          { title: 'Formation & Consulting', value: 'formation' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Service phare ?',
      type: 'boolean',
      initialValue: false,
      description: 'Met le service en avant (carte sombre, badge ★ Service phare)',
    }),
    defineField({
      name: 'order',
      title: "Ordre d'affichage",
      type: 'number',
      initialValue: 0,
      description:
        "Important : laissez Funnels en 1er, puis IA, Sites, et Formation en dernier (la page Services dépend de cet ordre).",
    }),
  ],
  orderings: [
    {
      title: "Ordre d'affichage",
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'tag' },
  },
})
