import { Dessin } from '../illustrations/Dessin.tsx';
import { illustrationPour } from '../illustrations/index.tsx';
import { melange } from '../lib/melange.ts';
import type { Rng } from '../lib/rng.ts';
import { Chiffre } from './formes.tsx';
import { parametreTexte } from './parametres.ts';
import type { Generateur } from './registre.ts';

// Grille du prototype : 10 cases (5 × 2) de 39 × 53, dessins de 38 × 42.
const COLONNES = 5;
const CASES = 10;
const PAS_X = 39;
const PAS_Y = 53;

export interface TirageCompter {
  nombre: number;                          // de 4 à 7
  positions: { x: number; y: number }[];   // un dessin par position, légèrement décalé de sa case
  choix: number[];                         // le bon nombre, nombre + 1 et nombre − 2, mélangés
}

/** Tirage de « compter », dans l'ordre exact des appels du prototype (mêmes dessins que le PDF imprimé). */
export function tirerCompter(rng: Rng): TirageCompter {
  const nombre = 4 + Math.floor(rng() * 4);
  const cases = melange([...Array(CASES).keys()], rng).slice(0, nombre);
  const choix = melange([nombre, nombre + 1, nombre - 2], rng);
  const positions = cases.map((c) => {
    const x = 2 + (c % COLONNES) * PAS_X + (rng() * 6 - 3);
    const y = 4 + Math.floor(c / COLONNES) * PAS_Y + (rng() * 6 - 3);
    return { x, y };
  });
  return { nombre, positions, choix };
}

export const compter: Generateur = {
  type: 'compter',

  consigne: (config) => ({
    picto: 'compte',
    texte: `Entoure le nombre de ${illustrationPour(parametreTexte(config, 'objet')).pluriel}.`,
  }),

  rendre: (config, ctx) => {
    const objet = parametreTexte(config, 'objet');
    const { positions, choix } = tirerCompter(ctx.rng);
    const dessins = positions.map((p, i) => <Dessin key={i} cle={objet} x={p.x} y={p.y} largeur={38} hauteur={42} />);

    // À côté d'un autre bloc : les nombres sous les dessins ; en pleine largeur : à droite.
    if (ctx.demi) {
      return (
        <svg viewBox="0 0 200 168" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Compte">
          {dessins}
          <line x1="10" y1="118" x2="190" y2="118" stroke="var(--bois-fonce)" strokeWidth="2.4" strokeLinecap="round" />
          {choix.map((v, i) => <Chiffre key={i} x={22 + i * 56} y={130} valeur={v} />)}
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 272 110" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Compte">
        {dessins}
        <line x1="204" y1="8" x2="204" y2="102" stroke="var(--bois-fonce)" strokeWidth="2.4" strokeLinecap="round" />
        {choix.map((v, i) => <Chiffre key={i} x={220} y={4 + i * 35} valeur={v} />)}
      </svg>
    );
  },
};
