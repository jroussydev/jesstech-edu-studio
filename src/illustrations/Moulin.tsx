import { remplir, TRAIT } from './trait.ts';

interface MoulinProps {
  aColorier?: boolean;
}

/** Vieux moulin du prototype, dans un cadre 0 0 100 100. */
export function Moulin({ aColorier = false }: MoulinProps) {
  return (
    <>
      <rect x="30" y="44" width="40" height="50" fill={remplir('var(--bois-clair)', aColorier)} stroke={TRAIT} strokeWidth="3" />
      <path d="M26 46 L50 26 L74 46 Z" fill={remplir('var(--citrouille)', aColorier)} stroke={TRAIT} strokeWidth="3" strokeLinejoin="round" />
      <rect x="43" y="70" width="14" height="24" fill={remplir('var(--bois-fonce)', aColorier)} stroke={TRAIT} strokeWidth="2" />
      <path d="M50 30 L18 8 M50 30 L82 8 M50 30 L22 56 M50 30 L80 56" stroke={TRAIT} strokeWidth="5" strokeLinecap="round" />
      <circle cx="50" cy="30" r="4" fill={TRAIT} />
    </>
  );
}
