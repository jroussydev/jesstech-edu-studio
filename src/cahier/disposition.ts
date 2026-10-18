import type { Disposition } from '../types.ts';

export type Bloc =
  | { type: 'explique' }
  | { type: 'activite'; index: number; numero: number };  // numero : celui de la consigne (RG6)

export interface Rangee {
  demi: boolean;       // deux blocs côte à côte : rangée plus haute (RG2)
  blocs: Bloc[];
}

/** Rangées de la page activités, avec les consignes numérotées dans l'ordre d'affichage (RG2, RG6). */
export function rangeesDePage(disposition: Disposition): Rangee[] {
  let numero = 0;
  return disposition.map((rangee) => ({
    demi: rangee.length === 2,
    blocs: rangee.map((bloc): Bloc => (bloc === 'explique' ? { type: 'explique' } : { type: 'activite', index: bloc, numero: ++numero })),
  }));
}
