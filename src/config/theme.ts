import { extendTheme } from '@chakra-ui/react';

const colors = {
  greyDark: '#4b5768',
  primary: {
    50: '#fff2de',
    100: '#fddcb2',
    200: '#fac585',
    300: '#f6ad55',
    400: '#f39627',
    500: '#da7c0f',
    600: '#aa6109',
    700: '#794504',
    800: '#4a2800',
    900: '#1d0d00',
  },
};

const components = {
  FormLabel: {
    baseStyle: {
      color: colors.greyDark,
      fontWeight: 'bold',
    },
  },
};

const space = {
  xs: '16px',
  sm: '24px',
  md: '32px',
  lg: '48px',
  xl: '64px',
};

const borderRadiius = {
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '32px',
};

const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '24px',
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
  space,
  borderRadiius,
  fontSizes,
});
