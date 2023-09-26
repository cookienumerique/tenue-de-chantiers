import type { Preview } from '@storybook/react';

import { theme } from '../src/config/theme';

const preview: Preview = {
  chakra: {
    theme,
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
