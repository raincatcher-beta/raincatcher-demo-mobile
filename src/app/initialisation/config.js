function createMainAppRoute($stateProvider, $urlRouterProvider) {
  // if none of the states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/workorders/list');

  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'app/main.tpl.html',
      resolve: {
        profileData: function(userClient) {
          return userClient.getProfile();
        },
        syncManagers: function(syncPool, profileData) {
          return syncPool.syncManagerMap(profileData);
        },
        workorderManager: function(syncManagers) {
          return syncManagers.workorders;
        },
        workflowManager: function(syncManagers) {
          return syncManagers.workflows;
        },
        messageManager: function(syncManagers) {
          return syncManagers.messages;
        }
      },
      controller: function($rootScope, $scope, $state, $mdSidenav, mediator, profileData) {
        $scope.profileData = profileData;
        $scope.toggleSidenav = function(event, menuId) {
          $mdSidenav(menuId).toggle();
          event.stopPropagation();
        };
        $scope.navigateTo = function(state, params) {
          if (state) {
            $state.go(state, params);
          }
        };
      }
    });
}


angular.module('wfm-mobile').config(['$stateProvider', '$urlRouterProvider', createMainAppRoute]);