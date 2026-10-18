import { describe, expect, it } from 'vitest';
import { CATALOGUE } from '../../donnees.ts';
import { genererLabyrinthe, impasses, tracerMurs } from '../../lib/labyrinthe.ts';
import { creerRng } from '../../lib/rng.ts';
import { HABILLAGES } from './habillages.ts';
import { tirerLabyrinthe } from './index.tsx';

const DECORATIONS = ['citrouille', 'chauveSouris', 'araignee', 'bonbon', 'lune'];
const GRILLE = { cote: 22, ox: 38, oy: 6 };

describe('tirerLabyrinthe', () => {
  it('garde les murs du prototype : les décorations sont tirées après le creusement', () => {
    const { labyrinthe } = tirerLabyrinthe(creerRng(598), true, DECORATIONS);
    expect(tracerMurs(labyrinthe, GRILLE)).toBe(tracerMurs(genererLabyrinthe(5, 6, creerRng(598)), GRILLE));
  });

  it('pose au plus 3 décorations du thème, chacune dans une impasse différente', () => {
    for (let graine = 1; graine <= 30; graine++) {
      const { labyrinthe, decorations } = tirerLabyrinthe(creerRng(graine), graine % 2 === 0, DECORATIONS);
      const libres = impasses(labyrinthe);
      expect(decorations.length).toBe(Math.min(3, libres.length));
      expect(new Set(decorations.map((d) => d.case)).size).toBe(decorations.length);
      for (const d of decorations) {
        expect(libres).toContain(d.case);
        expect(DECORATIONS).toContain(d.cle);
      }
    }
  });

  it('ne pose aucune décoration quand le thème n’en a pas', () => {
    expect(tirerLabyrinthe(creerRng(598), true, []).decorations).toEqual([]);
  });
});

describe('habillages du labyrinthe', () => {
  it('ont chacun un dessin pour chaque habillage du catalogue, et inversement', () => {
    const duCatalogue = CATALOGUE.find((j) => j.id === 'labyrinthe')?.habillages?.map((h) => h.id);
    expect(duCatalogue).toEqual(Object.keys(HABILLAGES));
  });
});
