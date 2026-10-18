import type { JSX } from 'react';
import { Araignee } from './Araignee.tsx';
import { Bonbon } from './Bonbon.tsx';
import { ChauveSouris } from './ChauveSouris.tsx';
import { Citrouille } from './Citrouille.tsx';
import { Fantome } from './Fantome.tsx';
import { Lune } from './Lune.tsx';
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
  citrouille: {
    dessiner: (aColorier) => <Citrouille aColorier={aColorier} />,
    viewBox: '0 0 100 90',
    singulier: 'citrouille',
    pluriel: 'citrouilles',
    article: 'la',
  },
  chauveSouris: {
    dessiner: (aColorier) => <ChauveSouris aColorier={aColorier} />,
    viewBox: '0 6 100 64',
    singulier: 'chauve-souris',
    pluriel: 'chauves-souris',
    article: 'la',
  },
  araignee: {
    dessiner: (aColorier) => <Araignee aColorier={aColorier} />,
    viewBox: '0 0 100 92',
    singulier: 'araignée',
    pluriel: 'araignées',
    article: "l'",
  },
  bonbon: {
    dessiner: (aColorier) => <Bonbon aColorier={aColorier} />,
    viewBox: '0 0 100 60',
    singulier: 'bonbon',
    pluriel: 'bonbons',
    article: 'le',
  },
  lune: {
    dessiner: (aColorier) => <Lune aColorier={aColorier} />,
    viewBox: '0 0 100 100',
    singulier: 'lune',
    pluriel: 'lunes',
    article: 'la',
  },
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
