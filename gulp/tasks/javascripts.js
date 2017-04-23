'use strict';

const
  gulp = require('gulp'),
  webpack = require('webpack'),
  _ = require('lodash'),
  webpackStream = require('webpack-stream');

const
  webpackWatchConfig = require('./../../webpack/webpack.watch.config'),
  webpackProdConfig = require('./../../webpack/webpack.prod.config.js');

gulp.task('_scripts:watch', function (done) {
  compile(webpackWatchConfig,_.once(done));
});

gulp.task('_scripts', function () {
  return compile(webpackProdConfig);
});

function compile(webpackConfig, callback) {
  return gulp.src('I_DOnT_EXisST')
    .pipe(webpackStream(webpackConfig, webpack, function(){
      setTimeout(callback || _.noop,1000);
    }))
    .pipe(gulp.dest('target/assets'));
}