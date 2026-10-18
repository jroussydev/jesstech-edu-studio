import { tracerMurs } from '../../lib/labyrinthe.ts';
import type { HabillageProps } from './habillages.ts';

/** Les murs en trait fin, comme dans le prototype : le plus économe en encre. */
export function TraitsSimples({ labyrinthe, grille }: HabillageProps) {
  return <path d={tracerMurs(labyrinthe, grille)} fill="none" stroke="var(--bois-fonce)" strokeWidth="3.4" strokeLinecap="round" />;
}
