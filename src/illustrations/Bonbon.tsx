import { remplir, TRAIT } from './trait.ts';

interface BonbonProps {
  aColorier?: boolean;
}

/** Bonbon emballé du prototype, dans un cadre 0 0 100 60. */
export function Bonbon({ aColorier = false }: BonbonProps) {
  return (
    <>
      <path
        d="M30 30 L6 12 L10 30 L6 48 Z M70 30 L94 12 L90 30 L94 48 Z"
        fill={remplir('var(--echarpe)', aColorier)}
        stroke={TRAIT}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <ellipse cx="50" cy="30" rx="24" ry="18" fill={remplir('var(--citrouille)', aColorier)} stroke={TRAIT} strokeWidth="3" />
      <path d="M40 15 Q46 30 40 45 M55 13 Q61 30 55 47" fill="none" stroke={TRAIT} strokeWidth="2.4" />
    </>
  );
}
