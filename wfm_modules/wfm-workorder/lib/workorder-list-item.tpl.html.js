var ngModule;
try {
  ngModule = angular.module('wfm.workorder');
} catch (e) {
  ngModule = angular.module('wfm.workorder', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder-list-item.tpl.html',
    '<div class="workorder-item-details">\n' +
    '<ion-item class="work-location item-icon-left">\n' +
    '  <i class="icon ion-location"></i>\n' +
    '  {{workorder.address}}\n' +
    '</ion-item>\n' +
    '<ion-item class="work-title item-icon-left">\n' +
    '  <i class="icon ion-ios-gear-outline"></i>\n' +
    '  {{workorder.title}}\n' +
    '</ion-item>\n' +
    '<ion-item class="target-finish item-icon-left">\n' +
    '  <i class="icon ion-android-watch"></i>\n' +
    '  <dl>\n' +
    '    <dt>Target Finish Date:</dt>\n' +
    '    <dd>{{workorder.finishTimestamp | date:\'yyyy-MM-dd\' }}\n' +
    '    <dt>Target Finish Time:</dt>\n' +
    '    <dd>{{workorder.finishTimestamp | date:\'HH:mm:ss Z\' }}\n' +
    '  </dl>\n' +
    '</ion-item>\n' +
    '<ion-item class="work-summary">\n' +
    '  <div class="panel panel-default">\n' +
    '    <div class="panel-heading heading"><h3>Work Summary</h3></div>\n' +
    '    <div class="panel-body">\n' +
    '      {{workorder.summary}}\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <button class="button button-block button-dark"\n' +
    '          on-touch="ctrl.selectWorkorder($event, workorder)"\n' +
    '          ng-show="ctrl.showSelectButton">\n' +
    '    Select Workorder\n' +
    '  </button>\n' +
    '</ion-item>\n' +
    '</div>\n' +
    '');
}]);
