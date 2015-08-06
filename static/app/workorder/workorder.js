'use strict';

var angular = require('angular');

angular.module('app.workorder', [
  'ui.router'
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.workorder', {
      url: '/workorder/:workorderId',
      templateUrl: '/app/workorder/workorder.tpl.html',
      controller: 'WorkorderController as ctrl'
    });
})

.run(function($state, Mediator) {
  Mediator.subscribe('workorder:selected', self, function(workorder) {
    $state.go('app.workorder', {
      workorderId: workorder.id
    });
  });
})

.controller('WorkorderController', function ($stateParams, Mediator) {
  var self = this;

  Mediator.publish('workorder:load', self, $stateParams.workorderId);
  Mediator.subscribeOnce('workorder:loaded', self, function(workorder) {
    self.workorder = workorder;
  });

  self.beginWorkflow = function(event, workorder) {
    Mediator.publish('workflow:begin', self, workorder.id);
    event.preventDefault();
  };
})
;

module.exports = 'app.workorder';
