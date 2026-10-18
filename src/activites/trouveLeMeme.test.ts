import { describe, expect, it } from 'vitest';
import { creerRng } from '../lib/rng.ts';
import { tirerTrouveLeMeme } from './trouveLeMeme.tsx';

describe('tirerTrouveLeMeme', () => {
  it('propose le modèle et trois fantômes différents d’un seul détail', () => {
    const { modele, choix } = tirerTrouveLeMeme(creerRng(1));
    expect(choix).toHaveLength(4);
    expect(choix.filter((c) => JSON.stringify(c) === JSON.stringify(modele))).toHaveLength(1);
    for (const c of choix) {
      const differences = Object.keys(modele).filter((k) => c[k as keyof typeof c] !== modele[k as keyof typeof modele]);
      expect(differences.length).toBeLessThanOrEqual(1);
    }
  });

  it('donne le même ordre que le prototype pour la mission 4 (graine 404)', () => {
    const { choix } = tirerTrouveLeMeme(creerRng(404));
    const m = { yeux: 'rond', bouche: 'sourire', bras: true, noeud: true };
    expect(choix).toEqual([{ ...m, bras: false }, m, { ...m, bouche: 'o' }, { ...m, noeud: false }]);
  });

  it('est reproductible', () => {
    expect(tirerTrouveLeMeme(creerRng(7))).toEqual(tirerTrouveLeMeme(creerRng(7)));
  });
});
