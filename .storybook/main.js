const aliasConfig = require('../config/webpack.alias.js');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-jest',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async (config) => {
    const hasAlias =
      aliasConfig && aliasConfig.resolve && aliasConfig.resolve.alias;
    if (hasAlias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        ...aliasConfig.resolve.alias,
      };
    }

    return config;
  },
};
