import { describe, expect, it } from 'vitest';
import { niveauDansPlage } from './niveaux.ts';

describe('niveauDansPlage', () => {
  it('reconnaît une classe dans une plage, bornes comprises', () => {
    expect(niveauDansPlage('PS', 'PS-GS')).toBe(true);
    expect(niveauDansPlage('MS', 'PS-GS')).toBe(true);
    expect(niveauDansPlage('GS', 'PS-GS')).toBe(true);
    expect(niveauDansPlage('TPS', 'PS-GS')).toBe(false);
  });

  it('accepte une plage d’une seule classe', () => {
    expect(niveauDansPlage('GS', 'GS')).toBe(true);
    expect(niveauDansPlage('MS', 'GS')).toBe(false);
  });

  it('signale une plage inconnue', () => {
    expect(() => niveauDansPlage('GS', 'PS-XX')).toThrow();
  });
});
