# 02 — Convention Git

## Branches
| Branche | Rôle |
|---|---|
| `main` | Version livrée, toujours stable |
| `develop` | Travail en cours, intégré au fil des étapes |
| `feature/nom-court` | Une fonctionnalité un peu longue (exemple : `feature/generateur-labyrinthe`) |
| `fix/nom-court` | Une correction isolée |

On part de `develop`, on y revient avec un merge quand c'est fini. On merge `develop` dans `main` à chaque version livrée.

## Commits
Format : `préfixe: description courte en français`, en minuscules, sans point final.

| Préfixe | Quand |
|---|---|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `refactor` | Réorganisation du code sans changement de comportement |
| `style` | Mise en forme du code (indentation, espaces), pas de CSS |
| `docs` | Documentation |
| `test` | Ajout ou modification de tests |
| `chore` | Configuration, dépendances, outils |

Exemples :
- `feat: page activités imprimable au format A4`
- `fix: le texte de l'encadré ne déborde plus en A5`
- `docs: catalogue des jeux v0.2`

## Règles
- Un commit = une idée. Si le message a besoin d'un « et », ce sont souvent deux commits.
- Relire `git status` et `git diff` avant chaque commit.
- Jamais de `node_modules`, de fichiers `.env` ou de secrets dans le dépôt (vérifier `.gitignore`).
- Renommer un fichier suivi avec `git mv`, pour garder son historique.

## Versions
Étiquette à chaque livraison sur `main` : `v1.0.0` (majeure.mineure.correctif).
```bash
git tag -a v1.0.0 -m "Cahiers d'Halloween de la Toussaint 2026"
```
