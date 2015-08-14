var ngModule;
try {
  ngModule = angular.module('wfm.workorder');
} catch (e) {
  ngModule = angular.module('wfm.workorder', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder-list-item.tpl.html',
    '<span class="workorder-list-item" on-touch="ctrl.selectWorkorder($event, ctrl.workorder)">\n' +
    '  <div class="item-icon-left">\n' +
    '    <i class="icon {{ctrl.statusIcon}} workorder-list-item-icon"></i>\n' +
    '    <span class="workorder-list-item-status">{{ctrl.workorder.status}}</span>\n' +
    '    <span class="workorder-list-item-title">{{ctrl.workorder.title}}</span>\n' +
    '    -\n' +
    '    <span class="workorder-list-item-id">{{ctrl.workorder.id}}</span>\n' +
    '  </div>\n' +
    '  <div class="item-icon-right">\n' +
    '    <i class="icon ion-ios-arrow-right"></i>\n' +
    '  </div>\n' +
    '</span>\n' +
    '');
}]);
