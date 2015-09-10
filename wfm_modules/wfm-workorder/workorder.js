'use strict';

var angular = require('angular');
var _ = require('lodash');
var config = require('./config');

var ngModule = angular.module('wfm.workorder', ['wfm.core.mediator']);

require('./lib');

var getStatusIcon = function(workorder) {
  if (! workorder) {
    return '';
  }
  var statusIcon;
  switch(workorder.status) {
    case 'In Progress':
      statusIcon = 'ion-load-d';
      break;
    case 'Complete':
      statusIcon = 'ion-ios-checkmark-outline';
      break;
    case 'Aborted':
      statusIcon = 'ion-ios-close-outline';
      break;
    case 'On Hold':
      statusIcon = 'ion-ios-minus-outline';
      break;
    case 'Unassigned':
      statusIcon = 'ion-ios-help-outline';
      break;
    case 'New':
      statusIcon = 'ion-ios-plus-outline';
      break;
    default:
      statusIcon = 'ion-ios-circle-outline';
  }
  return statusIcon;
}

ngModule.factory('workOrderManager', function($q, $http) {
  var workOrderManager = {};
  var workorders;

  var asyncValue = function(value) {
    var deferred = $q.defer();
    setTimeout(function() {
      deferred.resolve(value);
    },0);
    return deferred.promise;
  }

  var fetch = function() {
    return $http.get(config.apiHost + config.apiPath).then(function(response) {
      workorders = response.data;
      return workorders;
    });
  };

  workOrderManager.getList = function() {
    return workorders ? asyncValue(workorders) : fetch();
  };

  workOrderManager.get = function(id) {
    if (workorders) {
      var workorder = _.find(workorders, function(_workorder) {
        return _workorder.id == id;
      });
      return asyncValue(workorder);
    } else {
      return $http.get(config.apiHost + config.apiPath + '/' + id).then(function(response) {
        return response.data;
      });
    }
  };

  workOrderManager.save = function(workorder) {
    return $http.put(config.apiHost + config.apiPath + '/' + workorder.id, workorder)
    .then(function(response) {
      return $http.get(config.apiHost + config.apiPath);
    })
    .then(function(response) {
      workorders = response.data;
      return workorder;
    });
  };

  workOrderManager.create = function(workorder) {
    return $http.post(config.apiHost + config.apiPath, workorder)
    .then(function(response) {
      workorder = response.data;
      return $http.get(config.apiHost + config.apiPath);
    })
    .then(function(response) {
      workorders = response.data;
      return workorder;
    });
  };

  return workOrderManager;
})

.run(function(mediator, workOrderManager) {
  mediator.subscribe('workorder:load', function(data) {
    workOrderManager.get(data).then(function(workorder) {
      mediator.publish('workorder:loaded', workorder);
    })
  });
  mediator.subscribe('workorders:load', function() {
    workOrderManager.getList().then(function(workorders) {
      mediator.publish('workorders:loaded', workorders);
    })
  });
  mediator.subscribe('workorder:save', function(data) {
    workOrderManager.save(data).then(function(workorder) {
      mediator.publish('workorder:saved', workorder);
    })
  });
  mediator.subscribe('workorder:create', function(data) {
    workOrderManager.create(data).then(function(workorder) {
      mediator.publish('workorder:created', workorder);
    })
  });
})

.directive('workorderPortalView', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder-portal-view.tpl.html')
  , scope: {
      workorder: '=value'
    }
  };
})

.directive('workorderPorterTable', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder-portal-table.tpl.html')
  , scope: {
      list : '=list'
    }
  , controller: function() {
      var self = this;
      self.selectWorkorder = function(event, workorder) {
        mediator.publish('workorder:selected', workorder);
        event.preventDefault();
      }
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workorderList', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder-list.tpl.html')
  , scope: {
      workorders : '='
    }
  , controller: function() {
      var self = this;
      self.getStatusIcon = getStatusIcon;
      self.isWorkorderShown = function(workorder) {
        return self.shownWorkorder === workorder;
      };
      self.toggleWorkorder = function(event, workorder) {
        if (self.isWorkorderShown(workorder)) {
          self.shownWorkorder = '';
        } else {
          self.shownWorkorder = workorder;
        }
      }
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workorderListItem', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder-list-item.tpl.html')
  , scope: {
    workorder : '=workorder'
    }
  , controller: function($scope) {
      var self = this;
      self.showSelectButton = !! $scope.$parent.workorders;
      self.selectWorkorder = function(event, workorder) {
        mediator.publish('workorder:selected', workorder);
        event.preventDefault();
      }
    }
  , controllerAs: 'ctrl'
  };
})

.directive('workorderForm', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/workorder-form.tpl.html')
  , scope: {
    workorder : '=value'
    }
  , controller: function($scope) {
      var self = this;
      self.model = angular.copy($scope.workorder);
      self.done = function(isValid) {
        if (isValid) {
          self.model.finishTimestamp = new Date(self.model.finishDate); // TODO: incorporate self.model.finishTime
          mediator.publish('workorder:edited', self.model);
        }
      }
    }
  , controllerAs: 'ctrl'
  };
})


;

module.exports = 'wfm.workorder';
