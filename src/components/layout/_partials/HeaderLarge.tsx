import { Avatar, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import HeaderTitle from '@/components/layout/header/HeaderTitle';

/**
 * @description Header for large screen
 * @constructor
 */
export default function HeaderLarge(): ReactElement {
  const name = 'John Doe';
  return (
    <Stack
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
        <HeaderTitle fontSize="xl" />

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
