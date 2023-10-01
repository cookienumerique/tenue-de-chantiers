import { Stack, StackProps } from '@chakra-ui/react';
import { ReactElement } from 'react';

type SectionProps = StackProps;
export default function Section(
  props: SectionProps
): ReactElement {
  const { children, ...rest } = props;
  return (
    <Stack
      paddingY={6}
      paddingX={4}
      {...rest}
    >
      {children}
    </Stack>
  );
}
