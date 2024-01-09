import { Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';

import CardZac from '@/app-components/card/CardZac';
import Layout from '@/components/layout/Layout';
import Section from '@/components/section/Section';
import useFindInfractionLotById from '@/hooks/infractionLots/useFindInfractionLotById';
import useFindInfractionById from '@/hooks/infractions/useFindInfractionById';
import useFindLotById from '@/hooks/lots/useFindLotById';
import useFindZacById from '@/hooks/zacs/useFindZacById';

import { NextPageWithLayout } from '../_app';

const VisualisationInfractionLotPage: NextPageWithLayout =
  (): ReactElement => {
    const router = useRouter();
    const { uuid } = router?.query;

    // Récupération du lot
    const {
      data: infractionLot,
      // isLoading: isLoadingInfractionLot,
      // isError: isErrorInfractionLot,
    } = useFindInfractionLotById({
      id: uuid,
      enabled: !!uuid,
    });

    const {
      data: lot,
      // isLoadingLot,
      // isErrorLot,
    } = useFindLotById({
      id: infractionLot?.lot?.id,
      enabled: !!infractionLot?.lot?.id,
    });

    const {
      data: zac,
      isLoading: isLoadingZac,
      isError: isErrorZac,
    } = useFindZacById({
      id: lot?.zac?.id,
      enabled: !!lot?.zac?.id,
    });

    const {
      data: infraction,
      // isLoading: isLoadingInfraction,
      // isError: isErrorInfraction,
    } = useFindInfractionById({
      id: infractionLot?.infraction?.id,
      enabled: !!infractionLot?.infraction?.id,
    });

    return (
      <Stack gap="sm">
        <Stack
          display="flex"
          flexDir={{ base: 'column', lg: 'row' }}
        >
          <Section
            title="Localisation"
            flex="1"
          >
            <CardZac
              zac={zac}
              isLoading={isLoadingZac}
              isError={isErrorZac}
            />
            <Text>COD: {lot?.cod}</Text>
            <Text>ADRESSE : {lot?.adresse}</Text>
            <Text>LIB : {lot?.libLot}</Text>
            <Text>
              DATE DE LIVRAISON : {lot?.dateLivraison}
            </Text>
            <Text>
              DATE DEBUT TRAVAUX : {lot?.dateDebutTravaux}
            </Text>
            <Text>
              MONTANT CHARGE FONCIERE :
              {lot?.montantChargeFonciere}
            </Text>
            <Text>CPG : {lot?.cpg?.value}</Text>
          </Section>

          <Section
            title="Infraction"
            flex="1"
          >
            <Text>
              Date de création : {infractionLot?.date}
            </Text>
            <Text>
              Statut de l&apos;infraction :
              {infractionLot?.statut}
            </Text>
            <Text>
              Urgence de l&apos;infraction :
              {infractionLot?.urgence}
            </Text>
            <Text>
              Catégorie : {infraction?.categorie}
            </Text>
            <Text>
              Sous Catégorie : {infraction?.sousCategorie}
            </Text>
            <Text>Libellé : {infraction?.libelle}</Text>
            <Text>Type : {infraction?.type}</Text>
            <Text>Niveau : {infraction?.niveau}</Text>
            <Text>Montant : {infraction?.montant}</Text>
            <Text>CPG : {infraction?.cpg}</Text>
          </Section>
        </Stack>
      </Stack>
    );
  };

VisualisationInfractionLotPage.getLayout =
  function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
  };
export default VisualisationInfractionLotPage;

function getInitialProps() {
  return {};
}

VisualisationInfractionLotPage.getInitialProps =
  getInitialProps;
