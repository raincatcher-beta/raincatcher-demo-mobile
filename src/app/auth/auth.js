'use strict';

module.exports = 'wfm-mobile.auth';

angular.module('wfm-mobile.auth', [
  'ui.router'
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.login', {
      url: '/login',
      views: {
        content: {
          templateUrl: 'app/auth/login.tpl.html',
          controller: 'LoginCtrl as ctrl',
          resolve: {
            hasSession: function(userClient) {
              return userClient.hasSession();
            }
          }
        }
      }
    })
    .state('app.profile', {
      url: '/profile',
      views: {
        content: {
          templateUrl: 'app/auth/profile.tpl.html',
          controller: 'ProfileCtrl as ctrl'
        }
      }
    });
})

.controller('LoginCtrl', function($state, $rootScope, userClient, hasSession) {
  var self = this;

  self.hasSession = hasSession;

  self.loginMessages = {success: false, error: false};

  self.login = function(valid) {
    if (!valid) {
      return;
    }
    userClient.auth(self.username, self.password)
    .then(function() {
      self.loginMessages.success = true;
      return userClient.hasSession();
    })
    .then(function(hasSession) {
      self.hasSession = hasSession;
      if ($rootScope.toState) {
        $state.go($rootScope.toState, $rootScope.toParams);
        delete $rootScope.toState;
        delete $rootScope.toParams;
      }
    }, function(err) {
      console.log(err);
      self.loginMessages.error = true;
    });
  };

  self.logout = function() {
    userClient.clearSession()
    .then(userClient.hasSession)
    .then(function(hasSession) {
      self.hasSession = hasSession;
    }, function(err) {
      console.err(err);
    });
  };
})

.controller('ProfileCtrl', function() {
})
;
