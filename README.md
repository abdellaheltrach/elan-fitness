#  Élan Fitness - Refonte Multipage

Bienvenue sur le dépôt du projet **Élan Fitness**. Ce projet consiste à migrer l'ancien site *One Pager* de la salle de sport vers un site web multipage moderne, accessible, réactif (responsive) et optimisé pour le référencement naturel (SEO).


##  Démo en ligne
Vous pouvez consulter le site hébergé en ligne ici :  
- **[Voir le site Élan Fitness](https://abdellaheltrach.github.io/elan-fitness/)** 
- **[Voir trello](https://trello.com/b/Ph4rbjme/elan-fitness)** 



##  Sommaire
- [À propos du projet](#-à-propos-du-projet)
- [Arborescence du site](#-arborescence-du-site)
- [Fonctionnalités & Points forts](#-fonctionnalités--points-forts)
- [Technologies utilisées](#-technologies-utilisées)
- [Structure des fichiers](#-structure-des-fichiers)
- [Respect des normes & SEO](#-respect-des-normes--seo)
- [Auteur](#-auteur)



##  À propos du projet

L'objectif principal était de restructurer le contenu de l'ancien site unique en plusieurs pages thématiques distinctes afin d'offrir une meilleure expérience utilisateur (UX/UI), de valoriser l'identité visuelle de la salle et d'améliorer sa présence sur les moteurs de recherche.

### Contextes & Rôles :
1. **Concepteur (UI/UX) :**
   - Analyse du site d'origine et découpage stratégique des contenus.
   - Proposition d'un logo et respect de la charte graphique.
   - Sélection de textes pertinents et d'images libres de droits.
2. **Développeur Front-End :**
   - Intégration HTML5 sémantique et CSS3.
   - Mise en place d'une navigation claire avec indicateur de page active.
   - Adaptation du site à tous les types d'écrans (Responsive Design).


##  Arborescence du site

Le site est composé des pages suivantes :

1. **Accueil (`index.html`)** : Présentation générale de la salle, accroche principale et incitation à découvrir les offres.
2. **Programmes (`programmes.html`)** : Présentation détaillée des cours collectifs, des entraînements et des formules d'abonnement.
3. **À propos (`À propos.html`)** : Histoire d'Élan Fitness, nos valeurs et présentation de l'équipe de coachs.
4. **Contact (`Contact-nous.html`)** : Formulaire de contact/retour d'expérience, coordonnées et plan d'accès.



##  Fonctionnalités & Points forts

-  **Responsive Design (Multi-écrans) :**
  - Grand écran ordinateur ($\ge 1280\text{px}$)
  - Petit écran ordinateur ($1024\text{px} - 1279\text{px}$)
  - Tablette ($768\text{px} - 1023\text{px}$)
  - Mobile ($< 767\text{px}$)
-  **Indicateur de page active :** Le menu de navigation met en évidence la page sur laquelle se trouve l'utilisateur.
-  **Transitions & Animations CSS :** Effets de survol (hover) fluides sur les boutons et cartes pour dynamiser l'interface.
-  **Accessibilité (WCAG) :** Utilisation de contrastes adaptés, attributs `alt` pour les images et structure logique des titres (`h1`-`h6`).



##  Respect des normes & SEO

Le projet respecte les bonnes pratiques du web :
- **Validité W3C :** Code HTML5 et CSS3 conforme aux standards.
- **Balises Sémantiques :** Emploi de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Optimisation SEO :**
  1. Balises `<meta name="description">` uniques et pertinentes sur chaque page.
  2. Balises `<h1>` à `<h3>` structurées selon la hiérarchie du contenu.
  3. Nommage explicite des fichiers et attributs `alt` optimisés pour l'indexation des images.



##  Structure des fichiers

```text
elan-fitness/
│
├── index.html          # Page d'accueil
├── programmes.html     # Page des cours et tarifs
├── À propos.html       # Page présentation et équipe
├── Contact-nous.html        # Page contact et localisation
│
├── style.css       # Feuille de style globale (styles, responsive, animations)
├── contact.css       # Feuille de style pour la page contactez-nous (styles, responsive, animations)
│
├── script.js
└── README.md           # Présentation du projet
```



##  Technologies utilisées

- **HTML5** : Structuration sémantique du contenu.
- **CSS3** : Flexbox, CSS Grid, Media Queries et animations.
- **Git / GitHub** : Versioning et hébergement via GitHub Pages.



##  Auteur

Développé par **[Abdellah Eltrach]** dans le cadre du projet d'intégration web pour Élan Fitness.
