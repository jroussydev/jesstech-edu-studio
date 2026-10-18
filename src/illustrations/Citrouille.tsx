import { remplir, TRAIT } from './trait.ts';

interface CitrouilleProps {
  aColorier?: boolean;
}

/** Citrouille du prototype, dans un cadre 0 0 100 90. */
export function Citrouille({ aColorier = false }: CitrouilleProps) {
  const fond = remplir('var(--citrouille)', aColorier);
  return (
    <>
      <path d="M50 22 Q47 10 56 5" fill="none" stroke={aColorier ? TRAIT : 'var(--mousse)'} strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="31" cy="56" rx="22" ry="30" fill={fond} stroke={TRAIT} strokeWidth="3" />
      <ellipse cx="69" cy="56" rx="22" ry="30" fill={fond} stroke={TRAIT} strokeWidth="3" />
      <ellipse cx="50" cy="56" rx="20" ry="32" fill={fond} stroke={TRAIT} strokeWidth="3" />
    </>
  );
}
