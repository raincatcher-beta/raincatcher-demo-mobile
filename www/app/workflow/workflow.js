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
      resolve: {
        workflows: function(workflowManager) {
          return workflowManager.list();
        },
        workorder: function($stateParams, workorderManager) {
          return workorderManager.read($stateParams.workorderId);
        },
        results: function($stateParams, resultManager) {
          return resultManager.list().then(function(resultsArray) {
            var results = {};
            resultsArray.filter(function(result) {
              return result.workorderId === parseInt($stateParams.workorderId);
            }).forEach(function(result) {
              if (!results[result.stepCode] || (results[result.stepCode] && results[result.stepCode].timestamp < result.timestamp)) {
                results[result.stepCode] = result;
              }
            });
            console.log('workorderId', $stateParams.workorderId, 'results', results);
            return results;
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
      controller: 'WorkflowController as ctrl',
    })
    .state('app.workflow.steps', {
      url: '/steps',
      templateUrl: 'app/workflow/workflow-steps.tpl.html',
      controller: 'WorkflowStepController as ctrl',
    })
    .state('app.workflow.complete', {
      url: '/complete',
      templateUrl: 'app/workflow/workflow-complete.tpl.html',
      controller: 'WorkflowController as ctrl',
    })
})

.controller('WorkflowController', function($state, workflows, workorder, results) {
  var self = this;
  console.log('workorder', workorder)
  self.workorder = workorder;
  self.workflow = workflows[workorder.workflowId];
  self.steps = self.workflow.steps;

  self.results = results;

  self.begin = function() {
    $state.go('app.workflow.steps', {
      workorderId: workorder.id
    });
  }
})


.controller('WorkflowStepController', function($scope, $state, mediator, resultManager, appformClient, workflows, workorder, results) {
  console.log('manager', resultManager);
  var self = this;

  self.workorder = workorder;
  self.workflow = workflows[workorder.workflowId];
  self.steps = self.workflow.steps;
  self.results = results;

  self.stepIndex = 0;
  self.stepCurrent = self.steps[0];
  if (! _.isEmpty(self.results)) {
    for (var i=1; i < self.steps.length; i++) {
      var result = self.results[self.steps[i].code];
      if (!result || result.status !== 'complete') {
        self.stepIndex = i;
        self.stepCurrent = self.steps[i];
        break;
      };
    };
  };

  var stepSubscription = mediator.subscribe('workflow:step:done', function(submission) {
    console.log('Done called for workflow step', self.stepCurrent.code);
    var result = {
      workorderId: self.workorder.id,
      stepCode: self.stepCurrent.code
    , submission: submission
    , type: self.stepCurrent.formId ? 'appform' : 'static'
    , status: self.stepCurrent.formId ? 'pending' : 'complete'
    , timestamp: new Date().getTime()
    }
    self.results[self.stepCurrent.code] = result;
    resultManager.create(result).then(function() {
      console.log('result save successful');
      if (self.stepCurrent.formId) {
        appformClient.synchSubmissionResult(result)
        .then(function(remoteSubmission) {
          var metaData = remoteSubmission._submission.get('metaData').wfm;
          console.log('metaData', metaData);
          if (self.workorder.id == metaData.workorderId) {
            var newResult = {
              workorderId: metaData.workorderId,
              stepCode: metaData.stepCode
            , submission: remoteSubmission
            , status: 'complete'
            , timestamp: new Date().getTime()
            }
            resultManager.create(newResult).then(function() {
              console.log('************* result created with appform remote id');
              console.log(newResult);
            });
          }
        });
      }
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
