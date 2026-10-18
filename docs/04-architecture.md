# 04 — Architecture · JessTech Edu Studio V1

> Version 0.5 — 18/10/2026 — statut : à valider

## 1. Décisions techniques
| Décision | Choix | Pourquoi |
|---|---|---|
| Rendu des pages | React dans le navigateur, impression via `window.print()` | Le navigateur gère polices locales, emojis et SVG ; remplace wkhtmltoimage |
| Stack | Vite + React + TypeScript | Connue, rapide à démarrer, typage du modèle de données |
| Style de l'interface | Tailwind v4 (plugin `@tailwindcss/vite`) | Barre de réglages et écrans de l'app |
| Style des pages imprimées | CSS dédié (`tokens.css`, `impression.css`) | Contrôle fin de `@page`, des variables de couleur et des unités `cqw` |
| Données | Fichiers JSON dans le dépôt | Pas de backend en V1, versionné avec Git |
| Aléatoire | Générateur à graine (mulberry32) | Pages reproductibles (RG3) |
| Polices | paquets `@fontsource/andika` (400, 700) et `@fontsource/grandstander` (600, 800), importés dans `main.tsx` | Vite empaquette les `.woff2` : servis localement, aucun appel réseau à l'impression |
| Illustrations | SVG en composants React (pictogrammes) + PNG (Filou, couverture) | Les SVG suivent les couleurs du thème ; Filou vient de Procreate |

## 2. Arborescence
```
jesstech-edu-studio/
├── docs/                         00 à 07, journal/, methode/ (voir docs/README.md)
├── public/                       favicon
├── src/
│   ├── main.tsx                  imports des polices et des styles
│   ├── App.tsx                   écran unique : état des réglages, trois zones
│   ├── app/                      interface (Tailwind), voir 05-maquettes.md §1
│   │   ├── EnTete.tsx            logo + titre
│   │   ├── BarreImpression.tsx   format, couleur / noir et blanc, imprimer
│   │   ├── Apercu.tsx            une page à la fois, ◀ ▶, compteur
│   │   └── Panneaux.tsx          L'enfant, Le cahier, Cette page
│   ├── hooks/                    useEchelle.ts, useAjustementTexte.ts
│   ├── cahier/                   logique pure, testable sans React
│   │   ├── composer.ts           cahier + profil + thème → Page[]
│   │   ├── pagination.ts         RG1, RG2, RG10
│   │   ├── assemblage.ts         pages → faces de feuille (A4, A5 feuille par jour RG21, livret RG22)
│   │   └── controles.ts          RG7 (répétition des mots)
│   ├── pages/                    un composant par type de page
│   │   ├── Face.tsx              face de feuille imprimée : A4 portrait, ou A4 paysage avec 2 Feuille A5
│   │   ├── Feuille.tsx           conteneur de page (cqw, format)
│   │   ├── PageCouverture.tsx
│   │   ├── PageOuverture.tsx
│   │   ├── PageCitrouilles.tsx
│   │   ├── PageImagier.tsx
│   │   ├── PageActivites.tsx
│   │   ├── PageCreative.tsx
│   │   ├── PageFinale.tsx
│   │   └── PageBravo.tsx
│   ├── composants/               Panneau, Consigne, FilouExplique, Histoire, NoteParent, Picto
│   ├── activites/                un fichier par générateur + registre
│   │   ├── registre.ts
│   │   ├── trouveLeMeme.tsx
│   │   ├── compter.tsx
│   │   ├── labyrinthe.tsx
│   │   ├── chemin.tsx
│   │   └── …
│   ├── illustrations/            Fantome.tsx, Citrouille.tsx, Chat.tsx…
│   ├── lib/                      rng.ts, melange.ts, echelle.ts
│   ├── types.ts                  modèle de données
│   └── styles/
│       ├── interface.css         Tailwind, polices et couleurs de l'interface (clair / sombre)
│       ├── tokens.css            couleurs (couleur + noir et blanc)
│       └── impression.css        @page, sauts de page, masquage de l'interface
└── donnees/
    ├── profils/                  mathieu.json, clara.json
    ├── themes/halloween/
    │   ├── theme.json
    │   ├── missions.json
    │   └── images/               couverture.jpg, filou-citrouille.png, filou-cape.png…
    └── cahiers/                  halloween-2026-mathieu.json, halloween-2026-clara.json
```

