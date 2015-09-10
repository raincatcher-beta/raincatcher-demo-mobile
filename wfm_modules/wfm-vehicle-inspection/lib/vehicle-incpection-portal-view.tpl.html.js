var ngModule;
try {
  ngModule = angular.module('wfm.workorder');
} catch (e) {
  ngModule = angular.module('wfm.workorder', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/vehicle-incpection-portal-view.tpl.html',
    '<div class="panel panel-default vehicle-inspection-portal">\n' +
    '  <div class="panel-heading"><h3>Vehicle Inspection</h3></div>\n' +
    '  <div class="panel-body">\n' +
    '    <dl class="dl-horizontal">\n' +
    '      <dt>\n' +
    '        <i class="fa fa-wrench"></i>\n' +
    '        Fuel\n' +
    '      </dt>\n' +
    '      <dd>\n' +
    '        <i class="fa fa-check" ng-show="vehicleInspection.tires"></i>\n' +
    '        <i class="pficon pficon-close" ng-show="! vehicleInspection.tires"></i>\n' +
    '      </dd>\n' +
    '      <dt>\n' +
    '        <i class="fa fa-dot-circle-o"></i>\n' +
    '        Wheels\n' +
    '      </dt>\n' +
    '      <dd>\n' +
    '        <i class="fa fa-check" ng-show="vehicleInspection.tires"></i>\n' +
    '        <i class="pficon pficon-close" ng-show="! vehicleInspection.tires"></i>\n' +
    '      </dd>\n' +
    '    </dl>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
