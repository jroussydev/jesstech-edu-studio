# 04 — Convention TypeScript

## Réglages
- Mode `strict` activé dans `tsconfig`.
- **Pas de `any`.** Si le type est vraiment inconnu : `unknown`, puis on vérifie.

## Types
- Les types du métier sont regroupés dans un fichier dédié (exemple : `src/types.ts`).
- `interface` pour décrire un objet, `type` pour les unions et alias : `type Format = 'A4' | 'A5'`.
- Les valeurs possibles d'un champ sont une union de chaînes plutôt qu'un `string` libre.
- Les fonctions exportées ont leurs paramètres et leur retour typés explicitement.

## Nommage
| Élément | Forme | Exemple |
|---|---|---|
| Variables, fonctions | camelCase | `activitesParPage`, `composerCahier()` |
| Types, interfaces, composants | PascalCase | `Mission`, `PageCreative` |
| Constantes globales | MAJUSCULES | `FORMATS` |
| Fichiers non composants | camelCase | `pagination.ts` |
| Fichiers de test | même nom + `.test.ts` | `pagination.test.ts` |

## Fonctions
- De préférence pures : même entrée, même sortie, sans effet de bord.
- Une fonction = une responsabilité. Au-delà d'une trentaine de lignes, on se demande si on peut découper.

## Tests
- Vitest pour la logique pure.
- Un test décrit un comportement en français : `it('place deux activités demi côte à côte')`.
