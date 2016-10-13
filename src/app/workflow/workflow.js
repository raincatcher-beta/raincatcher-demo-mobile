'use strict';

angular.module('wfm-mobile.workflow', [
  'ui.router'
, 'wfm.core.mediator'
])

.run(function($state, mediator) {
  mediator.subscribe('wfm:workorder:selected', function(workorder) {
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
      resolve: {
        workflows: function(workflowManager) {
          return workflowManager.list();
        },
        workorder: function($stateParams, workorderManager) {
          return workorderManager.read($stateParams.workorderId);
        },
        result: function($stateParams, resultManager, workflowManager, workorder, workflows) {
          var workflow = workflows.filter(function(workflow) {
            return String(workflow.id) === String(workorder.workflowId);
          });
          if (workflow.length) {
            workflow = workflow[0];
          }
          return resultManager.getByWorkorderId($stateParams.workorderId)
            .then(function(result) {
              var oldStatus = result.status;
              result.status = workflowManager.checkStatus(workorder, workflow, result);
              if (oldStatus !== result.status) {
                var create = ! (result.id || result._localuid || result.id === 0);
                if (create) {
                  return resultManager.create(result);
                } else {
                  return resultManager.update(result);
                }
              } else {
                return result;
              }
            });
        }
      },
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
            workorder: function($stateParams, workorderManager) {
              return workorderManager.read($stateParams.workorderId);
            }
          }
        }
      }
    })
    .state('app.workflow.begin', {
      url: '/begin',
      templateUrl: 'app/workflow/workflow-begin.tpl.html',
      controller: 'WorkflowController as ctrl'
    })
    .state('app.workflow.steps', {
      url: '/steps',
      templateUrl: 'app/workflow/workflow-steps.tpl.html',
      controller: 'WorkflowStepController as ctrl'
    })
    .state('app.workflow.complete', {
      url: '/complete',
      templateUrl: 'app/workflow/workflow-complete.tpl.html',
      controller: 'WorkflowController as ctrl'
    });
})

.controller('WorkflowController', function($state, workflowManager, resultManager, workflows, workorder, result) {
  var self = this;
  console.log('workorder', workorder);
  self.workorder = workorder;
  var workflow = workflows.filter(function(workflow) {
    return String(workflow.id) === String(workorder.workflowId);
  });
  if (workflow.length) {
    self.workflow = workflow[0];
  }

  self.result = result;

  self.stepIndex = workflowManager.nextStepIndex(self.workflow.steps, self.result);

  self.begin = function() {
    $state.go('app.workflow.steps', {
      workorderId: workorder.id
    });
  };
})


.controller('WorkflowStepController', function($scope, $state, mediator, workflowManager, resultManager, appformClient, workflows, workorder, result, profileData) {
  console.log('manager', resultManager);
  var self = this;

  self.workorder = workorder;
  var workflow = workflows.filter(function(workflow) {
    return String(workflow.id) === String(workorder.workflowId);
  });
  if (workflow.length) {
    self.workflow = workflow[0];
  }
  self.result = result;
  self.result.stepResults = self.result.stepResults || {};
  self.result.workorderId = self.result.workorderId || workorder.id;

  self.result.status = workflowManager.checkStatus(self.workorder, self.workflow, self.result);

  self.stepIndex = workflowManager.nextStepIndex(self.workflow.steps, self.result);

  self.next = function() {
    self.stepIndex++;
    if (self.stepIndex < self.workflow.steps.length) {
      self.stepCurrent = self.workflow.steps[self.stepIndex];
    } else {
      $state.go('app.workflow.complete', {
        workorderId: self.workorder.id
      });
    }
  };

  self.next();

  var backSubscription = mediator.subscribe('wfm:workflow:step:back', function() {
    self.stepIndex--;
    if (self.stepIndex >= 0) {
      self.stepCurrent = self.workflow.steps[self.stepIndex];
    } else {
      $state.go('app.workflow.begin', {
        workorderId: self.workorder.id
      });
    }
  });

  var stepSubscription = mediator.subscribe('wfm:workflow:step:done', function(submission) {
    console.log('Done called for workflow step', self.stepCurrent.code);
    var step = angular.copy(self.stepCurrent);
    delete step['$$hashKey']; // this property breaks appform submissions;
    var create = ! (self.result.id || self.result._localuid || self.result.id === 0);
    var stepResult = {
      step: step,
      submission: submission,
      type: step.formId ? 'appform' : 'static',
      status: step.formId ? 'pending' : 'complete',
      timestamp: new Date().getTime(),
      submitter: profileData.id
    };
    resultManager.getByWorkorderId(self.workorder.id)
    .then(function(freshResult) {
      self.result.stepResults = freshResult.stepResults || self.result.stepResults; // refresh the stepResults
      self.result.stepResults[step.code] = stepResult;
      self.result.status = workflowManager.checkStatus(self.workorder, self.workflow, self.result);
      return !create ? resultManager.update(self.result) : resultManager.create(self.result);
    })
    .then(function() {
      if (create) {
        resultManager.stream.filter(function(notification) {
          return notification.code === 'remote_update_applied'
            && notification.message.hash === self.result._localuid;
        }).take(1).subscribe(function(notification) {
          self.result.id = notification.uid;
        });
      }
      console.log('result save successful');
      if (step.formId) {
        appformClient.syncStepResult(workorder, stepResult)
        .then(function() {
          self.next();
        }, function(error) {
          console.error(error);
          throw error;
        });
      } else {
        self.next();
      }
    }, function(error) {
      console.error(error);
      throw error;
    });
  });

  $scope.$on("$destroy", function() {
    mediator.remove('wfm:workflow:step:done', stepSubscription.id);
    mediator.remove('wfm:workflow:step:back', backSubscription.id);
  });
});

module.exports = 'wfm-mobile.workflow';
