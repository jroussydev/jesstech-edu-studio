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

/**
 * A5, livret plié (RG22) : complète le cahier au multiple de 4 pages avec des pages « Mes dessins »,
 * puis la 4ᵉ de couverture, toujours en dernier. Générique : sert aux vraies pages comme aux pages de test.
 */
export function completerLivret<T>(pages: readonly T[], dessins: T, quatrieme: T): T[] {
  const total = Math.ceil((pages.length + 1) / 4) * 4;
  const nbDessins = total - pages.length - 1;
  return [...pages, ...Array.from({ length: nbDessins }, () => dessins), quatrieme];
}

/**
 * A5, livret plié (RG22) : imposition d'un livret de N pages (N multiple de 4).
 * Feuille k : recto = N − 2k | 1 + 2k, verso = 2 + 2k | N − 1 − 2k.
 * Empilées dans l'ordre, pliées et agrafées au milieu, les feuilles donnent les pages 1 à N.
 */
export function facesLivret(nbPages: number): Face[] {
  if (nbPages % 4 !== 0) {
    throw new Error(`Un livret plié compte un multiple de 4 pages (reçu : ${nbPages}).`);
  }
  const faces: Face[] = [];
  for (let k = 0; k < nbPages / 4; k++) {
    faces.push({ pages: [nbPages - 2 * k, 1 + 2 * k], cote: 'recto' });
    faces.push({ pages: [2 + 2 * k, nbPages - 1 - 2 * k], cote: 'verso' });
  }
  return faces;
}
