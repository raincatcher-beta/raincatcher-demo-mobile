'use strict';
(function (angular) {
  angular.module('app.home', ['ui.router'])

  .config(function ($stateProvider) {
    $stateProvider
      .state('app.home', {
        url: '/home',
        templateUrl: 'app/home/home.tpl.html',
        controller: 'HomeController'
      })
      .state('app.about', {
        url: '/about',
        templateUrl: 'app/home/about.tpl.html',
        controller: 'HomeController'
      });
  })

  .controller('HomeController', function ($scope) {
  })

  ;
})(angular);
