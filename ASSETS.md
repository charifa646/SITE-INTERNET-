# ASSETS — Inventaire des images & médias

> **RÈGLE CRITIQUE POUR CLAUDE CODE**
> 1. Les noms de fichiers doivent être référencés **AU CARACTÈRE PRÈS**, y compris les doubles extensions (`.jpg.jpeg`, `.jpg.png`) et préfixes. Une seule différence = image cassée.
> 2. Avant de câbler une image, **localiser son chemin exact dans le repo** (chercher dans `/public` et sous-dossiers). Ne jamais inventer de chemin.
> 3. Ne jamais utiliser d'image externe (Unsplash, Pixabay, Aceternity) ni de placeholder : toutes les images du site viennent de cette liste.
> 4. Pour les fichiers avec caractères spéciaux (`+`, préfixe hash), si l'image ne charge pas, recommander à Charifa de renommer proprement.

---

## Structure de dossiers recommandée

```
public/
  images/        → photos de Charifa
  funnel-hero/   → captures pour le hero du service Funnel & Sites
  portfolio/     → mockups & résultats funnels
  testimonials/  → captures témoignages clients
  videos/        → vidéos (hero IA, à venir)
```

*Si les images sont déjà uploadées ailleurs dans le repo, garder leur emplacement réel et adapter les chemins dans le code.*

---

## 1. PHOTOS DE CHARIFA

| Fichier | Emplacement sur le site | Effet |
|---------|------------------------|-------|
| `charifa-approche.jpg` | **Accueil** — Section "Approche" (credibility bar), espace vide sous le label APPROCHE, **colonne gauche** | Animation au scroll |
| `charifa-photo-accueil.png` | **Accueil** — Section "Une approche moderne du marketing…", remplace la carte bleue à **gauche** | Feature Spotlight (hover + corner accents) |
| `charifa-photo-quisuje.png` | **À propos** — Hero, photo à **gauche**, titre "Je suis Charifa…" gardé à droite | Feature Spotlight |

> **Note importante** : dans la section "Une approche moderne…", la citation *« Je construis mon empire à ma façon — et je m'élève. »* est **SUPPRIMÉE** (la photo prend toute la place de l'ancienne carte bleue).

---

## 2. HERO FUNNEL & HERO SITES

| Fichier | Emplacement | Composant |
|---------|------------|-----------|
| `capture-code.png` | **Service Funnel** (accordéon) + **Service Sites** (scroll) | Interactive Accordion / Container Scroll |
| `page-code-1.jpg` | **Service Funnel** — accordéon, image 2 | Interactive Accordion |
| `page-code-2.jpg` | **Service Funnel** — accordéon, image 3 | Interactive Accordion |
| `page-code-3.jpg` | **Service Funnel** — accordéon, image 4 | Interactive Accordion |

---

## 3. PORTFOLIO — MOCKUPS & RÉSULTATS FUNNELS

> La section Portfolio est **restructurée** autour de ces 7 visuels réels (remplace les 6 projets conceptuels du COPYWRITING.md). Le H1, le lead, les témoignages et le CTA de la page Portfolio **restent** ceux de COPYWRITING.md.

| Fichier (exact) | Titre suggéré (éditable) | Type |
|-----------------|--------------------------|------|
| `projet-funnel-landingpage.jpg.png` | Landing Page | Mockup |
| `projet-funnel-pagedecapture.jpg.png` | Page de Capture | Mockup |
| `projet-funnel-pdv+pdc.jpg.png` | Page de Vente + Page de Commande | Mockup |
| `projet-funnel-portefolio.jpg.jpeg` | Portfolio Funnel | Mockup |
| `projet-funnel-site.jpg.png` | Site Internet Complet | Mockup |
| `projet-resultatfunnel01.jpg.jpeg` | Résultat Funnel — Performance 01 | Résultat |
| `696e05409projet-resultatfunnel02.jpg.jpeg` | Résultat Funnel — Performance 02 | Résultat |

> ⚠️ `projet-funnel-pdv+pdc.jpg.png` contient un `+` qui peut casser l'URL. Si l'image ne s'affiche pas, la renommer en `projet-funnel-pdv-pdc.png`.
> ⚠️ `696e05409projet-resultatfunnel02...` a un préfixe hash : à renommer proprement si possible.
> **TODO Charifa** : valider/personnaliser les titres des 7 projets.

---

## 4. TÉMOIGNAGES CLIENTS

> Section témoignages de la page **Portfolio** (floating cards). Ce sont des **captures d'écran** de retours clients.

| Fichier (exact) |
|-----------------|
| `testi-01.jpg.jpeg` |
| `testi-02.jpg.jpeg` |
| `testi-03.jpg.jpeg` |
| `testi-04.jpg.jpeg` |
| `testi-05.jpg.jpeg` |
| `testi-06.jpg.jpeg` |

> Ces captures **remplacent** les 3 témoignages texte placeholder (Aïssata K., Mahamadou S., Fatim D.) du COPYWRITING.md.

---

## 5. VIDÉOS

| Fichier | Emplacement | Statut |
|---------|------------|--------|
| `(à venir)` | **Service IA** — Hero (Animated Video on Scroll) | ⏳ Charifa fournit la vidéo |

---

## 6. GALERIE FORMATION

> ⏳ **EN ATTENTE** — Charifa n'a pas encore uploadé les photos de la galerie (section Formation). Ne pas implémenter tant que les photos ne sont pas dans le repo.
