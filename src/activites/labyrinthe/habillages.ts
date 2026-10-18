// Habillages du labyrinthe : même structure, autre dessin. Leurs étiquettes (thèmes, encre, niveaux)
// sont dans donnees/catalogue-jeux.json. Ajouter un habillage = un fichier ici + une ligne dans le catalogue.
import type { ComponentType } from 'react';
import type { Grille, Labyrinthe } from '../../lib/labyrinthe.ts';
import { CheminDeTerre } from './CheminDeTerre.tsx';
import { Haie } from './Haie.tsx';
import { TraitsSimples } from './TraitsSimples.tsx';

export interface HabillageProps {
  labyrinthe: Labyrinthe;
  grille: Grille;
}

export const HABILLAGES: Record<string, ComponentType<HabillageProps>> = {
  traitsSimples: TraitsSimples,
  cheminDeTerre: CheminDeTerre,
  haie: Haie,
};

// Quand le cahier n'en indique pas (attribuerHabillages en écrit un d'habitude).
export const HABILLAGE_PAR_DEFAUT = 'traitsSimples';
