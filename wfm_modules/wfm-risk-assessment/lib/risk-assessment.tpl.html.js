var ngModule;
try {
  ngModule = angular.module('wfm.risk-assessment');
} catch (e) {
  ngModule = angular.module('wfm.risk-assessment', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/risk-assessment.tpl.html',
    '<div class="risk-assessment">\n' +
    '  <ion-item class="item-divider">\n' +
    '    Risk Assessment\n' +
    '  </ion-item>\n' +
    '  <ion-item>\n' +
    '    <div class="item-icon-left">\n' +
    '      <i class="icon ion-alert-circled"></i>\n' +
    '      Risk Assessment complete\n' +
    '    </div>\n' +
    '    <div class="item-icon-right">\n' +
    '      <i class="icon ion-checkmark" ng-show="riskAssessment.complete"></i>\n' +
    '      <i class="icon ion-close" ng-show="! riskAssessment.complete"></i>\n' +
    '    </div>\n' +
    '  </ion-item>\n' +
    '  <ion-item class="item-icon-left">\n' +
    '    <i class="icon ion-edit"></i>\n' +
    '    Signature\n' +
    '  </ion-item>\n' +
    '  <ion-item>\n' +
    '    <img src="{{riskAssessment.signature}}"></img>\n' +
    '  </ion-item>\n' +
    '</div>\n' +
    '');
}]);
