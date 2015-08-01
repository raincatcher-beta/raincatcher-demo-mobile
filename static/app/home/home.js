'use strict';
(function (angular) {
  angular.module('wfm.home', ['ui.router'])

  .config(function ($stateProvider) {
    $stateProvider
      .state('wfm.home', {
        url: '/home',
        templateUrl: 'app/home/home.tpl.html',
        controller: 'HomeController'
      })
      .state('wfm.about', {
        url: '/about',
        templateUrl: 'app/home/about.tpl.html',
        controller: 'HomeController'
      });
  })

  .controller('HomeController', function ($scope) {
  })

  ;
})(angular);
