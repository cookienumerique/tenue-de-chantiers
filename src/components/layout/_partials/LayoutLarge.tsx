import { Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import ButtonShortCut from '@/components/button/ButtonShortCut';
import HeaderLarge from '@/components/layout/_partials/HeaderLarge';
import Body from '@/components/layout/Body/Body';

type LayoutLargeProps = {
  children: ReactElement | ReactElement[];
};

/**
 * @description Layout for large screen
 * @param props
 * @constructor
 */
export default function LayoutLarge(
  props: LayoutLargeProps
): ReactElement {
  const { children } = props;

  return (
    <Stack
      flex="1"
      gap={0}
    >
      {/* Header */}
      <HeaderLarge />
      {/* Body */}
      <Body
        paddingY="sm"
        paddingX="md"
      >
        {children}
      </Body>
      <ButtonShortCut />
      {/* Footer */}
    </Stack>
  );
}
