'use strict';

var angular = require('angular');
var config = require('./config');
var ngModule = angular.module('wfm.workflow', ['wfm.core.mediator'])

ngModule.factory('workflowSteps', function() {
  var steps = [];

  return steps;
})

ngModule.run(function($http, $q, $timeout, mediator, workflowSteps) {
  var lazyLoadSteps = function() {
    var promise;
    if (!workflowSteps.length) {
      promise = $http.get(config.apiHost + config.apiPath + '/steps').then(function(response) {
        Array.prototype.push.apply(workflowSteps, response.data);
        return response.data;
      });
    } else {
      var deferred = $q.defer();
      $timeout(function() { // keep the API async
        deferred.resolve(workflowSteps);
      });
      return deferred.promise;
    };
    return promise;
  }

  mediator.subscribe('workflow:init', function() {
    lazyLoadSteps().then(function() {
      mediator.publish('workflow:init:done', {
        steps: workflowSteps
      });
    }); // TODO: introduce retry/error-handling logic
  });

  mediator.subscribe('workflow:steps:load', function() {
    lazyLoadSteps().then(function() {
      mediator.publish('workflow:steps:loaded', workflowSteps);
    });
  });
})

ngModule.directive('workflowProgress', function($timeout) {
  var draw = function(scope, element, attrs) {
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
    if (scope.step) {
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
      });
    }
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
    , steps: '='
    , workorder: '='
    }
  , link: function (scope, element, attrs) {
      scope.$watch('step', function(step) {
        if (scope.step) {
          if (scope.step.templatePath) {
            $templateRequest(scope.step.templatePath).then(function(template) {
              element.html(template);
              $compile(element.contents())(scope);
            });
          } else {
            element.html(scope.step.templates.form);
            $compile(element.contents())(scope);
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

.directive('workflowStepSummary', function($compile) {
  var render = function(scope, element, attrs) {
    if (scope.steps) {
      element.children().remove();
      scope.steps.forEach(function(step) {
        element.append(step.templates.view);
      });
      $compile(element.contents())(scope);
    };
  }
  return {
    restrict: 'E'
  , scope: {
      steps: '='
    , workorder: '='
    }
  , link: function (scope, element, attrs) {
      render(scope, element, attrs);
    }
  };
})
;

module.exports = 'wfm.workflow';
