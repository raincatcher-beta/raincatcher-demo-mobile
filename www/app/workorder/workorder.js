'use strict';

angular.module('wfm-mobile.workorders', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.workorders', {
        url: '/workorders',
        templateUrl: 'app/workorder/workorder-list.tpl.html',
        controller: 'WorkordersCtrl as ctrl',
        resolve: {
          workorders: function(workorderManager) {
            return workorderManager.list();
          }
        }
      })
})

.controller('WorkordersCtrl', function($scope, $filter, workorders) {
  var self = this;
  self.workorders = workorders;
})

;

module.exports = 'wfm-mobile.workorders';
