import { illustrationPour } from './index.tsx';
import { Place } from './Place.tsx';

interface DessinProps {
  cle: string;
  x: number;
  y: number;
  largeur: number;
  hauteur: number;
  aColorier?: boolean;
}

/** Dessin du thème placé dans un cadre d'un SVG parent. */
export function Dessin({ cle, x, y, largeur, hauteur, aColorier = false }: DessinProps) {
  const illustration = illustrationPour(cle);
  return (
    <Place x={x} y={y} largeur={largeur} hauteur={hauteur} viewBox={illustration.viewBox}>
      {illustration.dessiner(aColorier)}
    </Place>
  );
}
