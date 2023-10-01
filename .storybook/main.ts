import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  webpackFinal: async (config) => {
    // @ts-ignore
    config.resolve.alias = {
      // @ts-ignore
      ...config.resolve.alias,
      '@/components': path.resolve(
        __dirname,
        '../src/components'
      ),
      '@/config': path.resolve(
        __dirname,
        '../src/config'
      ),
    };
    // @ts-ignore
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },
  staticDirs: ['../src', '../public'],
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  // For generate auto doc page
  docs: {
    autodocs: 'tag',
  },
};
export default config;
