import type { StorybookConfig } from '@storybook/nextjs';
import path from 'node:path';

const config: StorybookConfig = {
  stories: ['../(app|components)/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  typescript: {
    reactDocgen:
      process.env.NODE_ENV === 'development'
        ? 'react-docgen'
        : 'react-docgen-typescript',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    if (!config.resolve) {
      return config;
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/app': path.resolve(__dirname, '../app'),
      '@/components': path.resolve(__dirname, '../components'),
      '@/src': path.resolve(__dirname, '../src'),
    };
    return config;
  },
  env: (config) => ({
    ...config,
    EXAMPLE_VAR: 'An environment variable configured in Storybook',
  }),
};
export default config;
