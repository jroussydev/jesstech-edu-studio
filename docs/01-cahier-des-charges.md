# 01 — Cahier des charges · JessTech Edu Studio V1

> Version 0.2 — 12/10/2026 — statut : à valider

## 1. Contexte
Voir `00-vision.md` et `02-analyse-des-besoins.md`. Échéance ferme : **samedi 17 octobre 2026**.

## 2. Profils V1
| Profil | Âge | Niveau | Particularités |
|---|---|---|---|
| Mathieu | 5 ans | GS | Adaptations langage : vocabulaire et compréhension (voir 02) |
| Clara | 2 ans | Pas scolarisée | Langage bien développé ; motricité fine en développement, pas de lecture, attention courte |

Niveaux prévus dans le modèle (pour plus tard) : `TPS`, `MAT`, `CP-CE1`, `CE2-CM2`.

## 3. Exigences fonctionnelles
| ID | Exigence | Priorité |
|---|---|---|
| F1 | Profil enfant : prénom, âge, niveau | Indispensable |
| F2 | Réglages d'adaptation par profil (voir 02, §3) | Indispensable |
| F3 | Thème de cahier (V1 : Halloween) : vocabulaire, illustrations, trame | Indispensable |
| F4 | Catalogue d'activités filtré par niveau | Indispensable |
| F5 | Composition d'un cahier : liste ordonnée de missions (structure §4 bis) | Indispensable |
| F6 | Rendu de pages au format choisi (F14) avec marges d'impression | Indispensable |
| F7 | Génération reproductible (graine par mission) | Indispensable |
| F8 | Page de garde personnalisée (prénom, Filou) | Indispensable |
| F9 | Trame d'histoire : une courte scène de Filou par mission | Important |
| F10 | Page « bravo » / bilan des acquis en fin de cahier | Important |
| F11 | Fiche parent par mission (comment lire la consigne, mots à travailler à l'oral) | Important |
| F12 | Encadré « Filou t'explique » par mission : ce qu'est le mot du jour, lu par l'adulte | Indispensable |
| F17 | Histoire du jour : un court épisode de l'aventure, lu par l'adulte, qui réemploie le mot du jour | Indispensable |
| F18 | Tableau de progression : un symbole du thème à colorier par mission terminée (Halloween : « Mes citrouilles ») | Indispensable |
| F19 | Page d'ouverture : présentation de l'aventure et mode d'emploi en pictogrammes | Indispensable |
| F20 | Couleur repère par semaine (bandeau de mission) | Important |
| F21 | Costume de Filou qui évolue au fil des missions (défini par le thème) | Important |
| F22 | **Activité bonus à faire ensemble** : un bricolage lié au thème (patrons à imprimer, matériel de la maison, étapes en pictogrammes), version adaptée par âge, imprimé à part | Important |
| F13 | Choix du mode d'impression au moment de l'export : couleur ou noir et blanc (V1 imprimée en couleur) | Indispensable |
| F14 | Choix du format de page : A4 et A5 en V1 ; A3 et US Letter ensuite | Indispensable (A4, A5) |
| F15 | Mode livret : 2 pages A5 imprimées sur une feuille A4, dans l'ordre de pliage | Plus tard |
| F16 | Export PDF par lot | Plus tard |

## 4. Catalogue d'activités V1 (Halloween)
| Activité | Clara (2 ans) | Mathieu (GS) | Génération |
|---|---|---|---|
| Imagier du thème | 6 grandes images + mot écrit par semaine, lues par l'adulte | 6 images + mot écrit par semaine | illustrations du thème |
| Coloriage | grandes zones, traits épais | zones moyennes | illustrations du thème |
| Gommettes | coller sur de gros ronds | compléter un motif | aléatoire paramétré |
| Chemin / labyrinthe | chemin large à suivre au doigt ou au gros crayon | petit labyrinthe | algorithme |
| Trouve le même | 1 parmi 2 | 1 parmi 4 | aléatoire paramétré |
| Associer mot ↔ image | — | relier 4 images à 4 mots | aléatoire paramétré |
| Trouve l'intrus / ranger | — | intrus parmi 4, ranger par catégorie | aléatoire paramétré |
| Compter | — | dénombrer jusqu'à 10 | aléatoire paramétré |
| Suites logiques | — | 2 éléments alternés (ABAB) | aléatoire paramétré |
| Graphisme | traits libres, gribouillage dirigé | ponts, boucles, toile d'araignée | modèles |
| Ombres (associer à son ombre) | 2 objets | 4 objets | silhouettes tirées des pictogrammes |
| Cherche et trouve | trouver 1 objet parmi 4 gros | trouver tous les X dans une scène | aléatoire paramétré |
| Relie les points | — | 1 à 10 | points tirés du contour d'un pictogramme |
| Complète le dessin | — | moitié symétrique sur quadrillage | pictogrammes symétriques |
| Remets dans l'ordre | — | 3 images de l'histoire | illustrations du thème |
| Puzzle à découper (par l'adulte) | 2–3 pièces | 4 pièces | découpe d'une illustration |
| Grand labyrinthe (mission finale) | grand chemin sinueux, amis à nommer en route | labyrinthe pleine page (8 × 9) | algorithme |
| Coloriage géant (page « bravo ») | oui | oui | scène de la fête |
| Jeu des différences | — | — | **reporté V1.1** |

## 4 bis. Structure d'un cahier
**Une mission = 2 pages** :
1. **Page activités** : en haut, l'encadré « Filou t'explique » (mot du jour) ; dessous, 2 à 3 activités courtes, chacune dans sa propre zone encadrée avec sa consigne (Clara : 2 au maximum).
2. **Page créative** : en haut, l'**histoire du jour** (lue par l'adulte) ; dessous, le coloriage et/ou les gommettes, qui illustrent cette histoire.

Ouvert à plat, le cahier montre la mission en double page : activités à gauche, histoire et coloriage à droite.

**Rythme** : 5 missions par semaine, 2 semaines, soit 10 missions par enfant, puis une **mission finale** d'une page : un grand jeu de chemin pour emmener Filou à la fête.

| Pages du cahier (par enfant) | Nb |
|---|---|
| Page de garde | 1 |
| Ouverture : l'aventure de Filou + mode d'emploi | 1 |
| Mes citrouilles (tableau de progression, au début) | 1 |
| Imagiers (double page en début de chaque semaine) | 4 |
| Missions (10 × 2 pages) | 20 |
| Mission finale : grand labyrinthe (Mathieu) ou grand chemin avec les amis (Clara) | 1 |
| Bravo : la fête de la forêt, coloriage géant | 1 |
| **Total** | **29** |

Ordre détaillé et règle des doubles pages : voir `03-analyse-fonctionnelle.md`, §4.

Les fiches parent sont imprimées à part (un seul livret pour les deux enfants).

## 5. Exigences non fonctionnelles
- **Impression** : un composant = une page. La règle `@page { size: … }` est injectée selon le format choisi.
- **Formats** : les dimensions de page sont des variables (`--page-w`, `--page-h`). Toutes les tailles internes (textes, zones, illustrations) sont relatives à la largeur de la page (unités de conteneur `cqw`), jamais en px fixes. Les formats A ayant tous les mêmes proportions, une mise en page A4 se réduit telle quelle en A5.
- **Lisibilité en petit format** : en A5, le nombre d'activités par page baisse automatiquement (Mathieu : 2 max ; Clara : 1), pour garder des éléments assez grands pour de jeunes enfants.
- **Polices** : fichiers `.woff2` dans le dépôt (aucun appel réseau), police capitale très lisible pour la GS.
- **Couleur / noir et blanc** : les couleurs passent par des variables CSS (`--c-orange`, `--c-violet`…). Le mode noir et blanc les remplace par des gris et des contours plus épais ; les illustrations bitmap (Filou) passent en niveaux de gris. Les pages de coloriage restent en traits noirs dans les deux modes. Chaque page doit rester lisible dans les deux modes.
- **Illustrations** : Filou dessiné dans Procreate (3–4 poses) ; pictogrammes du thème en SVG simples, sans fond chargé.
- **Ton** : Halloween « gentil », rien d'effrayant (fantôme souriant, citrouille rigolote).
- **Direction visuelle** : livre d'histoire en forêt, titres sur panneaux de bois, couleur repère par semaine (reprise du cahier d'origine). Filou dessiné au crayon aquarellé, trait doux, dans une forêt d'automne lumineuse (planches de référence « Filou le petit renard » et « Les fêtes de l'année »).
- **Filou de référence** : petit renard roux, gros yeux bruns, joues roses, queue au bout blanc ; écharpe rayée bleu et jaune à motif de glands, pantalon bleu ; tient souvent un gland. Le panneau de bois « Filou, le petit renard » sert de modèle aux bandeaux de titre. Chaque thème ajoute ses accessoires par-dessus.
- **Filou dans le cahier** : poses en PNG sur fond transparent, au moins 1500 px de haut pour une impression nette.

