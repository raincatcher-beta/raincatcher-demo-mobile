var ngModule;
try {
  ngModule = angular.module('wfm.workorder');
} catch (e) {
  ngModule = angular.module('wfm.workorder', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/vehicle-inspection.tpl.html',
    '<div class="vehicle-inspection">\n' +
    '  <ion-item class="item-divider">\n' +
    '    Vehicle Inspection\n' +
    '  </ion-item>\n' +
    '  <ion-item>\n' +
    '    <div class="item-icon-left">\n' +
    '      <i class="icon ion-waterdrop"></i>\n' +
    '      Fuel\n' +
    '    </div>\n' +
    '    <div class="item-icon-right">\n' +
    '      <i class="icon ion-checkmark" ng-show="vehicleInspection.fuel"></i>\n' +
    '      <i class="icon ion-close" ng-show="! vehicleInspection.fuel"></i>\n' +
    '    </div>\n' +
    '  </ion-item>\n' +
    '  <ion-item>\n' +
    '    <div class="item-icon-left">\n' +
    '      <i class="icon ion-disc"></i>\n' +
    '      Tires\n' +
    '    </div>\n' +
    '    <div class="item-icon-right">\n' +
    '      <i class="icon ion-checkmark" ng-show="vehicleInspection.tires"></i>\n' +
    '      <i class="icon ion-close" ng-show="! vehicleInspection.tires"></i>\n' +
    '    </div>\n' +
    '  </ion-item>\n' +
    '</div>\n' +
    '');
}]);
