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
          resolve: {
            initialData: function($q, mediator) {
              var deferred = $q.defer();
              mediator.publish('workflow:init');
              mediator.once('workflow:init:done', function(data) {
                deferred.resolve(data);
              });
              return deferred.promise;
            }
          }
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

.controller('WorkflowStepController', function($stateParams, $templateRequest, $scope, $compile, mediator, initialData) {
  var self = this;
  self.steps = initialData.steps;

  mediator.publish('workorder:load', $stateParams.workorderId);
  mediator.once('workorder:loaded', function(workorder) {
    self.workorder = workorder;
    if (!self.workorder.steps) {
      self.workorder.steps = {};
    }
    var stepIndex = 0;
    var stepCurrent = self.steps[0];
    for (var i=0; i < self.steps.length; i++) {
      if (self.workorder.steps && self.workorder.steps[self.steps[i].code] !== 'complete') {
        stepIndex = i;
        stepCurrent = self.steps[i];
        break;
      }
    };
    self.stepIndex = stepIndex;
    self.stepCurrent = stepCurrent;
  });

  mediator.once('wfm:risk-assessment:done', function(riskAssessment) {
    self.workorder.riskAssessment = riskAssessment;
    self.next();
  });

  mediator.once('wfm:vehicle-inspection:done', function(vehicleInspection) {
    self.workorder.vehicleInspection = vehicleInspection;
    self.next();
  });

  self.next = function() {

    self.workorder.steps[self.stepCurrent.code] = 'complete';
    if (self.stepIndex < self.steps.length -1) {
      mediator.publish('workorder:save', self.workorder);
      mediator.once('workorder:saved', function() {
        self.stepIndex++;
        self.stepCurrent = self.steps[self.stepIndex];
      })
    };
  }
})

module.exports = 'wfm-mobile.workflow';
