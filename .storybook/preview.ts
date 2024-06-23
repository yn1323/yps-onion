import type { Preview } from '@storybook/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import '../styles/globals.css';

initialize();

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
    chromatic: { viewports: [414, 1080] },
  },
  decorators: [mswDecorator],
};

export default preview;
