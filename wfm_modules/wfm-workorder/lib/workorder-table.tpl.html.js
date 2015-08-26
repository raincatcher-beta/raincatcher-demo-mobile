var ngModule;
try {
  ngModule = angular.module('wfm.workorder');
} catch (e) {
  ngModule = angular.module('wfm.workorder', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder-table.tpl.html',
    '<div class="panel panel-default">\n' +
    '  <div class="panel-heading"><h3>Work orders:</h3></div>\n' +
    '  <div class="panel-body">\n' +
    '    <h4>Workorders pulled from an external database</h4>\n' +
    '  </div>\n' +
    '\n' +
    '  <!-- Table -->\n' +
    '  <table class="table">\n' +
    '    <tr ng-repeat="workorder in list" ng-click="ctrl.selectWorkorder($event, workorder)" style="cursor: pointer">\n' +
    '      <td><a href="#">{{workorder.type}} - {{workorder.id}}</a></td>\n' +
    '      <td><a href="#">{{workorder.title}}</a></td>\n' +
    '    </tr>\n' +
    '  </table>\n' +
    '</div>\n' +
    '');
}]);
