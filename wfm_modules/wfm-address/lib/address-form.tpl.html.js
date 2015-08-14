var ngModule;
try {
  ngModule = angular.module('wfm.address');
} catch (e) {
  ngModule = angular.module('wfm.address', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/address-form.tpl.html',
    '<div class="panel panel-default">\n' +
    '  <div class="panel-heading"><h3>Address</h3></div>\n' +
    '  <div class="panel-body">\n' +
    '    <form class="form-horizontal" name="addressForm" ng-submit="ctrl.next(addressForm.$valid)" novalidate>\n' +
    '      <div class="form-group" ng-class="{ \'has-error\' : addressForm.address.$invalid && !addressForm.address.$pristine }">\n' +
    '        <label for="inputAddress" class="col-sm-2 control-label">Address</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="text" class="form-control" id="inputAddress" name="address" placeholder="Address" ng-model="ctrl.address.address" required>\n' +
    '          <p ng-show="addressForm.address.$invalid && !addressForm.address.$pristine" class="help-block">Your address is required.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group" ng-class="{ \'has-error\' : addressForm.city.$invalid && !addressForm.city.$pristine }">\n' +
    '        <label for="inputCity" class="col-sm-2 control-label">City</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="text" class="form-control" id="inputCity" name="city" placeholder="City" ng-model="ctrl.address.city" required>\n' +
    '          <p ng-show="addressForm.city.$invalid && !addressForm.city.$pristine" class="help-block">Your city is required.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group" ng-class="{ \'has-error\' : addressForm.state.$invalid && !addressForm.state.$pristine }">\n' +
    '        <label for="inputState" class="col-sm-2 control-label">State/Province</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="text" class="form-control" id="inputState" name="state" placeholder="State" ng-model="ctrl.address.state" required>\n' +
    '          <p ng-show="addressForm.state.$invalid && !addressForm.state.$pristine" class="help-block">Your state is required.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <button type="submit" class="btn btn-primary" ng-disabled="addressForm.$invalid">Next</button>\n' +
    '    </form>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
