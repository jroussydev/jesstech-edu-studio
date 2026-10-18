import { tracerMurs } from '../../lib/labyrinthe.ts';
import type { HabillageProps } from './habillages.ts';

/** Les murs en haie : épais et arrondis, un contour foncé et un feuillage clair par-dessus. */
export function Haie({ labyrinthe, grille }: HabillageProps) {
  const d = tracerMurs(labyrinthe, grille);
  return (
    <>
      <path d={d} fill="none" stroke="var(--haie-fonce)" strokeWidth={grille.cote * 0.3} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke="var(--haie)" strokeWidth={grille.cote * 0.18} strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}
