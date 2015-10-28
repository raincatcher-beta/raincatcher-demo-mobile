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
      })
})

.controller('LoginCtrl', function() {
})
;
