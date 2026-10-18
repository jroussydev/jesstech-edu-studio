// Modèle de données du cahier (voir docs/04-architecture.md §3).

export type Format = 'A4' | 'A5';
export type ModeImpression = 'couleur' | 'nb';
// TPS sert aussi pour un enfant de 2 à 3 ans pas encore scolarisé.
export type Niveau = 'TPS' | 'PS' | 'MS' | 'GS' | 'CP' | 'CE1' | 'CE2' | 'CM1' | 'CM2';
export type ProfilId = string;

/** Taille réelle d'une page en pixels CSS (96 dpi) : la page est rendue à cette taille puis réduite par transform: scale(). */
export const FORMATS: Record<Format, { largeur: number; hauteur: number }> = {
  A4: { largeur: 794, hauteur: 1123 },
  A5: { largeur: 559, hauteur: 794 },
};

export type Categorie =
  | 'MF' | 'GR' | 'EC' | 'LE' | 'PH' | 'VO' | 'OR' | 'CO' | 'LO'
  | 'NB' | 'ES' | 'TE' | 'PV' | 'AT' | 'ME' | 'MG' | 'CR' | 'EM';

export type Difficulte =
  | 'consignes' | 'vocabulaire' | 'expression' | 'prononciation' | 'sons' | 'lecture'
  | 'ecriture' | 'motricite' | 'attention' | 'memoire' | 'espace' | 'nombres' | 'visuel';

/** Besoins pédagogiques cochés par le parent : jamais un diagnostic. */
export interface Adaptations {
  difficultes: Difficulte[];
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
  | { type: 'finale' } | { type: 'bravo' } | { type: 'dessins' };
