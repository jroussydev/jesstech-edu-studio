import type { ReactNode } from 'react';
import { useAjustementTexte } from '../hooks/useAjustementTexte.ts';
import { FORMATS, type Format } from '../types.ts';

interface FeuilleProps {
  format: Format;
  cle: string | number;   // change avec le contenu de la page : les textes sont alors réajustés (RG13)
  children: ReactNode;
}

/** Une page du cahier, toujours à sa taille réelle et en portrait ; son contenu est en cqw. */
export function Feuille({ format, cle, children }: FeuilleProps) {
  const { largeur, hauteur } = FORMATS[format];
  const ref = useAjustementTexte(format, cle);
  return (
    <div ref={ref} className="feuille" style={{ width: largeur, height: hauteur }}>
      {children}
    </div>
  );
}
