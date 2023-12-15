import { extendTheme } from '@chakra-ui/react';

const components = {};
const colors = {
  green: {
    50: '#e2fbed',
    100: '#c2ebd4',
    200: '#9fddb9',
    300: '#7ccf9e',
    400: '#58c184',
    500: '#3ea76a',
    600: '#2e8251',
    700: '#1f5d3a',
    800: '#0f3921',
    900: '#001506',
  },
};

const styles = {
  global: {
    body: {
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
