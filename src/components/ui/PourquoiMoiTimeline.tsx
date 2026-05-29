'use client'

import { Target, Zap, PenLine, Users } from 'lucide-react'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'

const whyData = [
  {
    id: 1,
    num: '01',
    title: 'Approche stratégique',
    content:
      'Chaque projet est pensé selon votre activité, votre cible et le résultat que vous souhaitez atteindre.',
    icon: Target,
    relatedIds: [2, 4],
    energy: 100,
  },
  {
    id: 2,
    num: '02',
    title: 'Solutions modernes',
    content:
      "J'utilise des outils digitaux et IA actuels pour créer des systèmes plus intelligents, plus rapides et plus performants.",
    icon: Zap,
    relatedIds: [1, 3],
    energy: 90,
  },
  {
    id: 3,
    num: '03',
    title: 'Design premium',
    content:
      "Je conçois des interfaces modernes, épurées et professionnelles, adaptées à l'image que vous souhaitez transmettre.",
    icon: PenLine,
    relatedIds: [2, 4],
    energy: 85,
  },
  {
    id: 4,
    num: '04',
    title: 'Accompagnement personnalisé',
    content:
      "Je m'adapte à votre niveau, à vos besoins et à votre rythme pour construire une solution vraiment utile.",
    icon: Users,
    relatedIds: [1, 3],
    energy: 95,
  },
]

export default function PourquoiMoiTimeline() {
  return <RadialOrbitalTimeline timelineData={whyData} />
}
