# 00 — Vision · JessTech Edu Studio

> Version 0.2 — 12/10/2026 — statut : à valider

## En une phrase
Un générateur React de cahiers d'activités imprimables (A4), adaptés à l'âge, au niveau **et aux besoins particuliers** de chaque enfant, mis en scène par Filou le renard.

## Pourquoi
- Les cahiers du commerce ne s'adaptent ni à l'âge réel, ni aux difficultés de l'enfant, ni à ses centres d'intérêt.
- Le cahier de Filou (30 missions) a prouvé l'intérêt, mais il a été fait à la main et son rendu était fragile (wkhtmltoimage, polices, emojis).
- Objectif : produire un cahier personnalisé en quelques minutes, pas en quelques jours.

## Pour qui
- **V1** : mes enfants, Mathieu (5 ans, GS) et Clara (2 ans, pas encore scolarisée).
- **Ensuite** : tous les âges de 2 ans au CM2.
- **Plus tard** : autres parents, enseignants, assistantes maternelles (piste commerciale Jess Tech).

## Ce que fait la V1 (Toussaint 2026)
1. Je choisis un profil enfant (prénom, âge, niveau, adaptations).
2. Je choisis un thème et des missions dans un catalogue.
3. L'app génère les pages A4 : page de garde, missions, page « bravo ».
4. J'imprime en PDF depuis Chrome.

Premier cahier : **Halloween, 2 semaines**. Thèmes suivants envisagés : **Noël**, **Pâques**. Un thème regroupe le vocabulaire, l'histoire, les couleurs et les costumes de Filou.

## Ce que la V1 ne fait PAS
- Pas de comptes ni de base de données (données dans des fichiers JSON).
- Pas d'éditeur visuel par glisser-déposer.
- Pas de mise en ligne publique.

## Principes
- **Imprimable d'abord** : chaque page est pensée pour le papier A4, lisible en noir et blanc.
- **Adapté, pas simplifié au hasard** : chaque profil porte des réglages d'adaptation (consignes, densité, vocabulaire) appliqués à toutes les activités.
- **Généré quand c'est possible** : labyrinthes, calculs, suites… sont générés par du code avec une graine, pour pouvoir reproduire une page.
- **Filou guide, l'enfant progresse** : une trame d'histoire relie les missions et valorise les acquis.

## Indicateur de réussite V1
Un cahier Halloween imprimé pour Mathieu et un pour Clara le samedi 17 octobre.
