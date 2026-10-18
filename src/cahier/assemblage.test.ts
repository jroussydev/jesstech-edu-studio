import { describe, expect, it } from 'vitest';
import type { Face, Page } from '../types.ts';
import {
  calculerFaces,
  completerLivret,
  facesA4,
  facesLivret,
  facesParJour,
  libelleFace,
  tailleFace,
  taillePapier,
} from './assemblage.ts';

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

describe('tailleFace', () => {
  it('imprime le format A4 sur une feuille A4 portrait', () => {
    expect(tailleFace('A4')).toEqual({ largeur: 794, hauteur: 1123 });
  });

  it('imprime le format A5 sur une feuille A4 paysage', () => {
    expect(tailleFace('A5')).toEqual({ largeur: 1123, hauteur: 794 });
  });
});

describe('taillePapier', () => {
  it('demande du A4 portrait pour le format A4', () => {
    expect(taillePapier('A4')).toBe('A4 portrait');
  });

  it('demande du A4 paysage pour le format A5', () => {
    expect(taillePapier('A5')).toBe('A4 landscape');
  });
});

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

describe('completerLivret', () => {
  const DESSINS: Page = { type: 'dessins' };
  const QUATRIEME: Page = { type: 'quatrieme' };
  const cahier = (n: number): Page[] => Array.from({ length: n }, () => ({ type: 'ouverture' }));

  it('passe les 29 pages du cahier à 32 : pages 30 et 31 « Mes dessins », page 32 en 4ᵉ de couverture', () => {
    const livret = completerLivret(cahier(29), DESSINS, QUATRIEME);
    expect(livret).toHaveLength(32);
    expect(livret.slice(29)).toEqual([DESSINS, DESSINS, QUATRIEME]);
  });

  it('n\'ajoute que la 4ᵉ de couverture quand elle suffit à atteindre le multiple de 4', () => {
    const livret = completerLivret(cahier(31), DESSINS, QUATRIEME);
    expect(livret).toHaveLength(32);
    expect(livret.slice(31)).toEqual([QUATRIEME]);
  });

  it('passe un cahier de 32 pages à 36, car la 4ᵉ de couverture prend une page de plus', () => {
    const livret = completerLivret(cahier(32), DESSINS, QUATRIEME);
    expect(livret).toHaveLength(36);
    expect(livret.slice(32)).toEqual([DESSINS, DESSINS, DESSINS, QUATRIEME]);
  });

  it('garde les pages du cahier au début, dans l\'ordre, sans les modifier', () => {
    const pages = cahier(29);
    const livret = completerLivret(pages, DESSINS, QUATRIEME);
    expect(livret.slice(0, 29)).toEqual(pages);
    expect(pages).toHaveLength(29);
  });
});

describe('facesLivret', () => {
  it('imprime un livret de 32 pages sur 8 feuilles recto verso', () => {
    const faces = facesLivret(32);
    expect(faces).toHaveLength(16);
    expect(faces.filter((face) => face.cote === 'recto')).toHaveLength(8);
  });

  it('suit l\'ordre de pliage, de la feuille extérieure à la feuille du milieu', () => {
    const faces = facesLivret(32);
    expect(faces.slice(0, 4)).toEqual([
      { pages: [32, 1], cote: 'recto' },
      { pages: [2, 31], cote: 'verso' },
      { pages: [30, 3], cote: 'recto' },
      { pages: [4, 29], cote: 'verso' },
    ]);
    expect(faces.slice(-2)).toEqual([
      { pages: [18, 15], cote: 'recto' },
      { pages: [16, 17], cote: 'verso' },
    ]);
  });

  it('met toujours une page paire à gauche, pour garder chaque mission en double page (RG10)', () => {
    for (const face of facesLivret(32)) {
      expect((face.pages[0] ?? 1) % 2).toBe(0);
    }
  });

  it('imprime chaque page exactement une fois', () => {
    for (const n of [4, 8, 32, 36]) {
      expect(pagesPlacees(facesLivret(n))).toEqual(de1A(n));
    }
  });

  it('refuse un nombre de pages qui n\'est pas un multiple de 4', () => {
    expect(() => facesLivret(29)).toThrow();
  });
});

describe('calculerFaces', () => {
  it('ignore l\'assemblage en A4 : une page par feuille', () => {
    expect(calculerFaces(29, 'A4', 'livret')).toEqual(facesA4(29));
  });

  it('assemble une feuille par jour en A5', () => {
    expect(calculerFaces(29, 'A5', 'jour')).toEqual(facesParJour(29));
  });

  it('impose le livret plié en A5', () => {
    expect(calculerFaces(32, 'A5', 'livret')).toEqual(facesLivret(32));
  });
});

describe('libelleFace', () => {
  it('compte les pages en A4', () => {
    expect(libelleFace(facesA4(29), 5, 'A4')).toBe('page 6 / 29');
  });

  it('compte les feuilles et nomme les deux pages en A5, une feuille par jour', () => {
    expect(libelleFace(facesParJour(29), 3, 'A5')).toBe('feuille 4 / 15 · pages 6 et 7');
  });

  it('nomme une seule page quand l\'autre moitié est blanche', () => {
    expect(libelleFace(facesParJour(29), 0, 'A5')).toBe('feuille 1 / 15 · page 1');
  });

  it('compte les feuilles et précise recto ou verso en livret', () => {
    const faces = facesLivret(32);
    expect(libelleFace(faces, 0, 'A5')).toBe('feuille 1 / 8, recto · pages 32 et 1');
    expect(libelleFace(faces, 15, 'A5')).toBe('feuille 8 / 8, verso · pages 16 et 17');
  });
});
