'use strict';

var express = require('express')
  , config = require('../config')
  ;
// var mediator = require('wfm-mediator');

function initRouter(mediator) {
  var router = express.Router();
  router.route('/').get(function(req, res, next) {
    mediator.subscribeOnce('workorders:loaded', this, function(data) {
      res.json(data);
    });
    mediator.publish('workorders:load', 'workorderRouter');
  });
  return router;
};

module.exports = function(mediator, app) {
  var router = initRouter(mediator);
  app.use(config.apiPath, router);
};
