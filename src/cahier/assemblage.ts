// Place les pages du cahier sur les faces des feuilles imprimées (voir docs/03-analyse-fonctionnelle.md, RG21 et RG22).
import { FORMATS, type Face, type Format } from '../types.ts';

/** Taille réelle d'une face imprimée, en px : A4 portrait, ou A4 paysage portant deux pages A5. */
export function tailleFace(format: Format): { largeur: number; hauteur: number } {
  const a4 = FORMATS.A4;
  return format === 'A4' ? a4 : { largeur: a4.hauteur, hauteur: a4.largeur };
}

/** Papier à indiquer à @page { size } : toujours du A4, en paysage pour porter deux pages A5. */
export function taillePapier(format: Format): 'A4 portrait' | 'A4 landscape' {
  return format === 'A4' ? 'A4 portrait' : 'A4 landscape';
}

/** A4 : une page par feuille, recto seul. */
export function facesA4(nbPages: number): Face[] {
  return Array.from({ length: nbPages }, (_, i) => ({ pages: [i + 1], cote: 'recto' }));
}

/**
 * A5, une feuille par jour (RG21) : couverture seule à droite, puis les paires 2-3, 4-5…
 * (page paire à gauche, impaire à droite). Si le total est pair, la dernière page est seule à gauche.
 */
export function facesParJour(nbPages: number): Face[] {
  if (nbPages <= 0) return [];
  const faces: Face[] = [{ pages: [null, 1], cote: 'recto' }];
  for (let gauche = 2; gauche <= nbPages; gauche += 2) {
    const droite = gauche + 1 <= nbPages ? gauche + 1 : null;
    faces.push({ pages: [gauche, droite], cote: 'recto' });
  }
  return faces;
}
