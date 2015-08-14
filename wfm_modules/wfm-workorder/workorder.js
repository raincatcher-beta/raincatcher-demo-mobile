'use strict';

var angular = require('angular');
var _ = require('lodash');

var ngModule = angular.module('wfm.workorder', ['wfm.core.mediator']);

require('./lib/workorder-view.tpl.html.js');
require('./lib/workorder-table.tpl.html.js');
require('./lib/workorder-list-item.tpl.html.js');

ngModule.factory('workOrderManager', function($timeout) {
  var workOrderManager = {};

  var workorders = [
    { id: 1276001, title: 'Job Order', status: 'In Progress'},
    { id: 1276231, title: 'Job Order', status: 'Complete'},
    { id: 1276712, title: 'Job Order', status: 'Aborted'},
    { id: 1262134, title: 'Job Order', status: 'On Hold'},
    { id: 12623122, title: 'Job Order', status: 'Unassigned'},
    { id: 12623122, title: 'Job Order', status: 'New'}
  ];

  workOrderManager.getList = function(cb) {
    $timeout(function() {
      cb(workorders);
    }, 0);
  };

  workOrderManager.get = function(id, cb) {
    $timeout(function() {
      var workorder = _.find(workorders, function(_workorder) {
        return _workorder.id == id;
      });
      cb(workorder);
    }, 0);
  };

  workOrderManager.save = function(workorder, cb) {
    $timeout(function() {
      var index = _.findIndex(workorders, function(_workorder) {
        return _workorder.id == workorder.id;
      });
      workorders[index] = workorder;
      cb(workorder);
    }, 0);
  }

  return workOrderManager;
})

.run(function(Mediator, workOrderManager) {
  Mediator.subscribe('workorder:load', self, function(data) {
    workOrderManager.get(data, function(workorder) {
      Mediator.publish('workorder:loaded', self, workorder);
    })
  });
  Mediator.subscribe('workorders:load', self, function() {
    workOrderManager.getList(function(workorders) {
      Mediator.publish('workorders:loaded', self, workorders);
    })
  });
  Mediator.subscribe('workorder:save', self, function(data) {
    workOrderManager.save(data, function(workorder) {
      Mediator.publish('workorder:saved', self, workorder);
    })
  });
})

.directive('workorder', function($templateCache, Mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder-view.tpl.html')
  , scope: {
      workorder: '=value'
    }
  };
})

.directive('workorderTable', function($templateCache, Mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder-table.tpl.html')
  , scope: {
      list : '=list'
    }
  , controller: function($scope) {
      var self = this;
      self.selectWorkorder = function(event, workorder) {
        Mediator.publish('workorder:selected', self, workorder);
        event.preventDefault();
      }
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workorderListItem', function($templateCache, Mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder-list-item.tpl.html')
  , scope: {
    workorder : '=workorder'
    }
  , controller: function($scope) {
      var self = this;
      self.workorder = $scope.workorder;
      switch(self.workorder.status) {
        case 'In Progress':
          self.statusIcon = 'ion-load-d';
          break;
        case 'Complete':
          self.statusIcon = 'ion-ios-checkmark-outline';
          break;
        case 'Aborted':
          self.statusIcon = 'ion-ios-close-outline';
          break;
        case 'On Hold':
          self.statusIcon = 'ion-ios-minus-outline';
          break;
        case 'Unassigned':
          self.statusIcon = 'ion-ios-help-outline';
          break;
        case 'New':
          self.statusIcon = 'ion-ios-plus-outline';
          break;
        default:
          self.statusIcon = 'ion-ios-circle-outline';
      }
      self.selectWorkorder = function(event, workorder) {
        Mediator.publish('workorder:selected', self, workorder);
        event.preventDefault();
      }
    }
  , controllerAs: 'ctrl'
  };
})

;

module.exports = 'wfm.workorder';
