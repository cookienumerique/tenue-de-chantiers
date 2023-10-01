import { Box, Stack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

type BannerProps = {
  height: string;
};
export default function Banner(
  props: BannerProps
): ReactElement {
  const { height = '100%' } = props;
  return (
    <Stack
      height={height}
      backgroundSize="cover"
      backgroundImage="url('images/banner-cookie-numerique.jpg')"
      paddingY={4}
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Box
        position="absolute"
        backgroundColor="purple.800"
        opacity="0.5"
        width="100%"
        height="100%"
        zIndex={0}
      />

      <Stack
        zIndex={0}
        color="white"
      >
        <Text
          as="h2"
          textAlign="center"
          fontWeight="bold"
        >
          Agence web
        </Text>
        <Text
          as="h3"
          textAlign="center"
        >
          Site internet - Application web
        </Text>
      </Stack>
    </Stack>
  );
}
