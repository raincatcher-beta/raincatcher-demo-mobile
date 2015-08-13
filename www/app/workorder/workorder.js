'use strict';
var angular = require('angular');

angular.module('wfm-mobile.workorders', ['ui.router'])

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
    .state('tab.chat-detail', {
      url: '/workorder/:workorderId',
      views: {
        'tab-workorders': {
          templateUrl: 'app/workorder/workorder-detail.tpl.html',
          controller: 'WorkorderDetailCtrl'
        }
      }
    })
})

.controller('WorkordersCtrl', function() {
})

.controller('WorkorderDetailCtrl', function() {

})
;

module.exports = 'wfm-mobile.workorders';
