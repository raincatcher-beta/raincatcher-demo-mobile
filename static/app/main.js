'use strict';
(function (angular) {
  angular.module('app', [
    'ui.router'
  , 'wfm.core.mediator'
  , 'wfm.workorder'
  , 'app.home'
  , 'app.workorder'
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
