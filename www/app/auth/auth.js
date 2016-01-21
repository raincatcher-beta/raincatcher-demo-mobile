'use strict';

module.exports = 'wfm-mobile.auth';

angular.module('wfm-mobile.auth', [
  'ui.router',
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
        controller: 'ProfileCtrl as ctrl',
      })
})

.controller('LoginCtrl', function(userClient, hasSession) {
  var self = this;

  self.hasSession = hasSession;

  self.login = function() {
    userClient.auth('test', 'pass')
    .then(userClient.hasSession)
    .then(function(hasSession) {
      self.hasSession = hasSession;
    }, function(err) {
      console.err(err);
    });
  }

  self.logout = function() {
    userClient.clearSession()
    .then(userClient.hasSession)
    .then(function(hasSession) {
      self.hasSession = hasSession;
    }, function(err) {
      console.err(err);
    });
  }
})

.controller('ProfileCtrl', function() {
})
;
