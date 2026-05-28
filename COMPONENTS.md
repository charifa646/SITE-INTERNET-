# COMPONENTS — Intégrations & animations

> **Lire `CLAUDE.md`, `COPYWRITING.md` et `ASSETS.md` avant toute intégration.**
>
> Ce fichier liste chaque composant à intégrer, où, avec quels assets et quel texte. Les **codes complets des composants** sont fournis par Charifa (PDF "Animations") ou viennent de 21st.dev — elle les colle dans Claude Code un par un. Ce fichier dit **comment les customiser** pour le site.

---

## RÈGLES D'ADAPTATION GLOBALES (pour TOUS les composants)

Les composants viennent de démos génériques. Avant intégration, **toujours adapter** :

1. **Couleurs** → remplacer toute couleur démo (lime `#84cc16`, gris, etc.) par la palette Digital Shift :
   - Accent principal : `blue-600 #2563EB`
   - Accent profond : `blue-900 #0D3B99`
   - Accent clair : `blue-400 #60A5FA`
   - Fonds : `bg #F8F6F1`, `bg-soft #F2EFE8`, sombre `navy #1B2A4E` / `#0A0F1E`
2. **Typographie** → titres en `Fraunces` (serif, italiques pour accents), corps en `Satoshi`. Jamais Inter/Roboto.
3. **Textes** → remplacer TOUT texte démo anglais ("Modern Living", "Featured", "Scroll & Roll"…) par le copy FR de `COPYWRITING.md`. Jamais inventer.
4. **Images** → remplacer toute image démo (Unsplash/Pixabay/Aceternity) par les assets de `ASSETS.md`.
5. **Icônes** → lucide-react ou Phosphor. Aucun emoji.
6. **Isolation** → tout composant animé/interactif = `'use client'` en haut.
7. **Responsive** → tester mobile/tablette/desktop. `min-h-[100dvh]` (jamais `h-screen`).
8. **Dépendances** → vérifier `package.json` avant d'importer. `framer-motion` est déjà installé. Pour `motion/react` : utiliser l'import compatible avec la version installée (`framer-motion`).

---

## COMPOSANT 1 — Bucket "Pourquoi moi" ✅ PRÊT

- **Source** : composant `bucket.tsx` (PDF Charifa)
- **Page / section** : Accueil → section "Pourquoi moi", **placé juste après** le sous-titre, sous le titre *Une expertise orientée performance et innovation*
- **Assets** : aucun
- **Texte** : remplacer les 4 chips démo ("Production Ready"…) par les **4 points de COPYWRITING.md** :
  1. Approche stratégique — Chaque projet est pensé selon votre activité, votre cible et le résultat que vous souhaitez atteindre.
  2. Solutions modernes — J'utilise des outils digitaux et IA actuels pour créer des systèmes plus intelligents, plus rapides et plus performants.
  3. Design premium — Je conçois des interfaces modernes, épurées et professionnelles, adaptées à l'image que vous souhaitez transmettre.
  4. Accompagnement personnalisé — Je m'adapte à votre niveau, à vos besoins et à votre rythme pour construire une solution vraiment utile.
- **Adaptations** : icônes Phosphor cohérentes (stratégie, modernité, design, accompagnement). Couleurs des chips → palette bleue. Garder la rotation auto des chips (toutes les 2s).
- **Dépendances** : `@hugeicons/react @hugeicons/core-free-icons` OU remplacer par Phosphor déjà installé (préférer Phosphor pour éviter une dépendance de plus).

---

## COMPOSANT 2 — Feature Spotlight (photo Accueil) ✅ PRÊT

- **Source** : `feature-spotlight.tsx` (PDF Charifa)
- **Page / section** : Accueil → section "Une approche moderne du marketing, de l'automatisation et de l'IA"
- **Asset** : `charifa-photo-accueil.png` (remplace la carte bleue à gauche)
- **Texte** :
  - **SUPPRIMER** la citation *« Je construis mon empire… »* (ne pas la remettre en overlay)
  - Garder le H2 "Une approche moderne…" + les 3 paragraphes + signature (déjà en place à droite)
