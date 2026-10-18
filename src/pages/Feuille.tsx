import type { ReactNode } from 'react';
import { FORMATS, type Format } from '../types.ts';

interface FeuilleProps {
  format: Format;
  children: ReactNode;
}

/** Une page du cahier, toujours à sa taille réelle et en portrait ; son contenu est en cqw. */
export function Feuille({ format, children }: FeuilleProps) {
  const { largeur, hauteur } = FORMATS[format];
  return (
    <div className="feuille" style={{ width: largeur, height: hauteur }}>
      {children}
    </div>
  );
}
