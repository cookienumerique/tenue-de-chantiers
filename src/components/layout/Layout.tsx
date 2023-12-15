import { useBreakpointValue } from '@chakra-ui/react';
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

  if (isMobile) {
    return <LayoutMobile>{children}</LayoutMobile>;
  }
  return <LayoutLarge>{children}</LayoutLarge>;
}
