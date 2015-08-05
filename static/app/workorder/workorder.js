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

  .controller('WorkorderController', function ($stateParams, Mediator) {
    var self = this;

    Mediator.publish('workorder:load', self, $stateParams.workorderId);
    var subscriptionLoaded = Mediator.subscribe('workorder:loaded', self, function(workorder) {
      subscriptionLoaded.unsubscribe();
      self.workorder = workorder;
    });

    self.beginWorkflow = function(event, workorder) {
      Mediator.publish('workflow:begin', self, workorder.id);
      event.preventDefault();
    };
  })

  .controller('WorkorderListController', function ($state, Mediator) {
    var self = this;

    Mediator.publish('workorders:load');
    var subscriptionLoaded = Mediator.subscribe('workorders:loaded', self, function(workorders) {
      subscriptionLoaded.unsubscribe();
      self.workorders = workorders;
    });
  })

  ;
})(angular);
