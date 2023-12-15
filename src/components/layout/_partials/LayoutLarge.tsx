import { Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

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

  return <Stack>{children}</Stack>;
}
