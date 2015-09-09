'use strict';

var express = require('express')
  , config = require('./config')
  ;

function initRouter(mediator) {
  var router = express.Router();
  router.route('/steps').get(function(req, res, next) {
    mediator.publish('workflow:steps:load');
    console.log('requesting steps')
    mediator.once('workflow:steps:loaded', function(steps) {
      console.log('sending steps:', steps);
      res.json(steps);
    });
  });

  return router;
};

module.exports = function(mediator, app) {
  var router = initRouter(mediator);
  app.use(config.apiPath, router);
};
