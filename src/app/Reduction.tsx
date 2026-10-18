import type { ReactNode } from 'react';

interface ReductionProps {
  largeur: number;   // taille réelle du contenu, en px
  hauteur: number;
  echelle: number;
  children: ReactNode;
}

/** Affiche un contenu rendu à taille réelle, réduit par transform: scale() (annulé à l'impression). */
export function Reduction({ largeur, hauteur, echelle, children }: ReductionProps) {
  return (
    <div className="reduction shadow-lg" style={{ width: largeur * echelle, height: hauteur * echelle }}>
      <div className="reduction-contenu" style={{ transform: `scale(${echelle})` }}>
        {children}
      </div>
    </div>
  );
}
