import type { ReactNode } from 'react';

interface PlaceProps {
  x: number;
  y: number;
  largeur: number;
  hauteur: number;
  viewBox: string;
  children: ReactNode;
}

/** Place un dessin dans un cadre d'un SVG parent, en gardant ses proportions. */
export function Place({ x, y, largeur, hauteur, viewBox, children }: PlaceProps) {
  return (
    <svg x={x} y={y} width={largeur} height={hauteur} viewBox={viewBox}>
      {children}
    </svg>
  );
}
