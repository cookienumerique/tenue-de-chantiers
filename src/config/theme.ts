import { extendTheme } from '@chakra-ui/react';

const components = {};
const colors = {
  purple: {
    50: '#f3edfd',
    100: '#d4cce7',
    200: '#b8aad4',
    300: '#9b88c2',
    400: '#7f67b0',
    500: '#654d96',
    600: '#4f3c76',
    700: '#382b55',
    800: '#221a35',
    900: '#0c0817',
  },
};

const styles = {
  global: {
    body: {
      fontFamily: 'Jura',
      minHeight: '100vh',
    },
    '#__next': {
      minHeight: '100vh',
    },
    h1: {
      fontSize: '24px',
      color: 'red.300',
    },
  },
};

export const theme = extendTheme({
  components,
  colors,
  styles,
});
