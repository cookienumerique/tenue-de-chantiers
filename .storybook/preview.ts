import type { Preview } from '@storybook/react';

// @ts-ignore
import { theme } from '@/config/theme';

const preview: Preview = {
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
