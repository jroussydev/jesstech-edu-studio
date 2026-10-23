import type { ReactNode } from 'react';
import { tailleFace } from '../cahier/assemblage.ts';
import type { Face as FaceImprimee, Format } from '../types.ts';
import { Feuille } from './Feuille.tsx';

interface FaceProps {
  format: Format;
  face: FaceImprimee;
  rendrePage: (numero: number) => ReactNode;
  cacheeAEcran?: boolean;               // masquée à l'écran, imprimée quand même
}

/** Une face de feuille imprimée : une page A4 portrait, ou deux moitiés A5 sur un A4 paysage. */
export function Face({ format, face, rendrePage, cacheeAEcran = false }: FaceProps) {
  const { largeur, hauteur } = tailleFace(format);
  const classes = `face face-${format}${cacheeAEcran ? ' face-cachee-ecran' : ''}`;

  return (
    <div className={classes} style={{ width: largeur, height: hauteur }}>
      {/* La position (gauche, droite) est fixe sur la face : elle sert de clé. */}
      {face.pages.map((numero, position) => (
        <div key={position} className="face-emplacement">
          {numero !== null && <Feuille format={format} cle={numero}>{rendrePage(numero)}</Feuille>}
        </div>
      ))}
    </div>
  );
}
