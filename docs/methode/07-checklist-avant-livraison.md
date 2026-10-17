# 07 — Checklist avant livraison

## Code
- [ ] `npm run build` passe sans erreur ni avertissement TypeScript
- [ ] Les tests passent (`npm run test`)
- [ ] Pas de `console.log` oublié, pas de code commenté inutile
- [ ] Pas de couleur écrite en dur, pas de `any`

## Fonctionnement
- [ ] Le parcours principal marche de bout en bout
- [ ] Testé sur téléphone, tablette et ordinateur
- [ ] Aucun texte ne sort de son bloc
- [ ] Spécifique Edu Studio : impression A4 et A5, couleur et noir et blanc, à 100 %

## Accessibilité
- [ ] Navigation au clavier possible, focus visible
- [ ] Contrastes vérifiés, textes alternatifs présents

## Documentation
- [ ] Documents `docs/` à jour avec ce qui a été livré
- [ ] Entrées ajoutées dans `docs/journal/`
- [ ] `README.md` à jour (installation, lancement)

## Git
- [ ] Tout est committé sur `develop`
- [ ] `develop` mergé dans `main`
- [ ] Étiquette de version posée (`git tag -a vX.Y.Z`)
