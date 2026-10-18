import { TRAIT } from '../illustrations/trait.ts';

// Formes communes aux activités, reprises du prototype (boite).

interface BoiteProps {
  x: number;
  y: number;
  largeur: number;
  hauteur: number;
}

/** Case arrondie où l'enfant entoure ou colle une réponse. */
export function Boite({ x, y, largeur, hauteur }: BoiteProps) {
  return <rect x={x} y={y} width={largeur} height={hauteur} rx="8" fill="var(--encadre)" stroke="var(--bois-fonce)" strokeWidth="1.6" />;
}

/** Nombre à entourer, dans sa case (« compter »). */
export function Chiffre({ x, y, valeur }: { x: number; y: number; valeur: number }) {
  return (
    <>
      <Boite x={x} y={y} largeur={44} hauteur={32} />
      <text x={x + 22} y={y + 24} textAnchor="middle" fontSize="23" fontWeight="700" fill={TRAIT} fontFamily="Andika, sans-serif">
        {valeur}
      </text>
    </>
  );
}
