'use strict';
var MODULE_NAME = 'cma-conversations';

require("./conversation.styl");

require('angular')
  .module(MODULE_NAME, [])
  .controller('conversationsController', require('./conversations.controller'));


module.exports = MODULE_NAME;














