import { describe, expect, it } from 'vitest';
import { rangeesDePage } from './disposition.ts';

describe('rangeesDePage', () => {
  // Mission 4 de Mathieu : l'encadré à côté du labyrinthe, puis « trouve le même », puis « compter ».
  const rangees = rangeesDePage([['explique', 2], [0], [1]]);

  it('marque « demi » les rangées de deux blocs', () => {
    expect(rangees.map((r) => r.demi)).toEqual([true, false, false]);
  });

  it('numérote les consignes dans l\'ordre d\'affichage, pas dans l\'ordre des activités', () => {
    expect(rangees.flatMap((r) => r.blocs)).toEqual([
      { type: 'explique' },
      { type: 'activite', index: 2, numero: 1 },
      { type: 'activite', index: 0, numero: 2 },
      { type: 'activite', index: 1, numero: 3 },
    ]);
  });

  it('ne numérote pas l\'encadré « Filou t\'explique »', () => {
    expect(rangeesDePage([['explique'], [0, 1]]).flatMap((r) => r.blocs)).toEqual([
      { type: 'explique' },
      { type: 'activite', index: 0, numero: 1 },
      { type: 'activite', index: 1, numero: 2 },
    ]);
  });
});
