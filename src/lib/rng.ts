/** Fonction qui renvoie un nombre dans [0, 1[ à chaque appel. */
export type Rng = () => number;

/**
 * Générateur aléatoire à graine (mulberry32) : même graine, même suite (RG3).
 * Porté tel quel depuis reference/apercu-cahier-mathieu.html pour retrouver
 * les tirages des cahiers déjà imprimés.
 */
export function creerRng(graine: number): Rng {
  let etat = graine;
  return () => {
    etat |= 0;
    etat = (etat + 0x6d2b79f5) | 0;
    let t = Math.imul(etat ^ (etat >>> 15), 1 | etat);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
