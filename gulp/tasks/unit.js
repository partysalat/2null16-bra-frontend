/*jslint node: true*/
'use strict';

var
  gulp = require('gulp'),
  config = require("./../config"),
  gutil = require('gulp-util'),
  karma = require('karma');

gulp.task('_unit:browser:once', function(done) {
  gutil.log(gutil.colors.green("UNIT BROWSER STARTED"));
  new karma.Server({
    configFile: config.paths.test.config,
    singleRun: true
  },function(err){
    done(err);
  }).start();
});

gulp.task('_unit:browser:watch', function() {
  gutil.log(gutil.colors.green("UNIT BROWSER STARTED"));
  new karma.Server({
    configFile: config.paths.test.config
  }).start();
});
