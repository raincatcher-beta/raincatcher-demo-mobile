'use strict';
var _ = require('lodash');

angular.module('wfm-mobile.workflow', [
  'ui.router',
, 'wfm.core.mediator'
])

.run(function($state, mediator) {
  mediator.subscribe('workorder:selected', function(workorder) {
    $state.go('app.workflow.begin', {
      workorderId: workorder.id
    });
  });
})

.config(function($stateProvider) {
  $stateProvider
    .state('app.workflow', {
      abstract: true,
      url: '/workflow/workorder/:workorderId',
      views: {
        '': {
          template: '<div ui-view></div>'
        },
        'toolbar@app': {
          templateUrl: 'app/workflow/workflow-toolbar.tpl.html',
          controller: function($scope, workorder) {
            $scope.workorder = workorder;
          },
          resolve: {
            workorder: function($stateParams, mediator) {
              return mediator.request('workorder:load', $stateParams.workorderId);
            }
          }
        }
      }
    })
    .state('app.workflow.begin', {
      url: '/begin',
      templateUrl: 'app/workflow/workflow-begin.tpl.html',
      controller: 'WorkflowController as ctrl',
      resolve: {
        workflows: function(mediator) {
          mediator.publish('workflows:load');
          return mediator.promise('workflows:loaded');
        },
        workorder: function($stateParams, mediator) {
          return mediator.request('workorder:load', $stateParams.workorderId);
        }
      }
    })
    .state('app.workflow.steps', {
      url: '/steps',
      templateUrl: 'app/workflow/workflow-steps.tpl.html',
      controller: 'WorkflowStepController as ctrl',
      resolve: {
        workflows: function(mediator) {
          mediator.publish('workflows:load');
          return mediator.promise('workflows:loaded');
        },
        workorder: function($stateParams, mediator) {
          mediator.publish('workorder:load', $stateParams.workorderId);
          return mediator.promise('done:workorder:load');
        }
      }
    })
    .state('app.workflow.complete', {
      url: '/complete',
      templateUrl: 'app/workflow/workflow-complete.tpl.html',
      controller: 'WorkflowController as ctrl',
      resolve: {
        workflows: function(mediator) {
          mediator.publish('workflows:load');
          return mediator.promise('workflows:loaded');
        },
        workorder: function($stateParams, mediator) {
          mediator.publish('workorder:load', $stateParams.workorderId);
          return mediator.promise('done:workorder:load');
        }
      }
    })
})

.controller('WorkflowController', function($state, mediator, workflows, workorder) {
  var self = this;
  console.log('workorder', workorder)
  self.workorder = workorder;
  self.workflow = workflows[workorder.workflowId];
  self.steps = self.workflow.steps;

  if (!self.workorder.steps) {
    self.workorder.steps = {};
  };

  self.begin = function() {
    $state.go('app.workflow.steps', {
      workorderId: workorder.id
    });
  }
})


.controller('WorkflowStepController', function($scope, $state, mediator, workflows, workorder) {
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
    mediator.publish('workorder:save', self.workorder);
    mediator.once('done:workorder:save:' + self.workorder.id, function() {
      self.stepIndex++;
      if (self.stepIndex < Object.keys(self.workflow.steps).length) {
        self.stepCurrent = self.steps[self.stepIndex];
      } else {
        $state.go('app.workflow.complete', {
          workorderId: self.workorder.id
        });
      }
    });
  };

  $scope.$on("$destroy", function() {
    mediator.remove('workflow:step:done', stepSubscription.id);
  });
})

module.exports = 'wfm-mobile.workflow';
