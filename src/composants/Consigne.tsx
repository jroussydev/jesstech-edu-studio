import type { ConsigneActivite } from '../types.ts';
import { Picto } from './Picto.tsx';

interface ConsigneProps {
  numero: number;
  consigne: ConsigneActivite;
}

/** Une consigne : numéro, pictogramme et phrase, une seule action (RG6). */
export function Consigne({ numero, consigne }: ConsigneProps) {
  return (
    <div className="consigne">
      <span className="n">{numero}</span>
      <Picto id={consigne.picto} />
      <span>{consigne.texte}</span>
    </div>
  );
}
