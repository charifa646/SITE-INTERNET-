import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { testimonialSchema } from './src/sanity/schemaTypes/testimonial'
import { serviceSchema } from './src/sanity/schemaTypes/service'

export default defineConfig({
  name: 'charifa-digital-shift',
  title: 'Digital Shift — CMS',
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'sit9uvmj',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [testimonialSchema, serviceSchema],
  },
})
