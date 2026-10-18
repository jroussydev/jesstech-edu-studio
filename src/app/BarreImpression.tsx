import { FORMATS, type Format, type ModeImpression } from '../types.ts';

const LISTE_FORMATS = Object.keys(FORMATS) as Format[];

interface BarreImpressionProps {
  format: Format;
  impression: ModeImpression;
  onFormatChange: (format: Format) => void;
  onImpressionChange: (impression: ModeImpression) => void;
}

export function BarreImpression({ format, impression, onFormatChange, onImpressionChange }: BarreImpressionProps) {
  return (
    <div className="interface-seulement flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-ligne bg-barre px-4 py-2">
      <div className="flex items-center gap-2">
        <label htmlFor="format">Format</label>
        <select
          id="format"
          name="format"
          value={format}
          onChange={(e) => onFormatChange(e.target.value as Format)}
          className="rounded-full border border-ligne bg-barre px-3 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {LISTE_FORMATS.map((format) => (
            <option key={format} value={format}>{format}</option>
          ))}
        </select>
      </div>

      <fieldset className="flex items-center gap-4">
        <legend className="sr-only">Mode d’impression</legend>
        <div className="flex items-center gap-1">
          <input
            id="impression-couleur"
            type="radio"
            name="impression"
            value="couleur"
            checked={impression === 'couleur'}
            onChange={() => onImpressionChange('couleur')}
            className="accent-accent"
          />
          <label htmlFor="impression-couleur">Couleur</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            id="impression-nb"
            type="radio"
            name="impression"
            value="nb"
            checked={impression === 'nb'}
            onChange={() => onImpressionChange('nb')}
            className="accent-accent"
          />
          <label htmlFor="impression-nb">Noir et blanc</label>
        </div>
      </fieldset>

      <button
        type="button"
        className="ml-auto rounded-full border border-accent px-4 py-1 hover:bg-accent hover:text-barre focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Imprimer
      </button>
    </div>
  );
}
