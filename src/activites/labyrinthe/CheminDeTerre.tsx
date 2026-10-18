import { couloirs } from '../../lib/labyrinthe.ts';
import type { HabillageProps } from './habillages.ts';

/** Les couloirs dessinés comme un chemin de terre bordé : un trait large pour la bordure, un plus fin par-dessus. */
export function CheminDeTerre({ labyrinthe, grille }: HabillageProps) {
  const d = couloirs(labyrinthe, grille)
    .map(([a, b]) => `M${a.x} ${a.y}L${b.x} ${b.y}`)
    .join('');
  return (
    <>
      <path d={d} fill="none" stroke="var(--terre-bord)" strokeWidth={grille.cote * 0.72} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke="var(--terre)" strokeWidth={grille.cote * 0.56} strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}
