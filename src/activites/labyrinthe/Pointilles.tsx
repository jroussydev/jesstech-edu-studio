import { couloirs, tracerMurs } from '../../lib/labyrinthe.ts';
import type { HabillageProps } from './habillages.ts';

/** Tous les couloirs en pointillés, entre des murs fins et clairs : l'enfant cherche son chemin
    et repasse seulement les pointillés qu'il emprunte (graphisme). */
export function Pointilles({ labyrinthe, grille }: HabillageProps) {
  const pointilles = couloirs(labyrinthe, grille)
    .map(([a, b]) => `M${a.x} ${a.y}L${b.x} ${b.y}`)
    .join('');
  return (
    <>
      <path d={tracerMurs(labyrinthe, grille)} fill="none" stroke="var(--mur-clair)" strokeWidth="1.6" strokeLinecap="round" />
      <path d={pointilles} fill="none" stroke="var(--bois-fonce)" strokeWidth="1.8" strokeDasharray="2.5 3" strokeLinecap="round" />
    </>
  );
}
