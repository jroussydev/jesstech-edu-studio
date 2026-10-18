import type { ActiviteConfig, Costume, Mission, Mot, Theme } from '../types.ts';

/** Mots du jour d'une mission, dans l'ordre de la mission ; signale un mot absent du thème. */
export function motsDeMission(theme: Theme, mission: Mission): Mot[] {
  return mission.mots.map((id) => {
    const mot = theme.mots.find((m) => m.id === id);
    if (!mot) throw new Error(`Mot « ${id} » absent du thème ${theme.id}.`);
    return mot;
  });
}

/** Costume de Filou pour une mission, selon la table des costumes du thème (RG8). */
export function costumePour(theme: Theme, numero: number): Costume {
  const costume = theme.costumes.find((c) => c.missions.includes(numero));
  if (!costume) throw new Error(`Aucun costume de Filou pour la mission ${numero}.`);
  return costume;
}

/** Graine d'une activité : celle écrite par « Régénérer », sinon graine de la mission + rang × 97 (RG3). */
export function graineActivite(mission: Mission, rang: number, config: ActiviteConfig): number {
  return config.graine ?? mission.graine + rang * 97;
}
