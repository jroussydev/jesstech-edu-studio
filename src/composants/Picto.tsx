import type { JSX } from 'react';
import type { PictoId } from '../types.ts';

// Pictogrammes d'action des consignes, repris du prototype (reference/), dans un carré de 48.
const DESSINS: Record<PictoId, JSX.Element> = {
  entoure: (
    <>
      <ellipse cx="24" cy="24" rx="20" ry="14" fill="none" stroke="var(--bois-fonce)" strokeWidth="3" strokeDasharray="5 4" />
      <circle cx="24" cy="24" r="6" fill="var(--citrouille)" />
    </>
  ),
  compte: (
    <>
      <circle cx="10" cy="30" r="5" fill="var(--bois-fonce)" />
      <circle cx="24" cy="18" r="5" fill="var(--bois-fonce)" />
      <circle cx="38" cy="30" r="5" fill="var(--bois-fonce)" />
      <path d="M8 42 H40" stroke="var(--citrouille)" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  chemin: (
    <>
      <path d="M6 40 C16 8 32 44 40 12" fill="none" stroke="var(--bois-fonce)" strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />
      <path d="M33 13 L41 9 L43 18" fill="none" stroke="var(--citrouille)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  relie: (
    <>
      <circle cx="9" cy="14" r="5" fill="var(--bois-fonce)" />
      <circle cx="39" cy="34" r="5" fill="var(--bois-fonce)" />
      <path d="M13 17 L35 31" stroke="var(--citrouille)" strokeWidth="3.4" strokeLinecap="round" />
    </>
  ),
  colorie: (
    <>
      <path d="M9 39 L13 27 L33 7 L41 15 L21 35 Z" fill="var(--citrouille)" stroke="var(--bois-fonce)" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M13 27 L21 35 M9 39 L14 37" stroke="var(--bois-fonce)" strokeWidth="2.6" strokeLinecap="round" />
    </>
  ),
  colle: (
    <>
      <circle cx="22" cy="24" r="15" fill="var(--echarpe)" stroke="var(--bois-fonce)" strokeWidth="2.6" />
      <path d="M33 13 Q42 10 40 22 Z" fill="var(--papier)" stroke="var(--bois-fonce)" strokeWidth="2.4" strokeLinejoin="round" />
    </>
  ),
  livre: (
    <>
      <path d="M24 12 Q14 6 4 9 V40 Q14 37 24 43 Q34 37 44 40 V9 Q34 6 24 12 Z" fill="var(--papier)" stroke="var(--bois-fonce)" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M24 12 V43" stroke="var(--bois-fonce)" strokeWidth="2.6" />
      <path d="M9 18 H19 M9 25 H19 M29 18 H39 M29 25 H39" stroke="var(--mousse)" strokeWidth="2.4" strokeLinecap="round" />
    </>
  ),
  ciseaux: (
    <>
      <circle cx="12" cy="36" r="7" fill="none" stroke="var(--bois-fonce)" strokeWidth="3" />
      <circle cx="30" cy="38" r="7" fill="none" stroke="var(--bois-fonce)" strokeWidth="3" />
      <path d="M16 30 L40 6 M26 32 L18 8" stroke="var(--bois-fonce)" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  paille: (
    <>
      <rect x="20" y="4" width="8" height="40" rx="3" fill="var(--echarpe)" stroke="var(--bois-fonce)" strokeWidth="2.4" />
      <circle cx="24" cy="12" r="9" fill="var(--citrouille)" stroke="var(--bois-fonce)" strokeWidth="2.4" />
    </>
  ),
  bouche: (
    <>
      <path d="M8 22 Q24 6 40 22 Q24 42 8 22 Z" fill="var(--papier)" stroke="var(--bois-fonce)" strokeWidth="2.6" />
      <path d="M14 22 Q24 28 34 22" fill="none" stroke="var(--citrouille)" strokeWidth="2.6" strokeLinecap="round" />
    </>
  ),
  oreille: (
    <>
      <path d="M30 40 Q22 44 18 36 Q14 28 20 24 Q14 14 24 8 Q36 4 38 18 Q39 26 32 30 Q28 33 30 40 Z" fill="var(--papier)" stroke="var(--bois-fonce)" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M26 18 Q30 14 32 20" fill="none" stroke="var(--bois-fonce)" strokeWidth="2.4" strokeLinecap="round" />
    </>
  ),
};

interface PictoProps {
  id: PictoId;
}

/** Pictogramme d'action, décoratif : la phrase de la consigne porte le sens. */
export function Picto({ id }: PictoProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {DESSINS[id]}
    </svg>
  );
}