- **Adaptations** : remplacer "Featured / Modern / Living / Explore" par du contenu cohérent OU n'utiliser que la **partie image** du composant (cadre, corner accents, hover scale) appliquée à sa photo. Couleurs en `foreground` = `ink`. Image à gauche, texte existant à droite.

---

## COMPOSANT 3 — Feature Spotlight (photo À propos) ✅ PRÊT

- **Source** : `feature-spotlight.tsx` (même que composant 2)
- **Page / section** : À propos → Hero
- **Asset** : `charifa-photo-quisuje.png` à **gauche**
- **Texte** : garder le titre "Je suis Charifa Ouedraogo." + lead de COPYWRITING.md à droite
- **Adaptations** : même effet image (cadre + corner accents + hover) que composant 2, pour cohérence entre les 2 photos.

---

## COMPOSANT 4 — Animation image "Approche" ✅ PRÊT

- **Page / section** : Accueil → section "Approche" (credibility bar)
- **Asset** : `charifa-approche.jpg` dans l'espace vide **sous le label APPROCHE (colonne gauche)**
- **Texte** : garder le texte existant "Des solutions digitales conçues pour vous aider à gagner du temps…" à droite
- **Effet** : apparition au scroll (reveal + léger scale), spring `stiffness: 100, damping: 20`. Bords arrondis cohérents avec le reste du site.

---

## COMPOSANT 5 — Interactive Image Accordion (Hero Funnel) ✅ PRÊT

- **Source** : `interactive-image-accordion.tsx` (PDF Charifa)
- **Page / section** : Service **Funnel & Automatisation** → Hero
- **Assets** (remplacer les 5 Unsplash par ces 4) :
  1. `capture-code.png`
  2. `page-code-1.jpg`
  3. `page-code-2.jpg`
  4. `page-code-3.jpg`
- **Texte** : remplacer le titre "Accelerate Gen-AI Tasks…" et le paragraphe par le **H1 + Lead de la page Funnel** (COPYWRITING.md). Bouton "Contact Us" → "Démarrer mon projet" (lien `/contact`). Légendes des images = noms des livrables (Landing, Capture, Vente, etc.).
- **Adaptations** : couleurs bleu, fond `bg`, typo Fraunces/Satoshi.

---

## COMPOSANT 6 — Container Scroll Animation (Hero Sites) ✅ PRÊT

