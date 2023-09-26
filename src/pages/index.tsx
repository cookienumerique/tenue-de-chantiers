import { Stack } from '@chakra-ui/react';
import type { ReactElement } from 'react';

import Layout from '@/components/layout';

import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = (): ReactElement => {
  return (
    <Stack>
      <h1>Cookie numérique</h1>
    </Stack>
  );
};

HomePage.getLayout = function getLayout(
  page: ReactElement
) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
