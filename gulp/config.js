'use strict';
const path = require('path');
module.exports = {
  port: 1337,
  paths: {
    test: {
      config: path.resolve(__dirname, '../test/karma.conf.js')
    }
  }
};