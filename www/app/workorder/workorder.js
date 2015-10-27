'use strict';

angular.module('wfm-mobile.workorders', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.workorders', {
        url: '/workorders',
        templateUrl: 'app/workorder/workorder-list.tpl.html',
        controller: 'WorkordersCtrl as ctrl',
        resolve: {
          workorders: function(mediator) {
            return mediator.request('workorders:load');
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

  mediator.subscribe('done:workorder:save', function(result){
    var updatedWorkorder = $filter('filter')(self.workorders, function (d) {return d.id === result.id;})[0];
    if (result !== updatedWorkorder) {
      angular.copy(result,updatedWorkorder);
    };
  })

})

;

module.exports = 'wfm-mobile.workorders';
