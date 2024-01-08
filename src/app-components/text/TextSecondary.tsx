import { Text, TextProps } from '@chakra-ui/react';
import type { ReactElement } from 'react';

/**
 * @description Afficher un texte secondaire
 */
export default function TextSecondary(
  props: TextProps
): ReactElement {
  const { children, ...rest } = props;

  if (!children) return <></>;
  return (
    <Text
      fontSize="xs"
      color="greyDark"
      {...rest}
    >
      {children}
    </Text>
  );
}
