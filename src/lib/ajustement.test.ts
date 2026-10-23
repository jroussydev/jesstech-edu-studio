import { describe, expect, it } from 'vitest';
import { AJUSTEMENT, deborde, reduireJusquaTenir } from './ajustement.ts';

/** Faux bloc de 100 px de haut dont le texte mesure `hauteurTexte` px au coefficient 1. */
function fauxBloc(hauteurTexte: number) {
  let k = 0;
  const bloc = {
    hauteurTexte,
    appliques: [] as number[],
    appliquer: (nouveau: number) => { k = nouveau; bloc.appliques.push(nouveau); },
    debordeEncore: () => deborde({ scrollWidth: 200, clientWidth: 200, scrollHeight: bloc.hauteurTexte * k, clientHeight: 100 }),
  };
  return bloc;
}

describe('deborde', () => {
  it('tolère un dépassement de 3 px', () => {
    expect(deborde({ scrollWidth: 200, clientWidth: 200, scrollHeight: 103, clientHeight: 100 })).toBe(false);
  });

  it('détecte un dépassement en hauteur ou en largeur', () => {
    expect(deborde({ scrollWidth: 200, clientWidth: 200, scrollHeight: 104, clientHeight: 100 })).toBe(true);
    expect(deborde({ scrollWidth: 204, clientWidth: 200, scrollHeight: 100, clientHeight: 100 })).toBe(true);
  });
});

describe('reduireJusquaTenir', () => {
  it('garde le coefficient à 1 quand rien ne déborde', () => {
    const bloc = fauxBloc(80);
    expect(reduireJusquaTenir(bloc.debordeEncore, bloc.appliquer, AJUSTEMENT.plancherBloc)).toBe(1);
    expect(bloc.appliques).toEqual([1]);
  });

  it('réduit par pas de 0,03 jusqu\'à ce que le texte tienne', () => {
    const bloc = fauxBloc(120);   // tient dès que 120 × k ≤ 103, soit k ≤ 0,858
    expect(reduireJusquaTenir(bloc.debordeEncore, bloc.appliquer, AJUSTEMENT.plancherBloc)).toBe(0.85);
    expect(bloc.appliques).toEqual([1, 0.97, 0.94, 0.91, 0.88, 0.85]);
  });

  it('s\'arrête au plancher même si le texte déborde encore', () => {
    const bloc = fauxBloc(300);
    expect(reduireJusquaTenir(bloc.debordeEncore, bloc.appliquer, AJUSTEMENT.plancherPage)).toBe(0.7);
    expect(bloc.appliques.at(-1)).toBe(0.7);
    expect(bloc.debordeEncore()).toBe(true);
  });

  it('repart de 1 à chaque appel, pour suivre un contenu qui raccourcit', () => {
    const bloc = fauxBloc(300);
    expect(reduireJusquaTenir(bloc.debordeEncore, bloc.appliquer, AJUSTEMENT.plancherBloc)).toBe(0.55);
    bloc.hauteurTexte = 80;
    expect(reduireJusquaTenir(bloc.debordeEncore, bloc.appliquer, AJUSTEMENT.plancherBloc)).toBe(1);
  });
});
