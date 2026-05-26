import Image from 'next/image'
import { StaggerReveal, StaggerItem } from '@/components/sections/StaggerReveal'

type Testimonial = {
  name: string
  role: string
  quote: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Aïssata K.',
    role: 'Formatrice en ligne',
    quote:
      'Charifa a structuré mon offre de A à Z. En moins de 3 semaines, j\'avais un funnel complet et mes premières ventes automatisées. Son regard stratégique est inestimable.',
    avatar: 'https://ui-avatars.com/api/?name=Aissata+K&background=1B2A4E&color=fff&size=80',
  },
  {
    name: 'Mahamadou S.',
    role: 'Coach business',
    quote:
      'Son approche IA m\'a fait gagner 15h par semaine. J\'ai découvert des outils que je ne connaissais pas et appris à les intégrer dans mon activité de façon concrète.',
    avatar: 'https://ui-avatars.com/api/?name=Mahamadou+S&background=1B2A4E&color=fff&size=80',
  },
  {
    name: 'Fatim D.',
    role: 'PME Ouagadougou',
    quote:
      'Notre nouveau site et funnel webinar ont changé l\'image de notre entreprise. Les clients nous trouvent facilement et la crédibilité de la marque a décollé.',
    avatar: 'https://ui-avatars.com/api/?name=Fatim+D&background=1B2A4E&color=fff&size=80',
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-[#F8F6F1] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow mb-4">Témoignages</p>
        <h2 className="text-ink mb-16">
          Ce que disent mes <em>clients</em>.
        </h2>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="rounded-[var(--radius-lg)] bg-white border border-[var(--line)] p-8 h-full flex flex-col gap-6 shadow-card hover:shadow-card-hover transition-shadow">
                <p className="text-ink-soft leading-relaxed flex-1" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-ink">{t.name}</p>
                    <p className="text-xs text-ink-mute">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
