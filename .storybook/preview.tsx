import { Toast } from '@/components/atoms/Toast';
import { customErrorMap } from '@/src/helpers/validation/customErrorMap';
import '@/styles/globals.css';
import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import zod from 'zod';

initialize();
zod.setErrorMap(customErrorMap);

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['atoms', 'forms', 'features', 'layouts', 'app'],
      },
    },
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chromatic: { viewports: [1080] },
  },
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toast />
      </>
    ),
  ],
};

export default preview;
