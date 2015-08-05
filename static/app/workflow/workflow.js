'use strict';
(function (angular) {
  angular.module('app.workflow', [
    'ui.router'
  , 'wfm.core.mediator'
  ])

  .config(function ($stateProvider) {
    $stateProvider
      .state('app.workflow', {
        abstract: true,
        url: '/workorder/:workorderId/workflow',
        templateUrl: '/app/workflow/workflow.tpl.html',
        controller: 'WorkflowController as workflowController'
      })
      .state('app.workflow.person', {
        url: '/workorder/:workorderId/workflow/person',
        template: '<person-form />'
      })
      .state('app.workflow.address', {
        url: '/workorder/:workorderId/workflow/address',
        template: '<address-form />'
      });
  })

  .run(function($state, Mediator) {
    Mediator.subscribe('workflow:begin', self, function(data) {
      $state.go('app.workflow.person', {
        workorderId: data
      });
    });
  })

  .controller('WorkflowController', function ($state, $stateParams, Mediator) {
    var self = this;

    Mediator.publish('workorder:load', self, $stateParams.workorderId);
    var subscriptionLoaded = Mediator.subscribe('workorder:loaded', self, function(workorder) {
      subscriptionLoaded.unsubscribe();
      self.workorder = workorder;
    });

    var subscriptionPersonNext = Mediator.subscribe('workflow:person:next', self, function(person) {
      subscriptionPersonNext.unsubscribe();
      self.workorder.person = person;
      Mediator.publish('workorder:save', self, self.workorder);
      var subscriptionSaved = Mediator.subscribe('workorder:saved', self, function(workorder) {
        subscriptionSaved.unsubscribe();
        $state.go('app.workflow.address', {
          workorderId: workorder.id
        });
      });
    });

    var subscriptionAddressNext = Mediator.subscribe('workflow:address:next', self, function(address) {
      subscriptionAddressNext.unsubscribe();
      self.workorder.address = address;
      Mediator.publish('workorder:save', self, self.workorder);
      var subscriptionSaved = Mediator.subscribe('workorder:saved', self, function(workorder) {
        subscriptionSaved.unsubscribe();
        $state.go('app.workorder', {
          workorderId: workorder.id
        });
      });
    });
  })
  ;
})(angular);
