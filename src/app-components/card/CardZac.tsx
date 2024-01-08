import { Stack } from '@chakra-ui/react';
import type { ReactElement } from 'react';

import BadgePatrimoine from '@/app-components/badge/BadgePatrimoine';
import Card from '@/app-components/card/Card';
import TextPrimary from '@/app-components/text/TextPrimary';
import TextSecondary from '@/app-components/text/TextSecondary';
import Zac from '@/interfaces/Zac';

type CardZacProps = {
  zac: Zac | undefined;
  isLoading: boolean;
  isError: boolean;
};
/**
 * @description Affiche les informations d'une Zac
 */
export default function CardZac(
  props: CardZacProps
): ReactElement {
  const { zac, isLoading, isError } = props;

  return (
    <Card
      isLoading={isLoading}
      isError={isError}
      title="ZAC"
      propsHeader={{
        backgroundColor: 'zac.500',
        color: 'white',
      }}
    >
      <Stack
        display="flex"
        flexDir="row"
        alignItems="start"
      >
        <Stack spacing={0}>
          <TextPrimary>{zac?.libZac}</TextPrimary>
          <TextSecondary>{zac?.codSect}</TextSecondary>
        </Stack>
        <BadgePatrimoine patrimoine={zac?.patrimoine} />
      </Stack>
    </Card>
  );
}
