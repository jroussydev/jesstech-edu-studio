import { describe, expect, it } from 'vitest';
import type { Face } from '../types.ts';
import { facesA4, facesParJour } from './assemblage.ts';

/** Numéros de page présents sur les faces, sans les moitiés blanches, triés. */
function pagesPlacees(faces: Face[]): number[] {
  return faces
    .flatMap((face) => face.pages)
    .filter((page): page is number => page !== null)
    .sort((a, b) => a - b);
}

function de1A(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i + 1);
}

describe('facesA4', () => {
  it('met une seule page par feuille, dans l\'ordre, au recto', () => {
    expect(facesA4(3)).toEqual([
      { pages: [1], cote: 'recto' },
      { pages: [2], cote: 'recto' },
      { pages: [3], cote: 'recto' },
    ]);
  });
});

describe('facesParJour', () => {
  it('place les 29 pages du cahier sur 15 feuilles', () => {
    expect(facesParJour(29)).toHaveLength(15);
  });

  it('met la couverture seule, sur la moitié droite de la première feuille', () => {
    expect(facesParJour(29)[0]).toEqual({ pages: [null, 1], cote: 'recto' });
  });

  it('met ensuite une page paire à gauche et la page impaire suivante à droite', () => {
    const faces = facesParJour(29);
    expect(faces[1].pages).toEqual([2, 3]);
    expect(faces[2].pages).toEqual([4, 5]);
    expect(faces[14].pages).toEqual([28, 29]);
  });

  it('laisse la dernière page seule, à gauche, quand le total est pair', () => {
    const faces = facesParJour(28);
    expect(faces[faces.length - 1].pages).toEqual([28, null]);
  });

  it('met un cahier d\'une seule page sur une feuille', () => {
    expect(facesParJour(1)).toEqual([{ pages: [null, 1], cote: 'recto' }]);
  });

  it('ne produit aucune feuille pour un cahier vide', () => {
    expect(facesParJour(0)).toEqual([]);
  });

  it('imprime chaque page exactement une fois, au recto seul', () => {
    for (const n of [1, 2, 28, 29]) {
      const faces = facesParJour(n);
      expect(pagesPlacees(faces)).toEqual(de1A(n));
      expect(faces.every((face) => face.cote === 'recto')).toBe(true);
    }
  });
});
