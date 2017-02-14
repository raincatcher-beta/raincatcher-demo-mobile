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
        },
        resultMap: function(resultManager) {
          return resultManager.list()
            .then(function(results) {
              var map = {};
              results.forEach(function(result) {
                map[result.workorderId] = result;
              });
              return map;
            });
        }
      }
    });
})

.controller('WorkordersCtrl', function($scope, $filter, workorderManager, mediator, workorders, resultMap) {
  var self = this;
  self.workorders = workorders;
  self.resultMap = resultMap;
  mediator.subscribeForScope('wfm:auth:profile:change', $scope, function(profileData) {
    if (!profileData) {
      self.workorders = [];
    }
  });
  mediator.subscribeForScope('wfm:sync:record_delta_received:workorders', $scope, function() {
    workorderManager.list().then(function(workorders) {
      self.workorders = workorders;
    });
  });
})

;

module.exports = 'wfm-mobile.workorders';
