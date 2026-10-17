# Journal des décisions

## 2026-10-17 — Polices empaquetées par Vite depuis @fontsource
Décision : Andika et Grandstander sont importées depuis les paquets `@fontsource` dans `main.tsx` ; Vite copie lui-même les `.woff2` dans le build. Plus de dossier `public/fonts/`.
Pourquoi : un seul mécanisme, aucun fichier de police à copier ni à mettre à jour à la main, toujours aucun appel réseau à l'impression.
Écarté : copier les `.woff2` dans `public/fonts/` avec des `@font-face` écrits à la main.

## 2026-10-17 — Catalogue des jeux par catégorie et difficulté
Décision : chaque jeu a une catégorie, des difficultés associées, un support et des variantes de forme ; un même jeu ne revient jamais avec la même forme dans un cahier (RG14 à RG20).
Pourquoi : éviter les répétitions et adapter le cahier aux difficultés de l'enfant.
Écarté : une simple liste de jeux sans classement.

## 2026-10-17 — Organisation de la documentation
Décision : `docs/` en trois familles (projet numéroté 00 à 07, `journal/`, `methode/`), noms en minuscules avec tirets.
Pourquoi : retrouver chaque information au même endroit sur tous les projets.
Écarté : dossier `method/` séparé à la racine, noms avec espaces.

## 2026-10-12 — Rendu des pages à taille réelle
Décision : chaque page est rendue à 794 × 1123 px (A4) et réduite à l'écran par `transform: scale()`, avec ajustement automatique des textes (RG13).
Pourquoi : sur téléphone, la taille de police minimale du navigateur faisait déborder les textes.
Écarté : pages dont la largeur suit l'écran.

## 2026-10-12 — Impression par le navigateur
Décision : pages en React, impression ou PDF via le navigateur.
Pourquoi : polices locales et emojis gérés nativement.
Écarté : wkhtmltoimage (polices et emojis cassés).

## 2026-10-12 — Premier cahier : Halloween, Toussaint 2026
Décision : 10 missions sur 2 semaines + une mission finale, pour Mathieu (GS) et Clara (2 ans), Filou se déguise au fil des missions.
Pourquoi : livrer un vrai cahier pour les vacances tout en posant la base de l'application.
