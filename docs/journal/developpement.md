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

## 2026-10-18 — Étape 3 : coquille de l'interface + Feuille A4/A5
Fait :
- Doc : un seul écran en trois zones (03 §3, 04 §2 et §7, décision du jour), construit dans l'ordre de `05-maquettes.md` §2. Puis A5 imprimé par deux sur A4 paysage, avec deux assemblages : F14, F15, RG21, RG22, objet Face (01, 03, 04, 05, 07, décision du jour).
- Coquille : `EnTete`, `BarreImpression`, `Apercu`, `Panneaux` (valeurs factices), couleurs d'interface `--ui-*` en clair et sombre déclarées comme couleurs Tailwind. Chaque champ a un `id`, un `name` et un label relié par `htmlFor` (issues Chrome corrigées).
- Réglages branchés : Format, Couleur / Noir et blanc (`data-impression` sur `<html>`), Assemblage visible en A5 seulement.
- `lib/echelle.ts` (`calculerEchelle`, testé) appelé par `hooks/useEchelle.ts` (`ResizeObserver`) ; `Reduction`, `Feuille`, `PageVide`, `styles/pages.css`.
- `cahier/assemblage.ts` : `tailleFace`, `taillePapier`, `facesA4`, `facesParJour` (RG21), `completerLivret`, `facesLivret` (RG22), `calculerFaces`, `libelleFace`. 41 tests au total.
- `Face` (A4 portrait, ou A4 paysage avec deux `Feuille` A5), 29 pages factices, navigation ◀ ▶ par face avec compteur.
- Impression : toutes les faces rendues, seule la face courante visible à l'écran ; `@page` injecté par `TaillePapier` (A4 portrait ou paysage) ; zones de l'écran remises en bloc ; faces calées à 210 × 297 mm.
- Livret plié de 32 pages imprimé (recto verso, bord court), plié et vérifié sur papier.

Reste à faire :
- Étape 4 : contrat `Generateur` / `ContexteActivite` (`React.JSX.Element`), puis `Panneau`, `Consigne`, `FilouExplique`, `PageActivites` de la mission 4 dans l'aperçu ; `useAjustementTexte` (RG13).
- Étape 5 : formulaire (prénom, classe, difficultés) branché sur le profil. Étape 6 : boutons ↻.
- Le style des pages portées du prototype va dans `pages.css` : à renommer la classe `.feuille` du prototype (contenu de page), déjà prise par le conteneur.
- Remplacer le favicon Vite par un pictogramme de Filou ; logo provisoire `filou-cape.png`.

Problèmes rencontrés :
- 794 × 1123 px font 210,08 × 297,13 mm : sans calage en mm à l'impression, chaque face aurait poussé une page blanche (comme le prototype l'avait déjà résolu).
- Le saut de page sur `.feuille` aurait coupé les deux pages A5 d'une même face : déplacé sur `.face`.
- Ordre incertain entre variantes Tailwind `lg:` et `print:` : règles d'impression écrites hors couche dans `impression.css`, sur des classes nommées.

## 2026-10-18 au 2026-10-23 — Étape 4 : page activités de la mission 4
Fait :
- Composition des missions dans le JSON du cahier (`CompositionMission`), consignes déduites par chaque générateur, contrat `Generateur` / `ContexteActivite` (décision du 2026-10-18).
- `Panneau`, `EnTetePage`, `Consigne`, `Picto`, `FilouExplique`, `NoteParent`, `ZoneActivite` ; `PageActivites` rangée selon la disposition (RG2, `cahier/disposition.ts`).
- Illustrations de la mission 4 ; activités « trouve le même » et « compter », tirages purs et testés.
- Labyrinthe : structure pure dans `lib/labyrinthe.ts` (murs identiques au prototype), séparée de son dessin. Sept habillages : traits simples, chemin de terre, haie, pas japonais, rivière, château en pierres, chemin à pointillés (tous les couloirs à repasser, murs clairs). « Départ », « Arrivée », décorations du thème dans les impasses. `attribuerHabillages` sans répétition (RG14).
- Doc : habillages tirés au hasard avec la graine du cahier, en un seul tirage, stables quand on régénère ; champ `graine` du `Cahier` prévu à l'étape 7 (décision du 2026-10-23).
- RG13 : `lib/ajustement.ts` (`deborde`, `reduireJusquaTenir`, testés) et `useAjustementTexte`, appelé par `Feuille`, refait quand le format ou le numéro de page change. Blocs repérés par la classe `.bloc-texte`. Vérifié à l'écran en A4 et en A5 avec une consigne allongée.

Reste à faire :
- Étape 5 : formulaire (prénom, classe, difficultés). La clé de contenu de `Feuille` devra changer avec ce qui modifie les textes (prénom, profil), sinon l'ajustement n'est pas refait. Étape 6 : boutons ↻, avec les graines dans la clé.
- Étape 7 : champ `graine` du `Cahier`, `attribuerHabillages` tiré avec cette graine.
- Pages de Clara ; autres types de pages (couverture, imagier, créative, finale) avec leurs blocs `.bloc-texte`.
- Variante facile « chemin solution en pointillés » pour la TPS et la PS.
- Remplacer le favicon Vite par un pictogramme de Filou.

Problèmes rencontrés :
- Les faces cachées à l'écran étaient en `display: none` : leurs textes ne se mesuraient pas, et seraient sortis non ajustés à l'impression. Elles sont maintenant en `visibility: hidden`, empilées sous la face courante.
- Une coupure de courant pendant la correction de la doc des habillages : les trois fichiers vérifiés et réalignés avant le commit.
