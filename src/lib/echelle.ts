/**
 * Échelle d'affichage d'une page rendue à taille réelle : elle remplit la largeur disponible
 * sans dépasser le plafond (la page n'est jamais agrandie au-delà), et vaut 0 tant que rien n'est mesuré.
 */
export function calculerEchelle(largeurDisponible: number, largeurPage: number, plafond: number): number {
  if (largeurDisponible <= 0 || largeurPage <= 0) return 0;
  return Math.min(plafond, largeurDisponible / largeurPage);
}
