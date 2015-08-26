'use strict';

var _ = require('lodash');
window._ = _;
require('angular-google-maps');

var ngModule = angular.module('wfm.google-maps', ['wfm.core.mediator', 'uiGmapgoogle-maps']);

require('./lib');

ngModule.directive('googleMapsForm', function($templateCache, Mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/google-maps-form.tpl.html')
  , scope: {
      value: '=value'
  }
  , controller: function($scope) {
      $scope.$parent.$on('$viewContentLoaded', function () {
        document.querySelector('.angular-google-map-container').style.height = '400px';
      });
      var self = this;
      self.coords = $scope.coords ? angular.copy($scope.coords) : { latitude: 45, longitude: -73 };
      self.map = { center: self.coords, zoom: 8 };
      self.marker = {id: 'marker', coords: self.coords};
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
        var coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        $scope.$apply(function() {
          self.map = {center: coords, zoom: 16};
          self.marker.coords = coords;
        });
      })
      self.next = function(coords) {
        console.log('coords', coords);
        Mediator.publish('workflow:google-maps:next', self, coords);
      }
    }
  , controllerAs: 'ctrl'
  }
})

.directive('googleMaps', function($templateCache, Mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/google-maps-view.tpl.html')
  , scope: {
      coords: '=coords'
  }
  , controllerAs: 'ctrl'
  }
})
;
;

module.exports = 'wfm.google-maps';
