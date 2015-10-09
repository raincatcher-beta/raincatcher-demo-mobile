'use strict';
var angular = require('angular');

angular.module('wfm-mobile.workorders', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('tab.workorders', {
        url: '/workorders',
        views: {
          'tab-workorders': {
            templateUrl: 'app/workorder/tab-workorders.tpl.html',
            controller: 'WorkordersCtrl as ctrl',
            resolve: {
              workorders: function(mediator) {
                mediator.publish('workorders:load');
                return mediator.promise('workorders:loaded');
              }
            }
          }
        }
      })
})

.controller('WorkordersCtrl', function($scope, $filter, mediator, workorders) {
  var self = this;
  self.workorders = workorders;

  mediator.subscribe('workorder:created', function(result){
    self.workorders.push(result);
  })

  mediator.subscribe('workorder:saved', function(result){
    var updatedWorkorder = $filter('filter')(self.workorders, function (d) {return d.id === result.id;})[0];
    angular.copy(result,updatedWorkorder);
  })

})

;

module.exports = 'wfm-mobile.workorders';
