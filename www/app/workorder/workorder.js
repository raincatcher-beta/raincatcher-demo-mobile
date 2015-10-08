'use strict';
var angular = require('angular');

angular.module('wfm-mobile.workorders', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('tab.workorders', {
        url: '/workorders',
        views: {
          'tab-workorders': {
            templateUrl: 'app/workorder/tab-workorders.tpl.html',
            controller: 'WorkordersCtrl as ctrl',
            resolve: {
              workorders: function(mediator) {
                mediator.publish('workorders:load');
                return mediator.promise('workorders:loaded');
              }
            }
          }
        }
      })
})

.controller('WorkordersCtrl', function($scope,mediator, workorders) {
  var self = this;
  self.workorders = workorders;
  mediator.subscribe('workorders:refreshed', function(results){
    self.workorders = results;
    $scope.$apply();
  })
})

;

module.exports = 'wfm-mobile.workorders';
