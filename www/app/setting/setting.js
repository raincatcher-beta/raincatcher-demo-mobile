'use strict';
var angular = require('angular');

angular.module('wfm-mobile.setting', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'app/setting/tab-settings.tpl.html',
          controller: 'SettingCtrl'
        }
      }
    });
})

.controller('SettingCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
;

module.exports = 'wfm-mobile.setting';
