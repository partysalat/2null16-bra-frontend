'use strict';

const
  hapi = require('hapi'),
  logger = require('./utils/logger'),
  routes = require('hapi-auto-routes');

let server;

function create(connectionSettings, callback) {

  server = new hapi.Server();
  server.connection(connectionSettings);


  server.register([
    require('inert'),
    require('vision')
  ],
    function (pluginInitializationErrors) {

      if (pluginInitializationErrors) {
        logger.error('app failed to start: ', pluginInitializationErrors);
        callback(pluginInitializationErrors);
      }

      routes.bind(server).register({
        pattern: __dirname + '/routes/*.js'
      });


      server.views({
        engines: {
          pug: require('pug')
        },
        path: __dirname + '/views'
      });

      callback(null, server);
    });


  return server;
}

module.exports.create = create;