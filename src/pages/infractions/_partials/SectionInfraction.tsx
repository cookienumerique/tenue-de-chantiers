import { Stack } from '@chakra-ui/react';
import {
  useFormContext,
  useFormFields,
} from '@formiz/core';
import { ReactElement } from 'react';

import SelectInfractionByCategorie from '@/app-components/form/SelectInfractionByCategorie';
import SelectInfractionByCpg from '@/app-components/form/SelectInfractionByCpg';
import SelectInfractionBySousCategorie from '@/app-components/form/SelectInfractionBySousCategorie';
import SelectInfractionLotUrgence from '@/app-components/form/SelectInfractionLotUrgence';
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

  const form = useFormContext();
  const { infraction } = useFormFields({
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
    <Section title="Infraction">
      <Stack
        width={{ base: '100%', md: '50%', lg: '25%' }}
      >
        {/* Sélection du cractère d'urgence */}
        <SelectInfractionLotUrgence />
      </Stack>

      <Stack gap="inherit">
        <Stack
          gap="inherit"
          display={{ lg: 'flex' }}
          flexDir={{ base: 'column', lg: 'row' }}
        >
          <Stack
            maxWidth={{ sm: '100%', lg: '50%' }}
            flex="1"
          >
            {/* Select avec les catégories d'infractions */}
            <SelectInfractionByCpg
              cpg={cpg}
              onChange={handleChangeSelectCategorie}
            />
          </Stack>

          <Stack
            maxWidth={{ sm: '100%', lg: '50%' }}
            flex="1"
          >
            {/* Liste des sous-catégorie par catégorie */}
            <SelectInfractionByCategorie
              categorie={categorie}
              onChange={handleChangeSelectSousCategorie}
            />
          </Stack>
        </Stack>

        <Stack
          gap="inherit"
          display={{ lg: 'flex' }}
          flexDir={{ base: 'column', lg: 'row' }}
        >
          {/* Liste des libellés par sous-catégorie */}
          <SelectInfractionBySousCategorie
            sousCategorie={sousCategorie}
          />
          <Stack width="100%" />
        </Stack>
      </Stack>
    </Section>
  );
}

function getInitialProps() {
  return {};
}

SectionInfraction.getInitialProps = getInitialProps;
