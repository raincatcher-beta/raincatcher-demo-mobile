'use strict';
(function (angular) {
  angular.module('app.workorder', [
    'ui.router'
  , 'wfm.core.mediator'
  ])

  .config(function ($stateProvider) {
    $stateProvider
      .state('app.workorder', {
        url: '/workorder/:workorderId',
        template: '<workorder value="workorderController.workorder"/>',
        controller: 'WorkorderController as workorderController'
      })
      .state('app.workorder-list', {
        url: '/workorders/list',
        template: '<workorder-list list="workorderListController.workorders"/>',
        controller: 'WorkorderListController as workorderListController'
      });
  })

  .controller('WorkorderController', function ($scope, $stateParams, Mediator) {
    var self = this;
    var subscription = Mediator.subscribe('workorder:loaded', self, function(workorder) {
      self.workorder = workorder;
    });
    Mediator.publish('workorder:load', self, $stateParams.workorderId);

    $scope.$on('$destroy', function() {
      subscription.unsubscribe();
    });
  })

  .controller('WorkorderListController', function ($scope, $state, Mediator) {
    var self = this;
    var subscription1 = Mediator.subscribe('workorders:loaded', self, function(workorders) {
      self.workorders = workorders;
    });
    var subscription2 = Mediator.subscribe('workorder:selected', self, function(workorder) {
      $state.go('app.workorder', {
        workorderId: workorder.id
      });
    });

    $scope.$on('$destroy', function() {
      subscription1.unsubscribe();
      subscription2.unsubscribe();
    });

    Mediator.publish('workorders:load');
  })

  ;
})(angular);
