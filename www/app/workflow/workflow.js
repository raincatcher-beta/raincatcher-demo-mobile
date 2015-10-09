'use strict';
var angular = require('angular');
var _ = require('lodash');

angular.module('wfm-mobile.workflow', [
  'ui.router',
, 'wfm.core.mediator'
])

.run(function($state, mediator) {
  mediator.subscribe('workorder:selected', function(workorder) {
    $state.go('app.workflow-steps', {
      workorderId: workorder.id
    });
  });
})

.config(function($stateProvider) {
  $stateProvider
    .state('app.workflow-steps', {
      url: '/workflow/steps/workorder/:workorderId',
      templateUrl: 'app/workflow/workflow-steps.tpl.html',
      controller: 'WorkflowStepController as ctrl',
      resolve: {
        workflows: function(mediator) {
          mediator.publish('workflows:load');
          return mediator.promise('workflows:loaded');
        },
        workorder: function($stateParams, mediator) {
          mediator.publish('workorder:load', $stateParams.workorderId);
          return mediator.promise('workorder:loaded');
        }
      }
    })
})

.controller('WorkflowStepController', function(mediator, workflows, workorder) {
  var self = this;

  self.workorder = workorder;
  self.workflow = workflows[workorder.workflowId];
  self.steps = self.workflow.steps;
  if (!self.workorder.steps) {
    self.workorder.steps = {};
  };

  self.stepIndex = 0;
  self.stepCurrent = self.steps[0];
  if (! _.isEmpty(self.workorder.steps)) {
    for (var i=1; i < self.steps.length; i++) {
      var workorderStep = self.workorder.steps[self.steps[i].code];
      if (!workorderStep || workorderStep.status !== 'complete') {
        self.stepIndex = i;
        self.stepCurrent = self.steps[i];
        break;
      };
    };
  };

  var stepSubscription = mediator.subscribe('workflow:step:done', function(submission) {
    console.log('Done called for workflow step', self.stepCurrent.code);
    self.workorder.steps[self.stepCurrent.code] = {
      workflowStep: self.stepCurrent
    , submission: submission
    , status: 'complete'
    };
    self.next();
  });

  self.next = function() {
    if (self.stepIndex < self.steps.length -1) {
      mediator.publish('workorder:save', self.workorder);
      mediator.once('workorder:saved', function() {
        self.stepIndex++;
        self.stepCurrent = self.steps[self.stepIndex];
      });
    };
  };
})

module.exports = 'wfm-mobile.workflow';
