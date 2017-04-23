var
  webpack = require('webpack'),
  mkdirp = require('mkdirp'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  path = require('path');

module.exports = {
  entry: './src/browser/app.js',
  output: {
    filename: 'bundle-[hash].js'
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    function () {
      this.plugin('done', function (stats) {
        mkdirp.sync(path.join(__dirname, '..', 'target'));
        require('fs').writeFileSync(
          path.join(__dirname, '..', 'target', 'rev-manifest.json'),
          JSON.stringify(stats.toJson().assetsByChunkName)
        );
      });
    }

  ],
  stylus: {
    use: [
      require('bootstrap-styl')()
    ]
  },
  module: {
    loaders: [
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize&autoprefixer!stylus-loader')
      },
      {
        test: /\.pug/,
        loader: 'pug-static'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};