import type { StorybookConfig } from '@storybook/nextjs';
import path from 'node:path';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true, // Enables SWC support
      },
    },
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    if (!config.resolve) {
      return config;
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/app': path.resolve(__dirname, '../app'),
    };
    return config;
  },
  env: (config) => ({
    ...config,
    EXAMPLE_VAR: 'An environment variable configured in Storybook',
  }),
};
export default config;
