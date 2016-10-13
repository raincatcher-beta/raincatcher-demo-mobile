'use strict';

module.exports = 'wfm-mobile.calendar';

angular.module('wfm-mobile.calendar', [
  'ui.router'
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.calendar', {
      url: '/calendar',
      resolve: {
        workorders: function(workorderManager) {
          return workorderManager.list();
        }
      },
      templateUrl: 'app/calendar/calendar.tpl.html',
      controller: 'calendarCtrl as ctrl'
    });
})

.controller('calendarCtrl', function(workorders) {
  this.workorders = workorders;
})

;
