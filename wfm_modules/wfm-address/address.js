'use strict';

var angular = require('angular');

var ngModule = angular.module('wfm.address', ['wfm.core.mediator'])

require('./lib');

ngModule.directive('address', function($templateCache, Mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/address-view.tpl.html')
  , scope: {
      address: '=value'
    }
  }
})

.directive('addressForm', function($templateCache, Mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/address-form.tpl.html')
  , scope: {
      address: '=value'
  }
  , controller: function($scope) {
      var self = this;
      self.address = angular.copy($scope.address);
      self.next = function(isValid) {
        if (isValid) {
          Mediator.publish('workflow:address:next', self, self.address);
        };
      }
    }
  , controllerAs: 'ctrl'
  }
})
;

module.exports = 'wfm.address';
