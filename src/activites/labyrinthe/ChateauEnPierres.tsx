import { murs, tracerMurs } from '../../lib/labyrinthe.ts';
import type { HabillageProps } from './habillages.ts';

/** Les murs en pierres de taille : épais, angles droits, un joint au milieu de chaque pan de mur. */
export function ChateauEnPierres({ labyrinthe, grille }: HabillageProps) {
  const d = tracerMurs(labyrinthe, grille);
  const epaisseur = grille.cote * 0.26;
  const joints = murs(labyrinthe, grille)
    .map(([a, b]) => {
      const x = (a.x + b.x) / 2;
      const y = (a.y + b.y) / 2;
      const e = epaisseur / 2;
      return a.y === b.y ? `M${x} ${y - e}v${epaisseur}` : `M${x - e} ${y}h${epaisseur}`;
    })
    .join('');
  return (
    <>
      <path d={d} fill="none" stroke="var(--pierre-bord)" strokeWidth={grille.cote * 0.36} strokeLinecap="square" strokeLinejoin="miter" />
      <path d={d} fill="none" stroke="var(--pierre)" strokeWidth={epaisseur} strokeLinecap="square" strokeLinejoin="miter" />
      <path d={joints} fill="none" stroke="var(--pierre-bord)" strokeWidth="1.2" />
    </>
  );
}
