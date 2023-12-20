import { Button, Stack, Text } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';

import Layout from '@/components/layout/Layout';
import useFindLotById from '@/hooks/lots/useFindLotById';
import SectionInfraction from '@/pages/infractions/_partials/SectionInfraction';
import SectionLocalisation from '@/pages/infractions/_partials/SectionLocalisation';

import { NextPageWithLayout } from '../_app';

const CreationInfractionPage: NextPageWithLayout =
  (): ReactElement => {
    const router = useRouter();
    const { lotId } = router?.query;
    const form = useForm({
      onSubmit: (values) => console.log('submit', values),
    });

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
      <Stack gap="sm">
        <Text>Creation d&apos;une infraction</Text>

        <Formiz connect={form}>
          {/* Section localisation */}
          <SectionLocalisation
            lot={lot}
            isLoading={isLoadingLot}
            isError={isErrorLot}
          />

          {/* Section infraction */}
          <SectionInfraction cpg={lot?.cpg} />

          {/* Soumission du formulaire */}
          <Button
            colorScheme="primary"
            type="submit"
            onClick={form.submit}
          >
            Créer l&apos;infraction
          </Button>
        </Formiz>
      </Stack>
    );
  };

CreationInfractionPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <Layout>{page}</Layout>;
};

export default CreationInfractionPage;
