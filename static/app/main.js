'use strict';

var angular = require('angular');

angular.module('app', [
  require('angular-ui-router')
, require('../modules/wfm/core/mediator')
, require('../modules/wfm/workorder/workorder')
, require('../modules/wfm/person/person')
, require('../modules/wfm/address/address')
, require('./home/home')
, require('./workorder/workorder')
, require('./workorder/workorder-list')
, require('./workflow/workflow')
])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'app/main.tpl.html'
    });
});
