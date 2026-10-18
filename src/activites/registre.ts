// Contrat d'un générateur d'activité (voir docs/04-architecture.md §4).
// Ajouter une activité = créer un fichier dans src/activites/ et l'inscrire dans REGISTRE. Rien d'autre à modifier.
import type { JSX } from 'react';
import type { Rng } from '../lib/rng.ts';
import type { ActiviteConfig, ConsigneActivite, Mission, Profil, Theme } from '../types.ts';
import { compter } from './compter.tsx';
import { trouveLeMeme } from './trouveLeMeme.tsx';

export interface ContexteActivite {
  rng: Rng;             // neuf à chaque appel de rendre(), initialisé avec la graine de l'activité (RG3)
  demi: boolean;        // placée à côté d'un autre bloc (RG2)
  profil: Profil;
  theme: Theme;
  mission: Mission;
  filou: string;        // URL de l'image de Filou dans le costume de la mission (RG8)
}

export interface Generateur {
  type: string;                                        // id du jeu dans le catalogue
  consigne(config: ActiviteConfig): ConsigneActivite;  // picto + phrase, déduits des paramètres
  rendre(config: ActiviteConfig, ctx: ContexteActivite): JSX.Element;  // renvoie un <svg>
}

// Rempli au fil des générateurs portés du prototype (étape 4).
export const REGISTRE: Record<string, Generateur> = {
  [trouveLeMeme.type]: trouveLeMeme,
  [compter.type]: compter,
};

/** Générateur d'un type d'activité ; signale un type absent du registre. */
export function generateurPour(type: string): Generateur {
  const generateur = REGISTRE[type];
  if (!generateur) throw new Error(`Aucun générateur pour l'activité « ${type} ».`);
  return generateur;
}
