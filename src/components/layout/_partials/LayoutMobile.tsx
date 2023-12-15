import { Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

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

  return <Stack>{children}</Stack>;
}