## 3. Modèle de données (`src/types.ts`)
```ts
export type Format = 'A4' | 'A5';
export type ModeImpression = 'couleur' | 'nb';
export type Assemblage = 'jour' | 'livret';   // A5 seulement (RG21, RG22)
// TPS sert aussi pour un enfant de 2 à 3 ans pas encore scolarisé.
export type Niveau = 'TPS' | 'PS' | 'MS' | 'GS' | 'CP' | 'CE1' | 'CE2' | 'CM1' | 'CM2';
export type ProfilId = string;

/** Taille réelle d'une page en pixels CSS (96 dpi) */
export const FORMATS: Record<Format, { largeur: number; hauteur: number }> = {
  A4: { largeur: 794, hauteur: 1123 },
  A5: { largeur: 559, hauteur: 794 },
};

export interface Adaptations {
  difficultes: Difficulte[];          // cases cochées par le parent
  consigne: 'picto' | 'orale';
  activitesParPage: Record<Format, number>;
  densite: 'faible' | 'moyenne';
  repetitionMots: number;
  motAColorier: boolean;
}

export interface Profil {
  id: ProfilId;
  prenom: string;
  age: number;
  niveau: Niveau;
  adaptations: Adaptations;
}

export interface Mot { maj: string; min: string; image: string }

export interface Costume { missions: number[]; image: string; libelle: string }

export interface Theme {
  id: string;
  titre: string;
  sousTitre: string;
  couverture: string;
  couleursSemaines: string[];          // noms de variables CSS
  symboleProgression: 'citrouille' | 'etoile' | 'gland';
  mots: Mot[];
  costumes: Costume[];
}

export type Categorie = 'MF'|'GR'|'EC'|'LE'|'PH'|'VO'|'OR'|'CO'|'LO'|'NB'|'ES'|'TE'|'PV'|'AT'|'ME'|'MG'|'CR'|'EM';
export type Difficulte = 'consignes'|'vocabulaire'|'expression'|'prononciation'|'sons'|'lecture'|'ecriture'|'motricite'|'attention'|'memoire'|'espace'|'nombres'|'visuel';

/** Une entrée du catalogue (donnees/catalogue-jeux.json, voir docs/06) */
export interface Jeu {
  id: string;                    // clé du registre des générateurs
  nom: string;
  categorie: Categorie;          // ce qu'il travaille surtout
  secondaires: Categorie[];
  difficultes: Difficulte[];     // difficultés pour lesquelles il est conseillé
  niveaux: string;               // plage de classes, ex. 'TPS-MS' ou 'GS'
  materiel: string;
  generation: 'auto' | 'pictos' | 'texte' | 'scene';
  support: 'fiche' | 'decoupe' | 'jeu' | 'vivre' | 'bricolage';
  variantes: string[];           // formes, de la plus simple à la plus difficile (RG14, RG19)
  // Marqueurs de documentation, ignorés par le générateur.
  dejaCode?: boolean;            // générateur déjà écrit dans le prototype
  nouveau?: boolean;
}

export type Largeur = 'pleine' | 'demi';

export interface ActiviteConfig {
  type: string;                        // clé du registre
  largeur?: Largeur;                   // défaut : 'pleine'
  picto: string;
  consigne: string;
  graine?: number;                     // écrite par « Régénérer »
  params?: Record<string, unknown>;    // ex. { colonnes: 5, lignes: 6 }
  variante?: string;                   // forme tirée sans remise dans le cahier (RG14)
}

export interface TexteParProfil { [profil: ProfilId]: string }

export interface Mission {
  numero: number;                      // 0 = mission finale
  semaine: 1 | 2;
  titre: string;
  mots: string[];                      // clés vers Theme.mots
  explique: Record<ProfilId, { texte: string; question?: string }>;
  histoire: TexteParProfil;
  activites: Record<ProfilId, ActiviteConfig[]>;
  creative: Record<ProfilId, ActiviteConfig[]>;
  parent: TexteParProfil;
  graine: number;
  disposition?: ('explique' | number)[][]; // rangées : 'explique' ou index d'activité
}

export interface Cahier {
  id: string;
  profil: ProfilId;
  theme: string;
  missions: number[];                  // ordre, finale incluse
  format: Format;
  impression: ModeImpression;
}

export type Page =
  | { type: 'couverture' } | { type: 'ouverture' } | { type: 'progression' }
  | { type: 'imagier'; semaine: 1 | 2; cote: 'gauche' | 'droite' }
  | { type: 'activites'; mission: number; activites: ActiviteConfig[][] } // rangées
  | { type: 'creative'; mission: number }
  | { type: 'finale' } | { type: 'bravo' } | { type: 'dessins' } | { type: 'quatrieme' };

/** Une face de feuille imprimée : numéros de page (1 = couverture), null = moitié blanche.
    A4 : une page ; A5 : [gauche, droite] sur une feuille A4 paysage. */
export interface Face {
  pages: (number | null)[];
  cote: 'recto' | 'verso';              // verso : livret seulement
}
```

