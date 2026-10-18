import type { JSX } from 'react';
import { Fantome } from './Fantome.tsx';
import { Moulin } from './Moulin.tsx';

// Dessins du thème, par clé (Mot.image ou paramètre d'activité), repris du prototype (OBJ).
// Les mots servent aux consignes : « Entoure le nombre de fantômes », « jusqu'au moulin ».
export interface Illustration {
  dessiner(aColorier: boolean): JSX.Element;
  viewBox: string;
  singulier: string;
  pluriel: string;
  article: 'le' | 'la' | "l'";
}

// Rempli au fil des activités portées (étape 4).
export const ILLUSTRATIONS: Record<string, Illustration> = {
  fantome: {
    dessiner: (aColorier) => <Fantome bras aColorier={aColorier} />,
    viewBox: '0 0 100 110',
    singulier: 'fantôme',
    pluriel: 'fantômes',
    article: 'le',
  },
  moulin: {
    dessiner: (aColorier) => <Moulin aColorier={aColorier} />,
    viewBox: '0 0 100 100',
    singulier: 'moulin',
    pluriel: 'moulins',
    article: 'le',
  },
};

/** Illustration d'une clé ; signale une clé absente. */
export function illustrationPour(cle: string): Illustration {
  const illustration = ILLUSTRATIONS[cle];
  if (!illustration) throw new Error(`Aucune illustration pour « ${cle} ».`);
  return illustration;
}
