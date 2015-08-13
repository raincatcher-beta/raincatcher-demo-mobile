'use strict';
var angular = require('angular');

angular.module('wfm-mobile.calendar', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('tab.calendar', {
      url: '/calendar',
      views: {
        'tab-calendar': {
          templateUrl: 'app/calendar/tab-calendar.tpl.html',
          controller: 'CalendarCtrl'
        }
      }
    });
})

.controller('CalendarCtrl', function($scope) {})
;

module.exports = 'wfm-mobile.calendar';
