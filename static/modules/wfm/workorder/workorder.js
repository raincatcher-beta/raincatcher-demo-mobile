'use strict';
(function (angular, _) {
  angular.module('wfm.workorder', ['wfm.core.mediator'])

  .factory('workOrderManager', function() {
    var workOrderManager = {};

    var workorders = [
      { id: 0, title: 'Workorder 1'}
      , { id: 1, title: 'Workorder 2'}
    ];

    workOrderManager.getList = function(cb) {
      setTimeout(function() {
        cb(workorders);
      }, 0);
    };

    workOrderManager.get = function(id, cb) {
      setTimeout(function() {
        var workorder = _.find(workorders, function(_workorder) {
          return _workorder.id == id;
        });
        cb(workorder);
      }, 0);
    };

    workOrderManager.save = function(workorder, cb) {
      setTimeout(function() {
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

  .directive('workorder', function(Mediator) {
    return {
      restrict: 'E'
    , templateUrl: 'modules/wfm/workorder/workorder-view.tpl.html'
    , scope: {
        workorder: '=value'
      }
    };
  })

  .directive('workorderList', function(Mediator) {
    return {
      restrict: 'E'
    , templateUrl: 'modules/wfm/workorder/workorder-list.tpl.html'
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
})(angular, _)
