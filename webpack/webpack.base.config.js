const
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
  // stylus: {
  //   use: [
  //     require('bootstrap-styl')()
  //   ]
  // },
  module: {
    rules: [
      {
        test: /\.styl/,
        use: ExtractTextPlugin.extract({
          use:[
            // {loader:'style-loader'},
            {loader:'css-loader',options:{minimize:true,autoprefixer:true}},
            {loader:'stylus-loader'}
          ]
        })
      },
      {
        test: /\.pug/,
        use: 'pug-static-loader'
      }
    ]
  }
};