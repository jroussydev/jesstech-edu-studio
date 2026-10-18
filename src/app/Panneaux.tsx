import catalogue from '../../donnees/catalogue-jeux.json';
import { NIVEAUX } from '../types.ts';

// Valeurs factices : le formulaire sera branché sur le profil à l'étape 5.
const DIFFICULTES = Object.entries(catalogue.difficultes);
const VACANCES = [
  { id: 'toussaint', libelle: 'Toussaint (Halloween)', disponible: true },
  { id: 'noel', libelle: 'Noël', disponible: false },
  { id: 'paques', libelle: 'Pâques', disponible: false },
];
const ACTIVITES_PAGE = [1, 2, 3];

const TITRE = 'font-titre text-sm font-extrabold uppercase tracking-wide text-accent';
const CHAMP =
  'w-full rounded-lg border border-ligne bg-barre px-3 py-1 disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

export function Panneaux() {
  return (
    <aside className="interface-seulement flex flex-col gap-6 border-ligne bg-barre p-4 lg:border-l">
      <section className="flex flex-col gap-2">
        <h2 className={TITRE}>L’enfant</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="prenom">Prénom</label>
          <input id="prenom" name="prenom" type="text" defaultValue="Mathieu" className={CHAMP} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="classe">Classe</label>
          <select id="classe" name="classe" defaultValue="GS" className={CHAMP}>
            {NIVEAUX.map((niveau) => (
              <option key={niveau} value={niveau}>{niveau}</option>
            ))}
          </select>
        </div>
        <fieldset className="flex flex-col gap-1">
          <legend className="mb-1">Difficultés</legend>
          {DIFFICULTES.map(([id, libelle]) => (
            <div key={id} className="flex items-start gap-2 text-sm">
              <input id={`difficulte-${id}`} name="difficultes" type="checkbox" value={id} className="mt-1 accent-accent" />
              <label htmlFor={`difficulte-${id}`}>{libelle}</label>
            </div>
          ))}
        </fieldset>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className={TITRE}>Le cahier</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="personnage">Personnage</label>
          <select id="personnage" name="personnage" disabled className={CHAMP}>
            <option value="filou">Filou le renard</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="vacances">Vacances</label>
          <select id="vacances" name="vacances" defaultValue="toussaint" className={CHAMP}>
            {VACANCES.map((v) => (
              <option key={v.id} value={v.id} disabled={!v.disponible}>{v.libelle}</option>
            ))}
          </select>
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className={TITRE}>Cette page</h2>
        {ACTIVITES_PAGE.map((n) => (
          <button
            key={n}
            type="button"
            disabled
            className="rounded-full border border-accent px-4 py-1 text-left disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            ↻ Activité {n}
          </button>
        ))}
      </section>
    </aside>
  );
}
