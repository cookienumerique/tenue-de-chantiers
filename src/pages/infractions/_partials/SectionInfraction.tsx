import {
  Formiz,
  useForm,
  useFormFields,
} from '@formiz/core';
import { ReactElement } from 'react';

import SelectInfractionByCategorie from '@/app-components/form/SelectInfractionByCategorie';
import SelectInfractionBySousCategorie from '@/app-components/form/SelectInfractionBySousCategorie';
import SelectInfractionCategorie from '@/app-components/form/SelectInfractionCategorie';
import Section from '@/components/section/Section';
import CpgEnum from '@/enums/CpgEnum';

type SectionInfractionProps = {
  cpg: CpgEnum | undefined;
};
/**
 * @description Section du formulaire "infraction" pour la création d'une infraction
 */
export default function SectionInfraction(
  props: SectionInfractionProps
): ReactElement {
  const { cpg } = props;

  const form = useForm();
  const { infraction } = useFormFields({
    connect: form,
    fields: [
      'infraction.categorie',
      'infraction.sousCategorie',
    ],
    selector: (field) => field.value?.label,
  }) as {
    infraction: {
      categorie: string;
      sousCategorie: string;
    };
  };
  const { categorie, sousCategorie } = infraction ?? {};
  /**
   * @description Reset les valeurs des sous-catégories et des libellés
   */
  const handleChangeSelectCategorie = () =>
    form.setValues({
      'infraction.sousCategorie': null,
      'infraction.libelle': null,
    });

  /**
   * @description Reset les valeurs des libellés
   */
  const handleChangeSelectSousCategorie = () =>
    form.setValues({
      'infraction.sousCategorie': null,
      'infraction.libelle': null,
    });

  if (!cpg) return <></>;

  return (
    <Formiz connect={form}>
      <Section title="Infraction">
        {/* Select avec les catégories d'infractions */}
        <SelectInfractionCategorie
          cpg={cpg}
          onChange={handleChangeSelectCategorie}
        />

        {/* Liste des sous-catégorie par catégorie */}
        <SelectInfractionByCategorie
          categorie={categorie}
          onChange={handleChangeSelectSousCategorie}
        />

        {/* Liste des libellés par sous-catégorie */}
        <SelectInfractionBySousCategorie
          sousCategorie={sousCategorie}
        />
      </Section>
    </Formiz>
  );
}
