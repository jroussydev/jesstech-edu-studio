# 07 — Feuille de route et idées · JessTech Edu Studio

> Version 0.2 — 18/10/2026 — statut : à valider
> Principe : tout ce qui est fait à la main pour le cahier de Toussaint doit pouvoir être **généré automatiquement** par l'application.

## 1. Parcours cible (V2)
1. **L'enfant** : prénom, âge, niveau (avant l'école, PS, MS, GS, CP… CM2).
2. **Ses besoins** : le parent coche des cases simples (voir §2). Aucune obligation, aucun détail médical.
3. **Le cahier** : thème, durée (1 ou 2 semaines), missions par semaine, format, couleur ou noir et blanc.
4. **Les jeux** : le parent coche les jeux qu'il veut. Ceux conseillés pour les besoins cochés sont pré-cochés et marqués « conseillé ».
5. **Création du cahier** : l'application génère et **enregistre** le cahier.
6. **Aperçu page par page**, avec des actions sur chaque jeu :
   - **Changer** : un autre tirage du même jeu (nouvelle graine) ;
   - **Remplacer** : un autre jeu du catalogue ;
   - **Retirer** : la mise en page se recalcule seule (RG2) ;
   - **Verrouiller** : le jeu ne bouge plus si on régénère le reste ;
   - **Modifier le texte** de l'histoire ou de l'encadré.
7. **Imprimer / télécharger en PDF**, à tout moment, et retrouver ses cahiers plus tard.

## 2. Besoins cochés → réglages automatiques
Ces réglages sont des **aménagements pédagogiques**. L'application enregistre les cases cochées, jamais un diagnostic.

| Case cochée | Ce que l'application ajuste | Jeux conseillés |
|---|---|---|
| Comprendre les consignes | Pictogramme + phrase courte, une seule action, case « modèle » quand c'est possible, question à poser à l'oral | Trouve le même, suites, intrus |
| Vocabulaire, sens des mots | Mots cibles répétés au moins 4 fois, imagier, encadré « Filou t'explique » | Imagier, associer, ombres, ranger par catégorie |
| Prononciation, sons | Activités « Dis-le à voix haute », mots découpés en syllabes | Frappe les syllabes, trouve le son, comptines |
| Lecture (dès le CP) | Syllabes colorées en alternance, texte plus grand, plus d'interligne, phrases courtes | Lis et dessine, relie mot ↔ image |
| Écriture, graphisme | Tracés guidés en pointillés, grandes zones, moins d'écriture | Graphisme, relie les points, labyrinthes |
| Motricité fine | Gros éléments, gommettes plutôt que coloriage fin, découpage fait par l'adulte | Gommettes, chemin au doigt, puzzle |
| Attention, concentration | 2 jeux par page au maximum, missions courtes, une petite pause conseillée | Jeux courts, cherche et trouve facile |
| Mémoire | Rappel de l'histoire de la veille en début de mission | Mémory, « Qui a fait quoi ? » |
| Repérage dans l'espace | Consignes « en haut, en bas, à côté » | Labyrinthes, quadrillages, complète le dessin |
| Nombres | Quantités adaptées au niveau | Compter, coloriage magique par numéros |

Mention affichée : « Ces réglages ne remplacent pas l'avis d'un orthophoniste ou d'un enseignant. Vous pouvez lui montrer le cahier pour l'ajuster. »

