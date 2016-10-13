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
      templateUrl: 'app/auth/login.tpl.html',
      controller: 'LoginCtrl as ctrl',
      resolve: {
        hasSession: function(userClient) {
          return userClient.hasSession();
        }
      }
    })
    .state('app.profile', {
      url: '/profile',
      templateUrl: 'app/auth/profile.tpl.html',
      controller: 'ProfileCtrl as ctrl'
    });
})

.controller('LoginCtrl', function(userClient, hasSession) {
  var self = this;

  self.hasSession = hasSession;

  self.loginMessages = {success: false, error: false};

  self.login = function(valid) {
    if (valid) {
      userClient.auth(self.username, self.password)
      .then(function() {
        self.loginMessages.success = true;
      }, function(err) {
        console.log(err);
        self.loginMessages.error = true;
      });
    }
  };

  self.logout = function() {
    userClient.clearSession();
  };
})

.controller('ProfileCtrl', function() {
})
;
