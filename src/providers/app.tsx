import {
  ChakraProvider,
  GlobalStyle,
  Stack,
} from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

import { theme } from '@/config/theme';
import { queryClient } from '@/lib/react-query';

const myFont = localFont({
  src: '../fonts/jura/Jura-Medium.woff',
});

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props;
  return (
    <ChakraProvider
      resetCSS
      theme={theme}
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyle />
        <Stack className={myFont.className}>
          {children}
        </Stack>
      </QueryClientProvider>
    </ChakraProvider>
  );
};
