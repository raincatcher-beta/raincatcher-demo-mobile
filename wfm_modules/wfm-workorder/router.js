'use strict';

var express = require('express')
  , config = require('./config')
  ;

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
    mediator.once('workorder:loaded:' + workorderId, function(data) {
      res.json(data);
    });
    mediator.publish('workorder:load', workorderId);
  });
  router.route('/:id').put(function(req, res, next) {
    var workorderId = req.params.id;
    var workorder = req.body;
    // console.log('req.body', req.body);
    mediator.once('workorder:saved:' + workorderId, function(savedWorkorder) {
      res.json(savedWorkorder);
    });
    mediator.publish('workorder:save', workorder);
  });
  router.route('/').post(function(req, res, next) {
    var ts = new Date().getTime();  // TODO: replace this with a proper uniqe (eg. a cuid)
    var workorder = req.body;
    workorder.createdTs = ts;
    mediator.once('workorder:created:' + ts, function(createdWorkorder) {
      res.json(createdWorkorder);
    });
    mediator.publish('workorder:create', workorder);
  })

  return router;
};

module.exports = function(mediator, app) {
  var router = initRouter(mediator);
  app.use(config.apiPath, router);
};
