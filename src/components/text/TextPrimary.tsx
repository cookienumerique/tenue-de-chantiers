import { Text, TextProps } from '@chakra-ui/react';
import type { ReactElement } from 'react';

/**
 * @description Afficher un texte primaire
 */
export default function TextPrimary(
  props: TextProps
): ReactElement {
  const { children, ...rest } = props;

  if (!children) return <></>;
  return (
    <Text
      fontSize="sm"
      {...rest}
    >
      {children}
    </Text>
  );
}
