'use strict';
var MODULE_NAME = 'sia-details';

require('angular')
  .module(MODULE_NAME, [])
  .controller('detailsController', require('./details.controller'));


module.exports = MODULE_NAME;