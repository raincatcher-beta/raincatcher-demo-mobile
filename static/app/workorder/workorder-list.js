'use strict';

var angular = require('angular');

angular.module('app.workorder-list', [
  'ui.router'
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.workorder-list', {
      url: '/workorders/list',
      template: '<workorder-list list="workorderListController.workorders"></workorder-list list="workorderListController.workorders">',
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

.controller('WorkorderListController', function ($state, Mediator) {
  var self = this;

  Mediator.publish('workorders:load');
  var subscriptionLoaded = Mediator.subscribe('workorders:loaded', self, function(workorders) {
    subscriptionLoaded.unsubscribe();
    self.workorders = workorders;
  });
})
;

module.exports = 'app.workorder-list';
