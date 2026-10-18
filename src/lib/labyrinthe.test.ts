import { describe, expect, it } from 'vitest';
import { couloirs, genererLabyrinthe, impasses, tracerMurs, type Labyrinthe } from './labyrinthe.ts';
import { creerRng } from './rng.ts';

// Grille du prototype : cases de 22, grille décalée de 38 à gauche et de 6 en haut.
const GRILLE = { cote: 22, ox: 38, oy: 6 };

// Tracés produits par le code du prototype (reference/apercu-cahier-mathieu.html) pour la mission 4, graine 404 + 2 × 97.
const MURS_PROTOTYPE_5X6 =
  'M38 6h22M60 6h22M82 6h22M104 6h22M104 6v22M126 6h22M148 6v22M38 28h22M38 28v22M60 28h22M82 28v22M104 28v22M126 28h22M148 28v22M38 50v22M60 50h22M82 50v22M104 50h22M126 50v22M148 50v22M38 72v22M60 72v22M82 72h22M104 72v22M126 72v22M148 72v22M38 94v22M60 94v22M82 94h22M82 94v22M126 94v22M148 94v22M38 116v22M38 138h22M60 116v22M60 138h22M82 138h22M104 116h22M104 138h22M126 138h22';
const MURS_PROTOTYPE_7X4 =
  'M38 6h22M60 6h22M82 6h22M104 6h22M104 6v22M126 6h22M126 6v22M148 6h22M170 6h22M192 6v22M38 28h22M38 28v22M60 28h22M82 28v22M104 28v22M148 28v22M170 28v22M192 28v22M38 50v22M60 50v22M82 50v22M104 50h22M126 50h22M126 50v22M170 50v22M192 50v22M38 72v22M38 94h22M60 72v22M60 94h22M82 72h22M82 94h22M104 94h22M126 94h22M148 72h22M148 72v22M148 94h22M170 94h22';

/** Cases atteignables depuis la première, en passant par les murs ouverts. */
function atteignables({ colonnes, cellules }: Labyrinthe): number {
  const vues = new Set([0]);
  const file = [0];
  while (file.length > 0) {
    const i = file.shift()!;
    const c = cellules[i];
    const voisines = [
      !c.n && i - colonnes, !c.s && i + colonnes,
      !c.e && i % colonnes < colonnes - 1 && i + 1, !c.w && i % colonnes > 0 && i - 1,
    ].filter((j): j is number => typeof j === 'number');
    for (const j of voisines) if (!vues.has(j)) { vues.add(j); file.push(j); }
  }
  return vues.size;
}

/** Passages ouverts entre deux cases (sans compter l'entrée et la sortie). */
function passages({ colonnes, cellules }: Labyrinthe): number {
  return cellules.filter((c, i) => !c.e && i % colonnes < colonnes - 1).length
    + cellules.filter((c, i) => !c.s && i + colonnes < cellules.length).length;
}

describe('genererLabyrinthe et tracerMurs', () => {
  it('trace les mêmes murs que le prototype en demi-largeur (5 × 6)', () => {
    expect(tracerMurs(genererLabyrinthe(5, 6, creerRng(598)), GRILLE)).toBe(MURS_PROTOTYPE_5X6);
  });

  it('trace les mêmes murs que le prototype en pleine largeur (7 × 4)', () => {
    expect(tracerMurs(genererLabyrinthe(7, 4, creerRng(598)), GRILLE)).toBe(MURS_PROTOTYPE_7X4);
  });

  it('crée un labyrinthe parfait : toutes les cases reliées, sans boucle', () => {
    for (let graine = 1; graine <= 30; graine++) {
      const labyrinthe = genererLabyrinthe(6, 5, creerRng(graine));
      expect(atteignables(labyrinthe)).toBe(30);
      expect(passages(labyrinthe)).toBe(29);   // un arbre de 30 cases a 29 liens
    }
  });

  it('ouvre l’entrée à gauche et la sortie à droite', () => {
    const { cellules } = genererLabyrinthe(5, 6, creerRng(598));
    expect(cellules[0].w).toBe(false);
    expect(cellules[cellules.length - 1].e).toBe(false);
  });

  it('est reproductible', () => {
    expect(genererLabyrinthe(5, 6, creerRng(7))).toEqual(genererLabyrinthe(5, 6, creerRng(7)));
  });
});

describe('couloirs', () => {
  it('relie les cases par les passages ouverts, plus l’entrée et la sortie', () => {
    const labyrinthe = genererLabyrinthe(5, 6, creerRng(598));
    const segments = couloirs(labyrinthe, GRILLE);
    expect(segments).toHaveLength(29 + 2);
    expect(segments[0]).toEqual([{ x: 38, y: 17 }, { x: 49, y: 17 }]);
    expect(segments[segments.length - 1]).toEqual([{ x: 137, y: 127 }, { x: 148, y: 127 }]);
  });
});

describe('impasses', () => {
  it('ne garde que des cases fermées sur trois côtés, jamais l’entrée ni la sortie', () => {
    const labyrinthe = genererLabyrinthe(5, 6, creerRng(598));
    const liste = impasses(labyrinthe);
    expect(liste.length).toBeGreaterThan(0);
    for (const i of liste) {
      const c = labyrinthe.cellules[i];
      expect([c.n, c.e, c.s, c.w].filter(Boolean)).toHaveLength(3);
      expect(i).not.toBe(0);
      expect(i).not.toBe(29);
    }
  });
});
