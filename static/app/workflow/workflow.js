'use strict';

var angular = require('angular');

angular.module('app.workflow', [
  'ui.router'
, 'wfm.core.mediator'
])

.config(function ($stateProvider) {
  $stateProvider
    .state('app.workflow', {
      abstract: true,
      url: '/workorder/:workorderId/workflow',
      templateUrl: '/app/workflow/workflow.tpl.html',
      controller: 'WorkflowController as workflowController'
    })
    .state('app.workflow.person', {
      url: '/workorder/:workorderId/workflow/person',
      template: '<person-form></person-form>'
    })
    .state('app.workflow.address', {
      url: '/workorder/:workorderId/workflow/address',
      template: '<address-form></address-form>'
    })
    .state('app.workflow.location', {
      url: '/workorder/:workorderId/workflow/location',
      template: '<google-maps-form></google-maps-form>'
    });
})

.run(function($state, Mediator) {
  Mediator.subscribe('workflow:begin', self, function(data) {
    $state.go('app.workflow.person', {
      workorderId: data
    });
  });
})

.controller('WorkflowController', function ($state, $stateParams, Mediator) {
  var self = this;

  Mediator.publish('workorder:load', self, $stateParams.workorderId);
  Mediator.subscribeOnce('workorder:loaded', self, function(workorder) {
    self.workorder = workorder;
  });

  Mediator.subscribeOnce('workflow:person:next', self, function(person) {
    self.workorder.person = person;
    Mediator.publish('workorder:save', self, self.workorder);
    Mediator.subscribeOnce('workorder:saved', self, function(workorder) {
      $state.go('app.workflow.address', { workorderId: workorder.id });
    });
  });

  Mediator.subscribeOnce('workflow:address:next', self, function(address) {
    self.workorder.address = address;
    Mediator.publish('workorder:save', self, self.workorder);
    Mediator.subscribeOnce('workorder:saved', self, function(workorder) {
      $state.go('app.workflow.location', { workorderId: workorder.id });
    });
  });

  Mediator.subscribeOnce('workflow:google-maps:next', self, function(location) {
    self.workorder.location = location;
    Mediator.publish('workorder:save', self, self.workorder);
    Mediator.subscribeOnce('workorder:saved', self, function(workorder) {
      $state.go('app.workorder', { workorderId: workorder.id });
    });
  });
})
;

module.exports = 'app.workflow';
