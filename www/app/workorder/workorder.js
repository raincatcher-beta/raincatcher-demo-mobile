'use strict';
var angular = require('angular');

angular.module('wfm-mobile.workorders', [
  'ui.router',
, 'wfm.core.mediator'
])

.run(function($state, mediator) {
  mediator.subscribe('workorder:selected', self, function(workorder) {
    $state.go('tab.workorder', {
      workorderId: workorder.id
    });
  });
})

.config(function($stateProvider) {
  $stateProvider
    .state('tab.workorders', {
        url: '/workorders',
        views: {
          'tab-workorders': {
            templateUrl: 'app/workorder/tab-workorders.tpl.html',
            controller: 'WorkordersCtrl as ctrl'
          }
        }
      })
    .state('tab.workorder', {
      url: '/workorder/:workorderId',
      views: {
        'tab-workorders': {
          templateUrl: 'app/workorder/workorder-detail.tpl.html',
          controller: 'WorkorderDetailCtrl as ctrl'
        }
      }
    })
})

.controller('WorkordersCtrl', function(mediator) {
  var self = this;

  mediator.publish('workorders:load');
  mediator.once('workorders:loaded', self, function(workorders) {
    self.workorders = workorders;
  });

  mediator.once('workorder:selected', self, function(workorder) {

  });
})

.controller('WorkorderDetailCtrl', function($stateParams, mediator) {
  var self = this;

  mediator.publish('workorder:load', self, $stateParams.workorderId);
  mediator.once('workorder:loaded', self, function(workorder) {
    self.workorder = workorder;
  });
})
;

module.exports = 'wfm-mobile.workorders';
