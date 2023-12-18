import { Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import ButtonShortCut from '@/components/button/ButtonShortCut';
import HeaderMobile from '@/components/layout/_partials/HeaderMobile';
import Body from '@/components/layout/Body/Body';

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
    <Stack
      flex="1"
      gap={0}
    >
      {/* Header */}
      <HeaderMobile />
      {/* Content */}
      <Body
        paddingY="xs"
        paddingX="sm"
      >
        {children}
      </Body>
      {/* Footer */}
      <Stack>
        <ButtonShortCut />
      </Stack>
    </Stack>
  );
}
