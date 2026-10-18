import { describe, expect, it } from 'vitest';
import { melange } from './melange.ts';
import { creerRng } from './rng.ts';

const LISTE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

describe('melange', () => {
  it('garde exactement les mêmes éléments', () => {
    const resultat = melange(LISTE, creerRng(7));
    expect([...resultat].sort((a, b) => a - b)).toEqual([...LISTE]);
  });

  it('ne modifie pas la liste d\'origine', () => {
    const liste = [...LISTE];
    melange(liste, creerRng(7));
    expect(liste).toEqual([...LISTE]);
  });

  it('donne le même ordre pour la même graine', () => {
    expect(melange(LISTE, creerRng(404))).toEqual(melange(LISTE, creerRng(404)));
  });

  it('retrouve le mélange du prototype pour la graine 404', () => {
    // Ordre calculé avec la fonction melange de reference/apercu-cahier-mathieu.html
    expect(melange(LISTE, creerRng(404))).toEqual([5, 1, 7, 6, 10, 3, 8, 2, 9, 4]);
  });
});
