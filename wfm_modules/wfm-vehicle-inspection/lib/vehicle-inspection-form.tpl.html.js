var ngModule;
try {
  ngModule = angular.module('wfm.workorder');
} catch (e) {
  ngModule = angular.module('wfm.workorder', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/vehicle-inspection-form.tpl.html',
    '<div class="vehicle-inspection">\n' +
    '  <ion-toggle ng-model="ctrl.model.fuel" toggle-class="toggle-calm">\n' +
    '    <i class="icon ion-waterdrop"></i>\n' +
    '    Fuel\n' +
    '  </ion-toggle>\n' +
    '  <ion-toggle ng-model="ctrl.model.tires" toggle-class="toggle-calm">\n' +
    '    <i class="icon ion-disc"></i>\n' +
    '    Tires\n' +
    '  </ion-toggle>\n' +
    '  <ion-item>\n' +
    '    <button class="button button-positive button-full" on-touch="ctrl.done()">Submit</button>\n' +
    '  </ion-item>\n' +
    '</div>\n' +
    '');
}]);
