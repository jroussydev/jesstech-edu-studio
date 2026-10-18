import { NIVEAUX, type Niveau } from '../types.ts';

/** Vrai si la classe est dans une plage du catalogue ('PS-GS', ou une seule classe 'GS'). */
export function niveauDansPlage(niveau: Niveau, plage: string): boolean {
  const [debut, fin = debut] = plage.split('-') as Niveau[];
  const rang = NIVEAUX.indexOf(niveau);
  const rangDebut = NIVEAUX.indexOf(debut);
  const rangFin = NIVEAUX.indexOf(fin);
  if (rangDebut < 0 || rangFin < 0) throw new Error(`Plage de niveaux inconnue : ${plage}`);
  return rang >= rangDebut && rang <= rangFin;
}
