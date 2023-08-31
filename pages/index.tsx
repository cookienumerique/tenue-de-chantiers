import { Stack } from '@chakra-ui/react';
import type { ReactElement } from 'react';

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Stack>{page}</Stack>;
};

export default Page;
