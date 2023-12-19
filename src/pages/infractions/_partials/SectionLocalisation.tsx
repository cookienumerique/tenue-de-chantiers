import { Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import SelectLotByZacId from '@/app-components/form/SelectLotByZacId';
import ZacLabel from '@/app-components/text/ZacLabel';
import Section from '@/components/section/Section';
import useFindLotById from '@/hooks/lots/useFindLotById';

type LocalisationProps = {
  lotId: string | string[] | undefined;
};

/**
 * @description Section du formulaire "localisation" pour la création d'une infraction
 */
export default function SectionLocalisation(
  props: LocalisationProps
): ReactElement {
  const { lotId } = props;

  // Récupération du lot
  const {
    data: lot,
    isLoading: isLoadingLot,
    isError: isErrorLot,
  } = useFindLotById({
    id: lotId,
    enabled: !!lotId,
  });

  return (
    <Section title="SectionLocalisation">
      <ZacLabel
        nom={lot?.zac?.nom}
        patrimoine={lot?.zac?.patrimoine}
        isLoading={isLoadingLot}
        isError={isErrorLot}
      />
      <Stack width={{ base: '100%', md: '20em' }}>
        {/*<SelectZac defaultValue={lot?.zac?.id} />*/}
        <SelectLotByZacId
          defaultValue={lotId as string}
          zacId={lot?.zac?.id}
          isLoading={isLoadingLot}
          isError={isErrorLot}
        />
      </Stack>
    </Section>
  );
}
