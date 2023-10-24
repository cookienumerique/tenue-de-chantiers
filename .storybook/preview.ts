import type { Preview } from '@storybook/react';
import {
  initialize,
  mswDecorator,
} from 'msw-storybook-addon';
// @ts-ignore
import { theme } from '@/config/theme';

// Initialize MSW
initialize();
const preview: Preview = {
  decorators: [mswDecorator],
  // @ts-ignore
  chakra: {
    theme,
    resetCSS: true,
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  args: {
    // For all components
  },
};

export default preview;
