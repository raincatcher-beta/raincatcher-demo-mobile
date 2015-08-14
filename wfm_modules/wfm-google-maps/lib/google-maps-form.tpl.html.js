var ngModule;
try {
  ngModule = angular.module('wfm.google-maps');
} catch (e) {
  ngModule = angular.module('wfm.google-maps', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/google-maps-form.tpl.html',
    '<div class="panel panel-default">\n' +
    '  <div class="panel-heading"><h3>Location</h3></div>\n' +
    '  <div class="panel-body">\n' +
    '    <dl class="dl-horizontal">\n' +
    '      <dt>Longitude</dt>\n' +
    '      <dd>{{ctrl.map.center.longitude}}</dd>\n' +
    '      <dt>Latitude</dt>\n' +
    '      <dd>{{ctrl.map.center.latitude}}</dd>\n' +
    '    </dl>\n' +
    '    <ui-gmap-google-map center=\'ctrl.map.center\' zoom=\'ctrl.map.zoom\'>\n' +
    '      <ui-gmap-marker coords=\'ctrl.marker.coords\' idKey="ctrl.marker.id"></ui-gmap-marker>\n' +
    '    </ui-gmap-google-map>\n' +
    '    <br>\n' +
    '    <button  class="btn btn-primary" ng-click="ctrl.next(ctrl.map.center)">Next</button>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
