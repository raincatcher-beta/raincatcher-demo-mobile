'use strict';
(function (angular) {
  angular.module('app', [
    'ui.router'
  , 'wfm.core.mediator'
  , 'wfm.workorder'
  , 'wfm.person'
  , 'wfm.address'
  , 'app.home'
  , 'app.workorder'
  , 'app.workorder-list'
  , 'app.workflow'
  ])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'app/main.tpl.html'
      });
  });
})(angular);
