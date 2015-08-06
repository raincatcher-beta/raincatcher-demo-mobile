'use strict';
(function (angular) {
  angular.module('wfm.person', ['wfm.core.mediator'])

  .directive('person', function(Mediator) {
    return {
      restrict: 'E'
    , templateUrl: 'modules/wfm/person/person-view.tpl.html'
    , scope: {
        person: '=value'
      }
    }
  })

  .directive('personForm', function(Mediator) {
    return {
      restrict: 'E'
    , templateUrl: 'modules/wfm/person/person-form.tpl.html'
    , scope: {
      person: '=value'
    }
    , controller: function($scope) {
        var self = this;
        self.next = function(isValid) {
          if (isValid) {
            Mediator.publish('workflow:person:next', self, $scope.person);
          };
        }
      }
    , controllerAs: 'ctrl'
    }
  })

  ;
})(angular)
