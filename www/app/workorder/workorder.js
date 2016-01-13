'use strict';

angular.module('wfm-mobile.workorders', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.workorders', {
        url: '/workorders',
        templateUrl: 'app/workorder/workorder-list.tpl.html',
        controller: 'WorkordersCtrl as ctrl',
        resolve: {
          workorders: function(mediator, workorderManager) {
            return workorderManager.list();
          }
        }
      })
})

.controller('WorkordersCtrl', function($scope, $filter, mediator, workorders) {
  var self = this;
  self.workorders = workorders;
})

;

module.exports = 'wfm-mobile.workorders';
