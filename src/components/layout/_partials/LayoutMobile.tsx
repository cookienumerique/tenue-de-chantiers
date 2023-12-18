import { Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import ButtonShortCut from '@/components/button/ButtonShortCut';
import HeaderMobile from '@/components/layout/_partials/HeaderMobile';

type LayoutMobileProps = {
  children: ReactElement | ReactElement[];
};

/**
 * @description Layout for mobile
 * @param props
 * @constructor
 */
export default function LayoutMobile(
  props: LayoutMobileProps
): ReactElement {
  const { children } = props;

  return (
    <Stack>
      {/* Header */}
      <HeaderMobile />
      {/* Content */}
      <Stack></Stack>
      {children}
      {/* Footer */}
      <Stack>
        <ButtonShortCut />
      </Stack>
    </Stack>
  );
}
