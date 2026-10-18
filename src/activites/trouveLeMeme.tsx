import { Fantome, type OptionsFantome } from '../illustrations/Fantome.tsx';
import { Place } from '../illustrations/Place.tsx';
import { melange } from '../lib/melange.ts';
import type { Rng } from '../lib/rng.ts';
import type { Generateur } from './registre.ts';

// Variante « détails fins (GS) » du prototype : le modèle et trois fantômes qui n'ont qu'un détail de différent.
const MODELE: OptionsFantome = { yeux: 'rond', bouche: 'sourire', bras: true, noeud: true };

export interface TirageTrouveLeMeme {
  modele: OptionsFantome;
  choix: OptionsFantome[];   // le modèle et ses trois variantes, mélangés
}

/** Ordre des quatre fantômes à comparer au modèle (mêmes tirages que le prototype). */
export function tirerTrouveLeMeme(rng: Rng): TirageTrouveLeMeme {
  const variantes = [MODELE, { ...MODELE, noeud: false }, { ...MODELE, bouche: 'o' as const }, { ...MODELE, bras: false }];
  return { modele: MODELE, choix: melange(variantes, rng) };
}

// Dimensions du prototype : cadre du modèle à gauche, séparateur, puis les quatre choix.
const LARGEUR = 90;
const HAUTEUR = 99;
const PAS = 106;
const X0 = 144;
const W = X0 + 4 * PAS;
const H = 128;
const VIEWBOX_FANTOME = '0 0 100 110';

export const trouveLeMeme: Generateur = {
  type: 'trouveLeMeme',

  consigne: () => ({ picto: 'entoure', texte: 'Entoure le fantôme pareil au modèle.' }),

  rendre: (_config, ctx) => {
    const { modele, choix } = tirerTrouveLeMeme(ctx.rng);
    return (
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" role="img" aria-label="Trouve le même">
        <rect x="3" y="4" width="112" height={H - 8} rx="10" fill="none" stroke="var(--doux)" strokeWidth="2" strokeDasharray="6 5" />
        <text x="59" y={H - 12} textAnchor="middle" fontSize="12" fill="var(--doux)" fontFamily="Andika, sans-serif">
          modèle
        </text>
        <Place x={14} y={8} largeur={LARGEUR} hauteur={HAUTEUR} viewBox={VIEWBOX_FANTOME}>
          <Fantome {...modele} />
        </Place>
        <line x1="128" y1="10" x2="128" y2={H - 10} stroke="var(--bois-fonce)" strokeWidth="2.4" strokeLinecap="round" />
        {choix.map((options, i) => (
          <Place key={i} x={X0 + i * PAS} y={14} largeur={LARGEUR} hauteur={HAUTEUR} viewBox={VIEWBOX_FANTOME}>
            <Fantome {...options} />
          </Place>
        ))}
      </svg>
    );
  },
};
