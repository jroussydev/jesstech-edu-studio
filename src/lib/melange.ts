import type { Rng } from './rng.ts';

/** Mélange de Fisher-Yates : renvoie une copie mélangée, la liste d'origine n'est pas modifiée. */
export function melange<T>(liste: readonly T[], rng: Rng): T[] {
  const copie = liste.slice();
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}
