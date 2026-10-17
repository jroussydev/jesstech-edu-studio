# 06 — Convention documentation

## Rangement
```
docs/
├── README.md        index de toute la doc
├── 00-… à 0X-…      le projet, dans l'ordre du workflow
├── journal/         ce qui s'est passé, daté
└── methode/         comment je travaille
```

## Nommage
- Minuscules, tirets, sans espaces ni accents : `analyse-des-besoins.md`.
- Un numéro devant = l'ordre de lecture.
- Une même famille garde la même forme (`convention-git`, `convention-ui`).

## Dans chaque document
- Un titre avec son numéro : `# 03 — Analyse fonctionnelle`.
- Sous le titre : `> Version x.y — JJ/MM/AAAA — statut : brouillon | à valider | validé`.
- Des tableaux plutôt que de longues listes quand on compare.
- Les règles ont un identifiant (`RG1`, `F12`) pour qu'on puisse y renvoyer.

## Index
Chaque dossier important a un `README.md` qui liste ses fichiers. On le met à jour dès qu'on ajoute un fichier.

## Journal
- `journal/decisions.md` : la plus récente en haut.
  ```
  ## AAAA-MM-JJ — Titre de la décision
  Décision : …
  Pourquoi : …
  Écarté : …
  ```
- `journal/developpement.md` : une entrée par session (date, fait, reste à faire, problèmes).
- Le journal se complète, il ne se réécrit pas.

## Dans le code
- Commentaires en français, pour expliquer le *pourquoi*, pas le *quoi*.
- Le `README.md` à la racine dit ce qu'est le projet, comment l'installer et le lancer, et renvoie vers `docs/README.md`.
