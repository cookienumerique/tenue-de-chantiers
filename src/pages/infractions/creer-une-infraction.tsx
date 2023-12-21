import { Button, Stack, Text } from '@chakra-ui/react';
import { Formiz, useForm } from '@formiz/core';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';

import Layout from '@/components/layout/Layout';
import useCreateInfractionLot, {
  CreateInfractionLotPayload,
} from '@/hooks/infractionLots/useCreateInfractionLot';
import useFindLotById from '@/hooks/lots/useFindLotById';
import LabelValue from '@/interfaces/LabelValue';
import SectionDocuments from '@/pages/infractions/_partials/SectionDocuments';
import SectionInfraction from '@/pages/infractions/_partials/SectionInfraction';
import SectionLocalisation from '@/pages/infractions/_partials/SectionLocalisation';

import { NextPageWithLayout } from '../_app';

const CreationInfractionPage: NextPageWithLayout =
  (): ReactElement => {
    const router = useRouter();
    const {
      mutate: createInfractionLot,
      isLoading: isLoadingCreation,
    } = useCreateInfractionLot();
    const { lotId } = router?.query;
    /**
     * @description Soumission du formulaire
     * @param {Object} values - Valeurs du formulaire
     */
    const handleSubmit = (values: {
      optionLot: LabelValue;
      infraction: { optionLibelle: LabelValue };
      urgenceOption: LabelValue;
    }) => {
      const { optionLot, infraction, urgenceOption } =
        values ?? {};
      const payload: CreateInfractionLotPayload = {
        id_lot: optionLot?.value,
        id_infraction: infraction?.optionLibelle?.value,
        urgence: urgenceOption?.value,
      };
      createInfractionLot(payload);
    };
    const form = useForm({
      onValidSubmit: handleSubmit,
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

          {/* Section documents */}
          <SectionDocuments />

          {/* Soumission du formulaire */}
          <Button
            isLoading={isLoadingCreation}
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
