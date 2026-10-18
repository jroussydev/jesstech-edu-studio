import { taillePapier } from '../cahier/assemblage.ts';
import type { Format } from '../types.ts';

interface TaillePapierProps {
  format: Format;
}

/** Injecte la taille du papier (@page) selon le format : la marge nulle est dans impression.css. */
export function TaillePapier({ format }: TaillePapierProps) {
  return <style>{`@page { size: ${taillePapier(format)}; }`}</style>;
}
