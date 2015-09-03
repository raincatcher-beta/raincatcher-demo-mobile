'use strict';

var angular = require('angular');
var ngModule = angular.module('wfm.workflow', ['wfm.core.mediator'])

ngModule.directive('workflowProgress', function($timeout) {
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

module.exports = 'wfm.workflow';
