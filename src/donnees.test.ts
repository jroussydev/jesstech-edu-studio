// Cohérence des fichiers de donnees/ : la composition écrite à la main doit avoir exactement
// la forme que composer.ts produira depuis le catalogue (RG14 à RG20).
import { describe, expect, it } from 'vitest';
import { costumePour } from './cahier/mission.ts';
import { CAHIER, CATALOGUE, imageTheme, MISSIONS, PROFIL, THEME } from './donnees.ts';

const compositions = Object.entries(CAHIER.composition).map(([numero, composition]) => ({
  numero: Number(numero),
  ...composition,
}));

describe('cahier de Mathieu', () => {
  it('relie le bon profil et le bon thème', () => {
    expect(CAHIER.profil).toBe(PROFIL.id);
    expect(CAHIER.theme).toBe(THEME.id);
  });

  it('compose uniquement des missions du cahier qui existent dans le thème', () => {
    for (const { numero } of compositions) {
      expect(CAHIER.missions).toContain(numero);
      expect(MISSIONS.map((m) => m.numero)).toContain(numero);
    }
  });

  it('n\'utilise que des jeux du catalogue, avec une de leurs variantes', () => {
    for (const { activites } of compositions) {
      for (const activite of activites) {
        const jeu = CATALOGUE.find((j) => j.id === activite.type);
        expect(jeu, activite.type).toBeDefined();
        expect(jeu?.variantes).toContain(activite.variante);
      }
    }
  });

  it('place l\'encadré une fois et chaque activité une fois dans la disposition', () => {
    for (const { disposition, activites } of compositions) {
      const blocs = disposition.flat();
      expect(blocs.filter((b) => b === 'explique')).toHaveLength(1);
      const index = blocs.filter((b): b is number => b !== 'explique').sort((a, b) => a - b);
      expect(index).toEqual(activites.map((_, i) => i));
      expect(disposition.every((rangee) => rangee.length === 1 || rangee.length === 2)).toBe(true);
    }
  });
});

describe('missions du thème', () => {
  it('n\'utilisent que des mots du thème', () => {
    const mots = THEME.mots.map((m) => m.id);
    for (const mission of MISSIONS) {
      for (const mot of mission.mots) expect(mots).toContain(mot);
    }
  });

  it('ont les textes de Mathieu : encadré, histoire et note parent', () => {
    for (const mission of MISSIONS) {
      expect(mission.explique[PROFIL.id]?.texte).toBeTruthy();
      expect(mission.histoire[PROFIL.id]).toBeTruthy();
      expect(mission.parent[PROFIL.id]).toBeTruthy();
    }
  });

  it('ont chacune un costume de Filou dont l\'image existe', () => {
    for (const mission of MISSIONS) {
      expect(imageTheme(costumePour(THEME, mission.numero).image)).toBeTruthy();
    }
  });
});
