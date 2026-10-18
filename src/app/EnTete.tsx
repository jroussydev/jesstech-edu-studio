import logoFilou from '../../donnees/themes/halloween/images/filou-cape.png';

export function EnTete() {
  return (
    <header className="interface-seulement flex items-center gap-3 border-b border-ligne bg-barre px-4 py-2">
      <img src={logoFilou} alt="" className="h-12 w-auto" />
      <h1 className="font-titre text-xl font-extrabold text-accent">
        Générateur de cahiers de vacances
      </h1>
    </header>
  );
}
