"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  MotionConfig,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";

// À remplacer avant publication.
const CONTACT_EMAIL = "bonjour@votre-studio.fr";
const CONTACT = `mailto:${CONTACT_EMAIL}?subject=Parlons%20de%20mon%20projet`;

const projects = [
  {
    number: "01",
    name: "AÉSOPHE",
    category: "Architecture & espaces",
    services: "Direction artistique · Expérience digitale",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    description:
      "Une exploration éditoriale où les espaces respirent. Des images généreuses, un rythme calme et une typographie qui laisse parler la matière.",
    className: "project-light",
  },
  {
    number: "02",
    name: "TERRE",
    category: "Hospitalité & art de vivre",
    services: "Identité digitale · Design web",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=85",
    description:
      "Transformer la découverte d'un lieu en première expérience de séjour. Une direction chaleureuse, immersive et résolument contemporaine.",
    className: "project-dark",
  },
];

const services = [
  {
    title: "Direction artistique",
    label: "Poser une signature.",
    text: "Nous définissons un langage visuel qui vous appartient : références, typographies, couleurs et composition. Une direction cohérente, pas une collection d'effets.",
    tags: ["Positionnement visuel", "Moodboards", "Système graphique"],
  },
  {
    title: "Web design",
    label: "Créer l'évidence.",
    text: "Chaque écran guide le regard vers l'essentiel. L'identité, la narration et les parcours sont conçus ensemble pour rendre votre offre plus claire et plus désirable.",
    tags: ["UX & architecture", "Interfaces sur mesure", "Prototypage"],
  },
  {
    title: "Développement créatif",
    label: "Donner vie au détail.",
    text: "Une intégration Next.js soignée, des interactions précises et une expérience pensée pour tous les écrans. Le mouvement sert le contenu, jamais l'inverse.",
    tags: ["Next.js", "Motion design", "Responsive"],
  },
];

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function MagneticLink({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 20 });
  const y = useSpring(my, { stiffness: 220, damping: 20 });

  function reset() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.a
      href={href}
      className={className}
      style={{ x, y }}
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set((event.clientX - rect.left - rect.width / 2) * 0.13);
        my.set((event.clientY - rect.top - rect.height / 2) * 0.13);
      }}
      onPointerLeave={reset}
      onBlur={reset}
    >
      {children}
    </motion.a>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduced ? 0 : 110]
  );

  return (
    <section className="hero shell" ref={ref} aria-labelledby="hero-title">
      <Reveal className="hero-kicker">
        <span className="eyebrow">Studio indépendant · Design & code</span>
        <span className="hero-coordinate">Une autre idée du digital ↘</span>
      </Reveal>

      <div className="hero-composition">
        <h1 id="hero-title" className="hero-title">
          <span className="line-mask">
            <motion.span
              initial={{ y: reduced ? 0 : "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.1,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Pas juste
            </motion.span>
          </span>

          <span className="line-mask">
            <motion.span
              initial={{ y: reduced ? 0 : "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              un <em>site.</em>
            </motion.span>
          </span>

          <span className="line-mask">
            <motion.span
              className="outline-word"
              initial={{ y: reduced ? 0 : "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.1,
                delay: 0.38,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Une stature.
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, rotate: 8, scale: 0.94 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div className="hero-art-image" style={{ y: imageY }} />
          <div className="art-shade" />
          <span className="art-index">FIG. 001 — LA FORME SUIT L&rsquo;AMBITION</span>
          <span className="art-symbol" aria-hidden="true">f.</span>
          <span className="art-caption">Digital, sculpté autrement.</span>
        </motion.div>

        <div className="orbit-badge" aria-hidden="true">
          <ArrowUpRight size={35} strokeWidth={1.3} />
        </div>
      </div>

      <Reveal className="hero-bottom">
        <a href="#projets" className="scroll-link">
          <span className="circle-icon"><ArrowDown size={18} /></span>
          Explorer le travail
        </a>

        <div className="hero-pitch">
          <p>
            Votre ambition mérite mieux qu&rsquo;un site ordinaire.
            Je conçois des expériences digitales à la hauteur
            de ce que vous construisez.
          </p>
          <MagneticLink href={CONTACT} className="text-link">
            Parlons de votre projet <ArrowUpRight size={19} />
          </MagneticLink>
        </div>
      </Reveal>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <Reveal className={`project ${index === 1 ? "project-offset" : ""}`}>
      <details className="project-details">
        <summary>
          <div className={`project-visual ${project.className}`}>
            {/* Images distantes de démonstration ; dimensions réservées en CSS. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={
                index === 0
                  ? "Intérieur architectural aux matières naturelles"
                  : "Chambre chaleureuse aux lignes contemporaines"
              }
              loading="lazy"
              width={1200}
              height={1500}
            />
            <div className="project-overlay" />
            <span className="project-chip">Exploration créative</span>
            <span className="project-wordmark">{project.name}</span>
            <span className="project-open" aria-hidden="true">
              <Plus size={24} strokeWidth={1.4} />
            </span>
            <span className="project-hint">Découvrir l&rsquo;intention</span>
          </div>

          <div className="project-info">
            <div>
              <h3>{project.name}</h3>
              <p>{project.category}</p>
            </div>
            <span className="project-number">/{project.number}</span>
          </div>
        </summary>

        <div className="project-description">
          <span className="eyebrow">{project.services}</span>
          <p>{project.description}</p>
          <p className="concept-note">
            Concept de démonstration — pas une référence client.
          </p>
        </div>
      </details>
    </Reveal>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#contenu">Aller au contenu</a>

      <motion.div
        className="reading-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <header className="site-header shell">
        <a href="#" className="logo" aria-label="FORME, accueil">
          forme<span>®</span>
        </a>

        <nav aria-label="Navigation principale">
          <a href="#projets" className="nav-secondary">Projets</a>
          <a href="#approche" className="nav-secondary">Approche</a>
          <a href={CONTACT} className="nav-contact">
            Un projet en tête ? <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main id="contenu">
        <Hero />

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1, 2, 3].map((item) => (
              <span key={item}>
                STRATÉGIE <i>✳</i> DESIGN <i>✳</i> DÉVELOPPEMENT <i>✳</i>
              </span>
            ))}
          </div>
        </div>

        <section id="projets" className="work-section shell">
          <Reveal className="section-heading">
            <div>
              <span className="eyebrow">01 / Sélection créative</span>
              <h2>Moins de bruit.<br /><em>Plus de présence.</em></h2>
            </div>
            <p className="section-aside">
              Deux explorations visuelles.<br />
              Une même exigence du détail.
            </p>
          </Reveal>

          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="approche" className="approach-section">
          <div className="shell">
            <Reveal className="approach-intro">
              <span className="eyebrow">02 / La conviction</span>
              <h2>
                Le beau attire.<br />
                Le juste <em>convainc.</em>
              </h2>
              <div className="approach-copy">
                <span className="asterisk" aria-hidden="true">✳</span>
                <p>
                  Un site premium ne se résume pas à son apparence.
                  Il exprime votre différence, donne du poids à votre
                  expertise et rend la prochaine étape évidente.
                </p>
              </div>
            </Reveal>

            <div className="services">
              {services.map((service, index) => (
                <Reveal key={service.title}>
                  <details className="service" open={index === 0}>
                    <summary>
                      <span className="service-index">0{index + 1}</span>
                      <h3>{service.title}</h3>
                      <span className="service-label">{service.label}</span>
                      <Plus className="service-plus" size={23} strokeWidth={1.3} />
                    </summary>
                    <div className="service-content">
                      <p>{service.text}</p>
                      <div className="tags">
                        {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section shell">
          <Reveal className="section-heading">
            <div>
              <span className="eyebrow">03 / La collaboration</span>
              <h2>De la vision<br /><em>à la précision.</em></h2>
            </div>
            <p className="section-aside">
              Un interlocuteur direct.<br />
              Un cap partagé à chaque étape.
            </p>
          </Reveal>

          <div className="process-grid">
            {[
              ["01", "Comprendre.", "Votre ambition, votre clientèle, votre différence. Nous posons le bon problème avant de dessiner la solution."],
              ["02", "Concevoir.", "Une direction forte, puis des maquettes détaillées. Vous voyez votre univers prendre forme avant le développement."],
              ["03", "Affiner.", "Développement, interactions et vérifications sur différents écrans. Chaque détail compte jusqu'à la mise en ligne."],
            ].map(([number, title, text]) => (
              <Reveal key={number} className="process-card">
                <span className="eyebrow">{number} /</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="shell">
            <Reveal>
              <span className="eyebrow">
                <span className="status-dot" /> Tout commence par une conversation
              </span>
              <h2>
                Faisons<br />
                <em>forte impression.</em>
              </h2>

              <div className="contact-bottom">
                <p>
                  Parlez-moi de votre marque,<br />
                  de votre ambition et de la suite.
                </p>
                <MagneticLink href={CONTACT} className="contact-button">
                  Discutons de votre projet
                  <span><ArrowUpRight size={26} /></span>
                </MagneticLink>
              </div>
            </Reveal>

            <footer className="site-footer">
              <a href="#" className="logo" aria-label="Revenir en haut">
                forme<span>®</span>
              </a>
              <span>Studio indépendant. Regard singulier.</span>
              <a href={CONTACT}>{CONTACT_EMAIL} <ArrowUpRight size={14} /></a>
            </footer>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}
