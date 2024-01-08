import { Stack } from '@chakra-ui/react';
import type { ReactElement } from 'react';

import BadgeCpg from '@/app-components/badge/BadgeCpg';
import Card from '@/app-components/card/Card';
import TextPrimary from '@/app-components/text/TextPrimary';
import TextSecondary from '@/app-components/text/TextSecondary';
import Lot from '@/interfaces/Lot';

type CardLotProps = {
  isLoading: boolean;
  isError: boolean;
  lot: Lot | undefined;
};
/**
 * @description Affiche les informations d'une lot
 */
export default function CardLot(
  props: CardLotProps
): ReactElement {
  const { isLoading = true, lot, isError } = props;

  if (!lot) return <></>;
  return (
    <Card
      isLoading={isLoading}
      isError={isError}
      title="Lot"
      propsHeader={{
        backgroundColor: 'lot.500',
        color: 'white',
      }}
    >
      <Stack
        display="flex"
        flexDir="row"
        alignItems="start"
      >
        <Stack spacing={0}>
          <TextPrimary>{lot?.libLot}</TextPrimary>
          <TextSecondary>{lot?.codLot}</TextSecondary>
        </Stack>
        <BadgeCpg cpg={lot?.cpg?.value} />
      </Stack>
    </Card>
  );
}
