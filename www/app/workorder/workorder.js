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
            controller: 'WorkordersCtrl as ctrl'
          }
        }
      })
})

.controller('WorkordersCtrl', function(mediator) {
  var self = this;

  mediator.publish('workorders:load');
  mediator.once('workorders:loaded', function(workorders) {
    self.workorders = workorders;
  });
})

;

module.exports = 'wfm-mobile.workorders';
