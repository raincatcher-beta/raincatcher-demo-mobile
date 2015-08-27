'use strict';

var angular = require('angular');
var mediator = require('./mediator');

angular.module('wfm.core.mediator', ['ng'])

.factory('Mediator', function MediatorService($log) {
  return mediator;
});

module.exports = 'wfm.core.mediator';
