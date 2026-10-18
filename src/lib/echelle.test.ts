import { describe, expect, it } from 'vitest';
import { calculerEchelle } from './echelle.ts';

describe('calculerEchelle', () => {
  it('s\'arrête au plafond sur un écran large', () => {
    expect(calculerEchelle(2000, 794, 0.81)).toBe(0.81);
  });

  it('réduit la page à la largeur disponible sur un écran étroit', () => {
    expect(calculerEchelle(397, 794, 0.81)).toBe(0.5);
  });

  it('vaut exactement le plafond quand la place disponible y correspond', () => {
    expect(calculerEchelle(794 * 0.81, 794, 0.81)).toBeCloseTo(0.81);
  });

  it('ne dépasse jamais 1 avec un plafond à 1', () => {
    expect(calculerEchelle(1600, 794, 1)).toBe(1);
  });

  it('vaut 0 tant que la largeur disponible n\'est pas mesurée', () => {
    expect(calculerEchelle(0, 794, 0.81)).toBe(0);
  });
});
