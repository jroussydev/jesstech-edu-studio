# JessTech Edu Studio

Générateur React de cahiers d'activités imprimables (A4/A5) pour enfants, mis en scène par Filou le renard.
Premier objectif : les cahiers d'Halloween de Mathieu (5 ans, GS) et Clara (2 ans), à imprimer pour les vacances de la Toussaint (début le samedi 17 octobre 2026).

## À lire avant de coder
- `docs/README.md` : index de la documentation.
- `docs/00-vision.md` à `docs/07-feuille-de-route.md` : vision, cahier des charges, besoins, analyse fonctionnelle (RG1 à RG20), architecture, maquettes, catalogue des jeux, feuille de route.
- `docs/methode/` : Méthode JessTech (workflow, conventions Git, React, TypeScript, UI, documentation, checklist avant livraison). **À respecter pour tout code produit.**
- `docs/journal/` : `decisions.md` (décisions datées) et `developpement.md` (avancement par session).
- `donnees/catalogue-jeux.json` : catalogue des 97 jeux (catégorie, difficultés, niveaux, support, variantes). Source de vérité pour le générateur.
- `reference/apercu-cahier-mathieu.html` et `reference/apercu-cahier-clara.html` : prototypes validés (HTML + JS sans framework). Ils contiennent le contenu des missions, les dessins SVG, les générateurs d'activités et la mise en page. **C'est la référence visuelle et fonctionnelle à porter en React.**
- `donnees/themes/halloween/images/` : couverture et 4 poses de Filou (provisoires).

## Stack
Vite + React + TypeScript + Tailwind (interface uniquement). Pages imprimées en CSS dédié (`tokens.css`, `impression.css`). Données en JSON. Pas de backend en V1. Polices via `@fontsource/andika` et `@fontsource/grandstander`.

## Règles non négociables
- Une page est toujours rendue à sa taille réelle (A4 = 794 × 1123 px) et réduite à l'écran par `transform: scale()`. Tailles internes en `cqw`.
- Aucune couleur en dur : uniquement les variables CSS du thème (mode noir et blanc = redéfinition des variables).
- Aucun texte ne sort de son bloc (RG13) : ajustement automatique de la police par bloc (`--kb`) puis par page (`--kp`).
- Génération reproductible : chaque activité a une graine (RG3).
- Une consigne = un pictogramme + une phrase + une seule action.
- Dans un même cahier, un jeu n'apparaît jamais deux fois avec la même forme (RG14) ; composition équilibrée selon RG15 à RG20.
- Les profils enregistrent des besoins pédagogiques, jamais un diagnostic.

## Façon de travailler (Méthode JessTech)
- Concevoir avant de coder : on suit les docs ; si une décision change, mettre à jour le doc concerné et ajouter une entrée dans `docs/journal/decisions.md`.
- En fin de session, proposer une entrée pour `docs/journal/developpement.md`.
- Avant chaque étape : expliquer brièvement le plan (fichiers créés ou modifiés, et pourquoi), puis coder.
- Petites étapes testables ; à la fin de chaque étape, proposer un message de commit et attendre ma validation avant de committer.
- Découper chaque étape en sous-étapes courtes, avec un commit proposé à la fin de chacune.
- Modifier les fichiers avec l’outil d’édition plutôt qu’avec de grosses commandes shell, pour que je voie chaque diff.
- Commits : préfixes `feat`, `fix`, `refactor`, `docs`, `chore`, messages en français.
- Ne pas ajouter de ligne Co-Authored-By aux commits : la collaboration est indiquée dans le README.
- Répondre en français.

## Commandes
- `npm run dev` : serveur de développement
- `npm run build` : build de production
- `npm run test` : tests Vitest (logique pure de `src/cahier/`)
