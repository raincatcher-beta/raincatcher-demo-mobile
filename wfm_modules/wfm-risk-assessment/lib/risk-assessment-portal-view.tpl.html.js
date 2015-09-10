var ngModule;
try {
  ngModule = angular.module('wfm.risk-assessment');
} catch (e) {
  ngModule = angular.module('wfm.risk-assessment', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/risk-assessment-portal-view.tpl.html',
    '<div class="panel panel-default risk-assessment">\n' +
    '  <div class="panel-heading"><h3>Risk Assessment</h3></div>\n' +
    '  <div class="panel-body">\n' +
    '    <div>\n' +
    '      Risk Assessment complete:\n' +
    '      <i class="fa fa-check" ng-show="riskAssessment.complete"></i>\n' +
    '      <i class="pficon pficon-close" ng-show="! riskAssessment.complete"></i>\n' +
    '    </div>\n' +
    '    <div>\n' +
    '      Signature: <br/>\n' +
    '      <img src="{{riskAssessment.signature}}"></img>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
