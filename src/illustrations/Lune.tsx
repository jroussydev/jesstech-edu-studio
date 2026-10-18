import { remplir, TRAIT } from './trait.ts';

interface LuneProps {
  aColorier?: boolean;
}

/** Croissant de lune du prototype, dans un cadre 0 0 100 100. */
export function Lune({ aColorier = false }: LuneProps) {
  return (
    <path
      d="M58 8 A42 42 0 1 0 92 72 A33 33 0 1 1 58 8 Z"
      fill={remplir('var(--or)', aColorier)}
      stroke={TRAIT}
      strokeWidth="3"
      strokeLinejoin="round"
    />
  );
}
