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
};
export default config;