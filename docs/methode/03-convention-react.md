# 03 — Convention React

## Composants
- Composants fonctions uniquement, avec des hooks.
- **Un composant par fichier**, fichier et composant en `PascalCase` : `PageActivites.tsx` exporte `PageActivites`.
- Exports nommés (`export function PageActivites`), pas d'export par défaut, sauf quand un outil l'exige.
- Props typées avec une interface juste au-dessus du composant : `interface PageActivitesProps { … }`.
- Un composant affiche ; il ne calcule pas. La logique métier va dans des fonctions pures (`src/cahier/`), testables sans React.

## Organisation
Suivre l'arborescence de `docs/04-architecture.md`. Repères généraux :
| Dossier | Contenu |
|---|---|
| `app/` | Écrans et interface de l'application |
| `composants/` | Petits composants réutilisables |
| `pages/` ou équivalent | Grands blocs (une page, un écran) |
| `lib/` | Fonctions utilitaires sans lien avec le métier |
| `hooks/` | Hooks personnalisés, nommés `useQuelqueChose` |
| `styles/` | CSS globaux et variables |

On crée un dossier au moment où on y met du code, pas avant.

## Écriture
- Noms du métier en français (`mission`, `profil`, `consigne`), noms techniques en anglais quand c'est l'usage React (`props`, `children`, `ref`).
- Pas de logique compliquée dans le JSX : on prépare les valeurs au-dessus du `return`.
- Les listes ont une `key` stable (un identifiant, pas l'index si l'ordre peut changer).
- Pas d'effet (`useEffect`) pour calculer une valeur qu'on peut dériver directement.
