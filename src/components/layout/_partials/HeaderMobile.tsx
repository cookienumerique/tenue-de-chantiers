import { Avatar, Stack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

/**
 * @description Header for mobile
 * @constructor
 */
export default function HeaderMobile(): ReactElement {
  const name = 'John Doe';
  return (
    <Stack
      boxShadow="sm"
      paddingY="xs"
      paddingX="md"
    >
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        {/*<Image*/}
        {/*  borderRadius="lg"*/}
        {/*  boxSize="32px"*/}
        {/*  src="images/android-chrome-192x192.png"*/}
        {/*  alt="logo"*/}
        {/*/>*/}
        {/* Title app*/}
        <Text
          fontSize="md"
          color="gray.800"
          fontWeight="bold"
          textAlign="center"
        >
          {process?.env?.NEXT_PUBLIC_APP_NAME?.toUpperCase() ??
            'My app'}
        </Text>
        {/* Avatar user */}
        <Stack alignSelf="end">
          <Avatar
            name={name}
            size="sm"
            src="https://bit.ly/dan-abramov"
            cursor="pointer"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
