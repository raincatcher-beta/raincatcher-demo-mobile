var ngModule;
try {
  ngModule = angular.module('wfm.google-maps');
} catch (e) {
  ngModule = angular.module('wfm.google-maps', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/google-maps-view.tpl.html',
    '<div class="panel panel-default">\n' +
    '  <div class="panel-heading"><h3>Location</h3></div>\n' +
    '  <div class="panel-body">\n' +
    '    <dl class="dl-horizontal">\n' +
    '      <dt>Longitude</dt>\n' +
    '      <dd>{{coords.longitude}}</dd>\n' +
    '      <dt>Latitude</dt>\n' +
    '      <dd>{{coords.latitude}}</dd>\n' +
    '    </dl>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