## 4. Contrat d'un générateur d'activité
```ts
export interface ContexteActivite {
  rng: () => number;    // déjà initialisé avec la bonne graine
  demi: boolean;        // placé côte à côte (RG2)
  profil: Profil;
  theme: Theme;
  mission: Mission;
}

export interface Generateur {
  type: string;
  libelle: string;
  niveaux: Niveau[];
  rendre(config: ActiviteConfig, ctx: ContexteActivite): JSX.Element; // renvoie un <svg>
}
```
Ajouter une activité = créer un fichier dans `src/activites/` et l'inscrire dans `registre.ts`. Rien d'autre à modifier.

## 5. Flux
```
donnees/*.json ──► composer.ts ──► Page[] ──► assemblage.ts ──► Face[] ──► Apercu.tsx ──► <Face> × n ──► window.print()
                     │                                                                   └─ <Feuille> × 1 ou 2
                     ├─ pagination.ts  (activités par page, paires « demi », parité)
                     └─ controles.ts   (répétition des mots → avertissements)
```
`composer.ts`, `pagination.ts`, `assemblage.ts` et `controles.ts` sont des fonctions pures : elles se testent avec Vitest sans navigateur.

## 6. Styles d'impression
- `tokens.css` : variables de couleur sur `:root`, redéfinies sous `:root[data-impression="nb"]`.
- `Feuille.tsx` : la page est toujours rendue **à sa taille réelle** (A4 = 794 × 1123 px, A5 = 559 × 794 px à 96 dpi), en portrait, avec `container-type: inline-size` et tout le contenu en `cqw`.
- `Face.tsx` : une face de feuille imprimée. En A4, une `Feuille` portrait ; en A5, une feuille A4 paysage (1123 × 794 px) coupée en deux moitiés, chacune avec une `Feuille` A5 centrée. À l'écran, c'est la face qui est réduite par `transform: scale()`, jamais en changeant sa largeur : les polices ne descendent donc jamais sous la taille minimale imposée par les navigateurs mobiles. L'échelle vient de `calculerEchelle` (`lib/echelle.ts`, fonction pure testée), appelée par le hook `useEchelle`.
- `useAjustementTexte` (hook) : après le chargement des polices, mesure chaque bloc de texte et réduit sa variable `--kb` tant qu'il déborde, puis `--kp` au niveau de la page (RG13).
- `impression.css` : `@page { size: … ; margin: 0 }` injecté selon le format (A4 portrait en A4, A4 paysage en A5), `break-after: page` sur chaque face, interface masquée. Le livret s'imprime en recto verso, retournement sur le bord court (RG22).

## 7. Plan de démarrage
Les étapes 3 et suivantes suivent l'ordre de construction de la maquette (`05-maquettes.md` §2), pour vérifier chaque étape à l'écran.
1. ✅ Projet Vite React + TypeScript, Tailwind, polices `@fontsource` et TypeScript `strict`. Les dossiers de `src/` et `donnees/` sont créés au fil des étapes, quand ils reçoivent du code.
2. ✅ `types.ts`, `lib/rng.ts`, `styles/tokens.css`, `styles/impression.css`.
3. **Coquille de l'interface + Feuille A4/A5** :
   1. ✅ Coquille en trois zones, valeurs factices.
   2. ✅ Réglages Format et Couleur / Noir et blanc branchés.
   3. Docs techniques de l'assemblage A5 (04, 05, 07).
   4. `Feuille.tsx` à taille réelle, réduite par `useEchelle` → `calculerEchelle` (`lib/echelle.ts`, testé).
   5. `cahier/assemblage.ts` : `facesParJour` (RG21), testé.
   6. `Face.tsx`, 29 pages factices, navigation ◀ ▶ par face, choix Assemblage en A5.
   7. Impression au bon format (A4 portrait, A4 paysage en A5).
   8. `completerLivret` et `facesLivret` (RG22), testés.
   9. Livret à l'écran et à l'impression.
   10. Journal.
4. **Contenu** : porter depuis le prototype `Panneau`, `Consigne`, `FilouExplique`, puis `PageActivites` de la mission 4, affichée dans l'aperçu.
5. **Formulaire** : prénom, classe et difficultés branchés sur le profil.
6. **Boutons ↻** : régénération des activités de la page affichée.

Commits prévus (étape 3, un par sous-étape) :
- `feat: coquille de l'interface en trois zones`
- `feat: réglages format et couleur / noir et blanc`
- `docs: assemblage A5 dans l'architecture et la maquette`
- `feat: feuille à taille réelle réduite à l'écran`
- `feat: ordre des pages A5 en une feuille par jour`
- `feat: aperçu feuille par feuille et navigation`
- `feat: impression du cahier au bon format`
- `feat: ordre des pages du livret plié`
- `feat: aperçu et impression du livret plié`
- `docs: journal de l'étape 3`
