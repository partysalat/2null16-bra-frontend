const
  Joi = require('joi');
const routes = [
  {
    method: 'GET',
    path: '/api/drinks/{type}',
    config: {
      handler: {
        proxy: {
          host: 'localhost',
          port: '9000',
          protocol: 'http'
        }
      },
    }
  }, {
    method: 'POST',
    path: '/api/drinks/{type}',
    config: {
      handler: {
        proxy: {
          host: 'localhost',
          port: '9000',
          protocol: 'http'
        }
      },
      auth: 'simple',
    }
  }, {
    method: 'GET',
    path: '/api/user',
    config: {
      handler: {
        proxy: {
          host: 'localhost',
          port: '9000',
          protocol: 'http'
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/api/user',
    config: {
      handler: {
        proxy: {
          host: 'localhost',
          port: '9000',
          protocol: 'http'
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/api/news/{page}',
    config: {
      handler: {
        proxy: {
          host: 'localhost',
          port: '9000',
          protocol: 'http'
        }
      },
      validate: {
        params: {
          page: Joi.number().integer()
        }
      }
    }
  },
  {
    method: 'DELETE',
    path: '/api/news/item/{newsId}',
    config: {
      handler: {
        proxy: {
          host: 'localhost',
          port: '9000',
          protocol: 'http'
        }
      },
      auth: 'simple',
    }
  },

  {
    method: 'POST',
    path: '/api/drinks',
    config: {
      handler: {
        proxy: {
          host: 'localhost',
          port: '9000',
          protocol: 'http'
        }
      }
    }

  },
  {
    method: 'POST',
    path: '/api/photo/shoot',
    config: {
      handler: {
        proxy: {
          host: 'localhost',
          port: '9000',
          protocol: 'http'
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/api/user/bestlist',
    config: {
      handler: {
        proxy: {
          host: 'localhost',
          port: '9000',
          protocol: 'http'
        }
      },
      validate: {
        params: {
          imagePath: Joi.string(),
          keeper: Joi.string()
        }
      }

    }
  },
  {
    method: 'GET',
    path: '/api/user/achievements',
    config: {
      handler: {
        proxy: {
          host: 'localhost',
          port: '9000',
          protocol: 'http'
        }
      }

    }
  },
  {
    method: 'GET',
    path: '/api/user/bestlist/csv',
    config: {
      handler: {
        proxy: {
          host: 'localhost',
          port: '9000',
          protocol: 'http'
        }
      }

    }
  },
  {
    method: 'POST',
    path: '/api/photo/stream/start',
    config: {
      handler: {
        proxy: {
          host: 'localhost',
          port: '9000',
          protocol: 'http'
        }
      }

    }
  },
  {
    method: 'POST',
    path: '/api/photo/stream/stop',
    config: {
      handler: {
        proxy: {
          host: 'localhost',
          port: '9000',
          protocol: 'http'
        }
      }

    }
  }

];


module.exports = routes;