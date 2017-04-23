'use strict';
require("./app.styl");
var angular = require('angular');

angular.module('site-analyzer',[
  require('angular-resource'),
  require('angular-ui-router'),

  require("./states/details"),
  require("./states/conversations")
])
  .config(require("./config/route.config"))
  .config(require("./config/debugInfo.config"))
  .config(require("./config/html5mode.config"));

module.exports = 'size-analyzer';