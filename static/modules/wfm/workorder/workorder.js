'use strict';
(function (angular) {
  angular.module('wfm.workorder', ['wfm.core.mediator'])

  .factory('workOrderManager', function() {
    var workOrderManager = {};

    var workorders = [
      { id: 0, title: 'Workorder 1'}
      , { id: 1, title: 'Workorder 2'}
    ];

    workOrderManager.getList = function() {
      return workorders;
    };

    workOrderManager.get = function(id) {
      console.log('Getting workorder id:', id);
      var filtered = workorders.filter(function(workorder) {
        return workorder.id == id;
      });
      return filtered.length ? filtered[0] : undefined;
    };

    return workOrderManager;
  })

  .run(function(Mediator, workOrderManager) {
    Mediator.subscribe('workorder:load', self, function(data) {
      Mediator.publish('workorder:loaded', self, workOrderManager.get(data));
    });
    Mediator.subscribe('workorders:load', self, function() {
      Mediator.publish('workorders:loaded', self, workOrderManager.getList());
    });
  })

  .directive('workorder', function() {
    return {
      restrict: 'E'
    , templateUrl: 'modules/wfm/workorder/workorder-view.tpl.html'
    , scope: {
        workorder : '=value'
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
      $scope.click = function(event, workorder) {
        Mediator.publish('workorder:selected', self, workorder);
        event.preventDefault();
      }
    }
    };
  })
  ;
})(angular)
