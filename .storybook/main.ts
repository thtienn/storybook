import { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  docs: {
    autodocs: 'tag',
    dev: {
      injectStoryParameters: true,
    },
  },
  viteFinal: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, '../src'),
    };
    return config;
  },
};
export default config;