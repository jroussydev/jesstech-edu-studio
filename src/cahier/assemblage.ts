// Place les pages du cahier sur les faces des feuilles imprimées (voir docs/03-analyse-fonctionnelle.md, RG21 et RG22).
import type { Face } from '../types.ts';

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
