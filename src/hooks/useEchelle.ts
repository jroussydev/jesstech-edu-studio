import { useEffect, useRef, useState } from 'react';
import { calculerEchelle } from '../lib/echelle.ts';

/** Mesure la largeur de l'élément référencé et en déduit l'échelle d'une page de largeur donnée. */
export function useEchelle(largeurPage: number, plafond: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [largeurDisponible, setLargeurDisponible] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observateur = new ResizeObserver(([entree]) => setLargeurDisponible(entree.contentRect.width));
    observateur.observe(element);
    return () => observateur.disconnect();
  }, []);

  return { ref, echelle: calculerEchelle(largeurDisponible, largeurPage, plafond) };
}
