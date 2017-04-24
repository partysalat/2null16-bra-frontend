
const _ = require('lodash');

const
  manifest = require('./../../../target/rev-manifest.json'),
  jsBundleName = _.get(manifest.main,0),
  cssBundleName = _.get(manifest.main,1);

module.exports = function (request, reply) {
  reply.view('index', {
    jsBundlePath: `/internal/assets/${jsBundleName}`,
    cssBundlePath: `/internal/assets/${cssBundleName}`
  });
};