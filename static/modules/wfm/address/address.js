'use strict';
(function (angular) {
  angular.module('wfm.address', ['wfm.core.mediator'])

  .directive('address', function(Mediator) {
    return {
      restrict: 'E'
    , templateUrl: 'modules/wfm/address/address-view.tpl.html'
    , scope: {
        address: '=value'
      }
    }
  })

  .directive('addressForm', function(Mediator) {
    return {
      restrict: 'E'
    , templateUrl: 'modules/wfm/address/address-form.tpl.html'
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
})(angular)
