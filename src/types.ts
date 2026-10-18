// Modèle de données du cahier (voir docs/04-architecture.md §3).

export type Format = 'A4' | 'A5';
export type ModeImpression = 'couleur' | 'nb';
export type Assemblage = 'jour' | 'livret';   // A5 seulement (RG21, RG22)
// TPS sert aussi pour un enfant de 2 à 3 ans pas encore scolarisé.
export type Niveau = 'TPS' | 'PS' | 'MS' | 'GS' | 'CP' | 'CE1' | 'CE2' | 'CM1' | 'CM2';
export const NIVEAUX: readonly Niveau[] = ['TPS', 'PS', 'MS', 'GS', 'CP', 'CE1', 'CE2', 'CM1', 'CM2'];
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

export interface Mot { id: string; maj: string; min: string; image: string }  // image : clé d'illustration

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
  decorations: string[];               // clés d'illustration semées dans les jeux (impasses du labyrinthe)
}

/** Variante d'affichage d'un jeu (ex. labyrinthe en chemin de terre) : même structure, autre dessin. */
export interface Habillage {
  id: string;                          // clé du registre des habillages du jeu
  nom: string;
  themes: string[];                    // ambiances où il va bien ('tous', 'nature'…)
  encre: 'faible' | 'moyenne' | 'forte';
  niveaux: string;                     // plage de classes conseillée, ex. 'PS-GS'
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
  habillages?: Habillage[];      // dessins possibles, jamais deux fois le même dans un cahier (RG14)
  // Marqueurs de documentation, ignorés par le générateur.
  dejaCode?: boolean;            // générateur déjà écrit dans le prototype
  nouveau?: boolean;
}

export type Largeur = 'pleine' | 'demi';

/** Une activité choisie pour une mission : exactement ce que composer.ts produira depuis le catalogue.
    La consigne n'y est pas : le générateur la déduit du type, de la variante et des paramètres. */
export interface ActiviteConfig {
  type: string;                        // id du jeu dans le catalogue = clé du registre
  largeur?: Largeur;                   // défaut : 'pleine'
  variante: string;                    // une des variantes du jeu dans le catalogue, tirée sans remise (RG14)
  habillage?: string;                  // pour un jeu qui en a : écrit dans le cahier, sinon attribué sans répétition (RG14)
  params?: Record<string, unknown>;    // objets du thème, ex. { objet: 'fantome' }
  graine?: number;                     // écrite par « Régénérer » ; sinon graine de la mission + rang × 97 (RG3)
}

export type PictoId =
  | 'entoure' | 'compte' | 'chemin' | 'relie' | 'colorie' | 'colle'
  | 'livre' | 'ciseaux' | 'paille' | 'bouche' | 'oreille';

/** Consigne d'une activité : un pictogramme + une phrase, une seule action (RG6). */
export interface ConsigneActivite { picto: PictoId; texte: string }

/** Rangées de 1 ou 2 blocs : 'explique' (Filou t'explique) ou index d'activité (RG2). */
export type Disposition = ('explique' | number)[][];

/** Choix des activités d'une mission pour un cahier : écrit à la main en V1, produit par composer.ts ensuite. */
export interface CompositionMission {
  disposition: Disposition;
  activites: ActiviteConfig[];
}

export interface TexteParProfil { [profil: ProfilId]: string }

export interface Mission {
  numero: number;                      // 0 = mission finale
  semaine: 1 | 2;
  titre: string;
  mots: string[];                      // clés vers Theme.mots
  explique: Record<ProfilId, { texte: string; question?: string }>;
  histoire: TexteParProfil;
  creative: Record<ProfilId, ActiviteConfig[]>;
  parent: TexteParProfil;
  graine: number;
}

export interface Cahier {
  id: string;
  profil: ProfilId;
  theme: string;
  missions: number[];                  // ordre, finale incluse
  format: Format;
  impression: ModeImpression;
  composition: Record<number, CompositionMission>;  // par numéro de mission
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