## 6. Contraintes techniques
- React + TypeScript + Vite + Tailwind.
- Données en JSON dans le dépôt (profils, thèmes, cahiers).
- Pas de backend en V1.

## 7. Planning
| Jour | Livrable |
|---|---|
| Lun 12 | Vision, cahier des charges, analyse des besoins |
| Mar 13 | Architecture, modèle de données, page A4 imprimable ; pictogrammes Halloween |
| Mer 14 | Générateurs : chemin/labyrinthe, trouve le même, compter, suites |
| Jeu 15 | Associer, intrus, imagier, page de garde ; poses de Filou (Procreate) |
| Ven 16 | Trame d'histoire, fiches parent, impression test, corrections |
| Sam 17 | Cahiers imprimés |
| Vacances | V1.1 : jeu des différences, export PDF par lot |

## 8. Points ouverts
- [ ] Valider la liste de mots de Mathieu (02, §4)

## 8 bis. Activité bonus Halloween (proposition)
Imprimée à part, idéalement sur papier épais (160 à 200 g), à faire avec l'adulte.

| Bricolage | Lien avec le cahier | Mathieu (GS) | Clara (2 ans) |
|---|---|---|---|
| **Marionnettes des amis de Filou** (à coller sur des bâtonnets ou des pailles) | Raconter l'histoire à voix haute avec les personnages : langage et vocabulaire | colorie, découpe les formes simples, colle | colorie, l'adulte découpe et colle |
| **Masque de Filou** | Se déguiser pour la fête, comme Filou à la mission 10 | colorie, découpe avec aide | décore avec des gommettes, l'adulte découpe |
| **Guirlande des mots** | Les 12 mots du thème affichés à la maison | colorie et enfile les fanions | colorie de grands fanions |

Matériel : ce qu'on a à la maison (ciseaux à bouts ronds, colle, crayons, ficelle, bâtonnets ou pailles, élastique).
Sécurité : rien de petit à portée de Clara, découpage par l'adulte pour elle.

## 9. Évolutions prévues après la base
- **Décoration des pages** : frises et bordures du thème autour de chaque page (feuilles, citrouilles, branches).
- **Histoire du jour en post-it** : encadré légèrement incliné, façon note collée sur la page.
- Jeu des différences, mode livret, export PDF par lot (voir F15, F16).
