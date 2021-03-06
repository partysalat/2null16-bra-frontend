const
  Hoek = require('hoek'),
  logger =require('./src/server/utils/logger');

// init and configure server

require('./src/server').create({
  port: 1337,
  routes: {
    state: {
      failAction: 'log'
    },
    security: true
  }
}, function(err,server){
  if(err){
    logger.error('du trinkst failed to start: ', err);
    throw err;
  }
  server.start(function (startupError) {
    Hoek.assert(!startupError, startupError);
    logger.info('overjizzle bra running at: ', server.info.uri);

    if (process.send) {
      process.send('server_started');
    }
  });
});
