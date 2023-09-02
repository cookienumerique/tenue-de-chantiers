import type { ReactElement } from 'react';

import Layout from '@/components/layout';
import { NextPageWithLayout } from '@/pages/_app';

const Page: NextPageWithLayout = () => {
  return <p>Page contact</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
