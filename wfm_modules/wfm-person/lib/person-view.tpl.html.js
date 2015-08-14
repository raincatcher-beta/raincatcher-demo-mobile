var ngModule;
try {
  ngModule = angular.module('wfm.person');
} catch (e) {
  ngModule = angular.module('wfm.person', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/person-view.tpl.html',
    '<div class="panel panel-default">\n' +
    '  <div class="panel-heading"><h3>Person</h3></div>\n' +
    '  <div class="panel-body">\n' +
    '    <dl class="dl-horizontal">\n' +
    '      <dt>Name</dt>\n' +
    '      <dd>{{person.name}}</dd>\n' +
    '      <dt>Email</dt>\n' +
    '      <dd>{{person.email}}</dd>\n' +
    '    </dl>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
