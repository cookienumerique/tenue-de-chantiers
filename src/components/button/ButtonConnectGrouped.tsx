import { Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import ButtonConnectFacebook from '@/components/button/ButtonConnectFacebook';
import ButtonConnectGoogle from '@/components/button/ButtonConnectGoogle';

export default function ButtonConnectGrouped(): ReactElement {
  return (
    <Stack>
      <ButtonConnectFacebook />
      <ButtonConnectGoogle />
    </Stack>
  );
}
