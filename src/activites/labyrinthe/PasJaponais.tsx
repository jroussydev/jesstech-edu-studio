import { centre, couloirs, type Point } from '../../lib/labyrinthe.ts';
import type { HabillageProps } from './habillages.ts';

/** Des pierres plates le long des couloirs : une au centre de chaque case, une au milieu de chaque passage.
    Angle et forme varient avec le rang de la pierre (sans tirage : la graine ne sert qu'à la structure). */
export function PasJaponais({ labyrinthe, grille }: HabillageProps) {
  const pierres: Point[] = [
    ...labyrinthe.cellules.map((_, i) => centre(labyrinthe, grille, i)),
    ...couloirs(labyrinthe, grille).map(([a, b]) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 })),
  ];
  const rx = grille.cote * 0.21;
  const ry = grille.cote * 0.16;
  return (
    <>
      {pierres.map(({ x, y }, i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx={rx * (i % 3 === 0 ? 0.92 : 1)}
          ry={ry * (i % 2 === 0 ? 1 : 0.9)}
          transform={`rotate(${((i * 47) % 70) - 35} ${x} ${y})`}
          fill="var(--pierre)"
          stroke="var(--pierre-bord)"
          strokeWidth="1.2"
        />
      ))}
    </>
  );
}