- **Source** : `container-scroll-animation.tsx` (PDF Charifa)
- **Page / section** : Service **Création de Sites** → Hero
- **Asset** : `capture-code.png` (remplace l'image Aceternity)
- **Texte** : remplacer "Unleash the power of / Scroll Animations" par le **H1 + Lead de la page Sites** (COPYWRITING.md)
- **Adaptations** : couleurs bleu, cadre du mockup cohérent avec la DA.

---

## COMPOSANT 7 — Animated Video on Scroll (Hero IA) ⏳ EN ATTENTE VIDÉO

- **Source** : `animated-video-on-scroll.tsx` (PDF Charifa)
- **Page / section** : Service **Intelligence Artificielle** → Hero
- **Asset** : vidéo `(à venir — Charifa fournit)`
- **Texte** : remplacer "Scroll & Roll" + lorem par le **H1 + Lead de la page IA** (COPYWRITING.md). Bouton "Get Started" → "Démarrer mon accompagnement" (lien `/contact`)
- **Adaptations CRITIQUES** :
  - Le bouton démo a une bordure/ombre **lime green `#84cc16`** → remplacer par `blue-600`
  - Le gradient radial bleu foncé du fond est OK (cohérent navy)
- **Statut** : préparer le composant, **brancher la vidéo dès que Charifa la fournit**. Ne pas utiliser de vidéo externe en attendant.

---

## COMPOSANT 8 — Testimonials Floating Cards ✅ PRÊT

- **Source** : section HTML/CSS "TESTIMONIALS" (PDF Charifa)
- **Page / section** : **Portfolio** → section témoignages
- **Assets** : `testi-01.jpg.jpeg` → `testi-06.jpg.jpeg`
- **Texte** : garder le badge "CLIENT LOVE" → traduire en cohérence (ex. "ILS M'ONT FAIT CONFIANCE"), H2 "Ils m'ont fait confiance." (COPYWRITING.md), lead de COPYWRITING.md
- **Adaptations IMPORTANTES** :
  - Le code fourni est en **HTML/CSS pur** → le **convertir en composant React/TSX** pour Next.js
  - Garder l'effet : grille 3 colonnes, cartes flottantes (rotation + float infini), hover lift, glassmorphism bleu
  - Chemins images → adapter au dossier réel (`/testimonials/testi-01.jpg.jpeg`)
  - Responsive : 3 col desktop → 2 col tablette → 1 col mobile
  - **Supprimer** les 3 témoignages texte placeholder du COPYWRITING (remplacés par ces captures)

---

## COMPOSANT 9 — Apple Dock (Navigation desktop) ⚠️ À CADRER

- **Source** : `apple-dock.tsx` (PDF Charifa)
- **Page / section** : Navigation principale, **desktop uniquement**
- **Assets** : aucun (icônes)
- **Comportement** :
  - **Desktop** : dock style Apple avec effet de magnification au survol, pour les 5 entrées (Accueil, Services, Portfolio, Formations, À propos)
  - **Mobile** : garder le **menu hamburger existant** (le dock n'est pas adapté au mobile)
- **Texte** : labels = les 5 entrées de nav. Chaque icône = une page.
- **Adaptations** : couleurs des icônes → nuances de bleu cohérentes (pas le multicolore démo orange/teal/red). Garder le CTA "Réserver un appel" visible.
- **TODO Charifa** : valider l'emplacement du dock sur desktop (en haut centré ? flottant en bas ?). Par défaut : **dock centré en haut**, intégré à la barre de nav.

---

## COMPOSANT 10 — Interactive Bento Gallery (Formation) ⏳ EN ATTENTE PHOTOS

- **Source** : `interactive-bento-gallery.tsx` (PDF Charifa)
- **Page / section** : **Formations** → nouvel espace galerie
- **Assets** : photos formation `(à venir — Charifa upload plus tard)`
- **Texte** : titre + description en FR cohérents avec la page Formations
- **Statut** : **NE PAS implémenter** tant que les photos ne sont pas dans le repo.

---

## ORDRE D'INTÉGRATION RECOMMANDÉ

**Vague 1 — Prêt tout de suite :**
1. Composant 1 (Bucket "Pourquoi moi")
2. Composant 4 (image Approche)
3. Composant 2 (photo Accueil)
4. Composant 3 (photo À propos)
5. Composant 8 (Testimonials)
6. Portfolio restructuré (7 mockups — voir ASSETS.md §3)

**Vague 2 — Prêt (heros services) :**
7. Composant 5 (Hero Funnel accordéon)
8. Composant 6 (Hero Sites scroll)

**Vague 3 — En attente d'assets :**
9. Composant 7 (Hero IA — attend vidéo)
10. Composant 10 (Galerie Formation — attend photos)

**Vague 4 — À cadrer :**
11. Composant 9 (Apple Dock desktop)

---

## CHECKLIST PAR COMPOSANT

Avant de valider chaque intégration :
- [ ] Texte = COPYWRITING.md (zéro invention)
- [ ] Images = ASSETS.md (noms exacts, zéro externe)
- [ ] Couleurs = palette Digital Shift (zéro couleur démo)
- [ ] Typo = Fraunces + Satoshi
- [ ] Aucun emoji
- [ ] `'use client'` sur les composants animés
- [ ] Responsive mobile/tablette/desktop testé
- [ ] Dépendances vérifiées dans package.json
