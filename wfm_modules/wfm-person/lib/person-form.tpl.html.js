var ngModule;
try {
  ngModule = angular.module('wfm.person');
} catch (e) {
  ngModule = angular.module('wfm.person', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/person-form.tpl.html',
    '<div class="panel panel-default">\n' +
    '  <div class="panel-heading"><h3>Person</h3></div>\n' +
    '  <div class="panel-body">\n' +
    '    <form class="form-horizontal" name="personForm" ng-submit="ctrl.next(personForm.$valid)" novalidate>\n' +
    '      <div class="form-group" ng-class="{ \'has-error\' : personForm.name.$invalid && !personForm.name.$pristine }">\n' +
    '        <label for="inputName" class="col-sm-2 control-label">Name</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="text" class="form-control" id="inputName" name="name" placeholder="Name" ng-model="ctrl.person.name" required>\n' +
    '          <p ng-show="personForm.name.$invalid && !personForm.name.$pristine" class="help-block">Your name is required.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group" ng-class="{ \'has-error\' : personForm.email.$invalid && !personForm.email.$pristine }">\n' +
    '        <label for="inputEmail" class="col-sm-2 control-label" name="email">Email</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="email" class="form-control" id="inputEmail" name="email" placeholder="Email" ng-model="ctrl.person.email" required>\n' +
    '          <p ng-show="personForm.email.$invalid && !personForm.email.$pristine" class="help-block">Enter a valid email.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <button type="submit" class="btn btn-primary" ng-disabled="personForm.$invalid">Next</button>\n' +
    '    </form>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
