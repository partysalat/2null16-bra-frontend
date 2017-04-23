const
  _ = require('lodash'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackBaseConfig = _.cloneDeep(require('./webpack.base.config'));

var webpackWatchConfig =  _.assign({}, webpackBaseConfig, {
  devtool: 'source-map',
  output: {
    filename: 'bundle.js'
  },
  watch: true
});

webpackWatchConfig.plugins.push(new ExtractTextPlugin('styles.css'))

module.exports = webpackWatchConfig;