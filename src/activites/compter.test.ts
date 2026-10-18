import { describe, expect, it } from 'vitest';
import { creerRng } from '../lib/rng.ts';
import { tirerCompter } from './compter.tsx';

describe('tirerCompter', () => {
  it('tire de 4 à 7 dessins et propose le bon nombre parmi trois', () => {
    for (let graine = 1; graine <= 50; graine++) {
      const { nombre, positions, choix } = tirerCompter(creerRng(graine));
      expect(nombre).toBeGreaterThanOrEqual(4);
      expect(nombre).toBeLessThanOrEqual(7);
      expect(positions).toHaveLength(nombre);
      expect([...choix].sort((a, b) => a - b)).toEqual([nombre - 2, nombre, nombre + 1]);
    }
  });

  it('donne le même tirage que le prototype pour la mission 4 (graine 404 + 97)', () => {
    const { nombre, positions, choix } = tirerCompter(creerRng(501));
    expect(nombre).toBe(7);
    expect(choix).toEqual([5, 8, 7]);
    // Cases 9, 2, 0, 5, 4, 8, 3 de la grille 5 × 2, décalées de moins de 3 unités.
    const attendues = [
      [160.6947, 57.435], [82.6258, 5.4568], [4.3324, 2.1286], [3.5003, 57.718],
      [159.6083, 4.1549], [117.6885, 55.9672], [116.623, 2.6896],
    ];
    positions.forEach((p, i) => {
      expect(p.x).toBeCloseTo(attendues[i][0], 3);
      expect(p.y).toBeCloseTo(attendues[i][1], 3);
    });
  });

  it('est reproductible', () => {
    expect(tirerCompter(creerRng(7))).toEqual(tirerCompter(creerRng(7)));
  });
});
