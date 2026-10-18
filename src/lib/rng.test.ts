import { describe, expect, it } from 'vitest';
import { creerRng } from './rng.ts';

function tirer(graine: number, n: number): number[] {
  const rng = creerRng(graine);
  return Array.from({ length: n }, () => rng());
}

describe('creerRng', () => {
  it('donne la même suite pour la même graine', () => {
    expect(tirer(404, 20)).toEqual(tirer(404, 20));
  });

  it('donne des suites différentes pour des graines différentes', () => {
    expect(tirer(404, 20)).not.toEqual(tirer(505, 20));
  });

  it('renvoie des nombres entre 0 inclus et 1 exclu', () => {
    for (const x of tirer(1, 1000)) {
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThan(1);
    }
  });

  it('retrouve les tirages du prototype pour la mission 4 (graine 404)', () => {
    // Valeurs calculées avec la fonction rng de reference/apercu-cahier-mathieu.html
    expect(tirer(404, 3)).toEqual([0.35325593198649585, 0.8971698426175863, 0.14653041982091963]);
  });
});
