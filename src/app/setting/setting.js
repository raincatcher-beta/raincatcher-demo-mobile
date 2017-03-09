'use strict';

module.exports = 'wfm-mobile.setting';

angular.module('wfm-mobile.setting', [
  'ui.router'
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.setting', {
      url: '/settings',
      views: {
        content: {
          templateUrl: 'app/setting/setting-list.tpl.html',
          controller: 'SettingCtrl as ctrl'
        }
      }
    });
})

.controller('SettingCtrl', function($document) {
  var self = this;
  self.enabled = $document[0].body.classList.contains('wfm-night');

  self.setNightTimeMode = function() {
    console.log(self.enabled);
    if (self.enabled) {
      $document[0].body.classList.add('wfm-night');
    } else {
      $document[0].body.classList.remove('wfm-night');
    }
  };
})
;
