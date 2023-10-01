import { Stack, Text } from '@chakra-ui/react';
import type { ReactElement } from 'react';

import Banner from '@/components/banner/Banner';
import Header from '@/components/header/Header';
import Layout from '@/components/layout';
import Section from '@/components/section/Section';

import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = (): ReactElement => {
  const emailSupport =
    process?.env?.NEXT_PUBLIC_APP_SUPPORT;

  return (
    <Stack spacing={0.5}>
      <Header />
      <Banner height="70vh" />

      {/* Section temporaire */}
      <Section textAlign="center">
        <Text
          fontWeight="bold"
          fontSize="xl"
        >
          Maintenance
        </Text>
        <Text>
          Notre site est en cours de développement. Pour
          tous renseignements contactez nous à :
        </Text>
        <Text fontWeight="bold">{emailSupport}</Text>
      </Section>
    </Stack>
  );
};

HomePage.getLayout = function getLayout(
  page: ReactElement
) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
