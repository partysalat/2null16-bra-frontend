var
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  _ = require('lodash');

var webpackConfig = _.cloneDeep(require('./webpack.base.config'));
webpackConfig.plugins = webpackConfig.plugins.concat(
  new ExtractTextPlugin('styles-[hash].css'),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: false,
      drop_debugger: true
    }
  })
);

module.exports = webpackConfig;