# 06 — Catalogue des jeux · JessTech Edu Studio

> Version 0.3 — 18/10/2026 — statut : à valider
> Données utilisables par l'application : `donnees/catalogue-jeux.json` (même contenu).

Chaque jeu a **une catégorie** (ce qu'il travaille surtout), des **catégories secondaires**, et les **difficultés** pour lesquelles il est conseillé. Le parent coche les difficultés de son enfant ; l'application choisit les jeux qui correspondent.

## 1. Catégories (ce que le jeu travaille)

| Code | Catégorie |
|---|---|
| MF | Motricité fine |
| GR | Graphisme |
| EC | Écriture |
| LE | Lecture et lettres |
| PH | Sons et syllabes |
| VO | Vocabulaire |
| OR | Langage oral |
| CO | Compréhension |
| LO | Logique |
| NB | Nombres |
| ES | Espace et repérage |
| TE | Temps |
| PV | Perception visuelle |
| AT | Attention |
| ME | Mémoire |
| MG | Motricité globale |
| CR | Créativité |
| EM | Émotions et vivre ensemble |

## 2. Difficultés (ce que le parent peut cocher)

| Code | Difficulté | Jeux conseillés |
|---|---|---|
| `consignes` | Comprendre les consignes | Montre l'objet demandé, Entoure le grand / le petit…, Écoute la devinette et entoure la réponse, Réponds aux questions sur l'histoire, Remets l'histoire dans l'ordre, Fais ce que dit la consigne, Vrai ou faux ?, Trouve le même que le modèle, Sur, sous, devant, derrière, à côté, Relie ce qui vient avant et après, La chasse au trésor de Filou dans la maison, Le dessin dicté : écoute et dessine, Écoute et colorie, La dictée de gommettes, Habille Filou : découpe et colle ce qu'on te demande, Qui suis-je ? Écoute les indices et entoure, Ma journée : remets dans l'ordre matin, midi, soir, La recette de Filou en images : cuisinez ensemble, Les petits problèmes de Filou en images, Colorie les formes |
| `vocabulaire` | Vocabulaire, sens des mots | Relie l'image à son mot, Qui fait ce bruit ?, Mon imagier, Montre l'objet demandé, Range dans la bonne maison, Entoure le grand / le petit…, Relie chaque personnage à son objet, Écoute la devinette et entoure la réponse, Raconte ce que tu vois, Termine la phrase de Filou, Vrai ou faux ?, Entoure l'intrus, Relie chaque image à son ombre, Mémory à découper, Sur, sous, devant, derrière, à côté, Bouge comme les amis de Filou, Le loto des mots, Les dominos d'images, La chasse au trésor de Filou dans la maison, Écoute et colorie, Comment se sent Filou ? Relie le visage et l'émotion, Habille Filou : découpe et colle ce qu'on te demande, Qui suis-je ? Écoute les indices et entoure |
| `expression` | S'exprimer à l'oral, faire des phrases | Dis la comptine avec les gestes, Raconte ce que tu vois, Termine la phrase de Filou, Joue l'histoire avec les marionnettes, Dessine ce qui manque, Le jeu de l'oie de Filou, Le loto des mots, Comment se sent Filou ? Relie le visage et l'émotion, La météo de mon cœur : colorie comment tu te sens aujourd'hui |
| `prononciation` | Prononciation, articulation | Frappe les syllabes et colorie un rond par syllabe, Entoure les images qui commencent par le même son, Pareil ou pas pareil ?, Qui fait ce bruit ?, Dis la comptine avec les gestes, Joue l'histoire avec les marionnettes, Le train des syllabes : place chaque image dans le wagon qui a le bon nombre de syllabes, Le perroquet : répète des mots de plus en plus longs, Les grimaces de Filou, Les jeux de souffle : fais avancer le fantôme en papier avec une paille |
| `sons` | Entendre les sons et les syllabes | Frappe les syllabes et colorie un rond par syllabe, Entoure les images qui commencent par le même son, Relie les mots qui riment, Pareil ou pas pareil ?, Le train des syllabes : place chaque image dans le wagon qui a le bon nombre de syllabes, Le chemin des sons : passe seulement par les images qui commencent par le son du jour, Entoure le mot le plus long |
| `lecture` | Lettres et lecture | Repasse les lettres du mot, Copie le mot du jour, Colorie les lettres du mot, Entoure toutes les lettres pareilles, Entoure le même mot, Relie la capitale et la minuscule, Relie l'image à son mot, Colle les lettres dans l'ordre, Les mots croisés en images, Les mots mêlés, Le coloriage codé par lettres, Entoure le mot le plus long |
| `ecriture` | Écriture, graphisme | Découpe sur le trait, Pose la pâte à modeler sur le modèle, Suis le chemin avec ton doigt, Suis les pointillés avec ton crayon, Décore avec des motifs, Relie les points dans l'ordre, Repasse les lettres du mot, Écris ton prénom, Copie le mot du jour, Trace la lettre en suivant les flèches, Colle les lettres dans l'ordre, Dessine ce qui manque, Les mots croisés en images, Écris en l'air et dans le dos, Trace dans le plateau de sel ou de semoule |
| `motricite` | Motricité fine | Colle les gommettes sur les ronds, Déchire et colle des morceaux de papier, Découpe sur le trait, Pose la pâte à modeler sur le modèle, Fais des empreintes avec ton doigt, Colorie le dessin, Suis le chemin avec ton doigt, Suis les pointillés avec ton crayon, Colorie les lettres du mot, Colle autant de gommettes que de…, Puzzle à découper, La dictée de gommettes, Habille Filou : découpe et colle ce qu'on te demande, Le coloriage codé par lettres, Trace dans le plateau de sel ou de semoule, La carte à lacer, Les pinces à linge : accroche le bon nombre, Remets chaque forme dans son trou |
| `attention` | Attention, concentration | Colle les gommettes sur les ronds, Colorie le dessin, Suis le chemin avec ton doigt, Relie les points dans l'ordre, Trace le chemin dans le labyrinthe, Reproduis le dessin case par case, Continue la suite, Entoure l'intrus, Trie par couleur, taille ou forme, Sudoku d'images, Colorie selon les numéros, Trouve le même que le modèle, Cherche et trouve, Trouve les différences, Bouge comme les amis de Filou, Le jeu de l'oie de Filou, Les jeux de souffle : fais avancer le fantôme en papier avec une paille, Les mots mêlés, La carte à lacer, Le pixel art : colorie les cases comme le modèle, Le jeu de Kim : observe, cache, retrouve |
| `memoire` | Mémoire | Dis la comptine avec les gestes, Réponds aux questions sur l'histoire, Remets l'histoire dans l'ordre, Mémory à découper, Qu'est-ce qui a disparu ?, Le perroquet : répète des mots de plus en plus longs, Qui suis-je ? Écoute les indices et entoure, Le jeu de Kim : observe, cache, retrouve |
| `espace` | Repérage dans l'espace | Trace le chemin dans le labyrinthe, Complète l'autre moitié, Reproduis le dessin case par case, Fais ce que dit la consigne, Sudoku d'images, Puzzle à découper, Sur, sous, devant, derrière, à côté, La chasse au trésor de Filou dans la maison, Le chemin des sons : passe seulement par les images qui commencent par le son du jour, Le dessin dicté : écoute et dessine, La dictée de gommettes, Le tangram de Filou, Le pixel art : colorie les cases comme le modèle |
| `nombres` | Nombres | Relie les points dans l'ordre, Range du plus petit au plus grand, Compte et entoure le bon nombre, Colle autant de gommettes que de…, Colorie selon les numéros, Relie le dé et le nombre, Entoure le groupe où il y en a le plus, Le jeu de l'oie de Filou, La bataille des nombres, La recette de Filou en images : cuisinez ensemble, Les pinces à linge : accroche le bon nombre, Les petits problèmes de Filou en images, Partage les bonbons entre les amis |
| `visuel` | Perception visuelle | Complète l'autre moitié, Entoure toutes les lettres pareilles, Entoure le même mot, Trouve le même que le modèle, Relie chaque image à son ombre, Cherche et trouve, Trouve les différences, Puzzle à découper, Qu'est-ce qui a disparu ?, Les dominos d'images, Les mots mêlés, Remets chaque forme dans son trou, Colorie les formes, Le tangram de Filou |

## 3. Niveaux

TPS : 2 à 3 ans · PS : 3 à 4 ans · MS : 4 à 5 ans · GS : 5 à 6 ans.

## 4. Supports

| Code | Forme du jeu |
|---|---|
| fiche | fiche à faire sur le cahier |
| decoupe | à découper puis à jouer |
| jeu | jeu à plusieurs (plateau, cartes) |
| vivre | à vivre sans crayon (oral, geste, maison) |
| bricolage | bricolage à faire ensemble |

## 5. Génération

| Code | Ce qu'il faut pour générer le jeu |
|---|---|
| auto | code seul |
| pictos | code + pictos du thème |
| texte | code + textes rédigés |
| scene | illustration dédiée |

## 6. Les jeux

### Motricité fine (MF)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Colle les gommettes sur les ronds ✔ | CR | motricite, attention | TPS-MS | fiche | gommettes | pictos | ronds sur un dessin · ligne de ronds à suivre · remplir une forme · quantité imposée · couleur imposée par rond |
| Déchire et colle des morceaux de papier | CR | motricite | TPS-PS | fiche | papier, colle | pictos | remplir une citrouille · feuillage d'un arbre · mosaïque libre |
| Découpe sur le trait | GR | motricite, ecriture | PS-GS | decoupe | ciseaux à bouts ronds | auto | frange (PS) · ligne droite · vague · zigzag · contour d'une forme (GS) |
| Pose la pâte à modeler sur le modèle | EC | motricite, ecriture | PS-GS | vivre | pâte à modeler | auto | lettre du mot · forme simple · chiffre |
| Fais des empreintes avec ton doigt | CR | motricite | TPS-PS | fiche | feutre ou peinture | pictos | feuilles d'un arbre · pépins de citrouille · étoiles du ciel |
| Colorie le dessin ✔ | CR, AT | motricite, attention | TPS-GS | fiche | crayons | pictos | grandes zones (TPS) · zones moyennes · petites zones (GS) · coloriage géant |
| La carte à lacer (carton percé, laine) 🆕 | AT | motricite, attention | TPS-MS | bricolage | carton, laine, perforatrice | pictos | 4 trous · 8 trous · suivre un contour |
| Les pinces à linge : accroche le bon nombre 🆕 | NB | motricite, nombres | PS-GS | bricolage | pinces à linge | auto | couleurs (PS) · nombres jusqu'à 5 · nombres jusqu'à 10 |

### Graphisme (GR)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Suis le chemin avec ton doigt ✔ | ES | motricite, ecriture, attention | TPS-PS | fiche | doigt | auto | vague · zigzag · spirale · boucles · escalier · créneaux · ligne brisée · avec obstacles · double chemin · colimaçon |
| Suis les pointillés avec ton crayon ✔ | MF | ecriture, motricite | TPS-GS | fiche | crayon | auto | traits horizontaux · traits verticaux · obliques · vagues · ponts · coupes · boucles · ronds · spirales · zigzags |
| Décore avec des motifs | CR | ecriture | PS-GS | fiche | crayon | pictos | pluie (traits) · toile (ronds) · écailles (ponts) · herbe (traits obliques) · fumée (boucles) |
| Relie les points dans l'ordre | NB, AT | nombres, ecriture, attention | MS-GS | fiche | crayon | pictos | de 1 à 5 · de 1 à 10 · de A à J (GS) |
| Écris en l'air et dans le dos (jeu à deux) 🆕 | MG | ecriture | MS-GS | vivre | aucun | auto | traits et ronds · lettres du prénom |
| Trace dans le plateau de sel ou de semoule 🆕 | MF | ecriture, motricite | TPS-GS | vivre | plateau, sel | auto | traits libres · formes · lettres (GS) |

### Écriture (EC)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Repasse les lettres du mot | LE | ecriture, lecture | MS-GS | fiche | crayon | auto | capitales · script · cursive (fin GS) · grandes lettres puis petites |
| Écris ton prénom | LE | ecriture | PS-GS | fiche | crayon | auto | retrouve et entoure (PS) · repasse les pointillés · copie sous le modèle · seul |
| Copie le mot du jour | LE | ecriture, lecture | GS | fiche | crayon | auto | avec pointillés · avec modèle · seul dans les cases |
| Trace la lettre en suivant les flèches | GR | ecriture | GS | fiche | crayon | auto | lettre capitale · lettre cursive |

### Lecture et lettres (LE)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Colorie les lettres du mot ✔ | EC, MF | lecture, motricite | MS-GS | fiche | crayons | auto | mot du jour · prénom · initiale seule |
| Entoure toutes les lettres pareilles | PV | lecture, visuel | MS-GS | fiche | crayon | auto | capitales · avec lettres proches (C, G, O) · script (GS) |
| Entoure le même mot | PV | lecture, visuel | GS | fiche | crayon | auto | mots très différents · mots proches (CHAT, CHUT) |
| Relie la capitale et la minuscule | — | lecture | GS | fiche | crayon | auto | lettres du mot · lettres du prénom |
| Relie l'image à son mot ✔ | VO | lecture, vocabulaire | GS | fiche | crayon | pictos | 3 mots · 4 mots · mots en script |
| Colle les lettres dans l'ordre | EC, MF | lecture, ecriture | GS | decoupe | ciseaux, colle | auto | avec modèle au-dessus · modèle caché |
| Les mots croisés en images 🆕 | EC | lecture, ecriture | GS | fiche | crayon | pictos | 3 mots courts · 4 mots |
| Les mots mêlés 🆕 | PV, AT | lecture, visuel, attention | GS | fiche | crayon | auto | 3 mots, grille 5×5 · 4 mots, grille 6×6 |
| Le coloriage codé par lettres (A = orange) 🆕 | MF | lecture, motricite | GS | fiche | crayons | scene | 2 lettres · 4 lettres |
| Entoure le mot le plus long 🆕 | PH | lecture, sons | GS | fiche | crayon | auto | 2 mots · 3 mots |

### Sons et syllabes (PH)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Frappe les syllabes et colorie un rond par syllabe | OR | sons, prononciation | MS-GS | fiche | crayon | pictos | mots de 1 à 2 syllabes · mots de 2 à 3 syllabes · mots de 3 à 4 syllabes |
| Entoure les images qui commencent par le même son | VO | sons, prononciation | GS | fiche | crayon | pictos | sons longs (f, s, ch, m) · sons courts (b, p, t) |
| Relie les mots qui riment | VO | sons | MS-GS | fiche | crayon | pictos | 2 paires (MS) · 3 à 4 paires (GS) |
| Pareil ou pas pareil ? (l'adulte dit deux mots) | OR | prononciation, sons | MS-GS | vivre | aucun | texte | voyelles · consonnes proches (p/b, t/d) |
| Qui fait ce bruit ? | VO | prononciation, vocabulaire | TPS-PS | vivre | aucun | pictos | cris d'animaux · bruits de la maison |
| Le train des syllabes : place chaque image dans le wagon qui a le bon nombre de syllabes 🆕 | VO | sons, prononciation | MS-GS | decoupe | ciseaux, colle | pictos | wagons de 1 à 2 syllabes · wagons de 1 à 3 syllabes |
| Le chemin des sons : passe seulement par les images qui commencent par le son du jour 🆕 | ES | sons, espace | GS | fiche | crayon | pictos | son « ch » · son « b » · son « s » |

### Vocabulaire (VO)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Mon imagier ✔ | — | vocabulaire | TPS-GS | fiche | aucun | pictos | 3 mots par page · 6 mots par page |
| Montre l'objet demandé ✔ | CO | vocabulaire, consignes | TPS-PS | fiche | doigt | pictos | parmi 2 · parmi 4 · « Montre ce qui vole » |
| Range dans la bonne maison | LO | vocabulaire | PS-GS | fiche | crayon ou découpage | pictos | 2 maisons · 3 maisons · avec intrus |
| Entoure le grand / le petit… | CO | vocabulaire, consignes | PS-GS | fiche | crayon | pictos | grand / petit · plein / vide · dedans / dehors · jour / nuit |
| Relie chaque personnage à son objet | CO | vocabulaire | MS-GS | fiche | crayon | pictos | 3 paires · 4 paires |
| Écoute la devinette et entoure la réponse | CO | vocabulaire, consignes | MS-GS | fiche | crayon | texte | 2 indices · 3 indices |
| Le loto des mots 🆕 | OR, PV | vocabulaire, expression | TPS-GS | jeu | ciseaux | pictos | 4 cases (TPS) · 6 cases · 9 cases avec mots écrits (GS) |
| Qui suis-je ? Écoute les indices et entoure 🆕 | CO, ME | vocabulaire, consignes, memoire | MS-GS | fiche | crayon | texte | 2 indices · 3 indices · indices en images seulement (PS) |

### Langage oral (OR)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Dis la comptine avec les gestes | PH, ME | prononciation, expression, memoire | TPS-GS | vivre | aucun | texte | 2 vers (TPS) · 4 vers · avec rimes à compléter |
| Raconte ce que tu vois | VO | expression, vocabulaire | PS-GS | vivre | aucun | scene | qui ? où ? · que fait-il ? · que va-t-il se passer ? |
| Termine la phrase de Filou | VO | expression, vocabulaire | MS-GS | vivre | aucun | texte | un mot manquant · fin de phrase à inventer |
| Joue l'histoire avec les marionnettes ✔ | MF, CR | expression, prononciation | TPS-GS | bricolage | ciseaux, pailles | pictos | amis du thème · personnages de la mission |
| Le perroquet : répète des mots de plus en plus longs 🆕 | PH, ME | prononciation, memoire | MS-GS | vivre | aucun | texte | mots de 1 à 2 syllabes · mots de 3 syllabes · petites phrases |
| Les grimaces de Filou (gonfle les joues, tire la langue, fais un bisou) 🆕 | MG | prononciation | TPS-GS | vivre | miroir | pictos | 3 grimaces · 5 grimaces · grimaces enchaînées |

### Compréhension (CO)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Réponds aux questions sur l'histoire | ME | consignes, memoire | PS-GS | fiche | crayon | texte | qui ? · où ? · pourquoi ? (GS) |
| Remets l'histoire dans l'ordre | TE | consignes, memoire | MS-GS | decoupe | ciseaux, colle | scene | 2 images (PS) · 3 images · 4 images (GS) |
| Fais ce que dit la consigne (« Colorie le chat en bas ») | ES | consignes, espace | PS-GS | fiche | crayons | pictos | 1 consigne · 2 consignes à la suite (GS) |
| Vrai ou faux ? | VO | consignes, vocabulaire | GS | fiche | crayon | texte | 3 phrases · 4 phrases |
| La chasse au trésor de Filou dans la maison 🆕 | ES, MG | consignes, espace, vocabulaire | PS-GS | vivre | cartes à découper | pictos | 3 indices en images · 5 indices · indices avec positions (sous, derrière) |
| Le dessin dicté : écoute et dessine (« une lune en haut à droite ») 🆕 | ES, OR | consignes, espace | MS-GS | fiche | crayons | texte | 2 consignes · 4 consignes avec positions |
| Écoute et colorie (« le chapeau en violet ») 🆕 | VO | consignes, vocabulaire | PS-GS | fiche | crayons | pictos | 1 consigne de couleur · 3 consignes |
| La dictée de gommettes (« une gommette sous la lune ») 🆕 | ES, MF | consignes, espace, motricite | PS-GS | fiche | gommettes | pictos | sur / sous · à côté / entre · 3 consignes à la suite |
| Habille Filou : découpe et colle ce qu'on te demande 🆕 | VO, MF | consignes, vocabulaire, motricite | PS-GS | decoupe | ciseaux, colle | pictos | 1 vêtement · 3 vêtements · tenue complète d'un thème |
| La recette de Filou en images : cuisinez ensemble 🆕 | TE, NB | consignes, nombres | PS-GS | vivre | cuisine | pictos | 3 étapes · 5 étapes avec quantités |

### Logique (LO)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Continue la suite ✔ | AT | attention | PS-GS | fiche | crayon | pictos | AB · AAB · ABB · ABC · couleurs · tailles |
| Entoure l'intrus ✔ | VO | vocabulaire, attention | PS-GS | fiche | crayon | pictos | objet différent · catégorie différente (GS) |
| Trie par couleur, taille ou forme | — | attention | TPS-MS | fiche | crayon ou découpage | pictos | couleur · taille · forme |
| Range du plus petit au plus grand | NB | nombres | MS-GS | fiche | ciseaux, colle | pictos | 3 objets · 4 objets · 5 objets |
| Sudoku d'images | ES, AT | attention, espace | GS | fiche | crayon ou gommettes | pictos | 3×3 · 4×4 |
| Les dominos d'images 🆕 | VO, PV | vocabulaire, visuel | PS-GS | jeu | ciseaux | pictos | image ↔ image · image ↔ ombre · image ↔ mot (GS) |
| Colorie les formes (ronds en orange, carrés en bleu) 🆕 | ES | visuel, consignes | PS-GS | fiche | crayons | auto | ronds et carrés · + triangles · + rectangles (GS) |

### Nombres (NB)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Compte et entoure le bon nombre ✔ | — | nombres | MS-GS | fiche | crayon | pictos | jusqu'à 5 · jusqu'à 10 · objets en désordre ou alignés |
| Colle autant de gommettes que de… | MF | nombres, motricite | PS-GS | fiche | gommettes | pictos | jusqu'à 3 · jusqu'à 6 · jusqu'à 10 |
| Colorie selon les numéros | MF, AT | nombres, attention | MS-GS | fiche | crayons | scene | 3 couleurs · 5 couleurs |
| Relie le dé et le nombre | — | nombres | PS-GS | fiche | crayon | auto | dé ↔ quantité · dé ↔ chiffre |
| Entoure le groupe où il y en a le plus | PV | nombres | PS-GS | fiche | crayon | pictos | écart grand · écart petit |
| Le jeu de l'oie de Filou 🆕 | OR, CO | nombres, expression, attention | MS-GS | jeu | dé, pions | pictos | 20 cases (MS) · 30 cases avec cases défis (GS) · cases « dis un mot du thème » |
| La bataille des nombres 🆕 | — | nombres | MS-GS | jeu | ciseaux | auto | constellations jusqu'à 6 · chiffres jusqu'à 10 |
| Les petits problèmes de Filou en images (3 bonbons, on en ajoute 1) 🆕 | CO | nombres, consignes | GS | fiche | crayon | pictos | ajouter · retirer · partager entre 2 |
| Partage les bonbons entre les amis 🆕 | MF | nombres | MS-GS | fiche | gommettes ou crayon | pictos | entre 2 · entre 3 |

### Espace et repérage (ES)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Trace le chemin dans le labyrinthe ✔ | GR, AT | espace, attention | PS-GS | fiche | crayon | auto | grille carrée · grille ronde · en forme d'objet · avec objets à ramasser · grand labyrinthe final ; habillages : voir §6 bis |
| Complète l'autre moitié | GR, PV | espace, visuel | GS | fiche | crayon | pictos | quadrillage 6×6 · quadrillage 8×8 · dessin à points |
| Reproduis le dessin case par case | AT | espace, attention | GS | fiche | crayon | auto | 4×4 · 5×5 · 6×6 |
| Sur, sous, devant, derrière, à côté | VO | espace, vocabulaire, consignes | PS-GS | fiche | crayon ou gommettes | pictos | sur / sous · devant / derrière · à côté / entre (GS) |
| Le tangram de Filou 🆕 | LO, PV | espace, visuel | MS-GS | decoupe | ciseaux | auto | 3 pièces avec contour intérieur · 5 pièces · silhouette seule (GS) |
| Le pixel art : colorie les cases comme le modèle 🆕 | AT, NB | espace, attention | GS | fiche | crayons | auto | 6×6 · 8×8 · 10×10 |

### Temps (TE)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Relie ce qui vient avant et après | CO | consignes | MS-GS | fiche | crayon | scene | 2 images · jour / nuit |
| Ma journée : remets dans l'ordre matin, midi, soir 🆕 | CO | consignes | MS-GS | decoupe | ciseaux, colle | pictos | 3 moments · 4 moments |

### Perception visuelle (PV)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Trouve le même que le modèle ✔ | AT | visuel, attention, consignes | TPS-GS | fiche | crayon ou doigt | pictos | 1 parmi 2 (TPS) · 1 parmi 4 · détails fins (GS) |
| Relie chaque image à son ombre ✔ | VO | visuel, vocabulaire | TPS-GS | fiche | crayon ou doigt | pictos | 2 objets · 3 objets · 4 objets |
| Cherche et trouve ✔ | AT | attention, visuel | PS-GS | fiche | crayon | pictos | grille · scène en désordre · objets tournés |
| Trouve les différences | AT | attention, visuel | PS-GS | fiche | crayon | scene | 2 à 3 différences · 5 différences · 7 différences (GS) |
| Puzzle à découper | ES, MF | visuel, espace, motricite | TPS-GS | decoupe | ciseaux, colle | pictos | 2 à 3 pièces · 4 pièces · 6 à 9 pièces (GS) |
| Remets chaque forme dans son trou 🆕 | MF | visuel, motricite | TPS-PS | decoupe | ciseaux (adulte) | pictos | 3 formes · 5 formes |

### Mémoire (ME)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Mémory à découper | VO | memoire, vocabulaire | PS-GS | jeu | ciseaux | pictos | image ↔ image · image ↔ mot (GS) |
| Qu'est-ce qui a disparu ? | PV | memoire, visuel | MS-GS | fiche | crayon | pictos | 3 objets · 5 objets |
| Le jeu de Kim : observe, cache, retrouve 🆕 | PV, AT | memoire, attention | MS-GS | fiche | crayon | pictos | 3 objets · 5 objets · 7 objets |

### Motricité globale (MG)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Bouge comme les amis de Filou | VO, AT | attention, vocabulaire | TPS-GS | vivre | aucun | pictos | vole comme la chauve-souris · balaie comme la sorcière · saute comme une citrouille qui roule |
| Les jeux de souffle : fais avancer le fantôme en papier avec une paille 🆕 | OR | prononciation, attention | TPS-GS | vivre | paille, papier | pictos | souffle libre · parcours tracé · course à deux |

### Créativité (CR)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Dessine ce qui manque | GR | ecriture, expression | PS-GS | fiche | crayons | pictos | le chapeau de la sorcière · les yeux de la citrouille · un ami pour Filou |

### Émotions et vivre ensemble (EM)

| Jeu | Travaille aussi | Difficultés | Niveaux | Support | Matériel | Génération | Variantes de forme |
|---|---|---|---|---|---|---|---|
| Comment se sent Filou ? Relie le visage et l'émotion 🆕 | VO, OR | vocabulaire, expression | PS-GS | fiche | crayon | pictos | content / triste · peur / colère · surpris / fier (GS) |
| La météo de mon cœur : colorie comment tu te sens aujourd'hui 🆕 | OR | expression | PS-GS | fiche | crayons | auto | 3 visages · 5 visages |

✔ = déjà codé dans les prototypes · 🆕 = ajouté dans la version 0.2.

## 6 bis. Habillages

Un **habillage** est une variante d'affichage d'un jeu : la structure ne change pas (mêmes murs, même solution), seul le dessin change. Une **variante** change la forme du jeu (grille carrée, grille ronde…) ; un habillage change son apparence. Chaque habillage porte des étiquettes : les **thèmes** où il va bien, la **consommation d'encre** (faible, moyenne, forte) et les **niveaux conseillés**. Toutes ses couleurs sont des variables de `tokens.css`, redéfinies en noir et blanc.

**Labyrinthe** : départ (Filou) et arrivée (un objet du thème) sont étiquetés « Départ » et « Arrivée » ; jusqu'à 3 décorations du thème (`theme.json`, `decorations`) sont posées dans des impasses, jamais sur le bon chemin.

| Habillage | Dessin | Thèmes | Encre | Niveaux |
|---|---|---|---|---|
| traits simples | les murs en trait fin (dessin du prototype) | tous | faible | PS-GS |
| chemin de terre | les couloirs en chemin bordé | tous, nature | moyenne | PS-GS |
| chemin à pointillés | tous les couloirs en pointillés, murs fins et clairs : l'enfant cherche son chemin et repasse les pointillés qu'il emprunte | tous | faible | PS-GS |
| rivière | les couloirs en eau bordée, avec des vaguelettes | nature, eau | forte | PS-GS |
| haie | les murs épais et arrondis, en feuillage | nature, jardin | moyenne | MS-GS |
| pas japonais | des pierres plates le long des couloirs, sans murs | nature, jardin | moyenne | MS-GS |
| château en pierres | les murs épais en pierres de taille, angles droits | château, halloween | forte | MS-GS |

L'ordre du tableau est celui du catalogue, donc celui de l'attribution (RG14).

À venir : les formes rondes (toile d'araignée) et en forme d'objet (citrouille), qui sont des variantes. Idée de variante facile pour la TPS et la PS : « chemin solution en pointillés » (seul le bon chemin est à repasser).

## 7. Règles de composition d'un cahier

| ID | Règle |
|---|---|
| RG14 | **Jamais deux fois la même forme** : dans un même cahier, deux occurrences d'un jeu utilisent deux variantes différentes (tirage sans remise parmi les variantes du jeu). Quand toutes les variantes ont servi, on change les paramètres (taille, nombre, objets). Exemple : « Suis le chemin avec ton doigt » est une vague, puis un zigzag, puis une spirale… De même, deux occurrences d'un jeu n'ont jamais le même **habillage** (§6 bis) : pris dans l'ordre du catalogue parmi ceux conseillés pour la classe, un nouveau tour ne commence que lorsque tous ont servi. |
| RG15 | **Variété** : un même jeu apparaît au plus 2 fois par semaine, jamais deux missions de suite. |
| RG16 | **Équilibre** : chaque semaine couvre au moins 5 catégories différentes. Chaque mission mélange au moins 2 catégories. |
| RG17 | **Socle par niveau** : en GS, chaque mission contient un jeu d'écriture ou de graphisme ; en TPS, chaque mission contient un jeu de motricité fine. |
| RG18 | **Priorité aux difficultés cochées** : au moins la moitié des jeux d'une mission travaillent une difficulté cochée, sans dépasser 2 jeux de la même catégorie par mission. |
| RG19 | **Progression** : au sein d'un jeu, les variantes sont classées du plus simple au plus difficile et tirées dans cet ordre au fil des missions. |
| RG20 | **Supports** : le cahier contient surtout des fiches ; au plus un jeu « à découper » ou « à plusieurs » par semaine, et un jeu « à vivre » par mission en TPS. |

## 8. Ce que ça change pour les cahiers de Mathieu et Clara

- **Mathieu (GS, vocabulaire et compréhension)** : ajouter chaque jour un jeu d'écriture (repasse les lettres du mot, écris ton prénom, copie le mot du jour), et des jeux de sons (syllabes, son d'attaque, rimes), en plus du vocabulaire.
- **Clara (TPS)** : chemins au doigt et pointillés tous différents (vague, zigzag, spirale, boucles…), plus de motricité fine (déchire et colle, empreintes, gommettes en quantité), devinettes sonores, comptines, « Bouge comme Filou ».
