import { Stack } from '@chakra-ui/react';
import type { ReactElement } from 'react';

import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Stack>{page}</Stack>;
};

export default Page;
