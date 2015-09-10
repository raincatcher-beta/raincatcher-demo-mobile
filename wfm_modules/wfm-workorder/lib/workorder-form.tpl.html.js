var ngModule;
try {
  ngModule = angular.module('wfm.workorder');
} catch (e) {
  ngModule = angular.module('wfm.workorder', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder-form.tpl.html',
    '<div class="panel panel-default">\n' +
    '  <div class="panel-heading"><h3>Work order</h3></div>\n' +
    '  <div class="panel-body">\n' +
    '    <form class="form-horizontal" name="workorderForm" ng-submit="ctrl.done(workorderForm.$valid)" novalidate>\n' +
    '      <div class="form-group">\n' +
    '        <label for="workorderId" class="col-sm-2 control-label">Workorder ID</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="text" class="form-control" id="inputWorkorderId" name="workorderId" ng-model="ctrl.model.id" disabled="true">\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group">\n' +
    '        <label for="workorderType" class="col-sm-2 control-label">Workorder Type</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="text" class="form-control" id="inputWorkorderType" name="workorderType" ng-model="ctrl.model.type" disabled="true">\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group" ng-class="{ \'has-error\' : workorderForm.title.$invalid && !workorderForm.title.$pristine }">\n' +
    '        <label for="inputTitle" class="col-sm-2 control-label">Title</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="text" class="form-control" id="inputTitle" name="title" placeholder="Title" ng-model="ctrl.model.title" required>\n' +
    '          <p ng-show="workorderForm.title.$invalid && !workorderForm.title.$pristine" class="help-block">A title is required.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group" ng-class="{ \'has-error\' : workorderForm.address.$invalid && !workorderForm.address.$pristine }">\n' +
    '        <label for="inputAddress" class="col-sm-2 control-label">Address</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="text" class="form-control" id="inputAddress" name="address" placeholder="Address" ng-model="ctrl.model.address" required>\n' +
    '          <p ng-show="addressForm.address.$invalid && !addressForm.address.$pristine" class="help-block">An address is required.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group" ng-class="{ \'has-error\' : workorderForm.finishDate.$invalid && !workorderForm.finishDate.$pristine }">\n' +
    '        <label for="inputFinishDate" class="col-sm-2 control-label">Finish Date</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="date" class="form-control" id="inputFinishDate" name="finishDate" ng-model="ctrl.model.finishDate" required>\n' +
    '          <p ng-show="workorderForm.finishDate.$invalid && !workorderForm.finishDate.$pristine" class="help-block">A finish date is required.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group" ng-class="{ \'has-error\' : workorderForm.finishTime.$invalid && !workorderForm.finishTime.$pristine }">\n' +
    '        <label for="inputFinishTime" class="col-sm-2 control-label">Finish Time</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="time" class="form-control" id="inputFinishTime" name="finishTime" ng-model="ctrl.model.finishTime" required>\n' +
    '          <p ng-show="workorderForm.finishTime.$invalid && !workorderForm.finishTime.$pristine" class="help-block">A finish time is required.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="form-group" ng-class="{ \'has-error\' : workorderForm.summary.$invalid && !workorderForm.summary.$pristine }">\n' +
    '        <label for="inputSummary" class="col-sm-2 control-label">City</label>\n' +
    '        <div class="col-sm-10">\n' +
    '          <input type="text" class="form-control" id="inputSummary" name="summary" placeholder="City" ng-model="ctrl.model.summary" required>\n' +
    '          <p ng-show="workorderForm.city.$invalid && !workorderForm.city.$pristine" class="help-block">A summary is required.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <button type="submit" class="btn btn-primary" ng-disabled="workorderForm.$invalid">Save Workorder</button>\n' +
    '    </form>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
