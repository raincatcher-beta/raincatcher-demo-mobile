'use strict';
(function (angular) {
  angular.module('app.home', ['ui.router'])

  .config(function ($stateProvider) {
    $stateProvider
      .state('app.home', {
        url: '/home',
        templateUrl: 'app/home/home.tpl.html'
      });
  })

  ;
})(angular);
