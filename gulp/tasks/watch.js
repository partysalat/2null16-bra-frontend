'use strict';
const
  gulp = require('gulp'),
  path = require('path'),
  bs = require('browser-sync');

gulp.task('_watch', function () {
  gulp.watch(path.resolve(__dirname + './../../target/assets/**/*.js'), ['_reload']);
  gulp.watch(path.resolve(__dirname + './../../src/server/**/*'), ['_server:restart']);
});

gulp.task('_reload', function () {
  bs.reload();
});
