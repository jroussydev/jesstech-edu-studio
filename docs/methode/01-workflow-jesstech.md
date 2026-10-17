# 01 — Workflow JessTech

## 1. Concevoir avant de coder
Chaque projet suit cet ordre. Chaque étape a son document numéroté dans `docs/`.

| Étape | Document | Question à laquelle il répond |
|---|---|---|
| Vision | `00-vision.md` | Pourquoi ce projet, pour qui ? |
| Cahier des charges | `01-cahier-des-charges.md` | Que doit-il faire, avec quelles contraintes ? |
| Analyse des besoins | `02-analyse-des-besoins.md` | Qui sont les utilisateurs et que leur faut-il vraiment ? |
| Analyse fonctionnelle | `03-analyse-fonctionnelle.md` | Comment ça marche : parcours, écrans, règles ? |
| Architecture | `04-architecture.md` | Avec quoi et comment on le construit ? |
| Maquettes | `05-maquettes.md` | À quoi ça ressemble ? (Figma ou prototype) |
| Développement | le code | On construit, étape par étape |
| Tests | `07-checklist-avant-livraison.md` (méthode) | Est-ce que tout marche ? |
| Documentation | `README.md` + docs à jour | Quelqu'un d'autre peut-il reprendre ? |

On ne passe pas à l'étape suivante tant que la précédente n'est pas validée. Un projet peut ajouter ses propres documents après `05` (exemple : `06-catalogue-jeux.md`).

## 2. Le cycle d'une étape de code
1. **Plan** : on explique ce qu'on va faire, quels fichiers sont créés ou modifiés, et pourquoi. On explique la logique avant le code (structure, placement, classes).
2. **Validation** du plan par moi.
3. **Code** : une petite étape, testable.
4. **Vérification** : je lance, je regarde, je teste.
5. **Commit** : un message est proposé, je valide, on committe.
6. **Journal** : en fin de session, une entrée dans `docs/journal/developpement.md`.

## 3. Quand une décision change
1. Mettre à jour le document concerné (ne pas laisser une doc fausse).
2. Ajouter une entrée datée dans `docs/journal/decisions.md`.
3. Committer avec le préfixe `docs`.

## 4. Les outils et leur rôle
| Outil | Rôle |
|---|---|
| Conversation Claude (claude.ai) | Conception, idées, rédaction des documents |
| Claude Code (terminal) | Écriture du code dans le dépôt, en suivant `CLAUDE.md` et cette méthode |
| VS Code | Lecture, relecture, petites corrections |
| Git | Historique de tout ce qui est fait |
| Figma / Procreate | Maquettes et illustrations |

## 5. Mes principes
- Pédagogie : je dois comprendre ce qui est fait, pas seulement l'obtenir.
- Petites étapes, souvent committées.
- Gratuit d'abord : pas de service payant sans vraie nécessité.
