/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

var angular = require('angular');
require('../lib/feedhenry');

angular.module('wfm-mobile', [
  require('angular-touch')
, require('angular-messages')
, require('angular-ui-router')
, require('angular-animate')
, require('angular-aria')
, require('angular-material')

, require('fh-wfm-mediator')
, require('fh-wfm-workorder')
, require('fh-wfm-result')
, require('fh-wfm-workflow')
, require('fh-wfm-appform')
, require('fh-wfm-risk-assessment')
, require('fh-wfm-vehicle-inspection')
, require('fh-wfm-user')
, require('fh-wfm-map')

, require('./workorder/workorder')
, require('./workflow/workflow')
, require('./message/message')
, require('./map/map')
, require('./setting/setting')
, require('./auth/auth')
])

.config(function($stateProvider, $urlRouterProvider) {
  // if none of the states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/workorders');

  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'app/main.tpl.html',
      resolve: {
        workorderManager: function(workorderSync, profileData) {
          if (profileData && profileData.id) {
            var filter = {
              key: 'assignee',
              value: profileData.id
            }
            return workorderSync.createManager({filter: filter});
          } else {
            return null;
          }
        },
        resultManager: function(resultSync) {
          return resultSync.managerPromise;
        },
        profileData: function(userClient) {
          return userClient.getProfile();
        }
      },
      controller: function($rootScope, $scope, $state, $mdSidenav, mediator, profileData, userClient, workorderSync) {
        $scope.profileData = profileData;
        mediator.subscribe('wfm:auth:profile:change', function(_profileData) {
          if (_profileData === null) { // a logout
            workorderSync.removeManager()
            .then(function() {
              $state.go('app.login', undefined, {reload: true});
            }, function(err) {
              console.err(err);
            });
          } else { // a login
            $scope.profileData = _profileData;
            return workorderSync.createManager({
              filter: {
                key: 'assignee',
                value: _profileData.id
              }
            })
            .then(function(manager) {
              return manager.forceSync().then(manager.waitForSync)
            })
            .then(function() {
              if ($rootScope.toState) {
                $state.go($rootScope.toState, $rootScope.toParams, {reload: true});
                delete $rootScope.toState;
                delete $rootScope.toParams;
              } else {
                $state.go('app.workorders', undefined, {reload: true});
              }
            }, function(err) {
              console.error(err);
            });
          };
        });
        $scope.$state = $state;
        $scope.toggleSidenav = function(event, menuId) {
          $mdSidenav(menuId).toggle();
          event.stopPropagation();
        };
        $scope.navigateTo = function(state, params) {
          if (state) {
            $state.go(state, params);
          }
        }
      }
    })
})

.run(function($rootScope, $state, $q, mediator, userClient) {
  var initPromises = [];
  var initListener = mediator.subscribe('promise:init', function(promise) {
    initPromises.push(promise);
  });
  mediator.publish('init');
  console.log(initPromises.length, 'init promises to resolve.');
  var all = (initPromises.length > 0) ? $q.all(initPromises) : $q.when(null);
  all.then(function() {
    $rootScope.ready = true;
    console.log(initPromises.length, 'init promises resolved.');
    mediator.remove('promise:init', initListener.id);
    return null;
  });

  $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
    if(toState.name !== "app.login"){
      userClient.hasSession().then(function(hasSession) {
        if(!hasSession) {
          e.preventDefault();
          $rootScope.toState = toState;
          $rootScope.toParams = toParams;
          $state.go('app.login');
        }
      });
    };
  });
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    console.error('State change error: ', error, {
      event: event,
      toState: toState,
      toParams: toParams,
      fromState: fromState,
      fromParams: fromParams,
      error: error
    });
    if (error['get stack']) {
      console.error(error['get stack']());
    }
    event.preventDefault();
  });
});
