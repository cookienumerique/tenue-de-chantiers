import { ReactElement } from 'react';
import { useWatch } from 'react-hook-form';

import SelectInfractionByCategorie from '@/app-components/form/SelectInfractionByCategorie';
import SelectInfractionBySousCategorie from '@/app-components/form/SelectInfractionBySousCategorie';
import SelectInfractionCategorie from '@/app-components/form/SelectInfractionCategorie';
import Section from '@/components/section/Section';

/**
 * @description Section du formulaire "infraction" pour la création d'une infraction
 */
export default function SectionInfraction(): ReactElement {
  const categorie = useWatch({ name: 'categorie' });
  const sousCategorie = useWatch({
    name: 'sousCategorie',
  });

  return (
    <Section title="Infraction">
      {/* Select avec les catégories d'infractions */}
      <SelectInfractionCategorie />

      {/* Liste des sous-catégorie par catégorie */}
      <SelectInfractionByCategorie
        categorie={categorie}
      />
      {/* Liste des libellés par sous-catégorie */}
      <SelectInfractionBySousCategorie
        sousCategorie={sousCategorie}
      />
    </Section>
  );
}
