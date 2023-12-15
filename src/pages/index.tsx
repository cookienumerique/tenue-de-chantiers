import { Stack } from '@chakra-ui/react';
import type { ReactElement } from 'react';

import Layout from '@/components/layout/Layout';

import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = (): ReactElement => {
  return (
    <Stack>
      <p>d</p>
    </Stack>
  );
};

HomePage.getLayout = function getLayout(
  page: ReactElement
) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
