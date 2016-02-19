/**
* CONFIDENTIAL
* Copyright 2016 Red Hat, Inc. and/or its affiliates.
* This is unpublished proprietary source code of Red Hat.
**/
'use strict';

module.exports = 'wfm-mobile.map';

angular.module('wfm-mobile.map', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.map', {
      url: '/map',
      resolve: {
        workorders: function(workorderManager) {
          return workorderManager.list();
        }
      },
      templateUrl: 'app/map/map.tpl.html',
      controller: 'MapCtrl as ctrl',
    })
})

.controller('MapCtrl', function ($window, $document, $timeout, workorders) {
  this.center = [49.28, -123.12];
  this.workorders = workorders;
})

;
