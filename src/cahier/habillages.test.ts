import { describe, expect, it } from 'vitest';
import type { ActiviteConfig, CompositionMission, Habillage, Jeu } from '../types.ts';
import { attribuerHabillages } from './habillages.ts';

function habillage(id: string, niveaux = 'PS-GS'): Habillage {
  return { id, nom: id, themes: ['tous'], encre: 'faible', niveaux };
}

const CATALOGUE = [
  { id: 'labyrinthe', variantes: ['grille carrée'], habillages: [habillage('a'), habillage('b'), habillage('c', 'GS')] },
  { id: 'compter', variantes: ['jusqu\'à 10'] },
] as Jeu[];

const laby = (habillageEcrit?: string): ActiviteConfig => ({ type: 'labyrinthe', variante: 'grille carrée', habillage: habillageEcrit });
const mission = (...activites: ActiviteConfig[]): CompositionMission => ({ disposition: [activites.map((_, i) => i)], activites });

const habillagesDe = (composition: Record<number, CompositionMission>) =>
  Object.values(composition).flatMap((m) => m.activites.map((a) => a.habillage));

describe('attribuerHabillages', () => {
  it('donne un habillage différent à chaque labyrinthe du cahier, dans l’ordre du catalogue', () => {
    const resultat = attribuerHabillages({ 1: mission(laby()), 2: mission(laby()), 3: mission(laby()) }, CATALOGUE, 'GS');
    expect(habillagesDe(resultat)).toEqual(['a', 'b', 'c']);
  });

  it('garde un habillage écrit dans le cahier et ne le redonne pas', () => {
    const resultat = attribuerHabillages({ 1: mission(laby()), 4: mission(laby('a')) }, CATALOGUE, 'GS');
    expect(habillagesDe(resultat)).toEqual(['b', 'a']);
  });

  it('écarte les habillages non conseillés pour la classe', () => {
    const resultat = attribuerHabillages({ 1: mission(laby()), 2: mission(laby()), 3: mission(laby()) }, CATALOGUE, 'MS');
    expect(habillagesDe(resultat)).toEqual(['a', 'b', 'a']);   // 'c' est réservé à la GS ; nouveau tour après 'b'
  });

  it('ne touche pas aux jeux sans habillage', () => {
    const compter: ActiviteConfig = { type: 'compter', variante: 'jusqu\'à 10' };
    const resultat = attribuerHabillages({ 1: mission(compter) }, CATALOGUE, 'GS');
    expect(resultat[1].activites[0]).toEqual(compter);
  });

  it('ne modifie pas la composition reçue', () => {
    const composition = { 1: mission(laby()) };
    attribuerHabillages(composition, CATALOGUE, 'GS');
    expect(composition[1].activites[0].habillage).toBeUndefined();
  });
});
