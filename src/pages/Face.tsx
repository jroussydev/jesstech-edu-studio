import type { ReactNode } from 'react';
import { tailleFace } from '../cahier/assemblage.ts';
import type { Face as FaceImprimee, Format } from '../types.ts';
import { Feuille } from './Feuille.tsx';

interface FaceProps {
  format: Format;
  face: FaceImprimee;
  rendrePage: (numero: number) => ReactNode;
}

/** Une face de feuille imprimée : une page A4 portrait, ou deux moitiés A5 sur un A4 paysage. */
export function Face({ format, face, rendrePage }: FaceProps) {
  const { largeur, hauteur } = tailleFace(format);

  return (
    <div className={`face face-${format}`} style={{ width: largeur, height: hauteur }}>
      {/* La position (gauche, droite) est fixe sur la face : elle sert de clé. */}
      {face.pages.map((numero, position) => (
        <div key={position} className="face-emplacement">
          {numero !== null && <Feuille format={format}>{rendrePage(numero)}</Feuille>}
        </div>
      ))}
    </div>
  );
}
