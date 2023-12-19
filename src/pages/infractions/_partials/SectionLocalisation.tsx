import { Stack } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { ReactElement } from 'react';

import SelectLotByZacId from '@/app-components/form/SelectLotByZacId';
import ZacLabel from '@/app-components/text/ZacLabel';
import Section from '@/components/section/Section';
import Lot from '@/interfaces/Lot';

type LocalisationProps = {
  lot: Lot | undefined;
  isLoading: boolean;
  isError: boolean;
};

/**
 * @description Section du formulaire "localisation" pour la création d'une infraction
 */
export default function SectionLocalisation(
  props: LocalisationProps
): ReactElement {
  const { lot, isLoading, isError } = props;

  const form = useForm();
  return (
    <Formiz connect={form}>
      <Section title="Localisation">
        <ZacLabel
          nom={lot?.zac?.nom}
          patrimoine={lot?.zac?.patrimoine}
          isLoading={isLoading}
          isError={isError}
        />
        <Stack width={{ base: '100%', md: '20em' }}>
          {/*<SelectZac defaultValue={lot?.zac?.id} />*/}
          <SelectLotByZacId
            defaultValue={lot?.id as string}
            zacId={lot?.zac?.id}
            isLoading={isLoading}
            isError={isError}
          />
        </Stack>
      </Section>
    </Formiz>
  );
}
