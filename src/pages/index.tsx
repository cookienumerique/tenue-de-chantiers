import { Stack, Text } from '@chakra-ui/react';
import type { ReactElement } from 'react';

import Layout from '@/components/layout';

import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = (): ReactElement => {
  return (
    <Stack>
      <Text as="h1">Cookie numérique.</Text>
    </Stack>
  );
};

HomePage.getLayout = function getLayout(
  page: ReactElement
) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
