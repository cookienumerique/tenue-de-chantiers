import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

export type ButtonProps = ButtonPropsChakra;

export default function Button(
  props: ButtonProps
): ReactElement {
  const { children, colorScheme = 'blue' } = props;
  return (
    <ButtonChakra
      colorScheme={colorScheme}
      {...props}
    >
      {children}
    </ButtonChakra>
  );
}
