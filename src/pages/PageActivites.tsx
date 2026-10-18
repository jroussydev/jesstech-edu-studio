import type { CSSProperties } from 'react';
import { rangeesDePage } from '../cahier/disposition.ts';
import { costumePour, graineActivite, motsDeMission } from '../cahier/mission.ts';
import { EnTetePage } from '../composants/EnTetePage.tsx';
import { FilouExplique } from '../composants/FilouExplique.tsx';
import { NoteParent } from '../composants/NoteParent.tsx';
import { ZoneActivite } from '../composants/ZoneActivite.tsx';
import { imageTheme } from '../donnees.ts';
import type { CompositionMission, Mission, Profil, Theme } from '../types.ts';

interface PageActivitesProps {
  mission: Mission;
  composition: CompositionMission;
  profil: Profil;
  theme: Theme;
  folio: number;
}

/** Page gauche d'une mission : « Filou t'explique » et les activités, rangées selon la disposition (RG2). */
export function PageActivites({ mission, composition, profil, theme, folio }: PageActivitesProps) {
  const costume = costumePour(theme, mission.numero);
  const filou = imageTheme(costume.image);
  const explique = mission.explique[profil.id];
  const rangees = rangeesDePage(composition.disposition);
  // Pastille, numéros et tag prennent la couleur de la semaine (RG9).
  const repere = { '--repere': `var(--semaine-${mission.semaine})` } as CSSProperties;

  return (
    <div className="page-contenu" style={repere}>
      <EnTetePage tag={`Mission ${mission.numero}, semaine ${mission.semaine}`} titre={mission.titre} prenom={profil.prenom} />
      <div className="zones">
        {rangees.map((rangee, r) => (
          <div key={r} className={`rangee-zones${rangee.demi ? ' demi' : ''}`} style={{ flex: rangee.demi ? 1.5 : 1 }}>
            {rangee.blocs.map((bloc) => {
              if (bloc.type === 'explique') {
                return (
                  <FilouExplique
                    key="explique"
                    filou={filou}
                    libelleFilou={costume.libelle}
                    mots={motsDeMission(theme, mission)}
                    texte={explique.texte}
                    question={explique.question}
                  />
                );
              }
              const config = composition.activites[bloc.index];
              const contexte = { demi: rangee.demi, profil, theme, mission, filou };
              return (
                <ZoneActivite
                  key={bloc.index}
                  numero={bloc.numero}
                  config={config}
                  graine={graineActivite(mission, bloc.index, config)}
                  contexte={contexte}
                />
              );
            })}
          </div>
        ))}
      </div>
      <NoteParent texte={mission.parent[profil.id]} />
      <div className="folio">{folio}</div>
    </div>
  );
}
