# CLAUDE.md — Instructions pour Claude Code

> **Lis ce fichier en entier avant toute modification du repo. Il a autorité sur toutes les autres instructions, sauf demande explicite de la propriétaire (Charifa) dans le chat.**

---

## 0. PROJET

Site vitrine premium pour **Charifa Ouedraogo**, consultante Marketing & IA basée à Ouagadougou, Burkina Faso. Marque : **Digital Shift**. Cible : entrepreneurs / formateurs en ligne / PME en Afrique francophone.

Stack : **Next.js 14 (App Router) · React 18 · TypeScript · Tailwind v3 · Framer Motion 11 · @phosphor-icons/react**.

---

## 1. RÈGLE D'OR — LE COPYWRITING

**Le fichier `COPYWRITING.md` à la racine est la SEULE source de vérité pour TOUT le texte du site.**

### Interdictions absolues
- ❌ **NE PAS paraphraser, raccourcir, "améliorer" ou reformuler** le contenu de COPYWRITING.md, même si tu trouves un texte "trop long", "redondant" ou "perfectible".
- ❌ **NE PAS inventer de chiffres** (taux de conversion, années d'expérience, nombre de clients, etc.). Si une stat n'est pas dans COPYWRITING.md, elle ne doit pas apparaître sur le site.
- ❌ **NE PAS inventer de témoignages, noms de clients, ou citations.** Si Charifa n'a pas fourni de témoignages réels, utilise EXACTEMENT les 3 témoignages placeholder du COPYWRITING.md (Aïssata K., Mahamadou S., Fatim D.) et place un commentaire HTML `<!-- TODO: remplacer par témoignages réels -->`.
- ❌ **NE PAS inventer de floating cards type "+47% conversion", "IA intégrée"** — ces éléments décoratifs du hero sont fictifs. Si tu mets des floating cards, elles doivent rester génériques visuellement (sans chiffres précis non vérifiés) OU reprendre les vrais éléments du hero stats.
- ❌ **NE PAS ajouter de meta description "Afrique Francophone"** ou autres formulations marketing inventées dans les meta-tags. Utiliser strictement la meta description de COPYWRITING.md.

### Obligations
- ✅ **Toujours ouvrir COPYWRITING.md AVANT de toucher à une page** et copier-coller le contenu tel quel.
- ✅ Conserver les italiques (`*mot*` en markdown → `<em>mot</em>` en JSX) qui sont des choix éditoriaux délibérés.
- ✅ Conserver les puces, listes et hiérarchies (H1/H2/H3) telles que définies.
- ✅ Si un texte semble dupliqué entre pages (ex: section Services présente sur Accueil ET sur /services), c'est volontaire. Le réutiliser à l'identique.

### Si un texte manque
Si COPYWRITING.md ne couvre pas une section que tu veux créer : **demander à Charifa dans le chat avant d'écrire quoi que ce soit**. Ne jamais "boucher le trou" avec du copy inventé.

---

## 2. STRUCTURE DU SITE (immuable)

### Navigation (5 entrées exactement)
```
Accueil  ·  Services  ·  Portfolio  ·  Formations  ·  À propos
```

Ne PAS ajouter "Contact" à la nav principale (le CTA "Réserver un appel" remplit ce rôle). La page `/contact` existe mais elle est accessible uniquement via les CTAs.

### Arborescence des pages
```
/                          → Accueil
/services                  → Index des 4 services
/services/funnels          → Service phare détaillé
/services/ia               → Service IA détaillé
/services/sites            → Service Sites détaillé
/services/formation        → Service Formation & Consulting détaillé
/portfolio                 → Funnels + témoignages
/formations                → 2 formations en présentiel
/about                     → Histoire perso de Charifa
/contact                   → Calendly + WhatsApp
```

### Hiérarchie des services
**Service phare : Funnels & Automatisation** — doit être mis en avant visuellement (carte plus grande, badge "★ Service phare", couleur navy plutôt que blanche). Les 3 autres services sont d'importance égale entre eux.

---

## 3. DIRECTION ARTISTIQUE

### Identité Digital Shift 2026
- **Logo** : initiales `CO` (Charifa Ouedraogo) ou `DS` selon contexte, sur fond dégradé bleu (#1E88FF → #0D3B99) avec léger effet "pixels/circuits"
- **Mood** : premium éditorial + tech accessible
- **Inspiration** : Vercel, Linear, Framer, Apple — pas d'AI slop générique

### Palette (déjà configurée dans `tailwind.config.ts`)
| Token | Valeur | Usage |
|-------|--------|-------|
| `bg` | `#F8F6F1` | Fond crème principal |
| `bg-soft` | `#F2EFE8` | Fond crème alternatif (sections) |
| `dark-bg` | `#0A0F1E` | Fond sombre (CTA finals, service phare card) |
| `navy` | `#1B2A4E` | Texte foncé secondaire + fond cards premium |
| `ink` | `#0F172A` | Texte principal |
| `ink-soft` | `#334155` | Texte secondaire |
| `ink-mute` | `#64748B` | Texte tertiaire / labels |
| `line` | `#E5E0D6` | Bordures principales |
| `blue-600` | `#2563EB` | Accent principal (CTA, em, hover) |
| `blue-900` | `#0D3B99` | Accent profond (dégradés) |
| `blue-400` | `#60A5FA` | Accent clair (dark backgrounds) |

### Typographie
- **Titres (H1-H4)** : `Fraunces` (serif éditorial, weight 300-400, italiques pour les accents)
- **Body / UI** : `Satoshi` (sans-serif moderne, weight 400-600)
- ❌ Pas d'Inter, pas de Poppins, pas de Roboto
- Tracking serré sur les titres (`tracking-tight` ou `-0.025em`)

### Espacement (visual density: 4 — airy)
- Container principal : `max-w-5xl mx-auto` (plus posé que `max-w-7xl`)
- Padding section : `py-24` minimum, `py-32` pour sections respiration
- Padding cartes : `p-7` à `p-10`
- Border-radius : utiliser les tokens custom `rounded-[var(--radius)]` (20px), `rounded-[var(--radius-lg)]` (28px), `rounded-[var(--radius-xl)]` (40px)

---

## 4. CONFIGURATION TASTE-SKILL

Le skill `design-taste-frontend` (dans `.claude/skills/`) s'applique avec les valeurs ajustées pour ce site :

- **DESIGN_VARIANCE: 7** — asymétrique modéré, pas chaotique
- **MOTION_INTENSITY: 6** — fluide, premium, sans surcharge
- **VISUAL_DENSITY: 3** — art gallery mode, très aéré

### Respecter aussi
- **ANTI-EMOJI POLICY** : aucun emoji dans le code, l'UI ou les textes. Remplacer par icônes Phosphor ou SVG. *(Exception : le caractère `★` peut être conservé pour le service phare car c'est un symbole typographique, pas un emoji emoji.)*
- **THE LILA BAN** : pas de glow violet/bleu générique "AI". Le bleu Digital Shift est un bleu de marque assumé, pas un glow.
- **ANTI-CENTER BIAS** : pas de hero centré classique. Privilégier asymétrie, split-screen, left-aligned avec asset à droite.
- **Spring physics** : `type: "spring", stiffness: 100, damping: 20` pour toutes les animations Framer Motion.
- **min-h-[100dvh]** au lieu de `h-screen` pour les sections full-height.

---

## 5. COMPOSANTS PREMIUM (déjà créés, à utiliser)

Composants existants dans `src/components/ui/` :
- `MagneticButton` — pour les CTAs principaux
- `TiltCard` — pour les cards de services (rotation 3D au survol)
- `SpotlightCard` — pour les cards qui s'illuminent sous le curseur
- `CustomCursor` — curseur personnalisé
- `AnimatedCounter` — pour les stats (100+, 3 ans, etc.) — **vérifier qu'il est bien configuré pour `100` et `3`, pas `0`**
- `GridBackground` — fond grille (variants `light` / `dark`)

Sections existantes dans `src/components/sections/` :
- `HeroLamp`, `PageHero`, `CtaFinal`, `Testimonials`, `StaggerReveal`

**Réutiliser ces composants** plutôt que d'en créer de nouveaux quand ils couvrent le besoin.

---

## 6. CTAs ET LIENS EXTERNES

Tous les CTAs principaux pointent vers Calendly ou WhatsApp. Placeholder actuels :
- `https://calendly.com/TO_BE_ADDED`
- `https://wa.me/TO_BE_ADDED`

Centraliser dans `src/config/links.ts`. Charifa fournira les vrais liens après lancement.

**Liens internes** (par défaut) :
- "Réserver un appel" → `/contact`
- "Découvrir mes services" → `/services`
- "En savoir plus" (carte service X) → `/services/{slug}`
- "Voir des réalisations" → `/portfolio`
- "Voir les formations" → `/formations`

---

## 7. RESPONSIVE

- Mobile-first strict
- Breakpoints standards Tailwind (`sm 640`, `md 768`, `lg 1024`, `xl 1280`)
- Sur mobile (< 768px) : layouts asymétriques se replient en colonne unique (`grid-cols-1`)
- Padding container mobile : `px-6` minimum
- Police body mobile : 16px minimum pour lisibilité
- Aucun débordement horizontal (`overflow-x-hidden` sur `<body>` si besoin)

---

## 8. WORKFLOW DE MODIFICATION

Avant tout changement :
1. Lire ce fichier (`CLAUDE.md`)
2. Lire `COPYWRITING.md` pour les pages concernées
3. Lire le skill `design-taste-frontend.md` si modification visuelle
4. Vérifier les composants existants avant d'en créer de nouveaux
5. **Toujours afficher un diff résumé des changements proposés AVANT de modifier les fichiers**, sauf si Charifa demande explicitement "fais directement"

### Erreurs à corriger en priorité sur le site actuel
1. **Hero sous-titre** dans `HeroLamp.tsx` — remplacer le texte inventé par le sous-titre officiel de COPYWRITING.md
2. **About preview** sur `page.tsx` — remplacer les paragraphes inventés ("Basée à Ouagadougou...") par les paragraphes officiels ("Je suis Charifa Ouedraogo...")
3. **Stats hero** affichent `0+` au lieu de `100+` — vérifier la prop `from`/`to` du `AnimatedCounter`
4. **Floating cards hero** ("+47% conversion", "IA intégrée") — soit retirer, soit remplacer par des éléments non chiffrés (la stat inventée doit disparaître)
5. **Section "Pourquoi moi"** sur Accueil — remplacer les descriptions inventées par celles de COPYWRITING.md
6. **Section "Services"** sur Accueil et `/services` — vérifier que les descriptions correspondent EXACTEMENT à COPYWRITING.md
7. **Page À propos** — vérifier que l'histoire (médecine → entrepreneuriat) est bien présente avec les 5 paragraphes officiels
8. **Page Portfolio** — vérifier que les 6 projets sont les funnels (pas des apps SaaS comme FunnelCheck AI ou Logo Animator Studio)

---

## 9. CHECKLIST AVANT COMMIT

- [ ] Aucun texte sur le site qui ne soit pas dans COPYWRITING.md
- [ ] Aucun chiffre inventé (stats, taux, durées)
- [ ] Italiques préservés là où ils sont prévus dans COPYWRITING.md
- [ ] Aucun emoji dans l'UI ni les textes
- [ ] Toutes les pages sont responsive (testé mobile, tablette, desktop)
- [ ] Pas de `console.error` ni de warnings React dans la console
- [ ] Composants animés (`useState` continu, motion infinies) isolés en `'use client'`
- [ ] Liens externes vérifiés (Calendly, WhatsApp — placeholders OK)

---

## 10. CONTEXTE DE TRAVAIL

Charifa travaille en français. Toutes les communications, commits et commentaires de code peuvent être en français OU en anglais (préférer l'anglais pour le code, le français pour le contenu et les commits).

Charifa privilégie un workflow itératif : modifications ciblées section par section, plutôt que tout reconstruire. Toujours lui proposer un diff résumé avant d'agir, sauf demande explicite.

Tagline officielle : **Apprends · Applique · Encaisse** (pour Digital Shift produits, pas le site vitrine).
Tagline 2026 perso : *« Je construis mon empire à ma façon — et je m'élève. »* (intégrée dans plusieurs sections).
