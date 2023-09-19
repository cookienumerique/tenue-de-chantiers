import { Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { ReactElement } from 'react';

import Layout from '@/components/layout';

import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = (): ReactElement => {
  return (
    <Stack>
      <h1>Page Accueil testeds! eeee</h1>
      <NextLink href="/contact">Go page contact</NextLink>
    </Stack>
  );
};

HomePage.getLayout = function getLayout(
  page: ReactElement
) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
