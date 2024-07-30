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
      '@/styles': path.resolve(__dirname, '../styles'),
    };
    return config;
  },
  env: (config) => ({
    ...config,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUP ?? '',
  }),
};
export default config;
