# Journal des décisions

## 2026-10-18 — « Chemin à pointillés » : tous les couloirs à repasser
Décision : l'habillage « chemin à pointillés » met des pointillés dans tous les couloirs et garde les murs en trait fin et clair ; l'enfant cherche son chemin et ne repasse que les pointillés qu'il emprunte. Les quatre habillages de la 4.5 bis (pointillés, rivière, pas japonais, château en pierres) sont dessinés sans tirage aléatoire : la graine ne sert qu'à la structure.
Pourquoi : le labyrinthe garde sa difficulté et devient aussi un exercice de graphisme ; les murs clairs le gardent lisible.
Écarté : les murs en pointillés ; le seul chemin solution en pointillés, gardé comme idée de variante facile pour la TPS et la PS (`06-catalogue-jeux.md` §6 bis).

## 2026-10-18 — Habillages du labyrinthe, séparés de sa structure
Décision : le labyrinthe sépare sa structure (`lib/labyrinthe.ts` : murs, couloirs, impasses, algorithme du prototype inchangé) de son dessin, l'**habillage**. Les habillages d'un jeu sont décrits dans le catalogue (`habillages` : id, nom, thèmes, encre, niveaux) et dessinés par un composant chacun (`activites/labyrinthe/`). Une activité porte un champ `habillage` : écrit dans le cahier, ou attribué par `attribuerHabillages` (`cahier/habillages.ts`, appelé par `composer.ts` plus tard), dans l'ordre du catalogue parmi ceux conseillés pour la classe, sans répétition dans un cahier (RG14 étendue). « Traits simples », le dessin du prototype, reste un habillage à part entière : le plus économe en encre. La mission 4 de Mathieu passe en « chemin de terre ». Le labyrinthe affiche « Départ » et « Arrivée » et pose jusqu'à 3 décorations du thème (`theme.json`, `decorations`) dans des impasses, tirées après les murs.
Pourquoi : des labyrinthes plus jolis et variés sans toucher à l'algorithme ni aux tests des murs ; les étiquettes permettront de choisir selon le thème, l'encre et la classe.
Écarté : l'habillage comme nouvelle variante (il ne change pas la forme du jeu) ; les décorations en paramètre de chaque activité.

## 2026-10-18 — Composition des missions dans le cahier, consignes déduites par les générateurs
Décision : les activités et la disposition de chaque mission ne sont plus dans `missions.json` (le thème), mais dans le JSON du cahier, champ `composition` (`CompositionMission` par numéro de mission). Une activité (`ActiviteConfig`) se limite à `type` (id du jeu du catalogue), `largeur`, `variante` (une des variantes du jeu), `params` et `graine` : exactement ce que `composer.ts` produira. La consigne (picto + phrase) n'est plus écrite : chaque générateur la déduit avec `consigne(config)`. Le générateur ne recopie ni le nom ni les niveaux du jeu, qui restent dans le catalogue. Une étape « Composition automatique du cahier » est ajoutée après les boutons ↻ (`04-architecture.md` §7).
Pourquoi : le choix des jeux dépend de l'enfant (classe, difficultés, RG14 à RG20) et « Régénérer » écrit la graine dans le cahier (RG3) ; écrire la composition à la main dès maintenant sous sa forme finale évite de la réécrire quand `composer.ts` arrivera. Une consigne calculée reste toujours cohérente avec ses paramètres (« Entoure le nombre de fantômes. »).
Écarté : activités par profil dans `missions.json` ; picto et phrase écrits dans chaque activité.

## 2026-10-18 — A5 imprimé par deux sur A4 paysage, deux assemblages
Décision : les pages restent en portrait. En A5, deux pages sont imprimées côte à côte sur une feuille A4 paysage, avec un choix « Assemblage » dans la barre d'impression : « Une feuille par jour » (couverture seule, puis paires 2-3, 4-5… ; une mission par feuille, recto seul, RG21) ou « Livret plié » (imposition recto verso, complété au multiple de 4 par des pages « Mes dessins » et une 4ᵉ de couverture, RG22). L'aperçu montre la feuille telle qu'elle sortira. L'ordre des pages sur les feuilles est calculé par une fonction pure de `src/cahier/`, testée avec Vitest. Le mode livret (F15) passe de « plus tard » à la V1.
Pourquoi : on imprime sur du papier A4. La feuille par jour donne une mission à poser sur la table chaque jour ; le livret donne un vrai petit cahier.
Écarté : imprimer une page A5 seule sur une feuille A4 (papier gâché) ; le livret seul (une feuille par jour est plus simple à distribuer).

## 2026-10-18 — Un seul écran, construit dès l'étape 3
Décision : l'application tient en un seul écran (en-tête et barre d'impression, aperçu d'une page à la fois, panneaux de réglages), d'après l'esquisse du 18/10 (`05-maquettes.md`). La coquille de l'interface est construite à l'étape 3, avec `Feuille.tsx`, puis remplie dans l'ordre de la maquette.
Pourquoi : vérifier chaque étape à l'écran plutôt que dans les tests seuls.
Écarté : un écran d'accueil listant les cahiers, puis un aperçu de toutes les pages à la suite.

## 2026-10-18 — Niveaux par classe et types alignés sur le catalogue
Décision : `Niveau` liste les classes (`TPS`, `PS`, `MS`, `GS`, `CP` à `CM2`) ; `TPS` sert aussi pour un enfant de 2 à 3 ans pas encore scolarisé (Clara). `Jeu.niveaux` reste une plage de classes (`'TPS-MS'`). La catégorie `EM` (émotions et vivre ensemble) est ajoutée ; `dejaCode` et `nouveau` sont des marqueurs de documentation optionnels, ignorés par le générateur.
Pourquoi : `types.ts` doit pouvoir lire `donnees/catalogue-jeux.json` tel qu'il est, et le profil de Mathieu dit « GS ».
Écarté : niveaux larges (`MAT`, `CP-CE1`, `CE2-CM2`) qui ne correspondaient pas au catalogue.

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
