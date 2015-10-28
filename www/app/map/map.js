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
        templateUrl: 'app/map/map.tpl.html',
        controller: 'MapCtrl as ctrl',
      })
})

.controller('MapCtrl', function() {
})
;
