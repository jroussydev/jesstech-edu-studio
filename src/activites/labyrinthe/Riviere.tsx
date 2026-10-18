import { couloirs } from '../../lib/labyrinthe.ts';
import type { HabillageProps } from './habillages.ts';

/** Les couloirs en rivière bordée, avec une vaguelette au milieu de chaque passage. */
export function Riviere({ labyrinthe, grille }: HabillageProps) {
  const segments = couloirs(labyrinthe, grille);
  const d = segments.map(([a, b]) => `M${a.x} ${a.y}L${b.x} ${b.y}`).join('');
  const v = grille.cote * 0.18;   // demi-longueur d'une vaguelette
  return (
    <>
      <path d={d} fill="none" stroke="var(--eau-bord)" strokeWidth={grille.cote * 0.72} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke="var(--eau)" strokeWidth={grille.cote * 0.56} strokeLinecap="round" strokeLinejoin="round" />
      {segments.map(([a, b], i) => {
        const x = (a.x + b.x) / 2;
        const y = (a.y + b.y) / 2;
        const angle = a.y === b.y ? 0 : 90;   // la vaguelette suit le courant
        return (
          <path
            key={i}
            d={`M${x - v} ${y} Q${x - v / 2} ${y - v / 2} ${x} ${y} Q${x + v / 2} ${y + v / 2} ${x + v} ${y}`}
            transform={`rotate(${angle} ${x} ${y})`}
            fill="none"
            stroke="var(--papier)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        );
      })}
    </>
  );
}
