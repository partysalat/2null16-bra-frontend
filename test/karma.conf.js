'use strict';

var webpackConfig = require("./../webpack/webpack.base.config");
module.exports = function (config) {
  config.set({

    basePath: __dirname + "/../",
    frameworks: ['jasmine'],
    files: [
      // polyfill is needed for phantoms 1.x
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'target/assets/*.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/unit/browser/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'test/unit/browser/**/*Spec.js': ['webpack']
    },
    /*webpack: {
      module: webpackConfig.module
    },*/
    reporters: ['progress'],
    // web server port
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