## 3. Règles du générateur (pour un cahier réussi sans effort)
- **Variété** : jamais deux fois le même jeu à la suite, et tous les jeux cochés apparaissent.
- **Progression** : la difficulté monte doucement au fil des missions (labyrinthe plus grand, plus d'objets à compter en semaine 2).
- **Répétition des mots** : chaque mot du thème revient le nombre de fois prévu (RG7).
- **Doubles pages** : chaque mission tombe sur une double page (RG10).
- **Textes qui tiennent** : aucun texte hors de son bloc (RG13).

## 4. Idées de jeux à ajouter (toutes générables)
| Jeu | Ce qu'il travaille | Comment le générer |
|---|---|---|
| **Frappe les syllabes** : colorie un rond par syllabe (CI-TROUILLE = 3) | Sons, prononciation, découpage des mots | Syllabes stockées avec chaque mot du thème |
| **Trouve le son** : entoure les images qui commencent par « b » | Conscience des sons | Premier son stocké avec chaque mot |
| **Range dans la bonne maison** (ce qui vole / ce qui se mange) | Sens des mots, catégories | Catégories stockées avec chaque mot |
| **Questions sur l'histoire** : « Qui a perdu son chapeau ? » réponse en images | Compréhension du récit | Question + bonne image + images du thème |
| **Remets l'histoire dans l'ordre** (3 images) | Compréhension, chronologie | 3 scènes par mission |
| **Mémory et loto à découper** | Mémoire, vocabulaire à l'oral, jeu en famille | Cartes générées depuis l'imagier |
| **Coloriage magique** (1 = orange, 2 = vert) | Nombres, couleurs | Zones numérotées dans les dessins à colorier |
| **Dis-le à voix haute** : « Filou mange un… » (image) | Oral, phrases | Phrases à trous du thème |
| **Jeu à deux** (fratrie) : une page à faire ensemble | Échanges, oral | Page commune à deux profils |

## 5. Petits plus qui changent tout
- **Le prénom de l'enfant dans l'histoire** : « Mathieu aide Filou à… ». L'enfant devient le héros.
- **Le smiley du jour** : à la fin de chaque mission, l'enfant colorie 😀 🙂 😕. Le parent voit vite ce qui était trop dur, et l'application pourra plus tard ajuster le cahier suivant.
- **Les mots de la semaine** : une page à afficher sur le frigo, pour en parler au quotidien.
- **Le diplôme final** au prénom de l'enfant, avec la liste des mots appris.
- **Plus tard** : un QR code par mission qui lit l'histoire à voix haute.

## 5 bis. L'activité bonus : apprendre, colorier, et faire ensemble
Chaque cahier est livré avec **un bricolage à faire avec l'enfant**, sur le modèle des kits créatifs du commerce, mais **à imprimer** et avec le matériel de la maison. Le cahier couvre ainsi trois moments : des exercices pour apprendre, du coloriage pour s'amuser, une activité à partager.
- Généré comme le reste : patrons en SVG issus des dessins du thème, prénom de l'enfant, étapes en pictogrammes, liste de matériel.
- Adapté aux besoins cochés : moins de découpage si « Motricité fine », marionnettes conseillées si « Vocabulaire » ou « Prononciation ».
- Une activité qui se rejoue : marionnettes, masque, jeu de société à découper.
- Piste commerciale (V3) : cahier + bricolage à imprimer à petit prix, et plus tard un kit papier envoyé par la poste en option.

## 6. Points d'attention pour la version publique
- **Données d'enfants (RGPD)** : ne stocker que le strict nécessaire (prénom, niveau, cases cochées), consentement du parent, hébergement en Europe, suppression facile du compte et des cahiers.
- **Illustrations** : c'est le vrai goulot d'étranglement. Chaque thème a besoin d'un « pack » (12 mots + 4 poses de Filou) dans un style cohérent. Vérifier les droits d'usage commercial des images générées par IA avant de vendre.
- **Textes générés** : les histoires et encadrés pourront être rédigés par une IA selon le niveau et les besoins, mais **toujours relus et modifiables** par le parent.

## 7. Étapes
| Version | Contenu | Données |
|---|---|---|
| **V1 (Toussaint 2026)** | Cahier Halloween de Mathieu et Clara, aperçu, impression (A4, A5 feuille par jour ou livret plié), une activité bonus | Fichiers JSON |
| **V1.1** | Décoration des pages, histoire en post-it, différences, frappe les syllabes, smiley du jour | Fichiers JSON |
| **V2** | Formulaire enfant + besoins + jeux, génération automatique, cahiers enregistrés, aperçu modifiable | Node.js + PostgreSQL |
| **V3** | Comptes parents, nouveaux thèmes (Noël, Pâques), textes générés, partage, offre commerciale | idem + paiement |
