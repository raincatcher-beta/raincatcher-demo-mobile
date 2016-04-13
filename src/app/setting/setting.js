/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
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
        controller: 'SettingCtrl as ctrl',
      })
})

.controller('SettingCtrl', function($document) {
  var self = this;
  self.enabled = false;

  self.setNightTimeMode = function() {
    console.log(self.enabled);
    if (self.enabled) {
      $document[0].body.classList.add('wfm-night');
    } else {
      $document[0].body.classList.remove('wfm-night');
    }
  }
})
;
