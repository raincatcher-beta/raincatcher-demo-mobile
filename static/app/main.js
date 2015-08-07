'use strict';

var angular = require('angular');

angular.module('app', [
  require('angular-ui-router')
, require('wfm-mediator')
, require('wfm-person')
, require('wfm-workorder')
, require('wfm-address')
, require('wfm-google-maps')
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
