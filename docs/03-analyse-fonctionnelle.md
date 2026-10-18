# 03 — Analyse fonctionnelle · JessTech Edu Studio V1

> Version 0.2 — 18/10/2026 — statut : à valider
> Entrées : `00-vision.md`, `01-cahier-des-charges.md`, `02-analyse-des-besoins.md`, aperçu « cahier-halloween-apercu.html ».

## 1. Acteur et périmètre
Un seul acteur en V1 : **le parent** (moi). Il prépare les données, prévisualise, imprime. Les enfants n'utilisent pas l'application, ils utilisent le papier.

## 2. Parcours V1
1. Le parent décrit le cahier dans un fichier JSON (profil, thème, missions).
2. Il lance l'application et ouvre l'**aperçu** du cahier.
3. Il règle **enfant**, **format** et **mode d'impression**.
4. S'il n'aime pas une activité générée, il la **régénère** (nouvelle graine).
5. Il **imprime** (impression du navigateur → PDF ou imprimante).

Pas d'éditeur visuel en V1 : la saisie se fait dans les JSON.

## 3. Écrans
Un seul écran, en trois zones (maquette : `05-maquettes.md` §1) :

| Zone | Contenu | Actions |
|---|---|---|
| En-tête + barre d'impression | Logo, titre, format, couleur / noir et blanc | Changer le format ; basculer couleur / noir et blanc ; imprimer le cahier entier |
| Aperçu | Une page à la fois, à taille réelle réduite à l'écran ; compteur « page N / total » | Page précédente / suivante (◀ ▶) |
| Panneaux | « L'enfant » (prénom, classe, difficultés), « Le cahier » (personnage, vacances), « Cette page » (un bouton ↻ par activité de la page affichée) | Modifier le profil ; choisir les vacances ; régénérer une activité (nouvelle graine, RG3) |

Sur téléphone, les panneaux passent sous l'aperçu. L'en-tête, la barre, les panneaux et le compteur ne s'impriment jamais : seul le cahier sort sur le papier.
L'écran est construit dans l'ordre de `05-maquettes.md` §2 (coquille, aperçu, contenu, formulaire, boutons ↻) pour vérifier chaque étape à l'écran.

## 4. Ordre des pages du cahier
Une mission = une **double page** : activités à gauche (page paire), histoire et création à droite (page impaire). L'ordre est calculé pour que chaque mission tombe toujours sur une double page.

| Pages | Contenu |
|---|---|
| 1 | Page de garde |
| 2 | Ouverture : l'aventure de Filou + mode d'emploi en pictogrammes |
| 3 | Mes citrouilles (au début, pour colorier au fil des jours) |
| 4–5 | Imagier semaine 1 (double page, 3 + 3 mots) |
| 6–15 | Missions 1 à 5 |
| 16–17 | Imagier semaine 2 (double page) |
| 18–27 | Missions 6 à 10 |
| 28 | Mission finale : la dernière ligne droite |
| 29 | Bravo : la fête de la forêt, coloriage géant |

**Total : 29 pages par enfant.**

## 5. Règles de gestion
| ID | Règle |
|---|---|
| RG1 | **Activités par page** selon profil et format : Mathieu A4 = 3, A5 = 2 ; Clara A4 = 2, A5 = 1. Les activités en trop passent sur une page supplémentaire insérée juste après, puis une page blanche « Mes dessins » est ajoutée si nécessaire pour garder la parité des doubles pages (RG10). |
| RG2 | **Disposition** : chaque mission définit sa mise en page en rangées de 1 ou 2 blocs. L'encadré « Filou t'explique » est un bloc comme les autres et peut se placer à côté d'une activité. Une rangée de 2 blocs est plus haute (×1,5). Sans disposition fournie, les activités `demi` consécutives sont mises côte à côte et l'encadré occupe toute la largeur en haut. |
| RG3 | **Graine** : chaque activité est générée avec `graine de la mission + rang × 97`. Même graine = même page. « Régénérer » incrémente la graine de cette activité seulement et la sauvegarde dans le JSON du cahier. |
| RG4 | **Couleurs** : uniquement via les variables CSS du thème. Le mode noir et blanc remplace les variables et passe les images en niveaux de gris. Aucune couleur écrite en dur dans un composant. |
| RG5 | **Tailles** : relatives à la largeur de la page (`cqw`). Le passage A4 → A5 ne demande aucune mise en page spécifique. |
| RG6 | **Consigne** : un pictogramme d'action + une phrase, une seule action. Numérotée dans l'ordre de la page. |
| RG7 | **Vocabulaire** : chaque mot du thème doit apparaître au moins `repetitionMots` fois dans le cahier (4 pour Mathieu, 3 pour Clara). Un contrôle signale les mots sous le seuil dans l'aperçu. |
| RG8 | **Costume de Filou** : choisi par le numéro de mission, selon la table des costumes du thème. |
| RG9 | **Couleur repère** : la pastille de mission et les numéros prennent la couleur de la semaine ; doré pour la mission finale. |
| RG10 | **Parité** : toute page d'activités est paire, toute page créative impaire. Le calcul de l'ordre insère une page « Mes dessins » si besoin. |
| RG11 | **Images** : les illustrations bitmap (Filou, couverture) ne sont jamais déformées (`object-fit` / `preserveAspectRatio`). |
| RG12 | **Fiche parent** : chaque page d'activités se termine par la note « Pour l'adulte » de la mission. |
| RG13 | **Aucun texte hors de son bloc** : si un texte dépasse de son bloc (téléphone qui agrandit les polices, texte long), la taille de police de ce bloc est réduite automatiquement jusqu'à ce qu'il tienne (jusqu'à 55 %), puis celle de la page entière si besoin. En dernier recours, le bloc coupe son contenu plutôt que de déborder sur un autre. |
| RG14 à RG20 | **Composition du cahier** (forme jamais répétée, variété, équilibre des catégories, socle par niveau, priorité aux difficultés cochées, progression, supports) : voir `06-catalogue-jeux.md`, §7. |

## 6. Objets fonctionnels
| Objet | Rôle | Exemples d'attributs |
|---|---|---|
| Profil | L'enfant et ses adaptations | prénom, âge, niveau, adaptations |
| Thème | Le pack d'un cahier | titre, palette, mots, costumes de Filou, symbole de progression, trame |
| Mission | Un épisode de l'aventure | numéro, semaine, titre, mot(s), « Filou t'explique », histoire, activités, page créative, note parent, graine |
| Activité | Un jeu généré | type, largeur, consigne, picto, paramètres |
| Cahier | L'assemblage à imprimer | profil, thème, liste des missions, format et mode par défaut |
| Page | Résultat du calcul de l'ordre | type de page, mission, activités placées |

Le détail technique de ces objets est dans `04-architecture.md`.
