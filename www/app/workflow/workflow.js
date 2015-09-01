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
    {code: 'risk-assessment', name: 'Risk Assessment', templatePath: 'app/workflow/risk-assessment.tpl.html'},
    {code: 'vehicle-inspection', name: 'Vehicle Inspection', templatePath: 'app/workflow/vehicle-inspection.tpl.html'},
    {code: 'workflow-complete', name: 'Workflow Complete', templatePath: 'wfm-template/workorder-list-item.tpl.html'}
  ]
)

.config(function($stateProvider) {
  $stateProvider
    .state('workflow', {
      url: '/workflow',
      abstract: true,
      templateUrl: 'app/workflow/workflow.tpl.html',
      controller: 'WorkflowController as workflow'
    })
    .state('workflow.workorder', {
      url: '/workorder/:workorderId',
      views: {
        'tab-workorder': {
          templateUrl: 'app/workflow/workorder.tpl.html',
          controller: 'WorkflowStepController as ctrl',
        }
      }
    })
})

.controller('WorkflowController', function($stateParams) {
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

  self.mediator = mediator;

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

.directive('workflowProgress', function($timeout) {
  var draw = function(scope, element, attrs) {
    window.requestAnimationFrame(function() {
      var div = element[0].querySelector('.progtrckr');
      if (div) {
        while (div.firstChild) {
          angular.element(div.firstChild).remove();
        }
        div = angular.element(div);
      } else {
        div = angular.element('<ol class="progtrckr" />');
        element.append(div);
      }
      var completed = false;
      scope.steps.forEach(function(_step) {
        var cssClass;
        if (_step.code === scope.step.code) {
          cssClass = 'progtrckr-current';
          completed = true;
        } else {
          cssClass = completed ? 'progtrckr-todo' : 'progtrckr-done'
        }
        div.append('<li class="step '+cssClass+'">' + _step.name + '</li>')
      })
    });
  };

  return {
    restrict: 'E'
  , scope: {
      step: '=',
      steps: '='
    }
  , link: function (scope, element, attrs) {
      scope.$watch('step', function(step) {
        draw(scope, element, attrs);
      });
    }
  , controller: function() {
      var self = this;
      self.selectWorkorder = function(event, workorder) {
        mediator.publish('workorder:selected', workorder);
        event.preventDefault();
      }
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workflowStep', function($templateRequest, $compile, mediator) {
  return {
    restrict: 'E'
  , scope: {
      step: '=' // { ..., template: "an html template to use", templatePath: "a template path to load"}
    , workorder: '='
    }
  , link: function (scope, element, attrs) {
      scope.$watch('step', function(step) {
        if (scope.step) {
          if (scope.step.templatePath) {
            $templateRequest(scope.step.templatePath).then(function(template) {
              window.requestAnimationFrame(function() {
                element.html(template);
                $compile(element.contents())(scope);
              });
            });
          } else {
            window.requestAnimationFrame(function() {
              element.html(scope.step.template);
              $compile(element.contents())(scope);
            });
          };
        };
      });
    }
  , controller: function() {
      var self = this;
      self.mediator = mediator;
    }
  , controllerAs: 'ctrl'
  };
})
;

module.exports = 'wfm-mobile.workflow';
