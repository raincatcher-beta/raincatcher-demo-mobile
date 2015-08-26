'use strict';

var angular = require('angular');

var ngModule = angular.module('wfm.person', ['wfm.core.mediator']);

require('./lib');

ngModule.directive('person', function($templateCache, Mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/person-view.tpl.html')
  , scope: {
      person: '=value'
    }
  }
})

.directive('personForm', function($templateCache, Mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/person-form.tpl.html')
  , scope: {
      person: '=value'
  }
  , controller: function($scope) {
      var self = this;
      self.person = angular.copy($scope.person);
      self.next = function(isValid) {
        if (isValid) {
          Mediator.publish('workflow:person:next', self, self.person);
        };
      }
    }
  , controllerAs: 'ctrl'
  }
})
;

module.exports = 'wfm.person';
