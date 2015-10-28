'use strict';

module.exports = 'wfm-mobile.setting';

angular.module('wfm-mobile.setting', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.setting', {
        url: '/settings',
        templateUrl: 'app/setting/setting-list.tpl.html',
        controller: 'SettingsCtrl as ctrl',
      })
})

.controller('SettingsCtrl', function() {
})
;
