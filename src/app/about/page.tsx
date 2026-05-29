import type { Metadata } from 'next'
import CtaFinal from '@/components/sections/CtaFinal'
import { StaggerReveal, StaggerItem } from '@/components/sections/StaggerReveal'
import SpotlightImage from '@/components/ui/SpotlightImage'
import GridBackground from '@/components/ui/GridBackground'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Consultante marketing spécialisée en funnels de vente, automatisation business et intelligence artificielle. Mon histoire, ma vision.',
}

const stats = [
  { num: '2023', label: 'Début dans le digital' },
  { num: '100+', label: 'Entrepreneurs formés' },
  { num: 'Afrique', label: 'Francophone' },
  { num: 'CEO', label: 'Digital Shift' },
]

const storyParagraphs = [
  'On m\'a dit que la médecine serait mon avenir.',
  'À 16 ans, j\'étais en fac de médecine. C\'était un parcours prestigieux, mais ce n\'était pas le mien. Deux ans plus tard, j\'ai tout quitté pour suivre un appel plus fort : l\'entrepreneuriat digital.',
  'Avec une bourse, un vieux téléphone et beaucoup de courage, j\'ai commencé à me former. Je voulais créer, structurer, lancer et innover.',
  'Aujourd\'hui, j\'aide les entrepreneurs, formateurs et entreprises à vendre en ligne, automatiser leur activité et intégrer l\'intelligence artificielle dans leur quotidien professionnel.',
  'Mon objectif est simple : démocratiser le digital et l\'IA pour permettre à plus d\'entrepreneurs et d\'entreprises de gagner du temps, de l\'argent et en efficacité.',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero — texte seulement */}
      <section className="relative bg-[#0A0F1E] pt-[calc(var(--nav-h)+4rem)] pb-16 px-6 overflow-hidden">
        <GridBackground variant="dark" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="eyebrow mb-6">À propos</p>
          <h1 className="text-white">
            Je suis{' '}
            <em style={{ fontStyle: 'italic', color: '#60A5FA' }}>
              Charifa Ouedraogo
            </em>
            .
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            Consultante marketing spécialisée en funnels de vente, automatisation business et intelligence artificielle.
          </p>
        </div>
      </section>

      {/* Histoire — photo sticky à gauche (après le hero), paragraphes à droite */}
      <section className="bg-[#0A0F1E] py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">

          {/* Colonne sticky : photo + stats */}
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)] flex flex-col gap-8">
            <SpotlightImage
              src="/images/charifa-photo-quisuje.png"
              alt="Charifa Ouedraogo"
              index="01"
              animation="fade"
              priority
            />

            <div
              className="rounded-[var(--radius-xl)] p-8 md:p-10 flex flex-col gap-8"
              style={{
                background: 'rgba(13,27,78,0.5)',
                border: '1px solid rgba(37,99,235,0.2)',
              }}
            >
              <p className="eyebrow" style={{ color: '#60A5FA' }}>Parcours</p>

              <blockquote
                className="italic leading-snug"
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                  fontWeight: 300,
                  color: 'white',
                  letterSpacing: '-0.015em',
                }}
              >
                &ldquo;Je construis mon empire à ma façon — et je m&apos;élève.&rdquo;
              </blockquote>

              <div className="flex flex-col gap-4">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="flex items-baseline gap-4 pb-4"
                    style={{ borderBottom: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
                  >
                    <span
                      className="flex-shrink-0"
                      style={{
                        fontFamily: 'Fraunces, Georgia, serif',
                        fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                        fontWeight: 300,
                        color: '#60A5FA',
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                      }}
                    >
                      {s.num}
                    </span>
                    <span
                      className="text-sm"
                      style={{ fontFamily: 'Satoshi, system-ui, sans-serif', color: 'rgba(255,255,255,0.65)' }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Story body */}
          <StaggerReveal className="flex flex-col gap-6">
            {storyParagraphs.map((para, i) => (
              <StaggerItem key={i}>
                <p
                  className={i === 0
                    ? 'italic text-white leading-snug'
                    : 'text-white/65 leading-[1.8]'
                  }
                  style={{
                    fontFamily: i === 0 ? 'Fraunces, Georgia, serif' : 'Satoshi, system-ui, sans-serif',
                    fontSize: i === 0 ? 'clamp(1.2rem, 2.4vw, 1.5rem)' : 'clamp(1rem, 1.6vw, 1.05rem)',
                    fontWeight: i === 0 ? 300 : 400,
                    maxWidth: '56ch',
                  }}
                >
                  {para}
                </p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <CtaFinal
        eyebrow="Travaillons ensemble"
        heading="Travaillons <em>ensemble</em>."
        body="Je serai ravie d'échanger avec vous sur vos projets et vos ambitions digitales."
        primaryLabel="Me contacter"
        primaryHref="/contact"
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
    </>
  )
}
