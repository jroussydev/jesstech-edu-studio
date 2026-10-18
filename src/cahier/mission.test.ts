import { describe, expect, it } from 'vitest';
import type { ActiviteConfig, Mission, Theme } from '../types.ts';
import { costumePour, graineActivite, motsDeMission } from './mission.ts';

const THEME = {
  id: 'halloween',
  mots: [
    { id: 'lune', maj: 'LUNE', min: 'lune', image: 'lune' },
    { id: 'bonbon', maj: 'BONBON', min: 'bonbon', image: 'bonbon' },
  ],
  costumes: [
    { missions: [0, 1, 2], image: 'filou-citrouille.png', libelle: 'citrouille' },
    { missions: [3, 4, 5], image: 'filou-cape.png', libelle: 'cape' },
  ],
} as Theme;

const MISSION = { numero: 4, graine: 404 } as Mission;
const ACTIVITE: ActiviteConfig = { type: 'labyrinthe', variante: 'grille carrée' };

describe('costumePour', () => {
  it('trouve le costume de Filou prévu pour la mission', () => {
    expect(costumePour(THEME, 4).image).toBe('filou-cape.png');
  });

  it('trouve aussi le costume de la mission finale (numéro 0)', () => {
    expect(costumePour(THEME, 0).image).toBe('filou-citrouille.png');
  });

  it('signale une mission sans costume', () => {
    expect(() => costumePour(THEME, 11)).toThrow();
  });
});

describe('motsDeMission', () => {
  it('donne les mots du jour dans l\'ordre de la mission', () => {
    const mission = { mots: ['bonbon', 'lune'] } as Mission;
    expect(motsDeMission(THEME, mission).map((m) => m.maj)).toEqual(['BONBON', 'LUNE']);
  });

  it('signale un mot absent du thème', () => {
    expect(() => motsDeMission(THEME, { mots: ['dragon'] } as Mission)).toThrow();
  });
});

describe('graineActivite', () => {
  it('ajoute 97 par rang à la graine de la mission', () => {
    expect(graineActivite(MISSION, 0, ACTIVITE)).toBe(404);
    expect(graineActivite(MISSION, 2, ACTIVITE)).toBe(598);
  });

  it('garde la graine écrite par « Régénérer »', () => {
    expect(graineActivite(MISSION, 2, { ...ACTIVITE, graine: 1234 })).toBe(1234);
  });
});
