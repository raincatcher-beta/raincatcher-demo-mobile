var ngModule;
try {
  ngModule = angular.module('wfm.workorder');
} catch (e) {
  ngModule = angular.module('wfm.workorder', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder-list.tpl.html',
    '<ion-list>\n' +
    '  <div ng-repeat="workorder in workorders">\n' +
    '    <ion-item class="item"\n' +
    '              ng-class="{active: ctrl.isWorkorderShown(workorder)}"\n' +
    '              on-touch="ctrl.toggleWorkorder($event, workorder)">\n' +
    '      <span class="workorder-list-item">\n' +
    '        <div class="item-icon-left">\n' +
    '          <i class="icon {{ctrl.getStatusIcon(workorder)}} workorder-list-item-icon"></i>\n' +
    '          <span class="workorder-list-item-status">{{workorder.status}}</span>\n' +
    '          <span class="workorder-list-item-type">{{workorder.type}}</span>\n' +
    '          -\n' +
    '          <span class="workorder-list-item-id">{{workorder.id}}</span>\n' +
    '        </div>\n' +
    '        <div class="item-icon-right">\n' +
    '          <i class="icon" ng-class="ctrl.isWorkorderShown(workorder) ? \'ion-ios-minus-empty\' : \'ion-ios-plus-empty\'"></i>\n' +
    '        </div>\n' +
    '      </span>\n' +
    '    </ion-item>\n' +
    '    <div class="workorder-list-item-details"\n' +
    '         ng-show="ctrl.isWorkorderShown(workorder)">\n' +
    '         <workorder-list-item workorder="workorder"></workorder-list-item>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</ion-list>\n' +
    '');
}]);
