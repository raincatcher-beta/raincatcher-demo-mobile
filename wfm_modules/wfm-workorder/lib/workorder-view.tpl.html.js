var ngModule;
try {
  ngModule = angular.module('wfm.workorder');
} catch (e) {
  ngModule = angular.module('wfm.workorder', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder-view.tpl.html',
    '<div class="panel panel-default">\n' +
    '  <div class="panel-heading"><h3>Work order</h3></div>\n' +
    '  <div class="panel-body">\n' +
    '    <dl class="dl-horizontal">\n' +
    '      <dt>Work order ID</dt>\n' +
    '      <dd>{{workorder.id}}</dd>\n' +
    '      <dt>Type</dt>\n' +
    '      <dd>{{workorder.type}}</dd>\n' +
    '      <dt>Title</dt>\n' +
    '      <dd>{{workorder.title}}</dd>\n' +
    '      <dt>Location</dt>\n' +
    '      <dd>{{workorder.address}}</dd>\n' +
    '      <dt>Summary</dt>\n' +
    '      <dd>{{workorder.summary}}</dd>\n' +
    '    </dl>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
