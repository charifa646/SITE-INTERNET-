import Image from 'next/image'
import GridBackground from '@/components/ui/GridBackground'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

type PageHeroProps = {
  eyebrow?: string
  heading: string
  lead?: string
  cta?: React.ReactNode
  dark?: boolean
  bgImage?: string
  bgVideo?: string
}

export default function PageHero({ eyebrow, heading, lead, cta, dark = false, bgImage, bgVideo }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden pt-[calc(var(--nav-h)+4rem)] pb-24 px-6 ${
        dark ? 'bg-[#0A0F1E]' : 'bg-[#F8F6F1]'
      }`}
    >
      {dark && <GridBackground variant="dark" />}

      {bgVideo && (
        <>
          <video
            src={bgVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{
              opacity: dark ? 0.15 : 0.12,
              mixBlendMode: dark ? 'luminosity' : 'multiply',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background: dark
                ? 'linear-gradient(to bottom, rgba(10,15,30,0.6) 0%, transparent 40%, transparent 60%, rgba(10,15,30,0.7) 100%)'
                : 'linear-gradient(to bottom, rgba(248,246,241,0.7) 0%, transparent 40%, transparent 60%, rgba(248,246,241,0.8) 100%)',
            }}
          />
        </>
      )}

      {bgImage && !bgVideo && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={bgImage}
              alt=""
              fill
              aria-hidden="true"
              style={{
                objectFit: 'cover',
                opacity: dark ? 0.08 : 0.10,
                mixBlendMode: dark ? 'luminosity' : 'multiply',
              }}
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background: dark
                ? 'linear-gradient(to bottom, rgba(10,15,30,0.6) 0%, transparent 40%, transparent 60%, rgba(10,15,30,0.7) 100%)'
                : 'linear-gradient(to bottom, rgba(248,246,241,0.7) 0%, transparent 40%, transparent 60%, rgba(248,246,241,0.8) 100%)',
            }}
          />
        </>
      )}

      <div className="relative z-10 max-w-5xl mx-auto">
        {eyebrow && (
          <ScrollReveal variant="fadeDown" delay={0}>
            <p className="eyebrow mb-6">{eyebrow}</p>
          </ScrollReveal>
        )}
        <ScrollReveal variant="fadeUp" delay={0.05}>
          <h1
            className={dark ? 'gradient-text-dark' : 'text-ink'}
            dangerouslySetInnerHTML={{
              __html: heading.replace(
                /<em>(.*?)<\/em>/g,
                dark
                  ? '<em style="font-style:italic;color:#60A5FA">$1</em>'
                  : '<em style="font-style:italic;color:var(--blue-600)">$1</em>'
              ),
            }}
          />
        </ScrollReveal>
        {lead && (
          <ScrollReveal variant="fadeUp" delay={0.12}>
            <p
              className={`mt-6 max-w-2xl text-lg leading-relaxed ${
                dark ? 'text-white/55' : 'text-ink-soft'
              }`}
              style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
            >
              {lead}
            </p>
          </ScrollReveal>
        )}
        {cta && (
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div className="mt-10">{cta}</div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
