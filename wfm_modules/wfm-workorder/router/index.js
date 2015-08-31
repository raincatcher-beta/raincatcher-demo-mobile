'use strict';

var express = require('express')
  , config = require('../config')
  ;
// var mediator = require('wfm-mediator');

function initRouter(mediator) {
  var router = express.Router();
  router.route('/').get(function(req, res, next) {
    mediator.once('workorders:loaded', function(data) {
      res.json(data);
    });
    mediator.publish('workorders:load');
  });
  router.route('/:id').get(function(req, res, next) {
    var workorderId = req.params.id
    mediator.once('workorder:loaded', function(data) {
      res.json(data);
    });
    mediator.publish('workorder:load', workorderId);
  });
  return router;
};

module.exports = function(mediator, app) {
  var router = initRouter(mediator);
  app.use(config.apiPath, router);
};
