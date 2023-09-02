import { Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { ReactElement } from 'react';

import Layout from '@/components/layout';

import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return (
    <Stack>
      <p>Page contact</p>
      <NextLink href="/contact">Go page contact</NextLink>
    </Stack>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
