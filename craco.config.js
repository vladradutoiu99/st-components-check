const path = require('path');
const { when } = require('@craco/craco');

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const packagesPathDepth = '../';

module.exports = {
  webpack: {
    plugins: {
      add: [
        new NodePolyfillPlugin({
          excludeAliases: ['console']
        })
      ]
    },

    ...when(process.env.REACT_APP_MODE === 'packages', () => ({
      configure: (webpackConfig) => {
        const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
          ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
        );

        webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);

        return webpackConfig;
      },

      alias: {
        react: path.resolve(__dirname, 'node_modules/react'),
        'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom'),

        // ...packagesAlias,
        '@smart-touch-technologies/uicomponents': path.resolve(
          __dirname,
          packagesPathDepth + 'uicomponents'
        )
      }
    }))
  }
};
