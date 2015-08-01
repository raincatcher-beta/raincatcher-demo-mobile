'use strict';
(function (angular) {
  angular.module('wfm', [
    'ui.router'
  , 'wfm.home'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('wfm', {
        abstract: true,
        templateUrl: 'app/main.tpl.html'
      });
  });
})(angular);
