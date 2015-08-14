var ngModule;
try {
  ngModule = angular.module('wfm.address');
} catch (e) {
  ngModule = angular.module('wfm.address', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/address-view.tpl.html',
    '<div class="panel panel-default">\n' +
    '  <div class="panel-heading"><h3>Address</h3></div>\n' +
    '  <div class="panel-body">\n' +
    '    <dl class="dl-horizontal">\n' +
    '      <dt>Address</dt>\n' +
    '      <dd>{{address.address}}</dd>\n' +
    '      <dt>City</dt>\n' +
    '      <dd>{{address.city}}</dd>\n' +
    '      <dt>State</dt>\n' +
    '      <dd>{{address.state}}</dd>\n' +
    '    </dl>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
