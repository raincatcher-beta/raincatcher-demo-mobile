'use strict';
(function (angular) {
  angular.module('app.workorder', [
    'ui.router'
  , 'wfm.core.mediator'
  ])

  .config(function($stateProvider) {
    $stateProvider
      .state('app.workorder', {
        url: '/workorder/:workorderId',
        templateUrl: '/app/workorder/workorder.tpl.html',
        controller: 'WorkorderController as ctrl'
      })
      .state('app.workorder-list', {
        url: '/workorders/list',
        template: '<workorder-list list="workorderListController.workorders"/>',
        controller: 'WorkorderListController as workorderListController'
      });
  })

  .run(function($state, Mediator) {
    Mediator.subscribe('workorder:selected', self, function(workorder) {
      $state.go('app.workorder', {
        workorderId: workorder.id
      });
    });
  })

  .controller('WorkorderController', function ($scope, $stateParams, Mediator) {
    var self = this;
    var subscription = Mediator.subscribe('workorder:loaded', self, function(workorder) {
      self.workorder = workorder;
    });
    Mediator.publish('workorder:load', self, $stateParams.workorderId);

    self.beginWorkflow = function(event, workorder) {
      Mediator.publish('workflow:begin', self, workorder.id);
      event.preventDefault();
    };

    $scope.$on('$destroy', function() {
      subscription.unsubscribe();
    });
  })

  .controller('WorkorderListController', function ($scope, $state, Mediator) {
    var self = this;
    var subscription = Mediator.subscribe('workorders:loaded', self, function(workorders) {
      self.workorders = workorders;
    });

    $scope.$on('$destroy', function() {
      subscription.unsubscribe();
    });

    Mediator.publish('workorders:load');
  })

  ;
})(angular);
