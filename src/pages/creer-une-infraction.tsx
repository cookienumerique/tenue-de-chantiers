import { Stack } from '@chakra-ui/react';
import type { ReactElement } from 'react';

import Layout from '@/components/layout/Layout';

import { NextPageWithLayout } from './_app';

const CreationInfractionPage: NextPageWithLayout =
  (): ReactElement => {
    return (
      <Stack>
        <p>Page création infraction</p>
      </Stack>
    );
  };

CreationInfractionPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <Layout>{page}</Layout>;
};

export default CreationInfractionPage;
