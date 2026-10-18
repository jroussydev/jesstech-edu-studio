# Journal de développement

## 2026-10-17
Fait :
- Conception complète : documents 00 à 07, catalogue de 97 jeux, méthode JessTech rédigée.
- Prototypes HTML des cahiers de Mathieu et Clara, PDF imprimés pour les vacances.
- Documentation rangée dans le dépôt.

Reste à faire :
- Première session Claude Code : initialisation Vite + React + TypeScript + Tailwind, polices, arborescence.
- Porter la page activités de la mission 4 en React.

Problèmes rencontrés :
- Textes qui débordaient sur téléphone : résolu par le rendu à taille réelle (voir décision du 2026-10-12).

## 2026-10-17 — Première session Claude Code (étape 1)
Fait :
- Lecture de toute la doc et du prototype de Mathieu, plan de l'étape 1 validé.
- Tailwind v4 (plugin `@tailwindcss/vite`), TypeScript `strict`, `index.html` en français.
- Polices Andika (400, 700) et Grandstander (600, 800) importées depuis `@fontsource` dans `main.tsx`.
- `src/index.css` déplacé en `src/styles/interface.css` ; restes du gabarit Vite supprimés.
- Doc mise à jour : `04-architecture.md` v0.2, décision « polices via @fontsource », README (prérequis, commandes, « Comment ce projet est fait »).
- `npm audit fix` : postcss, nanoid et source-map-js mis à jour, 0 vulnérabilité.
- `CLAUDE.md` : sous-étapes courtes, modifications par l'outil d'édition, pas de ligne Co-Authored-By.

Reste à faire :
- Étape 2 : `types.ts`, `lib/rng.ts` avec Vitest et un premier test, `styles/tokens.css`, `styles/impression.css`.
- Étape 3 : `Feuille.tsx` et une page vide A4/A5 qui s'imprime correctement.
- Étape 4 : `Panneau`, `Consigne`, `FilouExplique`, puis `PageActivites` de la mission 4.
- Remplacer le favicon Vite par un pictogramme de Filou.

Problèmes rencontrés :
- Le dépôt contenait déjà le projet Vite, mais avec `@import "tailwindcss"` sans Tailwind installé (build cassé) : corrigé.
- `04-architecture.md` prévoyait à la fois `public/fonts/` et `@fontsource` : `public/fonts/` abandonné.

## 2026-10-18 — Étape 2 : modèle de données, aléatoire à graine, styles des pages
Fait :
- `src/types.ts` : modèle de données aligné sur `donnees/catalogue-jeux.json` (niveaux par classe, catégorie `EM`, marqueurs `dejaCode` et `nouveau` optionnels) et constante `FORMATS` (A4 794 × 1123 px, A5 559 × 794 px). `04-architecture.md` v0.3 et décision du jour.
- Vitest 5 installé (`npm run test`, environnement `node`).
- `src/lib/rng.ts` (mulberry32) et `src/lib/melange.ts` (Fisher-Yates) portés du prototype ; 8 tests, dont les tirages de la graine 404 figés sur ceux du prototype.
- `src/styles/tokens.css` : couleurs des pages et redéfinition sous `data-impression="nb"`.
- `src/styles/impression.css` : `@page` A4 sans marge, saut de page par `.feuille`, `.interface-seulement` masqué.

Reste à faire :
- Étape 3 : `Feuille.tsx` et une page vide A4/A5 qui s'imprime correctement ; injecter `@page { size }` selon le format ; vérifier si `.feuille` a besoin de `width: 210mm` à l'impression.
- Variables d'interface (`--ui-*`, mode sombre) à placer dans `interface.css` quand l'interface sera construite.
- Étape 4 : contrat `Generateur` / `ContexteActivite` (`React.JSX.Element`), puis `Panneau`, `Consigne`, `FilouExplique`, `PageActivites` de la mission 4.
- Remplacer le favicon Vite par un pictogramme de Filou.

Problèmes rencontrés :
- `types.ts` de la doc ne correspondait pas au catalogue (niveaux, catégorie `EM`, champs en plus) : corrigé, voir `decisions.md`.
- `vitest run` sans fichier de test se termine en erreur : normal, résolu dès les premiers tests.
