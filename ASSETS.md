# ASSETS — Inventaire des images & médias

> **RÈGLE CRITIQUE POUR CLAUDE CODE**
> 1. Utiliser les chemins EXACTS de ce fichier. Une seule différence = image cassée.
> 2. Avant de câbler une image, localiser son chemin exact dans `/public`. Ne jamais inventer de chemin.
> 3. Ne jamais utiliser d'image externe (Unsplash, Pixabay, Aceternity) ni de placeholder : toutes les images du site viennent de cette liste.

---

## Structure de dossiers

```
public/
  images/        → photos de Charifa (⏳ à uploader)
  funnel-hero/   → captures pour le hero du service Funnel & Sites
  portfolio/     → mockups & résultats funnels
  testimonials/  → captures témoignages clients
  videos/        → vidéos (hero IA, à venir)
```

---

## 1. PHOTOS DE CHARIFA

| Fichier | Chemin | Emplacement sur le site | Effet |
|---------|--------|------------------------|-------|
| `charifa-approche.jpg` | `/images/charifa-approche.jpg` | **Accueil** — Section "Approche" (credibility bar), colonne gauche | Animation au scroll |
| `charifa-photo-accueil.png` | `/images/charifa-photo-accueil.png` | **Accueil** — Section "Une approche moderne du marketing…", remplace la carte bleue à gauche | Feature Spotlight (hover + corner accents) |
| `charifa-photo-quisuje.png` | `/images/charifa-photo-quisuje.png` | **À propos** — Hero, photo à gauche, titre "Je suis Charifa…" à droite | Feature Spotlight |
| `pourquoi-im.jpg` | `/images/pourquoi-im.jpg` | **Accueil** — Section "Pourquoi moi" | Décoration / fond |
| `im-service-hero.jpg` | `/images/im-service-hero.jpg` | **Services** — Hero ou section services | Décoration |
| `background-im-formation.jpg` | `/images/background-im-formation.jpg` | **Formations** — Section ou background | Décoration |

> **Note importante** : dans la section "Une approche moderne…", la citation *« Je construis mon empire à ma façon — et je m'élève. »* est **SUPPRIMÉE** (la photo `charifa-photo-accueil.png` prend toute la place de l'ancienne carte bleue).

Statut : ⏳ Tous ces fichiers sont à uploader par Charifa.

---

## 2. HERO FUNNEL & HERO SITES

| Fichier | Chemin | Emplacement | Composant |
|---------|--------|------------|-----------|
| `capture-code.png` | `/funnel-hero/capture-code.png` | **Service Funnel** (accordéon) + **Service Sites** (scroll) | Interactive Accordion / Container Scroll |
| `page-code-1.jpg` | `/funnel-hero/page-code-1.jpg` | **Service Funnel** — accordéon, image 2 | Interactive Accordion |
| `page-code-2.jpg` | `/funnel-hero/page-code-2.jpg` | **Service Funnel** — accordéon, image 3 | Interactive Accordion |
| `page-code-3.jpg` | `/funnel-hero/page-code-3.jpg` | **Service Funnel** — accordéon, image 4 | Interactive Accordion |

Statut : ✅ page-code-1/2/3.jpg présents · ⏳ capture-code.png à uploader

---

## 3. PORTFOLIO — MOCKUPS & RÉSULTATS FUNNELS

> La section Portfolio est **restructurée** autour de ces 7 visuels réels. Le H1, le lead, les témoignages et le CTA de la page Portfolio **restent** ceux de COPYWRITING.md.

| Fichier | Chemin | Titre | Type |
|---------|--------|-------|------|
| `projet-funnel-landingpage.png` | `/portfolio/projet-funnel-landingpage.png` | Landing Page | Mockup |
| `projet-funnel-pagedecapture.png` | `/portfolio/projet-funnel-pagedecapture.png` | Page de Capture | Mockup |
| `projet-funnel-pdv-pdc.png` | `/portfolio/projet-funnel-pdv-pdc.png` | Page de Vente + Page de Commande | Mockup |
| `projet-funnel-portfolio.jpeg` | `/portfolio/projet-funnel-portfolio.jpeg` | Portfolio Funnel | Mockup |
| `projet-funnel-site.png` | `/portfolio/projet-funnel-site.png` | Site Internet Complet | Mockup |
| `projet-resultatfunnel-01.jpeg` | `/portfolio/projet-resultatfunnel-01.jpeg` | Résultat Funnel — Performance 01 | Résultat |
| `projet-resultatfunnel-02.jpeg` | `/portfolio/projet-resultatfunnel-02.jpeg` | Résultat Funnel — Performance 02 | Résultat |

Statut : ✅ Tous présents · **TODO Charifa** : valider/personnaliser les titres des 7 projets.

---

## 4. TÉMOIGNAGES CLIENTS

> Section témoignages de la page **Portfolio** (floating cards). Ce sont des **captures d'écran** de retours clients réels.
> Ces captures **remplacent** les 3 témoignages texte placeholder (Aïssata K., Mahamadou S., Fatim D.) du COPYWRITING.md.

| Fichier | Chemin |
|---------|--------|
| `testi-01.jpeg` | `/testimonials/testi-01.jpeg` |
| `testi-02.jpeg` | `/testimonials/testi-02.jpeg` |
| `testi-03.jpeg` | `/testimonials/testi-03.jpeg` |
| `testi-04.jpeg` | `/testimonials/testi-04.jpeg` |
| `testi-05.jpeg` | `/testimonials/testi-05.jpeg` |
| `testi-06.jpeg` | `/testimonials/testi-06.jpeg` |

Statut : ✅ Tous présents

---

## 5. VIDÉOS

| Fichier | Emplacement | Statut |
|---------|------------|--------|
| `(à venir)` | **Service IA** — Hero (Animated Video on Scroll) | ⏳ Charifa fournit la vidéo |

---

## 6. GALERIE FORMATION

⏳ **EN ATTENTE** — Charifa n'a pas encore uploadé les photos de la galerie (section Formation). Ne pas implémenter tant que les photos ne sont pas dans le repo.

---

## Récapitulatif

| Dossier | Présents | Manquants |
|---------|----------|-----------|
| `public/images/` | 0 | 6 ⏳ |
| `public/funnel-hero/` | 3 | 1 ⏳ (`capture-code.png`) |
| `public/portfolio/` | 7 | 0 ✅ |
| `public/testimonials/` | 6 | 0 ✅ |
