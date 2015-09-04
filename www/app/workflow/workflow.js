'use strict';
var angular = require('angular');

angular.module('wfm-mobile.workflow', [
  'ui.router',
, 'wfm.core.mediator'
])

.run(function($state, mediator) {
  mediator.subscribe('workorder:selected', function(workorder) {
    $state.go('workflow.workorder', {
      workorderId: workorder.id
    });
  });
})

.constant('steps', [
    {code: 'begin-workflow', name: 'Begin Workflow', template: '<workorder-list-item workorder="workorder"></workorder-view-item>'},
    {code: 'risk-assessment', name: 'Risk Assessment', template: '<risk-assessment></risk-assessment>'},
    {code: 'vehicle-inspection', name: 'Vehicle Inspection', template: '<vehicle-inspection></vehicle-inspection>'},
    {code: 'workflow-complete', name: 'Workflow Complete', template: '<workorder-list-item workorder="workorder"></workorder-view-item>'}
  ]
)

.config(function($stateProvider) {
  $stateProvider
    .state('workflow', {
      url: '/workflow',
      abstract: true,
      templateUrl: 'app/workflow/workflow-tabs.tpl.html',
      controller: 'WorkflowTabController as tab'
    })
    .state('workflow.workorder', {
      url: '/workorder/:workorderId',
      views: {
        'tab-workorder': {
          templateUrl: 'app/workflow/workflow-steps.tpl.html',
          controller: 'WorkflowStepController as ctrl',
        }
      }
    })
})

.controller('WorkflowTabController', function($stateParams) {
  var self = this;

  self.tabGroup = 0;

  self.toggleMore = function() {
    self.tabGroup = self.tabGroup === 0 ? 1 : 0;
  }
})

.controller('WorkflowStepController', function($stateParams, $templateRequest, $scope, $compile, mediator, steps) {
  var self = this;

  mediator.publish('workorder:load', $stateParams.workorderId);
  mediator.once('workorder:loaded', function(workorder) {
    self.workorder = workorder;
  });

  mediator.once('wfm:risk-assessment:done', function(riskAssessment) {
    self.workorder.riskAssessment = riskAssessment;
    self.next();
  });

  mediator.once('wfm:vehicle-inspection:done', function(vehicleInspection) {
    self.workorder.vehicleInspection = vehicleInspection;
    self.next();
  });

  self.steps = steps;

  self.stepIndex = 0;
  self.stepCurrent = steps[0];


  self.next = function() {
    if (self.stepIndex < self.steps.length -1) {
      self.stepIndex++;
    };
    self.stepCurrent = self.steps[self.stepIndex];
  }
})

module.exports = 'wfm-mobile.workflow';
