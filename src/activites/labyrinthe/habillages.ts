// Habillages du labyrinthe : même structure, autre dessin. Leurs étiquettes (thèmes, encre, niveaux)
// sont dans donnees/catalogue-jeux.json. Ajouter un habillage = un fichier ici + une ligne dans le catalogue.
import type { ComponentType } from 'react';
import type { Grille, Labyrinthe } from '../../lib/labyrinthe.ts';
import { ChateauEnPierres } from './ChateauEnPierres.tsx';
import { CheminDeTerre } from './CheminDeTerre.tsx';
import { Haie } from './Haie.tsx';
import { PasJaponais } from './PasJaponais.tsx';
import { Pointilles } from './Pointilles.tsx';
import { Riviere } from './Riviere.tsx';
import { TraitsSimples } from './TraitsSimples.tsx';

export interface HabillageProps {
  labyrinthe: Labyrinthe;
  grille: Grille;
}

export const HABILLAGES: Record<string, ComponentType<HabillageProps>> = {
  traitsSimples: TraitsSimples,
  cheminDeTerre: CheminDeTerre,
  pointilles: Pointilles,
  riviere: Riviere,
  haie: Haie,
  pasJaponais: PasJaponais,
  chateauEnPierres: ChateauEnPierres,
};

// Quand le cahier n'en indique pas (attribuerHabillages en écrit un d'habitude).
export const HABILLAGE_PAR_DEFAUT = 'traitsSimples';
