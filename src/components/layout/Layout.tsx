import {
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import { ReactElement } from 'react';

import LayoutLarge from '@/components/layout/_partials/LayoutLarge';
import LayoutMobile from '@/components/layout/_partials/LayoutMobile';

type LayoutProps = {
  children: ReactElement | ReactElement[];
};

export default function Layout(
  props: LayoutProps
): ReactElement {
  const { children } = props;
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  const head = (
    <Head>
      <link
        rel="icon"
        href="/images/favicon.ico"
      />
    </Head>
  );
  // Layout mobile
  if (isMobile) {
    return (
      <LayoutMobile>
        <Stack>
          {head}
          {children}
        </Stack>
      </LayoutMobile>
    );
  }

  // Layout large
  return (
    <LayoutLarge>
      <Stack>
        {head}
        {children}
      </Stack>
    </LayoutLarge>
  );
}
