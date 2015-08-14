'use strict';

var angular = require('angular');
var _ = require('lodash');

var ngModule = angular.module('wfm.workorder', ['wfm.core.mediator']);

require('./lib/workorder-view.tpl.html.js');
require('./lib/workorder-list.tpl.html.js');

ngModule.factory('workOrderManager', function($timeout) {
  var workOrderManager = {};

  var workorders = [
    { id: 0, title: 'Workorder 1'}
    , { id: 1, title: 'Workorder 2'}
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

.directive('workorderList', function($templateCache, Mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder-list.tpl.html')
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
;

module.exports = 'wfm.workorder';
