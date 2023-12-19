import { Stack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

type SectionProps = {
  children: ReactElement | ReactElement[];
  title: string;
};

export default function Section(
  props: SectionProps
): ReactElement {
  const { children, title } = props;
  return (
    <Stack
      borderRadius="md"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
      backgroundColor="white"
      paddingY="sm"
      paddingX="sm"
      gap="sm"
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
      >
        {title}
      </Text>
      <Stack gap="sm">{children}</Stack>
    </Stack>
  );
}
