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
            workorder: function($stateParams, mediator, workorderModuleInit) {
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
          return mediator.request('workflows:load');
        },
        workorder: function($stateParams, mediator, workorderModuleInit) {
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
          return mediator.request('workflows:load');
        },
        workorder: function($stateParams, mediator, workorderModuleInit) {
          return mediator.request('workorder:load', $stateParams.workorderId);
        }
      }
    })
    .state('app.workflow.complete', {
      url: '/complete',
      templateUrl: 'app/workflow/workflow-complete.tpl.html',
      controller: 'WorkflowController as ctrl',
      resolve: {
        workflows: function(mediator) {
          return mediator.request('workflows:load');
        },
        workorder: function($stateParams, mediator, workorderModuleInit) {
          return mediator.request('workorder:load', $stateParams.workorderId);
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

  if (!self.workorder.results) {
    self.workorder.results = {};
  };

  self.begin = function() {
    $state.go('app.workflow.steps', {
      workorderId: workorder.id
    });
  }
})


.controller('WorkflowStepController', function($scope, $state, mediator, appformClient, workflows, workorder) {
  var self = this;

  self.workorder = workorder;
  self.workflow = workflows[workorder.workflowId];
  self.steps = self.workflow.steps;
  if (!self.workorder.results) {
    self.workorder.results = {};
  };

  self.stepIndex = 0;
  self.stepCurrent = self.steps[0];
  if (! _.isEmpty(self.workorder.results)) {
    for (var i=1; i < self.steps.length; i++) {
      var result = self.workorder.results[self.steps[i].code];
      if (!result || result.status !== 'complete') {
        self.stepIndex = i;
        self.stepCurrent = self.steps[i];
        break;
      };
    };
  };

  var stepSubscription = mediator.subscribe('workflow:step:done', function(submission) {
    console.log('Done called for workflow step', self.stepCurrent.code);
    if (self.stepCurrent.formId) {
      appformClient.synchSubmissionResult(self.workorder, self.stepCurrent, submission)
      .then(function(remoteSubmission) {
        var metaData = remoteSubmission.get('metaData').wfm;
        console.log('metaData', metaData);
        if (self.workorder.id == metaData.workorderId) {
          self.workorder.results[metaData.stepCode].submission.submissionId = remoteSubmission.props.submissionId;
          mediator.request('workorder:save', self.workorder, {uid: workorder.id}).then(function() {
            console.log('************* workorder updated with appform remote id');
            console.log(self.workorder.results[metaData.stepCode]);
          });
        }
      });
    }
    self.workorder.results[self.stepCurrent.code] = {
      workflowStep: self.stepCurrent
    , submission: submission
    , status: 'complete'
    };
    mediator.request('workorder:save', self.workorder, {uid: self.workorder.id}).then(function() {
      console.log('workorder save successful');
      self.next();
    });
  });

  self.next = function() {
    self.stepIndex++;
    if (self.stepIndex < Object.keys(self.workflow.steps).length) {
      self.stepCurrent = self.steps[self.stepIndex];
    } else {
      $state.go('app.workflow.complete', {
        workorderId: self.workorder.id
      });
    }
  };

  $scope.$on("$destroy", function() {
    mediator.remove('workflow:step:done', stepSubscription.id);
  });
})

module.exports = 'wfm-mobile.workflow';
