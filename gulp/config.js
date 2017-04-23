var path = require("path");
module.exports = {
  port: 9000,
  paths: {
    test: {
      config: path.resolve(__dirname, "../test/karma.conf.js")
    }
  }
};