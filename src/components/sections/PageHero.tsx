import GridBackground from '@/components/ui/GridBackground'

type PageHeroProps = {
  eyebrow?: string
  heading: string
  lead?: string
  cta?: React.ReactNode
  dark?: boolean
}

export default function PageHero({ eyebrow, heading, lead, cta, dark = false }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden pt-[calc(var(--nav-h)+4rem)] pb-20 px-6 ${
        dark ? 'bg-[#0A0F1E]' : 'bg-[#F8F6F1]'
      }`}
    >
      {dark && <GridBackground variant="dark" />}
      <div className="relative z-10 max-w-5xl mx-auto">
        {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
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
        {lead && (
          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed ${
              dark ? 'text-white/55' : 'text-ink-soft'
            }`}
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
          >
            {lead}
          </p>
        )}
        {cta && <div className="mt-10">{cta}</div>}
      </div>
    </section>
  )
}
